import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Upload, FileText, Globe, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SummaryTranslation() {
  const nav = useNavigate();
  const location = useLocation();

  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [summaryId, setSummaryId] = useState(null);
  const [translatedText, setTranslatedText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState("hi");
  const [currentStep, setCurrentStep] = useState(1);

  const BASE_URL = "http://localhost:8000/api/summary";

  useEffect(() => {
    const passedBook = location.state?.book;
    if (passedBook?.pdf) {
      fetch(passedBook.pdf)
        .then((res) => res.blob())
        .then((blob) => {
          const fileObj = new File([blob], `${passedBook.title}.pdf`, {
            type: "application/pdf",
          });
          setFile(fileObj);
        })
        .catch((err) => console.error("Failed to fetch pdf", err));
    }
  }, [location.state]);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (!file || selected.name !== file.name || selected.size !== file.size) {
        setFile(selected);
        setSummary("");
        setSummaryId(null);
        setTranslatedText("");
        setAudioUrl("");
      } else {
        setFile(selected);
      }
    }
  };

  const handleGenerateSummary = async () => {
    if (!file) {
      alert("Please upload a document first");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      const headers = {};
      const token = localStorage.getItem("access");
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const res = await fetch(`${BASE_URL}/summarize/`, {
        method: "POST",
        headers,
        body: formData,
      });
      if (!res.ok) throw new Error(await res.text() || "Failed to summarize");
      const data = await res.json();
      setSummary(data.summary || "");
      setSummaryId(data.summary_id || null);
      setTranslatedText("");
      setAudioUrl("");
      setCurrentStep(2);
    } catch (err) {
      alert("Error generating summary: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const moveToTranslateStep = () => {
    if (!summary) {
      alert("Generate summary before translating.");
      return;
    }
    setCurrentStep(3);
    setTranslatedText("");
  };

  const moveToTTSStep = () => {
    if (!summary && !translatedText) {
      alert("No text available for speech.");
      return;
    }
    setCurrentStep(4);
  };

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
      if (!res.ok) throw new Error(await res.text() || "Translation failed");
      const data = await res.json();
      setTranslatedText(data.translated_text || data.translation || "");
      setAudioUrl("");
    } catch (err) {
      alert("Error translating summary: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTTS = async () => {
    const textToSpeak = translatedText || summary;
    if (!textToSpeak) {
      alert("No text available for TTS.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/tts/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textToSpeak }),
      });
      if (!res.ok) throw new Error(await res.text() || "TTS failed");
      const data = await res.json();
      setAudioUrl(data.audio_url);
    } catch (err) {
      alert("Error generating speech: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const getStepCircleStyle = (step) =>
    step === currentStep
      ? "bg-blue-600 text-white shadow-md"
      : step < currentStep
      ? "bg-green-500 text-white shadow"
      : "bg-gray-200 text-gray-600";

  return (
    <div className="min-h-screen bg-[#f0efe9] text-gray-800 dark:text-gray-200 px-4 sm:px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Summary <span className="text-blue-600 dark:text-blue-400">& Translation & TTS</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg mt-3">
          Upload your document, generate a summary, translate it, and listen to it.
        </p>
      </section>

      {/* Stepper */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(1)}`}>
          <Upload size={22} />
        </div>
        <div className="hidden sm:block w-10 h-[2px] bg-gray-300"></div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(2)}`}>
          <FileText size={22} />
        </div>
        <div className="hidden sm:block w-10 h-[2px] bg-gray-300"></div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(3)}`}>
          <Globe size={22} />
        </div>
        <div className="hidden sm:block w-10 h-[2px] bg-gray-300"></div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepCircleStyle(4)}`}>
          <Volume2 size={22} />
        </div>
      </div>

      {/* Step 1: Upload */}
      {currentStep === 1 && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-3xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">📄 Upload Your Document</h2>
          {file ? (
            <p className="text-md text-green-600 text-center mb-3 break-all">{file.name}</p>
          ) : (
            <p className="text-sm text-gray-500 mb-3 text-center">No file selected</p>
          )}

          <div className="flex flex-col items-center gap-4">
            <label className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-[50px] shadow cursor-pointer transition w-full sm:w-auto text-center">
              Choose File
              <input
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            

            <button
              onClick={handleGenerateSummary}
              disabled={loading || !file}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition w-full sm:w-auto disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Summary"}
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 2: Summary */}
      {currentStep === 2 && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">📝 Generated Summary</h2>
          <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg border min-h-[150px] whitespace-pre-wrap text-sm sm:text-base">
            {summary || "No summary yet"}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => setCurrentStep(1)}
              className="w-full sm:w-auto px-5 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg transition"
            >
              Previous
            </button>
            <button
              onClick={moveToTranslateStep}
              disabled={!summary}
              className="w-full sm:w-auto px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition disabled:opacity-50"
            >
              Translate
            </button>
            <button
              onClick={moveToTTSStep}
              disabled={!summary}
              className="w-full sm:w-auto px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition disabled:opacity-50"
            >
              Listen
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Translation */}
      {currentStep === 3 && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">🌍 Translation</h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="p-2 border rounded-lg shadow w-full sm:w-auto focus:ring-2 focus:ring-blue-400"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="gu">Gujarati</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh-cn">Chinese (Simplified)</option>
              <option value="ar">Arabic</option>
            </select>
            <button
              onClick={handleTranslate}
              disabled={loading}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition w-full sm:w-auto"
            >
              {loading ? "Translating..." : "Translate"}
            </button>
          </div>

          <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg border min-h-[150px] whitespace-pre-wrap text-sm sm:text-base">
            {translatedText || "No translation yet"}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg transition w-full sm:w-auto"
            >
              Previous
            </button>
            <button
              onClick={moveToTTSStep}
              disabled={!translatedText}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition disabled:opacity-50 w-full sm:w-auto"
            >
              Listen
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 4: Text-to-Speech */}
      {currentStep === 4 && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">🔊 Text to Speech</h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <button
              onClick={handleTTS}
              disabled={loading}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition w-full sm:w-auto"
            >
              {loading ? "Generating Audio..." : "Generate Audio"}
            </button>
          </div>

          {audioUrl && (
            <div className="mt-4">
              <audio controls src={audioUrl} className="w-full"></audio>
            </div>
          )}

          <div className="flex mt-6">
            <button
              onClick={() => setCurrentStep(translatedText ? 3 : 2)}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg transition"
            >
              Previous
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
