
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
