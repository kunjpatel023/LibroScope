
// import React, { useState } from "react";
// import { ArrowLeft, Calendar, Mail, BookOpen, Star, Heart } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function About() {
//   // Profile state
//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     joined: "15/06/2023",
//     plan: "Premium Plan",
//     booksRead: 3,
//     bookmarked: 2,
//   });

//   // Edit mode state
//   const [isEditing, setIsEditing] = useState(false);
//   const [tempProfile, setTempProfile] = useState(profile);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTempProfile({ ...tempProfile, [name]: value });
//   };

//   // Save changes
//   const handleSave = () => {
//     setProfile(tempProfile);
//     setIsEditing(false);
//     // Later: Send update request to backend here
//   };

//   // Cancel edit
//   const handleCancel = () => {
//     setTempProfile(profile);
//     setIsEditing(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
//       {/* Back Link */}
//       <div className="flex items-center mb-6">
//         <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900">
//           <ArrowLeft className="w-5 h-5 mr-2" />
//           Back to Dashboard
//         </Link>
//       </div>

//       {/* Main Profile Layout */}
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Profile</h1>
//         <div className="grid md:grid-cols-3 gap-8">
          
//           {/* Left Profile Card */}
//           <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
//             {/* Profile Icon */}
//             <div className="relative">
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
//                 👤
//               </div>
//             </div>

//             {/* Editable Fields */}
//             {isEditing ? (
//               <>
//                 <input
//                   type="text"
//                   name="name"
//                   value={tempProfile.name}
//                   onChange={handleChange}
//                   className="mt-4 px-3 py-2 border rounded w-full"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={tempProfile.email}
//                   onChange={handleChange}
//                   className="mt-2 px-3 py-2 border rounded w-full"
//                 />
//               </>
//             ) : (
//               <>
//                 <h2 className="mt-4 text-xl font-bold">{profile.name}</h2>
//                 <p className="text-gray-500">{profile.email}</p>
//               </>
//             )}

//             {/* Edit / Save Buttons */}
//             {isEditing ? (
//               <div className="mt-4 flex space-x-2">
//                 <button
//                   onClick={handleSave}
//                   className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={handleCancel}
//                   className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
//               >
//                 Edit Profile
//               </button>
//             )}

//             {/* Info */}
//             <div className="mt-6 space-y-2 w-full text-gray-600">
//               <p className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> Joined {profile.joined}</p>
//               <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> {profile.plan}</p>
//               <p className="flex items-center"><BookOpen className="w-4 h-4 mr-2" /> {profile.booksRead} Books Read</p>
//             </div>

//             {/* Stats */}
//             <div className="mt-6 w-full flex justify-around border-t pt-4">
//               <div className="text-center">
//                 <p className="text-blue-600 text-lg font-bold">{profile.booksRead}</p>
//                 <p className="text-gray-500 text-sm">Completed</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-green-600 text-lg font-bold">{profile.bookmarked}</p>
//                 <p className="text-gray-500 text-sm">Bookmarked</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Content */}
//           <div className="md:col-span-2 space-y-6">
//             {/* Reading History */}
//             <div className="bg-white rounded-xl shadow p-6">
//               <h3 className="text-lg font-bold mb-4">Reading History</h3>
//               <div className="space-y-4">
//                 {[
//                   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", date: "15/01/2024", rating: 4 },
//                   { title: "1984", author: "George Orwell", date: "10/01/2024", rating: 5 },
//                   { title: "To Kill a Mockingbird", author: "Harper Lee", date: "05/01/2024", rating: 4 },
//                 ].map((book, i) => (
//                   <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                     <div>
//                       <p className="font-semibold">{book.title}</p>
//                       <p className="text-sm text-gray-500">by {book.author}</p>
//                       <p className="text-xs text-gray-400">Completed on {book.date}</p>
//                     </div>
//                     <div className="flex text-yellow-400">
//                       {Array.from({ length: 5 }).map((_, index) => (
//                         <Star key={index} className={`w-4 h-4 ${index < book.rating ? "fill-yellow-400" : ""}`} />
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Bookmarked Books */}
//             <div className="bg-white rounded-xl shadow p-6">
//               <h3 className="text-lg font-bold mb-4 flex items-center">
//                 <Heart className="w-5 h-5 text-red-500 mr-2" /> Bookmarked Books
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                   <div>
//                     <p className="font-semibold">Pride and Prejudice</p>
//                     <p className="text-sm text-gray-500">by Jane Austen</p>
//                     <p className="text-xs text-gray-400">Bookmarked on 20/01/2024</p>
//                   </div>
//                   <Heart className="w-5 h-5 text-red-500" />
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }






