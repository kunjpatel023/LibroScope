// import React, { useState } from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import Sidebar from '../components/Sidebar'
// import Categories from './Categories'
// import SummaryTranslation from './SummaryTranslation'
// import Profile from './Profile'
// import About from './About'
// import Contact from './Contact'
// import Subscription from './Subscription'

// export default function Dashboard({ toggleDark, dark }) {
//   const [collapsed, setCollapsed] = useState(false)

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
//       <div className="flex-1 p-6">
//         <Routes>
//           <Route path="/" element={<div><h2 className="text-2xl font-bold">Dashboard Overview</h2><p className="mt-4">Welcome to LibroScope.</p></div>} />
//           <Route path="categories" element={<Categories />} />
//           <Route path="summary-translation" element={<SummaryTranslation />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="subscription" element={<Subscription />} />
//           <Route path="*" element={<Navigate to="/dashboard" />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }
// import React from "react";
// import { FaHome, FaBook, FaLanguage, FaRobot, FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaStar } from "react-icons/fa";

// const books = [
//   { title: "The Art of War", author: "Sun Tzu", category: "Philosophy", rating: 4.8 },
//   { title: "Sapiens", author: "Yuval Noah Harari", category: "History", rating: 4.9 },
//   { title: "Atomic Habits", author: "James Clear", category: "Self-Help", rating: 4.7 },
//   { title: "1984", author: "George Orwell", category: "Fiction", rating: 4.6 },
// ];

// export default function Dashboard() {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md flex flex-col">
//         <div className="p-6 flex items-center space-x-2">
//           <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
//           <h1 className="text-lg font-bold text-purple-600">SmartShelf</h1>
//         </div>
//         <nav className="flex-1 px-4 space-y-2">
//           <SidebarItem icon={<FaHome />} text="Dashboard" active />
//           <SidebarItem icon={<FaBook />} text="Categories" />
//           <SidebarItem icon={<FaLanguage />} text="Sum & Translate" />
//           <SidebarItem icon={<FaRobot />} text="AI Chat" />
//           <SidebarItem icon={<FaUser />} text="Profile" />
//           <SidebarItem icon={<FaCog />} text="Settings" />
//           <SidebarItem icon={<FaQuestionCircle />} text="Help" />
//         </nav>
//         <div className="p-4 border-t">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">U</div>
//             <div>
//               <p className="text-sm font-semibold">John Doe</p>
//               <p className="text-xs text-gray-500">Premium User</p>
//             </div>
//           </div>
//           <button className="mt-3 flex items-center space-x-2 text-red-500 hover:text-red-600">
//             <FaSignOutAlt /> <span>Sign Out</span>
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto p-6">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <input
//             type="text"
//             placeholder="Search books, authors, or topics..."
//             className="w-1/2 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//           <div className="flex items-center space-x-4">
//             <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full">U</div>
//           </div>
//         </div>

//         {/* Welcome Card */}
//         <div className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between">
//           <div>
//             <h2 className="text-lg font-bold">
//               Welcome back, John! <span role="img" aria-label="wave">👋</span>
//             </h2>
//             <p className="text-sm text-gray-500">You've read 3 books this week. Keep up the great work!</p>
//           </div>
//           <div className="flex space-x-8 text-center">
//             <Stat title="Books Read" value="24" />
//             <Stat title="Hours" value="156" />
//             <Stat title="Avg Rating" value="4.8" />
//           </div>
//         </div>

//         {/* Highest Read */}
//         <Section title="Highest Read">
//           <div className="grid grid-cols-4 gap-4">
//             {books.map((book, i) => (
//               <BookCard key={i} {...book} />
//             ))}
//           </div>
//         </Section>
//       </main>
//     </div>
//   );
// }

// function SidebarItem({ icon, text, active }) {
//   return (
//     <div className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${active ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}>
//       {icon}
//       <span>{text}</span>
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
//         <button className="text-sm bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">Read More</button>
//       </div>
//     </div>
//   );
// }







// import React from "react";
// import Sidebar from "../components/Sidebar";
// import { FaStar } from "react-icons/fa";

// const books = [
//   { title: "The Art of War", author: "Sun Tzu", category: "Philosophy", rating: 4.8 },
//   { title: "Sapiens", author: "Yuval Noah Harari", category: "History", rating: 4.9 },
//   { title: "Atomic Habits", author: "James Clear", category: "Self-Help", rating: 4.7 },
//   { title: "1984", author: "George Orwell", category: "Fiction", rating: 4.6 },
// ];

// export default function Dashboard() {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* <Sidebar /> */}

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto p-6">
//         {/* Search */}
//         <div className="flex justify-between items-center mb-6">
//           <input
//             type="text"
//             placeholder="Search books, authors, or topics..."
//             className="w-1/2 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//           <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full">U</div>
//         </div>

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
//           <div className="grid grid-cols-4 gap-4">
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
//         <button className="text-sm bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">Read More</button>
//       </div>
//     </div>
//   );
// }







// import React, { useState } from "react";
// import {
//   FaHome,
//   FaBook,
//   FaPhone,
//   FaInfoCircle,
//   FaBars,
//   FaStar,
// } from "react-icons/fa";
// import Topbar from "../components/Topbar";
// const books = [
//   { title: "The Art of War", author: "Sun Tzu", category: "Philosophy", rating: 4.8 },
//   { title: "Sapiens", author: "Yuval Noah Harari", category: "History", rating: 4.9 },
//   { title: "Atomic Habits", author: "James Clear", category: "Self-Help", rating: 4.7 },
//   { title: "1984", author: "George Orwell", category: "Fiction", rating: 4.6 },
// ];

