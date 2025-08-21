import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { BookPlus } from "lucide-react";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [message, setMessage] = useState("");

  const BASE_URL = "http://127.0.0.1:8000";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/book/categories/`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !category || !image || !pdf) {
      setMessage("⚠️ Please fill all fields and upload files.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("category", category);
    formData.append("image", image);
    formData.append("pdf", pdf);

    try {
      const token = localStorage.getItem("access");
      await axios.post(`${BASE_URL}/api/book/books/add/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("✅ Book added successfully!");
      setTitle("");
      setAuthor("");
      setCategory("");
      setImage(null);
      setPdf(null);
    } catch (err) {
      console.error("Error adding book:", err);
      setMessage("❌ Failed to add book. Check console.");
    }
  };

  return (
    <div className="bg-[#f0efe9] text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="text-center py-10 pb-4 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Add New <span className="text-blue-600 dark:text-blue-400">Book</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg">
          Help grow <strong>LibroScope</strong> by adding books. Upload cover, PDF,
          and details so others can enjoy them too.
        </p>
      </section>

      {/* Add Book Form */}
      <section className="py-1 px-3">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="max-w-xl mx-auto p-8 pt-4 bg-white dark:bg-gray-900 rounded-[50px] shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <BookPlus className="text-blue-600 w-7 h-7" />
            Upload Book Details
          </h2>

          {message && (
            <div
              className={`mb-4 text-center font-semibold p-2 rounded-lg ${
                message.startsWith("✅")
                  ? "text-green-600 bg-green-100 dark:bg-green-800"
                  : "text-red-600 bg-red-100 dark:bg-red-800"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Book Title"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-[50px] px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400"
            />

            {/* Author */}
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author Name"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-[50px] px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400"
            />

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-[50px] px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Image Upload */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 ml-2 mb-2">
                Book Cover (Image)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-[50px] px-3 py-2"
              />
            </div>

            {/* PDF Upload */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 ml-2 mb-2">
                Book PDF
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setPdf(e.target.files[0])}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-[50px] px-3 py-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 rounded-[50px] flex items-center gap-2 justify-center w-full shadow-md transition"
            >
              <BookPlus className="w-5 h-5" /> <span>Add Book</span>
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}