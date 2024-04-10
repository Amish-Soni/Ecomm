import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-list">
        <div className="sidebar-list-item">
          <p>Women's Fashion</p>
        </div>
        <div className="sidebar-list-item">
          <p>Men's Fashion</p>
        </div>
        <div className="sidebar-list-item">
          <p>Electronics</p>
        </div>
        <div className="sidebar-list-item">
          <p>Home & Lifestyle</p>
        </div>
        <div className="sidebar-list-item">
          <p>Medicine</p>
        </div>
        <div className="sidebar-list-item">
          <p>Sports & Outdoor</p>
        </div>
        <div className="sidebar-list-item">
          <p>Baby's & Toys</p>
        </div>
        <div className="sidebar-list-item">
          <p>Groceries & Pets</p>
        </div>
        <div className="sidebar-list-item">
          <p>Health & Beauty</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
