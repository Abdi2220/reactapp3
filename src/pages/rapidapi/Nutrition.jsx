import { useEffect } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"


const Nutrition = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect(() => {
      makeRequest("https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition", "GET", {
        params: {
            query: '1lb brisket with fries'
          },
          headers: {
            'x-rapidapi-key': 'e485b11bc4mshf20ae7e8d0ea1d3p1273dajsn7bd130ff5c8c',
            'x-rapidapi-host': 'nutrition-by-api-ninjas.p.rapidapi.com'
          }
      // params: {
           //category:'general' 
      // } 
        
      })
    }, [])


    const handelRequest = () => {

        makeRequest("", "GET", {
            headers: {
                'x-rapidapi-key': 'e485b11bc4mshf20ae7e8d0ea1d3p1273dajsn7bd130ff5c8c',
                'x-rapidapi-host': 'nutrition-by-api-ninjas.p.rapidapi.com'
              }
           
          })
        
    }

  return (
    <div>Nutrition</div>
  )
}

export default Nutrition