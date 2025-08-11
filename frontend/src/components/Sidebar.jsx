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
