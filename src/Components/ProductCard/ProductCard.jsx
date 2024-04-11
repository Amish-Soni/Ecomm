import * as React from "react";
import "./ProductCard.css";

import ProductImage from "/ProductImage.png";
import Heart from "/Heart.png";
import View from "/View.png";
import Delete from "/Delete.png";
import WhiteCart from "/WhiteCart.png";
import FullStar from "/FullStar.png";
import EmptyStar from "/EmptyStar.png";
import HalfFullStar from "/HalfFullStar.png";

const ProductCard = ({ product, wishlist }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="discount-badge">40%</div>
        <img src={ProductImage} alt="image" className="product-image" />
        <div className="btns">
          {wishlist ? (
            <div className="delete-btn">
              <img src={Delete} alt="" className="delete-img" />
            </div>
          ) : (
            <>
              <div className="wishlist-btn">
                <img src={Heart} alt="" className="heart-img" />
              </div>
              <div className="view-btn">
                <img src={View} alt="" className="view-img" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="cart-btn">
        <img src={WhiteCart} alt="" className="cart-image" />
        Add To Cart
      </div>
      <h2 className="product-name">HAVIT HV - G92 Gamepad</h2>
      <div className="product-prices">
        <span className="discounted-price">$120</span>
        <span className="original-price">$160</span>
      </div>
      <div className="product-rating">
        <img src={FullStar} alt="star" className="star" />
        <img src={FullStar} alt="star" className="star" />
        <img src={FullStar} alt="star" className="star" />
        <img src={FullStar} alt="star" className="star" />
        <img src={EmptyStar} alt="star" className="star" />
        <span className="rating-count">(88)</span>
      </div>
    </div>
  );
};

export default ProductCard;
