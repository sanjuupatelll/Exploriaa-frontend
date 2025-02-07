import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Navbar.css";
import logo from "../assets/images/logo.svg"; // Import the logo image

Modal.setAppElement("#root");

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 

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

  // Open and close modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSignUp(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Exploriaa Logo" className="logo" /> {/* Logo added here */}
        
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

        <button onClick={openModal} className="register-button">
          Register
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Authentication Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-body">
          {isSignUp ? (
            <form className="auth-form">
              <h2>Register</h2>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="submit-button">
                Register
              </button>
              <p className="toggle-text">
                Already have an account?{" "}
                <span
                  className="toggle-link"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </span>
              </p>
            </form>
          ) : (
            <form className="auth-form">
              <h2>Sign In</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="submit-button">
                Sign In
              </button>
              <div className="toggle-text">
                <p>
                  You are a new user?{" "}
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="secondary-button">
                    Sign Up
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
