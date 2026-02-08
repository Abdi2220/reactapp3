import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/userRequestData";
import Loader from "../../components/Loader";
import Title from "../../components/Title";

const Todos = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  // usestate til at huske filter - viser alle/udførte/ikke-udførte
  const [showCompleted, setShowCompleted] = useState(null);

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/todos", "GET");
  }, []);

  if (!data) return null;

  return (


    
    <div className="p-28">
      <Title>Todos fra jsonplaceholder</Title>

      {/* Loading & Error States */}
      {isLoading && (
         <Loader />
      )}
      {error && (
        <Error />
      )}

      <div className="flex space-x-5 mb-6">
        <button 
          onClick={() => setShowCompleted(false)}
          className="rounded px-4 py-2 font-bold text-white"
        >
          vis ikke-udførte
        </button>

        <button 
          onClick={() => setShowCompleted(true)}
          className="rounded px-4 py-2 font-bold text-white"
        >
          vis udførte
        </button>

        <button 
          onClick={() => setShowCompleted(null)}
          className="rounded px-4 py-2 font-bold text-white"
        >
          vis alle
        </button>
      </div>

    
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {
          data
          .filter(t => t.completed == showCompleted || showCompleted === null)
          .map((t) => (

            <div
              key={t.id}
              className={`p-4 rounded-2xl shadow-md border transition ${
                t.completed
                  ? "border-2 border-green-500 border-solid"
                  : "border-2 border-red-500 border-solid"
              }`}
            >
              <div className="flex items-center justify-between p-6">
                <h2 className="font-semibold">{t.title}</h2>
                <span className="px-3 py-1 rounded-full text-sm font-medium opacity-90">
                  {t.completed ? "True" : "False"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div> 
  );
};

export default Todos;
