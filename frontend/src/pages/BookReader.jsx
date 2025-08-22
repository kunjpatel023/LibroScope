import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";

// Setup worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

export default function BookReader() {
  const { id } = useParams();
  const nav = useNavigate();
  const location = useLocation();

  const [book, setBook] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [initialPage, setInitialPage] = useState(null); // ✅ To store saved progress page

  // Resize listener
  useEffect(() => {
    const handleResize = () => setContainerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch book + progress
  useEffect(() => {
    if (!id) return;
    const token = localStorage.getItem("access");

    axios
      .get(`http://127.0.0.1:8000/api/book/books/${id}/`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);

        // If logged in, fetch saved progress
        if (token) {
          axios
            .get(`http://127.0.0.1:8000/api/progress/${id}/get/`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((resp) => {
              if (resp.data.current_page) {
                // ✅ Use backend progress if available
                setInitialPage(resp.data.current_page);
                setPage(resp.data.current_page);
              } else if (location.state?.currentPage) {
                // ✅ Else fallback to location.state (from Profile "Continue" button)
                setInitialPage(location.state.currentPage);
                setPage(location.state.currentPage);
              }
            })
            .catch(() => {
              // If no progress in backend, check location.state
              if (location.state?.currentPage) {
                setInitialPage(location.state.currentPage);
                setPage(location.state.currentPage);
              }
            });
        } else {
          // Not logged in → fallback to location.state if available
          if (location.state?.currentPage) {
            setInitialPage(location.state.currentPage);
            setPage(location.state.currentPage);
          }
        }
      })
      .catch((err) => {
        console.error("Error fetching book", err);
        setLoading(false);
      });
  }, [id, location.state]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // ✅ Only set to 1 if no saved progress exists
    if (!initialPage) {
      setPage(1);
    }
  }

  // Mark as completed
  const handleFinish = () => {
    const token = localStorage.getItem("access");
    if (!token) {
      alert("Please log in to mark as completed");
      return;
    }

    axios
      .post(
        `http://127.0.0.1:8000/api/complete/${id}/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        alert("Book marked as completed!");
        nav("/profile");
      })
      .catch((err) => {
        console.error("Error marking book as completed", err);
        alert("Something went wrong.");
      });
  };

  // Progress update API call on page change
  const updateProgress = (newPage) => {
    const token = localStorage.getItem("access");
    if (!token || !numPages) return; // user not logged in or total pages unknown

    axios
      .post(
        `http://127.0.0.1:8000/api/progress/${id}/`,
        { current_page: newPage, total_pages: numPages },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .catch((err) => {
        console.error("Error updating reading progress", err);
      });
  };

  // Handle next page and update progress
  const handleNext = () => {
    if (numPages && page < numPages) {
      const newPage = page + 1;
      setPage(newPage);
      updateProgress(newPage);
    }
  };

  // Handle previous page and update progress
  const handlePrev = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      updateProgress(newPage);
    }
  };

  // Force download book
  const handleDownload = async () => {
    try {
      const response = await fetch(book.pdf, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access") || ""}`,
        },
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${book.title}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Failed to download book");
      console.error(err);
    }
  };

  if (loading)
    return (
      <div className="p-8 text-center text-lg font-medium">Loading...</div>
    );
  if (!book)
    return (
      <div className="p-8 text-center text-red-500 text-lg font-semibold">
        Book not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-[#f0efe9] text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800 sticky top-0 z-10">
        <h1
          className="text-xl sm:text-2xl font-bold text-indigo-600 cursor-pointer"
          onClick={() => nav("/")}
        >
          LibroScope
        </h1>
        <button
          onClick={() => nav("/categories")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-[50px] shadow-md transition text-sm sm:text-base"
        >
          Back to Categories
        </button>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Book Info Card */}
        <div className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <img
            src={book.image}
            alt={book.title}
            className="w-32 h-44 sm:w-40 sm:h-56 rounded-xl shadow-md object-cover"
          />
          <div className="flex flex-col gap-3 justify-center text-center sm:text-left">
            <h2 className="text-2xl font-extrabold">{book.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              by {book.author}
            </p>

            {/* Buttons for summary + download */}
            {book.pdf && (
              <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
                {/* Summary Button */}
                <button
                  onClick={() =>
                    nav("/summarytranslation", { state: { book } })
                  }
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-[50px] shadow-md transition text-sm"
                >
                  Generate Summary
                </button>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-[50px] shadow-md transition text-sm"
                >
                  Download Book
                </button>
              </div>
            )}
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          {book.pdf ? (
            <>
              {/* Controls */}
              <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                <button
                  onClick={handlePrev}
                  disabled={page <= 1}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-[50px] font-medium disabled:opacity-40 text-sm transition"
                >
                  Prev
                </button>
                <span className="text-sm sm:text-base font-semibold">
                  Page {page} / {numPages || "-"}
                </span>
                {page < numPages ? (
                  <button
                    onClick={handleNext}
                    disabled={numPages ? page >= numPages : false}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-[50px] font-medium disabled:opacity-40 text-sm transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className="px-5 py-2 rounded-[50px] bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition text-sm"
                  >
                    Finish
                  </button>
                )}
              </div>

              {/* PDF Document */}
              <div className="flex justify-center overflow-x-auto">
                <Document file={book.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page
                    pageNumber={page}
                    width={Math.min(containerWidth - 40, 800)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>
            </>
          ) : (
            <div className="text-center text-red-500 font-medium">
              PDF file not available
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
