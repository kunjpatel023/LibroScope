
// import React, { useState } from "react";
// import {
//   FaHome,
//   FaBook,
//   FaPhone,
//   FaInfoCircle,
//   FaBars,
//   FaStar,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Topbar from "../components/Topbar"; // Updated Topbar with view toggle
// import BookRead from "./BookReader";
// const books = [
//   { title: "The Art of War", author: "Sun Tzu", category: "Philosophy", rating: 4.8 },
//   { title: "Sapiens", author: "Yuval Noah Harari", category: "History", rating: 4.9 },
//   { title: "Atomic Habits", author: "James Clear", category: "Self-Help", rating: 4.7 },
//   { title: "1984", author: "George Orwell", category: "Fiction", rating: 4.6 },
// ];

// export default function Dashboard() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [view, setView] = useState("grid"); // NEW: controls layout type

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       {/* Topbar */}
//       <Topbar view={view} setView={setView} />

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto p-6">
//         {/* Welcome Card */}
//         <div className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between">
//           <div>
//             <h2 className="text-lg font-bold">
//               Welcome back, John! <span role="img" aria-label="wave">👋</span>
//             </h2>
//             <p className="text-sm text-gray-500">You've read 3 books this week. Keep it up!</p>
//           </div>
//           <div className="flex space-x-8 text-center">
//             <Stat title="Books Read" value="24" />
//             <Stat title="Hours" value="156" />
//             <Stat title="Avg Rating" value="4.8" />
//           </div>
//         </div>

//         {/* Highest Read */}
//         <Section title="Highest Read">
//           <div className={view === "grid" ? "grid grid-cols-4 gap-4" : "flex flex-col gap-4"}>
//             {books.map((book, i) => (
//               <BookCard key={i} {...book} />
//             ))}
//           </div>
//         </Section>
//       </main>
//     </div>
//   );
// }

// function Stat({ title, value }) {
//   return (
//     <div>
//       <p className="text-lg font-bold">{value}</p>
//       <p className="text-xs text-gray-500">{title}</p>
//     </div>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <div className="mb-6">
//       <div className="flex justify-between mb-3">
//         <h3 className="font-semibold text-gray-800">{title}</h3>
//         <button className="text-sm text-purple-500">View All</button>
//       </div>
//       {children}
//     </div>
//   );
// }

// function BookCard({ title, author, category, rating }) {
//   return (
//     <div className="bg-white shadow rounded-lg p-4 flex flex-col">
//       <div className="mb-3">
//         <span className="bg-gray-100 text-xs px-2 py-1 rounded">{category}</span>
//       </div>
//       <h4 className="font-semibold">{title}</h4>
//       <p className="text-xs text-gray-500 mb-2">by {author}</p>
//       <div className="mt-auto flex items-center justify-between">
//         <div className="flex items-center space-x-1 text-yellow-500">
//           <FaStar size={14} /> <span className="text-sm">{rating}</span>
//         </div>
//         <button className="text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white px-3 py-1 rounded hover:bg-purple-600">
//   <Link to="/bookreader" className="text-white">
//     Read More
//   </Link>
// </button>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { FaSearch, FaTh, FaList, FaMoon, FaBell, FaUser } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Dashboard() {
//   const [view, setView] = useState("grid");
//   const [darkMode, setDarkMode] = useState(false);

//   // Apply dark mode to <html> tag
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   // 📌 Sample data
//   const booksData = [
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       category: "Classic",
//       image: "https://images.unsplash.com/photo-1544933231-2f6106c2c68d",
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       category: "Dystopian",
//       image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
//     },
//     {
//       title: "The Alchemist",
//       author: "Paulo Coelho",
//       category: "Fiction",
//       image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
//     },
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       category: "Classic",
//       image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
//     },
//   ];

//   // Filter books based on search query
//   const filteredBooks = booksData.filter((book) =>
//     book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     book.author.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex min-h-screen w-full bg-gray-50 dark:bg-gray-900">
//       {/* Sidebar */}
//       <Sidebar collapsed={isSidebarCollapsed} setCollapsed={setIsSidebarCollapsed} />

//       {/* Main content wrapper */}
//       <div className="flex flex-col flex-1 w-full overflow-hidden">
//         {/* Topbar */}
//         <div className="p-4">
//           <TopbarDashboard
//             view={view}
//             setView={setView}
//             username={username}
//             searchQuery={searchQuery}
//             setSearchQuery={setSearchQuery}
//           />
//         </div>

//         {/* Grid/List Toggle */}
//         <div className="flex items-center gap-4">
//           <div className="flex bg-gray-100 dark:bg-gray-700 rounded-full p-1">
//             <button
//               onClick={() => setView("grid")}
//               className={`p-2 rounded-full ${
//                 view === "grid"
//                   ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white"
//                   : "text-gray-500"
//               }`}
//             >
//               <FaTh />
//             </button>
//             <button
//               onClick={() => setView("list")}
//               className={`p-2 rounded-full ${
//                 view === "list"
//                   ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
//                   : "text-gray-500"
//               }`}
//             >
//               <FaList />
//             </button>
//           </div>

//           {/* Dark Mode Toggle */}
//           <FaMoon
//             className="text-gray-600 dark:text-yellow-400 text-lg cursor-pointer"
//             onClick={() => setDarkMode(!darkMode)}
//           />

//           {/* Notifications */}
//           <div className="relative">
//             <FaBell className="text-gray-600 dark:text-gray-300 text-lg cursor-pointer" />
//             <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
//           </div>
//         </div>

//         {/* Profile */}
//         <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-3 py-1 rounded-full text-white">
//           <FaUser />
//           <span>Welcome, User</span>
//         </div>
//       </div>

//       {/* 🔹 Books Section */}
//       <div className="p-6">
//         {view === "grid" ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredBooks.map((book, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
//               >
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4 flex flex-col gap-2">
//                   <h2 className="text-lg font-semibold">{book.title}</h2>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {book.author}
//                   </p>
//                   <span className="text-xs mt-1 inline-block px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full">
//                     {book.category}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col gap-4">
//             {filteredBooks.map((book, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
//               >
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-24 h-24 object-cover"
//                 />
//                 <div className="p-4 flex flex-col">
//                   <h2 className="text-lg font-semibold">{book.title}</h2>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {book.author}
//                   </p>
//                   <span className="text-xs mt-1 inline-block px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full">
//                     {book.category}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopbarDashboard from "../components/TopbarDashboard";
import { motion } from "framer-motion";
import { FaBookmark } from "react-icons/fa";
import BookCard from "../components/BookCard";

export default function Dashboard() {
  const [view, setView] = useState("grid");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const username = "John Doe";

  const booksData = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic", image: "/images/book1.jpeg" },
    { title: "1984", author: "George Orwell", category: "Dystopian", image: "/images/book2.jpeg" },
    { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", image: "/images/book3.jpeg" },
    { title: "Romeo & Juliet", author: "William Shakespeare", category: "Drama", image: "/images/book4.jpeg" },
  ];

  // Filter books based on search query
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar collapsed={isSidebarCollapsed} setCollapsed={setIsSidebarCollapsed} />

      {/* Main content wrapper */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Topbar */}
        <div className="p-4">
          <TopbarDashboard
            view={view}
            setView={setView}
            username={username}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* Book content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              {filteredBooks.map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative group"
                >
                  <BookCard book={book} />

                  {/* Hover actions */}
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
    </div>
  );
}