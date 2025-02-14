import React, { useState } from "react";
import Login from "./login";
import Signin from "./signin";
import ForgotPassword from "./forgetpassword"; 
import otpVerification from "./otpverification";
import "./authmodal.css";

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login"); 
  const [isOtpOpen, setIsOtpOpen] = useState(false); // ✅ Added state for OTP popup

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Close Button */}
        <button onClick={onClose} className="close-button">✖</button>

        <div className="modal-content">
          {/* Left Side - Image */}
          <div className="modal-image">
            <img
              src="https://images.unsplash.com/photo-1575135356678-a5bc4c58a2a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel Image"
            />
          </div>

          {/* Right Side - Form */}
          <div className="modal-form">
            {/* Fixed Container for Buttons */}
            {activeTab !== "forgot" && (
              <div className="tab-container">
                <button className={activeTab === "login" ? "active" : ""} onClick={() => setActiveTab("login")}>
                  Login
                </button>
                <button className={activeTab === "signup" ? "active" : ""} onClick={() => setActiveTab("signup")}>
                  Sign Up
                </button>
              </div>
            )}

            {/* Conditionally Render Forms */}
            <div className="auth-form">
              {activeTab === "login" && <Login onForgotPassword={() => setActiveTab("forgot")} />}
              {activeTab === "signup" && <Signin setIsLogin={() => setActiveTab("login")} />}
              {activeTab === "forgot" && <ForgotPassword onBackToLogin={() => setActiveTab("login")} />}
            </div>
          </div>
        </div>
      </div>
      {isOtpOpen && <otpverification onClose={() => setIsOtpOpen(false)} />}
    </div>
  );
};

export default AuthModal;
