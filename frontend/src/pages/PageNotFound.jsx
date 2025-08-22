import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFoundPage() {
  return (
    <div className="bg-[#f0efe9] text-gray-900 min-h-screen flex flex-col">
      {/* 404 Section */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 text-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
          Oops! The page you’re looking for doesn’t exist or may have been
          moved.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    </div>
  );
}
