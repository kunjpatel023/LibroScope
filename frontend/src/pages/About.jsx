
// src/pages/About.jsx
import React, { useState } from "react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/images/sarah.jpg", // replace with your image path
    desc: "Former Google engineer with a passion for making knowledge accessible to everyone.",
    link: "#",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/images/michael.jpg",
    desc: "AI researcher specializing in natural language processing and machine learning.",
    link: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    image: "/images/emily.jpg",
    desc: "UX designer focused on creating intuitive reading experiences.",
    link: "#",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "/images/david.jpg",
    desc: "Full-stack developer building scalable solutions for millions of readers.",
    link: "#",
  },
];

const techStack = [
  "Next.js & React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "OpenAI GPT-4",
  "Google Translate API",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "AWS",
];

const faqs = [
  { question: "How does SmartShelf work?", answer: "SmartShelf uses AI to translate, summarize, and enhance your reading experience." },
  { question: "What languages are supported for translation?", answer: "We support over 100 languages via the Google Translate API." },
  { question: "How accurate are the AI summaries?", answer: "Our AI summaries are powered by GPT-4 and are highly accurate, but we recommend cross-referencing for critical content." },
  { question: "Can I use SmartShelf offline?", answer: "Offline support is coming soon — stay tuned!" },
];

export default function About() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="bg-[#f5f1e6] min-h-screen text-gray-900">
      {/* Meet Our Team */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {teamMembers.map((member, i) => (
            <div key={i}>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <a href={member.link} className="text-blue-600 text-sm">{member.role}</a>
              <p className="mt-2 text-sm text-gray-600">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white max-w-6xl mx-auto rounded-2xl shadow-md p-10 mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Technology Stack</h2>
        <p className="text-center text-gray-600 mb-6">
          Built with cutting-edge technologies to ensure performance, scalability, and reliability
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => (
            <span key={i} className="bg-gray-100 px-4 py-2 rounded-lg text-sm shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                {faq.question}
                <span>{openFAQ === i ? "−" : "+"}</span>
              </button>
              {openFAQ === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 mt-12 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-6">
          <p>© {new Date().getFullYear()} SmartShelf. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
