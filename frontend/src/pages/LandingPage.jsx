// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import BookCard from '../components/BookCard'
// import { Link } from 'react-router-dom'

// const sampleBooks = [
//   { id: 1, title: 'Deep Learning', author: 'Ian Goodfellow', tags: ['AI','ML'], image: '/images/book1.jpg' },
//   { id: 2, title: 'Clean Code', author: 'Robert C. Martin', tags: ['Dev','Best Practices'], image: '/images/book1.jpg' },
//   { id: 3, title: 'Atomic Habits', author: 'James Clear', tags: ['Self Help'], image: '/images/book1.jpg' }
// ]

// export default function LandingPage({ toggleDark, dark }) {
//   return (
//     <>
//       <Navbar dark={dark} toggleDark={toggleDark} />
//       <main className="pt-20">
//         {/* Hero */}
//         <section id="home" className="min-h-screen flex items-center">
//           <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">LibroScope</h1>
//               <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Read Smarter. Learn Faster. AI-powered summaries, translations and chat-for-books.</p>
//               <div className="mt-6 flex gap-3">
//                 <Link to="/login" className="px-6 py-3 rounded bg-primary text-white shadow">Get Started</Link>
//                 <a href="#explore" className="px-6 py-3 rounded border">Explore books</a>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <div className="rounded-xl overflow-hidden shadow-lg">
//                 <div className="bg-gradient-to-br from-primary/60 to-purple-500 p-8 text-white">
//                   <h3 className="text-2xl font-semibold">Featured</h3>
//                   <p className="mt-2">Try the summary generator with any uploaded PDF.</p>
//                 </div>
//                 <div className="grid grid-cols-2 gap-2 p-4 bg-white dark:bg-gray-800">
//                   {sampleBooks.map(b => <div key={b.id} className="p-2 bg-gray-50 dark:bg-gray-700 rounded">{b.title}</div>)}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Explore */}
//         <section id="explore" className="py-16">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-2xl font-bold mb-6">Explore books</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {sampleBooks.map(b => <BookCard key={b.id} book={b} />)}
//             </div>
//           </div>
//         </section>

//         {/* Features */}
//         <section id="features" className="py-16 bg-white dark:bg-gray-900">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-2xl font-bold mb-6">Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="p-6 rounded-lg bg-gradient-to-br from-white to-primary/5 shadow">AI Summary + Translation</div>
//               <div className="p-6 rounded-lg bg-gradient-to-br from-white to-primary/5 shadow">Full Book Reader</div>
//               <div className="p-6 rounded-lg bg-gradient-to-br from-white to-primary/5 shadow">Chatbot for Q&A</div>
//             </div>
//           </div>
//         </section>

//         {/* About */}
//         <section id="about" className="py-16">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-2xl font-bold mb-4">About Us</h2>
//             <p className="text-gray-600 dark:text-gray-300">LibroScope helps readers consume more by using AI-powered summarization and translation.</p>
//           </div>
//         </section>

//         <Footer />
//       </main>
//     </>
//   )
// }






// import React from "react";
// import { Link } from "react-router-dom";
// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import BookCard from '../components/BookCard';
// import { Link } from 'react-router-dom';
// import { FaInfoCircle, FaEnvelope, FaThLarge, FaList } from 'react-icons/fa';

// const sampleBooks = [
//   { id: 1, title: 'Deep Learning', author: 'Ian Goodfellow', tags: ['AI','ML'], image: '/images/book1.jpg' },
//   { id: 2, title: 'Clean Code', author: 'Robert C. Martin', tags: ['Dev','Best Practices'], image: '/images/book1.jpg' },
//   { id: 3, title: 'Atomic Habits', author: 'James Clear', tags: ['Self Help'], image: '/images/book1.jpg' }
// ];

// export default function LandingPage({ toggleDark, dark }) {
//   const [isGridView, setIsGridView] = useState(true);

