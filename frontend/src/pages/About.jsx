

// // src/pages/About.jsx
// import React, { useState } from "react";

// const teamMembers = [
//   {
//     name: "Sarah Johnson",
//     role: "CEO & Founder",
//     image: "/images/sarah.jpg", // replace with your image path
//     desc: "Former Google engineer with a passion for making knowledge accessible to everyone.",
//     link: "#",
//   },
//   {
//     name: "Michael Chen",
//     role: "CTO",
//     image: "/images/michael.jpg",
//     desc: "AI researcher specializing in natural language processing and machine learning.",
//     link: "#",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Head of Product",
//     image: "/images/emily.jpg",
//     desc: "UX designer focused on creating intuitive reading experiences.",
//     link: "#",
//   },
//   {
//     name: "David Kim",
//     role: "Lead Developer",
//     image: "/images/david.jpg",
//     desc: "Full-stack developer building scalable solutions for millions of readers.",
//     link: "#",
//   },
// ];

// const techStack = [
//   "Next.js & React",
//   "TypeScript",
//   "Tailwind CSS",
//   "Framer Motion",
//   "OpenAI GPT-4",
//   "Google Translate API",
//   "Node.js",
//   "PostgreSQL",
//   "Redis",
//   "AWS",
// ];

// const faqs = [
//   { question: "How does SmartShelf work?", answer: "SmartShelf uses AI to translate, summarize, and enhance your reading experience." },
//   { question: "What languages are supported for translation?", answer: "We support over 100 languages via the Google Translate API." },
//   { question: "How accurate are the AI summaries?", answer: "Our AI summaries are powered by GPT-4 and are highly accurate, but we recommend cross-referencing for critical content." },
//   { question: "Can I use SmartShelf offline?", answer: "Offline support is coming soon — stay tuned!" },
// ];

// export default function About() {
//   const [openFAQ, setOpenFAQ] = useState(null);

