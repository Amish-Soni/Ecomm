import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import HomeBanner from "/HomeBanner.png";

import DeliveryService from "/DeliveryService.png";
import CustomerService from "/CustomerService.png";
import MoneyBackGuaranteeService from "/MoneyBackGuaranteeService.png";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="home">
        <div className="home-banner">
          <img src={HomeBanner} alt="" />
        </div>

        <div className="todays">
          <div className="section-name">
            <div className="side-div"></div>
            <h3 className="section-name">Today's</h3>
          </div>
          <h2 className="section-title">Flash Sales</h2>
        </div>

        <div className="categories">
          <div className="section-name">
            <div className="side-div"></div>
            <h3 className="section-name">Categories</h3>
          </div>
          <h2 className="section-title">Browse By Category</h2>
        </div>

        <div className="month">
          <div className="section-name">
            <div className="side-div"></div>
            <h3 className="section-name">This Month</h3>
          </div>
          <h2 className="section-title">Best Selling Products</h2>
        </div>

        <div className="products-section">
          <div className="section-name">
            <div className="side-div"></div>
            <h3 className="section-name">Our Products</h3>
          </div>
          <h2 className="section-title">Explore Our Products</h2>
          <div className="products">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
          <button className="view-all-products-btn">View All Products</button>
        </div>

        <div className="new-arrivals">
          <div className="section-name">
            <div className="side-div"></div>
            <h3 className="section-name">Featured</h3>
          </div>
          <h2 className="section-title">New Arrival</h2>
          <div className="new-arrival">
            <div className="section-1">
              <div className="product-title">PlayStation 5</div>
              <div className="product-description">
                Black and White version of the PS5 <br /> coming out on sale.
              </div>
              <button className="shopnow-btn">Shop Now</button>
            </div>
            <div className="section-2">
              <div className="top-section">
                <div className="product-title">Women's Collections</div>
                <div className="product-description">
                  Featured women collections that <br /> give you another vibe.
                </div>
                <button className="shopnow-btn">Shop Now</button>
              </div>
              <div className="bottom-section">
                <div className="left-section">
                  <div className="product-title">Speakers</div>
                  <div className="product-description">
                    Amazon wireless speakers
                  </div>
                  <button className="shopnow-btn">Shop Now</button>
                </div>
                <div className="right-section">
                  <div className="product-title">Perfume</div>
                  <div className="product-description">
                    GUCCI INTENSE OUD EDP
                  </div>
                  <button className="shopnow-btn">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="value-added-services">
          <div className="value-added-service">
            <img src={DeliveryService} alt="" className="service-image" />
            <p className="service-title">FREE AND FAST DELIVERY</p>
            <p className="service-description">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="value-added-service">
            <img src={CustomerService} alt="" className="service-image" />
            <p className="service-title">24/7 CUSTOMER SERVICE</p>
            <p className="service-description">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="value-added-service">
            <img
              src={MoneyBackGuaranteeService}
              alt=""
              className="service-image"
            />
            <p className="service-title">MONEY BACK GUARANTEE</p>
            <p className="service-description">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
