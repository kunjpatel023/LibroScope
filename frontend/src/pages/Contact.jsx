
// import React from "react";
// import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-[#f6f2ea] px-6 py-10 m-8 rounded-3xl">
//       {/* Back Link */}
//       <div className="flex items-center gap-2 mb-6">
//         <ArrowLeft size={18} />
//         <Link to="/dashboard" className="text-sm text-gray-600">
//           Back to Dashboard
//         </Link>
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Left: Contact Info */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
//           <p className="text-gray-600 mb-8">
//             Have questions about SmartShelf? We'd love to hear from you.
//             Send us a message and we'll respond as soon as possible.
//           </p>

//           {/* Email */}
//           <div className="flex items-start gap-3 mb-6">
//             <div className="bg-blue-100 p-2 rounded-lg">
//               <Mail className="text-blue-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Email</h3>
//               <p className="text-gray-600 text-sm">support@smartshelf.com</p>
//               <p className="text-gray-600 text-sm">hello@smartshelf.com</p>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex items-start gap-3 mb-6">
//             <div className="bg-green-100 p-2 rounded-lg">
//               <Phone className="text-green-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Phone</h3>
//               <p className="text-gray-600 text-sm">+91 98765 43210</p>
//               <p className="text-gray-600 text-sm">+91 87654 32109</p>
//             </div>
//           </div>

//           {/* Office */}
//           <div className="flex items-start gap-3 mb-6">
//             <div className="bg-purple-100 p-2 rounded-lg">
//               <MapPin className="text-purple-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Office</h3>
//               <p className="text-gray-600 text-sm">
//                 123 Tech Park, Innovation District<br />
//                 Bangalore, Karnataka 560001<br />
//                 India
//               </p>
//             </div>
//           </div>

//           {/* Support Hours */}
//           <div className="flex items-start gap-3">
//             <div className="bg-orange-100 p-2 rounded-lg">
//               <Clock className="text-orange-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Support Hours</h3>
//               <p className="text-gray-600 text-sm">
//                 Monday - Friday: 9:00 AM - 6:00 PM IST<br />
//                 Saturday: 10:00 AM - 4:00 PM IST<br />
//                 Sunday: Closed
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Contact Form */}
//         <div className="bg-white shadow rounded-xl p-6">
//           <h2 className="text-lg font-semibold mb-4">Send us a Message</h2>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Your full name"
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="your.email@example.com"
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
//                 required
//               />
//             </div>

//             <select
//               className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
//               required
//             >
//               <option value="">Select a subject</option>
//               <option value="general">General Inquiry</option>
//               <option value="support">Technical Support</option>
//               <option value="feedback">Feedback</option>
//             </select>

//             <textarea
//               placeholder="Tell us how we can help you..."
//               rows={4}
//               className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
//               required
//             />

//             <button
//               type="submit"
//               className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 justify-center w-full shadow-md"
//             >
//               <span>Send Message</span>
//             </button>

//             <p className="text-xs text-gray-500 bg-blue-50 p-2 rounded-lg">
//               <strong className="text-blue-600">Response Time:</strong> We typically respond within 24 hours during business days. For urgent technical issues, please call our support line.
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-[#f6f2ea] px-4 sm:px-6 py-6 sm:py-10 m-2 sm:m-8 rounded-3xl">
//       {/* Back Link */}
//       <div className="flex items-center gap-2 mb-6">
//         <ArrowLeft size={18} />
//         <Link to="/dashboard" className="text-sm text-gray-600 hover:underline">
//           Back to Dashboard
//         </Link>
//       </div>

//       {/* Title */}
//       <h1 className="text-2xl sm:text-3xl font-bold mb-8">Contact Us</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left: Contact Info */}
//         <div>
//           <h2 className="text-lg sm:text-xl font-semibold mb-4">Get in Touch</h2>
//           <p className="text-gray-600 mb-8 text-sm sm:text-base">
//             Have questions about SmartShelf? We'd love to hear from you.
//             Send us a message and we'll respond as soon as possible.
//           </p>

//           {/* Email */}
//           <div className="flex items-start gap-3 mb-6">
//             <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
//               <Mail className="text-blue-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Email</h3>
//               <p className="text-gray-600 text-sm">support@smartshelf.com</p>
//               <p className="text-gray-600 text-sm">hello@smartshelf.com</p>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex items-start gap-3 mb-6">
//             <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
//               <Phone className="text-green-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Phone</h3>
//               <p className="text-gray-600 text-sm">+91 98765 43210</p>
//               <p className="text-gray-600 text-sm">+91 87654 32109</p>
//             </div>
//           </div>

//           {/* Office */}
//           <div className="flex items-start gap-3 mb-6">
//             <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
//               <MapPin className="text-purple-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Office</h3>
//               <p className="text-gray-600 text-sm">
//                 123 Tech Park, Innovation District<br />
//                 Bangalore, Karnataka 560001<br />
//                 India
//               </p>
//             </div>
//           </div>

//           {/* Support Hours */}
//           <div className="flex items-start gap-3">
//             <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
//               <Clock className="text-orange-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Support Hours</h3>
//               <p className="text-gray-600 text-sm">
//                 Monday - Friday: 9:00 AM - 6:00 PM IST<br />
//                 Saturday: 10:00 AM - 4:00 PM IST<br />
//                 Sunday: Closed
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Contact Form */}
//         <div className="bg-white shadow rounded-xl p-4 sm:p-6">
//           <h2 className="text-lg font-semibold mb-4">Send us a Message</h2>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Your full name"
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="your.email@example.com"
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>

