import React, { useState } from "react";
import "./authmodal.css";

const OTPVerification = ({ setShowOTP }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const correctOTP = "123456"; // Dummy OTP for testing

  // Handle OTP Input
  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle OTP Verification
  const handleVerify = () => {
    if (otp.join("") === correctOTP) {
      alert("✅ OTP Verified Successfully!");
      setShowOTP(false); // Close modal
    } else {
      setError("❌ Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="otp-popup-overlay">
      <div className="otp-popup-container">
        <h2>Account Created!</h2>
        <p>We've sent an OTP to your email. Enter it below:</p>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              className="otp-box"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>

        {error && <p className="otp-error">{error}</p>}

        <button className="otp-submit-button" onClick={handleVerify}>
          Verify
        </button>
        <button className="otp-close-button" onClick={() => setShowOTP(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
