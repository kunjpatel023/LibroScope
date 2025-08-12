// import React, { useMemo, useState } from 'react'
// import BookCard from '../components/BookCard'

// const BOOKS = [
//   { id: 1, title: 'Deep Learning', author: 'Ian', tags: ['AI','ML'], image: '/images/book1.jpg' },
//   { id: 2, title: 'React in Action', author: 'Mark', tags: ['Dev','React'], image: '/images/book1.jpg' },
//   { id: 3, title: 'Atomic Habits', author: 'James', tags: ['Self Help'], image: '/images/book1.jpg' }
// ]

// export default function Categories(){
//   const [query, setQuery] = useState('')
//   const [selected, setSelected] = useState('All')

//   const tags = ['All','AI','ML','Dev','React','Self Help']

//   const filtered = useMemo(() => {
//     return BOOKS.filter(b => {
//       if (selected !== 'All' && !(b.tags||[]).includes(selected)) return false
//       if (!query) return true
//       return b.title.toLowerCase().includes(query.toLowerCase()) || (b.author||'').toLowerCase().includes(query.toLowerCase())
//     })
//   }, [query, selected])

//   return (
//     <div>
//       <div className="flex items-center gap-4">
//         <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search books or authors" className="p-3 rounded border w-full max-w-md" />
//         <div className="flex gap-2 flex-wrap">
//           {tags.map(t => (
//             <button key={t} onClick={() => setSelected(t)} className={`px-3 py-1 rounded ${selected===t ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>{t}</button>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//         {filtered.map(b => <BookCard key={b.id} book={b} />)}
//       </div>
//     </div>
//   )
// }




// import React, { useState, useEffect } from "react";
// import ThemeToggle from "../components/ThemeToggle";
// import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";

// export default function Categories() {
//   const { theme } = useTheme();

//   // Mock book data
//   const allBooks = [
//     { id: 1, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", img: "/images/book1.jpeg" },
//     { id: 2, title: "Atomic Habits", author: "James Clear", category: "Self Help", img: "/images/book2.jpeg" },
//     { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", img: "/images/book3.jpeg" },
//     { id: 4, title: "Think and Grow Rich", author: "Napoleon Hill", category: "Finance", img: "/images/book4.jpeg" },
//     { id: 5, title: "Ikigai", author: "Héctor García", category: "Self Help", img: "/images/book1.jpeg" },
//   ];

//   const categories = ["All", "Fiction", "Self Help", "Finance"];

//   const [books, setBooks] = useState(allBooks);
//   const [view, setView] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("az");
//   const [bookmarks, setBookmarks] = useState([]);

//   // Filter + Sort
//   useEffect(() => {
//     let filteredBooks = [...allBooks];

//     // Category filter
//     if (selectedCategory !== "All") {
//       filteredBooks = filteredBooks.filter(book => book.category === selectedCategory);
//     }

//     // Search filter
//     if (searchTerm.trim()) {
//       filteredBooks = filteredBooks.filter(book =>
//         book.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Sorting
//     if (sortOption === "az") {
//       filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (sortOption === "za") {
//       filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
//     } else if (sortOption === "newest") {
//       filteredBooks.sort((a, b) => b.id - a.id);
//     } else if (sortOption === "oldest") {
//       filteredBooks.sort((a, b) => a.id - b.id);
//     }

//     setBooks(filteredBooks);
//   }, [searchTerm, selectedCategory, sortOption]);

//   // Handle Bookmark Toggle
//   const toggleBookmark = (bookId) => {
//     setBookmarks(prev =>
//       prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
//     );
//   };

//   return (
//     <div className={`p-4 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
//       <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-3">
//         <h3>📚 Browse Categories</h3>
//         <ThemeToggle />
//       </div>

//       {/* Search + Sort + View Toggle */}
//       <div className="d-flex flex-wrap gap-2 mb-4 align-items-center">
//         <input
//           type="text"
//           placeholder="Search books..."
//           className="form-control"
//           style={{ maxWidth: "250px" }}
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <select
//           className="form-select"
//           style={{ maxWidth: "180px" }}
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//         >
//           <option value="az">Sort: A-Z</option>
//           <option value="za">Sort: Z-A</option>
//           <option value="newest">Newest</option>
//           <option value="oldest">Oldest</option>
//         </select>

//         <button className="btn btn-outline-secondary" onClick={() => setView("grid")}>
//           <FaThLarge />
//         </button>
//         <button className="btn btn-outline-secondary" onClick={() => setView("list")}>
//           <FaList />
//         </button>
//       </div>

