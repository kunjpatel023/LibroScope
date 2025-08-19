import React, { useState, useEffect } from "react";
import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import BookCard from "../components/BookCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Categories() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const token = localStorage.getItem("access");

  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([{ name: "All" }]);
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("az");
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  // Fetch categories
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/categories/")
      .then((res) => {
        setCategories([{ name: "All" }, ...res.data]);
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch bookmarked books
  useEffect(() => {
    if (token) {
      axios
        .get("http://127.0.0.1:8000/api/profile/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const ids = res.data.bookmarks.map((b) => b.book.id);
          setBookmarkedIds(ids);
        })
        .catch((err) => console.error(err));
    }
  }, [token]);

  // Fetch books
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/books/", {
        params: {
          search: searchTerm,
          category: selectedCategory,
          sort: sortOption,
        },
      })
      .then((res) => {
        const updatedBooks = res.data.map((book) => ({
          ...book,
          is_bookmarked: bookmarkedIds.includes(book.id),
        }));
        setBooks(updatedBooks);
      })
      .catch((err) => console.error(err));
  }, [searchTerm, selectedCategory, sortOption, bookmarkedIds]);

  // Bookmark toggle
  const handleBookmark = async (bookId) => {
    if (!token) {
      alert("Please log in to bookmark books");
      return;
    }
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/bookmark/${bookId}/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBookmarkedIds((prev) =>
        prev.includes(bookId)
          ? prev.filter((id) => id !== bookId)
          : [...prev, bookId]
      );
    } catch (err) {
      console.error("Bookmark error", err);
    }
  };

  return (
    <div
      className={`min-h-screen m-2 sm:m-8 rounded-3xl ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-[#f0efe9] text-gray-900"
      }`}
    >
      {/* Title Section */}
      <section className="text-center py-2 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Book{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Categories
          </span>
        </motion.h1>
      </section>

      {/* Controls + Category Buttons Together */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`flex flex-col gap-4 p-3 m-4 mx-7 rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] mb-6 ${
          theme === "dark" ? "bg-gray-700" : "bg-[#f7f9fa]"
        }`}
      >
        {/* Search + Sort + View */}
        <div className="flex rounded-[50px] flex-col sm:flex-row sm:items-center gap-3">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2  rounded-[50px] border border-black focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-auto"
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-3 py-2 rounded-[50px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
          >
            <option value="az">Sort: A-Z</option>
            <option value="za">Sort: Z-A</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <div className="flex gap-2 justify-center sm:justify-start">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-4xl ${
                view === "grid"
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              <FaThLarge />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-4xl ${
                view === "list"
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              <FaList />
            </button>
          </div>
        </div>
        </motion.div>
        
        {/* Category Buttons (Inside same box) */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide px-7 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex-shrink-0 px-5 py-2 rounded-[50px] text-md font-medium shadow-sm transition ${
                selectedCategory === cat.name
                  ? "bg-white text-blue-600 font-bold border-2 border-blue-600"
                  : "bg-white text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
          <div className="w-4 flex-shrink-0"></div>
        </div>
      

      {/* Books Display */}
      <div
        className={`p-4 rounded-xl ${
          theme === "dark" ? "bg-gray-800" : "bg-[#f0efe9]"
        }`}
      >
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between
                bg-[#f7f9fa] rounded-4xl shadow-md hover:shadow-lg transition-all
                overflow-hidden h-40 w-full p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-20 h-30 object-cover rounded-xl"
                  />
                  <div>
                    <h4 className="font-semibold">{book.title}</h4>
                    <p className="text-sm text-gray-500">{book.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleBookmark(book.id)}
                    className={`transition ${
                      bookmarkedIds.includes(book.id)
                        ? "text-yellow-400"
                        : "text-gray-500 hover:text-yellow-400"
                    }`}
                  >
                    <FaBookmark className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate(`/bookreader/${book.id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-[50px] hover:bg-blue-600 transition text-sm sm:text-base"
                  >
                    Read Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
