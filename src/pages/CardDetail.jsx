import React from "react";
import { useNavigate } from "react-router-dom";
import dorms from "../services/dorms";

export default function PopularDorms() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10">
      {/* หัวข้อ */}
      <h2 className="text-center text-3xl font-bold mb-2">อพาร์ทเม้นท์รายวัน</h2>
      <p className="text-center text-gray-500 mb-8">
        รวมอพาร์ทเม้นท์คุณภาพดี พร้อมสิ่งอำนวยความสะดวกครบครัน
      </p>

      {/* การ์ดหอพัก */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dorms.map((dorm) => (
          <div
            key={dorm.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition relative"
          >
            {/* ป้าย Exclusive */}
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Exclusive
            </div>

            {/* รูปภาพ */}
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
                onClick={() => navigate("/roomdetail", { state: { dorm } })}
                className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-green-400 text-white px-4 py-2 rounded-md hover:opacity-90"
              >
                ดูรายละเอียด
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
