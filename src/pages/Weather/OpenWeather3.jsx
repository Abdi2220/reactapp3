import { useEffect, useState } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"



const OpenWeather3 = () => {

   // New wather the first one  vejr/weather
  const { makeRequest, isLoading, data, error } = useRequestData()

  // open weather 3 DWA postnummeropslag/bynavn    
  const { makeRequest:makeRequestDAWA, isLoading:isLoadingDAWA, data:dataDAWA, error:errorDAWA } = useRequestData()


  const [zip, setZip] = useState(8240)
  const [formIsValid, setFormIsValid] = useState(true)

  useEffect(() => {
    if (formIsValid && zip) {
      makeRequest("https://api.openweathermap.org/data/2.5/weather", "GET", {
        params: {
          appid: import.meta.env.VITE_APP_OPENWEATHERKEY,
          zip: `${zip},dk`,
          units: "metric",
          lang: "da",
        },
      })
    }
    else{
      makeRequestDAWA("https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip )
    }



  }, [zip])


  return (
    <section className="pt-20 pb-8 px-8  min-h-screen">
      <h1 className="text-green-600 text-5xl mb-10 text-center">
        OpenWeather 3 / Current Weather
        <span className="block text-lg text-gray-300">
          vejrdata ex 3 - med forslag fra DWA
        </span>
      </h1>

      {/* Loading & Error States */}
      {isLoading || isLoadingDAWA && <Loader />}
      {error || errorDAWA && <p className="text-red-500">Der opstod en fejl. Prøv igen.</p>}


      <div className="flex justify-center mt-10"> 
        <div className="mr-10">
          <label className="block text-white mb-2 text-center">
            Indsæt postnummer
            <input
              type="text"
              list="zipcodes"
              placeholder="Skriv postnummer"
              required
              pattern="^\d{4}$"
              onChange={(e) => {
                setFormIsValid(e.target.checkValidity())
                setZip(e.target.value)
              }}
              className="ml-2 rounded border border-gray-300 bg-white py-2 px-3 text-black text-center"
            />
          </label>

          <datalist id="zipcodes"> 
            {dataDAWA && dataDAWA.map(p => (


            <option key={p.postnummer.nr} value={p.postnummer.nr}>{p.postnr}
             {p.tekst}
            </option>
          ))}
            {/* <option value="8000">8000 Aarhus C</option> */}
          </datalist>

        </div>

        {
          data &&

          data.weather && data.main && (

            <div className="grid grid-cols-1 gap-4 p-8 m-10 text-2xl text-white bg-gray-900/90 w-fit text-center rounded-3xl shadow-2xl backdrop-blur-md border border-gray-700 hover:shadow-gray-700/50 transition-all duration-300">
              <h2>Vejret i {data.name} lige nu</h2>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="vejrikon"
              />
              <h3>Dagens vejr: {data.weather[0].description}</h3>
              <p>Temperatur lige nu: {Math.round(data.main.temp)}°C</p>
              <p >Vindhastighed: {Math.round(data.wind.speed)} m/s</p>
              <p>Vindretning: {data.wind.deg}°</p>

              <p className="text-amber-300 font-medium">Solopgang: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
              <p className="text-orange-400 font-medium">Solnedgang: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          )}
      </div>
    </section>
  )


}

export default OpenWeather3