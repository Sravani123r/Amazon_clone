import React from "react";
import { Link } from "react-router-dom";
// context
import { useStateValue } from "../../../StateContext/StateProvider";
// UI
import "./Navbar.scss";
import { MdSearch } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "../../../assets/Logo/logo.PNG";
import BottomNav from "./BottomNav/BottomNav";
// import flag from "../../../assets/flag/um.svg";
function Navbar() {
  // context setup
  const [{ basket }] = useStateValue();
  return (
    <div id="top" className="w-100">
      <div className="navbar w-100 m-0 p-0 position-static">
        <Link to="/">
          <img
            src={Logo}
            alt="Amazon Logo"
            title="Amazon Home Page"
            className="nav__logo m-2"
          />
        </Link>

        <div
          className="d-none d-md-flex me-3"
          style={{ cursor: "pointer", fontSize: "13px" }}
        >
          <div className="text-white align-self-end">
            <IoLocationOutline className="fs-4 mb-1" />
          </div>
          <div className="d-flex flex-column">
            <span className="text-muted">Deliver to</span>
            <span className="text-white fw-bold">Location</span>
          </div>
        </div>

        <div className="navbar__search d-flex">
          <input
            placeholder="Search In Amazon ..."
            type="text"
            className="navbar__searchInput w-100 border-0 px-2"
          />
          <MdSearch className="navbr__searchIcon text-dark" />
        </div>

        {/* <div
          className="mx-4 d-none d-md-block"
          style={{ maxWidth: "25px", width: "25px", cursor: "pointer" }}
        >
          <img src={flag} alt="" />
        </div> */}

        <div className="nav__options d-flex justify-content-evenly">
          <div className="nav__optionsMobile mx-2 text-light d-flex flex-column justify-content-center">
        <div class="dropdown"  >
        <a class="btn  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <p style={{
              color: "white",
              cursor: "pointer",
              padding: "0px",
              fontSize: "10px",
              
            }}> Hello,sign in</p>
          <p style={{ color: "white", cursor: "pointer", fontSize: "12px" ,margin:"-15px"}}>Accounts & Lists{" "}</p>
        </a>

        <ul class="dropdown-menu"  style={{
               
          width: "250px",
          textAlign:"center"
                // height: "30px",
              
              }}>
           <button
              className="w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 
            active:bg-yellow-700"
              style={{
                backgroundColor: "#febd69",
                width: "150px",
                height: "30px",
                alignItems: "center",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              Sign in
            </button>
            <p className="text-xs mt-1" style={{paddingBottom:"15px",fontSize:"12px" ,fontFamily:"sans-serif"}}>

              <b> New Customer?</b> <span>Start here.</span>
          </p>
          <h5>Your Account</h5>
    <li><a className="dropdown-item" style={{fontSize:"12px"}} href="#">Your Account</a></li>
    <li><a className="dropdown-item" style={{fontSize:"12px"}} href="#">Your Orders</a></li>
    <li><a className="dropdown-item" style={{fontSize:"12px"}} href="#">Your Wish List</a></li>
    <li><a className="dropdown-item" style={{fontSize:"12px"}} href="#">Your Recommendations</a></li>
    <li><a className="dropdown-item" style={{fontSize:"12px"}} href="#">Your Prime Membership</a></li>
    <li><a className="dropdown-item" style={{fontSize:"12px"}} href="#">Your Prime Video</a></li>
    <li><a className="dropdown-item" style={{fontSize:"12px"}}href="#">Your Subscribe& Subscriptions</a></li>
    <li><a className="dropdown-item" style={{fontSize:"12px"}} href="#">Your Seller Account</a></li>
    <li><a className="dropdown-item" style={{fontSize:"12px"}} href="#">Manage YOur Content and Devices</a></li>
    <li><a className="dropdown-item" style={{fontSize:"12px"}} href="#">Your Free Amazon Business Account</a></li>
  </ul>
</div>
          </div>
          <Link
            to="/Order"
            className="text-decoration-none mx-2 text-light d-flex flex-column justify-content-center"
          >
            <span className="nav__optionsFirstLine">Returns</span>
            <span>& Orders</span>
          </Link>

          <Link
            to="/checkout"
            className="text-decoration-none ms-2 me-3 text-light position-relative d-flex flex-column"
          >
            <HiOutlineShoppingCart className="fs-2" />
            <span className="nav__optionNumber position-absolute fw-bold rounded-pill px-1">
              {basket.length}
            </span>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default React.memo(Navbar);
