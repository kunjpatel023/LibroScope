// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";

// export default function AuthPage() {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div
//       className="d-flex align-items-center justify-content-center vh-100"
//       style={{
//         background: "linear-gradient(135deg, #e6e6e6, #bfbadb)",
//         overflow: "hidden",
//       }}
//     >
//       {/* Back to Home */}
//       <button
//         onClick={() => navigate("/")}
//         className="btn btn-light position-absolute top-0 start-0 m-3 shadow-sm"
//       >
//         ← Back to Home
//       </button>

//       {/* Card Container */}
//       <div
//         className="auth-card-container"
//         style={{
//           perspective: "1000px",
//           width: "400px",
//           height: "450px",
//         }}
//       >
//         <div
//           className={`auth-card ${isFlipped ? "flipped" : ""}`}
//           style={{
//             width: "100%",
//             height: "100%",
//             position: "relative",
//             transition: "transform 0.8s",
//             transformStyle: "preserve-3d",
//           }}
//         >
//           {/* Login Form */}
//           <div
//             className="card shadow-lg p-4 bg-white rounded"
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               backfaceVisibility: "hidden",
//             }}
//           >
//             <h3 className="text-center mb-4 fw-bold text-dark">Login</h3>
//             <form>
//               <div className="mb-3">
//                 <label className="form-label text-dark">Email</label>
//                 <input type="email" className="form-control" placeholder="Enter email" />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label text-dark">Password</label>
//                 <input type="password" className="form-control" placeholder="Enter password" />
//               </div>
//               <button type="submit" className="btn btn-primary w-100 mb-3" onClick={() => navigate("/dashboard")}>
//                 Login
//               </button>
//             </form>
//             <p className="text-center text-dark">
//               Don't have an account?{" "}
//               <button
//                 onClick={() => setIsFlipped(true)}
//                 className="btn btn-link p-0"
//               >
//                 Sign up
//               </button>
//             </p>
//           </div>

//           {/* Signup Form */}
//           <div
//             className="card shadow-lg p-4 bg-white rounded"
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               backfaceVisibility: "hidden",
//               transform: "rotateY(180deg)",
//             }}
//           >
//             <h3 className="text-center mb-4 fw-bold">Sign Up</h3>
//             <form>
//               <div className="mb-3">
//                 <label className="form-label">Full Name</label>
//                 <input type="text" className="form-control" placeholder="Enter full name" />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input type="email" className="form-control" placeholder="Enter email" />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Password</label>
//                 <input type="password" className="form-control" placeholder="Create password" />
//               </div>
//               <button type="submit" className="btn btn-success w-100 mb-3" onClick={() => navigate("/dashboard")}>
//                 Sign Up
//               </button>
//             </form>
//             <p className="text-center">
//               Already have an account?{" "}
//               <button
//                 onClick={() => setIsFlipped(false)}
//                 className="btn btn-link p-0"
//               >
//                 Login
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Extra CSS */}
//       <style>{`
//         .auth-card.flipped {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 overflow-hidden relative"
    >
      {/* Back to Home */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-3 left-3 px-3 py-1 bg-white text-gray-700 rounded shadow hover:bg-gray-100"
      >
        ← Back to Home
      </button>

      {/* Card Container */}
      <div
        className="relative"
        style={{
          perspective: "1000px",
          width: "400px",
          height: "450px",
        }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Login Form */}
          <div
            className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6 backface-hidden"
          >
            <h3 className="text-center mb-4 font-bold text-lg text-gray-800">
              Login
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                />
              </div>
              <button
                type="submit"
                onClick={() => navigate("/dashboard")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mb-3"
              >
                Login
              </button>
            </form>
            <p className="text-center text-gray-700">
              Don't have an account?{" "}
              <button
                onClick={() => setIsFlipped(true)}
                className="text-blue-500 hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>

          {/* Signup Form */}
          <div
            className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6 backface-hidden transform rotate-y-180"
          >
            <h3 className="text-center mb-4 font-bold text-lg text-gray-800">
              Sign Up
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Create password"
                />
              </div>
              <button
                type="submit"
                onClick={() => navigate("/dashboard")}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded mb-3"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center text-gray-700">
              Already have an account?{" "}
              <button
                onClick={() => setIsFlipped(false)}
                className="text-green-500 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Extra CSS for flip effect */}
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
