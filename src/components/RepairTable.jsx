import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function RepairTable() {
  const data = [
    { time: "09:00" },
    { time: "10:00" },
    { time: "11:00" },
    { time: "12:00" },
    { time: "02:00" },
    { time: "03:00" },
  ];

  return (
    <div className="mt-4 flex items-center justify-center ">
      <div className="w-full max-w-5xl bg-[#0b1739] rounded-xl shadow-lg overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-xs text-left text-gray-200">
            <thead className="bg-[#0e1e4a] text-gray-300">
              <tr>
                {[
                  "Client Name",
                  "Client Phone",
                  "Client mail",
                  "Device",
                  "Repair Type",
                  "Date",
                  "Slot no",
                  "Start Time",
                ].map((h) => (
                  <th key={h} className="px-3 py-2 font-medium whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[#1c2b5a] hover:bg-[#0f2354] transition"
                >
                  <td className="px-3 py-2 text-blue-400 font-medium">Jane.D</td>
                  <td className="px-3 py-2">01960685765</td>
                  <td className="px-3 py-2">admin@gmail.com</td>
                  <td className="px-3 py-2">Apple/Iphone 13pro</td>
                  <td className="px-3 py-2">Screen</td>
                  <td className="px-3 py-2">02/06/2026</td>
                  <td className="px-3 py-2">1</td>
                  <td className="px-3 py-2">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 py-4 bg-[#0b1739]">
          <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white">
            <FaChevronLeft /> Previous
          </button>

          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`w-8 h-8 rounded-md text-sm font-medium ${
                n === 2
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-[#0e1e4a]"
              }`}
            >
              {n}
            </button>
          ))}

          <span className="text-gray-400 px-2">...</span>

          <button className="w-8 h-8 rounded-md text-gray-300 hover:bg-[#0e1e4a]">
            11
          </button>

          <button className="flex items-center gap-1 px-3 py-2 text-sm text-blue-400 hover:text-blue-300">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
