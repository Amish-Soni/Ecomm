import React from "react";
import "./Wishlist.css";
import ProductCard from "../ProductCard/ProductCard";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <div className="wishlist-items">
        <div className="title-and-btn">
          <h3 className="title">Wishlist (6)</h3>
          <button className="move-all-to-bag-btn">Move All To Bag</button>
        </div>
        <div className="wishlist-item-list">
          <ProductCard wishlist={true}></ProductCard>
          <ProductCard wishlist={true}></ProductCard>
          <ProductCard wishlist={true}></ProductCard>
          <ProductCard wishlist={true}></ProductCard>
          <ProductCard wishlist={true}></ProductCard>
          <ProductCard wishlist={true}></ProductCard>
        </div>
      </div>

      <div className="just-for-you">
        <div className="title-and-btn">
          <div className="section-name">
            <div className="side-div"></div>
            <h3 className="section-name">Just For You</h3>
          </div>
          <button className="see-all-btn">See All</button>
        </div>
        <div className="products">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
