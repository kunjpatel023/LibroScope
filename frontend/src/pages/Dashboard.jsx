// src/pages/Dashboard.jsx
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import BookCard from '../components/BookCard';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const books = [
    { id: 1, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", cover: "/assets/wings.jpg" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", cover: "/assets/alchemist.jpg" },
    { id: 3, title: "Atomic Habits", author: "James Clear", cover: "/assets/atomic.jpg" },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#FAF3EB] via-[#CDE6C6] to-[#F2B5A0] text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 space-y-6">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to your Library 📚
          </motion.h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {books.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