//   return (
//     <>
//       <Navbar dark={dark} toggleDark={toggleDark} />
//       <main className="pt-20">

//         {/* Hero Section */}
//         <section id="home" className="min-h-screen flex items-center">
//           <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
//             {/* Left side */}
//             <div>
//               <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">LibroScope</h1>
//               <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
//                 Read Smarter. Learn Faster. AI-powered summaries, translations and chat-for-books.
//               </p>
//               <div className="mt-6 flex gap-3">
//                 <Link to="/login" className="px-6 py-3 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow">Get Started</Link>
//                 <a href="#explore" className="px-6 py-3 rounded border dark:border-gray-500">Explore books</a>
//               </div>
//             </div>

//             {/* Right side */}
//             <div className="hidden md:block">
//               <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
//                 <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-white">
//                   <h3 className="text-2xl font-semibold">Featured</h3>
//                   <p className="mt-2">Try the summary generator with any uploaded PDF.</p>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 p-4">
//                   {sampleBooks.map(b => (
//                     <div key={b.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 flex flex-col items-center">
//                       <img src={b.image} alt={b.title} className="w-full h-28 object-cover rounded-md mb-2" />
//                       <span className="text-sm font-medium text-center">{b.title}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Explore Books */}
//         <section id="explore" className="py-16">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold">Explore books</h2>
//               <div className="flex bg-gray-100 dark:bg-gray-700 rounded-full p-1">
//                 <button
//                   className={`p-2 rounded-full ${isGridView ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : ""}`}
//                   onClick={() => setIsGridView(true)}
//                 >
//                   <FaThLarge />
//                 </button>
//                 <button
//                   className={`p-2 rounded-full ${!isGridView ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : ""}`}
//                   onClick={() => setIsGridView(false)}
//                 >
//                   <FaList />
//                 </button>
//               </div>
//             </div>

//             <div className={isGridView ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
//               {sampleBooks.map(b => <BookCard key={b.id} book={b} />)}
//             </div>
//           </div>
//         </section>

//         {/* About & Contact */}
//         <section id="about" className="py-16 bg-white dark:bg-gray-900">
//           <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
//             <div>
//               <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//                 <FaInfoCircle /> About Us
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300">
//                 LibroScope helps readers consume more by using AI-powered summarization and translation.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//                 <FaEnvelope /> Contact Us
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Email us at <a href="mailto:contact@libroscope.com" className="text-blue-500">contact@libroscope.com</a>
//               </p>
//             </div>
//           </div>
//         </section>

//         <Footer />
//       </main>
//     </>
//   );
// }





// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const categories = [
//   "Fiction",
//   "Science",
//   "History",
//   "Technology",
//   "Comics",
//   "Philosophy",
//   "Biography",
// ];

// const books = [
//   { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "https://picsum.photos/200/300?1" },
//   { id: 2, title: "Atomic Habits", author: "James Clear", img: "https://picsum.photos/200/300?2" },
//   { id: 3, title: "Sapiens", author: "Yuval Noah Harari", img: "https://picsum.photos/200/300?3" },
//   { id: 4, title: "Clean Code", author: "Robert C. Martin", img: "https://picsum.photos/200/300?4" },
//   { id: 5, title: "Harry Potter", author: "J.K. Rowling", img: "https://picsum.photos/200/300?5" },
//   { id: 6, title: "The Alchemist", author: "Paulo Coelho", img: "https://picsum.photos/200/300?6" },
// ];

// const LandingPage = () => {
//   const [search, setSearch] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20 px-6 text-center">
//         <h1 className="text-5xl font-bold mb-4">Welcome to SmartShelf</h1>
//         <p className="text-lg mb-8">
//           Discover, read, and enjoy books from a variety of genres.
//         </p>

