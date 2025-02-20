import React, { useState } from "react";

const ForgotPassword = ({ onBackToLogin }) => {
  const [email, setEmail] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState("");

  // Improved Email Validation Pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleContinue = () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address (e.g., user@example.com).");
      return;
    }

    setError("");
    setShowSuccessPopup(true);
  };

  return (
    <>
      {!showSuccessPopup ? (
        <div className="forgot-password-container">
          <div className="form-title">Forgotten Your Password?</div>
          <div className="form-description">
            Don't worry, we'll send you a message to help you reset your password.
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />

          {error && <div className="error-message">{error}</div>}

          <button className="submit-button" onClick={handleContinue}>
            Continue
          </button>

          <div className="back-to-login" onClick={onBackToLogin}>
            Return to <span>Log In</span>
          </div>
        </div>
      ) : (
        <div className="reset-password-box">
  <div className="form-title">You're Almost There!</div>
  <div className="form-description">
    We've sent you an email to help you reset your password. Check your spam inbox if you can't find it.
  </div>

  <button className="submit-button" onClick={onBackToLogin}>
    Done
  </button>

  <div className="back-to-login" onClick={onBackToLogin}>
    Return to <span>Log In</span>
  </div>
</div>

      )}
    </>
  );
};

export default ForgotPassword;
