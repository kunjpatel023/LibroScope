// import React, { useState, useEffect } from "react";
// import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";
// import BookCard from "../components/BookCard";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Categories() {
//   const { theme } = useTheme();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("access");

//   const [books, setBooks] = useState([]);
//   const [categories, setCategories] = useState([{ name: "All" }]);
//   const [view, setView] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("az");
//   const [bookmarkedIds, setBookmarkedIds] = useState([]);

//   // Fetch categories
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/categories/")
//       .then((res) => {
//         setCategories([{ name: "All" }, ...res.data]);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Fetch bookmarked books for the logged-in user
//   useEffect(() => {
//     if (token) {
//       axios
//         .get("http://127.0.0.1:8000/api/profile/", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((res) => {
//           const ids = res.data.bookmarks.map((b) => b.book.id);
//           setBookmarkedIds(ids);
//         })
//         .catch((err) => console.error(err));
//     }
//   }, [token]);

//   // Fetch books based on filters
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/books/", {
//         params: {
//           search: searchTerm,
//           category: selectedCategory,
//           sort: sortOption,
//         },
//       })
//       .then((res) => {
//         // Add is_bookmarked flag
//         const updatedBooks = res.data.map((book) => ({
//           ...book,
//           is_bookmarked: bookmarkedIds.includes(book.id),
//         }));
//         setBooks(updatedBooks);
//       })
//       .catch((err) => console.error(err));
//   }, [searchTerm, selectedCategory, sortOption, bookmarkedIds]);

//   // Toggle bookmark
//   const handleBookmark = async (bookId) => {
//     if (!token) {
//       alert("Please log in to bookmark books");
//       return;
//     }
//     try {
//       await axios.post(
//         `http://127.0.0.1:8000/api/bookmark/${bookId}/`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setBookmarkedIds((prev) =>
//         prev.includes(bookId)
//           ? prev.filter((id) => id !== bookId)
//           : [...prev, bookId]
//       );
//     } catch (err) {
//       console.error("Bookmark error", err);
//     }
//   };

//   return (
//     <div
//       className={`p-8 min-h-screen m-8 rounded-3xl ${
//         theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <h2 className="text-2xl font-bold mb-6">📚 Categories</h2>

//       {/* Controls */}
//       <div
//         className={`flex items-center gap-3 p-4 rounded-xl shadow-md mb-6 ${
//           theme === "dark" ? "bg-gray-700" : "bg-gray-50"
//         }`}
//       >
//         <input
//           type="text"
//           placeholder="Search books..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           <option value="az">Sort: A-Z</option>
//           <option value="za">Sort: Z-A</option>
//           <option value="newest">Newest</option>
//           <option value="oldest">Oldest</option>
//         </select>

//         <div className="flex gap-2">
//           <button
//             onClick={() => setView("grid")}
//             className={`p-2 rounded-lg ${
//               view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             <FaThLarge />
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`p-2 rounded-lg ${
//               view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             <FaList />
//           </button>
//         </div>
//       </div>

//       {/* Category Buttons */}
//       <div className="flex flex-wrap gap-3 mb-8">
//         {categories.map((cat, idx) => (
//           <button
//             key={idx}
//             onClick={() => setSelectedCategory(cat.name)}
//             className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
//               selectedCategory === cat.name
//                 ? "bg-blue-500 text-white ring-2 ring-blue-300"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Books Display */}
//       <div
//         className={`p-4 rounded-xl shadow-lg ${
//           theme === "dark" ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         {view === "grid" ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {books.map((book) => (
//               <BookCard key={book.id} book={book} />
//             ))}
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {books.map((book) => (
//               <div
//                 key={book.id}
//                 className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={book.image}
//                     alt={book.title}
//                     className="w-16 h-20 object-cover rounded"
//                   />
//                   <div>
//                     <h4 className="font-semibold">{book.title}</h4>
//                     <p className="text-sm text-gray-500">{book.category}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => handleBookmark(book.id)}
//                     className={`transition ${
//                       bookmarkedIds.includes(book.id)
//                         ? "text-yellow-500"
//                         : "text-gray-500 hover:text-yellow-500"
//                     }`}
//                   >
//                     <FaBookmark className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => navigate(`/bookreader/${book.id}`)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
//                   >
//                     Read Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import BookCard from "../components/BookCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      className={`p-4 sm:p-8 min-h-screen m-2 sm:m-8 rounded-3xl ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6">📚 Categories</h2>

      {/* Controls */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl shadow-md mb-6 ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-50"
        }`}
      >
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
        >
          <option value="az">Sort: A-Z</option>
          <option value="za">Sort: Z-A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        <div className="flex gap-2 justify-center sm:justify-start">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-lg ${
              view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <FaThLarge />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-lg ${
              view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide px-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
              selectedCategory === cat.name
                ? "bg-blue-500 text-white ring-2 ring-blue-300"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat.name}
          </button>
        ))}
        {/* Extra padding so last button is visible */}
        <div className="w-4 flex-shrink-0"></div>
      </div>

      {/* Books Display */}
      <div
        className={`p-4 rounded-xl shadow-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
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
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md gap-3 w-full"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-20 h-24 object-cover rounded"
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
                        ? "text-yellow-500"
                        : "text-gray-500 hover:text-yellow-500"
                    }`}
                  >
                    <FaBookmark className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate(`/bookreader/${book.id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-sm sm:text-base"
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
