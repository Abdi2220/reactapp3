import { useEffect, useState } from "react"
import useRequestData from "../../hooks/userRequestData"
import PostCard from "./PostCard"
import Loader from "../../components/Loader"

const Post = () => {
  const { makeRequest, isLoading, data, error } = useRequestData()

  // usestate til at huske pagination - hvilken side vi er nået til
  const [currentStartIndex, setCurrentStartIndex] = useState(0)
  const [itemsperpage, setItemPeroage] = useState(20)

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", "GET")
  }, [])

  return (
    <section className="p-28">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Se brugere fra JSONPlaceholder
      </h1>

      {/* Loading & Error States */}
      {isLoading && (
         <Loader />
      )}
      {error && (
        <Error />
      )}

      {/* Data Grid */}
      
        
        

          <div className="flex space-x-5 ">
            
             <button 
             onClick={() => setCurrentStartIndex(currentStartIndex - itemsperpage)}
             disabled={currentStartIndex <= 0}
             className="rounded bg-blue-500 px-4 py-2 font-bold text-white disabled:bg-gray-500 disabled:cursor-not-allowed">
             &larr;  Forrige
            </button>

              <label> vælg antal posts pr. side
                <select 
                onChange={(e) => setItemPeroage(e.target.value)}
                className="mt-1 rounded-md w-full border border-gray-600 bg-white text-gray-700 px-3 hover hover:to-blue-600">
                  
                  <option value="10">10</option>
                  <option value="120">20</option>
                  <option value="50">50</option>
                </select>
              </label>
            
            <button 
             onClick={() => setCurrentStartIndex(currentStartIndex - itemsperpage)}
             disabled={currentStartIndex <= 0}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white">
              &larr;   Næste
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

          { data && data.slice(currentStartIndex, currentStartIndex + itemsperpage ).map((p) => (

            <PostCard key={p.id} p={p}/>
            

            /*  <div
      key={p.id}
      className="rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow border border-white hover:border-green-400 hover:-translate-y-1"
    >
      <h2 className="text-xl font-semibold text-white mb-2 hover:underline">
        {p.title}
      </h2>

      <p className="text-white">{p.body}</p>

      <p className="text-sm text-gray-400 mt-4">User ID: {p.userId}</p>
    </div>*/
          )) }
        </div>
      
    </section>
  )
} 

export default Post
