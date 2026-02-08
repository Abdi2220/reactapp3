import React from "react"
import { Link } from "react-router"

const PostCard = ({ p }) => {
  return (
    <div
    key={p.id}
    className="rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow border border-white hover:border-green-400 hover:-translate-y-1"
  >
    <h2 className="text-xl font-semibold text-white mb-2 hover:underline">
      {p.title}
    </h2>

    <Link to={`/postdetail/${p.id}`} className="text-green-400 hover:underline">
      Læse mere...
    </Link>

    <p className="text-white mt-2">{p.body}</p>

    <p className="text-sm text-gray-400 mt-4">User ID: {p.userId}</p>
  </div>
  )
}

export default PostCard
