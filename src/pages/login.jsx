import React, { useState } from "react";
import "./authmodal.css";


const Login = ({ onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container">
      <h2>Log into Your Account</h2>

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />

      <p className="forgot-password" onClick={onForgotPassword}>Forgot Password?</p>

      <button className="submit-button">Login</button>

      <button className="google-signin">
    <img src="https://ouch-cdn2.icons8.com/VGHyfDgzIiyEwg3RIll1nYupfj653vnEPRLr0AeoJ8g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODg2/LzRjNzU2YThjLTQx/MjgtNGZlZS04MDNl/LTAwMTM0YzEwOTMy/Ny5wbmc.png" alt="Google" className="google-logo" />
    <span>Sign In with Google</span>
    </button>

    </div>
  );
};

export default Login;

