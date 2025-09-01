import React from "react";
import { useParams } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Ongtong Khaosoi x Ari",
    rating: 4.8,
    reviews: 247,
    categories: ["อาหารไทยภาคเหนือ", "ข้าวซอย"],
    img: "/img/h4.jpg",
    location: "อาหารเหนือจากเชียงใหม่",
    tags: ["ข้าวซอย", "น้ำพริกหนุ่ม", "ขนมจีนน้ำเงี้ยว"],
  },
  {
    id: 2,
    name: "ส้มตำเด้อ (ทองหล่อ)",
    rating: 4.6,
    reviews: 189,
    categories: ["อาหารภาคอีสาน"],
    img: "/img/h5.jpg",
    location: "ปากซอยทองหล่อ 17",
    tags: ["ตำปลาดุกฟู", "ตำซั่วสกลนคร", "หมูปิ้งกะทิสด"],
  },
  {
    id: 3,
    name: "Phed Phed Cafe",
    rating: 4.9,
    reviews: 312,
    categories: ["อาหารภาคอีสาน"],
    img: "/img/h6.jpg",
    location: "เซ็นทรัลลาดพร้าว",
    tags: ["ตำปลาร้ากุ้งสด กุ้งลวก", "ตำข้าวโพดไข่เค็ม", "ยำขนมจีนหมูยอปลาทู"],
  },
  {
    id: 4,
    name: "จันทรโภชนา",
    rating: 4.5,
    reviews: 156,
    categories: ["อาหารตะวันออก"],
    img: "/img/h7.jpg",
    location: "จันทบุรี",
    tags: ["ยำมังคุด รสเด็ด", "ปลาต้มระกำใส่กระวาน"],
  },
  {
    id: 5,
    name: "Din Din Thai Cuisine",
    rating: 4.4,
    reviews: 198,
    categories: ["อาหารใต้"],
    img: "/img/h8.jpg",
    location: "ปากเกร็ด นนทบุรี",
    tags: ["ตับกระเทียม", "ใบเหลียงต้มกะทิ"],
  },
  {
    id: 6,
    name: "กรุงเก่า เตี๋ยวเรือ ริมคลองมะขามเรียง",
    rating: 4.7,
    reviews: 203,
    categories: ["อาหารภาคกลาง"],
    img: "/img/h9.jpg",
    location: "พระนครศรีอยุธย",
    tags: ["น่องไก่ทอด กรุงเก่า", "สะโพกไก่ทอด กรุงเก่า ", "ปีกไก่ทอด กรุงเก่า "],
  },
];

export default function RestaurantDetail() {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <div className="text-center mt-10 text-red-600 text-xl">ไม่พบร้านอาหาร</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={restaurant.img}
        alt={restaurant.name}
        className="w-full h-80 object-cover rounded-xl shadow-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
      <p className="text-gray-600 mb-4">{restaurant.location}</p>

      <div className="flex gap-4 mb-4">
        <span className="text-yellow-500 font-semibold">⭐ {restaurant.rating}</span>
        <span className="text-gray-500">{restaurant.reviews} รีวิว</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {restaurant.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-4 bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
      >
        ← กลับ
      </button>
    </div>
  );
}
