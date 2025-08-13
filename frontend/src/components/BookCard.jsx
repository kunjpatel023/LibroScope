// import React, { useState } from "react";
// import { FaBookmark } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function BookCard({ book }) {
//   const [bookmarked, setBookmarked] = useState(false);
//   const [imgError, setImgError] = useState(false);

//   const toggleBookmark = () => {
//     setBookmarked((prev) => !prev);
//   };

//   return (
//     <div className="relative w-48 h-72 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group cursor-pointer">
//       {/* Book Cover */}
//       <img
//         src={
//           !imgError
//             ? book.image
//             : "https://via.placeholder.com/150x220?text=No+Image"
//         }
//         alt={book.title}
//         onError={() => setImgError(true)}
//         className="w-full h-full object-contain bg-gray-100 transition-opacity duration-300"
//       />

//       {/* Dark overlay on hover */}
//       <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

//       {/* Bookmark Button */}
//       <button
//         onClick={toggleBookmark}
//         className="absolute top-2 right-2 p-1 bg-white dark:bg-gray-700 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//       >
//         <FaBookmark
//           className={`text-sm ${bookmarked ? "text-red-500" : "text-gray-400"
//             }`}
//         />
//       </button>

//       {/* Overlay content (title + read button) */}
//       <div className="absolute inset-0 flex flex-col items-center justify-end p-2 pointer-events-none">
//         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-full pointer-events-auto">
//           <h3 className="font-medium text-lg text-white truncate">
//             {book.title}
//           </h3>
//           <p className="text-xs text-gray-200 truncate">{book.author}</p>
//           <Link
//             to={`/bookreader/${book.id}`}
//             className="mt-2 block text-center bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700 text-xs">
//             Read
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { FaBookmark } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function BookCard({ book }) {
//   const [bookmarked, setBookmarked] = useState(false);
//   const [imgError, setImgError] = useState(false);
//   const token = localStorage.getItem("access");

//   const toggleBookmark = async () => {
//     if (!token) {
//       alert("Please log in to bookmark books");
//       return;
//     }
//     try {
//       await axios.post(
//         `http://127.0.0.1:8000/api/bookmark/${book.id}/`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setBookmarked((prev) => !prev);
//     } catch (err) {
//       console.error("Bookmark error", err);
//     }
//   };

//   return (
//     <div className="relative w-48 h-72 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group cursor-pointer">
//       {/* Book Cover */}
//       <img
//         src={
//           !imgError
//             ? book.image
//             : "https://via.placeholder.com/150x220?text=No+Image"
//         }
//         alt={book.title}
//         onError={() => setImgError(true)}
//         className="w-full h-full object-contain bg-gray-100 transition-opacity duration-300"
//       />

//       {/* Dark overlay on hover */}
//       <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

//       {/* Bookmark Button */}
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

//       {/* Overlay content (title + read button) */}
//       <div className="absolute inset-0 flex flex-col items-center justify-end p-2 pointer-events-none">
//         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-full pointer-events-auto">
//           <h3 className="font-medium text-lg text-white truncate">
//             {book.title}
//           </h3>
//           <p className="text-xs text-gray-200 truncate">{book.author}</p>
//           <Link
//             to={`/bookreader/${book.id}`}
//             className="mt-2 block text-center bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700 text-xs"
//           >
//             Read
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BookCard({ book }) {
  const token = localStorage.getItem("access");

  // Set initial bookmark state from API response if available
  const [bookmarked, setBookmarked] = useState(book.is_bookmarked || false);
  const [imgError, setImgError] = useState(false);

  // Handle toggle bookmark
  const toggleBookmark = async () => {
    if (!token) {
      alert("Please log in to bookmark books");
      return;
    }
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/bookmark/${book.id}/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBookmarked((prev) => !prev);
    } catch (err) {
      console.error("Bookmark error", err);
    }
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
            bookmarked ? "text-yellow-400" : "text-gray-400"
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
            to={`/bookreader/${book.id}`}
            className="mt-2 block text-center bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700 text-xs"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}
