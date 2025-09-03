// src/components/DormSearchPage.jsx
import React, { useState, useEffect } from 'react';
import dormsData from '../services/dormsData';

export default function DormSearchPage() {
  const [dorms, setDorms] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: 2000,
    maxPrice: 8000,
    type: '',
    amenities: []
  });

  useEffect(() => {
    setDorms(dormsData);
  }, []);

  const handleAmenityChange = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const filteredDorms = dorms.filter(d => {
    return (
      (!filters.location || d.location.includes(filters.location)) &&
      (!filters.type || d.type === filters.type) &&
      d.price >= filters.minPrice &&
      d.price <= filters.maxPrice &&
      filters.amenities.every(a => d.amenities.includes(a))
    );
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ค้นหาหอพัก</h2>

      {/* ฟิลเตอร์ */}
      <input
        type="text"
        placeholder="พื้นที่"
        className="border p-1 mr-2"
        value={filters.location}
        onChange={e => setFilters({ ...filters, location: e.target.value })}
      />

      <select
        value={filters.type}
        onChange={e => setFilters({ ...filters, type: e.target.value })}
        className="border p-1 mr-2"
      >
        <option value="">ทุกประเภท</option>
        <option value="หอหญิง">หอหญิง</option>
        <option value="หอชาย">หอชาย</option>
        <option value="หอรวม">หอรวม</option>
      </select>

      <input
        type="number"
        placeholder="ต่ำสุด"
        className="border p-1 mr-2"
        value={filters.minPrice}
        onChange={e => setFilters({ ...filters, minPrice: Number(e.target.value) })}
      />
      <input
        type="number"
        placeholder="สูงสุด"
        className="border p-1 mr-2"
        value={filters.maxPrice}
        onChange={e => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
      />

      {["Wi-Fi", "ฟิตเนส", "ร้านอาหาร", "สระว่ายน้ำ"].map(a => (
        <label key={a} className="mr-3">
          <input
            type="checkbox"
            checked={filters.amenities.includes(a)}
            onChange={() => handleAmenityChange(a)}
          />
          {a}
        </label>
      ))}

      {/* แสดงผล */}
      <div className="mt-4">
        {filteredDorms.length > 0 ? (
          filteredDorms.map(d => (
            <div key={d.id} className="border p-3 mb-2 rounded">
              <h3 className="font-bold">{d.name}</h3>
              <p>ราคา: {d.price} บาท/เดือน</p>
              <p>ประเภท: {d.type}</p>
              <p>สิ่งอำนวยความสะดวก: {d.amenities.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>ไม่พบหอพักที่ตรงกับการค้นหา</p>
        )}
      </div>
    </div>
  );
}
