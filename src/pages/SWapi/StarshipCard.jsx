import React from 'react'

const StarshipCard = ({s}) => {
  return (
    <div
    key={s.name}
    className="rounded-2xl p-6 border  border-2px border-white hover:border-blue-400 transition-all hover:-translate-y-1"
  >
    <h2 className="text-4xl my-4 text-blue-400">{s.name}</h2>
    <ul className='text-green-500'>
      <li>Length: {s.length}</li>
      <li>Model: {s.model}</li>
      <li>Manufacturer: {s.manufacturer}</li>
      <li>Cost_in_credits: {s.cost_in_credits}</li>

      <li>Created: {new Date (s.created).toLocaleString("da-dk",
         {year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"})}</li>

      <li>Edited: {new Date (s.edited).toLocaleString("da-dk",
         {year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"})}</li>
     
    </ul>
  </div>
  )
}

export default StarshipCard