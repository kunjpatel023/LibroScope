// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
// import BookCard from "../components/BookCard";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("access");

//   const [books, setBooks] = useState([]);
//   const [view, setView] = useState("grid");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [bookmarkedIds, setBookmarkedIds] = useState([]);

//   // Fetch bookmarked books for logged-in user
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

//   // Fetch books (example: newest first)
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/books/", {
//         params: { search: searchQuery, sort: "newest" },
//       })
//       .then((res) => {
//         // Add is_bookmarked property to each book
//         const updatedBooks = res.data.map((book) => ({
//           ...book,
//           is_bookmarked: bookmarkedIds.includes(book.id),
//         }));
//         setBooks(updatedBooks);
//       })
//       .catch((err) => console.error(err));
//   }, [searchQuery, bookmarkedIds]);

//   // Handle bookmark toggle
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
//     <div className="flex flex-col w-full">
//       {/* Toolbar */}
//       <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow mb-4 sticky top-0 z-10">
//         <input
//           type="text"
//           placeholder="Search your library..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="px-4 py-2 border rounded-lg w-1/2 focus:outline-none"
//         />
//         <div className="flex gap-2">
//           <button
//             onClick={() => setView("grid")}
//             className={`p-2 rounded ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             <FaThLarge />
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`p-2 rounded ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             <FaList />
//           </button>
//         </div>
//       </div>

//       {/* Books Display */}
//       <div className="flex-1 overflow-y-auto">
//         {view === "grid" ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
//             {books.map((book, i) => (
//               <motion.div
//                 key={book.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <BookCard book={book} />
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col gap-4 w-full">
//             {books.map((book, i) => (
//               <motion.div
//                 key={book.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden w-full p-4"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={book.image}
//                     alt={book.title}
//                     className="w-20 h-20 object-cover rounded"
//                   />
//                   <div>
//                     <h2 className="text-lg font-semibold">{book.title}</h2>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       {book.category}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
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
//                     className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:scale-105 transition"
//                   >
//                     Read Now
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
// import BookCard from "../components/BookCard";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("access");

//   const [view, setView] = useState("grid");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [bookmarkedIds, setBookmarkedIds] = useState([]);
//   const [newestBooks, setNewestBooks] = useState([]);
//   const [recommendedBooks, setRecommendedBooks] = useState([]);

//   // Fetch bookmarked books for logged-in user
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

//   // Fetch newest books
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/books/", {
//         params: { search: searchQuery, sort: "newest" },
//       })
//       .then((res) => {
//         const updated = res.data.map((book) => ({
//           ...book,
//           is_bookmarked: bookmarkedIds.includes(book.id),
//         }));
//         setNewestBooks(updated);
//       })
//       .catch((err) => console.error(err));
//   }, [searchQuery, bookmarkedIds]);

//   // Fetch recommended books (for now dummy list or API later)
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/books/", {
//         params: { sort: "recommended" }, // replace with your actual recommendation endpoint later
//       })
//       .then((res) => {
//         const updated = res.data.map((book) => ({
//           ...book,
//           is_bookmarked: bookmarkedIds.includes(book.id),
//         }));
//         setRecommendedBooks(updated);
//       })
//       .catch((err) => console.error(err));
//   }, [bookmarkedIds]);

//   // Handle bookmark toggle
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

//   // Component to render a section
//   const renderSection = (title, books) => (
//     <div className="mb-10">
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       {view === "grid" ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {books.map((book, i) => (
//             <motion.div
//               key={book.id}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.05 }}
//             >
//               <BookCard book={book} />
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <div className="flex flex-col gap-4">
//           {books.map((book, i) => (
//             <motion.div
//               key={book.id}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.05 }}
//               className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden w-full p-4"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//                 <div>
//                   <h2 className="text-lg font-semibold">{book.title}</h2>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {book.category}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleBookmark(book.id)}
//                   className={`transition ${
//                     bookmarkedIds.includes(book.id)
//                       ? "text-yellow-500"
//                       : "text-gray-500 hover:text-yellow-500"
//                   }`}
//                 >
//                   <FaBookmark className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => navigate(`/bookreader/${book.id}`)}
//                   className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:scale-105 transition"
//                 >
//                   Read Now
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="flex flex-col w-full">
//       {/* Sticky Toolbar */}
//       <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow mb-4 sticky top-0 z-20">
//         <input
//           type="text"
//           placeholder="Search your library..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="px-4 py-2 border rounded-lg w-1/2 focus:outline-none"
//         />
//         <div className="flex gap-2">
//           <button
//             onClick={() => setView("grid")}
//             className={`p-2 rounded ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             <FaThLarge />
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`p-2 rounded ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             <FaList />
//           </button>
//         </div>
//       </div>

//       {/* Scrollable Content */}
//       <div className="flex-1 overflow-y-auto p-2">
//         {renderSection("📚 Newest Books", newestBooks)}
//         {renderSection("⭐ Recommended Books", recommendedBooks)}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
import BookCard from "../components/BookCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access");

  const [view, setView] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [newestBooks, setNewestBooks] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);

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

  // Fetch newest books
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/books/", {
        params: { search: searchQuery, sort: "newest" },
      })
      .then((res) => {
        const updated = res.data.map((book) => ({
          ...book,
          is_bookmarked: bookmarkedIds.includes(book.id),
        }));
        setNewestBooks(updated);
      })
      .catch((err) => console.error(err));
  }, [searchQuery, bookmarkedIds]);

  // Fetch recommended books
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/books/", {
        params: { sort: "recommended" },
      })
      .then((res) => {
        const updated = res.data.map((book) => ({
          ...book,
          is_bookmarked: bookmarkedIds.includes(book.id),
        }));
        setRecommendedBooks(updated);
      })
      .catch((err) => console.error(err));
  }, [bookmarkedIds]);

  // Toggle bookmark
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

  // Render Section
  const renderSection = (title, books) => (
    <div className="mb-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">{title}</h2>

      {view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden w-full p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-base sm:text-lg font-semibold">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {book.category}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 sm:mt-0">
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
                  className="px-3 py-1 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:scale-105 transition"
                >
                  Read Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      {/* Sticky Toolbar */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow mb-4 sticky top-0 z-20">
        <input
          type="text"
          placeholder="Search your library..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-1/2 focus:outline-none"
        />
        <div className="flex gap-2 justify-center sm:justify-end">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded ${
              view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <FaThLarge />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded ${
              view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-2">
        {renderSection("📚 Newest Books", newestBooks)}
        {renderSection("⭐ Recommended Books", recommendedBooks)}
      </div>
    </div>
  );
}