//   return (
//     <div className="bg-[#f5f1e6] min-h-screen text-gray-900 m-8 rounded-3xl">
//       {/* Meet Our Team */}
//       <section className="max-w-6xl mx-auto py-16 px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
//           {teamMembers.map((member, i) => (
//             <div key={i}>
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
//               />
//               <h3 className="font-semibold text-lg">{member.name}</h3>
//               <a href={member.link} className="text-blue-600 text-sm">{member.role}</a>
//               <p className="mt-2 text-sm text-gray-600">{member.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Technology Stack */}
//       <section className="bg-white max-w-6xl mx-auto rounded-2xl shadow-md p-10 mb-16">
//         <h2 className="text-2xl font-bold text-center mb-6">Technology Stack</h2>
//         <p className="text-center text-gray-600 mb-6">
//           Built with cutting-edge technologies to ensure performance, scalability, and reliability
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           {techStack.map((tech, i) => (
//             <span key={i} className="bg-gray-100 px-4 py-2 rounded-lg text-sm shadow-sm">
//               {tech}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="max-w-6xl mx-auto px-6 mb-16">
//         <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqs.map((faq, i) => (
//             <div key={i} className="bg-white rounded-lg shadow-md">
//               <button
//                 className="w-full flex justify-between items-center px-6 py-4 text-left font-medium"
//                 onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
//               >
//                 {faq.question}
//                 <span>{openFAQ === i ? "−" : "+"}</span>
//               </button>
//               {openFAQ === i && (
//                 <div className="px-6 pb-4 text-gray-600 text-sm">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 mt-12 border-t">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-6">
//           <p>© {new Date().getFullYear()} SmartShelf. All rights reserved.</p>
//           <div className="flex gap-4 mt-4 md:mt-0">
//             <a href="#" className="hover:text-gray-800">Privacy Policy</a>
//             <a href="#" className="hover:text-gray-800">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
      
//     </div>
//   );
// }


// src/pages/About.jsx
// import React, { useState } from "react";

// const teamMembers = [
//   {
//     name: "Sarah Johnson",
//     role: "CEO & Founder",
//     image: "/images/sarah.jpg",
//     desc: "Former Google engineer with a passion for making knowledge accessible to everyone.",
//     link: "#",
//   },
//   {
//     name: "Michael Chen",
//     role: "CTO",
//     image: "/images/michael.jpg",
//     desc: "AI researcher specializing in natural language processing and machine learning.",
//     link: "#",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Head of Product",
//     image: "/images/emily.jpg",
//     desc: "UX designer focused on creating intuitive reading experiences.",
//     link: "#",
//   },
//   {
//     name: "David Kim",
//     role: "Lead Developer",
//     image: "/images/david.jpg",
//     desc: "Full-stack developer building scalable solutions for millions of readers.",
//     link: "#",
//   },
// ];

// const techStack = [
//   "Next.js & React",
//   "TypeScript",
//   "Tailwind CSS",
//   "Framer Motion",
//   "OpenAI GPT-4",
//   "Google Translate API",
//   "Node.js",
//   "PostgreSQL",
//   "Redis",
//   "AWS",
// ];

// const faqs = [
//   { question: "How does SmartShelf work?", answer: "SmartShelf uses AI to translate, summarize, and enhance your reading experience." },
//   { question: "What languages are supported for translation?", answer: "We support over 100 languages via the Google Translate API." },
//   { question: "How accurate are the AI summaries?", answer: "Our AI summaries are powered by GPT-4 and are highly accurate, but we recommend cross-referencing for critical content." },
//   { question: "Can I use SmartShelf offline?", answer: "Offline support is coming soon — stay tuned!" },
// ];

// export default function About() {
//   const [openFAQ, setOpenFAQ] = useState(null);

//   return (
//     <div className="bg-[#f5f1e6] min-h-screen text-gray-900 m-4 sm:m-6 md:m-8 rounded-2xl sm:rounded-3xl">
      
//       {/* Meet Our Team */}
//       <section className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Meet Our Team</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
//           {teamMembers.map((member, i) => (
//             <div key={i} className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
//               />
//               <h3 className="font-semibold text-lg">{member.name}</h3>
//               <a href={member.link} className="text-blue-600 text-sm block">{member.role}</a>
//               <p className="mt-2 text-sm text-gray-600">{member.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Technology Stack */}
//       <section className="bg-white max-w-6xl mx-auto rounded-2xl shadow-md p-8 sm:p-10 mb-12 mr-6 ml-6">
//         <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Technology Stack</h2>
//         <p className="text-center text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
//           Built with cutting-edge technologies to ensure performance, scalability, and reliability
//         </p>
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
//           {techStack.map((tech, i) => (
//             <span
//               key={i}
//               className="bg-gray-100 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm shadow-sm hover:bg-gray-200 transition"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
//         <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Frequently Asked Questions</h2>
//         <div className="space-y-3 sm:space-y-4">
//           {faqs.map((faq, i) => (
//             <div key={i} className="bg-white rounded-lg shadow-md">
//               <button
//                 className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left font-medium text-sm sm:text-base"
//                 onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
//               >
//                 {faq.question}
//                 <span className="text-lg">{openFAQ === i ? "−" : "+"}</span>
//               </button>
//               {openFAQ === i && (
//                 <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-xs sm:text-sm">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-4 sm:py-6 mt-8 border-t">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 px-4 sm:px-6">
//           <p>© {new Date().getFullYear()} SmartShelf. All rights reserved.</p>
//           <div className="flex gap-3 sm:gap-4 mt-3 md:mt-0">
//             <a href="#" className="hover:text-gray-800">Privacy Policy</a>
//             <a href="#" className="hover:text-gray-800">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }







// import React, { useState } from "react";

// // ===== Team Members =====
// const teamMembers = [
//   {
//     name: "Sarah Johnson",
//     role: "CEO & Founder",
//     image: "/images/sarah.jpg",
//     desc: "Former Google engineer with a passion for making knowledge accessible to everyone.",
//     link: "#",
//   },
//   {
//     name: "Michael Chen",
//     role: "CTO",
//     image: "/images/michael.jpg",
//     desc: "AI researcher specializing in natural language processing and machine learning.",
//     link: "#",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Head of Product",
//     image: "/images/emily.jpg",
//     desc: "UX designer focused on creating intuitive reading experiences.",
//     link: "#",
//   },
//   {
//     name: "David Kim",
//     role: "Lead Developer",
//     image: "/images/david.jpg",
//     desc: "Full-stack developer building scalable solutions for millions of readers.",
//     link: "#",
//   },
// ];

// // ===== Tech Stack =====
// const techStack = [
//   "Next.js & React",
//   "TypeScript",
//   "Tailwind CSS",
//   "Framer Motion",
//   "OpenAI GPT-4",
//   "Google Translate API",
//   "Node.js",
//   "PostgreSQL",
//   "Redis",
//   "AWS",
// ];

// // ===== FAQs =====
// const faqs = [
//   {
//     question: "How does SmartShelf work?",
//     answer:
//       "SmartShelf uses AI to translate, summarize, and enhance your reading experience.",
//   },
//   {
//     question: "What languages are supported for translation?",
//     answer:
//       "We support over 100 languages via the Google Translate API.",
//   },
//   {
//     question: "How accurate are the AI summaries?",
//     answer:
//       "Our AI summaries are powered by GPT-4 and are highly accurate, but we recommend cross-referencing for critical content.",
//   },
//   {
//     question: "Can I use SmartShelf offline?",
//     answer: "Offline support is coming soon — stay tuned!",
//   },
// ];

// export default function About() {
//   const [openFAQ, setOpenFAQ] = useState(null);

//   return (
//     <div className="bg-[#f5f1e6] min-h-screen text-gray-900 m-4 sm:m-6 md:m-8 rounded-2xl sm:rounded-3xl overflow-hidden">
      
//       {/* Hero Section */}
//       <section className="text-center py-12 sm:py-16 bg-gradient-to-r from-[#f5f1e6] to-white">
//         <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
//           About <span className="text-blue-600">SmartShelf</span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base">
//           SmartShelf is on a mission to make knowledge accessible to everyone,
//           everywhere. We blend AI, translation, and design to transform how you
//           read and learn.
//         </p>
//       </section>

//       {/* Our Values */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Values</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//           <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="font-semibold text-lg mb-2">Innovation</h3>
//             <p className="text-sm text-gray-600">
//               We embrace AI and technology to build smarter reading tools.
//             </p>
//           </div>
//           <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
//             <p className="text-sm text-gray-600">
//               Breaking barriers by supporting translations in 100+ languages.
//             </p>
//           </div>
//           <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="font-semibold text-lg mb-2">Community</h3>
//             <p className="text-sm text-gray-600">
//               Empowering readers around the world to share and learn together.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Meet Our Team */}
//       <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Meet Our Team</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
//           {teamMembers.map((member, i) => (
//             <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
//               />
//               <h3 className="font-semibold text-lg">{member.name}</h3>
//               <a href={member.link} className="text-blue-600 text-sm block">{member.role}</a>
//               <p className="mt-2 text-sm text-gray-600">{member.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Technology Stack */}
//       <section className="bg-white max-w-6xl mx-auto rounded-2xl shadow-md p-8 sm:p-10 mb-12">
//         <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Technology Stack</h2>
//         <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
//           Built with cutting-edge technologies to ensure performance, scalability, and reliability.
//         </p>
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
//           {techStack.map((tech, i) => (
//             <span
//               key={i}
//               className="bg-gray-100 px-4 py-2 rounded-lg text-xs sm:text-sm shadow-sm hover:bg-gray-200 transition"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
//         <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqs.map((faq, i) => (
//             <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <button
//                 className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-base hover:bg-gray-50 transition"
//                 onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
//               >
//                 {faq.question}
//                 <span className="text-lg">{openFAQ === i ? "−" : "+"}</span>
//               </button>
//               <div
//                 className={`px-6 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
//                   openFAQ === i ? "max-h-40 pb-4" : "max-h-0 overflow-hidden"
//                 }`}
//               >
//                 {faq.answer}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 mt-8 border-t">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-6">
//           <p>© {new Date().getFullYear()} SmartShelf. All rights reserved.</p>
//           <div className="flex gap-4 mt-3 md:mt-0">
//             <a href="#" className="hover:text-gray-800">Privacy Policy</a>
//             <a href="#" className="hover:text-gray-800">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { User, Code, BookOpen, PenTool } from "lucide-react";

// const teamMembers = [
//   {
//     name: "Sarah Johnson",
//     role: "CEO & Founder",
//     icon: <User size={50} className="text-purple-500" />,
//     desc: "Former Google engineer with a passion for making knowledge accessible to everyone.",
//     link: "#",
//   },
//   {
//     name: "Michael Chen",
//     role: "CTO",
//     icon: <Code size={50} className="text-blue-500" />,
//     desc: "AI researcher specializing in natural language processing and machine learning.",
//     link: "#",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Head of Product",
//     icon: <PenTool size={50} className="text-green-500" />,
//     desc: "UX designer focused on creating intuitive reading experiences.",
//     link: "#",
//   },
//   {
//     name: "David Kim",
//     role: "Lead Developer",
//     icon: <BookOpen size={50} className="text-orange-500" />,
//     desc: "Full-stack developer building scalable solutions for millions of readers.",
//     link: "#",
//   },
// ];

// const techStack = [
//   "Next.js & React",
//   "TypeScript",
//   "Tailwind CSS",
//   "Framer Motion",
//   "OpenAI GPT-4",
//   "Google Translate API",
//   "Node.js",
//   "PostgreSQL",
//   "Redis",
//   "AWS",
// ];

// const faqs = [
//   {
//     question: "How does SmartShelf work?",
//     answer:
//       "SmartShelf uses AI to translate, summarize, and enhance your reading experience.",
//   },
//   {
//     question: "What languages are supported for translation?",
//     answer:
//       "We support over 100 languages via the Google Translate API.",
//   },
//   {
//     question: "How accurate are the AI summaries?",
//     answer:
//       "Our AI summaries are powered by GPT-4 and are highly accurate, but we recommend cross-referencing for critical content.",
//   },
//   {
//     question: "Can I use SmartShelf offline?",
//     answer: "Offline support is coming soon — stay tuned!",
//   },
// ];

// export default function About() {
//   const [openFAQ, setOpenFAQ] = useState(null);

//   return (
//     <div className="bg-[#f5f1e6] min-h-screen text-gray-900 m-4 sm:m-6 md:m-8 rounded-2xl sm:rounded-3xl">

//       {/* FEATURES */}
//       <section
//         id="features"
//         className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-purple-50 rounded-2xl"
//       >
//         <h2 className="text-3xl font-bold text-center text-purple-600">
//           Powerful Features
//         </h2>
//         <p className="text-center text-gray-600 mt-2">
//           Everything you need to enhance your reading experience
//         </p>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {[
//             {
//               title: "AI Summaries",
//               desc: "Get intelligent summaries of any book in seconds, powered by advanced AI technology.",
//               icon: "📖",
//             },
//             {
//               title: "Smart Translation",
//               desc: "Translate summaries and content into multiple languages with context-aware AI.",
//               icon: "🌐",
//             },
//             {
//               title: "AI Chatbot",
//               desc: "Ask questions about books and get instant, intelligent responses from our AI assistant.",
//               icon: "💬",
//             },
//             {
//               title: "Personalized Recommendations",
//               desc: "Discover new books tailored to your interests and reading history.",
//               icon: "✨",
//             },
//           ].map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl text-2xl mb-4">
//                 {f.icon}
//               </div>
//               <h3 className="font-bold text-lg mb-2">{f.title}</h3>
//               <p className="text-gray-600">{f.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* TEAM SECTION */}
//       <section className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Meet Our Team</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
//           {teamMembers.map((member, i) => (
//             <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
//               <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 shadow mb-4">
//                 {member.icon}
//               </div>
//               <h3 className="font-semibold text-lg">{member.name}</h3>
//               <a href={member.link} className="text-blue-600 text-sm block">{member.role}</a>
//               <p className="mt-2 text-sm text-gray-600">{member.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* TECHNOLOGY STACK */}
//       <section className="bg-white max-w-6xl mx-auto rounded-2xl shadow-md p-8 sm:p-10 mb-12 mr-6 ml-6">
//         <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Technology Stack</h2>
//         <p className="text-center text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
//           Built with cutting-edge technologies to ensure performance, scalability, and reliability
//         </p>
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
//           {techStack.map((tech, i) => (
//             <span
//               key={i}
//               className="bg-gray-100 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm shadow-sm hover:bg-gray-200 transition"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
//         <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Frequently Asked Questions</h2>
//         <div className="space-y-3 sm:space-y-4">
//           {faqs.map((faq, i) => (
//             <div key={i} className="bg-white rounded-lg shadow-md">
//               <button
//                 className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left font-medium text-sm sm:text-base"
//                 onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
//               >
//                 {faq.question}
//                 <span className="text-lg">{openFAQ === i ? "−" : "+"}</span>
//               </button>
//               {openFAQ === i && (
//                 <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-xs sm:text-sm">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-4 sm:py-6 mt-8 border-t">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 px-4 sm:px-6">
//           <p>© {new Date().getFullYear()} SmartShelf. All rights reserved.</p>
//           <div className="flex gap-3 sm:gap-4 mt-3 md:mt-0">
//             <a href="#" className="hover:text-gray-800">Privacy Policy</a>
//             <a href="#" className="hover:text-gray-800">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// src/pages/About.jsx
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
      <section className="py-16 px-6 rounded-[50px] bg-white dark:bg-gray-900">
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
      <section className="py-16 px-6 bg-white rounded-[50px] dark:bg-gray-900">
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

      {/* Footer */}
      {/* <footer className="text-center py-6 text-sm bg-gray-100 dark:bg-gray-800">
        <p>© {new Date().getFullYear()} SmartRead eLibrary. All rights reserved.</p>
      </footer> */}
    </div>
  )
}
