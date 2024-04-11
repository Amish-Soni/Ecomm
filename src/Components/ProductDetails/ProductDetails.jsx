import React from "react";
import "./ProductDetails.css";
import ProductCard from "../ProductCard/ProductCard";
import FullStar from "/FullStar.png";
import EmptyStar from "/EmptyStar.png";
import HalfFullStar from "/HalfFullStar.png";
import Pimage0 from "/Pimage0.png";
import Pimage1 from "/Pimage1.png";
import Pimage2 from "/Pimage2.png";
import Pimage3 from "/Pimage3.png";
import Pimage4 from "/Pimage4.png";
import Heart from "/Heart.png";
import DeliveryIcon from "/DeliveryIcon.png";
import ReturnIcon from "/ReturnIcon.png";

const ProductDetails = () => {
  return (
    <div className="productdetails">
      <div className="product-top-section">
        <p>
          Products / <span className="product-category">Gaming / </span>
          <span className="product-name">Havic HV G-92 Gamepad</span>{" "}
        </p>
      </div>

      <div className="product-info">
        <div className="images">
          <div className="images-left-section">
            <div className="image-small">
              <img src={Pimage1} alt="" />
            </div>
            <div className="image-small">
              <img src={Pimage2} alt="" />
            </div>
            <div className="image-small">
              <img src={Pimage3} alt="" />
            </div>
            <div className="image-small">
              <img src={Pimage4} alt="" />
            </div>
          </div>
          <div className="images-right-section">
            <div className="image-main">
              <img src={Pimage0} alt="" />
            </div>
          </div>
        </div>
        <div className="info">
          <div className="product-title">Havic HV G-92 Gamepad</div>
          <div className="reviews">
            <img src={FullStar} alt="star" className="star" />
            <img src={FullStar} alt="star" className="star" />
            <img src={FullStar} alt="star" className="star" />
            <img src={FullStar} alt="star" className="star" />
            <img src={EmptyStar} alt="star" className="star" />
            <span className="review-count"> (150 Reviews) | </span>
            <span className="green-text">In Stock</span>
          </div>
          <p className="price">$192.00</p>
          <p className="description">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="hr"></div>
          <div className="sizes">
            <p>Size:</p>
            <div className="size-btn">XS</div>
            <div className="size-btn">S</div>
            <div className="size-btn selected">M</div>
            <div className="size-btn">L</div>
            <div className="size-btn">XL</div>
          </div>

          <div className="product-buttons">
            <div className="quantity">
              <div className="minus-btn">-</div>
              <div className="pquantity">2</div>
              <div className="plus-btn">+</div>
            </div>
            <div className="buy-now-btn">Buy Now</div>
            <div className="wishlist">
              <img src={Heart} alt="" className="wishlist-img" />
            </div>
          </div>

          <div className="services">
            <div className="service">
              <img src={DeliveryIcon} alt="" />
              <div className="service-description">
                <p>Free Delivery</p>
                <p className="underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="service">
              <img src={ReturnIcon} alt="" />
              <div className="service-description">
                <p>Return Delivery</p>
                <p>
                  Free 30 Days Delivery Returns.{" "}
                  <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="related-item-section">
        <div className="section-name">
          <div className="side-div"></div>
          <h3 className="section-name">Related Items</h3>
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

export default ProductDetails;
