import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBookmark, FaThLarge, FaList } from "react-icons/fa";
import BookCard from "../components/BookCard";

export default function Dashboard() {
  const [view, setView] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const booksData = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic", image: "/images/book1.jpeg" },
    { title: "1984", author: "George Orwell", category: "Dystopian", image: "/images/book2.jpeg" },
    { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", image: "/images/book3.jpeg" },
    { title: "Romeo & Juliet", author: "William Shakespeare", category: "Drama", image: "/images/book4.jpeg" },
  ];

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full">
      {/* Toolbar */}
      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow mb-4">
        <input
          type="text"
          placeholder="Search your library..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-lg w-1/2 focus:outline-none"
        />
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            <FaThLarge />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Books Display */}
      <div className="flex-1 overflow-y-auto">
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {filteredBooks.map((book, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            {filteredBooks.map((book, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden w-full p-4"
              >
                <div className="flex items-center gap-4">
                  <img src={book.image} alt={book.title} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h2 className="text-lg font-semibold">{book.title}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{book.author}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-white dark:bg-gray-700 rounded-full shadow hover:scale-105 transition">
                    <FaBookmark className="text-blue-500" />
                  </button>
                  <button className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:scale-105 transition">
                    Read Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
