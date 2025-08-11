// import React, { useState } from 'react'
// import api from '../utils/api'

// export default function SummaryTranslation() {
//   const [file, setFile] = useState(null)
//   const [summary, setSummary] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [lang, setLang] = useState('en')

//   const upload = (e) => setFile(e.target.files?.[0])

//   const generateSummary = async () => {
//     if (!file) return alert('Upload a PDF first')
//     setLoading(true)
//     try {
//       // If you have backend: send file via FormData to /api/summary
//       // Example:
//       // const fd = new FormData(); fd.append('file', file)
//       // const res = await api.post('/summary', fd)
//       // setSummary(res.data.summary)

//       // For now simulate:
//       await new Promise(r => setTimeout(r, 1000))
//       setSummary('This is a simulated summary of the uploaded book. Replace with backend response.')
//     } catch (err) {
//       console.error(err)
//     } finally { setLoading(false) }
//   }

//   const translate = async () => {
//     if (!summary) return
//     setLoading(true)
//     try {
//       // call translate endpoint e.g., api.post('/translate', { text: summary, lang })
//       await new Promise(r => setTimeout(r, 900))
//       setSummary(prev => prev + `\n\n[Translated to ${lang}]`)
//     } catch (err) { console.error(err) } finally { setLoading(false) }
//   }

//   return (
//     <div>
//       <h3 className="text-xl font-semibold">Summary & Translation</h3>
//       <div className="mt-4 grid md:grid-cols-2 gap-6">
//         <div>
//           <input type="file" accept="application/pdf" onChange={upload} />
//           <div className="mt-3 flex gap-2">
//             <button onClick={generateSummary} className="px-4 py-2 bg-primary text-white rounded">{loading ? 'Generating...' : 'Generate Summary'}</button>
//             <select value={lang} onChange={e=>setLang(e.target.value)} className="p-2 border rounded">
//               <option value="en">English</option>
//               <option value="hi">Hindi</option>
//               <option value="es">Spanish</option>
//             </select>
//             <button onClick={translate} className="px-4 py-2 bg-gray-200 rounded">Translate</button>
//           </div>
//         </div>

//         <div>
//           <h4 className="font-medium">Summary</h4>
//           <div className="mt-2 p-4 bg-white dark:bg-gray-800 rounded shadow-sm min-h-[150px] whitespace-pre-wrap">{summary || 'No summary yet'}</div>
//         </div>
//       </div>
//     </div>
//   )
// }



// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ArrowLeft, Upload, FileText, Globe } from 'lucide-react'
// import api from '../utils/api'

// export default function SummaryTranslation() {
//   const nav = useNavigate()
//   const [file, setFile] = useState(null)
//   const [summary, setSummary] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [lang, setLang] = useState('en')

//   const upload = (e) => setFile(e.target.files?.[0])

//   const generateSummary = async () => {
//     if (!file) return alert('Upload a document first')
//     setLoading(true)
//     try {
//       await new Promise(r => setTimeout(r, 1000))
//       setSummary('This is a simulated summary of the uploaded book. Replace with backend response.')
//     } catch (err) {
//       console.error(err)
//     } finally { setLoading(false) }
//   }

//   const translate = async () => {
//     if (!summary) return
//     setLoading(true)
//     try {
//       await new Promise(r => setTimeout(r, 900))
//       setSummary(prev => prev + `\n\n[Translated to ${lang}]`)
//     } catch (err) { console.error(err) } finally { setLoading(false) }
//   }

//   return (
//     <div className="min-h-screen bg-[#f8f6f1] flex flex-col items-center p-6">
      
//       {/* Back link */}
//       <div className="w-full max-w-4xl mb-4 flex items-center gap-2 text-gray-600 cursor-pointer"
//         onClick={() => nav('/dashboard')}
//       >
//         <ArrowLeft size={18} /> Back to Dashboard
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//         Summary & Translation
//       </h1>

//       {/* Stepper */}
//       <div className="flex items-center gap-8 mt-6">
//         <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow">
//           <Upload size={22} />
//         </div>
//         <div className="w-8 h-[2px] bg-gray-300"></div>
//         <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
//           <FileText size={22} />
//         </div>
//         <div className="w-8 h-[2px] bg-gray-300"></div>
//         <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
//           <Globe size={22} />
//         </div>
//       </div>

