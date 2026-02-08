import { useState, useEffect } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"

const LoveCalc = () => {
  const { makeRequest, isLoading, data, error } = useRequestData()
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  // Optional: initial test on load
  useEffect(() => {
    const url = `https://love-o-meter.p.rapidapi.com/getmatch?firstname=Kaj&secondname=Andrea`
    makeRequest(url, "GET", {
      headers: {
        "x-rapidapi-key": "e485b11bc4mshf20ae7e8d0ea1d3p1273dajsn7bd130ff5c8c",
        "x-rapidapi-host": "love-o-meter.p.rapidapi.com"
      }
    })
  }, [])

  const handleRequest = () => {
    if (!firstName || !secondName) return alert("Please enter both names")
  
    makeRequest(
      `https://love-o-meter.p.rapidapi.com/getmatch?firstname=
      ${encodeURIComponent(firstName)}
      &secondname=
      
      ${encodeURIComponent(secondName)}`,
      "GET",
      {
        headers: {
          "x-rapidapi-key": "e485b11bc4mshf20ae7e8d0ea1d3p1273dajsn7bd130ff5c8c",
          "x-rapidapi-host": "love-o-meter.p.rapidapi.com"
        }
      }
    )
  }
  

  return (
    <section className="p-28">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Love Calculator
      </h1>

     {/* Loading & Error */}
      {isLoading && <Loader />}
      {error && <p className="text-red-500 text-center">Noget gik galt...</p>}

     

     
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Your name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full mb-3 p-3 border border-white rounded-lg text-white"
        />
        <input
          type="text"
          placeholder="name"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
          className="w-full mb-3 p-3 border border-white rounded-lg text-white"
        />
        <button
          onClick={handleRequest}
          className="w-full mt-2 px-4 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
        >
          Calculate Love
        </button>
      </div>

      

  
      {data && (
        <div className="rounded-2xl p-6 text-center border border-white hover:border-pink-400 transition-all hover:-translate-y-1">
          <h2 className="text-3xl font-semibold text-white mb-3">
            {data.percentage || data.match}% Match
          </h2>
          <p className="italic text-white">{data.result || data.message}</p>

          <button
            onClick={handleRequest}
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
          >
            Try Again
          </button>
        </div>
      )}
    </section>
  )
}

export default LoveCalc
