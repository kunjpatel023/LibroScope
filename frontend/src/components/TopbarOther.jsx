import { FaMoon, FaUser, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function TopbarOther({ username }) {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 shadow">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
          S
        </div>
        <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          SmartShelf
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <FaMoon
          className="text-gray-600 dark:text-yellow-400 text-lg cursor-pointer"
          onClick={toggleTheme}
        />
        <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-3 py-1 rounded-full text-white">
          <FaUser />
          <span>{username}</span>
        </div>
        <Link
          to="/dashboard"
          className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
