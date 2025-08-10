// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { FiHome, FiBookOpen, FiEdit3, FiUser, FiInfo, FiMail, FiDollarSign, FiLogOut } from 'react-icons/fi'
// import { useAuth } from '../context/AuthContext'

// export default function Sidebar({ collapsed, setCollapsed }) {
//   const { logout } = useAuth()
//   const nav = useNavigate()

//   const menu = [
//     { to: '/dashboard', label: 'Dashboard', icon: <FiHome /> },
//     { to: '/dashboard/categories', label: 'All Categories', icon: <FiBookOpen /> },
//     { to: '/dashboard/summary-translation', label: 'Summary + Translation', icon: <FiEdit3 /> },
//     { to: '/dashboard/profile', label: 'Profile', icon: <FiUser /> },
//     { to: '/about', label: 'About', icon: <FiInfo /> },
//     { to: '/contact', label: 'Contact', icon: <FiMail /> },
//     { to: '/subscription', label: 'Subscription', icon: <FiDollarSign /> },
//   ]

//   return (
//     <aside className={`bg-white dark:bg-gray-900 border-r dark:border-gray-800 transition-all ${collapsed ? 'w-20' : 'w-64' }`}>
//       <div className="h-full flex flex-col justify-between">
//         <div>
//           <div className="px-4 py-6 flex items-center gap-3">
//             <div className="bg-primary/20 text-primary rounded p-2">{/* logo icon */}LS</div>
//             {!collapsed && <div className="font-bold">LibroScope</div>}
//             <button className="ml-auto p-1" onClick={() => setCollapsed(s => !s)}>{collapsed ? '›' : '‹'}</button>
//           </div>

//           <nav className="mt-4">
//             {menu.map(i => (
//               <NavLink key={i.to} to={i.to} className={({isActive}) => `flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive ? 'bg-primary/10' : ''}`}>
//                 <div className="text-lg">{i.icon}</div>
//                 {!collapsed && <span>{i.label}</span>}
//               </NavLink>
//             ))}
//           </nav>
//         </div>

//         <div className="px-4 py-6">
//           <button onClick={() => { logout(); nav('/login') }} className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-red-50 dark:hover:bg-red-900">
//             <FiLogOut /> {!collapsed && <span>Logout</span>}
//           </button>
//         </div>
//       </div>
//     </aside>
//   )
// }





// src/components/Sidebar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Sidebar({ collapsed, setCollapsed }) {
//   const menuItems = [
//     { name: "Dashboard", path: "/dashboard" },
//     { name: "Categories", path: "/dashboard/categories" },
//     { name: "Summary & Translation", path: "/dashboard/summary-translation" },
//     { name: "Profile", path: "/dashboard/profile" },
//     { name: "About", path: "/dashboard/about" },
//     { name: "Contact", path: "/dashboard/contact" },
//     { name: "Subscription", path: "/dashboard/subscription" },
//   ];

//   return (
//     <div
//       className={`bg-gray-900 text-white transition-all duration-300 ${
//         collapsed ? "w-16" : "w-60"
//       } min-h-screen`}
//     >
//       <button
//         onClick={() => setCollapsed(!collapsed)}
//         className="p-4 w-full text-left hover:bg-gray-700"
//       >
//         {collapsed ? ">>" : "Collapse"}
//       </button>
//       <nav className="mt-4">
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             className={({ isActive }) =>
//               `block px-4 py-2 hover:bg-gray-700 ${
//                 isActive ? "bg-gray-700 font-bold" : ""
//               }`
//             }
//           >
//             {item.name}
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   );
// }

// =--------------------------------------------------

// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaHome, FaBook, FaLanguage, FaRobot, FaUser, FaCog, FaQuestionCircle, FaSignOutAlt
// } from "react-icons/fa";

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-white shadow-md flex flex-col">
//       {/* Logo */}
//       <div className="p-6 flex items-center space-x-2">
//         <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
//         <h1 className="text-lg font-bold text-purple-600">SmartShelf</h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 space-y-2">
//         <SidebarItem to="/dashboard" icon={<FaHome />} text="Dashboard" />
//         <SidebarItem to="/categories" icon={<FaBook />} text="Categories" />
//         <SidebarItem to="/summarytranslation" icon={<FaLanguage />} text="Sum & Translate" />
//         <SidebarItem to="/aichat" icon={<FaRobot />} text="AI Chat" />
//         <SidebarItem to="/profile" icon={<FaUser />} text="Profile" />
//         <SidebarItem to="/settings" icon={<FaCog />} text="Settings" />
//         <SidebarItem to="/about" icon={<FaQuestionCircle />} text="Help" />
//       </nav>

//       {/* User Info */}
//       <div className="p-4 border-t">
//         <div className="flex items-center space-x-2">
//           <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">U</div>
//           <div>
//             <p className="text-sm font-semibold">John Doe</p>
//             <p className="text-xs text-gray-500">Premium User</p>
//           </div>
//         </div>
//         <button className="mt-3 flex items-center space-x-2 text-red-500 hover:text-red-600">
//           <FaSignOutAlt /> <span>Sign Out</span>
//         </button>
//       </div>
//     </aside>
//   );
// }

// function SidebarItem({ to, icon, text }) {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `flex items-center space-x-3 p-2 rounded-lg cursor-pointer 
//          ${isActive ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "text-gray-700 hover:bg-gray-100"}`
//       }
//     >
//       {icon}
//       <span>{text}</span>
//     </NavLink>
//   );
// }

