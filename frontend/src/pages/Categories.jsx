
// import React, { useState, useEffect } from "react";
// import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";
// import BookCard from "../components/BookCard";

// export default function Categories() {
//   const { theme } = useTheme();

//   const allBooks = [
//     { id: 1, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", image: "/images/book1.jpeg" },
//     { id: 2, title: "Atomic Habits", author: "James Clear", category: "Self Help", image: "/images/book2.jpeg" },
//     { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", image: "/images/book3.jpeg" },
//     { id: 4, title: "Think and Grow Rich", author: "Napoleon Hill", category: "Finance", image: "/images/book4.jpeg" },
//     { id: 5, title: "Ikigai", author: "Héctor García", category: "Self Help", image: "/images/book4.jpeg" },
//   ];

//   const categories = [
//     { name: "All", color: "bg-gray-300 text-gray-800" },
//     { name: "Fiction", color: "bg-blue-100 text-blue-700" },
//     { name: "Self Help", color: "bg-green-100 text-green-700" },
//     { name: "Finance", color: "bg-yellow-100 text-yellow-700" },
//   ];

//   const [books, setBooks] = useState(allBooks);
//   const [view, setView] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("az");

//   useEffect(() => {
//     let filteredBooks = [...allBooks];

//     if (selectedCategory !== "All") {
//       filteredBooks = filteredBooks.filter((book) => book.category === selectedCategory);
//     }

//     if (searchTerm.trim()) {
//       filteredBooks = filteredBooks.filter((book) =>
//         book.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (sortOption === "az") filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
//     else if (sortOption === "za") filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
//     else if (sortOption === "newest") filteredBooks.sort((a, b) => b.id - a.id);
//     else if (sortOption === "oldest") filteredBooks.sort((a, b) => a.id - b.id);

//     setBooks(filteredBooks);
//   }, [searchTerm, selectedCategory, sortOption]);

//   return (
//     <div className={`p-8 min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
//       {/* Header */}
//       <h2 className="text-2xl font-bold mb-6">📚 Categories</h2>

//       {/* Search, Sort, View - in rounded rectangle */}
//       <div className={`flex items-center gap-3 p-4 rounded-xl shadow-md mb-6 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
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
//             className={`p-2 rounded-lg ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             <FaThLarge />
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`p-2 rounded-lg ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             <FaList />
//           </button>
//         </div>
//       </div>

//       {/* Categories */}
//       <div className="flex flex-wrap gap-3 mb-8">
//         {categories.map((cat, idx) => (
//           <button
//             key={idx}
//             onClick={() => setSelectedCategory(cat.name)}
//             className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
//               selectedCategory === cat.name
//                 ? cat.color + " ring-2 ring-blue-500"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Book Display in rounded rectangle */}
//       <div className={`p-4 rounded-xl shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
//         {view === "grid" ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {books.map((book) => (
//               <BookCard key={book.id} book={book} showBookmarkFirst />
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
//                   <img src={book.image} alt={book.title} className="w-16 h-20 object-cover rounded" />
//                   <div>
//                     <h4 className="font-semibold">{book.title}</h4>
//                     <p className="text-sm text-gray-500">{book.category}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <button className="text-gray-500 hover:text-yellow-500 transition">
//                     <FaBookmark className="w-5 h-5" />
//                   </button>
//                   <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
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



// import React, { useState, useEffect } from "react";
// import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";
// import BookCard from "../components/BookCard";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";



// export default function Categories() {
//   const { theme } = useTheme();
//   const navigate = useNavigate();

//   const [books, setBooks] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [view, setView] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("az");

//   // Fetch categories
//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/book/categories/")
//       .then(res => {
//         setCategories([{ name: "All" }, ...res.data]);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   // Fetch books whenever filter changes
//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/book/books/", {
//       params: {
//         search: searchTerm,
//         category: selectedCategory,
//         sort: sortOption
//       }
//     })
//       .then(res => setBooks(res.data))
//       .catch(err => console.error(err));
//   }, [searchTerm, selectedCategory, sortOption]);

//   return (
//     <div className={`p-8 min-h-screen m-8 rounded-3xl ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
//       {/* Header */}
//       <h2 className="text-2xl font-bold mb-6">📚 Categories</h2>

//       {/* Search, Sort, View */}
//       <div className={`flex items-center gap-3 p-4 rounded-xl shadow-md mb-6 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
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
//             className={`p-2 rounded-lg ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             <FaThLarge />
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`p-2 rounded-lg ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
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
//             className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${selectedCategory === cat.name
//                 ? "bg-blue-500 text-white ring-2 ring-blue-300"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Books Display */}
//       <div className={`p-4 rounded-xl shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
//         {view === "grid" ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {books.map((book) => (
//               <BookCard key={book.id} book={book} showBookmarkFirst />
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
//                   <img src={book.image} alt={book.title} className="w-16 h-20 object-cover rounded" />
//                   <div>
//                     <h4 className="font-semibold">{book.title}</h4>
//                     <p className="text-sm text-gray-500">{book.category}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <button className="text-gray-500 hover:text-yellow-500 transition">
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




// import React, { useState, useEffect } from "react";
// import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";
// import BookCard from "../components/BookCard";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Categories() {
//   const { theme } = useTheme();
//   const navigate = useNavigate();

//   const [books, setBooks] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [view, setView] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("az");

//   // Fetch categories
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/categories/")
//       .then((res) => {
//         setCategories([{ name: "All" }, ...res.data]);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Fetch books whenever filter changes
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/books/", {
//         params: {
//           search: searchTerm,
//           category: selectedCategory,
//           sort: sortOption,
//         },
//       })
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.error(err));
//   }, [searchTerm, selectedCategory, sortOption]);

