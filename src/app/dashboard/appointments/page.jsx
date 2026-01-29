"use client";

import RepairTable from "@/components/RepairTable";
import React, { useState } from "react";

const cardData = [
  {
    title: "Total Booked",
    live: 234,
    img: "/booed.png",
    growth: "+8 this week",
  },
  {
    title: "AI Booked",
    live: 120,
    img: "/Ai.png",
    growth: "82% of total",
  },
  {
    title: "Pending",
    live: 540,
    img: "/pending.png",
    growth: "Awaiting confirmation",
  },
];

export default function Page() {
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!link) return;

    await navigator.clipboard.writeText(link);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="relative p-4 rounded-xl border border-[#2B7FFF33] bg-[#0F172B80] flex items-center justify-between"
          >
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2">
                <img src={card.img} alt="" className="w-5 h-5 object-contain" />
                <span className="text-sm text-gray-400">{card.title}</span>
              </div>

              <span className="text-xl font-bold text-white">
                {card.live}
              </span>

              <span className="text-sm text-green-400">
                {card.growth}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Link Section */}
      <div className="w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#1A1A2E] to-[#16213E] p-[25px]">

        <h2 className="text-white mb-4">
          Booking Link
        </h2>

        <div className="flex flex-col md:flex-row gap-4">

          {/* Input */}
          <input
            type="search"
            placeholder="Paste booking link..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full md:flex-1 h-[40px] rounded-[14px] bg-[#0A0A0F80] px-4 text-sm text-white outline-none border-t border-[#00FF8833]"
          />

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            disabled={!link}
            className="h-[40px] px-4 rounded-[12px] bg-gradient-to-b from-[#152252] to-[#111B3C] text-white text-sm flex items-center justify-center gap-2 shadow-[inset_0px_1px_18px_2px_#D2EAFF] whitespace-nowrap disabled:opacity-40"
          >
            <img src="/copy.png" alt="" className="w-4 h-4" />
            {copied ? "Copied!" : "Copy Link"}
          </button>

        </div>
      </div>
      <div>
        {/* <RepairTable /> */}
      </div>
    </div>
  );
}