//         {/* Search Bar */}
//         <div className="flex justify-center items-center max-w-xl mx-auto bg-white rounded-full shadow-md overflow-hidden">
//           <input
//             type="text"
//             placeholder="Search for books..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
//           />
//           <button className="bg-indigo-500 px-4 py-3 text-white">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Categories */}
//         <div className="flex flex-wrap justify-center mt-6 gap-3">
//           {categories.map((cat, idx) => (
//             <span
//               key={idx}
//               className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-md cursor-pointer hover:bg-white/30 transition"
//             >
//               {cat}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Featured Books */}
//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//           Featured Books
//         </h2>
//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {books
//             .filter((book) =>
//               book.title.toLowerCase().includes(search.toLowerCase())
//             )
//             .map((book) => (
//               <div
//                 key={book.id}
//                 className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//               >
//                 <img
//                   src={book.img}
//                   alt={book.title}
//                   className="w-full h-60 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {book.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm">{book.author}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;






// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// // import { LightningBoltIcon } from "@heroicons/react/outline";
// import { LightningBoltIcon } from "@heroicons/react/24/outline";
// import { GlobeAltIcon, UserGroupIcon, BookOpenIcon, StarIcon } from "@heroicons/react/24/solid";
// // import { GlobeAltIcon, UserGroupIcon, BookOpenIcon, StarIcon } from "@heroicons/react/solid";

// export default function LandingPage({ toggleDark, dark }) {
//   return (
//     <>
//       <Navbar dark={dark} toggleDark={toggleDark} />
//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fdfdfd] to-[#f7f2f9] dark:from-gray-900 dark:to-gray-800">
//           <div className="max-w-5xl mx-auto px-6 text-center">
//             {/* Tagline */}
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full mb-6 shadow">
//               <LightningBoltIcon className="w-5 h-5" />
//               <span className="text-sm font-medium">AI-Powered Reading Experience</span>
//             </div>

//             {/* Title */}
//             <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               LibroScope
//             </h1>

//             {/* Subtitle */}
//             <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Your intelligent eLibrary for summaries, translations, and more.
//               Transform how you read with the power of AI.
//             </p>

//             {/* Buttons */}
//             <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 to="/signup"
//                 className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow hover:opacity-90"
//               >
//                 Get Started Free
//               </Link>
//               <button className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 font-medium shadow hover:opacity-90">
//                 Watch Demo
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <UserGroupIcon className="w-8 h-8 mx-auto text-blue-500" />
//                 <p className="text-xl font-bold mt-2">50K+</p>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">Active Readers</p>
//               </div>
//               <div>
//                 <BookOpenIcon className="w-8 h-8 mx-auto text-blue-500" />
//                 <p className="text-xl font-bold mt-2">100K+</p>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">Books Processed</p>
//               </div>
//               <div>
//                 <GlobeAltIcon className="w-8 h-8 mx-auto text-blue-500" />
//                 <p className="text-xl font-bold mt-2">50+</p>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">Languages Supported</p>
//               </div>
//               <div>
//                 <StarIcon className="w-8 h-8 mx-auto text-blue-500" />
//                 <p className="text-xl font-bold mt-2">4.9/5</p>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">User Rating</p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </main>
//     </>
//   );
// }






// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { MdBolt } from "react-icons/md";
// import { FaGlobe, FaUserFriends, FaBookOpen, FaStar } from "react-icons/fa";

// export default function LandingPage({ toggleDark, dark }) {
//   return (
//     <>
//       <Navbar dark={dark} toggleDark={toggleDark} />
//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fdfdfd] to-[#f7f2f9] dark:from-gray-900 dark:to-gray-800">
//           <div className="max-w-5xl mx-auto px-6 text-center">
//             {/* Tagline */}
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full mb-6 shadow">
//               <MdBolt className="w-5 h-5" />
//               <span className="text-sm font-medium">AI-Powered Reading Experience</span>
//             </div>

//             {/* Title */}
//             <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               LibroScope
//             </h1>

