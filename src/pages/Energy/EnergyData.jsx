import { useEffect } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"


const EnergyData = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect(() => {
        makeRequest("https://api.energidataservice.dk/dataset/CO2Emis?start=StartOfYear&end=now&limit=22", "GET")
    }, [])

    
    return (
        <section className="p-28">
            <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
                Denmark Energy Data
            </h1>

            {/* Loading & Error States */}
            {isLoading && (
                <Loader />
            )}
            {error && (
                <Loader />
            )}

            



    {data && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {data.records.map((record, index) => (
                <div
                key={index}
                className="rounded-2xl p-6 border border-white hover:border-green-400 transition-all hover:-translate-y-1"
            >
                <h2 className="text-xl font-semibold text-white mb-3 hover:underline">
                    {record.PriceArea}
                </h2>

                <ul className="text-white space-y-1 opacity-90">
                    <li>Time: {record.Minutes5DK}</li>
                    <li>CO2 Emission: {record.CO2Emission}</li>

                    <li>price: {record.PriceArea}</li>
                </ul>
            </div>
            ))}
            </div>
        )}


        </section>
    )
}

export default EnergyData