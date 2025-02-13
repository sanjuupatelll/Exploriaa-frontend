import React, { useState } from "react";
import "./authmodal.css";

const SignupForm = ({ setIsLogin }) => {
  const [agree, setAgree] = useState(false);

  return (
    <div className="form-container">
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
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
        <label htmlFor="agree">
          By joining, you agree to the <span>Terms and Privacy Policy</span>.
        </label>
      </div>

      <button className="submit-button" disabled={!agree}>Sign Up</button>
      <p className="switch-form">
        Already Have An Account? 
        <span className="login-link" onClick={() => setIsLogin(true)}> Log In</span>
        </p>
    </div>
  );
};

export default SignupForm;
