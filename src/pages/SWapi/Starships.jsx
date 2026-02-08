import React, { useEffect, useState } from 'react';
import Title from "../../components/Title";
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"; 
import StarshipCard from './StarshipCard';

const Starships = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  // state til at huske hvilken side (data) vi er på

  const [page, setpage] = useState(1)

  useEffect(() => {
    makeRequest("https://swapi.py4e.com/api/starships/?page=" + page, "GET");

  }, [page]);

  return (
    <section className="p-28">
      <Title className="text-4xl font-bold text-center text-green-600 mb-10">
        Starships - SWAPI
      </Title>

      {/* Loading & Error States */}
      {isLoading && (
       <Loader/>
      )}
      {error && (
       <Loader/>
      )}

      <div className='flex justify-center gap-4 p-5'>
        <button 
          onClick={ () => setpage(page - 1)}
          disabled={!data?.previous}
        className='rounded bg-blue-500 px-4 py-2 font-bold text-white'>
            &larr; 
            Forrige</button>
        
        <button 
         onClick={ () => setpage(page + 1)}
         disabled={!data?.next}
        className='rounded bg-blue-500 px-4 py-2 font-bold text-white'>Næste 
        &rarr;
        </button>
      </div>


      
      {/* vis Data-startships */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {data && data.results && data.results.map((s) => (


            <StarshipCard s={s} key={s.name}/>
         
        ))}
      </div>
    </section>
  );
};

export default Starships;
