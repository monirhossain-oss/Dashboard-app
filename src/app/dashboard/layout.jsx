import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navber";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 bg-[#111B3C]">
        {/* Navbar */}
        <Navbar />

        {/* Dynamic content */}
        <main className="p-6 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}
