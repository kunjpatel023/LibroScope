
import React, { useState } from "react";
import { ArrowLeft, Calendar, Mail, BookOpen, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  // Profile state
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    joined: "15/06/2023",
    plan: "Premium Plan",
    booksRead: 3,
    bookmarked: 2,
  });

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  // Save changes
  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
    // Later: Send update request to backend here
  };

  // Cancel edit
  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      {/* Back Link */}
      <div className="flex items-center mb-6">
        <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>
      </div>

      {/* Main Profile Layout */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left Profile Card */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            {/* Profile Icon */}
            <div className="relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
                👤
              </div>
            </div>

            {/* Editable Fields */}
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={tempProfile.name}
                  onChange={handleChange}
                  className="mt-4 px-3 py-2 border rounded w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={tempProfile.email}
                  onChange={handleChange}
                  className="mt-2 px-3 py-2 border rounded w-full"
                />
              </>
            ) : (
              <>
                <h2 className="mt-4 text-xl font-bold">{profile.name}</h2>
                <p className="text-gray-500">{profile.email}</p>
              </>
            )}

            {/* Edit / Save Buttons */}
            {isEditing ? (
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
              >
                Edit Profile
              </button>
            )}

            {/* Info */}
            <div className="mt-6 space-y-2 w-full text-gray-600">
              <p className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> Joined {profile.joined}</p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> {profile.plan}</p>
              <p className="flex items-center"><BookOpen className="w-4 h-4 mr-2" /> {profile.booksRead} Books Read</p>
            </div>

            {/* Stats */}
            <div className="mt-6 w-full flex justify-around border-t pt-4">
              <div className="text-center">
                <p className="text-blue-600 text-lg font-bold">{profile.booksRead}</p>
                <p className="text-gray-500 text-sm">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-green-600 text-lg font-bold">{profile.bookmarked}</p>
                <p className="text-gray-500 text-sm">Bookmarked</p>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Reading History */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-4">Reading History</h3>
              <div className="space-y-4">
                {[
                  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", date: "15/01/2024", rating: 4 },
                  { title: "1984", author: "George Orwell", date: "10/01/2024", rating: 5 },
                  { title: "To Kill a Mockingbird", author: "Harper Lee", date: "05/01/2024", rating: 4 },
                ].map((book, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold">{book.title}</p>
                      <p className="text-sm text-gray-500">by {book.author}</p>
                      <p className="text-xs text-gray-400">Completed on {book.date}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className={`w-4 h-4 ${index < book.rating ? "fill-yellow-400" : ""}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bookmarked Books */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-2" /> Bookmarked Books
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Pride and Prejudice</p>
                    <p className="text-sm text-gray-500">by Jane Austen</p>
                    <p className="text-xs text-gray-400">Bookmarked on 20/01/2024</p>
                  </div>
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
