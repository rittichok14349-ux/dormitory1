import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dorms from "../services/dormss"; // ✅ ดึงข้อมูลหอพัก

export default function FindDorms() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");

  // ฟังก์ชันกรองข้อมูลหอพัก
  const filteredDorms = dorms.filter((dorm) => {
    const matchSearch = dorm.name.toLowerCase().includes(search.toLowerCase());
    const matchPrice =
      priceFilter === "all" ||
      (priceFilter === "low" && dorm.monthlyPriceValue < 5000) ||
      (priceFilter === "mid" &&
        dorm.monthlyPriceValue >= 5000 &&
        dorm.monthlyPriceValue <= 10000) ||
      (priceFilter === "high" && dorm.monthlyPriceValue > 10000);
    const matchGender =
      genderFilter === "all" ||
      dorm.gender.toLowerCase() === genderFilter.toLowerCase();
    return matchSearch && matchPrice && matchGender;
  });

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-6">ค้นหาหอพัก</h2>

      {/* 🔍 Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* ช่องค้นหา */}
        <input
          type="text"
          placeholder="🔍 พิมพ์ชื่อหอพัก..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* ฟิลเตอร์ราคา */}
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="all">ราคาทั้งหมด</option>
          <option value="low">ต่ำกว่า 5,000</option>
          <option value="mid">5,000 - 10,000</option>
          <option value="high">มากกว่า 10,000</option>
        </select>

        {/* ฟิลเตอร์เพศ */}
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="all">ทุกเพศ</option>
          <option value="ชาย">ชาย</option>
          <option value="หญิง">หญิง</option>
        </select>
      </div>

      {/* การ์ดหอพัก */}
      {filteredDorms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDorms.map((dorm) => (
            <div
              key={dorm.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition relative"
            >
              {/* ป้าย Exclusive */}
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Exclusive
              </div>

              <img
                src={dorm.img}
                alt={dorm.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">
                {/* ป้ายจดทะเบียน */}
                <div className="mb-2">
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                    ลงทะเบียนที่พักแล้ว
                  </span>
                </div>

                {/* ชื่อหอพัก */}
                <h3 className="text-lg font-bold">{dorm.name}</h3>
                <p className="text-sm text-gray-600 truncate">{dorm.location}</p>

                {/* ราคา */}
                <div className="mt-3">
                  <p className="text-gray-800 font-semibold">
                    {dorm.monthlyPrice} บาท/เดือน
                  </p>
                  <p className="text-gray-600 text-sm">{dorm.dailyPrice} บาท/วัน</p>
                </div>

                {/* วันที่ประกาศ */}
                <div className="flex items-center text-xs text-gray-500 mt-3">
                  <span className="material-icons text-base mr-1">event</span>
                  {dorm.updatedAt}
                </div>

                {/* ปุ่มดูรายละเอียด */}
                <button
                  onClick={() => navigate("/roomdetail2", { state: { dorm } })}
                  className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-green-400 text-white px-4 py-2 rounded-md hover:opacity-90"
                >
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          😢 ไม่พบหอพักที่ค้นหา
        </p>
      )}
    </div>
  );
}