//             {/* Subtitle */}
//             <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Your intelligent eLibrary for summaries, translations, and more.
//               Transform how you read with the power of AI.
//             </p>

//             {/* Buttons */}
//             <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 to="/signup"
//                 className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow hover:opacity-90"
//               >
//                 Get Started Free
//               </Link>
//               <button className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 font-medium shadow hover:opacity-90">
//                 Watch Demo
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <FaUserFriends className="w-8 h-8 mx-auto text-blue-500" />
//                 <p className="text-xl font-bold mt-2">50K+</p>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">Active Readers</p>
//               </div>
//               <div>
//                 <FaBookOpen className="w-8 h-8 mx-auto text-blue-500" />
//                 <p className="text-xl font-bold mt-2">100K+</p>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">Books Processed</p>
//               </div>
//               <div>
//                 <FaGlobe className="w-8 h-8 mx-auto text-blue-500" />
//                 <p className="text-xl font-bold mt-2">50+</p>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">Languages Supported</p>
//               </div>
//               <div>
//                 <FaStar className="w-8 h-8 mx-auto text-blue-500" />
//                 <p className="text-xl font-bold mt-2">4.9/5</p>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">User Rating</p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </main>
//     </>
//   );
// }





// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function LandingPage({ toggleDark, dark }) {
//   return (
//     <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
//       <Navbar toggleDark={toggleDark} dark={dark} />

//       {/* Explore Popular Books */}
//       <section className="py-12 px-6 md:px-16">
//         <h2 className="text-3xl font-bold text-center">Explore Popular Books</h2>
//         <p className="text-center text-gray-500 mt-2">
//           Discover trending books and their AI-powered summaries
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//           {[
//             { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "/images/gatsby.jpg" },
//             { title: "1984", author: "George Orwell", img: "/images/1984.jpg" },
//             { title: "To Kill a Mockingbird", author: "Harper Lee", img: "/images/mockingbird.jpg" },
//             { title: "Pride and Prejudice", author: "Jane Austen", img: "/images/pride.jpg" }
//           ].map((book, i) => (
//             <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden">
//               <img
//                 src={book.img}
//                 alt={book.title}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg">{book.title}</h3>
//                 <p className="text-gray-500">{book.author}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Powerful Features */}
//       <section className="py-16 px-6 md:px-16 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center">Powerful Features</h2>
//         <p className="text-center text-gray-500 mt-2">
//           Everything you need for an enhanced reading experience
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//           {[
//             { icon: "📖", title: "Smart Summaries", desc: "Get AI-powered summaries of any book in seconds" },
//             { icon: "🌍", title: "Multi-language Translation", desc: "Translate summaries and content to 50+ languages" },
//             { icon: "🤖", title: "AI Chatbot", desc: "Ask questions about books and get instant answers" },
//             { icon: "✨", title: "Smart Recommendations", desc: "Discover new books based on your preferences" }
//           ].map((feature, i) => (
//             <div key={i} className="bg-white shadow-md rounded-xl p-6 text-center">
//               <div className="text-4xl">{feature.icon}</div>
//               <h3 className="font-bold text-lg mt-4">{feature.title}</h3>
//               <p className="text-gray-500 mt-2">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 px-6 md:px-16">
//         <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
//         <p className="text-center text-gray-500 mt-2">
//           Everything you need to know about SmartShelf
//         </p>
//         <div className="max-w-2xl mx-auto mt-8 space-y-4">
//           {[
//             "How does SmartShelf work?",
//             "What languages are supported?",
//             "How accurate are the summaries?",
//             "What are the pricing plans?"
//           ].map((question, i) => (
//             <details
//               key={i}
//               className="bg-white shadow-md rounded-lg p-4"
//             >
//               <summary className="cursor-pointer font-medium">{question}</summary>
//               <p className="text-gray-500 mt-2">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                 Donec vehicula quam vel orci pharetra, sit amet blandit justo pretium.
//               </p>
//             </details>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
//         <h2 className="text-3xl font-bold">Ready to Transform Your Reading?</h2>
//         <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md">
//           Get Started
//         </button>
//       </section>

