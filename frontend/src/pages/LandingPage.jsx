import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingPage({ toggleDark, dark }) {
  const navigate = useNavigate();
  const sectionStyle = { scrollMarginTop: "84px" };

  const bookData = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "/images/book1.jpeg" },
    { title: "1984", author: "George Orwell", img: "/images/book2.jpeg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", img: "/images/book3.jpeg" },
    { title: "Pride and Prejudice", author: "Jane Austen", img: "/images/book4.jpeg" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800, // faster
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const faqData = [
    { q: "How does SmartShelf summarize books?", a: "We use advanced AI algorithms to extract key insights from books and generate concise summaries." },
    { q: "Can I translate summaries into my language?", a: "Yes! Our platform supports translations into 50+ languages instantly." },
    { q: "Is SmartShelf free to use?", a: "You can get started for free. Premium plans unlock advanced features and unlimited summaries." },
    { q: "Can I read full books here?", a: "Currently, SmartShelf focuses on summaries and translations, not full book content." },
  ];

  const rotatingTexts = ["SmartShelf", "AI Library", "Book Summaries", "Translations"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900 transition-colors duration-500">
      <Navbar toggleDark={toggleDark} dark={false} />

      {/* HERO */}
      <section
        id="home"
        style={sectionStyle}
        className="relative text-center flex items-center justify-center min-h-screen pt-28 px-6 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 overflow-hidden"
      >
        {/* Glow blobs */}
        <div className="absolute w-80 h-80 bg-purple-300/40 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-blue-300/40 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>

        {/* Floating books */}
        <motion.img
          src="/images/love1.jpeg"
          alt="Floating book"
          className="absolute w-28 h-48 top-32 left-12 rounded-lg shadow-2xl border border-purple-200"
          animate={{ y: [0, -30, 0], rotate: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute w-28 h-48 bottom-28 right-16 rounded-lg shadow-2xl border border-blue-200 bg-blue-100/20"
          animate={{ y: [0, -20, 0], rotate: [8, -8, 8] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        >
          <img src="/images/love2.jpeg" alt="Floating book" className="w-full h-full object-cover rounded-lg" />
        </motion.div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 text-sm font-medium text-purple-700 shadow-md">
            ⚡ AI-Powered Reading Experience
          </div>

          <motion.h1
            key={currentText}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            {rotatingTexts[currentText]}
          </motion.h1>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Your intelligent eLibrary for summaries, translations, and more.
            Transform how you read with the power of AI.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/auth"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section id="explore" style={sectionStyle} className="py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mt-12">Explore Popular Books</h2>
        <p className="text-center text-gray-500 mt-2">Discover trending books and their AI-powered summaries</p>
        <div className="mt-8">
          <Slider {...sliderSettings}>
            {bookData.map((book, i) => (
              <div key={i} className="p-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate("/auth")}
                  className="max-w-[220px] mx-auto rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl transition"
                >
                  <img src={book.img} alt={book.title} className="w-full h-56 object-cover" />
                  <div className="p-3">
                    <h3 className="font-bold text-base">{book.title}</h3>
                    <p className="text-sm text-gray-500">{book.author}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={sectionStyle} className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-purple-50">
        <h2 className="text-3xl font-bold text-center text-purple-600">Powerful Features</h2>
        <p className="text-center text-gray-600 mt-2">Everything you need to enhance your reading experience</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            { title: "AI Summaries", desc: "Get intelligent summaries of any book in seconds, powered by advanced AI technology.", icon: "📖" },
            { title: "Smart Translation", desc: "Translate summaries and content into multiple languages with context-aware AI.", icon: "🌐" },
            { title: "AI Chatbot", desc: "Ask questions about books and get instant, intelligent responses from our AI assistant.", icon: "💬" },
            { title: "Personalized Recommendations", desc: "Discover new books tailored to your interests and reading history.", icon: "✨" },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    {/* ABOUT US */}
<motion.section
  id="about"
  className="py-16 px-6 md:px-16 bg-gray-50"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Text */}
    <div>
      <h2 className="text-3xl font-bold mb-6 text-purple-600">About SmartShelf</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        SmartShelf is your AI-powered reading companion. We help you **instantly summarize** books, 
        **translate** them into over 50 languages, and even answer your questions about their content.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Whether you’re a student needing quick notes, a researcher diving deep into topics, or a casual 
        reader curious about new books — SmartShelf lets you explore knowledge faster and smarter.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Our mission is simple: **make reading smarter, easier, and more accessible** for everyone.
      </p>
    </div>

    {/* Right: Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <img
        src="/images/lib1.jpg"
        alt="About SmartShelf"
        className="rounded-2xl shadow-lg max-w-full h-auto"
      />
    </motion.div>

  </div>
</motion.section>

      {/* FOOTER */}
      {/* <Footer /> */}
    </div>
  );
}