// export default function Dashboard() {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <Topbar />
//       {/* Sidebar */}
//       {/* <div
//         className={`bg-purple-600 text-white transition-all duration-300 flex flex-col
//         ${isCollapsed ? "w-16" : "w-56"}`}
//       >

//         <div className="flex items-center justify-between p-4 border-b border-purple-500">
//           {!isCollapsed && <h1 className="font-bold text-lg">My Library</h1>}
//           <button onClick={() => setIsCollapsed(!isCollapsed)}>
//             <FaBars />
//           </button>
//         </div>


//         <nav className="flex-1 mt-4 space-y-2">
//           <SidebarItem icon={<FaHome />} text="Home" collapsed={isCollapsed} />
//           <SidebarItem icon={<FaBook />} text="Books" collapsed={isCollapsed} />
//           <SidebarItem icon={<FaPhone />} text="Contact" collapsed={isCollapsed} />
//           <SidebarItem icon={<FaInfoCircle />} text="About Us" collapsed={isCollapsed} />
//         </nav>
//       </div> */}

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto p-6">
//         {/* Search */}
//         <div className="flex justify-between items-center mb-6">
//           <input
//             type="text"
//             placeholder="Search books, authors, or topics..."
//             className="w-1/2 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//           <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full">
//             U
//           </div>
//         </div>

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
//           <div className="grid grid-cols-4 gap-4">
//             {books.map((book, i) => (
//               <BookCard key={i} {...book} />
//             ))}
//           </div>
//         </Section>
//       </main>
//     </div>
//   );
// }

// function SidebarItem({ icon, text, collapsed }) {
//   return (
//     <div
//       className={`flex items-center gap-3 px-4 py-2 hover:bg-purple-500 cursor-pointer transition-colors duration-200`}
//     >
//       {icon}
//       {!collapsed && <span>{text}</span>}
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
//         <button className="text-sm bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// }






// import { FaSearch, FaTh, FaList, FaMoon, FaBell, FaUser } from "react-icons/fa";

// export default function Topbar({ view, setView }) {
//   return (
//     <div className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
//       {/* Search Bar */}
//       <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-1/3">
//         <FaSearch className="text-gray-400 mr-2" />
//         <input
//           type="text"
//           placeholder="Search your library..."
//           className="bg-transparent outline-none w-full text-sm text-gray-700"
//         />
//       </div>

//       {/* Grid/List Toggle */}
//       <div className="flex items-center gap-4">
//         <div className="flex bg-gray-100 rounded-full p-1">
//           <button
//             onClick={() => setView("grid")}
//             className={`p-2 rounded-full ${
//               view === "grid"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
//                 : "text-gray-500"
//             }`}
//           >
//             <FaTh />
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`p-2 rounded-full ${
//               view === "list"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
//                 : "text-gray-500"
//             }`}
//           >
//             <FaList />
//           </button>
//         </div>

//         <FaMoon className="text-gray-600 text-lg cursor-pointer" />

//         <div className="relative">
//           <FaBell className="text-gray-600 text-lg cursor-pointer" />
//           <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
//         </div>
//       </div>

//       {/* Profile */}
//       <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-white">
//         <FaUser />
//         <span>Welcome, User</span>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import {
  FaHome,
  FaBook,
  FaPhone,
  FaInfoCircle,
  FaBars,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar"; // Updated Topbar with view toggle
import BookRead from "./BookReader";
const books = [
  { title: "The Art of War", author: "Sun Tzu", category: "Philosophy", rating: 4.8 },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "History", rating: 4.9 },
  { title: "Atomic Habits", author: "James Clear", category: "Self-Help", rating: 4.7 },
  { title: "1984", author: "George Orwell", category: "Fiction", rating: 4.6 },
];

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [view, setView] = useState("grid"); // NEW: controls layout type

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Topbar */}
      <Topbar view={view} setView={setView} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Welcome Card */}
        <div className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">
              Welcome back, John! <span role="img" aria-label="wave">👋</span>
            </h2>
            <p className="text-sm text-gray-500">You've read 3 books this week. Keep it up!</p>
          </div>
          <div className="flex space-x-8 text-center">
            <Stat title="Books Read" value="24" />
            <Stat title="Hours" value="156" />
            <Stat title="Avg Rating" value="4.8" />
          </div>
        </div>

        {/* Highest Read */}
        <Section title="Highest Read">
          <div className={view === "grid" ? "grid grid-cols-4 gap-4" : "flex flex-col gap-4"}>
            {books.map((book, i) => (
              <BookCard key={i} {...book} />
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs text-gray-500">{title}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-3">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <button className="text-sm text-purple-500">View All</button>
      </div>
      {children}
    </div>
  );
}

function BookCard({ title, author, category, rating }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <div className="mb-3">
        <span className="bg-gray-100 text-xs px-2 py-1 rounded">{category}</span>
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-xs text-gray-500 mb-2">by {author}</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center space-x-1 text-yellow-500">
          <FaStar size={14} /> <span className="text-sm">{rating}</span>
        </div>
        <button className="text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white px-3 py-1 rounded hover:bg-purple-600">
  <Link to="/bookreader" className="text-white">
    Read More
  </Link>
</button>
      </div>
    </div>
  );
}
