"use client";

import { useState } from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const cardData = [
    { title: "Calls Today", live: 234, growth: "+12%", icon: "/icon1.png", bg: "linear-gradient(135deg, #2B7FFF 0%, #00B8DB 100%)" },
    { title: "New Users", live: 120, growth: "+8%", icon: "/icon2.png", bg: "linear-gradient(135deg, #FF7F50 0%, #FFB347 100%)" },
    { title: "Revenue", live: 540, growth: "+20%", icon: "/icon3.png", bg: "linear-gradient(135deg, #8A2BE2 0%, #DA70D6 100%)" },
    { title: "Appointments", live: 75, growth: "+5%", icon: "/icon4.png", bg: "linear-gradient(135deg, #32CD32 0%, #7CFC00 100%)" },
    { title: "Messages", live: 98, growth: "+15%", icon: "/icon5.png", bg: "linear-gradient(135deg, #FFA500 0%, #FFD700 100%)" },
    { title: "Feedbacks", live: 42, growth: "+3%", icon: "/icon6x.png", bg: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)" },
];

const dataMap = {
    "This Week": [
        { day: "Mon", calls: 45 },
        { day: "Tue", calls: 60 },
        { day: "Wed", calls: 58 },
        { day: "Thu", calls: 70 },
        { day: "Fri", calls: 85 },
        { day: "Sat", calls: 95 },
        { day: "Sun", calls: 55 },
    ],
    "This Month": [
        { day: "Week 1", calls: 180 },
        { day: "Week 2", calls: 200 },
        { day: "Week 3", calls: 220 },
        { day: "Week 4", calls: 240 },
    ],
    "This Year": [
        { day: "Jan", calls: 700 },
        { day: "Feb", calls: 850 },
        { day: "Mar", calls: 900 },
        { day: "Apr", calls: 950 },
        { day: "May", calls: 1000 },
        { day: "Jun", calls: 1100 },
        { day: "Jul", calls: 1200 },
        { day: "Aug", calls: 1250 },
        { day: "Sep", calls: 1300 },
        { day: "Oct", calls: 1350 },
        { day: "Nov", calls: 1400 },
        { day: "Dec", calls: 1500 },
    ],
};

const colorsMap = {
    "This Week": "#2B7FFF",
    "This Month": "#FF7F50",
    "This Year": "#32CD32",
};

const recentActivity = [
    { id: 1, status: "green", message: "AI booked appointment for iPhone 13 screen repair", time: "2 min ago" },
    { id: 2, status: "orange", message: "Warm transfer to technician - Software issue", time: "5 min ago" },
    { id: 3, status: "green", message: "Quote provided for iPad battery replacement", time: "8 min ago" },
    { id: 4, status: "red", message: "Call dropped after 12 seconds", time: "15 min ago" },
];

const topRequests = [
    { id: 1, name: "Screen Repair", count: 156 },
    { id: 2, name: "Battery Replacement", count: 89 },
    { id: 3, name: "Back Glass Repair", count: 67 },
    { id: 4, name: "Software Issues", count: 45 },
];

const statusColors = {
    green: "bg-green-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
};

export default function Dashboard() {
    const [timeframe, setTimeframe] = useState("This Week");
    const maxCount = Math.max(...topRequests.map(req => req.count));

    return (
        <div className="bg-[#111B3C]">
            {/* Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                {cardData.map((card, idx) => (
                    <div
                        key={idx}
                        className="relative p-4 rounded-xl border border-[#2B7FFF33] bg-[#0F172B80] flex items-center justify-between"
                    >
                        <div className="flex flex-col justify-center gap-2">
                            <span className="text-sm text-gray-400">{card.title}</span>
                            <span className="text-xl font-bold text-white">{card.live}</span>
                            <span className="text-sm text-green-400">{card.growth}</span>
                        </div>
                        <div
                            className="w-[40px] h-[40px] p-2 rounded-xl flex items-center justify-center"
                            style={{ background: card.bg }}
                        >
                            <img
                                src={card.icon}
                                alt={card.title + " icon"}
                                className="w-8 h-8 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Call Trends */}
            <div className="bg-[#0F172B] p-6 rounded-[16px] border border-[#2B7FFF33] w-full max-w-[1036px] mb-8">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-white font-semibold text-lg">
                            Call Trends - {timeframe}
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Total: {dataMap[timeframe].reduce((acc, curr) => acc + curr.calls, 0)} calls
                        </p>
                    </div>
                    <select
                        className="bg-[#111B3C] text-white px-3 py-1 rounded-xl border border-gray-600"
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                    >
                        <option>This Week</option>
                        <option>This Month</option>
                        <option>This Year</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                    <AreaChart data={dataMap[timeframe]}>
                        <defs>
                            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={colorsMap[timeframe]} stopOpacity={0.5} />
                                <stop offset="100%" stopColor={colorsMap[timeframe]} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} horizontal={false} />
                        <XAxis dataKey="day" tick={{ fill: "#A0AEC0", fontSize: 12 }} />
                        <YAxis tick={{ fill: "#A0AEC0", fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: "#0F172B", border: "none", borderRadius: "8px", color: "#fff" }} />
                        <Area
                            type="monotone"
                            dataKey="calls"
                            stroke={colorsMap[timeframe]}
                            strokeWidth={3}
                            fill="url(#areaGradient)"
                            dot={{ r: 4, fill: colorsMap[timeframe] }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Recent Activity & Top Requests */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0F172B] p-6 rounded-xl border border-[#2B7FFF33]">
                    <h2 className="text-white font-semibold text-lg mb-4">Recent Activity</h2>
                    <div className="flex flex-col gap-3">
                        {recentActivity.map(act => (
                            <div key={act.id} className="flex items-start gap-3 bg-[#151c35] p-3 rounded-md">
                                <span className={`w-3 h-3 mt-1 rounded-full ${statusColors[act.status]}`}></span>
                                <div>
                                    <p className="text-gray-300 text-sm">{act.message}</p>
                                    <span className="text-gray-500 text-xs">{act.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#0F172B] p-6 rounded-xl border border-[#2B7FFF33]">
                    <h2 className="text-white font-semibold text-lg mb-4">Top Repair Requests</h2>
                    <div className="flex flex-col gap-4">
                        {topRequests.map(req => {
                            const percentage = (req.count / maxCount) * 100;
                            return (
                                <div key={req.id} className="flex flex-col gap-1">
                                    <div className="flex justify-between text-gray-300 text-sm">
                                        <span>{req.name}</span>
                                        <span>{req.count} requests</span>
                                    </div>
                                    <div className="w-full h-2 bg-[#111B3C] rounded-full">
                                        <div
                                            className="h-2 rounded-full bg-blue-500"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