// =--------------------------------------------------
// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaHome, FaBook, FaLanguage, FaRobot, FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaBars
// } from "react-icons/fa";

// export default function Sidebar({ toggleSidebar }) {
//   return (
//     <aside className="w-64 bg-white shadow-md flex flex-col">
//       {/* Logo + Close Button */}
//       <div className="p-6 flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
//           <h1 className="text-lg font-bold text-purple-600">SmartShelf</h1>
//         </div>
//         <button onClick={toggleSidebar} className="lg:hidden text-gray-600 hover:text-gray-900">
//  <FaBars />
//         </button>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 space-y-2">
//         <SidebarItem to="/dashboard" icon={<FaHome />} text="Dashboard" />
//         <SidebarItem to="/categories" icon={<FaBook />} text="Categories" />
//         <SidebarItem to="/summarytranslation" icon={<FaLanguage />} text="Sum & Translate" />
//         <SidebarItem to="/aichat" icon={<FaRobot />} text="AI Chat" />
//         <SidebarItem to="/profile" icon={<FaUser />} text="Profile" />
//         <SidebarItem to="/settings" icon={<FaCog />} text="Settings" />
//         <SidebarItem to="/about" icon={<FaQuestionCircle />} text="Help" />
//       </nav>

//       {/* User Info */}
//       <div className="p-4 border-t">
//         <div className="flex items-center space-x-2">
//           <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">U</div>
//           <div>
//             <p className="text-sm font-semibold">John Doe</p>
//             <p className="text-xs text-gray-500">Premium User</p>
//           </div>
//         </div>
//         <button className="mt-3 flex items-center space-x-2 text-red-500 hover:text-red-600">
//           <FaSignOutAlt /> <span>Sign Out</span>
//         </button>
//       </div>
//     </aside>
//   );
// }

// function SidebarItem({ to, icon, text }) {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `flex items-center space-x-3 p-2 rounded-lg cursor-pointer 
//          ${isActive ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "text-gray-700 hover:bg-gray-100"}`
//       }
//     >
//       {icon}
//       <span>{text}</span>
//     </NavLink>
//   );
// // }
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBook, FaList, FaFileAlt, FaUser, FaInfoCircle, FaEnvelope, FaCreditCard, FaBars } from 'react-icons/fa';

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);
//   const location = useLocation();

//   const menuItems = [
//     { name: 'Dashboard', icon: <FaBook />, path: '/dashboard' },
//     { name: 'Categories', icon: <FaList />, path: '/dashboard/categories' },
//     { name: 'Summary & Translation', icon: <FaFileAlt />, path: '/dashboard/summary-translation' },
//     { name: 'Profile', icon: <FaUser />, path: '/dashboard/profile' },
//     { name: 'About', icon: <FaInfoCircle />, path: '/about' },
//     { name: 'Contact', icon: <FaEnvelope />, path: '/contact' },
//     { name: 'Subscription', icon: <FaCreditCard />, path: '/subscription' },
//   ];

//   return (
//     <div
//       className={`h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 
//       ${collapsed ? 'w-16' : 'w-64'}`}
//     >
//       {/* Sidebar Header */}
//       <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
//         {!collapsed && <h1 className="text-xl font-bold">LibroScope</h1>}
//         <button onClick={() => setCollapsed(!collapsed)} className="focus:outline-none">
//           <FaBars />
//         </button>
//       </div>

//       {/* Menu Items */}
//       <nav className="flex-1 mt-4">
//         {menuItems.map((item) => (
//           <Link
//             key={item.name}
//             to={item.path}
//             className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-colors ${
//               location.pathname === item.path ? 'bg-gray-700' : ''
//             }`}
//           >
//             <span className="text-lg">{item.icon}</span>
//             {!collapsed && <span className="ml-3">{item.name}</span>}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaBookOpen,
  FaLanguage,
  FaComments,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaPhoneAlt,
  FaInfoCircle,
  FaSignOutAlt,
  FaBars
} from 'react-icons/fa';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
    { name: 'Categories', icon: <FaBookOpen />, path: '/categories' },
    { name: 'Sum & Translate', icon: <FaLanguage />, path: '/summarytranslation' },
    { name: 'Profile', icon: <FaUser />, path: '/profile' },
    { name: 'About', icon: <FaInfoCircle />, path: '/about' },
    { name: 'Contact', icon: <FaPhoneAlt />, path: '/contact' },
    { name: 'Settings', icon: <FaCog />, path: '/settings' },
    { name: 'Pricing', icon: <FaUser />, path: '/subscription' },

  ];

  return (
    <div
      className={`flex flex-col h-screen border-r border-gray-200 bg-white transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600  flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              SmartShelf
            </span>
          </div>
        )}
        <button onClick={() => setCollapsed(!collapsed)}>
          <FaBars className="text-gray-600" />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-2 mx-2 my-1 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Profile Section */}
      <div className="p-4 border-t border-gray-200">
        {!collapsed && (
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
              U
            </div>
            <div>
              <p className="font-semibold text-gray-900">John Doe</p>
              <p className="text-sm text-gray-500">Premium User</p>
            </div>
          </div>
        )}
        {/* <button className="flex items-center text-red-500 hover:text-red-600">
          <FaSignOutAlt />
          {!collapsed && <span className="ml-2">Sign Out</span>}
        </button> */}

<button className="flex items-center text-red-500 hover:text-red-600">
  <FaSignOutAlt />
  {!collapsed && (
    <Link to="/auth" className="ml-2">
      Sign Out
    </Link>
  )}
</button>
      </div>
    </div>
  );
}
