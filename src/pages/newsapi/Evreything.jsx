import { useEffect } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"
import EveryCard from "./EveryCard"
import { useState } from "react"

import Newsparams from "../newsapi/Newsparams.json"


const Evreything = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    const [searchKey, setsearch] = useState("bitcoin")

    const [language, setLanguage] = useState("en")

    const [category, setCategory] = useState("")


    useEffect(() => {
        makeRequest("https://newsapi.org/v2/everything", "GET", {
          params: {
            apiKey: import.meta.env.VITE_APP_NEWSAPIKEY,
            q: category ? `${searchKey} ${category}` : searchKey,
            language,
          },
        });
      }, [language, category]);


    const handleTopHeadlines = () => {
        makeRequest("https://newsapi.org/v2/top-headlines", "GET", {
            params: {
                country: "us",
                apiKey: import.meta.env.VITE_APP_NEWSAPIKEY,
            },
        })
    }


    // Handle    search
    const handleSearch = (e) => {
        e.preventDefault() // prevent reload
        if (!searchKey.trim()) return // to avoid empty searches   


        makeRequest("https://newsapi.org/v2/everything", "GET", {
            params: {
                apiKey: import.meta.env.VITE_APP_NEWSAPIKEY,
                q: category ? `${searchKey} ${category}` : searchKey,
                language,
                category,

            },
        })
    }

    return (
        <section className="p-28">
            <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
                Nyheder Fra
            </h1>

            {/* Loading & Error States */}
            {isLoading && (
                <Loader />
            )}
            {error && (
                <Loader />
            )}


            <div className="flex space-x-9 p-5 justify-center">

                <form onSubmit={handleSearch}>
                    <label> Søg noget
                        <input
                            type="text"
                            value={searchKey}
                            onChange={(e) => setsearch(e.target.value)}
                            placeholder="Søg noget"
                            className="bg-white text-black text-center ml-3.5" />


                    </label>
                    <button type="submit"

                        onClick={handleSearch}
                        className="rounded bg-blue-900 px-4 py-2 font-bold text-white">
                        Søg
                    </button>
                </form>

                <label> vælg er sprog
                    <select

                        value={language}

                        onChange={(e) => setLanguage(e.target.value)}
                        className=" rounded-md w-full border border-gray-600 bg-white text-gray-700  hover hover:to-blue-600 block font-semibold px-4 py-2">


                        {
                            Newsparams.language.map((l) => (
                                <option key={l.code} value={l.code}>
                                    {l.language} ({l.code})
                                </option>
                            ))

                        }

                        {/*   <option value="en">en</option>
                 <option value="fr">fr</option>
                  <option value="no">no</option> */}
                    </select>
                </label>
            </div>

            <div className="flex space-x-9 p-5 justify-center">
                <label>
                    Vælg kategori:
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded-md border border-gray-600 bg-white text-gray-700 font-semibold px-4 py-2 ml-2"
                    >
                        <option value="">Alle</option>
                        {Newsparams.category.map((c) => (
                            <option key={c.code} value={c.code}>
                                {c.category} ({c.code})
                            </option>
                        ))}
                    </select>
                </label>



                <button
                    onClick={handleTopHeadlines}
                    className="rounded bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-600 transition"  >

                    Top Headlines
                </button>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    data && data.articles.map((n, i) => (

                        <EveryCard n={n} key={"news" + i} />

                        /* <div
                            key={"news" + i}
                            className="rounded-2xl p-6 border border-blue-400 hover:border-green-400 transition-all hover:-translate-y-1 ">


                            <img  src={n.urlToImage}  alt={n.title || "News image"} className="w-full h-64 object-cover rounded-xl mb-4"/>
                            
                            <h2 className="text-4xl my-4"></h2>{n.title}
                            

                        </div> */
                    ))}
            </div>

        </section>
    )
}

export default Evreything