import { useEffect } from "react";
import { Link } from "react-router";
import Loader from "../../../components/Loader";
import Error from '../../../components/Error';


import useRequestData from '../../../hooks/userRequestData';


const AdminGame = () => {


    // hen games efterfølgende ret/slet
    const { makeRequest, isLoading, data, error } = useRequestData();

    // til slet games 
    const { makeRequest:makeRequestDelete, isLoading:isLoadingDelete, data:dataDelete, error:errorDelete } = useRequestData();



    useEffect(() => {

        // hent alle games
        makeRequest("http://localhost:5099/games", "GET");


    }, [dataDelete]);


    const handleDelete = (gameId, gameString) => {

        // slet games

       // http://localhost:5099/games/690b46819aca6b89da48c478


       if(window.confirm("er du sikkre p¨at du vil gerne slette:" + gameString)) {
            // hvis true ok til at slette 
            makeRequestDelete("http://localhost:5099/games/" + gameId, "DELETE");
            //alert("slet denne id: " + gameId)
       }


    }



    return (
      <section>

      <title>ADMIN - Game</title>

         <h1 className="text-4xl my-10">ret/ slet games</h1>

         {(isLoading || isLoadingDelete)&& <Loader />}
         {(error || errorDelete) && <Error />}


            <div className="overflow-x-auto p-10">
             <table className="min-w-full border border-white rounded-2xl overflow-hidden">
                 <thead className="bg-gray-800/40">
                   <tr>

                    <th className="px-6 py-4 text-left font-semibold text-white border-b border-gray-600">
                       Titel
                    </th>

                    <th className="px-6 py-4 text-left font-semibold text-white border-b  border-gray-600">
                       Beskrivelse
                    </th>

                    <th className="px-6 py-4 text-left font-semibold text-white border-b border-gray-600">
                        RET
                    </th>

                     <th className="px-6 py-4 text-left font-semibold text-white border-b  border-gray-600">
                         Slet
                     </th>

                     </tr>

                    </thead>

                    <tbody>
                    {data && data.games.map((g) => (
                       <tr
                        key={g._id}
                        className="border-b border-white/20  transition-all"      >

                         <td className="px-6 py-4 text-white border-r">
                           {g.game}
                          </td>

                         <td className="px-6 py-4 text-white border-r border-white/10">
                           {g.description}
                         </td>

                        <td className="px-6 py-4 text-white border-r border-white/10">

                            <Link
                              to={""}
                             className="text-green-400 font-medium hover:underline"        >

                                  ✏
                            </Link>

                            </td>

                          <td className="px-6 py-4 text-white">

                           <button onClick={() => handleDelete(g._id, g.game)} className="text-red-400 font-medium hover:underline">
                              🗑️
                            </button>

                          </td>
                     </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </section>
    )
}

export default AdminGame