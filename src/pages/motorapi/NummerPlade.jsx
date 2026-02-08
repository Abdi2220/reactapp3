import { useState } from "react"

import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"



const Nummerplade = () => {
  const { makeRequest, isLoading, data, error } = useRequestData()
  const [plate, setPlate] = useState("")





  const handleSearch = (e) => {
    e.preventDefault()
    if (!plate.trim()) return

    makeRequest(`https://v1.motorapi.dk/vehicles/${plate}`, "GET", {
      headers: {
        "X-AUTH-TOKEN": import.meta.env.VITE_MOTORAPI_KEY2,
      },
    })
  }


  
    return (
      <section className="p-28">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
          Tjek nummerplade
        </h1>

         {/* Loading and error states */}
         {isLoading && <Loader />}
        {error && (
          <p className="text-red-500 text-center font-semibold">
            Noget gik galt: {error.message || "Kunne ikke hente data"}
          </p>
        )}
  
        {/* Input form */}
        <form onSubmit={handleSearch} className="flex justify-center mb-10 space-x-3 ">
          <label>

            Nummerplade

            <input
              type="text"
              value={plate}
              onChange={(e) => setPlate(e.target.value.toUpperCase())}
              placeholder="nummerplade"
              className="ml-3 p-2 border rounded text-black bg-white"
            />
          </label>


          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded font-bold"
          >
            Søg
          </button>
        </form>
  

        {data && (
        <div className="max-w-md mx-auto bg-gray-900/90 shadow rounded-xl p-6 text-white">
            <h2 className="text-3xl font-bold mb-3">{data.registration_number}</h2>
            <p>Car: {data.make}</p>
            <p>Type: {data.type}</p>
            <p>Fuel-type: {data.fuel_type}</p>
             <p>Car-status: {data.status}</p>
            <p>Id: {data.vehicle_id}</p>

            <p>engine_volume: {data.engine_volume}</p>
            
        </div>
     )}

      </section>
    )
  }
  
  export default Nummerplade