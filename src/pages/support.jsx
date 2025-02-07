import React from "react";
import "./support.css"; // CSS file for styling

const Support = () => {
  return (
    <div className="support-container">
      <h1>Support</h1>
      <p>If you need any help, feel free to reach out to us.</p>

      <h2>Contact Us</h2>
      <p><strong>Email:</strong> <a href="mailto:support@example.com">support@example.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 234-567-890</a></p>

      <h2>Frequently Asked Questions</h2>
      <ul>
        <li><strong>How do I reset my password?</strong> - Click on "Forgot Password" on the login page.</li>
        <li><strong>How can I track my order?</strong> - Check the "Order History" section in your account.</li>
        <li><strong>What is your refund policy?</strong> - Refunds are processed within 5-7 business days.</li>
      </ul>
    </div>
  );
};

export default Support;
