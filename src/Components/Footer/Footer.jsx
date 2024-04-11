import React from "react";
import "./Footer.css";
import ArrowIcon from "/ArrowIcon.png";
import QRCodeIcon from "/QRCodeIcon.png";
import GooglePlayIcon from "/GooglePlayIcon.png";
import AppStoreIcon from "/AppStoreIcon.png";
import FacebookIcon from "/FacebookIcon.png";
import TwitterIcon from "/TwitterIcon.png";
import InstagramIcon from "/InstagramIcon.png";
import LinkedinIcon from "/LinkedinIcon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-list">
        <div className="footer-section">
          <p className="footer-section-title">Exclusive</p>
          <p>Subscribe</p>
          <p>Get 10% off on your first order.</p>
          <div className="email-input">
            <input type="email" placeholder="Entre your email" />
            <img src={ArrowIcon} alt="" className="arrow-icon" />
          </div>
        </div>
        <div className="footer-section">
          <p className="footer-section-title">Support</p>
          <p>JSS Academy of Technical Education, Noida.</p>
          <p>exclusive@gmail.com</p>
          <p>+91-9876543210</p>
        </div>
        <div className="footer-section">
          <p className="footer-section-title">Account</p>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="footer-section">
          <p className="footer-section-title">Quick Links</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="footer-section">
          <p className="footer-section-title">Download App</p>
          <p className="special-offer">Save $3 with App New User Only</p>
          <div className="download-section">
            <img src={QRCodeIcon} alt="" className="qrcode-icon" />
            <div className="download-icons">
              <img src={GooglePlayIcon} alt="" className="download-icon" />
              <img src={AppStoreIcon} alt="" className="download-icon" />
            </div>
          </div>
          <div className="social-icons">
            <img src={FacebookIcon} alt="" className="social-icon" />
            <img src={TwitterIcon} alt="" className="social-icon" />
            <img src={InstagramIcon} alt="" className="social-icon" />
            <img src={LinkedinIcon} alt="" className="social-icon" />
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="footer-copyright">
        <p>© Copyright Amish Soni 2024. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
