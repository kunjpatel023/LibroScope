import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export default function AppLayout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  // useEffect(() => {
  //   if (location.pathname === "/dashboard") {
  //     setCollapsed(false); // Expand for dashboard
  //   } else {
  //     setCollapsed(true); // Collapse for all other pages
  //   }
  // }, [location.pathname]);

  return (
    // Prevent outer scrollbar, make whole layout take full height
    <div className="flex h-screen overflow-hidden bg-[#f0efe9] ">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main content area - only this scrolls */}
      <div className="flex-1 overflow-y-auto m-5 bg-[#f0efe9]">

        <Outlet />
      </div>
    </div>
  );
}




// import { Outlet, useLocation } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function AppLayout() {
//   const location = useLocation();
//   const [collapsed, setCollapsed] = useState(false);

//   useEffect(() => {
//     if (location.pathname === "/dashboard") {
//       setCollapsed(false); // Expand for dashboard
//     } else {
//       setCollapsed(true); // Collapse for all other pages
//     }
//   }, [location.pathname]);

//   return (
//     <div className="flex h-screen overflow-hidden bg-[#f0efe9]">
//       {/* Sidebar always visible */}
//       <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

//       {/* Main content area with animation */}
//       <div className="flex-1 overflow-y-auto p-4 bg-[#f0efe9]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={location.pathname} // 🔑 ensures re-animation on route change
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -40 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="h-full w-full"
//           >
//             <Outlet />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
