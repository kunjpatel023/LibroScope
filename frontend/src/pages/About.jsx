import { motion } from "framer-motion"
import { BookOpen, Languages, FileText, Users, Globe, Sparkles } from "lucide-react"
import Footer from "../components/Footer"

export default function About() {
  return (
    <div className="min-h-screen bg-[#f0efe9] text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About <span className="text-blue-600 dark:text-blue-400">SmartRead eLibrary</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg">
          Welcome to <strong>SmartRead eLibrary</strong>, your intelligent digital library built for
          modern readers. We help you save time, overcome language barriers, and enjoy a smarter
          reading experience.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 rounded-[50px] bg-white dark:bg-gray-900 mr-6">
        <h2 className="text-3xl font-semibold text-center mb-12">✨ What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md text-center"
          >
            <FileText className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Summaries</h3>
            <p>Get concise, meaningful summaries of books and PDFs in just seconds.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md text-center"
          >
            <Languages className="w-12 h-12 mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seamless Translations</h3>
            <p>Break language barriers with instant translations into your preferred language.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md text-center"
          >
            <BookOpen className="w-12 h-12 mx-auto text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interactive Reading</h3>
            <p>Bookmark, highlight, and organize your books with a clean interface.</p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">🌍 Our Vision</h2>
        <p className="max-w-3xl mx-auto text-center text-lg">
          We aim to create a global eLibrary where knowledge is accessible, understandable, and
          enjoyable for everyone — without being limited by time, language, or complexity.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-white rounded-[50px] dark:bg-gray-900 mr-6">
        <h2 className="text-3xl font-semibold text-center mb-12">👨‍💻 Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <Users className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold">Developers</h3>
            <p className="text-center text-sm">
              Building smooth, responsive, and user-friendly reading experiences.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <Sparkles className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold">AI Experts</h3>
            <p className="text-center text-sm">
              Powering the smart features like summarization and translation.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <Globe className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold">Community</h3>
            <p className="text-center text-sm">
              Our growing family of readers, learners, and knowledge-seekers worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
