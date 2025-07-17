// src/components/Sidebar.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const navItems = [
    { name: "Home", path: "/dashboard" },
    { name: "Book Categories", path: "/categories" },
    { name: "Summary", path: "/summary" },
    { name: "Translate", path: "/translate" },
    { name: "Q&A", path: "/qa" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <motion.aside
      className="w-64 min-h-screen p-6 bg-[#1C1F26] text-white fixed"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
    >
      <h1 className="text-2xl font-bold mb-6">📖 SmartRead AI</h1>
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="hover:text-amber-400 transition"
          >
            {item.name}
          </Link>
        ))}
        <button className="mt-8 text-sm text-red-400 hover:underline">Logout</button>
      </nav>
    </motion.aside>
  );
}
