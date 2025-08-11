import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function BookCard({ book }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-3 font-semibold text-lg">{book.title}</h3>
      <p className="text-sm text-gray-500">{book.author}</p>
      <div className="flex items-center mt-2 text-yellow-500">
        <FaStar className="mr-1" /> {book.rating}
      </div>
      <Link
        to={`/book/${book.id}`}
        className="mt-3 block text-center bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700"
      >
        Read
      </Link>
    </div>
  )
}

