import React from 'react'

const DawaMap = () => {


  const { makeRequest, isLoading, data, error } = useRequestData()
   const [zip, setZip] = useState(8240)
   const [formIsValid, setFormIsValid] = useState(true)


    useEffect(() => {
           if (formIsValid && zip) {
               makeRequest("https://api.openweathermap.org/data/2.5/weather", "GET", {
                   params: {
                       appid: import.meta.env.VITE_APP_OPENWEATHERKEY,
                       zip: `${zip},dk`,
                       units: "metric",
                       lang: "da",
                   },
               })
           }
           else {
               makeRequestDAWA("https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip)
           }
   
   
   
       }, [zip])
   
   
  

  return (
    <div>DawaMap</div>
  )
}

export default DawaMap