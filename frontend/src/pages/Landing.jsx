import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgImage from '../assets/background.jpeg';

import fictionImg from '../assets/categories/book2.jpeg';
import scienceImg from '../assets/categories/book3.jpeg';
import historyImg from '../assets/categories/crime3.jpeg';
import bioImg from '../assets/categories/love2.jpeg';
import eduImg from '../assets/categories/love3.jpeg';


export default function Landing() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="text-white font-sans">
       <motion.nav
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between 
             bg-white/10 backdrop-blur-md shadow-md text-white"
>
  {/* Logo */}
  <h1 className="text-2xl font-bold tracking-wider">LibroScope</h1>

  {/* Links */}
  <div className="hidden md:flex gap-6 text-sm font-medium">
    <a href="#about" className="hover:text-purple-300 transition">About Us</a>
    <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
    <a href="#faq" className="hover:text-purple-300 transition">FAQ</a>
  </div>

  {/* Get Started */}
  <button
    onClick={() => navigate('/login')}
    className="bg-gradient-to-r  from-yellow-600 to-amber-500 hover:to-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300"
  >
    Get Started
  </button>
</motion.nav>



      {/* Hero Section - Full screen with background */}
      {/* Hero Section - Full screen with background image */}
<section
  className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/20 z-0" />

  {/* Animated text */}
  <motion.div
    className="relative z-10 max-w-3xl px-6"
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.3,
        },
      },
    }}
  >
    <motion.h1
      className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      Read Smarter. Learn Faster.
    </motion.h1>

    <motion.p
      className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
    >
      Summarize, Translate, and Explore Books with the Power of AI
    </motion.p>

    <motion.button
      onClick={() => navigate('/login')}
      className="bg-gradient-to-r  from-yellow-600 to-amber-500 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.6 }}
    >
      Get Started
    </motion.button>
  </motion.div>
