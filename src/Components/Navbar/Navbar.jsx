import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Wishlist from "/Wishlist.png";
import Cart from "/Cart.png";
import User from "/User.png";
import UserWhite from "/UserWhite.png";
import Search from "/Search.png";
import Order from "/Order.png";
import Cancel from "/Cancel.png";
import Review from "/Review.png";
import Logout from "/Logout.png";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className="navbar">
      <h1 className="navbar-company-name">Exclusive</h1>
      <div className="navbar-links">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Home</p>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <p>Contact</p>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p>About</p>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <p>Signup</p>
        </Link>
      </div>
      <div className="navbar-right-section">
        <div className="navbar-search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <img src={Search} alt="" />
        </div>
        <div className="navbar-icons">
          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <img src={Wishlist} alt="" />
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <img src={Cart} alt="" />
          </Link>
          <Link to="/account" style={{ textDecoration: "none" }}>
            <img
              src={User}
              alt=""
              onMouseOver={() => setDisplayMenu(true)}
              onClick={() => setDisplayMenu(false)}
            />
          </Link>
          {displayMenu && (
            <div
              className="user-menu"
              onMouseLeave={() => setDisplayMenu(false)}
            >
              <div className="menu-list">
                <div className="menu-list-item">
                  <img src={UserWhite} alt="" className="menu-item-image" />
                  Manage My Account
                </div>
                <div className="menu-list-item">
                  <img src={Order} alt="" className="menu-item-image" />
                  My Order
                </div>
                <div className="menu-list-item">
                  <img src={Cancel} alt="" className="menu-item-image" />
                  My Cancellations
                </div>
                <div className="menu-list-item">
                  <img src={Review} alt="" className="menu-item-image" />
                  My Reviews
                </div>
                <div className="menu-list-item">
                  <img src={Logout} alt="" className="menu-item-image" />
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
