import React from "react";
const cardData = [
    { title: "Calls Today", live: 234, growth: "+12%", bg: "linear-gradient(135deg, #2B7FFF 0%, #00B8DB 100%)" },
    { title: "New Users", live: 120, growth: "+8%",bg: "linear-gradient(135deg, #FF7F50 0%, #FFB347 100%)" },
    { title: "Revenue", live: 540, growth: "+20%", bg: "linear-gradient(135deg, #8A2BE2 0%, #DA70D6 100%)" }
];

export default function Page() {
  return (
    <>
      <div>
        {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="relative p-4 rounded-xl border border-[#2B7FFF33] bg-[#0F172B80] flex items-center justify-between"
          >
            {/* Left Side - Info */}
            <div className="flex flex-col justify-center gap-2">
              <span className="text-sm text-gray-400">{card.title}</span>
              <span className="text-xl font-bold text-white">{card.live}</span>
              <span className="text-sm text-green-400">{card.growth}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <h2>Booking Link</h2>
      </div>
      </div>
    </>
  );
}

