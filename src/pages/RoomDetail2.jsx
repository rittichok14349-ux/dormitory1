import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RoomDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const dormss = location.state?.dorm; // ดึงข้อมูลจาก state

  if (!dormss) {
    return (
      <div className="container mx-auto py-10 text-center">
        <p className="text-lg text-gray-600">ไม่พบข้อมูลหอพัก</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          🔙 กลับ
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20">
      {/* ปุ่มย้อนกลับ */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
      >
        🔙 กลับ
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* รูปภาพหลัก */}
        <div>
          <img
            src={dormss.img}
            alt={dormss.name}
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* รายละเอียด */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{dormss.name}</h1>
          <p className="text-gray-600 mb-4">{dormss.location}</p>

          {/* ราคา */}
          <div className="mb-4">
            <p className="text-xl font-semibold text-blue-600">
              {dormss.monthlyPrice} <span className="text-gray-500">บาท/เดือน</span>
            </p>
            <p className="text-gray-600 text-lg">
              {dormss.dailyPrice} บาท/วัน
            </p>
          </div>

          {/* ป้ายเพศ */}
          <div className="mb-4">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm">
              สำหรับ: {dormss.gender}
            </span>
          </div>

          {/* วันที่ประกาศ */}
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              📅 ประกาศเมื่อ: {dormss.updatedAt}
            </p>
          </div>

          {/* ปุ่มจอง/ติดต่อ */}
          <div className="flex gap-4">
            <button className="flex-1 bg-gradient-to-r from-cyan-500 to-green-400 text-white py-3 rounded-lg hover:opacity-90">
              📞 ติดต่อเจ้าของหอพัก
            </button>
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
              ⭐ เพิ่มในรายการโปรด
            </button>
          </div>
        </div>
      </div>

      {/* รายละเอียดเพิ่มเติม */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4">รายละเอียดเพิ่มเติม</h2>
        <p className="text-gray-700 leading-relaxed">
          ที่พักนี้ตั้งอยู่ในทำเลที่สะดวกสบาย ใกล้แหล่งชุมชนและการเดินทางสาธารณะ
          มีสิ่งอำนวยความสะดวกครบครัน เช่น แอร์ อินเทอร์เน็ต Wi-Fi
          และระบบรักษาความปลอดภัย เหมาะสำหรับนักศึกษาและคนทำงานที่ต้องการความเงียบสงบ
          และปลอดภัย
        </p>
      </div>
    </div>
  );
}
