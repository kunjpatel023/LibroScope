
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const BASE_URL = "http://127.0.0.1:8000/api"; // Django backend

  // Login handler
  // Login handler
const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${BASE_URL}/login/`, {
        email: email,
        password: password,
      });
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid login credentials");
    }
  };
  
  // Signup handler
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(`${BASE_URL}/register/`, {
        username: fullName, // assuming username is full name
        email: email,
        password: password,
      });
      alert("Account created! Please login.");
      setIsFlipped(false);
    } catch (err) {
      setError("Error creating account");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 overflow-hidden relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-3 left-3 px-3 py-1 bg-white text-gray-700 rounded shadow hover:bg-gray-100"
      >
        ← Back to Home
      </button>

      <div style={{ perspective: "1000px", width: "400px", height: "450px" }}>
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Login Form */}
          <div className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6 backface-hidden">
            <h3 className="text-center mb-4 font-bold text-lg text-gray-800">
              Login
            </h3>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Login
              </button>
            </form>
            <p className="text-center mt-2">
              Don't have an account?{" "}
              <button
                onClick={() => setIsFlipped(true)}
                className="text-blue-500"
              >
                Sign up
              </button>
            </p>
          </div>

          {/* Signup Form */}
          <div className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6 backface-hidden transform rotate-y-180">
            <h3 className="text-center mb-4 font-bold text-lg text-gray-800">
              Sign Up
            </h3>
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label>Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center mt-2">
              Already have an account?{" "}
              <button
                onClick={() => setIsFlipped(false)}
                className="text-green-500"
              >
                Login
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
