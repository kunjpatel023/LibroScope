// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Profile() {
//   const [profile, setProfile] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [bookmarks, setBookmarks] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch Profile Data
//   useEffect(() => {
//     const token = localStorage.getItem("access"); // ✅ Use access token
//     if (!token) {
//       setError("You must log in to view your profile.");
//       setLoading(false);
//       return;
//     }

//     axios
//       .get("http://127.0.0.1:8000/api/profile/", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         setProfile(res.data.profile);
//         setHistory(res.data.reading_history);
//         setBookmarks(res.data.bookmarks);
//         setUsername(res.data.profile.user.username);
//         setEmail(res.data.profile.user.email);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching profile:", err);
//         setError("Failed to load profile. Please log in again.");
//         setLoading(false);
//       });
//   }, []);

//   // Handle Save
//   const handleSave = () => {
//     const token = localStorage.getItem("access");
//     axios
//       .put(
//         "http://127.0.0.1:8000/api/profile/update/",
//         { username, email },
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then((res) => {
//         setProfile({ ...profile, user: { ...profile.user, username, email } });
//         setEditMode(false);
//       })
//       .catch((err) => {
//         console.error("Error updating profile:", err);
//         alert("Failed to update profile");
//       });
//   };

//   if (loading) return <div className="p-6 text-center">Loading...</div>;
//   if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Profile</h1>

//       <div className="grid md:grid-cols-3 gap-6">
//         {/* Left Section */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <div className="text-center">
//             <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4" />
//             {editMode ? (
//               <>
//                 <input
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="border p-2 w-full mb-2 rounded"
//                 />
//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="border p-2 w-full mb-4 rounded"
//                 />
//                 <button
//                   onClick={handleSave}
//                   className="px-4 py-2 bg-green-500 text-white rounded"
//                 >
//                   Save
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-xl font-bold">{profile.user.username}</h2>
//                 <p>{profile.user.email}</p>
//                 <button
//                   onClick={() => setEditMode(true)}
//                   className="px-4 py-2 bg-purple-500 text-white rounded mt-2"
//                 >
//                   Edit Profile
//                 </button>
//               </>
//             )}
//           </div>
//           <hr className="my-4" />
//           <p>📅 Joined {profile.join_date}</p>
//           <p>📚 {profile.books_read} Books Read</p>
//         </div>

//         {/* Right Section */}
//         <div className="md:col-span-2">
//           {/* Reading History */}
//           <div className="bg-white p-6 rounded-lg shadow mb-6">
//             <h3 className="text-xl font-bold mb-4">Reading History</h3>
//             {history.length === 0 ? (
//               <p>No completed books yet</p>
//             ) : (
//               history.map((h, i) => (
//                 <div key={i} className="flex justify-between border-b py-2">
//                   <div>
//                     <p className="font-bold">{h.book.title}</p>
//                     <p className="text-sm text-gray-500">
//                       by {h.book.author} (Completed on {h.completed_on})
//                     </p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Bookmarked Books */}
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h3 className="text-xl font-bold mb-4">Bookmarked Books</h3>
//             {bookmarks.length === 0 ? (
//               <p>No bookmarks yet</p>
//             ) : (
//               bookmarks.map((b, i) => (
//                 <div key={i} className="flex justify-between border-b py-2">
//                   <div>
//                     <p className="font-bold">{b.book.title}</p>
//                     <p className="text-sm text-gray-500">by {b.book.author}</p>
//                   </div>
//                   <span>❤️</span>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaTrash, FaBookOpen } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Profile() {
//   const [profile, setProfile] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [bookmarks, setBookmarks] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch Profile Data
//   useEffect(() => {
//     const token = localStorage.getItem("access");
//     if (!token) {
//       setError("You must log in to view your profile.");
//       setLoading(false);
//       return;
//     }

//     axios
//       .get("http://127.0.0.1:8000/api/profile/", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         setProfile(res.data.profile);
//         setHistory(res.data.reading_history);
//         setBookmarks(res.data.bookmarks);
//         setUsername(res.data.profile.user.username);
//         setEmail(res.data.profile.user.email);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching profile:", err);
//         setError("Failed to load profile. Please log in again.");
//         setLoading(false);
//       });
//   }, []);

//   // Save profile changes
//   const handleSave = () => {
//     const token = localStorage.getItem("access");
//     axios
//       .put(
//         "http://127.0.0.1:8000/api/profile/update/",
//         { username, email },
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then(() => {
//         setProfile({ ...profile, user: { ...profile.user, username, email } });
//         setEditMode(false);
//       })
//       .catch((err) => {
//         console.error("Error updating profile:", err);
//         alert("Failed to update profile");
//       });
//   };

//   // Remove bookmark
//   const handleRemoveBookmark = (bookId) => {
//     const token = localStorage.getItem("access");
//     axios
//       .post(
//         `http://127.0.0.1:8000/api/bookmark/${bookId}/`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then(() => {
//         setBookmarks((prev) => prev.filter((b) => b.book.id !== bookId));
//       })
//       .catch((err) => {
//         console.error("Error removing bookmark:", err);
//       });
//   };

//   if (loading) return <div className="p-6 text-center">Loading...</div>;
//   if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8">Profile</h1>

//       <div className="grid md:grid-cols-3 gap-6">
//         {/* Left Profile Card */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
//           <div className="w-28 h-28 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-3xl text-white font-bold mb-4">
//             {profile.user.username[0].toUpperCase()}
//           </div>

//           {editMode ? (
//             <>
//               <input
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="border p-2 w-full mb-2 rounded dark:bg-gray-700 dark:text-white"
//               />
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="border p-2 w-full mb-4 rounded dark:bg-gray-700 dark:text-white"
//               />
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 bg-green-500 text-white rounded"
//               >
//                 Save
//               </button>
//             </>
//           ) : (
//             <>
//               <h2 className="text-xl font-bold">{profile.user.username}</h2>
//               <p className="text-gray-500">{profile.user.email}</p>
//               <button
//                 onClick={() => setEditMode(true)}
//                 className="px-4 py-2 bg-purple-500 text-white rounded mt-3"
//               >
//                 Edit Profile
//               </button>
//             </>
//           )}

//           <hr className="my-4 w-full" />
//           <p className="text-sm">📅 Joined {profile.join_date}</p>
//           <p className="text-sm">📚 {profile.books_read} Books Read</p>
//         </div>

//         {/* Right Section */}
//         <div className="md:col-span-2 space-y-6">
//           {/* Reading History */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Reading History</h3>
//             {history.length === 0 ? (
//               <p className="text-gray-500">No completed books yet</p>
//             ) : (
//               <div className="grid md:grid-cols-2 gap-4">
//                 {history.map((h, i) => (
//                   <div key={i} className="flex bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
//                     <img
//                       src={h.book.image}
//                       alt={h.book.title}
//                       className="w-16 h-20 object-cover rounded mr-3"
//                     />
//                     <div>
//                       <p className="font-bold">{h.book.title}</p>
//                       <p className="text-sm text-gray-500">
//                         by {h.book.author}  
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         Completed on {h.completed_on}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Bookmarked Books */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Bookmarked Books</h3>
//             {bookmarks.length === 0 ? (
//               <p className="text-gray-500">No bookmarks yet</p>
//             ) : (
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {bookmarks.map((b, i) => (
//                   <div
//                     key={i}
//                     className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col"
//                   >
//                     <img
//                       src={b.book.image}
//                       alt={b.book.title}
//                       className="w-full h-40 object-cover"
//                     />
//                     <div className="p-3 flex-1 flex flex-col justify-between">
//                       <div>
//                         <p className="font-bold">{b.book.title}</p>
//                         <p className="text-sm text-gray-500">{b.book.author}</p>
//                       </div>
//                       <div className="flex justify-between items-center mt-3">
//                         <Link
//                           to={`/bookreader/${b.book.id}`}
//                           className="flex items-center gap-1 px-3 py-1 bg-indigo-500 text-white text-sm rounded shadow hover:bg-indigo-600"
//                         >
//                           <FaBookOpen /> Read Now
//                         </Link>
//                         <button
//                           onClick={() => handleRemoveBookmark(b.book.id)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           <FaTrash />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    const token = localStorage.getItem("access");
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

  // Save profile changes
  const handleSave = () => {
    const token = localStorage.getItem("access");
    axios
      .put(
        "http://127.0.0.1:8000/api/profile/update/",
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

  // Remove bookmark
  const handleRemoveBookmark = (bookId) => {
    const token = localStorage.getItem("access");
    axios
      .post(
        `http://127.0.0.1:8000/api/bookmark/${bookId}/`,
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
    <div className="bg-[#FAF8F3] min-h-screen p-6 m-8 rounded-3xl">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 shadow-lg h-170">
        <h1 className="text-3xl font-bold mb-8 text-center">Profile</h1>

        {/* Top Profile Card - Horizontal */}
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-2xl shadow mb-8">
          <div className="w-28 h-28 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-3xl text-white font-bold mr-6">
            {profile.user.username[0].toUpperCase()}
          </div>

          <div className="flex-1">
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
                <h2 className="text-2xl font-bold">{profile.user.username}</h2>
                <p className="text-gray-500">{profile.user.email}</p>
                <p className="mt-2 text-sm">📅 Joined {profile.join_date}</p>
                <p className="text-sm">📚 {profile.books_read} Books Read</p>
                <button
                  onClick={() => setEditMode(true)}
                  className="px-4 py-2 bg-purple-500 text-white rounded mt-3"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>

        {/* Bottom Section - Two Columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Reading History */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-4">Reading History</h3>
            {history.length === 0 ? (
              <p className="text-gray-500">No completed books yet</p>
            ) : (
              history.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center border-b py-3 last:border-b-0"
                >
                  <img
                    src={h.book.image}
                    alt={h.book.title}
                    className="w-14 h-18 object-cover rounded mr-3"
                  />
                  <div>
                    <p className="font-bold">{h.book.title}</p>
                    <p className="text-sm text-gray-500">
                      by {h.book.author}
                    </p>
                    <p className="text-xs text-gray-400">
                      Completed on {h.completed_on}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bookmarked Books - List View */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-4">Bookmarked Books</h3>
            {bookmarks.length === 0 ? (
              <p className="text-gray-500">No bookmarks yet</p>
            ) : (
              bookmarks.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b py-3 last:border-b-0"
                >
                  <div className="flex items-center">
                    <img
                      src={b.book.image}
                      alt={b.book.title}
                      className="w-14 h-18 object-cover rounded mr-3"
                    />
                    <div>
                      <p className="font-bold">{b.book.title}</p>
                      <p className="text-sm text-gray-500">{b.book.author}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      to={`/bookreader/${b.book.id}`}
                      className="flex items-center gap-1 px-3 py-1 bg-indigo-500 text-white text-sm rounded shadow hover:bg-indigo-600"
                    >
                      <FaBookOpen /> Read Now
                    </Link>
                    <button
                      onClick={() => handleRemoveBookmark(b.book.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
