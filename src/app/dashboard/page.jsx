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
    {
        title: "Calls Today",
        live: 234,
        growth: "+12%",
        icon: "/icon1.png",
        bg: "linear-gradient(135deg, #2B7FFF 0%, #00B8DB 100%)",
    },
    {
        title: "New Users",
        live: 120,
        growth: "+8%",
        icon: "/icon2.png",
        bg: "linear-gradient(135deg, #FF7F50 0%, #FFB347 100%)",
    },
    {
        title: "Revenue",
        live: 540,
        growth: "+20%",
        icon: "/icon3.png",
        bg: "linear-gradient(135deg, #8A2BE2 0%, #DA70D6 100%)",
    },
    {
        title: "Appointments",
        live: 75,
        growth: "+5%",
        icon: "/icon4.png",
        bg: "linear-gradient(135deg, #32CD32 0%, #7CFC00 100%)",
    },
    {
        title: "Messages",
        live: 98,
        growth: "+15%",
        icon: "/icon5.png",
        bg: "linear-gradient(135deg, #FFA500 0%, #FFD700 100%)",
    },
    {
        title: "Feedbacks",
        live: 42,
        growth: "+3%",
        icon: "/icon6x.png",
        bg: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
    },
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

export default function Dashboard() {
    const [timeframe, setTimeframe] = useState("This Week");

    return (
        <div className="bg-[#111B3C]">
            {/* Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="relative p-4 rounded-xl border border-[#2B7FFF33] bg-[#0F172B80] flex items-center justify-between"
                    >
                        {/* Left Side */}
                        <div className="flex flex-col justify-center gap-2">
                            <span className="text-sm text-gray-400">{card.title}</span>
                            <span className="text-xl font-bold text-white">{card.live}</span>
                            <span className="text-sm text-green-400">{card.growth}</span>
                        </div>

                        {/* Right Side - Icon */}
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

            {/* Call Trends Area Chart */}
            <div className="bg-[#0F172B] p-6 rounded-[16px] border border-[#2B7FFF33] w-full max-w-[1036px]">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-white font-semibold text-lg">
                            Call Trends - {timeframe}
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Total: {dataMap[timeframe].reduce((acc, curr) => acc + curr.calls, 0)} calls
                        </p>
                    </div>
                    <div>
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
                </div>

                {/* Area Chart */}
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
                        <YAxis />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#0F172B",
                                border: "none",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                        />

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
        </div>
    );
}
