import React from "react";
import { useState, useRef } from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import HomeBanner from "/HomeBanner.png";

import LeftArrow from "/LeftArrow.png";
import RightArrow from "/RightArrow.png";

import CategoryPhone from "/CategoryPhone.png";
import CategoryComputer from "/CategoryComputer.png";
import CategorySmartWatch from "/CategorySmartWatch.png";
import CategoryCamera from "/CategoryCamera.png";
import CategoryHeadphone from "/CategoryHeadphone.png";
import CategoryGamepad from "/CategoryGamepad.png";

import CategoriesBanner from "/CategoriesBanner.png";

import DeliveryService from "/DeliveryService.png";
import CustomerService from "/CustomerService.png";
import MoneyBackGuaranteeService from "/MoneyBackGuaranteeService.png";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const saleProductsContainerRef = useRef(null);

  const handleScrollLeft = () => {
    const container = saleProductsContainerRef.current;
    if (container) {
      container.scrollTo({
        left: scrollLeft - 400,
        behavior: "smooth",
      });
      setScrollLeft(scrollLeft - 400);
    }
  };

  const handleScrollRight = () => {
    const container = saleProductsContainerRef.current;
    if (container) {
      container.scrollTo({
        left: scrollLeft + 400,
        behavior: "smooth",
      });
      setScrollLeft(scrollLeft + 400);
    }
  };

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
          <div className="title-and-btn">
            <h2 className="section-title">Flash Sales</h2>
            <div className="scroll-btns">
              <button className="scroll-btn" onClick={handleScrollLeft}>
                <img src={LeftArrow} alt="" className="arrow-img" />
              </button>
              <button className="scroll-btn" onClick={handleScrollRight}>
                <img src={RightArrow} alt="" className="arrow-img" />
              </button>
            </div>
          </div>
          <div className="sale-products" ref={saleProductsContainerRef}>
            <div className="ProductCard">
              <ProductCard></ProductCard>
            </div>
            <div className="ProductCard">
              <ProductCard></ProductCard>
            </div>
            <div className="ProductCard">
              <ProductCard></ProductCard>
            </div>
            <div className="ProductCard">
              <ProductCard></ProductCard>
            </div>
            <div className="ProductCard">
              <ProductCard></ProductCard>
            </div>
            <div className="ProductCard">
              <ProductCard></ProductCard>
            </div>
            {/* <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard> */}
          </div>
          <button className="view-all-products-btn">View All Products</button>
        </div>

        <div className="categories">
          <div className="hr"></div>
          <div className="section-name">
            <div className="side-div"></div>
            <h3 className="section-name">Categories</h3>
          </div>
          <h2 className="section-title">Browse By Category</h2>
          <div className="categories-list">
            <div className="category">
              <img src={CategoryPhone} alt="" className="category-image" />
              <p>Phones</p>
            </div>
            <div className="category">
              <img src={CategoryComputer} alt="" className="category-image" />
              <p>Computers</p>
            </div>
            <div className="category">
              <img src={CategorySmartWatch} alt="" className="category-image" />
              <p>Smart Watch</p>
            </div>
            <div className="category">
              <img src={CategoryCamera} alt="" className="category-image" />
              <p>Camera</p>
            </div>
            <div className="category">
              <img src={CategoryHeadphone} alt="" className="category-image" />
              <p>Headphones</p>
            </div>
            <div className="category">
              <img src={CategoryGamepad} alt="" className="category-image" />
              <p>Gaming</p>
            </div>
          </div>
          <div className="hr"></div>
        </div>

        <div className="month">
          <div className="section-name">
            <div className="side-div"></div>
            <h3 className="section-name">This Month</h3>
          </div>
          <div className="title-and-btn">
            <h2 className="section-title">Best Selling Products</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="products">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>

        <div className="categories-banner">
          <img
            src={CategoriesBanner}
            alt=""
            className="categories-banner-image"
          />
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
