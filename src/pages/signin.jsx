import React, { useState } from "react";
import "./authmodal.css";

const SignupForm = ({ setIsLogin }) => {
  const [agree, setAgree] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const correctOTP = "123456"; // Dummy OTP for testing

  // Handle SignUp
  const handleSignUp = (e) => {
    e.preventDefault();
    if (agree) {
      setShowOTP(true); // Show OTP form
    }
  };

  // Handle OTP Input
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // Handle OTP Verification
  const handleVerifyOtp = () => {
    if (otp.join("") === correctOTP) {
      alert(" OTP Verified Successfully!");
      setShowOTP(false); // Close OTP modal and proceed
    } else {
      setError(" Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="form-container">
      {!showOTP ? (
        <>
          <h2>Create Your Account</h2>
          <input type="text" placeholder="Full Name *" className="input-field" required />
          <input type="email" placeholder="Email *" className="input-field" required />
          <div className="phone-input">
            <select className="country-code">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <input type="text" placeholder="Your Phone *" className="input-field phone-number" required />
          </div>
          <input type="password" placeholder="Password *" className="input-field" required />
          <input type="password" placeholder="Confirm Password *" className="input-field" required />

          <div className="terms">
            <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} />
            <label htmlFor="agree">
              By joining, you agree to the <span>Terms and Privacy Policy</span>.
            </label>
          </div>

          <button className="submit-button" disabled={!agree} onClick={handleSignUp}>
            Sign Up
          </button>
          <p className="switch-form">
            Already Have An Account?
            <span className="login-link" onClick={() => setIsLogin(true)}> Log In</span>
          </p>
        </>
      ) : (
        <>
          <div className="otp-header">Verify OTP!</div>
          <p className="otp-instruction">
            We've sent an OTP to your email. Enter it below:
          </p>

          <div className="otp-cont">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                className="otp-input"
                value={value}
                onChange={(e) => handleOtpChange(e, index)}
              />
            ))}
          </div>

          {error && <p className="otp-error">{error}</p>}

          <button className="submit-button" onClick={handleVerifyOtp}>
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default SignupForm;
