import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Wishlist from "/Wishlist.png";
import Cart from "/Cart.png";
import User from "/User.png";
import Search from "/Search.png";

const Navbar = () => {
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
          <img src={Wishlist} alt="" />
          <img src={Cart} alt="" />
          <img src={User} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
