import { useEffect } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"


const MyApiEandom = () => {
  const { makeRequest, isLoading, data, error } = useRequestData()

  useEffect(() => {
    makeRequest("http://localhost:5099/games", "GET")
  }, [])


  const games = Array.isArray(data?.games) ? data.games : []

  return (
    <section className="p-28">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Games from API
      </h1>

      {/* Loading & Error States */}
      {isLoading && <Loader />}
      {error && <Loader />}

      {/* Data Grid */}

      
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

            {data && data.games.map((g) => (


              <div
                key={g._id}
                className="rounded-2xl p-6 border border-white hover:border-green-400 transition-all hover:-translate-y-1">

                <h2 className="text-xl font-semibold text-white mb-3 hover:underline">
                  {g.game}
                </h2>

                <ul className="text-white space-y-1 opacity-90">
                  <li>ID: {g.game}</li>
                  <li>Description:<br />{g.description}</li>
                  <li>Date: {new Date(g.date).toLocaleDateString()}</li>
                  <img src={"http://localhost:5099/images/"+ g.gameImage} alt="" />
                </ul>
              </div>
            
            ))}

          </div>
        
    </section>
  )
}

export default MyApiEandom
