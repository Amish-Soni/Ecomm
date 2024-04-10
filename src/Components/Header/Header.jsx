import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <p>
          Summer Sale For All Swin Suits And Free Express Delivery - OFF 50%!
          &nbsp;
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="header-link">ShopNow</span>
          </Link>
        </p>
      </div>
      <div className="header-dropdown">
        <select name="language">
          <option value="eng">English</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
