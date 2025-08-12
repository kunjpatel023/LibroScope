import { FaSearch, FaTh, FaList, FaMoon, FaUser } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function TopbarDashboard({ view, setView, username, searchQuery, setSearchQuery }) {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex items-center bg-white dark:bg-gray-800 p-4 shadow rounded-lg gap-4 w-full">
      {/* Search bar */}
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-2 flex-1 min-w-[150px]">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search your library..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none w-full text-sm text-gray-700 dark:text-gray-200"
        />
      </div>

      {/* View toggle */}
      <div className="flex bg-gray-100 dark:bg-gray-700 rounded-full p-1">
        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded-full ${view === "grid"
              ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white"
              : "text-gray-500"
            }`}
        >
          <FaTh />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded-full ${view === "list"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "text-gray-500"
            }`}
        >
          <FaList />
        </button>
      </div>

      {/* Dark mode toggle */}
      <FaMoon
        className="text-gray-600 dark:text-yellow-400 text-lg cursor-pointer"
        onClick={toggleTheme}
      />

      {/* Username */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-3 py-1 rounded-full text-white whitespace-nowrap">
        <FaUser />
        <span className="hidden sm:inline">Welcome, {username}</span>
      </div>
    </div>
  );
}
