import React, { useState } from "react";

const ForgotPassword = ({ onBackToLogin }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="form-container">
      <h2>Forgotten Your Password?</h2>
      <p>Don't worry, we'll send you a message to help you reset your password.</p>

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />

      <button className="submit-button">Continue</button>

      <p className="back-to-login" onClick={onBackToLogin}>Return to <span>Log In</span></p>
    </div>
  );
};

export default ForgotPassword;
