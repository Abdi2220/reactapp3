import { useRef, useEffect } from 'react'
// leaflet map
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'


const LeafletMap = ({ lat, lon, zoom, weather = "Godt vejr!!!" }) => {

    const refMapContainer = useRef()
    const refMap = useRef()
    const refMarker = useRef() // refrence på markør på kortet 

    useEffect(() => {

        if (!refMap.current) {



            refMap.current = L.map(refMapContainer.current).setView([lat, lon], zoom);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(refMap.current);

            refMarker.current = L.marker([lat, lon])
                .addTo(refMap.current)
                .bindPopup(weather)
                .openPopup();
        }

        // cleanup function ryd up clean up

        return () => {
            if (refMap.current) {
                refMap.current.remove()
                refMap.current = null

            }
        }
    }, [])

    // hvis der er ændringer til lat lon mv:

    useEffect(() => {

        if (refMap.current) {
            refMap.current.setView([lat, lon], zoom)
            refMarker.current.setLatLng([lat, lon])
            refMarker.current.bindPopup(weather)

        }

    }, [lat, lon])






    return (
        <div ref={refMapContainer} className='w-full h-[600px]'>
           
        </div>
    )


}

export default LeafletMap