//       {/* Upload Box */}
//       <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow p-8 border border-dashed border-blue-400 flex flex-col items-center justify-center">
//         <Upload size={40} className="text-gray-400 mb-4" />
//         <p className="text-lg font-semibold">Upload Your Document</p>
//         <p className="text-sm text-gray-500 mb-4">Support for PDF, DOCX, TXT files up to 10MB</p>
        
//         <label className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow cursor-pointer hover:bg-indigo-700">
//           Choose File
//           <input type="file" accept=".pdf,.docx,.txt" onChange={upload} className="hidden" />
//         </label>
//       </div>

//       {/* Summary + Actions */}
//       {file && (
//         <div className="mt-8 w-full max-w-4xl">
//           <div className="flex gap-2 mb-4">
//             <button 
//               onClick={generateSummary} 
//               className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90"
//             >
//               {loading ? 'Generating...' : 'Generate Summary'}
//             </button>
//             <select 
//               value={lang} 
//               onChange={e => setLang(e.target.value)} 
//               className="p-2 border rounded"
//             >
//               <option value="en">English</option>
//               <option value="hi">Hindi</option>
//               <option value="es">Spanish</option>
//             </select>
//             <button 
//               onClick={translate} 
//               className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//             >
//               Translate
//             </button>
//           </div>
          
//           <div className="p-4 bg-white rounded-lg shadow min-h-[150px] whitespace-pre-wrap">
//             {summary || 'No summary yet'}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }





// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ArrowLeft, Upload, FileText, Globe } from 'lucide-react'
// import axios from 'axios'

// // const API_BASE = process.env.REACT_APP_API_BASE || 'http://127.0.0.1:8000/api'
// const API_BASE_URL = "http://127.0.0.1:8000";


// export default function SummaryTranslation() {
//   const nav = useNavigate()
//   const [file, setFile] = useState(null)
//   const [summary, setSummary] = useState('')
//   const [translated, setTranslated] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [lang, setLang] = useState('en')

//   const upload = (e) => {
//     setSummary('')
//     setTranslated('')
//     setFile(e.target.files?.[0] ?? null)
//   }

//   // Basic check: for now backend expects PDF (your summarizer uses PyMuPDF).
//   // If you later extend backend for docx/txt, remove this check.
//   const isPdf = (f) => {
//     if (!f) return false
//     const ext = f.name.split('.').pop().toLowerCase()
//     return ext === 'pdf' || f.type === 'application/pdf'
//   }

//   const chunkText = (text, size) => {
//     const chunks = []
//     let start = 0
//     while (start < text.length) {
//       chunks.push(text.slice(start, start + size))
//       start += size
//     }
//     return chunks
//   }

//   const generateSummary = async () => {
//     if (!file) return alert('Upload a PDF document first')
//     if (!isPdf(file)) return alert('Currently only PDF files are supported. Please upload a PDF.')

//     setLoading(true)
//     setSummary('')
//     setTranslated('')

//     try {
//       const formData = new FormData()
//       formData.append('pdf', file)

//       // Include token if present
//       const token = localStorage.getItem('access')
//       const headers = token ? { Authorization: `Bearer ${token}` } : {}

//       // large timeout in ms for heavy summarization
//       const res = await axios.post(`${API_BASE}/summarize/`, formData, {
//         headers,
//         timeout: 600_000, // 10 minutes
//       })

//       if (res.data.summary) {
//         setSummary(res.data.summary)
//       } else {
//         alert('No summary generated. See console for details.')
//         console.error('Unexpected summarize response:', res.data)
//       }
//     } catch (err) {
//       console.error(err)
//       const message =
//         err?.response?.data?.error ||
//         err?.response?.data?.detail ||
//         err?.message ||
//         'Error generating summary'
//       alert(message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const translate = async () => {
//     if (!summary) return alert('No summary available to translate.')
//     setLoading(true)
//     setTranslated('')

//     try {
//       const token = localStorage.getItem('access')
//       const headers = {
//         'Content-Type': 'application/json',
//         ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       }

//       // chunk summary (by chars) to avoid translator limits
//       const chunks = chunkText(summary, 1500)
//       const translatedChunks = []

//       for (let i = 0; i < chunks.length; i++) {
//         const resp = await axios.post(
//           `${API_BASE}/translate/`,
//           { text: chunks[i], language: lang },
//           { headers, timeout: 120_000 }
//         )

