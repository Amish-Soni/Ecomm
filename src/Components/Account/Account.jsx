import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <>
      <div className="account-top-section">
        <p>
          Home / <strong>My Account</strong>
        </p>
        <p>
          Welcome! <span className="red-text">GDSC</span>
        </p>
      </div>
      <div className="account">
        <div className="account-sidebar">
          <div className="account-sidebar-list">
            <div className="list">
              <p className="list-title">Manage My Account</p>
              <div className="list-items">
                <p className="list-item red-text">My Profile</p>
                <p className="list-item">Address Book</p>
                <p className="list-item">My Payment Options</p>
              </div>
            </div>

            <div className="list">
              <p className="list-title">My Orders</p>
              <div className="list-items">
                <p className="list-item">My Returns</p>
                <p className="list-item">My Cancellations</p>
              </div>
            </div>

            <div className="list">
              <p className="list-title">My Wishlist</p>
            </div>
          </div>
        </div>

        <div className="edit-profile">
          <form className="edit-profile-form">
            <div className="form-heading">Edit Your Profile</div>
            <div className="name">
              <div className="input-field">
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" placeholder="Amish" />
              </div>
              <div className="input-field">
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" placeholder="Soni" />
              </div>
            </div>
            <div className="email-address">
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="amishsoni@amishsoni.com"
                />
              </div>
              <div className="input-field">
                <label htmlFor="address">Address</label>
                <input type="text" placeholder="JSSATEN" />
              </div>
            </div>
            <div className="password-change">
              <label htmlFor="password">Password Changes</label>
              <input
                type="password"
                name="password"
                placeholder="Current Password"
              />
              <input
                type="npassword"
                name="npassword"
                placeholder="New Password"
              />
              <input
                type="cnpassword"
                name="cnpassword"
                placeholder="Confirm New Password"
              />
            </div>
            <div className="btns">
              <button className="cancel-btn">Cancel</button>
              <button type="submit" className="submit-button">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Account;
