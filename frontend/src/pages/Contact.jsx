import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/api/submit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("❌ Server error. Could not send message.");
    }
  };

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
          Contact <span className="text-blue-600 dark:text-blue-400">LibroScope</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg">
          Have questions about <strong>LibroScope</strong>? We're here to help you.
          Get in touch with us and we’ll respond as soon as possible.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-1 px-3">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-white dark:bg-gray-900 rounded-[50px] shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">📞 Get in Touch</h2>

            {/* Email */}
            <div className="flex items-start gap-3 mb-6">
              <Mail className="text-blue-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">support@libroscope.com</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">hello@libroscope.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 mb-6">
              <Phone className="text-green-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">+91 98765 43210</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">+91 87654 32109</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-purple-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium">Office</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  123 Tech Park, Innovation District <br />
                  Bangalore, Karnataka 560001 <br />
                  India
                </p>
              </div>
            </div>

            {/* Support Hours */}
            <div className="flex items-start gap-3">
              <Clock className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium">Support Hours</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM IST <br />
                  Sat: 10:00 AM - 4:00 PM IST <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-white dark:bg-gray-900 rounded-[50px] shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">✉️ Send Us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Feedback">Feedback</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                rows={4}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400"
                required
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-[50px] flex items-center gap-2 justify-center w-full shadow-md transition"
              >
                <span>Send Message</span>
              </button>

              <p className="text-xs text-gray-500 bg-blue-50 p-2 rounded-lg dark:bg-gray-700">
                <strong className="text-blue-600 dark:text-blue-400">Response Time:</strong> We
                typically respond within 24 hours during business days. For urgent technical
                issues, please call our support line.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
