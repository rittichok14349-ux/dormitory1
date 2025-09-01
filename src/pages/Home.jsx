import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("/img/h2.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ชั้นมืดครอบพื้นหลัง */}
<div class="absolute inset-0 z-0">
  <img src="/img/jj.jpg" class="w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-br from-sky-500/70 via-sky-400/50 to-blue-300/40"></div>
</div>


      {/* เนื้อหา */}
      <div className="relative text-white text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ค้นหาหอพักในฝัน</h1>
        <p className="text-lg md:text-xl mb-6">
          หอพักคุณภาพดี ราคาเหมาะสม ใกล้มหาวิทยาลัยชั้นนำ
        </p>

        {/* กล่องค้นหา */}
        <div className="bg-white rounded-full flex items-center shadow-md max-w-xl mx-auto overflow-hidden">
          <div className="pl-4 text-gray-500">
            <FaMapMarkerAlt />
          </div>
          <input
            type="text"
            placeholder="ค้นหาตามพื้นที่ หรือชื่อมหาวิทยาลัย"
            className="flex-grow px-4 py-3 focus:outline-none text-gray-400"
          />
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-r-full transition flex items-center">
            <FaSearch className="mr-2" />
            ค้นหา
          </button>
        </div>

        {/* สถิติ */}
        <div className="flex justify-center gap-10 mt-10 text-white font-medium text-sm md:text-base">
          <div>
            <p className="text-2xl font-bold">100+</p>
            <p>หอพักทั้งหมด</p>
          </div>
          <div>
            <p className="text-2xl font-bold">20+</p>
            <p>มหาวิทยาลัยที่ครอบคลุม</p>
          </div>
          <div>
            <p className="text-2xl font-bold">10,000+</p>
            <p>นักศึกษาที่ใช้บริการ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
