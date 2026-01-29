"use client";

import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const calls = [
    {
        id: 1,
        number: "+1 (555) 345-6789",
        time: "2025-12-16 · 09:42 AM",
        status: "AI Resolved",
        issue: "Screen",
        duration: "4:32",
        outcome: "Quote Provided",
        action: "Received",
        badge: "bg-green-600/20 text-green-400",
    },
    {
        id: 2,
        number: "+1 (555) 876-4321",
        time: "2025-12-16 · 10:10 AM",
        status: "Warm Transfer",
        issue: "Software",
        duration: "5:23",
        outcome: "Escalated",
        action: "Missed",
        badge: "bg-yellow-600/20 text-yellow-400",
    },
    {
        id: 3,
        number: "+1 (555) 222-9999",
        time: "2025-12-16 · 11:05 AM",
        status: "Dropped",
        issue: "Battery",
        duration: "2:15",
        outcome: "No Response",
        action: "Dropped",
        badge: "bg-red-600/20 text-red-400",
    },
    {
        id: 4,
        number: "+1 (555) 111-7777",
        time: "2025-12-16 · 12:40 PM",
        status: "AI Resolved",
        issue: "Screen",
        duration: "6:01",
        outcome: "Quote Provided",
        action: "Received",
        badge: "bg-green-600/20 text-green-400",
    },
    {
        id: 5,
        number: "+1 (555) 999-3333",
        time: "2025-12-16 · 01:20 PM",
        status: "Follow Up",
        issue: "Software",
        duration: "3:45",
        outcome: "Pending",
        action: "Missed",
        badge: "bg-yellow-600/20 text-yellow-400",
    },
];

export default function Page() {
    const [active, setActive] = useState(calls[0]);

    return (
        <div className="text-white">

            {/* Top Bar */}
            <div className="flex flex-col md:flex-row gap-3 mb-6 w-full">

                {/* Search */}
                <input
                    placeholder="Search by phone number, issue type..."
                    className="w-full md:flex-1 bg-[#0b1437] rounded-xl px-4 py-2.5 outline-none text-sm"
                />

                {/* Type */}
                <div className="relative w-full md:w-[160px]">
                    <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <select className="w-full bg-[#0b1437] rounded-xl px-4 py-2.5 pr-8 appearance-none text-sm">
                        <option>All Type</option>
                    </select>
                </div>

                {/* Issues */}
                <div className="relative w-full md:w-[160px]">
                    <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <select className="w-full bg-[#0b1437] rounded-xl px-4 py-2.5 pr-8 appearance-none text-sm">
                        <option>All Issues</option>
                    </select>
                </div>

                {/* Date */}
                <div className="relative w-full md:w-[140px]">
                    <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <select className="w-full bg-[#0b1437] rounded-xl px-4 py-2.5 pr-8 appearance-none text-sm">
                        <option>Today</option>
                    </select>
                </div>

            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Call List */}
                <div className="bg-[#0b1437] rounded-2xl overflow-y-auto">

                    <h2 className="text-lg p-4 border-b border-white/10">
                        Call List
                    </h2>

                    {calls.map((c) => (
                        <div
                            key={c.id}
                            onClick={() => setActive(c)}
                            className="p-4 border-b border-white/10 hover:bg-[#0f1a44] cursor-pointer"
                        >
                            <div className="flex justify-between items-center">

                                <div className="flex gap-3">
                                    <FiPhoneCall className="bg-gradient-to-b from-blue-500 to-cyan-400 w-8 h-8 p-2 rounded-lg" />

                                    <div>
                                        <p className="text-sm sm:text-base">{c.number}</p>
                                        <p className="text-xs opacity-60">{c.time}</p>
                                    </div>
                                </div>

                                <span className={`text-xs px-3 py-1 rounded-full ${c.badge}`}>
                                    {c.action}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs opacity-70 mt-2">
                                <span className="flex gap-1"> <span><img src="/time.png" alt="" /></span> 5 min ago</span>
                                <span className="flex gap-1"><span><img src="/right.png" alt="" /></span>{c.outcome}</span>
                                <span className="text-blue-400 bg-blue-400/10 px-2 rounded">
                                    {c.issue}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call Details */}
                <div className="bg-[#0b1437] rounded-2xl">

                    <h2 className="text-lg p-4 border-b border-white/10">
                        Call Details
                    </h2>

                    <div className="grid grid-cols-2 p-4 gap-4 text-sm">
                        <Info label="Phone" value={active.number} />
                        <Info label="Duration" value={active.duration} />
                        <Info label="Issue" value={active.issue} />
                        <Info label="Outcome" value={active.outcome} />
                    </div>
                    <div className="m-4 space-y-3">
                        <div className="space-y-2">
                            <p className="text-gray-400 text-sm">Call Type</p>
                            <span className="px-4 py-2 rounded-xl bg-green-600/30 text-green-500">AI Resolved</span>
                        </div>
                        <div className="mt-5">
                            <p className="text-gray-400 text-sm">Outcome</p>
                            <p>Quote provided</p>
                        </div>
                    </div>

                    <button className="mx-auto mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-purple-300 px-6 py-3 rounded-xl w-full max-w-sm">
                        <img src="/pose.png" alt="" className="w-5 h-5" />
                        <span className="text-sm md:text-base">Play Audio Recording</span>
                    </button>


                    <div>
                        <div className="flex items-center gap-1 m-4">
                            <img src="/boo.png" alt="" />
                            <h3>Conversation Transcript</h3>
                        </div>
                        <div className="m-4 bg-[#0e1842] p-4 rounded-xl space-y-3 text-sm">
                            <p className="text-green-400">AI Assistant</p>
                            <p>Thank you for calling UBreakiFix!</p>

                            <p className="text-blue-400">Customer</p>
                            <p>My iPhone 13 screen is cracked.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Info = ({ label, value }) => (
    <div>
        <p className="opacity-50">{label}</p>
        <p>{value}</p>
    </div>
);
