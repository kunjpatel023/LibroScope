// import React from 'react'
// import { FaStar } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

// export default function BookCard({ book }) {
//   return (
//     <div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition p-4">
//       <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded" />
//       <h3 className="mt-3 font-semibold text-lg">{book.title}</h3>
//       <p className="text-sm text-gray-500">{book.author}</p>
//       <div className="flex items-center mt-2 text-yellow-500">
//         <FaStar className="mr-1" /> {book.rating}
//       </div>
//       <Link
//         // to={`/book/${book.id}`}
//         to={`/bookreader`}
//         className="mt-3 block text-center bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700"
//       >
//         Read 
//       </Link>
//     </div>
//   )
// }

// import React, { useState } from "react";
// import { FaBookmark } from "react-icons/fa";
// import { Link } from 'react-router-dom'


// export default function BookCard({ book }) {
//   const [bookmarked, setBookmarked] = useState(false);

//   const toggleBookmark = () => {
//     setBookmarked((prev) => !prev);
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition relative w-40">
//       {/* Bookmark */}
//       <button
//         onClick={toggleBookmark}
//         className="absolute top-2 right-2 p-1 bg-white dark:bg-gray-700 rounded-full shadow"
//       >
//         <FaBookmark
//           className={`text-sm ${
//             bookmarked ? "text-red-500" : "text-gray-400"
//           }`}
//         />
//       </button>

//       {/* Image */}
//       <img
//         src={book.image}
//         alt={book.title}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />

//       {/* Details */}
//       <div className="p-2 text-center">
//         <h3 className="font-medium text-sm truncate">{book.title}</h3>
//         <p className="text-xs text-gray-500 truncate">{book.author}</p>
//         {/* <button className="mt-2 w-full px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
//           Read Now
//         </button> */}
//         <div>
//         <Link
//         to={`/bookreader`}
//         className="mt-3 block text-center bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700">
//         Read 
//       </Link>
//         </div>
       
//       </div>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { FaBookmark } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function BookCard({ book }) {
//   const [bookmarked, setBookmarked] = useState(false);

//   const toggleBookmark = () => {
//     setBookmarked((prev) => !prev);
//   };

//   return (
//     <div className="relative w-40 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group cursor-pointer">
//       {/* Book Cover (always visible) */}
//       <img
//         src={book.image}
//         alt={book.title}
//         className="w-full h-48 object-cover"
//       />

//       {/* Bookmark Button (hidden until hover) */}
//       <button
//         onClick={toggleBookmark}
//         className="absolute top-2 right-2 p-1 bg-white dark:bg-gray-700 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//       >
//         <FaBookmark
//           className={`text-sm ${
//             bookmarked ? "text-red-500" : "text-gray-400"
//           }`}
//         />
//       </button>

//       {/* Overlay with Title + Button */}
//       <div className="absolute inset-0 flex flex-col items-center justify-end p-2 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
//         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-full">
//           <h3 className="font-medium text-sm text-white truncate">
//             {book.title}
//           </h3>
//           <p className="text-xs text-gray-200 truncate">{book.author}</p>
//           <Link
//             to={`/bookreader`}
//             className="mt-2 block text-center bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700 text-xs"
//           >
//             Read
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [imgError, setImgError] = useState(false);

  const toggleBookmark = () => {
    setBookmarked((prev) => !prev);
  };

  return (
    <div className="relative w-48 h-72 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group cursor-pointer">
      {/* Book Cover */}
      <img
        src={
          !imgError
            ? book.image
            : "https://via.placeholder.com/150x220?text=No+Image"
        }
        alt={book.title}
        onError={() => setImgError(true)}
        className="w-full h-full object-contain bg-gray-100 transition-opacity duration-300"
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

      {/* Bookmark Button */}
      <button
        onClick={toggleBookmark}
        className="absolute top-2 right-2 p-1 bg-white dark:bg-gray-700 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      >
        <FaBookmark
          className={`text-sm ${
            bookmarked ? "text-red-500" : "text-gray-400"
          }`}
        />
      </button>

      {/* Overlay content (title + read button) */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-2 pointer-events-none">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-full pointer-events-auto">
          <h3 className="font-medium text-lg text-white truncate">
            {book.title}
          </h3>
          <p className="text-xs text-gray-200 truncate">{book.author}</p>
          <Link
            to={`/bookreader`}
            className="mt-2 block text-center bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700 text-xs"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}
