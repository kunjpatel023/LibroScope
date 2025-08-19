import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BookCard({ book }) {
  const token = localStorage.getItem("access");

  const [bookmarked, setBookmarked] = useState(book.is_bookmarked || false);
  const [imgError, setImgError] = useState(false);

  // Handle bookmark toggle
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
    <div
      className="
        relative 
        w-32 sm:w-36 md:w-40   /* smaller width */
        h-52 sm:h-56 md:h-60   /* smaller height */
        bg-white dark:bg-gray-800 
        rounded-2xl shadow-md
        overflow-hidden group cursor-pointer
        transition-all duration-300
        hover:shadow-[0_10px_40px_rgba(0,0,0,1)] hover:-translate-y-3
      "
    >
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

      {/* Hover Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

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

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-2 pointer-events-none">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-full pointer-events-auto">
          <h3 className="font-medium text-sm sm:text-base text-white truncate">
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
