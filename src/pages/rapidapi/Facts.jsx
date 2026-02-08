import { useEffect } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"

const Facts = () => {
  const { makeRequest, isLoading, data, error } = useRequestData()

  useEffect(() => {
    makeRequest("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", "GET", {
      headers: {
        "x-rapidapi-key": "e485b11bc4mshf20ae7e8d0ea1d3p1273dajsn7bd130ff5c8c",
        "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com"
      }
    })
  }, [])

  const handleRequest = () => {
    makeRequest("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", "GET", {
      headers: {
        "x-rapidapi-key": "e485b11bc4mshf20ae7e8d0ea1d3p1273dajsn7bd130ff5c8c",
        "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com"
      }
    })
  }

  return (
    <section className="p-28">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Check facts
      </h1>

      {/* Loading & Error States */}
      {isLoading && <Loader />}
      {error && <p className="text-red-500 text-center">Noget gik galt...</p>}

   
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.map((fact, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 border border-white hover:border-green-400 transition-all hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-white mb-3">
                {fact.fact}
              </h2>

              <button
                onClick={handleRequest}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Give me more facts
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Facts
