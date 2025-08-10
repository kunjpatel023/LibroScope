// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function BookCard({ book }) {
//   const nav = useNavigate()
//   return (
//     <div onClick={() => nav(`/book/${book.id}`)} className="card-hover cursor-pointer bg-white dark:bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition">
//       <div className="h-44 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden mb-3">
//         <img src={book.image || '/images/book1.jpg'} alt={book.title} className="w-full h-full object-cover" />
//       </div>
//       <h4 className="font-semibold">{book.title}</h4>
//       <p className="text-sm text-gray-500 dark:text-gray-400">{book.author}</p>
//       <div className="mt-3 flex gap-2 text-xs">
//         {book.tags?.slice(0,3).map(t => <span key={t} className="px-2 py-1 rounded bg-primary/10 text-primary">{t}</span>)}
//       </div>
//     </div>
//   )
// }


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

