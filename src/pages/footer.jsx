import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Footer.css"; 
import logo from "/src/assets/images/logo2.svg";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-social">
          <h1 className="footer-logo">
            <img src={logo} alt="Logo" width="250" height="auto" />
          </h1>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>About Thrillophilia</h4>
          <ul>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/wehiring" onClick={scrollToTop}>We Are Hiring</Link></li>
            <li><Link to="/termsandconditions" onClick={scrollToTop}>Terms & Conditions</Link></li>
            <li><Link to="/policy" onClick={scrollToTop}>Privacy Policies</Link></li>
            <li><Link to="/support" onClick={scrollToTop}>Support</Link></li>
            
          </ul>
        </div>

        <div className="footer-section">
          <h4>For Brands</h4>
          <ul>
            <li> <Link to="/partnerwithus" onClick={scrollToTop}>Partner With Us</Link></li>
            
          </ul>
        </div>

        <div className="footer-section popular-destinations">
          <h4>Popular Destinations</h4>
          <div className="destinations">
            <a href="#"><img src="https://images.unsplash.com/photo-1504556647341-3ce6ab157835?w=500" alt="Bali" /></a>
            <a href="#"><img src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500" alt="Dubai" /></a>
            <a href="#"><img src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=500" alt="Singapore" /></a>
            <a href="#"><img src="https://images.unsplash.com/photo-1545762374-d18079617da8?w=500" alt="Thailand" /></a>
            <a href="#"><img src="https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=500" alt="Andaman" /></a>
            <a href="#"><img src="https://images.unsplash.com/photo-1632979720170-9a1ab1b103d3?w=500" alt="India" /></a>
            <a href="#"><img src="https://images.unsplash.com/photo-1646062142799-73dd49cf315a?w=500" alt="Ladakh" /></a>
            <a href="#"><img src="https://images.unsplash.com/photo-1589269386949-b696cf6adaac?w=500" alt="Hong Kong" /></a>
            <a href="#"><img src="https://images.unsplash.com/photo-1532186651327-6ac23687d189?w=500" alt="Sri Lanka" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
