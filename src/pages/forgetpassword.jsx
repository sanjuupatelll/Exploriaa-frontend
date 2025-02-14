import React, { useState } from "react";

const ForgotPassword = ({ onBackToLogin }) => {
  const [email, setEmail] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState("");

  const handleContinue = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Please enter your email.");
      return;
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); 
    setShowSuccessPopup(true);
  };

  return (
    <>
      {!showSuccessPopup ? (
        <div className="form-container">
          <h2>Forgotten Your Password?</h2>
          <p>Don't worry, we'll send you a message to help you reset your password.</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          
          {/* Show error message if email is invalid */}
          {error && <p className="error-message">{error}</p>}

          <button className="submit-button" onClick={handleContinue}>
            Continue
          </button>

          <p className="back-to-login" onClick={onBackToLogin}>
            Return to <span>Log In</span>
          </p>
        </div>
      ) : (
        // Success Popup after clicking "Continue"
        <div className="form-container">
          <h2>You're Almost There!</h2>
          <p>
            We've sent you an email to help you reset your password. Check your spam inbox if you can't find it.
          </p>

          <button className="submit-button" onClick={onBackToLogin}>
            Done
          </button>

          <p className="back-to-login" onClick={onBackToLogin}>
            Return to <span>Log In</span>
          </p>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
