import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Modal from "react-modal";
import "./Navbar.css";
import logo from "../assets/images/logo.svg"; // Import the logo image

Modal.setAppElement("#root");

const Navbar = ({ onOpenAuthModal }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobile(false); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Clickable Logo Redirecting to Home */}
        <Link to="/">
          <img src={logo} alt="Exploriaa Logo" className="logo" style={{ cursor: "pointer" }} />
        </Link>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="currency-dropdown">
          <select>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
            <option value="pound">POUND</option>
            <option value="gbp">GBP</option>
          </select>
        </div>

        {/* Login/Register Button */}
        <button onClick={onOpenAuthModal} className="register-button">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
