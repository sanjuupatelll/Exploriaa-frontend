import React, { useState } from "react";
import "./authmodal.css";

const SignupForm = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [agree, setAgree] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on typing
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Please include an '@' in the email";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit number";
    if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(formData.password)) {
      newErrors.password = "Password must have 6+ characters, 1 uppercase, 1 number, and 1 special character";
    }
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!agree) newErrors.agree = "You must agree to the terms";

    setErrors(newErrors);
    setIsExpanded(Object.keys(newErrors).length > 0); // Expand modal if errors exist

    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setIsExpanded(false);
    }
  };

  return (
    <div className={`form-container ${isExpanded ? "expanded" : ""}`}>
      <h2>Create Your Account</h2>

      <div className="input-group">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name *"
          className={`input-field ${errors.fullName ? "error" : ""}`}
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <span className="error-tooltip">{errors.fullName}</span>}
      </div>

      <div className="input-group">
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className={`input-field ${errors.email ? "error" : ""}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-tooltip">{errors.email}</span>}
      </div>

      <div className="input-group phone-input">
        <select className="country-code">
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+61">+61</option>
        </select>
        <input
          type="text"
          name="phone"
          placeholder="Your Phone *"
          className={`input-field ${errors.phone ? "error" : ""}`}
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      {errors.phone && <span className="error-tooltip">{errors.phone}</span>}

      <div className="input-group">
        <input
          type="password"
          name="password"
          placeholder="Password *"
          className={`input-field ${errors.password ? "error" : ""}`}
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error-tooltip">{errors.password}</span>}
      </div>

      <div className="input-group">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password *"
          className={`input-field ${errors.confirmPassword ? "error" : ""}`}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <span className="error-tooltip">{errors.confirmPassword}</span>}
      </div>

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
      {errors.agree && <span className="error-tooltip">{errors.agree}</span>}

      <button className="submit-button" onClick={handleSubmit}>Sign Up</button>

      <p className="switch-form">
        Already Have An Account?
        <span className="login-link" onClick={() => setIsLogin(true)}> Log In</span>
      </p>
    </div>
  );
};

export default SignupForm;
