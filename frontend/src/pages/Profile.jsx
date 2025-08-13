import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [history, setHistory] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Profile Data
  useEffect(() => {
    const token = localStorage.getItem("access"); // ✅ Use access token
    if (!token) {
      setError("You must log in to view your profile.");
      setLoading(false);
      return;
    }

    axios
      .get("http://127.0.0.1:8000/api/profile/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setProfile(res.data.profile);
        setHistory(res.data.reading_history);
        setBookmarks(res.data.bookmarks);
        setUsername(res.data.profile.user.username);
        setEmail(res.data.profile.user.email);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile. Please log in again.");
        setLoading(false);
      });
  }, []);

  // Handle Save
  const handleSave = () => {
    const token = localStorage.getItem("access");
    axios
      .put(
        "http://127.0.0.1:8000/api/profile/update/",
        { username, email },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setProfile({ ...profile, user: { ...profile.user, username, email } });
        setEditMode(false);
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
        alert("Failed to update profile");
      });
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4" />
            {editMode ? (
              <>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border p-2 w-full mb-2 rounded"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 w-full mb-4 rounded"
                />
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold">{profile.user.username}</h2>
                <p>{profile.user.email}</p>
                <button
                  onClick={() => setEditMode(true)}
                  className="px-4 py-2 bg-purple-500 text-white rounded mt-2"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
          <hr className="my-4" />
          <p>📅 Joined {profile.join_date}</p>
          <p>📚 {profile.books_read} Books Read</p>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2">
          {/* Reading History */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-bold mb-4">Reading History</h3>
            {history.length === 0 ? (
              <p>No completed books yet</p>
            ) : (
              history.map((h, i) => (
                <div key={i} className="flex justify-between border-b py-2">
                  <div>
                    <p className="font-bold">{h.book.title}</p>
                    <p className="text-sm text-gray-500">
                      by {h.book.author} (Completed on {h.completed_on})
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bookmarked Books */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Bookmarked Books</h3>
            {bookmarks.length === 0 ? (
              <p>No bookmarks yet</p>
            ) : (
              bookmarks.map((b, i) => (
                <div key={i} className="flex justify-between border-b py-2">
                  <div>
                    <p className="font-bold">{b.book.title}</p>
                    <p className="text-sm text-gray-500">by {b.book.author}</p>
                  </div>
                  <span>❤️</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
