
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Document, Page, pdfjs } from 'react-pdf';

// // Setup worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

// export default function BookReader() {
//   const { id } = useParams();
//   const nav = useNavigate();

//   const [book, setBook] = useState(null);
//   const [numPages, setNumPages] = useState(null);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!id) return;

//     axios
//       .get(`http://127.0.0.1:8000/api/book/books/${id}/`)
//       .then((res) => {
//         setBook(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching book', err);
//         setLoading(false);
//       });
//   }, [id]);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPage(1);
//   }

//   if (loading) return <div className="p-6 text-center">Loading...</div>;
//   if (!book) return <div className="p-6 text-center text-red-500">Book not found.</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800">
//         <h1 className="text-2xl font-bold text-indigo-600">SmartShelf</h1>
//         <button
//           onClick={() => nav('/categories')}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Back to Categories
//         </button>
//       </div>

//       <div className="max-w-6xl mx-auto p-6">
//         {/* Book Info */}
//         <div className="flex gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
//           <img
//             src={book.image}
//             alt={book.title}
//             className="w-56 rounded-xl shadow-lg object-cover"
//           />
//           <div className="flex-1">
//             <h2 className="text-3xl font-bold">{book.title}</h2>
//             <p className="text-gray-500 dark:text-gray-400 mb-4">by {book.author}</p>
//           </div>
//         </div>

//         {/* PDF Viewer */}
//         <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
//           {book.pdf ? (
//             <>
//               <div className="flex justify-between items-center mb-4">
//                 <button
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   disabled={page <= 1}
//                   className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-40"
//                 >
//                   Prev
//                 </button>
//                 <span>{page} / {numPages || '-'}</span>
//                 <button
//                   onClick={() => setPage((p) => Math.min(numPages, p + 1))}
//                   disabled={numPages ? page >= numPages : false}
//                   className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-40"
//                 >
//                   Next
//                 </button>
//               </div>

//               <Document file={book.pdf} onLoadSuccess={onDocumentLoadSuccess}>
//                 <Page
//                   pageNumber={page}
//                   width={800}
//                   renderTextLayer={false}   // ⛔ Hide text layer
//                   renderAnnotationLayer={false} // ⛔ Hide annotations (links, highlights)
//                 />
//               </Document>
//             </>
//           ) : (
//             <div className="text-center text-red-500">PDF file not available</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Document, Page, pdfjs } from 'react-pdf';

// // Setup worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

// export default function BookReader() {
//   const { id } = useParams();
//   const nav = useNavigate();

//   const [book, setBook] = useState(null);
//   const [numPages, setNumPages] = useState(null);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!id) return;

//     axios
//       .get(`http://127.0.0.1:8000/api/book/books/${id}/`)
//       .then((res) => {
//         setBook(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching book', err);
//         setLoading(false);
//       });
//   }, [id]);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPage(1);
//   }

//   // ✅ Mark book as completed in backend
//   const handleFinish = () => {
//     const token = localStorage.getItem("access");
//     if (!token) {
//       alert("Please log in to mark as completed");
//       return;
//     }

//     axios.post(
//       `http://127.0.0.1:8000/api/complete/${id}/`,
//       {},
//       { headers: { Authorization: `Bearer ${token}` } }
//     )
//     .then(() => {
//       alert("Book marked as completed!");
//       nav("/profile"); // redirect to profile after marking complete
//     })
//     .catch((err) => {
//       console.error("Error marking book as completed", err);
//       alert("Something went wrong.");
//     });
//   };

//   if (loading) return <div className="p-6 text-center">Loading...</div>;
//   if (!book) return <div className="p-6 text-center text-red-500">Book not found.</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800">
//         <h1 className="text-2xl font-bold text-indigo-600">SmartShelf</h1>
//         <button
//           onClick={() => nav('/categories')}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Back to Categories
//         </button>
//       </div>

//       <div className="max-w-5xl mx-auto p-6">
//         {/* Book Info - made smaller */}
//         <div className="flex gap-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 items-center">
//           <img
//             src={book.image}
//             alt={book.title}
//             className="w-32 h-44 rounded-lg shadow-lg object-cover"
//           />
//           <div>
//             <h2 className="text-2xl font-bold">{book.title}</h2>
//             <p className="text-gray-500 dark:text-gray-400">by {book.author}</p>
//           </div>
//         </div>

//         {/* PDF Viewer */}
//         <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
//           {book.pdf ? (
//             <>
//               <div className="flex justify-between items-center mb-4">
//                 <button
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   disabled={page <= 1}
//                   className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-40"
//                 >
//                   Prev
//                 </button>
//                 <span>{page} / {numPages || '-'}</span>
//                 {page < numPages ? (
//                   <button
//                     onClick={() => setPage((p) => Math.min(numPages, p + 1))}
//                     disabled={numPages ? page >= numPages : false}
//                     className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-40"
//                   >
//                     Next
//                   </button>
//                 ) : (
//                   <button
//                     onClick={handleFinish}
//                     className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//                   >
//                     Finish
//                   </button>
//                 )}
//               </div>

//               <Document file={book.pdf} onLoadSuccess={onDocumentLoadSuccess}>
//                 <Page
//                   pageNumber={page}
//                   width={800}
//                   renderTextLayer={false}
//                   renderAnnotationLayer={false}
//                 />
//               </Document>
//             </>
//           ) : (
//             <div className="text-center text-red-500">PDF file not available</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';

// Setup worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

export default function BookReader() {
  const { id } = useParams();
  const nav = useNavigate();

  const [book, setBook] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  // Resize listener for PDF responsiveness
  useEffect(() => {
    const handleResize = () => setContainerWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://127.0.0.1:8000/api/book/books/${id}/`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching book', err);
        setLoading(false);
      });
  }, [id]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPage(1);
  }

  // Mark book as completed
  const handleFinish = () => {
    const token = localStorage.getItem("access");
    if (!token) {
      alert("Please log in to mark as completed");
      return;
    }

    axios.post(
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

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!book) return <div className="p-6 text-center text-red-500">Book not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* Header */}
      <div className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800 flex-wrap gap-3">
        <h1 className="text-xl sm:text-2xl font-bold text-indigo-600">SmartShelf</h1>
        <button
          onClick={() => nav('/categories')}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm sm:text-base"
        >
          Back to Categories
        </button>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        
        {/* Book Info */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 items-center sm:items-start">
          <img
            src={book.image}
            alt={book.title}
            className="w-28 h-40 sm:w-32 sm:h-44 rounded-lg shadow-lg object-cover"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-2xl font-bold">{book.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
              by {book.author}
            </p>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6">
          {book.pdf ? (
            <>
              {/* Controls */}
              <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-40 text-sm sm:text-base"
                >
                  Prev
                </button>
                <span className="text-sm sm:text-base">{page} / {numPages || '-'}</span>
                {page < numPages ? (
                  <button
                    onClick={() => setPage((p) => Math.min(numPages, p + 1))}
                    disabled={numPages ? page >= numPages : false}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-40 text-sm sm:text-base"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm sm:text-base"
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
                    width={Math.min(containerWidth - 40, 800)} // responsive width
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>
            </>
          ) : (
            <div className="text-center text-red-500">PDF file not available</div>
          )}
        </div>
      </div>
    </div>
  );
}