//       <Footer />
//     </div>
//   );
// }





// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function LandingPage({ toggleDark, dark }) {
//   return (
//     <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
//       <Navbar toggleDark={toggleDark} dark={dark} />

//       {/* Hero Section */}
//       <section className="relative text-center py-20 px-6 bg-gradient-to-b from-white via-purple-50 to-white">
//         <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-sm font-medium text-purple-700">
//           ⚡ AI-Powered Reading Experience
//         </div>

//         <h1 className="mt-6 text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//           SmartShelf
//         </h1>

//         <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//           Your intelligent eLibrary for summaries, translations, and more.
//           Transform how you read with the power of AI.
//         </p>

//         <div className="mt-8 flex justify-center gap-4">
//           <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition">
//             Get Started Free
//           </button>
//           <button className="px-6 py-3 rounded-lg bg-gray-100 text-gray-800 font-semibold shadow hover:bg-gray-200 transition">
//             Watch Demo
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//           {[
//             { icon: "👥", value: "50K+", label: "Active Readers" },
//             { icon: "📚", value: "100K+", label: "Books Processed" },
//             { icon: "🌍", value: "50+", label: "Languages Supported" },
//             { icon: "⭐", value: "4.9/5", label: "User Rating" }
//           ].map((stat, i) => (
//             <div key={i} className="text-center">
//               <div className="text-3xl mb-2">{stat.icon}</div>
//               <div className="text-xl font-bold">{stat.value}</div>
//               <div className="text-gray-500">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-10">
//           <button className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
//             ⌄
//           </button>
//         </div>
//          {/* Explore Popular Books */}
//       <section className="py-12 px-6 md:px-16">
//         <h2 className="text-3xl font-bold text-center">Explore Popular Books</h2>
//         <p className="text-center text-gray-500 mt-2">
//           Discover trending books and their AI-powered summaries
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//           {[
//             { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "/images/gatsby.jpg" },
//             { title: "1984", author: "George Orwell", img: "/images/1984.jpg" },
//             { title: "To Kill a Mockingbird", author: "Harper Lee", img: "/images/mockingbird.jpg" },
//             { title: "Pride and Prejudice", author: "Jane Austen", img: "/images/pride.jpg" }
//           ].map((book, i) => (
//             <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden">
//               <img
//                 src={book.img}
//                 alt={book.title}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg">{book.title}</h3>
//                 <p className="text-gray-500">{book.author}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Powerful Features */}
//       <section className="py-16 px-6 md:px-16 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center">Powerful Features</h2>
//         <p className="text-center text-gray-500 mt-2">
//           Everything you need for an enhanced reading experience
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//           {[
//             { icon: "📖", title: "Smart Summaries", desc: "Get AI-powered summaries of any book in seconds" },
//             { icon: "🌍", title: "Multi-language Translation", desc: "Translate summaries and content to 50+ languages" },
//             { icon: "🤖", title: "AI Chatbot", desc: "Ask questions about books and get instant answers" },
//             { icon: "✨", title: "Smart Recommendations", desc: "Discover new books based on your preferences" }
//           ].map((feature, i) => (
//             <div key={i} className="bg-white shadow-md rounded-xl p-6 text-center">
//               <div className="text-4xl">{feature.icon}</div>
//               <h3 className="font-bold text-lg mt-4">{feature.title}</h3>
//               <p className="text-gray-500 mt-2">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 px-6 md:px-16">
//         <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
//         <p className="text-center text-gray-500 mt-2">
//           Everything you need to know about SmartShelf
//         </p>
//         <div className="max-w-2xl mx-auto mt-8 space-y-4">
//           {[
//             "How does SmartShelf work?",
//             "What languages are supported?",
//             "How accurate are the summaries?",
//             "What are the pricing plans?"
//           ].map((question, i) => (
//             <details
//               key={i}
//               className="bg-white shadow-md rounded-lg p-4"
//             >
//               <summary className="cursor-pointer font-medium">{question}</summary>
//               <p className="text-gray-500 mt-2">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                 Donec vehicula quam vel orci pharetra, sit amet blandit justo pretium.
//               </p>
//             </details>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
//         <h2 className="text-3xl font-bold">Ready to Transform Your Reading?</h2>
//         <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md">
//           Get Started
//         </button>
//       </section>