//         if (resp.data && resp.data.translated_text) {
//           translatedChunks.push(resp.data.translated_text)
//         } else {
//           throw new Error('No translation returned for chunk ' + (i + 1))
//         }
//       }

//       setTranslated(translatedChunks.join(' '))
//     } catch (err) {
//       console.error(err)
//       const message =
//         err?.response?.data?.error ||
//         err?.response?.data?.detail ||
//         err?.message ||
//         'Error translating summary'
//       alert(message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f8f6f1] flex flex-col items-center p-6">
//       {/* Back link */}
//       <div
//         className="w-full max-w-4xl mb-4 flex items-center gap-2 text-gray-600 cursor-pointer"
//         onClick={() => nav('/dashboard')}
//       >
//         <ArrowLeft size={18} /> Back to Dashboard
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//         Summary & Translation
//       </h1>

//       {/* Stepper */}
//       <div className="flex items-center gap-8 mt-6">
//         <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow">
//           <Upload size={22} />
//         </div>
//         <div className="w-8 h-[2px] bg-gray-300"></div>
//         <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
//           <FileText size={22} />
//         </div>
//         <div className="w-8 h-[2px] bg-gray-300"></div>
//         <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
//           <Globe size={22} />
//         </div>
//       </div>

//       {/* Upload Box */}
//       <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow p-8 border border-dashed border-blue-400 flex flex-col items-center justify-center">
//         <Upload size={40} className="text-gray-400 mb-4" />
//         <p className="text-lg font-semibold">Upload Your Document</p>
//         <p className="text-sm text-gray-500 mb-4">Support for PDF (recommended). Files up to ~10MB</p>

//         <label className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow cursor-pointer hover:bg-indigo-700">
//           Choose File
//           <input type="file" accept=".pdf,.docx,.txt" onChange={upload} className="hidden" />
//         </label>
//       </div>

//       {/* Summary + Actions */}
//       {file && (
//         <div className="mt-8 w-full max-w-4xl">
//           <div className="flex gap-2 mb-4">
//             <button
//               onClick={generateSummary}
//               disabled={loading}
//               className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90 disabled:opacity-60"
//             >
//               {loading ? 'Working...' : 'Generate Summary'}
//             </button>

//             <select
//               value={lang}
//               onChange={(e) => setLang(e.target.value)}
//               className="p-2 border rounded"
//             >
//               <option value="en">English</option>
//               <option value="hi">Hindi</option>
//               <option value="gu">Gujarati</option>
//               <option value="es">Spanish</option>
//               <option value="fr">French</option>
//               <option value="de">German</option>
//               <option value="zh-cn">Chinese (Simplified)</option>
//               <option value="ar">Arabic</option>
//             </select>

//             <button
//               onClick={translate}
//               disabled={loading || !summary}
//               className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-60"
//             >
//               {loading ? 'Working...' : 'Translate'}
//             </button>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow min-h-[150px] whitespace-pre-wrap">
//             {summary || 'No summary yet'}
//           </div>

//           {translated && (
//             <div className="mt-4 p-4 bg-white rounded-lg shadow min-h-[120px] whitespace-pre-wrap">
//               <h4 className="font-semibold mb-2">Translated Summary:</h4>
//               {translated}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }


// import React, { useState } from "react";

// export default function SummaryTranslation() {
//   const [file, setFile] = useState(null);
//   const [summary, setSummary] = useState("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [language, setLanguage] = useState("hi");
//   const [loading, setLoading] = useState(false);

//   // Handle PDF upload & summarization
//   const handleSummarize = async () => {
//     if (!file) {
//       alert("Please select a PDF first!");
//       return;
//     }
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await fetch("http://localhost:8000/api/summary/summarize/", {
//         method: "POST",
//         body: formData,
//       });

//       if (!res.ok) throw new Error("Failed to summarize");

//       const data = await res.json();
//       setSummary(data.summary || "");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error summarizing PDF");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle translation
//   const handleTranslate = async () => {
//     if (!summary) {
//       alert("No summary to translate!");
//       return;
//     }
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:8000/api/summary/translate/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text: summary, target_lang: language }),
//       });

//       if (!res.ok) throw new Error("Failed to translate");

//       const data = await res.json();
//       setTranslatedText(data.translated_text || "");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error translating summary");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">PDF Summary & Translation</h2>

//       {/* File Upload */}
//       <input
//         type="file"
//         accept="application/pdf"
//         onChange={(e) => setFile(e.target.files[0])}
//         className="mb-4"
//       />

