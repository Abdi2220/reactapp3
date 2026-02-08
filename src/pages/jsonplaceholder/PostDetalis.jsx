import { useEffect } from "react"
import useRequestData from "../../hooks/userRequestData"
import { Link, useParams } from "react-router"
import Error from "../../components/Error"
import Loader from "../../components/Loader"



const Postdetalis = () => {


    const {postId} = useParams() // snup id fra url'en (tjek i app.jsx)

    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect(() => {
        makeRequest("https://jsonplaceholder.typicode.com/posts/"+ postId, "GET")
      }, [])

  return (


    // skal hente data for den post der er killiket på fx id=2
    <div  className="rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow border border-white hover:border-green-400 hover:-translate-y-1">


    <h2 className="text-xl font-semibold text-white mb-2 hover:underline">
      Detaljer om udvalgt post
    </h2>
   
    <p>{postId}</p>


    {isLoading && (
         <Loader />
      )}
      {error && (
        <Error />
      )}

      {
        data &&  <div> 
            <h2>{data.title}</h2> 
            <p>{data.body}</p>
            </div>
      }

  
    <p>......</p>


    <Link to="/post">tilbage til oversigten</Link>
   
  </div>
  )
}

export default Postdetalis