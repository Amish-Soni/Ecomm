import React from "react";
import "./Contact.css";
import PhoneIcon from "/PhoneIcon.png";
import MailIcon from "/MailIcon.png";

const Contact = () => {
  return (
    <>
      <p className="breadcrum">
        Home / <strong>Contact</strong>
      </p>
      <div className="contact">
        <div className="contact-section">
          <div className="contact-info">
            <div className="contact-header">
              <img src={PhoneIcon} alt="" className="contact-icon" />
              <h3 className="contact-title">Call To Us</h3>
            </div>
            <p className="contact-description">
              We are available 24/7, 7 days a week.
            </p>
            <p className="contact-phone">Phone: +91-9876543210</p>
          </div>
          <hr className="contact-divider" />
          <div className="contact-info">
            <div className="contact-header">
              <img src={MailIcon} alt="" className="contact-icon" />
              <h3 className="contact-title">Write To Us</h3>
            </div>
            <p className="contact-description">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="contact-email">Emails: customer@exclusive.com</p>

            <p className="contact-email">Emails: support@exclusive.com</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="input-fields">
            <div className="input-field">
              <input
                type="text"
                className="input"
                required
                placeholder="Your Name *"
              />
            </div>
            <div className="input-field">
              <input
                type="email"
                className="input"
                required
                placeholder="Your Email *"
              />
            </div>
            <div className="input-field">
              <input
                type="tel"
                className="input"
                required
                placeholder="Your Phone *"
              />
            </div>
          </div>
          <textarea
            id="message"
            className="message-input"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
