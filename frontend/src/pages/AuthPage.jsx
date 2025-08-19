// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEnvelope, FaLock, FaUser, FaGoogle, FaTwitter } from "react-icons/fa";
// import axios from "axios";

// export default function AuthPage() {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [error, setError] = useState("");
//   const [forgotMode, setForgotMode] = useState(false);
//   const [resetEmail, setResetEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const navigate = useNavigate();

//   const BASE_URL = "http://127.0.0.1:8000/api";

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const res = await axios.post(`${BASE_URL}/login/`, {
//         email,
//         password,
//       });
//       localStorage.setItem("access", res.data.access);
//       localStorage.setItem("refresh", res.data.refresh);
//       navigate("/dashboard");
//     } catch {
//       setError("Invalid login credentials");
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}/register/`, {
//         username: fullName,
//         email,
//         password,
//         password2: confirmPassword, // send confirm password
//       });
//       alert("Account created! Please login.");
//       setIsFlipped(false);
//     } catch (err) {
//       setError(err.response?.data?.detail || "Error creating account");
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BASE_URL}/reset-password/`, {
//         email: resetEmail,
//         new_password: newPassword,
//       });
//       alert("Password reset successfully! Please login.");
//       setForgotMode(false);
//     } catch {
//       setError("Failed to reset password");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden relative px-4">
//       {/* Back to Home */}
//       <button
//         onClick={() => navigate("/")}
//         className="absolute top-4 left-4 text-sm text-black hover:underline z-50"
//       >
//         ← Back to Home
//       </button>

//       {/* Flip Container */}
//       <div
//         style={{ perspective: "1000px" }}
//         className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
//       >
//         <div
//           className={`relative w-full h-[500px] sm:h-[540px] md:h-[560px] transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""
//             }`}
//         >
//           {/* LOGIN CARD */}
//           <div className="absolute w-full h-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 backface-hidden flex flex-col justify-center">
//             <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg font-bold mb-6">
//               S
//             </div>
//             <h2 className="text-center text-lg sm:text-xl font-bold text-purple-700">Welcome Back</h2>
//             <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
//               Sign in to your SmartShelf account
//             </p>

//             <form onSubmit={handleLogin} className="space-y-4">
//               <div className="flex items-center bg-gray-100 rounded-lg px-3">
//                 <FaEnvelope className="text-gray-400" />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
//                   required
//                 />
//               </div>
//               <div className="flex items-center bg-gray-100 rounded-lg px-3">
//                 <FaLock className="text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
//                   required
//                 />
//               </div>

//               {/* reset password */}
//               {!forgotMode ? (
//                 <>
//                   {/* normal login form here */}
//                   <p className="text-sm text-blue-500 mt-2 cursor-pointer" onClick={() => setForgotMode(true)}>
//                     Forgot Password?
//                   </p>
//                 </>
//               ) : (
//                 <form onSubmit={handleResetPassword} className="space-y-4">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={resetEmail}
//                     onChange={(e) => setResetEmail(e.target.value)}
//                     className="w-full border px-3 py-2 rounded"
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="Enter new password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     className="w-full border px-3 py-2 rounded"
//                     required
//                   />
//                   <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
//                     Reset Password
//                   </button>
//                   <p className="text-sm text-gray-500 cursor-pointer mt-2" onClick={() => setForgotMode(false)}>
//                     Back to Login
//                   </p>
//                 </form>
//               )}

//               {/* reset pass word end */}
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium text-sm sm:text-base"
//               >
//                 Sign In
//               </button>
//             </form>

//             <div className="my-4 text-center text-gray-400 text-xs sm:text-sm">Or continue with</div>
//             <div className="flex gap-3 justify-center">
//               <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm">
//                 <FaGoogle /> Google
//               </button>
//               <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm">
//                 <FaTwitter /> Twitter
//               </button>
//             </div>

//             <p className="text-center mt-6 text-xs sm:text-sm text-gray-600">
//               Don’t have an account?{" "}
//               <button onClick={() => setIsFlipped(true)} className="text-blue-500">
//                 Sign up
//               </button>
//             </p>
//           </div>

//           {/* SIGNUP CARD */}
//           <div className="absolute w-full h-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 backface-hidden transform rotate-y-180 flex flex-col justify-center">
//             <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg font-bold mb-6">
//               S
//             </div>
//             <h2 className="text-center text-lg sm:text-xl font-bold text-purple-700">Create Account</h2>
//             <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
//               Join SmartShelf and start your reading journey
//             </p>

//             <form onSubmit={handleSignup} className="space-y-4">
//               <div className="flex items-center bg-gray-100 rounded-lg px-3">
//                 <FaUser className="text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
//                   required
//                 />
//               </div>
//               <div className="flex items-center bg-gray-100 rounded-lg px-3">
//                 <FaEnvelope className="text-gray-400" />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
//                   required
//                 />
//               </div>
//               <div className="flex items-center bg-gray-100 rounded-lg px-3">
//                 <FaLock className="text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
//                   required
//                 />
//               </div>
//               <div className="flex items-center bg-gray-100 rounded-lg px-3">
//                 <FaLock className="text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
//                   required
//                 />
//               </div>
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium text-sm sm:text-base"
//               >
//                 Create Account
//               </button>
//             </form>

//             <div className="my-4 text-center text-gray-400 text-xs sm:text-sm">Or continue with</div>
//             <div className="flex gap-3 justify-center">
//               <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm">
//                 <FaGoogle /> Google
//               </button>
//               <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm">
//                 <FaTwitter /> Twitter
//               </button>
//             </div>

//             <p className="text-center mt-6 text-xs sm:text-sm text-gray-600">
//               Already have an account?{" "}
//               <button onClick={() => setIsFlipped(false)} className="text-green-500">
//                 Sign in
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </div>
//   );
// }





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from "axios";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // "login" | "signup" | "reset"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const BASE_URL = "http://127.0.0.1:8000/api";

  // LOGIN
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

  // SIGNUP
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
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
            <h2 className="text-center text-lg sm:text-xl font-bold text-blue-600">Welcome Back</h2>
            <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
              Sign in to your SmartShelf account
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
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
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaLock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
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

            <div className="my-4 text-center text-gray-400 text-xs sm:text-sm">Or continue with</div>
            <div className="flex gap-3 justify-center">
              <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm">
                <FaGoogle /> Google
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm">
                <FaTwitter /> Twitter
              </button>
            </div>

            <p className="text-center mt-6 text-xs sm:text-sm text-gray-600">
              Don’t have an account?{" "}
              <span onClick={() => setMode("signup")} className="text-blue-500 cursor-pointer">
                Sign up
              </span>
            </p>
          </div>
        )}

        {/* SIGNUP CARD */}
        {mode === "signup" && (
          <div className="w-full h-[540px] bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-center text-lg sm:text-xl font-bold text-blue-600">Create Account</h2>
            <form onSubmit={handleSignup} className="space-y-4 mt-4">
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
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaLock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <FaLock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-transparent flex-1 px-2 py-3 outline-none text-sm sm:text-base"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white py-3 rounded-[50px] font-medium text-sm sm:text-base"
              >
                Create Account
              </button>
            </form>
            <p className="text-center mt-6 text-xs sm:text-sm text-gray-600">
              Already have an account?{" "}
              <span onClick={() => setMode("login")} className="text-green-500 cursor-pointer">
                Sign in
              </span>
            </p>
          </div>
        )}

        {/* RESET PASSWORD CARD */}
        {mode === "reset" && (
          <div className="w-full h-[500px] bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-center text-lg sm:text-xl font-bold text-blue-600">Reset Password</h2>
            <form onSubmit={handleResetPassword} className="space-y-4 mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-[50px]">
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
