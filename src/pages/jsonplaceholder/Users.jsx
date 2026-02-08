import { useEffect } from "react"
import useRequestData from "../../hooks/userRequestData"
import Loader from "../../components/Loader"


const Users = () => {
  const { makeRequest, isLoading, data, error } = useRequestData()

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/users", "GET")
  }, [])

  return (
    <section className="p-28">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Se brugere fra JSONPLACEHOLDER
      </h1>

      {/* Loading & Error States */}
      {isLoading && (
       <Loader/>
      )}
      {error && (
       <Loader/>
      )}

      {/* Data Grid */}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.map((user) => (
            <div
             key={user.id}
             className="rounded-2xl p-6 border border-white hover:border-green-400 transition-all hover:-translate-y-1 ">
           
              <h2 className="text-xl font-semibold text-white mb-3 hover:underline">
                {user.name}
              </h2>

              <ul className="text-white space-y-1 opacity-90">
                <li>{user.email}</li>
                <li>{user.username}</li>
                <li>{user.address?.city || ""}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Users
