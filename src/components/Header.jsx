import React from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = ({ onHomeClick, onFindStoreClick }) => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/img/lo.jpg"
            alt="Thai Local Food Logo"
            className="w-8 h-8 rounded-md"
          />
          <span className="text-lg font-bold text-gray-900">
            หอพักดี
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <button onClick={onHomeClick} className="hover:text-blue-600">
              <Link to="/*">
              หน้าแรก
              </Link>
            </button>
          <button onClick={onFindStoreClick} className="hover:text-blue-600">
            <Link to="/finddorms">
            ค้นหาหอพัก
            </Link>
          </button>
          
      <Link to="/contact" className="hover:text-blue-600">
            ติดต่อ
          </Link>
        </nav>


      </div>
    </header>
  );
};

export default Header;
