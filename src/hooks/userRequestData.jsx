import axios from 'axios'
import { useState } from 'react'

const useRequestData = () => {

    const [isLoading, setItsLoading] = useState(false)  // waiting for data from the API   - true or false 
    const [data, setData] = useState(null)  // data fra api-kald
    const [error, setError] = useState(null)

    // function som sætter det hele i gang

    const makeRequest = async (url, method="GET", options = {}) => {
        //ring api op med url, parameter osv
        // håndtre loading, data og error


        // destructure options
        const {body=null, headers = {}, params = {}, apikey = null} = options

        // i gang

        setItsLoading(true)
        setError(false)

        await new Promise ( resolve => setTimeout(resolve, 2000))      // makes it load 
    
        // Tilføj API-key/token  = "Authorization - Bearer"
        const combineHeaders = {...headers}

        try {
            // info til API-kald/request
            const config = {
                method,
                url,
                headers: combineHeaders,
                params,
                data: body   // post put patch
            }

            // kald api-data
            const response = await axios(config)

            // 

            setData(response.data)

            

        } catch (err) {

            console.error("API Fejl:", err)
            setError(true)  // det er en fejl
            setData(null)  // tøm (Gamle) data - ingen data når der er error
            
        } finally{
            setItsLoading(false)
        }



    }

    return {makeRequest, data, isLoading, error}
}

export default useRequestData 