
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

  // Fetch bookmarks
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

  // Fetch newest
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/books/", {
        params: { search: searchQuery, sort: "newest" },
      })
      .then((res) => {
        const updated = res.data.slice(0, 4).map((book) => ({
          ...book,
          is_bookmarked: bookmarkedIds.includes(book.id),
        }));
        setNewestBooks(updated);
      })
      .catch((err) => console.error(err));
  }, [searchQuery, bookmarkedIds]);

  // Fetch recommended
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/recommend/knn/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const updated = res.data.map((book) => ({
          ...book,
          is_bookmarked: bookmarkedIds.includes(book.id),
        }));
        setRecommendedBooks(updated);
      })
      .catch((err) => console.error(err));
  }, [bookmarkedIds, token]);

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
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">
        {title}
      </h2>

      {view === "grid" ? (
        <div className="grid mx-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ">
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
              className="flex flex-col sm:flex-row sm:items-center justify-between
              bg-[#f7f9fa] 
              rounded-4xl shadow-md hover:shadow-lg transition-all
              overflow-hidden h-40 w-full p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-16 h-30 sm:w-20 sm:h-30 object-cover rounded-lg border border-[#C0B89F]"
                />
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-black">
                    {book.title}
                  </h2>
                  <p className="text-sm text-[#333333]">{book.category}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 sm:mt-0">
                <button
                  onClick={() => handleBookmark(book.id)}
                  className={`transition ${
                    bookmarkedIds.includes(book.id)
                      ? "text-yellow-400"
                      : "text-black hover:text-yellow-400"
                  }`}
                >
                  <FaBookmark className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate(`/bookreader/${book.id}`)}
                  className="px-3 py-1 text-sm sm:text-base
                  bg-blue-500
                  text-white font-medium rounded-full shadow
                  hover:scale-105 transition"
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
    // <div className="flex flex-col w-full min-h-screen 
    // bg-gradient-to-b from-black via-[#EBE6D5] to-white p-4">
    <div className="flex flex-col w-full min-h-screen 
    bg-[#f0efe9] rounded-4xl p-4">
      {/* Sticky Toolbar */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3
       bg-[#f7f9fa]
      p-3 rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] my-4 mx-4 sticky top-0 z-20">
        <input
          type="text"
          placeholder="Search your library..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2
          w-full sm:w-full
          border border-black
          bg-white text-black placeholder-[#555]
          rounded-4xl
          focus:outline-none focus:ring-2 focus:ring-gray-400
          transition-all"
        />
        <div className="flex gap-2 justify-center sm:justify-end">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-[50px] transition ${
              view === "grid"
                ? "bg-black  text-white"
                : "bg-white  text-black"
            }`}
          >
            <FaThLarge />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-4xl transition ${
              view === "list"
                ? "bg-black  text-white"
                : "bg-white text-black"
            }`}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-2 mx-4 custom-scrollbar">
        {renderSection("Newest Books", newestBooks)}
        {renderSection("Recommended Books", recommendedBooks)}
      </div>
    </div>
  );
}













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

//   // Fetch bookmarked books
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
//         const updated = res.data.slice(0,4).map((book) => ({
//           ...book,
//           is_bookmarked: bookmarkedIds.includes(book.id),
//         }));
//         setNewestBooks(updated);
//       })
//       .catch((err) => console.error(err));
//   }, [searchQuery, bookmarkedIds]);

//   // // Fetch recommended books
//   // useEffect(() => {
//   //   axios
//   //     .get("http://127.0.0.1:8000/api/book/books/", {
//   //       params: { sort: "recommended" },
//   //     })
//   //     .then((res) => {
//   //       const updated = res.data.map((book) => ({
//   //         ...book,
//   //         is_bookmarked: bookmarkedIds.includes(book.id),
//   //       }));
//   //       setRecommendedBooks(updated);
//   //     })
//   //     .catch((err) => console.error(err));
//   // }, [bookmarkedIds]);

//   // -----------------------------------for method 1 and 2 -----------------------------------------------------------
//   // Fetch recommended books
//   // useEffect(() => {
//   //   if (token) {
//   //     axios
//   //       .get("http://127.0.0.1:8000/api/book/recommended/", {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       })
//   //       .then((res) => {
//   //         const updated = res.data.map((book) => ({
//   //           ...book,
//   //           is_bookmarked: bookmarkedIds.includes(book.id),
//   //         }));
//   //         setRecommendedBooks(updated);
//   //       })
//   //       .catch((err) => console.error(err));
//   //   }
//   // }, [bookmarkedIds, token]);

//   // -------------------------------- for method -3 knn --------------------------------------------------
//   // Fetch recommended books (KNN method)
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/recommend/knn/", {
//         headers: { Authorization: `Bearer ${token}` },
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

//   // Render Section
//   const renderSection = (title, books) => (
//     <div className="mb-10">
//       <h2 className="text-xl sm:text-2xl font-bold mb-4">{title}</h2>

//       {view === "grid" ? (
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
//               className="flex flex-col sm:flex-row sm:items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden w-full p-4"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
//                 />
//                 <div>
//                   <h2 className="text-base sm:text-lg font-semibold">
//                     {book.title}
//                   </h2>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {book.category}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-2 mt-3 sm:mt-0">
//                 <button
//                   onClick={() => handleBookmark(book.id)}
//                   className={`transition ${bookmarkedIds.includes(book.id)
//                     ? "text-yellow-500"
//                     : "text-gray-500 hover:text-yellow-500"
//                     }`}
//                 >
//                   <FaBookmark className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => navigate(`/bookreader/${book.id}`)}
//                   className="px-3 py-1 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:scale-105 transition"
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
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow mb-4 sticky top-0 z-20">
//         <input
//           type="text"
//           placeholder="Search your library..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="px-4 py-2 border rounded-lg w-full sm:w-1/2 focus:outline-none"
//         />
//         <div className="flex gap-2 justify-center sm:justify-end">
//           <button
//             onClick={() => setView("grid")}
//             className={`p-2 rounded ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
//               }`}
//           >
//             <FaThLarge />
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`p-2 rounded ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
//               }`}
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

//   // Fetch bookmarked books
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
//         const updated = res.data.slice(0, 4).map((book) => ({
//           ...book,
//           is_bookmarked: bookmarkedIds.includes(book.id),
//         }));
//         setNewestBooks(updated);
//       })
//       .catch((err) => console.error(err));
//   }, [searchQuery, bookmarkedIds]);

//   // Fetch recommended books
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/recommend/knn/", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         const updated = res.data.map((book) => ({
//           ...book,
//           is_bookmarked: bookmarkedIds.includes(book.id),
//         }));
//         setRecommendedBooks(updated);
//       })
//       .catch((err) => console.error(err));
//   }, [bookmarkedIds, token]);

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

//   // Render Section
//   const renderSection = (title, books) => (
//     <div className="mb-10">
//       <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#333333]">
//         {title}
//       </h2>

//       {view === "grid" ? (
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
//               className="flex flex-col sm:flex-row sm:items-center justify-between
//               bg-[#E0E1DD] border border-[#C9CAC6]
//               rounded-lg shadow-sm hover:shadow-md transition-all
//               overflow-hidden w-full p-4"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border border-[#C9CAC6]"
//                 />
//                 <div>
//                   <h2 className="text-base sm:text-lg font-semibold text-[#333333]">
//                     {book.title}
//                   </h2>
//                   <p className="text-sm text-[#555555]">{book.category}</p>
//                 </div>
//               </div>
//               <div className="flex gap-2 mt-3 sm:mt-0">
//                 <button
//                   onClick={() => handleBookmark(book.id)}
//                   className={`transition ${
//                     bookmarkedIds.includes(book.id)
//                       ? "text-yellow-500"
//                       : "text-[#777777] hover:text-yellow-500"
//                   }`}
//                 >
//                   <FaBookmark className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => navigate(`/bookreader/${book.id}`)}
//                   className="px-3 py-1 text-sm sm:text-base
//                   bg-gradient-to-r from-[#A8C0FF] to-[#C0E0FF]
//                   text-[#333333] font-medium rounded-full shadow
//                   hover:scale-105 transition"
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
//     <div className="flex flex-col w-full bg-[#F5F6F3] min-h-screen p-4">
//       {/* Sticky Toolbar */}
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3
//       bg-[#E0E1DD] border border-[#C9CAC6]
//       p-3 rounded-lg shadow-sm mb-4 sticky top-0 z-20">
//         <input
//           type="text"
//           placeholder="Search your library..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="px-4 py-2
//           w-full sm:w-1/2
//           border border-[#C9CAC6]
//           bg-[#F5F6F3] text-[#333333] placeholder-[#777777]
//           rounded-lg
//           focus:outline-none focus:ring-2 focus:ring-[#A8C0FF]
//           transition-all"
//         />
//         <div className="flex gap-2 justify-center sm:justify-end">
//           <button
//             onClick={() => setView("grid")}
//             className={`p-2 rounded transition ${
//               view === "grid"
//                 ? "bg-gradient-to-r from-[#A8C0FF] to-[#C0E0FF] text-[#333333]"
//                 : "bg-[#C9CAC6] text-[#333333]"
//             }`}
//           >
//             <FaThLarge />
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`p-2 rounded transition ${
//               view === "list"
//                 ? "bg-gradient-to-r from-[#A8C0FF] to-[#C0E0FF] text-[#333333]"
//                 : "bg-[#C9CAC6] text-[#333333]"
//             }`}
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


