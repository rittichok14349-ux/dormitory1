import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RoomDetail() {
  const { state } = useLocation();
  const dorm = state?.dorm;
  const navigate = useNavigate();

  if (!dorm) {
    return (
      <div className="p-6">
        <p>ไม่พบข้อมูลหอพัก</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-500 underline">
          ⬅ กลับ
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-300 transition"
      >
        ⬅ กลับไปหน้าหอพักยอดนิยม
      </button>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <img
          src={dorm.img}
          alt={dorm.name}
          className="w-full h-64 object-cover rounded-xl"
        />
        <h2 className="text-3xl font-bold mt-4">{dorm.name}</h2>
        <p className="text-gray-500">{dorm.distance}</p>
        <p className="mt-2">
          ⭐ {dorm.rating} ({dorm.reviews} รีวิว)
        </p>
        <p className="mt-1 text-sm text-gray-600">ประเภท: {dorm.gender}</p>
        <p className="mt-2 text-xl font-semibold text-green-600">
          ฿{dorm.price.toLocaleString()} /เดือน
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {dorm.features.map((f, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
