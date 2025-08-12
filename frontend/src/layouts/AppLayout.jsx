import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopbarOther from "../components/TopbarOther";

export default function AppLayout() {
  const location = useLocation();
  const username = "John Doe";

  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="flex min-h-screen">
      {isDashboard ? (
        <Outlet />
      ) : (
        <div className="flex flex-col w-full">
          <TopbarOther username={username} />
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}
