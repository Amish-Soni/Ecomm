import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Wishlist from "./Components/Wishlist/Wishlist";
import Account from "./Components/Account/Account";
import Contact from "./Components/Contact/Contact";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="wishlist" element={<Wishlist />}></Route>
        <Route path="account" element={<Account />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
