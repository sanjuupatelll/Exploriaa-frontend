import React, { useState } from "react";
import axios from "axios";
import "./authmodal.css";

const SignupForm = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [agree, setAgree] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle SignUp
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!agree) return;

    try {
      const response = await axios.post("http://localhost:5000/api/register", formData);
      alert(response.data.message);
      setShowOTP(true);
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
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
  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/verify-otp", {
        email: formData.email,
        otp: otp.join(""),
      });
      alert(response.data.message);
      setShowOTP(false);
    } catch (error) {
      setError(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="form-container">
      {!showOTP ? (
        <>
          <h2>Create Your Account</h2>
          <input type="text" name="fullName" placeholder="Full Name *" className="input-field" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email *" className="input-field" required onChange={handleChange} />
          <div className="phone-input">
            <select className="country-code">
              <option value="+91">+91</option>
            </select>
            <input type="text" name="phone" placeholder="Your Phone *" className="input-field phone-number" required onChange={handleChange} />
          </div>
          <input type="password" name="password" placeholder="Password *" className="input-field" required onChange={handleChange} />

          <div className="terms">
            <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} />
            <label htmlFor="agree">By joining, you agree to the <span>Terms and Privacy Policy</span>.</label>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button className="submit-button" disabled={!agree} onClick={handleSignUp}>Sign Up</button>
          <p className="switch-form">
            Already Have An Account?
            <span className="login-link" onClick={() => setIsLogin(true)}> Log In</span>
          </p>
        </>
      ) : (
        <>
          <div className="otp-header">Verify OTP!</div>
          <p className="otp-instruction">We've sent an OTP to your email. Enter it below:</p>

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

          <button className="submit-button" onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default SignupForm;
