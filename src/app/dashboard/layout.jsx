import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navber";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Dynamic content */}
        <main className="p-6 bg-gradient-to-br from-[#0c1531] via-[#1f2f63] to-[#0c1531] overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}