//       <button
//         onClick={handleSummarize}
//         disabled={loading}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
//       >
//         {loading ? "Processing..." : "Generate Summary"}
//       </button>

//       {/* Display Summary */}
//       {summary && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Summary:</h3>
//           <p className="p-3 bg-gray-100 rounded">{summary}</p>

//           {/* Translation Options */}
//           <div className="mt-4">
//             <label className="block mb-2 font-medium">Select Language:</label>
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="border p-2 rounded"
//             >
//               <option value="hi">Hindi</option>
//               <option value="gu">Gujarati</option>
//               <option value="fr">French</option>
//               <option value="es">Spanish</option>
//               <option value="de">German</option>
//             </select>

//             <button
//               onClick={handleTranslate}
//               disabled={loading}
//               className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
//             >
//               {loading ? "Translating..." : "Translate"}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Display Translated Text */}
//       {translatedText && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Translated Text:</h3>
//           <p className="p-3 bg-green-100 rounded">{translatedText}</p>
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useState } from "react";

// export default function SummaryTranslation() {
//   const [file, setFile] = useState(null);
//   const [summary, setSummary] = useState("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [language, setLanguage] = useState("hi");
//   const [loading, setLoading] = useState(false);

//   const BASE_URL = "http://localhost:8000/api/summary";

//   // Handle PDF upload & summarization
//   const handleSummarize = async () => {
//     if (!file) {
//       alert("Please select a PDF first!");
//       return;
//     }
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await fetch(`${BASE_URL}/summarize/`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access")}`, // send JWT if required
//         },
//         body: formData,
//       });

//       if (!res.ok) throw new Error("Failed to summarize");

//       const data = await res.json();
//       setSummary(data.summary || "");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error summarizing PDF");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle translation
//   const handleTranslate = async () => {
//     if (!summary) {
//       alert("No summary to translate!");
//       return;
//     }
//     setLoading(true);

//     try {
//       const res = await fetch(`${BASE_URL}/translate/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("access")}`, // send JWT if required
//         },
//         body: JSON.stringify({
//           summary: summary,   // match backend key
//           language: language, // match backend key
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to translate");

//       const data = await res.json();
//       setTranslatedText(data.translated_summary || "");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error translating summary");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">PDF Summary & Translation</h2>

//       {/* File Upload */}
//       <input
//         type="file"
//         accept="application/pdf"
//         onChange={(e) => setFile(e.target.files[0])}
//         className="mb-4"
//       />

//       <button
//         onClick={handleSummarize}
//         disabled={loading}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
//       >
//         {loading ? "Processing..." : "Generate Summary"}
//       </button>

//       {/* Display Summary */}
//       {summary && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Summary:</h3>
//           <p className="p-3 bg-gray-100 rounded">{summary}</p>

//           {/* Translation Options */}
//           <div className="mt-4">
//             <label className="block mb-2 font-medium">Select Language:</label>
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="border p-2 rounded"
//             >
//               <option value="hi">Hindi</option>
//               <option value="gu">Gujarati</option>
//               <option value="fr">French</option>
//               <option value="es">Spanish</option>
//               <option value="de">German</option>
//             </select>

//             <button
//               onClick={handleTranslate}
//               disabled={loading}
//               className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
//             >
//               {loading ? "Translating..." : "Translate"}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Display Translated Text */}
//       {translatedText && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Translated Text:</h3>
//           <p className="p-3 bg-green-100 rounded">{translatedText}</p>
//         </div>
//       )}
//     </div>
//   );
// }






// import React, { useState } from "react";

// export default function SummaryTranslation() {
//   const [file, setFile] = useState(null);
//   const [summary, setSummary] = useState("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [language, setLanguage] = useState("hi");
//   const [loading, setLoading] = useState(false);

//   const BASE_URL = "http://localhost:8000/api/summary";

//   // Handle PDF upload & summarization
//   const handleSummarize = async () => {
//     if (!file) {
//       alert("Please select a PDF first!");
//       return;
//     }
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("file", file); // backend expects "file"

//     try {
//       const res = await fetch(`${BASE_URL}/summarize/`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access")}`,
//         },
//         body: formData,
//       });

//       if (!res.ok) throw new Error("Failed to summarize");

//       const data = await res.json();
//       setSummary(data.summary || "");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error summarizing PDF");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle translation
//   const handleTranslate = async () => {
//     if (!summary) {
//       alert("No summary to translate!");
//       return;
//     }
//     setLoading(true);

//     try {
//       const res = await fetch(`${BASE_URL}/translate/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("access")}`,
//         },
//         body: JSON.stringify({
//           text: summary,    // backend expects "text"
//           language: language, // backend expects "language"
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to translate");

//       const data = await res.json();
//       setTranslatedText(data.translated_text || "");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error translating summary");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">PDF Summary & Translation</h2>

//       {/* File Upload */}
//       <input
//         type="file"
//         accept="application/pdf"
//         onChange={(e) => setFile(e.target.files[0])}
//         className="mb-4"
//       />

//       <button
//         onClick={handleSummarize}
//         disabled={loading}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
//       >
//         {loading ? "Processing..." : "Generate Summary"}
//       </button>

//       {/* Display Summary */}
//       {summary && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Summary:</h3>
//           <p className="p-3 bg-gray-100 rounded">{summary}</p>

//           {/* Translation Options */}
//           <div className="mt-4">
//             <label className="block mb-2 font-medium">Select Language:</label>
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="border p-2 rounded"
//             >
//               <option value="hi">Hindi</option>
//               <option value="gu">Gujarati</option>
//               <option value="fr">French</option>
//               <option value="es">Spanish</option>
//               <option value="de">German</option>
//             </select>

//             <button
//               onClick={handleTranslate}
//               disabled={loading}
//               className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
//             >
//               {loading ? "Translating..." : "Translate"}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Display Translated Text */}
//       {translatedText && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Translated Text:</h3>
//           <p className="p-3 bg-green-100 rounded">{translatedText}</p>
//         </div>
//       )}
//     </div>
//   );
// }





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft, Upload, FileText, Globe } from "lucide-react";

