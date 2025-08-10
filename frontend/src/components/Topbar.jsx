// import { FaSearch, FaTh, FaList, FaMoon, FaBell, FaUser } from "react-icons/fa";

// const Topbar = ({ view, setView }) => {
//   return (
//     <div className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
//       {/* Search Bar */}
//       <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-1/3">
//         <FaSearch className="text-gray-400 mr-2" />
//         <input
//           type="text"
//           placeholder="Search your library..."
//           className="bg-transparent outline-none w-full text-sm text-gray-700"
//         />
//       </div>

//       {/* Middle Icons */}
//       <div className="flex items-center gap-4">
//         <div className="flex bg-gray-100 rounded-full p-1">
//           <button
//             onClick={() => setView("grid")}
//             className={`p-2 rounded-full ${
//               view === "grid"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
//                 : "text-gray-500"
//             }`}
//           >
//             <FaTh />
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`p-2 rounded-full ${
//               view === "list"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
//                 : "text-gray-500"
//             }`}
//           >
//             <FaList />
//           </button>
//         </div>

//         <FaMoon className="text-gray-600 text-lg cursor-pointer" />

//         <div className="relative">
//           <FaBell className="text-gray-600 text-lg cursor-pointer" />
//           <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
//         </div>
//       </div>

//       {/* Profile */}
//       <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-white">
//         <FaUser />
//         <span>Welcome, User</span>
//       </div>
//     </div>
//   );
// };

// export default Topbar;
import { FaSearch, FaTh, FaList, FaMoon, FaBell, FaUser } from "react-icons/fa";

export default function Topbar({ view, setView }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-1/3">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search your library..."
          className="bg-transparent outline-none w-full text-sm text-gray-700"
        />
      </div>

      {/* Grid/List Toggle */}
      <div className="flex items-center gap-4">
        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-full ${
              view === "grid"
                ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600  text-white"
                : "text-gray-500"
            }`}
          >
            <FaTh />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-full ${
              view === "list"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "text-gray-500"
            }`}
          >
            <FaList />
          </button>
        </div>

        <FaMoon className="text-gray-600 text-lg cursor-pointer" />

        <div className="relative">
          <FaBell className="text-gray-600 text-lg cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
        </div>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600  px-3 py-1 rounded-full text-white">
        <FaUser />
        <span>Welcome, User</span>
      </div>
    </div>
  );
}
