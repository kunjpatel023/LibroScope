import React from "react"
import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#F5F5F5] to-[#E8E2D6] text-gray-700 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            LibroScope
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Your AI-powered eLibrary for summaries, translations, and more.
            Discover, learn, and explore knowledge in smarter ways.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="hover:text-purple-500 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-purple-500 transition">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/summarytranslation" className="hover:text-purple-500 transition">
                Summary & Translation
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="hover:text-purple-500 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-purple-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-purple-500 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-purple-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LibroScope. All rights reserved.
      </div>
    </footer>
  )
}
