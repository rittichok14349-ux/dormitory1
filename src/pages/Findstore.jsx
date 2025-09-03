import React, { useState } from "react";
import dorms from "../services/dormn"; // 👉 ใช้ข้อมูลใหม่ที่แยกเป็น object

export default function Findstore() {
  const [filter, setFilter] = useState("ที่พักรายวัน");

  const filters = ["ที่พักรายวัน", "ที่พัก 3 เดือน", "ที่พัก 6 เดือน", "ที่พักรายปี"];

  return (
    <div className="container mx-auto py-10">
      {/* 🔹 หัวข้อ */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">อพาร์ทเม้นท์{filter}</h2>
        <a href="#" className="text-blue-500 hover:underline">
          ดู{filter}ทั้งหมด →
        </a>
      </div>

      {/* 🔹 ปุ่มเลือก Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === item
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* 🔹 การ์ดหอพัก */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dorms[filter]?.map((dorm) => (
          <div
            key={dorm.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition"
          >
            <div className="relative">
              <img
                src={dorm.img}
                alt={dorm.name}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Exclusive
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg truncate">{dorm.name}</h3>
              <p className="text-sm text-gray-500 truncate">{dorm.location}</p>
              <p className="text-blue-600 font-bold text-sm mt-1">
                {dorm.monthlyPrice} บาท/เดือน
              </p>
              {dorm.dailyPrice && (
                <p className="text-gray-600 text-sm">{dorm.dailyPrice} บาท/วัน</p>
              )}
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                <span>📅</span>
                <span>เลื่อนประกาศ : {dorm.updatedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
