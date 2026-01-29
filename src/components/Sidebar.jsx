"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaHome,
    FaPhone,
    FaCalendarAlt,
    FaCog,
    FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard Overview", path: "/dashboard", icon: <FaHome /> },
        { name: "Call Logs", path: "/dashboard/calllogs", icon: <FaPhone /> },
        { name: "Appointments", path: "/dashboard/appointments", icon: <FaCalendarAlt /> },
        { name: "Settings", path: "/dashboard/settings", icon: <FaCog /> },
    ];

    return (
        <div className="h-screen bg-[#111B3C] flex flex-col justify-between p-3 md:p-4 border-r border-[#2a3e7b]">

            {/* Top Section */}
            <div>
                {/* Logo */}
                <div className="w-[48px] h-[48px] mx-auto bg-gradient-to-b from-[#00FF88] to-[#00D4FF] rounded-[14px] p-3 flex items-center justify-center mb-6 md:mb-8">
                    <img src="/Icon.png" alt="sidebar icon" className="w-full h-full object-contain" />
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col gap-3">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;

                        return (
                            <Link key={item.name} href={item.path} className="block">
                                <div
                                    className={`flex items-center gap-3 p-2 md:px-4 md:py-2 rounded-lg transition-all
                    ${isActive ? "text-white" : "text-white hover:bg-gray-700"}
                  `}
                                    style={
                                        isActive
                                            ? {
                                                border: "1px solid white",
                                                boxShadow: `
                            0px 3.71px 4.85px 0px #57B1FF27,
                            0px 10.27px 13.4px 0px #57B1FF38,
                            0px 24.72px 32.26px 0px #57B1FF30,
                            0px 42px 107px 0px #57B1FF57,
                            0px 1px 18px 2px #D2EAFF inset
                          `,
                                            }
                                            : {}
                                    }
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="hidden md:block text-sm">{item.name}</span>
                                </div>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Logout Button */}
            <div className="mt-6">
                <button
                    className="
                            w-full flex items-center gap-3 p-2 md:px-4 md:py-2 rounded-lg text-white transition-allhover:bord hover:border-white"
                    style={{
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `
                        0px 10.27px 13.4px 0px #57B1FF38,
                        0px 3.71px 4.85px 0px #57B1FF27,
                        0px 42px 107px 0px #57B1FF57,
                        0px 24.72px 32.26px 0px #57B1FF30,
                        0px 1px 18px 2px #D2EAFF inset`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    <span className="text-lg">
                        <FaSignOutAlt />
                    </span>
                    <span className="hidden text-red-500 md:block text-sm">Logout</span>
                </button>
            </div>

        </div>
    );
}