// export default function SummaryTranslation() {
//   const nav = useNavigate();
//   const [file, setFile] = useState(null);
//   const [summary, setSummary] = useState("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [language, setLanguage] = useState("hi");
//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState(1);

//   const BASE_URL = "http://localhost:8000/api/summary";

//   // File upload handler
//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   // Step 2: Summarize
//   const handleSummarize = async () => {
//     if (!file) return alert("Please upload a file first!");
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await fetch(`${BASE_URL}/summarize/`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access")}`,
//         },
//         body: formData,
//       });
//       if (!res.ok) throw new Error("Failed to summarize");
//       const data = await res.json();
//       setSummary(data.summary || "");
//     } catch (err) {
//       console.error(err);
//       alert("Error summarizing file");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Step 3: Translate
//   const handleTranslate = async () => {
//     if (!summary) return alert("No summary available to translate!");
//     setLoading(true);

//     try {
//       const res = await fetch(`${BASE_URL}/translate/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("access")}`,
//         },
//         body: JSON.stringify({
//           text: summary,
//           language: language,
//         }),
//       });
//       if (!res.ok) throw new Error("Failed to translate");
//       const data = await res.json();
//       setTranslatedText(data.translated_text || "");
//     } catch (err) {
//       console.error(err);
//       alert("Error translating summary");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const stepStyle = (current) =>
//     `w-12 h-12 rounded-full flex items-center justify-center shadow ${
//       step === current
//         ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
//         : step > current
//         ? "bg-green-500 text-white"
//         : "bg-gray-200 text-gray-500"
//     }`;

//   return (
//     <div className="min-h-screen bg-[#f8f6f1] flex flex-col items-center p-6">
//       {/* Back link */}
//       <div
//         className="w-full max-w-4xl mb-4 flex items-center gap-2 text-gray-600 cursor-pointer"
//         onClick={() => nav("/dashboard")}
//       >
//         <ArrowLeft size={18} /> Back to Dashboard
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//         Summary & Translation
//       </h1>

//       {/* Stepper */}
//       <div className="flex items-center gap-8 mt-6">
//         <div className={stepStyle(1)}>
//           <Upload size={22} />
//         </div>
//         <div className="w-8 h-[2px] bg-gray-300"></div>
//         <div className={stepStyle(2)}>
//           <FileText size={22} />
//         </div>
//         <div className="w-8 h-[2px] bg-gray-300"></div>
//         <div className={stepStyle(3)}>
//           <Globe size={22} />
//         </div>
//       </div>

//       {/* Step 1: Upload */}
//       {step === 1 && (
//         <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow p-8 border border-dashed border-blue-400 flex flex-col items-center justify-center">
//           <Upload size={40} className="text-gray-400 mb-4" />
//           <p className="text-lg font-semibold">Upload Your Document</p>
//           <p className="text-sm text-gray-500 mb-4">
//             Supports PDF, DOCX, TXT up to 10MB
//           </p>
//           <label className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow cursor-pointer hover:bg-indigo-700">
//             Choose File
//             <input
//               type="file"
//               accept=".pdf,.docx,.txt"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </label>
//           <div className="mt-6 flex justify-between w-full">
//             <button disabled className="px-4 py-2 bg-gray-300 rounded-lg">
//               Previous
//             </button>
//             <button
//               onClick={() => (file ? setStep(2) : alert("Upload a file first"))}
//               className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Step 2: Summary */}
//       {step === 2 && (
//         <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow p-8">
//           <h2 className="text-xl font-semibold mb-4">Generate Summary</h2>
//           <button
//             onClick={handleSummarize}
//             disabled={loading}
//             className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90"
//           >
//             {loading ? "Generating..." : "Generate Summary"}
//           </button>
//           <div className="p-4 bg-gray-100 rounded-lg shadow mt-4 min-h-[150px]">
//             {summary || "No summary yet"}
//           </div>
//           <div className="mt-6 flex justify-between w-full">
//             <button
//               onClick={() => setStep(1)}
//               className="px-4 py-2 bg-gray-300 rounded-lg"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() =>
//                 summary
//                   ? setStep(3)
//                   : alert("Generate summary before proceeding")
//               }
//               className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Step 3: Translation */}
//       {step === 3 && (
//         <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow p-8">
//           <h2 className="text-xl font-semibold mb-4">Translate Summary</h2>
//           <div className="flex items-center gap-3 mb-4">
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="p-2 border rounded"
//             >
//               <option value="hi">Hindi</option>
//               <option value="gu">Gujarati</option>
//               <option value="fr">French</option>
//               <option value="es">Spanish</option>
//               <option value="de">German</option>
//             </select>
//             <button
//               onClick={handleTranslate}
//               disabled={loading}
//               className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//             >
//               {loading ? "Translating..." : "Translate"}
//             </button>
//           </div>
//           <div className="p-4 bg-green-100 rounded-lg shadow min-h-[150px]">
//             {translatedText || "No translation yet"}
//           </div>
//           <div className="mt-6 flex justify-between w-full">
//             <button
//               onClick={() => setStep(2)}
//               className="px-4 py-2 bg-gray-300 rounded-lg"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => alert("All steps completed!")}
//               className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
//             >
//               Finish
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft, Upload, FileText, Globe } from "lucide-react";

