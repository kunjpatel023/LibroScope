import { useState } from "react";
import axios from "axios";

export default function SummaryPage() {
  const [pdf, setPdf] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pdf) return alert("Please select a PDF");

    const formData = new FormData();
    formData.append("pdf", pdf); // 👈 IMPORTANT: 'pdf' must match backend key

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/api/summarize/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSummary(res.data.summary);
    } catch (err) {
      alert("Error generating summary");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          {loading ? "Summarizing..." : "Generate Summary"}
        </button>
      </form>

      {summary && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