//   return (
//     <div
//       className={`p-8 min-h-screen m-8 rounded-3xl ${
//         theme === "dark"
//           ? "bg-gray-900 text-white"
//           : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       {/* Header */}
//       <h2 className="text-2xl font-bold mb-6">📚 Categories</h2>

//       {/* Search, Sort, View */}
//       <div
//         className={`flex items-center gap-3 p-4 rounded-xl shadow-md mb-6 ${
//           theme === "dark" ? "bg-gray-800" : "bg-white"
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
//               <BookCard key={book.id} book={book} showBookmarkFirst />
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
//                 <div className="flex items-center gap-4">
//                   <button className="text-gray-500 hover:text-yellow-500 transition">
//                     <FaBookmark className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => navigate(`/bookreader/${book.id}`)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
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


// import React, { useState, useEffect } from "react";
// import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";
// import BookCard from "../components/BookCard";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Categories() {
//   const { theme } = useTheme();
//   const navigate = useNavigate();

//   const [books, setBooks] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [view, setView] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("az");

//   // Fetch categories
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/categories/")
//       .then((res) => {
//         setCategories([{ name: "All" }, ...res.data]);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Fetch books whenever filter changes
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/book/books/", {
//         params: {
//           search: searchTerm,
//           category: selectedCategory,
//           sort: sortOption,
//         },
//       })
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.error(err));
//   }, [searchTerm, selectedCategory, sortOption]);

//   return (
//     <div
//       className={`min-h-screen p-8 ${
//         theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       {/* Outer rounded container */}
//       <div
//         className={`m-4 p-6 rounded-3xl shadow-lg ${
//           theme === "dark" ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         {/* Header */}
//         <h2 className="text-2xl font-bold mb-6">📚 Categories</h2>

//         {/* Search, Sort, View */}
//         <div
//           className={`flex items-center gap-3 p-4 rounded-xl shadow-md mb-6 ${
//             theme === "dark" ? "bg-gray-700" : "bg-gray-50"
//           }`}
//         >
//           <input
//             type="text"
//             placeholder="Search books..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//             className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="az">Sort: A-Z</option>
//             <option value="za">Sort: Z-A</option>
//             <option value="newest">Newest</option>
//             <option value="oldest">Oldest</option>
//           </select>

//           <div className="flex gap-2">
//             <button
//               onClick={() => setView("grid")}
//               className={`p-2 rounded-lg ${
//                 view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
//               }`}
//             >
//               <FaThLarge />
//             </button>
//             <button
//               onClick={() => setView("list")}
//               className={`p-2 rounded-lg ${
//                 view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
//               }`}
//             >
//               <FaList />
//             </button>
//           </div>
//         </div>

//         {/* Category Buttons */}
//         <div className="flex flex-wrap gap-3 mb-8">
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => setSelectedCategory(cat.name)}
//               className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
//                 selectedCategory === cat.name
//                   ? "bg-blue-500 text-white ring-2 ring-blue-300"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* Books Display */}
//         <div
//           className={`p-4 rounded-xl shadow-lg ${
//             theme === "dark" ? "bg-gray-700" : "bg-gray-50"
//           }`}
//         >
//           {view === "grid" ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {books.map((book) => (
//                 <BookCard key={book.id} book={book} showBookmarkFirst />
//               ))}
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {books.map((book) => (
//                 <div
//                   key={book.id}
//                   className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
//                     theme === "dark" ? "bg-gray-800" : "bg-white"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={book.image}
//                       alt={book.title}
//                       className="w-16 h-20 object-cover rounded"
//                     />
//                     <div>
//                       <h4 className="font-semibold">{book.title}</h4>
//                       <p className="text-sm text-gray-500">{book.category}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <button
//                       className="text-gray-500 hover:text-yellow-500 transition"
//                       title="Bookmark"
//                     >
//                       <FaBookmark className="w-5 h-5" />
//                     </button>
//                     <button
//                       onClick={() => navigate(`/bookreader/${book.id}`)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
//                     >
//                       Read Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
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

  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([{ name: "All" }]);
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("az");

  // Fetch categories
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/categories/")
      .then((res) => {
        setCategories([{ name: "All" }, ...res.data]);
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch books based on filters
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/books/", {
        params: {
          search: searchTerm,
          category: selectedCategory,
          sort: sortOption,
        },
      })
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, [searchTerm, selectedCategory, sortOption]);

  return (
    <div
      className={`min-h-screen p-8 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Outer rounded container */}
      <div
        className={`m-4 p-6 rounded-3xl shadow-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">📚 Categories</h2>

        {/* Controls */}
        <div
          className={`flex items-center gap-3 p-4 rounded-xl shadow-md mb-6 ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="az">Sort: A-Z</option>
            <option value="za">Sort: Z-A</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <div className="flex gap-2">
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
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
                selectedCategory === cat.name
                  ? "bg-blue-500 text-white ring-2 ring-blue-300"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Books Display */}
        <div
          className={`p-4 rounded-xl shadow-lg ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          {view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  showBookmarkFirst
                  onReadNow={() => navigate(`/bookreader/${book.id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {books.map((book) => (
                <div
                  key={book.id}
                  className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-16 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{book.title}</h4>
                      <p className="text-sm text-gray-500">{book.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-gray-500 hover:text-yellow-500 transition" title="Bookmark">
                      <FaBookmark className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigate(`/bookreader/${book.id}`)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
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
    </div>
  );
}