//             <select
//               className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             >
//               <option value="">Select a subject</option>
//               <option value="general">General Inquiry</option>
//               <option value="support">Technical Support</option>
//               <option value="feedback">Feedback</option>
//             </select>

//             <textarea
//               placeholder="Tell us how we can help you..."
//               rows={4}
//               className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />

//             <button
//               type="submit"
//               className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 justify-center w-full shadow-md hover:opacity-90 transition"
//             >
//               <span>Send Message</span>
//             </button>

//             <p className="text-xs text-gray-500 bg-blue-50 p-2 rounded-lg">
//               <strong className="text-blue-600">Response Time:</strong> We typically respond within 24 hours during business days. For urgent technical issues, please call our support line.
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/submit/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         alert("✅ Your message has been sent successfully!");
//         setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
//       } else {
//         alert("⚠️ Something went wrong. Please try again.");
//       }
//     } catch (err) {
//       alert("❌ Server error. Could not send message.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f0efe9] px-4 sm:px-6 py-6 sm:py-10 m-2 sm:m-8 rounded-3xl">
//       {/* Back Link */}
//       <div className="flex items-center gap-2 mb-6">
//         <ArrowLeft size={18} />
//         <Link to="/dashboard" className="text-sm text-gray-600 hover:underline">
//           Back to Dashboard
//         </Link>
//       </div>

//       {/* Title */}
//       <h1 className="text-2xl sm:text-3xl font-bold mb-8">Contact Us</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left: Contact Info (same as before) */}
//         <div>
//           <h2 className="text-lg sm:text-xl font-semibold mb-4">Get in Touch</h2>
//           <p className="text-gray-600 mb-8 text-sm sm:text-base">
//             Have questions about SmartShelf? We'd love to hear from you.
//             Send us a message and we'll respond as soon as possible.
//           </p>

//           {/* Email */}
//           <div className="flex items-start gap-3 mb-6">
//             <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
//               <Mail className="text-blue-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Email</h3>
//               <p className="text-gray-600 text-sm">support@smartshelf.com</p>
//               <p className="text-gray-600 text-sm">hello@smartshelf.com</p>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex items-start gap-3 mb-6">
//             <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
//               <Phone className="text-green-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Phone</h3>
//               <p className="text-gray-600 text-sm">+91 98765 43210</p>
//               <p className="text-gray-600 text-sm">+91 87654 32109</p>
//             </div>
//           </div>

//           {/* Office */}
//           <div className="flex items-start gap-3 mb-6">
//             <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
//               <MapPin className="text-purple-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Office</h3>
//               <p className="text-gray-600 text-sm">
//                 123 Tech Park, Innovation District<br />
//                 Bangalore, Karnataka 560001<br />
//                 India
//               </p>
//             </div>
//           </div>

//           {/* Support Hours */}
//           <div className="flex items-start gap-3">
//             <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
//               <Clock className="text-orange-500" size={20} />
//             </div>
//             <div>
//               <h3 className="font-medium">Support Hours</h3>
//               <p className="text-gray-600 text-sm">
//                 Monday - Friday: 9:00 AM - 6:00 PM IST<br />
//                 Saturday: 10:00 AM - 4:00 PM IST<br />
//                 Sunday: Closed
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Contact Form (Connected to Backend) */}
//         <div className="bg-white shadow rounded-xl p-4 sm:p-6">
//           <h2 className="text-lg font-semibold mb-4">Send us a Message</h2>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your full name"
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="your.email@example.com"
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>

//             <select
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400"
//               required
//             >
//               <option value="">Select a subject</option>
//               <option value="General Inquiry">General Inquiry</option>
//               <option value="Technical Support">Technical Support</option>
//               <option value="Feedback">Feedback</option>
//             </select>

//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Tell us how we can help you..."
//               rows={4}
//               className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400"
//               required
//             />

//             <button
//               type="submit"
//               className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 justify-center w-full shadow-md hover:opacity-90 transition"
//             >
//               <span>Send Message</span>
//             </button>

//             <p className="text-xs text-gray-500 bg-blue-50 p-2 rounded-lg">
//               <strong className="text-blue-600">Response Time:</strong> We typically respond within 24 hours during business days. For urgent technical issues, please call our support line.
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }





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
          Contact <span className="text-blue-600 dark:text-blue-400">SmartShelf</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg">
          Have questions about <strong>SmartShelf</strong>? We're here to help you.
          Get in touch with us and we’ll respond as soon as possible.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-1 px-3">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">📞 Get in Touch</h2>

            {/* Email */}
            <div className="flex items-start gap-3 mb-6">
              <Mail className="text-blue-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">support@smartshelf.com</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">hello@smartshelf.com</p>
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
            className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 justify-center w-full shadow-md transition"
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