// export default function SummaryTranslation() {
//   const nav = useNavigate();

//   // States
//   const [file, setFile] = useState(null);
//   const [summary, setSummary] = useState("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [lang, setLang] = useState("en");
//   const [currentStep, setCurrentStep] = useState(1); // Step control

//   const BASE_URL = "http://localhost:8000/api/summary";

//   // Upload file
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setSummary("");
//       setTranslatedText("");
//     }
//   };

//   // Generate Summary
//   const handleGenerateSummary = async () => {
//     if (!file) {
//       alert("Please upload a document first");
//       return;
//     }
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await fetch(`${BASE_URL}/summarize/`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access")}`,
//         },
//         body: formData,
//       });

//       if (!res.ok) throw new Error("Failed to summarize");
//       const data = await res.json();
//       setSummary(data.summary || "No summary generated.");
//       setCurrentStep(2); // Move to step 2 after fetching
//     } catch (err) {
//       console.error(err);
//       alert("Error generating summary");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Translate Summary
//   const handleTranslate = async () => {
//     if (!summary) {
//       alert("No summary available for translation");
//       return;
//     }
//     setLoading(true);

//     try {
//       const res = await fetch(`${BASE_URL}/translate/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("access")}`,
//         },
//         body: JSON.stringify({
//           text: summary,
//           language: lang,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to translate");
//       const data = await res.json();
//       setTranslatedText(data.translated_text || "No translation available.");
//       setCurrentStep(3); // Move to step 3 after fetching
//     } catch (err) {
//       console.error(err);
//       alert("Error translating summary");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Stepper circle styles
//   const getStepCircleStyle = (step) =>
//     step === currentStep
//       ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow"
//       : step < currentStep
//       ? "bg-green-500 text-white shadow"
//       : "bg-gray-200 text-gray-500";

//   return (
//     <div className="min-h-screen bg-[#f8f6f1] flex flex-col items-center p-6">
//       {/* Back link */}
//       <div
//         className="w-full max-w-4xl mb-4 flex items-center gap-2 text-gray-600 cursor-pointer"
//         onClick={() => nav("/dashboard")}
//       >
//         <ArrowLeft size={18} /> Back to Dashboard
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//         Summary & Translation
//       </h1>

//       {/* Stepper */}
//       <div className="flex items-center gap-8 mt-6">
//         <div
//           className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(
//             1
//           )}`}
//         >
//           <Upload size={22} />
//         </div>
//         <div className="w-8 h-[2px] bg-gray-300"></div>
//         <div
//           className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(
//             2
//           )}`}
//         >
//           <FileText size={22} />
//         </div>
//         <div className="w-8 h-[2px] bg-gray-300"></div>
//         <div
//           className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(
//             3
//           )}`}
//         >
//           <Globe size={22} />
//         </div>
//       </div>

//       {/* Step 1: Upload */}
//       {currentStep === 1 && (
//         <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow p-8 border border-dashed border-blue-400 flex flex-col items-center justify-center">
//           <Upload size={40} className="text-gray-400 mb-4" />
//           <p className="text-lg font-semibold">Upload Your Document</p>
//           <p className="text-sm text-gray-500 mb-4">
//             Support for PDF, DOCX, TXT files up to 10MB
//           </p>

//           {file && (
//             <p className="text-sm text-green-600 mb-3">
//               Selected: {file.name}
//             </p>
//           )}

//           <label className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow cursor-pointer hover:bg-indigo-700">
//             Choose File
//             <input
//               type="file"
//               accept=".pdf,.docx,.txt"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </label>

//           <button
//             onClick={handleGenerateSummary}
//             disabled={loading || !file}
//             className="mt-6 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90 disabled:opacity-50"
//           >
//             {loading ? "Generating..." : "Generate Summary"}
//           </button>
//         </div>
//       )}

//       {/* Step 2: Summary */}
//       {currentStep === 2 && (
//         <div className="mt-8 w-full max-w-4xl">
//           <div className="p-4 bg-white rounded-lg shadow min-h-[150px] whitespace-pre-wrap">
//             {summary || "No summary yet"}
//           </div>

//           <div className="flex gap-2 mt-4">
//             <button
//               onClick={() => setCurrentStep(1)}
//               className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
//             >
//               Previous
//             </button>

//             <button
//               onClick={handleTranslate}
//               disabled={loading || !summary}
//               className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 disabled:opacity-50"
//             >
//               {loading ? "Translating..." : "Translate Summary"}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Step 3: Translation */}
//       {currentStep === 3 && (
//         <div className="mt-8 w-full max-w-4xl">
//           <div className="p-4 bg-white rounded-lg shadow min-h-[150px] whitespace-pre-wrap">
//             {translatedText || "No translation yet"}
//           </div>

//           <div className="flex gap-2 mt-4">
//             <button
//               onClick={() => setCurrentStep(2)}
//               className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
//             >
//               Previous
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, FileText, Globe } from "lucide-react";

