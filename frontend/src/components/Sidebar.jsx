// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   FaHome,
//   FaBookOpen,
//   FaLanguage,
//   FaUser,
//   FaPhoneAlt,
//   FaInfoCircle,
//   FaTags,
//   FaSignOutAlt,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa";

// export default function Sidebar({ collapsed, setCollapsed }) {
//   const location = useLocation();

//   const menuItems = [
//     { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
//     { name: "Categories", icon: <FaBookOpen />, path: "/categories" },
//     { name: "Sum + Translation", icon: <FaLanguage />, path: "/summarytranslation" },
//     { name: "Profile", icon: <FaUser />, path: "/profile" },
//     { name: "Contact", icon: <FaPhoneAlt />, path: "/contact" },
//     { name: "About", icon: <FaInfoCircle />, path: "/about" },
//     { name: "Pricing", icon: <FaTags />, path: "/subscription" },
//   ];

//   return (
//     <div
//       className={`flex flex-col h-screen border-r border-gray-200 bg-white dark:bg-gray-900 transition-all duration-300 sticky top-0 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700">
//         {!collapsed && (
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
//               S
//             </div>
//             <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
//               SmartShelf
//             </span>
//           </div>
//         )}
//       </div>

//       {/* Collapse/Expand Button Centered */}
//       <div className="flex justify-center py-3 border-b border-gray-200 dark:border-gray-700">
//         <button onClick={() => setCollapsed(!collapsed)}>
//           {collapsed ? (
//             <FaChevronRight className="text-gray-600 dark:text-gray-300 text-lg" />
//           ) : (
//             <FaChevronLeft className="text-gray-600 dark:text-gray-300 text-lg" />
//           )}
//         </button>
//       </div>

//       {/* Profile Section */}
//       <div className="flex flex-col items-center py-4 border-b border-gray-200 dark:border-gray-700">
//         <FaUser className="text-2xl text-gray-600 dark:text-gray-300" />
//         {!collapsed && (
//           <span className="mt-2 text-sm font-semibold">John Doe</span>
//         )}
//       </div>

//       {/* Menu Items with spacing */}
//       <nav className="flex-1 mt-4 space-y-2">
//         {menuItems.map((item) => {
//           const isActive = location.pathname === item.path;
//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`flex items-center ${
//                 collapsed ? "justify-center" : ""
//               } px-4 py-2 mx-2 rounded-lg transition-colors ${
//                 isActive
//                   ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white"
//                   : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               {!collapsed && <span className="ml-4">{item.name}</span>}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Logout */}
//       <div
//         className={`p-4 border-t border-gray-200 dark:border-gray-700 ${
//           collapsed ? "flex justify-center" : ""
//         }`}
//       >
//         <button className="flex items-center text-red-500 hover:text-red-600">
//           <Link to="/auth" className="ml-2"><FaSignOutAlt /></Link>
//           {/* <FaSignOutAlt /> */}
//           {!collapsed && (
//             <Link to="/auth" className="ml-2">
//               Logout
//             </Link>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   FaHome,
//   FaBookOpen,
//   FaLanguage,
//   FaUser,
//   FaPhoneAlt,
//   FaInfoCircle,
//   FaTags,
//   FaSignOutAlt,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa";
// import axios from "axios";

// export default function Sidebar({ collapsed, setCollapsed }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");

//   const BASE_URL = "http://127.0.0.1:8000";

//   // Fetch logged-in user's username
//   useEffect(() => {
//     const token = localStorage.getItem("access");
//     if (!token) return;
//     axios
//       .get(`${BASE_URL}/api/profile/`, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then((res) => {
//         if (res.data && res.data.profile && res.data.profile.user) {
//           setUsername(res.data.profile.user.username);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching username:", err);
//       });
//   }, []);

//   const menuItems = [
//     { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
//     { name: "Categories", icon: <FaBookOpen />, path: "/categories" },
//     { name: "Sum + Translation", icon: <FaLanguage />, path: "/summarytranslation" },
//     { name: "Profile", icon: <FaUser />, path: "/profile" },
//     { name: "Contact", icon: <FaPhoneAlt />, path: "/contact" },
//     { name: "About", icon: <FaInfoCircle />, path: "/about" },
//     { name: "Pricing", icon: <FaTags />, path: "/subscription" },
//   ];

//   return (
//     <div
//       className={`flex flex-col rounded-4xl h-screen border-r border-gray-200 bg-[#E0E1DD] dark:bg-gray-900 transition-all duration-700 mt-4 mb-4 pb-4 sticky top-0 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-center p-4 border-b border-gray-200  dark:border-gray-700">
//         {!collapsed && (
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
//               S
//             </div>
//             <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
//               SmartShelf
//             </span>
//           </div>
//         )}
//       </div>

//       {/* Collapse/Expand Button Centered */}
//       <div className="flex justify-center py-3  dark:border-gray-700">
//         <button onClick={() => setCollapsed(!collapsed)}>
//           {collapsed ? (
//             <FaChevronRight className="text-gray-600 dark:text-gray-300 text-lg" />
//           ) : (
//             <FaChevronLeft className="text-gray-600 dark:text-gray-300 text-lg" />
//           )}
//         </button>
//       </div>

