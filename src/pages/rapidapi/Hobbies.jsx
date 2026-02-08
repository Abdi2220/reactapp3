import { useEffect } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"


const Hobbies = () => {
    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect(() => {
      makeRequest("https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies", "GET", {
        headers: {
          'x-rapidapi-key': '1063e99d5amsh915368ee88fabf3p1ad4bajsnd83977cb27f2',
          'x-rapidapi-host': 'hobbies-by-api-ninjas.p.rapidapi.com'
        },
      // params: {
           //category:'general' 
      // } 
        
      })
    }, [])


    const handelRequest = () => {

        makeRequest("https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies", "GET", {
            headers: {
                'x-rapidapi-key': '1063e99d5amsh915368ee88fabf3p1ad4bajsnd83977cb27f2',
                'x-rapidapi-host': 'hobbies-by-api-ninjas.p.rapidapi.com'
              }
           
          })
        
    }

   
  
  return (
    <section className="p-28">
    <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
       så få dig dog du en hobby!!!!
    </h1>

    {/* Loading & Error States */}
    {isLoading && (
     <Loader/>
    )}
    {error && (
     <Loader/>
    )}

 
    {
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {  data &&
          <div
           className="rounded-2xl p-6 border border-white hover:border-green-400 transition-all hover:-translate-y-1 ">
         
            <h2 className="text-xl font-semibold text-white mb-3 hover:underline">
              {data.hobby}
            </h2>
            <p>Kategori: {data.categori}</p>

            <p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                    læse mere om din nye hobby ➡️
                </a>
            </p>

            <button onClick={() => handelRequest()}>Nej tak giv mig en anden hobby</button>

           
          </div>
        }
      </div>
    }
  </section>
  )
}

export default Hobbies