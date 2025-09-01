import React from "react";
import { useNavigate } from "react-router-dom";
import dorms from "../services/dorms";

export default function PopularDorms() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-3xl font-bold mb-2">หอพักยอดนิยม</h2>
      <p className="text-center text-gray-500 mb-8">
        หอพักคุณภาพดีที่ได้รับความนิยมจากนักศึกษา พร้อมสิ่งอำนวยความสะดวกครบครัน
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dorms.map((dorm) => (
          <div
            key={dorm.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img src={dorm.img} alt={dorm.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1 text-sm text-yellow-500 font-semibold">
                  ⭐ {dorm.rating} <span className="text-gray-500">({dorm.reviews})</span>
                </div>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  {dorm.gender}
                </span>
              </div>
              <h3 className="text-lg font-bold">{dorm.name}</h3>
              <p className="text-sm text-gray-500">{dorm.distance}</p>
              <div className="flex items-center gap-2 mt-2 text-gray-600 text-xs">
                {dorm.features.slice(0, 3).map((f, i) => (
                  <span key={i}>• {f}</span>
                ))}
              </div>
              <p className="mt-2 text-lg font-bold text-blue-600">
                ฿{dorm.price.toLocaleString()} <span className="text-sm text-gray-500">/เดือน</span>
              </p>

              {/* ✅ เปลี่ยนจาก setSelected เป็น navigate */}
              <button
                onClick={() => navigate("/roomdetail", { state: { dorm } })}
                className="mt-2 bg-gradient-to-r from-cyan-500 to-green-400 text-white px-6 py-2 rounded-md hover:opacity-90"
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