//       {/* Category Buttons */}
//       <div className="d-flex flex-wrap gap-2 mb-4">
//         {categories.map((cat, idx) => (
//           <button
//             key={idx}
//             className={`btn ${selectedCategory === cat ? "btn-primary" : "btn-outline-primary"}`}
//             onClick={() => setSelectedCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Books Display */}
//       {view === "grid" ? (
//         <div className="row g-4">
//           {books.map(book => (
//             <div className="col-md-3" key={book.id}>
//               <div className="card h-100 shadow-sm border-0 position-relative">
//                 {/* Bookmark Button on Hover */}
//                 <div
//                   className="position-absolute top-0 end-0 p-2"
//                   style={{ opacity: 0.8, cursor: "pointer" }}
//                   onClick={() => toggleBookmark(book.id)}
//                 >
//                   <FaBookmark
//                     color={bookmarks.includes(book.id) ? "red" : "grey"}
//                     size={20}
//                   />
//                 </div>

//                 <img
//                   src={book.img}
//                   alt={book.title}
//                   className="card-img-top"
//                   style={{ height: "220px", objectFit: "cover" }}
//                 />

//                 <div className="card-body text-center">
//                   <h6 className="fw-bold">{book.title}</h6>
//                   <small className="text-muted">{book.category}</small>
//                   <button className="btn btn-sm btn-primary mt-3 w-100">Read Now</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="list-group">
//           {books.map(book => (
//             <div
//               key={book.id}
//               className={`list-group-item d-flex align-items-center justify-content-between ${theme === "dark" ? "bg-dark text-light" : ""}`}
//             >
//               <div className="d-flex align-items-center gap-3">
//                 <img src={book.img} alt={book.title} style={{ width: "60px", height: "80px", objectFit: "cover" }} />
//                 <div>
//                   <h6 className="mb-0">{book.title}</h6>
//                   <small className="text-muted">{book.category}</small>
//                 </div>
//               </div>
//               <div className="d-flex gap-2 align-items-center">
//                 <FaBookmark
//                   color={bookmarks.includes(book.id) ? "red" : "grey"}
//                   size={20}
//                   style={{ cursor: "pointer" }}
//                   onClick={() => toggleBookmark(book.id)}
//                 />
//                 <button className="btn btn-sm btn-primary">Read Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { FaThLarge, FaList, FaBookmark } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Categories() {
  const { theme } = useTheme();

  // Mock book data
  const allBooks = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", img: "/images/book1.jpeg" },
    { id: 2, title: "Atomic Habits", author: "James Clear", category: "Self Help", img: "/images/book2.jpeg" },
    { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", img: "/images/book3.jpeg" },
    { id: 4, title: "Think and Grow Rich", author: "Napoleon Hill", category: "Finance", img: "/images/book4.jpeg" },
    { id: 5, title: "Ikigai", author: "Héctor García", category: "Self Help", img: "/images/book1.jpeg" },
  ];

  const categories = [
    { name: "All", color: "bg-gray-300 text-gray-800" },
    { name: "Fiction", color: "bg-blue-100 text-blue-700" },
    { name: "Self Help", color: "bg-green-100 text-green-700" },
    { name: "Finance", color: "bg-yellow-100 text-yellow-700" },
  ];

  const [books, setBooks] = useState(allBooks);
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("az");
  const [bookmarks, setBookmarks] = useState([]);

  // Filter + Sort Logic
  useEffect(() => {
    let filteredBooks = [...allBooks];

    if (selectedCategory !== "All") {
      filteredBooks = filteredBooks.filter(book => book.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      filteredBooks = filteredBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "az") filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortOption === "za") filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
    else if (sortOption === "newest") filteredBooks.sort((a, b) => b.id - a.id);
    else if (sortOption === "oldest") filteredBooks.sort((a, b) => a.id - b.id);

    setBooks(filteredBooks);
  }, [searchTerm, selectedCategory, sortOption]);

  const toggleBookmark = (bookId) => {
    setBookmarks(prev =>
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  return (
    <div className={`p-6 min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
        <h2 className="text-2xl font-bold">📚 Categories</h2>
        <ThemeToggle />
      </div>

      {/* Search, Sort, View */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-60"
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
          <button onClick={() => setView("grid")} className={`p-2 rounded-lg ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
            <FaThLarge />
          </button>
          <button onClick={() => setView("list")} className={`p-2 rounded-lg ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
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
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition 
            ${selectedCategory === cat.name ? cat.color + " ring-2 ring-blue-500" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Book Display */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map(book => (
            <div key={book.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden relative hover:shadow-lg transition">
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => toggleBookmark(book.id)}
              >
                <FaBookmark
                  className={`text-xl ${bookmarks.includes(book.id) ? "text-red-500" : "text-gray-400"}`}
                />
              </div>
              <img src={book.img} alt={book.title} className="w-full h-52 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.category}</p>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full">
                  Read Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {books.map(book => (
            <div key={book.id} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <img src={book.img} alt={book.title} className="w-16 h-20 object-cover rounded" />
                <div>
                  <h4 className="font-semibold">{book.title}</h4>
                  <p className="text-sm text-gray-500">{book.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaBookmark
                  className={`text-xl cursor-pointer ${bookmarks.includes(book.id) ? "text-red-500" : "text-gray-400"}`}
                  onClick={() => toggleBookmark(book.id)}
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Read Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
