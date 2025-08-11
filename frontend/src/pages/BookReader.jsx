import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;

export default function BookReader() {
  const { id } = useParams();
  const nav = useNavigate();

  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState('summary');

  const pdfPath = '/books/sample.pdf'; // example

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-indigo-600">SmartShelf</h1>
          {/* <button 
            onClick={() => nav('/dashboard')} 
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90"
          >
            Get Started
          </button> */}
        </div>

        {/* Book Details Section */}
        <div className="flex gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          {/* Book Cover */}
          <div className="w-56 flex-shrink-0">
            <img 
              src="/images/book3.jpeg" 
              alt="The Great Gatsby" 
              className="rounded-xl shadow-lg"
            />
            <button 
              onClick={() => setActiveTab('reader')} 
              className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90"
            >
              Continue from page 45
            </button>
            <div className="flex gap-2 mt-3">
              <button className="flex-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:opacity-80">Save</button>
              <button className="flex-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:opacity-80">Share</button>
            </div>
            <button className="mt-3 text-indigo-500 hover:underline">▶ Listen to Summary</button>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-lg font-semibold">4.2</span>
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-sm text-gray-500">180 pages</span>
            </div>
          </div>

          {/* Book Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold">The Great Gatsby</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-2">by F. Scott Fitzgerald</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Classic Literature • 1925 • 1247 ratings</p>
            
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">About this book</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Set in the summer of 1922, The Great Gatsby follows narrator Nick Carraway's interactions 
                with his mysterious neighbor Jay Gatsby and Gatsby's obsession with his former lover, 
                Daisy Buchanan. The novel is set in the fictional towns of West Egg and East Egg on Long Island, New York.
              </p>
            </div>

            {/* Tabs */}
            <div className="mt-6 border-b border-gray-200 dark:border-gray-700 flex">
              <button 
                className={`px-4 py-2 ${activeTab === 'summary' ? 'border-b-2 border-indigo-500 font-semibold' : ''}`}
                onClick={() => setActiveTab('summary')}
              >
                AI Summary
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'details' ? 'border-b-2 border-indigo-500 font-semibold' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'summary' && (
              <div className="mt-4">
                <h4 className="font-semibold">AI-Generated Summary</h4>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  The Great Gatsby is a tragic love story and a critique of the American Dream. 
                  Through the eyes of narrator Nick Carraway, we witness the rise and fall of Jay Gatsby, 
                  a mysterious millionaire who throws lavish parties in hopes of winning back his lost love, Daisy. 
                  The novel explores themes of wealth, love, idealism, and moral decay in the Jazz Age. 
                  Fitzgerald masterfully portrays the hollowness of the upper class and the impossibility of recapturing the past.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <select className="border rounded px-2 py-1">
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                  <button className="px-3 py-1 bg-indigo-500 text-white rounded hover:opacity-90">Translate</button>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <p>Additional book details can go here...</p>
              </div>
            )}
          </div>
        </div>

        {/* PDF Reader Section */}
        {activeTab === 'reader' && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={() => setPage(p => Math.max(1, p - 1))} 
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
              >
                Prev
              </button>
              <span>{page} / {numPages || '-'}</span>
              <button 
                onClick={() => setPage(p => Math.min(numPages || p+1, p + 1))} 
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
              >
                Next
              </button>
            </div>
            <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={page} />
            </Document>
          </div>
        )}
      </div>
    </div>
  );
}
