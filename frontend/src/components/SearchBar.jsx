// import React from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";

// export default function SearchBar({ searchTerm, setSearchTerm }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="relative w-full max-w-sm"
//     >
//       <Search
//         className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500"
//         size={18}
//       />
//       <input
//         type="text"
//         placeholder="Search books..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//       />
//     </motion.div>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";

// export default function SearchBar({ searchTerm, setSearchTerm }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="relative w-full max-w-sm "
//     >
//       <Search
//         className="absolute left-3 top-2.5 text-stone-400 dark:text-gray-500 "
//         size={18}
//       />
//       <input
//         type="text"
//         placeholder="Search books..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full pl-10 pr-4 py-2 
//           border border-gray-300 dark:border-gray-600
//           bg-transparent
//           text-gray-900 dark:text-gray-100 
//           placeholder-gray-400 dark:placeholder-gray-500
//           rounded-lg shadow-sm
//           focus:outline-none focus:ring-2 focus:ring-blue-400 
//           transition-all"
//       />
//     </motion.div>
//   );
// }
