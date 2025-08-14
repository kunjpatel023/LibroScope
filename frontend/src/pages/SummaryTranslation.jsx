
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
    formData.append("pdf", file); // 🔹 key changed to match backend

    const headers = {};
    const token = localStorage.getItem("access");
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(`${BASE_URL}/summarize/`, {
      method: "POST",
      headers, // no Content-Type — FormData sets it
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

    if (data.cached) {
      console.log("📂 Summary fetched from DB");
    } else {
      console.log("✨ New summary generated and stored");
    }

    setCurrentStep(2); // Move to summary step
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
    <div className="min-h-screen bg-[#f8f6f1] flex flex-col items-center p-6 m-10 rounded-3xl">
      {/* Back link */}
      <div
        className="w-full max-w-4xl mb-4 flex items-center gap-2 text-gray-600 cursor-pointer"
        onClick={() => nav("/dashboard")}
      >
        {/* <ArrowLeft size={18} /> Back to Dashboard */}
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
