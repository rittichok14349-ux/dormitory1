import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../components/Findstore.css';
const Findstore = () => {
const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [price, setPrice] = useState(2000);
  const [facilities, setFacilities] = useState([]);

  const facilityOptions = [
    'Wi-Fi',
    'ทีวีจอแบน',
    'รปภ.24ชม.',
    'ซักรีด',
    'ฟิตเนส',
    'สระว่ายน้ำ',
    'ร้านอาหาร',
    'ห้องสมุด',
  ];

  const toggleFacility = (item) => {
    setFacilities((prev) =>
      prev.includes(item)
        ? prev.filter((f) => f !== item)
        : [...prev, item]
    );
  };

  const handleSearch = () => {
    console.log({
      selectedProvince,
      selectedUniversity,
      selectedType,
      price,
      facilities,
    });
  };

  return (
    <div className="bg-white p-3 rounded-xl shadow-md max-w-7xl mx-auto mt-2">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="text-blue-500">🔍</span> ค้นหาหอพักแบบละเอียด
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <label className="block text-sm mb-1">พื้นที่</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaMapMarkerAlt />
            </span>
            <input
              type="text"
              placeholder="เลือกพื้นที่"
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">มหาวิทยาลัย</label>
          <select
            value={selectedUniversity}
            onChange={(e) => setSelectedUniversity(e.target.value)}
            className="w-full py-2 px-3 border rounded-md"
          >
            <option value="">เลือกมหาวิทยาลัย</option>
            <option value="จุฬาฯ">จุฬาฯ</option>
            <option value="ม.เกษตร">ม.เกษตร</option>
            <option value="ม.เชียงใหม่">ม.เชียงใหม่</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">ประเภทหอพัก</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full py-2 px-3 border rounded-md"
          >
            <option value="">เลือกประเภท</option>
            <option value="ชาย">หอชาย</option>
            <option value="หญิง">หอหญิง</option>
            <option value="รวม">หอรวม</option>
          </select>
        </div>
      </div>

      {/* ราคา */}
      <div className="mb-6">
        <label className="block text-sm mb-2">ช่วงราคา (บาท/เดือน)</label>
        <input
          type="range"
          min={2000}
          max={8000}
          step={100}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>฿2,000</span>
          <span>฿{price.toLocaleString()}</span>
          <span>฿8,000</span>
        </div>
      </div>

      {/* สิ่งอำนวยความสะดวก */}
      <div className="mb-6">
        <label className="block text-sm mb-2">สิ่งอำนวยความสะดวก</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {facilityOptions.map((item) => (
            <label key={item} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={facilities.includes(item)}
                onChange={() => toggleFacility(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* ปุ่มค้นหา */}
      <div className="text-center">
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-cyan-500 to-green-400 text-white px-6 py-2 rounded-md hover:opacity-90"
        >
          ค้นหาหอพัก
        </button>
      </div>
    </div>
  );
};

export default Findstore;
