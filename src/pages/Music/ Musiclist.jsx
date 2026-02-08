import { useEffect, useState } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"

const Musiclist = () => {
  const { makeRequest, isLoading, data, error } = useRequestData()
  const [currentPreview, setCurrentPreview] = useState(null)
  const [searchKey, setSearchKey] = useState("rap") // default search term

  // Fetch initial data on mount
  useEffect(() => {
    makeRequest(
      `https://itunes.apple.com/search?term=${searchKey}&media=music&limit=22`,
      "GET"
    )
  }, [])

  // Handle search form submit
  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchKey.trim()) return
    makeRequest(
      `https://itunes.apple.com/search?term=${searchKey}&media=music&limit=22`,
      "GET"
    )
  }    // https://itunes.apple.com/search?term=${searchKey}&media=music&limit=22

  return (
    <section className="p-28">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Songs - iTunes API
      </h1>

      {/* Search Form */}
      <div className="flex space-x-9 p-5 justify-center mb-10">
        <form onSubmit={handleSearch} className="flex items-center">
          <label className="text-white mr-2">
            Søg noget:
          </label>
          <input
            type="text"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder="Indtast søgeord"
            className="bg-white text-black text-center px-3 py-1 rounded"
          />
          <button
            type="submit"
            className="rounded bg-blue-900 px-4 py-2 font-bold text-white ml-4"
          >
            Søg
          </button>
        </form>
      </div>

      {/* Loading & Error */}
      {isLoading && <Loader />}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {/* Songs Grid */}
      {data && data.results && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.results.map((song) => (
            <div
              key={song.trackId}
              className="rounded-2xl p-6 border border-blue-400 hover:border-green-400 transition-all hover:-translate-y-1 cursor-pointer"
              onClick={() =>
                setCurrentPreview(
                  currentPreview === song.previewUrl ? null : song.previewUrl
                )
              }
            >
              <img
                src={song.artworkUrl100.replace("100x100", "600x600")}
                alt={song.trackName}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold">{song.trackName}</h2>
              <p className="text-gray-600">{song.artistName}</p>

              {currentPreview === song.previewUrl && (
                <audio
                  autoPlay
                  controls
                  src={song.previewUrl}
                  className="mt-4 w-full"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* No results message */}
      {data && data.results && data.results.length === 0 && (
        <p className="text-center text-white mt-4">Ingen sange fundet.</p>
      )}
    </section>
  )
}

export default Musiclist
