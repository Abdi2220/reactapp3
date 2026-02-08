import React from 'react'
import { Link } from 'react-router'

const EveryCard = ({n}) => {
  return (
    <div
    
      className="rounded-2xl p-6 border border-blue-400 hover:border-green-400 transition-all hover:-translate-y-1 ">




<img src={n.urlToImage || "https://dummyimage.com/1280x720/fff/aaa"} alt={n.title ? "foto " + n.title : "News image"}
  className="w-full h-64 object-cover rounded-xl mb-4"
/>


     
                            
      <h2 className="text-4xl my-4"></h2>{n.title}
      <p>{n.description}...</p>


     {/*  <a href={n.url} target="_blank" className='inline-block text-white font-bold bg-black mt-5'></a>  */}


      <Link 
      to="/everyDetail"
      state={{newsdetails: n}}
      
      >
         læse detaljer
      </Link>
                    
        </div>

  )
}

export default EveryCard