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
