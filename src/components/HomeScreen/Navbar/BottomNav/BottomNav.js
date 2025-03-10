import React from "react";
import Offcanvas from "./Offcanvas";
// import nav from "../../../../assets/nav.jpg";
// UI
import "./BottomNav.scss";
import { IoMdMenu } from "react-icons/io";

function BottomNav() {
  return (
    <div className="bottom__nav w-100 d-flex align-items-center p-2">
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#bottomNavCanvas"
        aria-controls="bottomNavCanvas"
        className="bottom__navAll p-1 ms-2 ms-sm-0 rounded text-white fw-bold d-flex align-items-center"
      >
        <IoMdMenu className="fs-4 me-1" />
        <span>All</span>
      </div>
      <Offcanvas />
      <div className="bottom_navItems text-white">
       <span>Mobiles</span>
       <span>Best sellers</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <div className="d-sm-inline-block d-none">
          <span>Amazon pay</span>
          <span>Electronics</span>
          <span>Fashion</span>
          <span>Sell</span>
          <span>prime</span>
         {/* <div className="right_data">
          <img src={nav} alt="navdata" />
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default React.memo(BottomNav);






