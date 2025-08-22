import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Added for animation

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [history, setHistory] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [progressList, setProgressList] = useState([]); // 🆕 for progress
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BASE_URL = "http://127.0.0.1:8000";

  const fixImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${BASE_URL}${url}`;
  };

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      setError("You must log in to view your profile.");
      setLoading(false);
      return;
    }

    axios
      .get(`${BASE_URL}/api/profile/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setProfile(res.data.profile);
        setHistory(res.data.reading_history);
        setBookmarks(res.data.bookmarks);
        setUsername(res.data.profile.user.username);
        setEmail(res.data.profile.user.email);
        // Now fetch progress list
        return axios.get(`${BASE_URL}/api/progress/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
      .then((resp) => {
        // ✅ Filter out completed books so they only show in history
        const inProgress = (resp.data || []).filter(
          (p) => p.progress_percent < 100
        );
        setProgressList(inProgress);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching profile or progress:", err);
        setError("Failed to load profile. Please log in again.");
        setLoading(false);
      });
  }, []);

  const handleSave = () => {
    const token = localStorage.getItem("access");
    axios
      .put(
        `${BASE_URL}/api/profile/update/`,
        { username, email },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setProfile({ ...profile, user: { ...profile.user, username, email } });
        setEditMode(false);
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
        alert("Failed to update profile");
      });
  };

  const handleRemoveBookmark = (bookId) => {
    const token = localStorage.getItem("access");
    axios
      .post(
        `${BASE_URL}/api/bookmark/${bookId}/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setBookmarks((prev) => prev.filter((b) => b.book.id !== bookId));
      })
      .catch((err) => {
        console.error("Error removing bookmark:", err);
      });
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-[#f0efe9]">
      {/* Header Section */}
      <section className="text-center py-4 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 mt-4"
        >
          My <span className="text-blue-600 dark:text-blue-400">Profile</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg">
          Manage your <strong>LibroScope</strong> account, view your{" "}
          <span className="text-blue-600">reading history</span> and{" "}
          <span className="text-blue-600">bookmarked books</span>.
        </p>
      </section>

      {/* Profile Card */}
      <div className="max-w-6xl mx-auto bg-[#f0efe9] rounded-3xl p-4 sm:p-8">
        <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg mb-8 w-full transition-all duration-300">
          {/* Avatar */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white shadow-[10px_20px_50px_10px_rgba(0,0,0,0.2)] rounded-full flex items-center justify-center text-2xl sm:text-3xl text-blue-600 font-bold mb-6 md:mb-0 md:mr-8 select-none">
            {profile.user.username[0].toUpperCase()}
          </div>

          {/* Details */}
          <div className="flex-1 w-full">
            {editMode ? (
              <>
                {/* Editable Inputs */}
                <label className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-md text-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter name"
                />

                <label className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-md text-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter email"
                />

                <div className="flex gap-4 justify-center md:justify-start">
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-green-500 text-white text-base rounded-md shadow hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="px-6 py-2 bg-gray-400 text-white text-base rounded-md shadow hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl ml-4 sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {profile.user.username}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 mt-2 text-lg text-gray-700 dark:text-gray-300 space-y-2 sm:space-y-0">
                  <p className="pr-6">
                    <span className="font-semibold pl-4 text-blue-600 dark:text-blue-400">
                      Email :
                    </span>{" "}
                    {profile.user.email}
                  </p>
                  <p className="pr-6">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      📅 Joined :
                    </span>{" "}
                    {profile.join_date}
                  </p>
                  <p className="pr-4">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      📚 Books Read :
                    </span>{" "}
                    {profile.books_read}
                  </p>
                </div>

                <button
                  onClick={() => setEditMode(true)}
                  className="px-6 py-2 ml-4 bg-blue-500 text-white text-base rounded-[50px] mt-6 shadow hover:bg-blue-600 transition"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>

        {/* Content grid - Left (Progress) | Right (History + Bookmarks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT COL: Reading Progress */}
          {/* LEFT COL: Reading Progress */}
          <div className="bg-white p-3 sm:p-6 rounded-2xl shadow flex flex-col h-full">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Reading Progress
            </h3>
            {progressList.length === 0 ? (
              <p className="text-gray-500">No books in progress</p>
            ) : (
              progressList.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b py-4 last:border-b-0"
                >
                  {/* Book Image */}
                  <img
                    src={fixImageUrl(p.book.image)}
                    alt={p.book.title}
                    className="w-16 h-24 sm:w-20 sm:h-30 object-cover shadow-xl rounded-lg"
                  />

                  {/* Book Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="font-bold text-base sm:text-lg">
                      {p.book.title}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mb-1">
                      by {p.book.author}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 h-2 sm:h-3 rounded-full my-2">
                      <div
                        className="bg-blue-500 h-2 sm:h-3 rounded-full"
                        style={{ width: `${p.progress_percent}%` }}
                      />
                    </div>

                    <div className="text-xs text-gray-500">
                      {p.current_page} / {p.total_pages} pages •{" "}
                      {p.progress_percent}%
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                      Last updated: {new Date(p.last_updated).toLocaleString()}
                    </div>
                  </div>

                  {/* Continue Button */}
                  <Link
                    to={`/bookreader/${p.book.id}`}
                    state={{ currentPage: p.current_page }}
                    className="mt-2 sm:mt-0 px-3 py-2 text-sm sm:text-base bg-blue-500 text-white rounded-[50px] shadow hover:bg-blue-600 transition"
                  >
                    <FaBookOpen className="inline mr-1" /> Continue
                  </Link>
                </div>
              ))
            )}
          </div>

          {/* RIGHT COL: History + Bookmarks (stacked vertically) */}
          <div className="flex flex-col gap-6">
            {/* Reading History */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow flex-1">
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Reading History
              </h3>
              {history.length === 0 ? (
                <p className="text-gray-500">No completed books yet</p>
              ) : (
                history.map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center border-b py-3 last:border-b-0 gap-3"
                  >
                    <img
                      src={fixImageUrl(h.book.image)}
                      alt={h.book.title}
                      className="w-16 h-24 sm:w-20 sm:h-30 object-cover rounded mb-2 sm:mb-0 sm:mr-3"
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <p className="font-bold text-base sm:text-lg">
                        {h.book.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        by {h.book.author}
                      </p>
                      <p className="text-xs text-gray-400">
                        Completed on {h.completed_on}
                      </p>
                    </div>
                    {/* ✅ Button responsive */}
                    <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                      <Link
                        to={`/bookreader/${h.book.id}`}
                        className="flex-1 sm:flex-initial text-center px-3 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-[50px] shadow hover:bg-blue-600 transition"
                      >
                        <FaBookOpen className="inline mr-1" /> Read Again
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bookmarked Books */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow flex-1">
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Bookmarked Books
              </h3>
              {bookmarks.length === 0 ? (
                <p className="text-gray-500">No bookmarks yet</p>
              ) : (
                bookmarks.map((b, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-3 last:border-b-0 gap-3"
                  >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 flex-1">
                      <img
                        src={fixImageUrl(b.book.image)}
                        alt={b.book.title}
                        className="w-16 h-24 sm:w-20 sm:h-30 object-cover shadow-2xl rounded-xl"
                      />
                      <div className="text-center sm:text-left">
                        <p className="font-bold text-base sm:text-lg">
                          {b.book.title}
                        </p>
                        <p className="text-sm text-gray-500">{b.book.author}</p>
                      </div>
                    </div>

                    {/* ✅ Buttons responsive */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <Link
                        to={`/bookreader/${b.book.id}`}
                        className="flex-1 sm:flex-initial text-center px-3 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-[50px] shadow hover:bg-blue-600 transition"
                      >
                        <FaBookOpen className="inline mr-1" /> Read Now
                      </Link>
                      <button
                        onClick={() => handleRemoveBookmark(b.book.id)}
                        className="flex-1 sm:flex-initial px-3 py-2 text-red-500 border border-red-400 rounded-[50px] text-sm sm:text-base hover:bg-red-50 transition"
                      >
                        <FaTrash className="inline mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
