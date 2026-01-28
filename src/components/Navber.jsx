"use client";

import { usePathname } from "next/navigation";
import { FaBell } from "react-icons/fa";

export default function Navbar({ user }) {
    const pathname = usePathname();

    const pathNameMap = {
        "/dashboard": "Dashboard Overview",
        "/dashboard/call-logs": "Call Logs",
        "/dashboard/appointments": "Appointments",
        "/dashboard/settings": "Settings",
    };

    const activeName = pathNameMap[pathname] || "Dashboard";

    // Decide which image to show
    const userImage = user?.image || '/b940caf9f3a52bcc9317c793ebc094db911b237b.jpg'; // always show default if no user

    return (
        <div className="p-3 border-b border-r-1 border-[#2a3e7b] bg-[#111B3C] flex items-center justify-between px-6 shadow-md">
            {/* Left side - active menu name */}
            <h1 className="font-semibold text-xl text-white">{activeName}</h1>

            {/* Right side - notifications + user image */}
            <div className="flex items-center gap-4">
                {/* Notification Icon */}
                <button className="relative text-white text-lg p-2 rounded hover:bg-gray-800">
                    <FaBell />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Image */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                        src={userImage} // always shows image
                        alt={user?.name || "User"}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
