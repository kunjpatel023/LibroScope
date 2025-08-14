// import React, { useState } from "react";
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
//   FaBars
// } from "react-icons/fa";

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);
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
//       className={`flex flex-col h-screen border-r border-gray-200 bg-white dark:bg-gray-900 transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       {/* Logo + Collapse Button */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
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
//         <button onClick={() => setCollapsed(!collapsed)}>
//           <FaBars className="text-gray-600 dark:text-gray-300" />
//         </button>
//       </div>

//       {/* Menu Items */}
//       <nav className="flex-1 mt-4">
//         {menuItems.map((item) => {
//           const isActive = location.pathname === item.path;
//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`flex items-center px-4 py-2 mx-2 my-1 rounded-lg transition-colors ${
//                 isActive
//                   ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white"
//                   : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               {!collapsed && <span className="ml-3">{item.name}</span>}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Logout */}
//       <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//         <button className="flex items-center text-red-500 hover:text-red-600">
//           <FaSignOutAlt />
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



// import React, { useState, useEffect } from "react";
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
//   FaBars
// } from "react-icons/fa";

// export default function Sidebar({ defaultCollapsed = false }) {
//   const [collapsed, setCollapsed] = useState(defaultCollapsed);
//   const location = useLocation();

//   const username = "John Doe"; // later from backend/auth
//   const profileImg = "https://via.placeholder.com/40"; // replace with actual

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
//       className={`flex flex-col h-screen border-r border-gray-200 bg-white dark:bg-gray-900 transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       {/* Logo + Collapse */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
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
//         <button onClick={() => setCollapsed(!collapsed)}>
//           <FaBars className="text-gray-600 dark:text-gray-300" />
//         </button>
//       </div>

//       {/* Profile Section */}
//       {!collapsed && (
//         <div className="flex flex-col items-center py-4 border-b border-gray-200 dark:border-gray-700">
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="w-14 h-14 rounded-full object-cover mb-2"
//           />
//           <p className="font-medium text-gray-800 dark:text-gray-200">{username}</p>
//         </div>
//       )}

//       {/* Menu Items */}
//       <nav className="flex-1 flex flex-col justify-between">
//         <div className="mt-4 flex flex-col">
//           {menuItems.map((item) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`flex items-center px-4 py-2 mx-2 my-1 rounded-lg transition-colors ${
//                   isActive
//                     ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white"
//                     : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 {!collapsed && <span className="ml-3">{item.name}</span>}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Logout */}
//         <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//           <button className="flex items-center text-red-500 hover:text-red-600 w-full">
//             <FaSignOutAlt />
//             {!collapsed && (
//               <Link to="/auth" className="ml-2">
//                 Logout
//               </Link>
//             )}
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// }



// import React, { useState } from "react";
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
//   FaBars
// } from "react-icons/fa";

// export default function Sidebar({ defaultCollapsed = false }) {
//   const [collapsed, setCollapsed] = useState(defaultCollapsed);
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
//       {/* Logo + Collapse Button */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
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
//         <button onClick={() => setCollapsed(!collapsed)}>
//           <FaBars className="text-gray-600 dark:text-gray-300" />
//         </button>
//       </div>

//       {/* Profile Section */}
//       <div className="flex flex-col items-center py-4 border-b border-gray-200 dark:border-gray-700">
//         <FaUser className="text-xl text-gray-600 dark:text-gray-300" />
//         {!collapsed && (
//           <>
//             <span className="mt-2 text-lg font-semibold">John Doe</span>
//           </>
//         )}
//       </div>

//       {/* Menu Items */}
//       <nav className="flex-1 mt-4">
//         {menuItems.map((item) => {
//           const isActive = location.pathname === item.path;
//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`flex items-center px-4 py-2 mx-2 my-1 rounded-lg transition-colors ${
//                 isActive
//                   ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white"
//                   : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               {!collapsed && <span className="ml-3">{item.name}</span>}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Logout */}
//       <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//         <button className="flex items-center text-red-500 hover:text-red-600">
//           <FaSignOutAlt />
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
//       {/* Logo + Collapse Button */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
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
//         <button onClick={() => setCollapsed(!collapsed)} >
//           {collapsed ? (
//             <FaChevronRight className="text-gray-600 dark:text-gray-300 " />
//           ) : (
//             <FaChevronLeft className="text-gray-600 dark:text-gray-300 " />
//           )}
//         </button>
//       </div>

//       {/* Profile Section */}
//       <div className="flex flex-col items-center py-4 border-b border-gray-200 dark:border-gray-700">
//         <FaUser className="text-xl text-gray-600 dark:text-gray-300" />
//         {!collapsed && (
//           <>
//             <span className="mt-2 text-lg font-semibold">John Doe</span>
//           </>
//         )}
//       </div>

//       {/* Menu Items */}
//       <nav className="flex-1 mt-4">
//         {menuItems.map((item) => {
//           const isActive = location.pathname === item.path;
//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`flex items-center ${
//                 collapsed ? "justify-center" : ""
//               } px-4 py-2 mx-2 my-1 rounded-lg transition-colors ${
//                 isActive
//                   ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white"
//                   : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               {!collapsed && <span className="ml-3">{item.name}</span>}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Logout */}
//       <div className={`p-4 border-t border-gray-200 dark:border-gray-700 ${collapsed ? "flex justify-center" : ""}`}>
//         <button className="flex items-center text-red-500 hover:text-red-600">
//           <FaSignOutAlt />
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



import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  FaChevronRight
} from "react-icons/fa";

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Categories", icon: <FaBookOpen />, path: "/categories" },
    { name: "Sum + Translation", icon: <FaLanguage />, path: "/summarytranslation" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Contact", icon: <FaPhoneAlt />, path: "/contact" },
    { name: "About", icon: <FaInfoCircle />, path: "/about" },
    { name: "Pricing", icon: <FaTags />, path: "/subscription" },
  ];

  return (
    <div
      className={`flex flex-col h-screen border-r border-gray-200 bg-white dark:bg-gray-900 transition-all duration-300 sticky top-0 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              SmartShelf
            </span>
          </div>
        )}
      </div>

      {/* Collapse/Expand Button Centered */}
      <div className="flex justify-center py-3 border-b border-gray-200 dark:border-gray-700">
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <FaChevronRight className="text-gray-600 dark:text-gray-300 text-lg" />
          ) : (
            <FaChevronLeft className="text-gray-600 dark:text-gray-300 text-lg" />
          )}
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center py-4 border-b border-gray-200 dark:border-gray-700">
        <FaUser className="text-2xl text-gray-600 dark:text-gray-300" />
        {!collapsed && (
          <span className="mt-2 text-sm font-semibold">John Doe</span>
        )}
      </div>

      {/* Menu Items with spacing */}
      <nav className="flex-1 mt-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center ${
                collapsed ? "justify-center" : ""
              } px-4 py-2 mx-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white"
                  : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span className="ml-4">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div
        className={`p-4 border-t border-gray-200 dark:border-gray-700 ${
          collapsed ? "flex justify-center" : ""
        }`}
      >
        <button className="flex items-center text-red-500 hover:text-red-600">
          <FaSignOutAlt />
          {!collapsed && (
            <Link to="/auth" className="ml-2">
              Logout
            </Link>
          )}
        </button>
      </div>
    </div>
  );
}
