import React from "react";
import "./authmodal.css"

const OTPVerification = ({ setShowOTP }) => {
  return (
    <div className="otp-popup-overlay">
      <div className="otp-popup-container">
        <h2>Account Created!</h2>
        <p>We've sent an OTP to your email. Enter it below:</p>
        <div className="otp-inputs">
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
        </div>
        <button className="otp-submit-button">Verify</button>
        <button className="otp-close-button" onClick={() => setShowOTP(false)}>Close</button>
      </div>
    </div>
  );
};

export default OTPVerification;
