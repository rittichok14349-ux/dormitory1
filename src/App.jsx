import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Findstore from "./pages/Findstore";
import SearchRestaurants from "./pages/SearchRestaurants";
import Footer from "./components/Footer";
import RestaurantDetail from "./pages/RestaurantDetail";
import CardDetail from "./pages/CardDetail";
import RoomDetail from "./pages/RoomDetail";
import ContactPage from "./pages/ContactPage"; // นำเข้าคอมโพเนนต์ ContactPage
import DormSearchPage from './components/DormSearchPage';
import FindDorms from "./pages/FindDorms";
import Room from "./pages/Room";
const App = () => {
  const homeRef = useRef(null);
  const findStoreRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFindStore = () => {
    findStoreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    
    <Router>
      <Header onHomeClick={scrollToHome} onFindStoreClick={scrollToFindStore} />
      
      <Routes>
        {/* หน้าแรก */}
        
        <Route
          path="/*"
          element={
            <>
              <div ref={homeRef}>
                <Home onFindStoreClick={scrollToFindStore} />
              </div>

              <div ref={findStoreRef} className="pt-24">
                <Findstore />
              </div>

              <SearchRestaurants />
            </>
          }
        />
        <Route
          path="/Findstore"
          element={
            <>
              <div ref={homeRef}>
                <Home onFindStoreClick={scrollToFindStore} />
              </div>

              <div ref={findStoreRef} className="pt-24">
                <Findstore />
              </div>

              <SearchRestaurants />
            </>
          }
        />
        
        {/* หน้ารายละเอียดร้าน */}
        
        <Route path="/Findstore" element={<Findstore />} />
        <Route path="/contact" element={<ContactPage />} /> {/* เพิ่มตรงนี้ */}
        <Route path="/restaurant/:id" element={<CardDetail />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/roomDetail" element={<RoomDetail />} />
        <Route path="/finddorms" element={<FindDorms />} />
        <Route path="/room" element={<Room />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
