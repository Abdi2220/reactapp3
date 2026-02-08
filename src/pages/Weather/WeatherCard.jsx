import React from 'react'

const WeatherCard = ({data}) => {
  return (
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
  )
}

export default WeatherCard