//       {/* Profile Section (Clickable) */}
//       <div
//         className="flex flex-col items-center py-4  dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//         onClick={() => navigate("/profile")}
//       >
//         <FaUser className="text-2xl text-gray-600 dark:text-gray-300" />
//         {!collapsed && (
//           <span className="mt-2 text-sm font-semibold">
//             {username || "Loading..."}
//           </span>
//         )}
//       </div>

//       {/* Menu Items with spacing */}
//       <nav className="flex-1 mt-4 space-y-7">
//         {menuItems.map((item) => {
//           const isActive = location.pathname === item.path;
//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`flex items-center ${
//                 collapsed ? "justify-center" : ""
//               } px-4 py-2 mx-2 rounded-4xl transition-colors ${
//                 isActive
//                   ? "bg-gradient-to-r from-black to-[#EBE6D5] text-white "
//                   : "text-gray-800  hover:bg-gray-100 "
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               {!collapsed && <span className="ml-4">{item.name}</span>}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Logout */}
//       <div
//         className={`p-4 border-t border-gray-200 dark:border-gray-700 ${
//           collapsed ? "flex justify-center" : ""
//         }`}
//       >

//         <button className="flex items-center text-red-500 hover:text-red-600">
//           <Link to="/auth" className="ml-2"><FaSignOutAlt /></Link>
//           {!collapsed && (
//             <Link to="/auth" className="ml-2">
//               Logout
//             </Link>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }







import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaLanguage,
  FaUser,
  FaPhoneAlt,
  FaInfoCircle,
  FaTags,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import axios from "axios";

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const BASE_URL = "http://127.0.0.1:8000";

  // Fetch logged-in user's username
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) return;
    axios
      .get(`${BASE_URL}/api/profile/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data && res.data.profile && res.data.profile.user) {
          setUsername(res.data.profile.user.username);
        }
      })
      .catch((err) => {
        console.error("Error fetching username:", err);
      });
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Categories", icon: <FaBookOpen />, path: "/categories" },
    {
      name: "Sum + Translation",
      icon: <FaLanguage />,
      path: "/summarytranslation",
    },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Contact", icon: <FaPhoneAlt />, path: "/contact" },
    { name: "About", icon: <FaInfoCircle />, path: "/about" },
    { name: "Pricing", icon: <FaTags />, path: "/subscription" },
  ];

  return (
    <div
      className={`flex flex-col rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.25)]
  h-[calc(100vh-50px)] 
 bg-[#f7f9fa]  dark:bg-gray-900 
  transition-all duration-500 ease-in-out 
  mt-6 mb-4 ml-6 mr-2.5 pb-4 sticky top-5 
  ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 transition-all duration-500">
          {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
            S
          </div> */}
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white  font-bold">
            L
          </div>
          {!collapsed && (
            <span className="font-bold text-black  text-xl ">
              Libro
              <span className="font-bold text-blue-600  text-xl ">
              Scope
            </span>
            </span>
            
          )}
        </div>
      </div>

      {/* Collapse/Expand Button */}
      <div className="flex justify-center py-3 dark:border-gray-700">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="transition-transform duration-500"
        >
          {collapsed ? (
            <FaChevronRight className="text-gray-600 dark:text-gray-300 text-lg transform rotate-0 transition-transform duration-500" />
            // <i className="fa-solid fa-circle-chevron-right"></i>
          ) : (
            <FaChevronLeft className="text-gray-600 dark:text-gray-300 text-lg transform rotate-180 transition-transform duration-500" />
            // <i className="fa-solid fa-circle-chevron-left"></i>
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-4 ml-3 space-y-5">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
  key={item.name}
  to={item.path}
  className={`flex items-center px-4 py-2 mx-2 rounded-2xl transition-all duration-500 ease-in-out
    ${collapsed ? "justify-center" : ""}
    ${
      isActive
        ? "bg-white shadow-[inset_3px_3px_3px_rgba(0,0,0,0.6)]"
        : "hover:bg-gray-200"
    }`}
>
  {/* Icon (always visible) */}
  <span
    className={`text-lg transition-all duration-500 ease-in-out
      ${
        isActive
          ? "text-black scale-110" // active icon = blue & slightly bigger
          : "text-gray-700 dark:text-gray-300"
      }`}
  >
    {item.icon}
  </span>

  {/* Text */}
  <span
    className={`ml-4 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out
      ${collapsed ? "opacity-0 w-0 ml-0" : "opacity-100 w-auto"}
      ${
        isActive
          ? "text-black font-bold text-lg"
          : "font-bold text-md bg-black bg-clip-text text-transparent"
      }
    `}
  >
    {item.name}
  </span>
</Link>

          );
        })}
      </nav>

      {/* Profile Section (Moved above Logout) */}
      <div
        className="flex flex-col items-center py-4 cursor-pointer rounded-4xl
        hover:bg-gray-200 transition-all duration-300"
        onClick={() => navigate("/profile")}
      >
        <FaUser className="text-2xl" />
        {!collapsed && (
          <span className="mt-2 text-sm font-semibold">
            {username || "Loading..."}
          </span>
        )}
      </div>

      {/* Logout */}
      <div
        className={`p-4 border-t border-gray-200 dark:border-gray-700 ${
          collapsed ? "flex justify-center" : ""
        }`}
      >
        <button className="flex items-center text-red-500 hover:text-red-600">
          <Link to="/auth" className="ml-6 flex items-center">
            <FaSignOutAlt />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Link>
        </button>
      </div>
    </div>
  );
}
