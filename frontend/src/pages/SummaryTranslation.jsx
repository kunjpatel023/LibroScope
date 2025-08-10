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



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Upload, FileText, Globe } from 'lucide-react'
import api from '../utils/api'

export default function SummaryTranslation() {
  const nav = useNavigate()
  const [file, setFile] = useState(null)
  const [summary, setSummary] = useState('')
  const [loading, setLoading] = useState(false)
  const [lang, setLang] = useState('en')

  const upload = (e) => setFile(e.target.files?.[0])

  const generateSummary = async () => {
    if (!file) return alert('Upload a document first')
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 1000))
      setSummary('This is a simulated summary of the uploaded book. Replace with backend response.')
    } catch (err) {
      console.error(err)
    } finally { setLoading(false) }
  }

  const translate = async () => {
    if (!summary) return
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 900))
      setSummary(prev => prev + `\n\n[Translated to ${lang}]`)
    } catch (err) { console.error(err) } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-[#f8f6f1] flex flex-col items-center p-6">
      
      {/* Back link */}
      <div className="w-full max-w-4xl mb-4 flex items-center gap-2 text-gray-600 cursor-pointer"
        onClick={() => nav('/dashboard')}
      >
        <ArrowLeft size={18} /> Back to Dashboard
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Summary & Translation
      </h1>

      {/* Stepper */}
      <div className="flex items-center gap-8 mt-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow">
          <Upload size={22} />
        </div>
        <div className="w-8 h-[2px] bg-gray-300"></div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
          <FileText size={22} />
        </div>
        <div className="w-8 h-[2px] bg-gray-300"></div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
          <Globe size={22} />
        </div>
      </div>

      {/* Upload Box */}
      <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow p-8 border border-dashed border-blue-400 flex flex-col items-center justify-center">
        <Upload size={40} className="text-gray-400 mb-4" />
        <p className="text-lg font-semibold">Upload Your Document</p>
        <p className="text-sm text-gray-500 mb-4">Support for PDF, DOCX, TXT files up to 10MB</p>
        
        <label className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow cursor-pointer hover:bg-indigo-700">
          Choose File
          <input type="file" accept=".pdf,.docx,.txt" onChange={upload} className="hidden" />
        </label>
      </div>

      {/* Summary + Actions */}
      {file && (
        <div className="mt-8 w-full max-w-4xl">
          <div className="flex gap-2 mb-4">
            <button 
              onClick={generateSummary} 
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90"
            >
              {loading ? 'Generating...' : 'Generate Summary'}
            </button>
            <select 
              value={lang} 
              onChange={e => setLang(e.target.value)} 
              className="p-2 border rounded"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
            </select>
            <button 
              onClick={translate} 
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Translate
            </button>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow min-h-[150px] whitespace-pre-wrap">
            {summary || 'No summary yet'}
          </div>
        </div>
      )}
    </div>
  )
}
