// components/RepairTable.js
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  { clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "09:00" },
  { clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "10:00" },
  { clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "11:00" },
  { clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "12:00" },
  { clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "02:00" },
  { clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "03:00" },
  // আরও ডাটা যোগ করতে পারো
];

const RepairTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="p-4">
      {/* Horizontally scrollable wrapper for mobile */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full text-white bg-gray-800">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-4 py-2 text-left whitespace-nowrap">Client Name</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Client Phone</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Client Mail</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Device</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Repair Type</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Date</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Slot no</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Start Time</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="px-4 py-2 whitespace-nowrap">{row.clientName}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.clientPhone}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.clientMail}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.device}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.repairType}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.date}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.slotNo}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.startTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          <FaChevronLeft /> Previous
        </button>

        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Next <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RepairTable;
