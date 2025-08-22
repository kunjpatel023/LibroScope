import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaGoogle,
  FaTwitter,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import axios from "axios";

// ✅ Password validation regex (8–13 chars, uppercase, lowercase, digit, special)
const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,13}$/;
  return regex.test(password);
};

// ✅ Password Requirements Checklist
const PasswordRequirements = ({ password }) => {
  const rules = [
    { label: "8–13 characters", test: /^.{8,13}$/ },
    { label: "At least 1 uppercase letter", test: /[A-Z]/ },
    { label: "At least 1 lowercase letter", test: /[a-z]/ },
    { label: "At least 1 digit", test: /\d/ },
    { label: "At least 1 special character (@$!%*?&)", test: /[@$!%*?&]/ },
  ];

  return (
    <ul className="mt-2 space-y-1 text-sm">
      {rules.map((rule, i) => {
        const passed = rule.test.test(password);
        return (
          <li
            key={i}
            className={`flex items-center gap-2 ${
              passed ? "text-green-600" : "text-red-500"
            }`}
          >
            {passed ? <FaCheckCircle /> : <FaTimesCircle />}
            {rule.label}
          </li>
        );
      })}
    </ul>
  );
};

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // "login" | "signup" | "reset"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const navigate = useNavigate();
  const BASE_URL = "http://127.0.0.1:8000/api";

  // ✅ Clear all fields & errors whenever mode changes
  useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
    setResetEmail("");
    setNewPassword("");
    setError("");
  }, [mode]);

  // Email validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be 8–13 characters with uppercase, lowercase, digit & special character"
      );
      return;
    }

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

  // SIGNUP
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be 8–13 characters with uppercase, lowercase, digit & special character"
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/register/`, {
        username: fullName,
        email,
        password,
        password2: confirmPassword, // match serializer
      });
      alert("Account created! Please login.");
      setMode("login");
    } catch (err) {
      setError(err.response?.data?.detail || "Error creating account");
    }
  };

  // RESET PASSWORD
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(resetEmail)) {
      setError("Invalid email format");
      return;
    }
    if (!validatePassword(newPassword)) {
      setError(
        "Password must be 8–13 characters with uppercase, lowercase, digit & special character"
      );
      return;
    }

    try {
      await axios.post(`${BASE_URL}/reset-password/`, {
        email: resetEmail,
        new_password: newPassword,
      });
      alert("Password reset successfully! Please login.");
      setMode("login");
    } catch {
      setError("Failed to reset password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#F5F5F5] to-[#E8E2D6] overflow-hidden relative px-4">
      {/* Back to Home */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-lg text-black hover:underline z-50"
      >
        ← Back to Home
      </button>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {/* LOGIN CARD */}
        {mode === "login" && (
          <div className="w-full h-[500px] sm:h-[540px] bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-center">
            <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg font-bold mb-6">
              L
            </div>
            <h2 className="text-center text-lg sm:text-xl font-bold text-blue-600">
              Welcome Back
            </h2>
            <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
              Sign in to your LibroScope account
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
              </div>
              {/* Password with eye */}
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaLock className="text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white py-3 rounded-[50px] font-medium text-sm sm:text-base"
              >
                Sign In
              </button>
            </form>

            <p
              className="text-sm text-blue-500 mt-3 cursor-pointer text-center"
              onClick={() => setMode("reset")}
            >
              Forgot Password?
            </p>

            <div className="my-4 text-center text-gray-400 text-xs sm:text-sm">
              Or continue with
            </div>
            <div className="flex gap-3 justify-center">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm hover:bg-gray-200 transition"
              >
                <FaGoogle /> Google
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm hover:bg-gray-200 transition"
              >
                <FaTwitter /> Twitter
              </a>
            </div>

            <p className="text-center mt-6 text-xs sm:text-sm text-gray-600">
              Don’t have an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="text-blue-500 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        )}

        {/* SIGNUP CARD */}
        {mode === "signup" && (
          <div className="w-full min-h-[600px] bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-center text-lg sm:text-xl font-bold text-blue-600">
              Create Account
            </h2>
            <form onSubmit={handleSignup} className="space-y-4 mt-4">
              {/* Full Name */}
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
              </div>
              {/* Email */}
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
              </div>
              {/* Password with eye */}
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaLock className="text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* ✅ Show password requirements */}
              <PasswordRequirements password={password} />

              {/* Confirm Password with eye */}
              <div className="flex items-center bg-gray-100 rounded-lg px-3 mt-2">
                <FaLock className="text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white py-3 rounded-[50px] font-medium text-sm sm:text-base mt-3"
              >
                Create Account
              </button>
            </form>
            <p className="text-center mt-6 text-xs sm:text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-green-500 cursor-pointer"
              >
                Sign in
              </span>
            </p>
          </div>
        )}

        {/* RESET PASSWORD CARD */}
        {mode === "reset" && (
          <div className="w-full min-h-[500px] bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-center text-lg sm:text-xl font-bold text-blue-600">
              Reset Password
            </h2>
            <form onSubmit={handleResetPassword} className="space-y-4 mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaLock className="text-gray-400" />
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* ✅ Show requirements for reset password too */}
              <PasswordRequirements password={newPassword} />

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-[50px] mt-2"
              >
                Reset Password
              </button>
            </form>
            <p
              className="text-sm text-gray-600 mt-4 cursor-pointer text-center"
              onClick={() => setMode("login")}
            >
              Back to Login
            </p>
          </div>
        )}
      </div>
    </div>
  );
}