export default function SummaryTranslation() {
  const nav = useNavigate();

  // State
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [summaryId, setSummaryId] = useState(null); // server-side id returned
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState("hi");
  const [currentStep, setCurrentStep] = useState(1);

  const BASE_URL = "http://localhost:8000/api/summary";

  // Handle file selection: show name and clear old summary/translation only if new file chosen
  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      // If same file chosen again we still keep old summary; if it's a new file, reset
      if (!file || selected.name !== file.name || selected.size !== file.size) {
        setFile(selected);
        setSummary("");
        setSummaryId(null);
        setTranslatedText("");
      } else {
        setFile(selected);
      }
    }
  };

  // Generate summary (called from Step 1 "Generate Summary" button)
  const handleGenerateSummary = async () => {
    if (!file) {
      alert("Please upload a document first");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const headers = {};
      const token = localStorage.getItem("access");
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`${BASE_URL}/summarize/`, {
        method: "POST",
        headers,
        body: formData,
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Failed to summarize");
      }

      const data = await res.json();
      setSummary(data.summary || "");
      setSummaryId(data.summary_id || null);
      setTranslatedText("");
      setCurrentStep(2); // move to summary step
    } catch (err) {
      console.error("Summarize error:", err);
      alert("Error generating summary: " + (err.message || ""));
    } finally {
      setLoading(false);
    }
  };

  // From Step 2: 'Translate' button will simply move to Step 3 (UI)
  const moveToTranslateStep = () => {
    if (!summary) {
      alert("Generate summary before translating.");
      return;
    }
    setCurrentStep(3);
    setTranslatedText(""); // clear previous translation if any (or keep, your choice)
  };

  // In Step 3: perform translation (can be repeated multiple times with different language)
  const handleTranslate = async () => {
    if (!summary && !summaryId) {
      alert("No summary to translate.");
      return;
    }
    setLoading(true);
    try {
      const payload = summaryId
        ? { summary_id: summaryId, language: lang }
        : { text: summary, language: lang };

      const headers = { "Content-Type": "application/json" };
      const token = localStorage.getItem("access");
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`${BASE_URL}/translate/`, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Translation failed");
      }

      const data = await res.json();
      setTranslatedText(data.translated_text || data.translation || "");
    } catch (err) {
      console.error("Translate error:", err);
      alert("Error translating summary: " + (err.message || ""));
    } finally {
      setLoading(false);
    }
  };

  const getStepCircleStyle = (step) =>
    step === currentStep
      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow"
      : step < currentStep
      ? "bg-green-500 text-white shadow"
      : "bg-gray-200 text-gray-500";

  return (
    <div className="min-h-screen bg-[#f8f6f1] flex flex-col items-center p-6">
      {/* Back link */}
      <div
        className="w-full max-w-4xl mb-4 flex items-center gap-2 text-gray-600 cursor-pointer"
        onClick={() => nav("/dashboard")}
      >
        <ArrowLeft size={18} /> Back to Dashboard
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Summary & Translation
      </h1>

      {/* Stepper */}
      <div className="flex items-center gap-8 mt-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(1)}`}>
          <Upload size={22} />
        </div>
        <div className="w-8 h-[2px] bg-gray-300"></div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(2)}`}>
          <FileText size={22} />
        </div>
        <div className="w-8 h-[2px] bg-gray-300"></div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(3)}`}>
          <Globe size={22} />
        </div>
      </div>

      {/* Step 1: Upload */}
      {currentStep === 1 && (
        <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow p-8 border border-dashed border-blue-400 flex flex-col items-center justify-center">
          <Upload size={40} className="text-gray-400 mb-4" />
          <p className="text-lg font-semibold">Upload Your Document</p>
          <p className="text-sm text-gray-500 mb-4">Support: PDF, DOCX, TXT (≤10MB)</p>

          {file ? (
            <p className="text-sm text-green-600 mb-3">Selected: {file.name}</p>
          ) : (
            <p className="text-sm text-gray-500 mb-3">No file selected</p>
          )}

          <label className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow cursor-pointer hover:bg-indigo-700">
            Choose File
            <input type="file" accept=".pdf,.docx,.txt" onChange={handleFileChange} className="hidden" />
          </label>

          <button
            onClick={handleGenerateSummary}
            disabled={loading || !file}
            className="mt-6 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Summary"}
          </button>
        </div>
      )}

      {/* Step 2: Summary */}
      {currentStep === 2 && (
        <div className="mt-8 w-full max-w-4xl">
          <div className="p-4 bg-white rounded-lg shadow min-h-[150px] whitespace-pre-wrap">
            {summary || "No summary yet"}
          </div>

          <div className="flex gap-2 mt-4">
            <button onClick={() => setCurrentStep(1)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
              Previous
            </button>

            <button onClick={moveToTranslateStep} disabled={!summary} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
              Translate
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Translation */}
      {currentStep === 3 && (
        <div className="mt-8 w-full max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <label className="mr-2 font-medium">Choose language:</label>
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="p-2 border rounded">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="gu">Gujarati</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh-cn">Chinese (Simplified)</option>
              <option value="ar">Arabic</option>
            </select>

            <button onClick={handleTranslate} disabled={loading} className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              {loading ? "Translating..." : "Translate"}
            </button>
          </div>

          <div className="p-4 bg-white rounded-lg shadow min-h-[150px] whitespace-pre-wrap">
            {translatedText || "No translation yet"}
          </div>

          <div className="flex gap-2 mt-4">
            <button onClick={() => setCurrentStep(2)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
              Previous
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
