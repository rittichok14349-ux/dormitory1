import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 px-4 md:px-16 py-10 space-y-16 mt-20">
      {/* Section 1: Contact Info */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">ติดต่อเรา</h2>
        <p className="text-gray-600">
          มีคำถามหรือต้องการข้อมูลเพิ่มเติม? ติดต่อเราได้ทุกช่องทาง ทีมงานของเราพร้อมให้คำปรึกษาและช่วยเหลือคุณ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {/* ที่อยู่ */}
          <div className="bg-white p-6 rounded-lg shadow text-center space-y-2">
            <div className="text-blue-500 text-3xl">📍</div>
            <h3 className="font-bold">ที่อยู่</h3>
            <p>
              123/45 ซอยมหาวิทยาลัย<br />
              แขวงพระบรมมหาราชวัง<br />
              เขตพระนคร กรุงเทพฯ 10200
            </p>
          </div>

          {/* โทรศัพท์ */}
          <div className="bg-white p-6 rounded-lg shadow text-center space-y-2">
            <div className="text-blue-500 text-3xl">📞</div>
            <h3 className="font-bold">โทรศัพท์</h3>
            <p>02-123-4567<br />086-123-4567<br />เปิดบริการ 08:00-20:00</p>
          </div>

          {/* อีเมล */}
          <div className="bg-white p-6 rounded-lg shadow text-center space-y-2">
            <div className="text-blue-500 text-3xl">✉️</div>
            <h3 className="font-bold">อีเมล</h3>
            <p>
              Music@gmail.com<br />
              Rittichok@gmail.com<br />
            </p>
          </div>

          {/* เวลาทำการ */}
          <div className="bg-white p-6 rounded-lg shadow text-center space-y-2">
            <div className="text-blue-500 text-3xl">🕒</div>
            <h3 className="font-bold">เวลาเปิด-ปิดสำนักงาน</h3>
            <p>
              จันทร์–ศุกร์: 08:00–18:00<br />
              เสาร์–อาทิตย์: 09:00–17:00<br />
              วันหยุดนักขัตฤกษ์: ปิด
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form + Map + Directions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="text-lg font-bold">ส่งข้อความถึงเรา</h3>
          <p className="text-sm text-gray-600">กรอกฟอร์มด้านล่าง เราจะติดต่อกลับภายใน 24 ชั่วโมง</p>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="ชื่อของคุณ" className="w-1/2 border p-2 rounded" />
              <input type="text" placeholder="นามสกุลของคุณ" className="w-1/2 border p-2 rounded" />
            </div>
            <input type="email" placeholder="your.email@example.com" className="w-full border p-2 rounded" />
            <input type="tel" placeholder="08X-XXX-XXXX" className="w-full border p-2 rounded" />
            <select className="w-full border p-2 rounded">
              <option>เลือกประเภทห้อง</option>
              <option>ห้องเดี่ยว</option>
              <option>ห้องรวม</option>
            </select>
            <textarea placeholder="บอกเราเกี่ยวกับความต้องการของคุณ..." className="w-full border p-2 rounded" rows="4" />
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              ส่งข้อความ
            </button>
          </form>
        </div>

        {/* Map & Direction */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">แผนที่และเส้นทาง</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center rounded">
              <span>แผนที่ Google Maps<br />123/45 ซอยมหาวิทยาลัย</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">วิธีการเดินทาง</h3>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong>รถเมล์:</strong> สาย 3, 9, 53, 82 ลงป้าย “มหาวิทยาลัย” เดินเข้า 2 นาที</li>
              <li><strong>รถยนต์ส่วนตัว:</strong> จากถนนพระราม 1 เลี้ยวเข้าซอยมหาวิทยาลัย มีที่จอดรถฟรี</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Social Media */}
      <section className="text-center space-y-4">
        <h3 className="text-xl font-bold">ติดตามเราในโซเชียลมีเดีย</h3>
        <p className="text-sm text-gray-600">อัปเดตข่าวสารและกิจกรรมใหม่ๆ ของหอพัก</p>
        <div className="flex justify-center gap-6">
          <div className="bg-white p-4 rounded-lg shadow w-40">
            <div className="text-blue-500 text-3xl mb-2">📘</div>
            <p>Facebook<br /><strong>@CampusHavenBKK</strong></p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow w-40">
            <div className="text-green-500 text-3xl mb-2">💬</div>
            <p>Line<br /><strong>@campushaven</strong></p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow w-40">
            <div className="text-pink-500 text-3xl mb-2">📸</div>
            <p>Instagram<br /><strong>@campus_haven_bkk</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
