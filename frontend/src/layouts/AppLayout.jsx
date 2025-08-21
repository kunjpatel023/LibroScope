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
      {/* <div className="flex-1 overflow-y-auto pl-15 p-4 bg-[#e1e2f7]"> */}
      <div className="flex-1 overflow-y-auto m-5 pt-6 md:pt-6 lg:pt-0 bg-[#f0efe9]">

        <Outlet />
      </div>
    </div>
  );
}










// import { Outlet, useLocation } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import { useState, useEffect } from "react";

// export default function AppLayout() {
//   const location = useLocation();
//   const [collapsed, setCollapsed] = useState(false);

//   // useEffect(() => {
//   //   if (location.pathname === "/dashboard") {
//   //     setCollapsed(false); // Expand for dashboard
//   //   } else {
//   //     setCollapsed(true); // Collapse for all other pages
//   //   }
//   // }, [location.pathname]);

//   return (
//     // Prevent outer scrollbar, make whole layout take full height
//     <div className="flex h-screen overflow-hidden bg-[#f0efe9] ">
//       <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

//       {/* Main content area - only this scrolls */}
//       <div className="flex-1 overflow-y-auto m-5 bg-[#f0efe9]">

//         <Outlet />
//       </div>
//     </div>
//   );
// }

