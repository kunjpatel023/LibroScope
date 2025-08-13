import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaPhone, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from "axios";

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const BASE_URL = "http://127.0.0.1:8000/api";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${BASE_URL}/login/`, {
        email,
        password,
      });
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      navigate("/dashboard");
    } catch {
      setError("Invalid login credentials");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(`${BASE_URL}/register/`, {
        username: fullName,
        email,
        phone,
        password,
      });
      alert("Account created! Please login.");
      setIsFlipped(false);
    } catch {
      setError("Error creating account");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden relative">
      {/* Back to Home */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-sm text-black hover:underline"
      >
        ← Back to Home
      </button>

      {/* Flip Container */}
      <div style={{ perspective: "1000px", width: "380px", height: "560px" }}>
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* LOGIN CARD */}
          <div className="absolute w-full h-full bg-white rounded-2xl shadow-xl p-8 backface-hidden flex flex-col justify-center">
            <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg font-bold mb-6">
              S
            </div>
            <h2 className="text-center text-xl font-bold text-purple-700">Welcome Back</h2>
            <p className="text-center text-gray-500 mb-6">Sign in to your SmartShelf account</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none"
                  required
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaLock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium"
              >
                Sign In
              </button>
            </form>

            <div className="my-4 text-center text-gray-400 text-sm">Or continue with</div>
            <div className="flex gap-3 justify-center">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <FaGoogle /> Google
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <FaTwitter /> Twitter
              </button>
            </div>

            <p className="text-center mt-6 text-sm text-gray-600">
              Don’t have an account?{" "}
              <button onClick={() => setIsFlipped(true)} className="text-blue-500">
                Sign up
              </button>
            </p>
          </div>

          {/* SIGNUP CARD */}
          <div className="absolute w-full h-full bg-white rounded-2xl shadow-xl p-8 backface-hidden transform rotate-y-180 flex flex-col justify-center">
            <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg font-bold mb-6">
              S
            </div>
            <h2 className="text-center text-xl font-bold text-purple-700">Create Account</h2>
            <br />
            <p className="text-center text-gray-500 mb-6">Join SmartShelf and start your reading journey</p>

            <form onSubmit={handleSignup} className="space-y-4">
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none"
                  required
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none"
                  required
                />
              </div>
              {/* <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaPhone className="text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none"
                />
              </div> */}
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaLock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium"
              >
                Create Account
              </button>
            </form>

            <div className="my-4 text-center text-gray-400 text-sm">Or continue with</div>
            <div className="flex gap-3 justify-center">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <FaGoogle /> Google
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <FaTwitter /> Twitter
              </button>
            </div>

            <p className="text-center mt-6 text-sm text-gray-600">
              Already have an account?{" "}
              <button onClick={() => setIsFlipped(false)} className="text-green-500">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