</section>

      {/* Scroll Target Content */}
      <div className="bg-black">
        
       

        {/* Features Section */}
        
        <motion.section
        id="features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 py-16 bg-black bg-opacity-10"
        >
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Features</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {[
      {
        icon: '📄',
        title: 'Summarize Instantly',
        desc: 'Get clean, chapter-wise summaries of any book in seconds using AI.',
      },
      {
        icon: '🌍',
        title: 'Translate Seamlessly',
        desc: 'Translate summaries into multiple languages with one click.',
      },
      {
        icon: '✍',
        title: 'Generate Stories or Insights',
        desc: 'Input a topic or keyword and let AI create content around it.',
      },
      {
        icon: '❓',
        title: 'Ask AI Questions',
        desc: 'Ask questions about any book — characters, ideas, themes — and get smart answers.',
      },
      {
        icon: '🔍',
        title: 'Smart Book Search',
        desc: 'Search books using natural language, title, or subject to find exactly what you want.',
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.03 }}
        className="bg-gradient-to-br from-black to-amber-500 via-yellow-600 to-orange-700 p-6 rounded-xl shadow-md transition duration-300"
      >
        <div className="text-4xl mb-3">{item.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-white">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>


        <motion.section
  id="how-it-works"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="px-6 py-16 bg-black bg-opacity-20"
>
  <h2 className="text-3xl font-bold text-center mb-12 text-white">
    How It Works
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {/* Step 1 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-xl p-8 shadow-md transition duration-300 bg-gradient-to-br from-black-900 to-amber-500 via-yellow-600 to-orange-700"
    >
      <h3 className="text-xl font-semibold mb-2 text-white">📚 Step 1: Choose a Book</h3>
      <p className="text-white text-sm">
        Browse our library or upload your own PDF book. Our platform supports various formats and categories to explore.
      </p>
    </motion.div>

    {/* Step 2 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-xl p-8 shadow-md transition duration-300 bg-gradient-to-br from-black-900 to-amber-500 via-yellow-600 to-orange-700"
    >
      <h3 className="text-xl font-semibold mb-2 text-white">⚙️ Step 2: Select a Feature</h3>
      <p className="text-white text-sm">
        Summarize chapters, translate content, ask AI-powered questions, or generate insights — all with one click.
      </p>
    </motion.div>

    {/* Step 3 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-xl p-8 shadow-md transition duration-300 bg-gradient-to-br from-black-900 to-amber-500 via-yellow-600 to-orange-700"
    >
      <h3 className="text-xl font-semibold mb-2 text-white">🤖 Step 3: Let AI Do the Work</h3>
      <p className="text-white text-sm">
        Our smart backend uses advanced AI models to quickly analyze and return readable summaries, translations, or responses.
      </p>
    </motion.div>

    {/* Step 4 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-xl p-8 shadow-md transition duration-300 bg-gradient-to-br from-black-900 to-amber-500 via-yellow-600 to-orange-700"
    >
      <h3 className="text-xl font-semibold mb-2 text-white">💾 Step 4: Save or Share</h3>
      <p className="text-white text-sm">
        Download your summary, save it to your account, or share it with your peers. Personalized recommendations appear next.
      </p>
    </motion.div>
  </div>
</motion.section>

<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="px-6 bg-black py-12"
>
  <h3 className="text-2xl font-semibold mb-6 text-center">Explore Categories</h3>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
    {/* Fiction */}
    <div className="text-center">
      <img src={fictionImg}  alt="Fiction" className="h-60 rounded-2xl mx-auto mb-2" />
      <p className="text-white text-sm">Fiction</p>
    </div>
    {/* Science */}
    <div className="text-center">
      <img src={scienceImg} alt="Science" className="h-60 rounded-2xl mx-auto mb-2" />
      <p className="text-white text-sm">Science</p>
    </div>
    {/* History */}
    <div className="text-center">
      <img src={historyImg} alt="History" className="h-60 rounded-2xl mx-auto mb-2" />
      <p className="text-white text-sm">History</p>
    </div>
    {/* Biography */}
    <div className="text-center">
      <img src={bioImg} alt="Biography" className="h-60 rounded-2xl mx-auto mb-2" />
      <p className="text-white text-sm">Biography</p>
    </div>
    {/* Education */}
    <div className="text-center">
      <img src={eduImg} alt="Education" className="h-60 rounded-2xl mx-auto mb-2" />
      <p className="text-white text-sm">Education</p>
    </div>
  </div>

  <p className="text-sm text-gray-300 mt-4 bg-black text-center">*Login to explore books in each category</p>
</motion.section>

        {/* Why Choose Us */}
        <motion.section
  id="why-libroscope"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="px-6  py-16 bg-gradient-to-br from-[#000000] via-[#000000] via-[#000000] to-[#000000]"
>
  <h2 className="text-3xl font-bold text-center mb-12 text-white">Why LibroScope?</h2>

  <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-6xl mx-auto">
    {/* Point 1 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-8 rounded-xl shadow-md bg-gradient-to-br from-black-900 to-amber-500 via-yellow-600 to-orange-700 transition duration-300"
    >
      <h3 className="text-xl font-bold text-white mb-2">📚 AI-Powered Learning</h3>
      <p className="text-white text-sm">
        LibroScope uses advanced AI models to summarize, translate, and analyze books — making learning fast, easy, and personalized.
      </p>
    </motion.div>

    {/* Point 2 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-8 rounded-xl shadow-md bg-gradient-to-br from-black-900 to-amber-500 via-yellow-600 to-orange-700 transition duration-300"
    >
      <h3 className="text-xl font-bold text-white mb-2">🌍 Accessible for Everyone</h3>
      <p className="text-white text-sm">
        With text-to-speech, language translation, and clean UI, LibroScope is designed for readers of all backgrounds and abilities.
      </p>
    </motion.div>

    {/* Point 3 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-8 rounded-xl shadow-md bg-gradient-to-br from-black-900 to-amber-500 via-yellow-600 to-orange-700 transition duration-300"
    >
      <h3 className="text-xl font-bold text-white mb-2">🤖 Smart Recommendations</h3>
      <p className="text-white text-sm">
        Finish a book? Instantly get personalized suggestions based on your interest and reading history.
      </p>
    </motion.div>

    {/* Point 4 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-8 rounded-xl shadow-md bg-gradient-to-br from-black-900 to-amber-500 via-yellow-600 to-orange-700 transition duration-300"
    >
      <h3 className="text-xl font-bold text-white mb-2">💾 Save & Share</h3>
      <p className="text-white text-sm">
        Download summaries, save your notes, and share your learning with friends, classmates, or coworkers.
      </p>
    </motion.div>
  </div>
</motion.section>


        {/* Footer */}
        <motion.footer
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm text-white-400 py-6 mt-10 border-t bg-black border-white border-opacity-10"
        >
          <p>© 2025 LibroScope. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
