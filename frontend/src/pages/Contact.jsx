
import React from "react";
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f6f2ea] px-6 py-10 m-8 rounded-3xl">
      {/* Back Link */}
      <div className="flex items-center gap-2 mb-6">
        <ArrowLeft size={18} />
        <Link to="/dashboard" className="text-sm text-gray-600">
          Back to Dashboard
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about SmartShelf? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>

          {/* Email */}
          <div className="flex items-start gap-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Mail className="text-blue-500" size={20} />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600 text-sm">support@smartshelf.com</p>
              <p className="text-gray-600 text-sm">hello@smartshelf.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <Phone className="text-green-500" size={20} />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-600 text-sm">+91 98765 43210</p>
              <p className="text-gray-600 text-sm">+91 87654 32109</p>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-start gap-3 mb-6">
            <div className="bg-purple-100 p-2 rounded-lg">
              <MapPin className="text-purple-500" size={20} />
            </div>
            <div>
              <h3 className="font-medium">Office</h3>
              <p className="text-gray-600 text-sm">
                123 Tech Park, Innovation District<br />
                Bangalore, Karnataka 560001<br />
                India
              </p>
            </div>
          </div>

          {/* Support Hours */}
          <div className="flex items-start gap-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Clock className="text-orange-500" size={20} />
            </div>
            <div>
              <h3 className="font-medium">Support Hours</h3>
              <p className="text-gray-600 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                Saturday: 10:00 AM - 4:00 PM IST<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your full name"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
                required
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
                required
              />
            </div>

            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
              required
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="feedback">Feedback</option>
            </select>

            <textarea
              placeholder="Tell us how we can help you..."
              rows={4}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 justify-center w-full shadow-md"
            >
              <span>Send Message</span>
            </button>

            <p className="text-xs text-gray-500 bg-blue-50 p-2 rounded-lg">
              <strong className="text-blue-600">Response Time:</strong> We typically respond within 24 hours during business days. For urgent technical issues, please call our support line.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
