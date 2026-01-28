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
            <div className="flex gap-4 mb-6 items-center">
                <input
                    placeholder="Search by phone number, issue type..."
                    className="flex-1 bg-[#0b1437] rounded-xl px-4 py-2 outline-none"
                />

                {/* All Type */}
                <div className="relative">
                    <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    <select className="bg-[#0b1437] rounded-xl pl-4 pr-6 py-2 outline-none appearance-none">
                        <option>All Type</option>
                        <option>Inbound</option>
                        <option>Outbound</option>
                    </select>
                </div>

                {/* All Issues */}
                <div className="relative">
                    <MdArrowDropDown className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400" />

                    <select className="bg-[#0b1437] rounded-xl pl-4 pr-8 py-2 outline-none appearance-none">
                        <option>All Issues</option>
                        <option>Screen</option>
                        <option>Battery</option>
                        <option>Software</option>
                    </select>
                </div>

                {/* Today */}
                <div>

                    <button className="bg-[#0b1437] rounded-xl pl-4 pr-6 py-2">
                        Today
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Call List */}
                <div className="col-span-1 bg-[#0b1437] rounded-2xl">

                    <h2 className="text-lg p-4 border-b border-white/10">
                        Call List
                    </h2>

                    {calls.map((c) => (
                        <div
                            key={c.id}
                            onClick={() => setActive(c)}
                            className={`p-4 cursor-pointer border-b border-white/10 transition ${active.id === c.id
                                ? ""
                                : "hover:bg-[#0f1a44]"
                                }`}
                        >
                            {/* Top Row */}
                            <div className="flex justify-between items-center">

                                {/* Left */}
                                <div className="flex items-center gap-3">
                                    <FiPhoneCall className="mt-1 bg-gradient-to-b rounded-lg from-[#2B7FFF]  to-[#00B8DB] w-8 h-8 p-2 text-white" />

                                    <div>
                                        <p className="font-medium">{c.number}</p>
                                        <p className="text-xs opacity-60 mt-1">
                                            {c.time}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Status */}
                                <span className={`text-xs px-3 py-1 rounded-full ${c.badge}`}>
                                    {c.action}
                                </span>
                            </div>

                            {/* Bottom Row */}
                            <div className="flex gap-3 text-xs opacity-70">
                                <span className="flex items-center gap-1"> <img src="/time.png" alt="" /> 5 min ago</span>
                                <span className="flex items-center gap-1"> <img src="/correctpng.png" alt="" /> {c.outcome}</span>
                                <span className="text-[#51A2FF] px-2 py-1 rounded-sm bg-[#33475f]">· {c.issue}</span>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Call Details */}
                <div className="col-span-1 bg-[#0b1437] rounded-2xl p-6">
                    <h2 className="text-lg mb-6">Call Details</h2>

                    <div className="grid grid-cols-2 gap-6 text-sm">
                        <div>
                            <p className="opacity-50">Phone Number</p>
                            <p>{active.number}</p>
                        </div>

                        <div>
                            <p className="opacity-50">Duration</p>
                            <p>{active.duration}</p>
                        </div>

                        <div>
                            <p className="opacity-50">Issue Type</p>
                            <p>{active.issue}</p>
                        </div>

                        <div>
                            <p className="opacity-50">Outcome</p>
                            <p>{active.outcome}</p>
                        </div>
                    </div>

                    <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-xl">
                        ▶ Play Audio Recording
                    </button>

                    <div className="mt-6 bg-[#050b24] p-4 rounded-xl text-sm">
                        <p className="text-green-400 mb-2">AI Assistant:</p>
                        <p>
                            Thank you for calling UBreakiFix! How can I help you today?
                        </p>

                        <p className="text-blue-400 mt-4 mb-2">Customer:</p>
                        <p>Hi, my iPhone 13 screen is cracked.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