// /// src/pages/Profile.jsx
// import React, { useState, useEffect } from "react";
// import { ArrowLeft, Mail, BookOpen, Star, Heart } from "lucide-react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Profile() {
//   const [profile, setProfile] = useState({
//     name: "",
//     email: "",
//     plan: "Premium Plan",
//     booksRead: 3,
//     bookmarked: 2,
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [tempProfile, setTempProfile] = useState(profile);

//   // Fetch profile from backend
//   useEffect(() => {
//     const token = localStorage.getItem("access");
//     if (!token) return;

//     axios
//       .get("http://127.0.0.1:8000/api/accounts/profile/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         setProfile({
//           name: res.data.username,
//           email: res.data.email,
//           plan: "Premium Plan",
//           booksRead: 3,
//           bookmarked: 2,
//         });
//         setTempProfile({
//           name: res.data.username,
//           email: res.data.email,
//           plan: "Premium Plan",
//           booksRead: 3,
//           bookmarked: 2,
//         });
//       })
//       .catch((err) => {
//         console.error("Error fetching profile:", err);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTempProfile({ ...tempProfile, [name]: value });
//   };

//   const handleSave = () => {
//     setProfile(tempProfile);
//     setIsEditing(false);
//     // TODO: Send PATCH to backend for actual update
//   };

//   const handleCancel = () => {
//     setTempProfile(profile);
//     setIsEditing(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
//       {/* Back Link */}
//       <div className="flex items-center mb-6">
//         <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900">
//           <ArrowLeft className="w-5 h-5 mr-2" />
//           Back to Dashboard
//         </Link>
//       </div>

//       {/* Main Profile Layout */}
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Profile</h1>
//         <div className="grid md:grid-cols-3 gap-8">

//           {/* Left Profile Card */}
//           <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
//             {/* Profile Icon */}
//             <div className="relative">
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
//                 👤
//               </div>
//             </div>

//             {isEditing ? (
//               <>
//                 <input
//                   type="text"
//                   name="name"
//                   value={tempProfile.name}
//                   onChange={handleChange}
//                   className="mt-4 px-3 py-2 border rounded w-full"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={tempProfile.email}
//                   onChange={handleChange}
//                   className="mt-2 px-3 py-2 border rounded w-full"
//                 />
//               </>
//             ) : (
//               <>
//                 <h2 className="mt-4 text-xl font-bold">{profile.name}</h2>
//                 <p className="text-gray-500">{profile.email}</p>
//               </>
//             )}

//             {isEditing ? (
//               <div className="mt-4 flex space-x-2">
//                 <button
//                   onClick={handleSave}
//                   className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={handleCancel}
//                   className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
//               >
//                 Edit Profile
//               </button>
//             )}

//             <div className="mt-6 space-y-2 w-full text-gray-600">
//               <p className="flex items-center">
//                 <Mail className="w-4 h-4 mr-2" /> {profile.plan}
//               </p>
//               <p className="flex items-center">
//                 <BookOpen className="w-4 h-4 mr-2" /> {profile.booksRead} Books Read
//               </p>
//             </div>
//           </div>

//           {/* Right Stats Card */}
//           <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
//             <h2 className="text-xl font-bold mb-4">Reading Stats</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="bg-gray-100 p-4 rounded-lg text-center">
//                 <BookOpen className="mx-auto w-6 h-6 text-indigo-500 mb-2" />
//                 <p className="text-lg font-bold">{profile.booksRead}</p>
//                 <p className="text-sm text-gray-500">Books Read</p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg text-center">
//                 <Star className="mx-auto w-6 h-6 text-yellow-500 mb-2" />
//                 <p className="text-lg font-bold">4.8</p>
//                 <p className="text-sm text-gray-500">Average Rating</p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg text-center">
//                 <Heart className="mx-auto w-6 h-6 text-red-500 mb-2" />
//                 <p className="text-lg font-bold">{profile.bookmarked}</p>
//                 <p className="text-sm text-gray-500">Bookmarked</p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg text-center">
//                 <Mail className="mx-auto w-6 h-6 text-green-500 mb-2" />
//                 <p className="text-lg font-bold">2025</p>
//                 <p className="text-sm text-gray-500">Reading Year</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }








// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Profile() {
//   const [profile, setProfile] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [bookmarks, setBookmarks] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/profile/", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((res) => {
//         setProfile(res.data.profile);
//         setHistory(res.data.reading_history);
//         setBookmarks(res.data.bookmarks);
//         setUsername(res.data.profile.user.username);
//         setEmail(res.data.profile.user.email);
//       });
//   }, []);

//   const handleSave = () => {
//     axios
//       .put(
//         "http://127.0.0.1:8000/api/accounts/update/",
//         { username, email },
//         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
//       )
//       .then(() => setEditMode(false));
//   };

//   if (!profile) return <div className="p-6 text-center">Loading...</div>;

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
