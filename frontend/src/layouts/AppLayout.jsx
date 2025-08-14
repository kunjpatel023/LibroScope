import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export default function AppLayout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setCollapsed(false); // Expand for dashboard
    } else {
      setCollapsed(true); // Collapse for all other pages
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      {/* Main content area - Scroll only here */}
      <div className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}
