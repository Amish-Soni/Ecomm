import * as React from "react";
import "./ProductCard.css";

import ProductImage from "/ProductImage.png";
import Heart from "/Heart.png";
import View from "/View.png";
import WhiteCart from "/WhiteCart.png";
import FullStar from "/FullStar.png";
import EmptyStar from "/EmptyStar.png";
import HalfFullStar from "/HalfFullStar.png";

const ProductCard = ({ product }) => {
  // const products = [
  //   {
  //     discount: "-40%",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1abf80c5c4c9988ff3756f34265f3e884a090b104af9eb5edd854d58494d5e?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
  //     name: "HAVIT HV-G92 Gamepad",
  //     thumbnails: [
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
  //     ],
  //     discountedPrice: "$120",
  //     originalPrice: "$160",
  //     ratingImage:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
  //     rating: 4.5,
  //     ratingCount: 88,
  //   },
  //   // Add more product objects as needed
  // ];

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="discount-badge">40%</div>
        <img src={ProductImage} alt="image" className="product-image" />
        <div className="btns">
          <div className="wishlist-btn">
            <img src={Heart} alt="" className="heart-img" />
          </div>
          <div className="view-btn">
            <img src={View} alt="" className="view-img" />
          </div>
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