//       </section>

//       <Footer />
//     </div>
//   );
// }



// src/pages/LandingPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPage({ toggleDark, dark }) {
  // common style for sections to avoid nav overlap when using anchors
  const sectionStyle = { scrollMarginTop: "84px" }; // adjust if your nav is taller/shorter

  return (
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors`}>
      <Navbar toggleDark={toggleDark} dark={dark} />

      {/* HERO */}
      <section
        id="home"
        style={sectionStyle}
        className="relative text-center flex items-center justify-center min-h-screen pt-28 px-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 "
      >
         {/* <section
        id="home"
        style={sectionStyle}
        className="relative text-center flex items-center justify-center min-h-screen pt-28 px-6 bg-gradient-to-b from-white via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      > */}
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-sm font-medium text-purple-700 dark:from-purple-800/40 dark:to-blue-800/40">
            ⚡ AI-Powered Reading Experience
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            SmartShelf
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your intelligent eLibrary for summaries, translations, and more.
            Transform how you read with the power of AI.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#explore"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-95 transition"
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          
          <div className="mt-10">
            <a href="#explore" className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
              ⌄
            </a>
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section id="explore" style={sectionStyle} className="py-12 px-6 md:px-16">
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "👥", value: "50K+", label: "Active Readers" },
              { icon: "📚", value: "100K+", label: "Books Processed" },
              { icon: "🌍", value: "50+", label: "Languages Supported" },
              { icon: "⭐", value: "4.9/5", label: "User Rating" }
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-gray-500 dark:text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
          <br />
          <br />

        <h2 className="text-3xl font-bold text-center">Explore Popular Books</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Discover trending books and their AI-powered summaries
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "/images/book1.jpeg" },
            { title: "1984", author: "George Orwell", img: "/images/book2.jpeg" },
            { title: "To Kill a Mockingbird", author: "Harper Lee", img: "/images/book3.jpeg" },
            { title: "Pride and Prejudice", author: "Jane Austen", img: "/images/book4.jpeg" }
          ].map((book, i) => (
            <div key={i} className={`rounded-xl overflow-hidden shadow-md ${dark ? "bg-gray-800" : "bg-white"}`}>
              <img src={book.img} alt={book.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{book.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={sectionStyle} className={`${dark ? "bg-gray-800" : "bg-gray-50"} py-16 px-6 md:px-16`}>
        <h2 className="text-3xl font-bold text-center">Powerful Features</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Everything you need for an enhanced reading experience
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[
            { icon: "📖", title: "Smart Summaries", desc: "Get AI-powered summaries of any book in seconds" },
            { icon: "🌍", title: "Multi-language Translation", desc: "Translate summaries and content to 50+ languages" },
            { icon: "🤖", title: "AI Chatbot", desc: "Ask questions about books and get instant answers" },
            { icon: "✨", title: "Smart Recommendations", desc: "Discover new books based on your preferences" }
          ].map((f, i) => (
            <div key={i} className={`rounded-xl p-6 text-center shadow-md ${dark ? "bg-gray-900" : "bg-white"}`}>
              <div className="text-4xl">{f.icon}</div>
              <h3 className="font-bold text-lg mt-4">{f.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={sectionStyle} className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center">About SmartShelf</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Everything you need to know about our mission & vision.
        </p>
      </section>

      <Footer />
    </div>
  );
}
