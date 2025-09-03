import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-10 mt-12">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* คอลัมน์ 1 - โลโก้ & แนะนำ */}
        <div>
          <h3 className="text-xl font-bold mb-2">🏠 หอพักดี</h3>
          <p className="text-sm mb-4">แพลตฟอร์มค้นหาหอพักออนไลน์ที่ดีที่สุด สำหรับนักศึกษาทุกคน</p>
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* คอลัมน์ 2 - ลิงก์ด่วน */}
        <div>
          <h4 className="text-lg font-semibold mb-3">ลิงก์ด่วนพิเศษ</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">หน้าแรก</a></li>
            <li><a href="/search" className="hover:underline">ค้นหาหอพัก</a></li>
            <li><a href="/owner" className="hover:underline">สำหรับเจ้าของหอพัก</a></li>
            <li><a href="/terms" className="hover:underline">ข้อตกลงการใช้งาน</a></li>
          </ul>
        </div>

        {/* คอลัมน์ 3 - ติดต่อเรา */}
        <div>
          <h4 className="text-lg font-semibold mb-3">ติดต่อเรา</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 02-123-4567</li>
            <li>📧 info@dormgood.com</li>
            <li>📍 กรุงเทพมหานคร ประเทศไทย</li>
          </ul>
        </div>

        {/* คอลัมน์ 4 - สมัครรับข่าวสาร */}
        <div>
          <h4 className="text-lg font-semibold mb-3">ติดตามข่าวสาร</h4>
          <p className="text-sm mb-3">รับข้อมูลหอพักใหม่และโปรโมชั่นพิเศษ</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="อีเมลของคุณ"
              class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <button
              type="submit"
              className="bg-white text-sky-600 font-semibold py-2 rounded hover:bg-gray-100"
            >
              สมัครรับข่าวสาร
            </button>
          </form>
        </div>
      </div>

      {/* เส้นแบ่ง + ลิขสิทธิ์ */}
      <div className="border-t border-white mt-10 pt-4 text-center text-sm">
        © 2025 หอพักดี. สงวนลิขสิทธิ์.
      </div>
    </footer>
  );
};

export default Footer;
