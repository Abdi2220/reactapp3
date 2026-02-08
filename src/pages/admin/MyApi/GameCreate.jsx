import { useEffect, useRef } from "react";
import Loader from "../../../components/Loader";
import Error from '../../../components/Error';


import useRequestData from '../../../hooks/userRequestData';



// post opret ny game
const GameCreate = () => {

  const formRef = useRef()

    // post til API e.target er formdata = formuerns indhold
  const { makeRequest, isLoading, data, error } = useRequestData();


  // hvis er er data = det er gået godt/ny game er oprettet = tøm formulern 
   useEffect(() => {

    if(data) {
      //document.querySelector("form").reset()
      formRef.current.reset()

    }
      
   }, [data])   // lyt efter data = det er gået godt
   


  const handleSubmit = (e) => {

    e.preventDefault() // forhinderer combonet/side  reload || prevents combonent/page reload
   // alert("Der er klikket på submit")

    // POST TIL API

    makeRequest("http://localhost:5099/games", "POST", {body: e.target});

   // e.target.reset()      // not working 

  }





  return (
    <section className='container text-white'>

      <title>Admin - game </title>
      <h1 className='text-4xl'>opret nyt citat </h1>

      
      {isLoading && <Loader/>}
      {error && <Error/>}
      {data && <h2 className="text-2xl text-green-700 bg-white/20 p-10 mt-10 rounded">{data.message}</h2>}



      <form onSubmit={handleSubmit} ref={formRef} className='flex flex-col gap-6'>

        <label className='flex flex-col gap-2 mt-6'>
          Game tekst *:
          <input
            type="text" required placeholder='udfyld citat her ..........' className='border border-gray-400 rounded p-2 bg-transparent' />

        </label>

        <label className='flex flex-col gap-2'>
          Game:
          <input
            type="text" name="game" placeholder='udfyld description her ..........' className='border border-gray-400 rounded p-2 bg-transparent' />

        </label>

        <label className='flex flex-col gap-2'>
          Description:
          <input
            type="text" name="description" placeholder='udfyld description her ..........' className='border border-gray-400 rounded p-2 bg-transparent' />

        </label>

        <label className='flex flex-col gap-2'>
          Vælg et billede:
          <input
            type="file" name="gameImage"
            className='border  border-gray-400 rounded p-2 bg-transparent'
          />
        </label>

        <label className=' gap-2'>
          Vælg et start-rating:
          <input
            type="number" min="1" max="5" step="1" name="rating"
            className='border border-gray-400 rounded p-2 bg-transparent'
          />
        </label>

        <button
          type="submit"
          className='bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-4 rounded w-fit'
        >
          opret citat
        </button>

      </form>


    </section>
  )
}

export default GameCreate