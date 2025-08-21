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
  FaPlusCircle,
} from "react-icons/fa";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isSuperuser, setIsSuperuser] = useState(false);

  const BASE_URL = "http://127.0.0.1:8000";

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
        if (res.data && res.data.is_superuser !== undefined) {
          setIsSuperuser(res.data.is_superuser);
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
    // { name: "Add Book", icon: <FaPlusCircle />, path: "/add-book", superOnly: true },

    ...(isSuperuser
      ? [
          {
            name: "Add Book",
            icon: <FaPlusCircle />,
            path: "/add-book",
            // external: false,
          },
        ]
      : []),
  ];

  return (
    <div
      className={`flex flex-col rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.25)]
      h-[calc(100vh-50px)]
      bg-[#f7f9fa] dark:bg-gray-900
      transition-all duration-500 ease-in-out
      mt-6 mb-4 ml-6 mr-2.5 pb-4 sticky top-5
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            L
          </div>
          {!collapsed && (
            <span className="font-bold text-black text-xl">
              Libro
              <span className="font-bold text-blue-600 text-xl">Scope</span>
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
            <FaChevronRight className="text-gray-600 dark:text-gray-300 text-lg" />
          ) : (
            <FaChevronLeft className="text-gray-600 dark:text-gray-300 text-lg" />
          )}
        </button>
      </div>
      {/* Menu Items */}
<nav className="relative flex-1 mt-4 space-y-5 ">
  {menuItems.map((item) => {
     if (item.superOnly && !isSuperuser) return null; // hide
    const isActive = location.pathname === item.path;
    return (
      <Link
        key={item.name}
        to={item.path}
        className={`relative flex items-center rounded-2xl transition-all duration-500 ease-in-out hover:bg-gray-200
    ${
      collapsed
        ? "justify-center px-0 py-3"
        : "justify-start px-4 py-2 mx-2"
    }
  `}
      >
        <AnimatePresence>
          {isActive  && (
            <motion.div
              layoutId="activeBackground"
              className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.span
          className="relative z-10 text-lg"
          animate={{
            scale: isActive ? 1.2 : 1,
            color: isActive ? "#2563eb" : "#374151",
          }}
        >
          {item.icon}
        </motion.span>

        {/* Label */}
        {!collapsed && (
          <motion.span
            className="relative z-10 ml-4 font-semibold"
            animate={{
              scale: isActive ? 1.1 : 1,
              color: isActive ? "#2563eb" : "#374151",
            }}
          >
            {item.name}
          </motion.span>
        )}
      </Link>
    );
  })}
</nav>

      {/* Profile Section */}
      <div
        className={`flex flex-col items-center py-4 cursor-pointer rounded-4xl
          hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300
          ${collapsed ? "justify-center" : ""}
        `}
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
          <Link
            to="/auth"
            className={`${collapsed ? "" : "ml-6 flex items-center"}`}
          >
            <FaSignOutAlt />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Link>
        </button>
      </div>
    </div>
  );
}







