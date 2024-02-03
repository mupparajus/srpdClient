import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const LayoutAuth = () => {
  return (
    <>
      <div className="min-h-screen flex">
        <nav className="flex-none.">
          <Sidebar />
        </nav>

        <main className="flex-1 min-w-0 overflow-auto ...">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default LayoutAuth;
