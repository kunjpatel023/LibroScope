import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>© {new Date().getFullYear()} LibroScope — Read smarter.</div>
          <div className="mt-3 md:mt-0">Made with ❤️ • Privacy • Terms</div>
        </div>
      </div>
    </footer>
  )
}
