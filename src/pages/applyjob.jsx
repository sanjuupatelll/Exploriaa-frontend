import React from "react";
import "./applyjob.css"; // Import the CSS file

const ApplyJob = () => {
  return (
    <div>
      {/* First Section */}
      <section className="apply-job-section">
        <div className="apply-job-container">
          {/* Left Text Content */}
          <div className="apply-job-text">
            <h4 className="apply-job-subheading">THIS ROLE IS EXCELLENT</h4>
            <h1 className="apply-job-heading">
              Sales And <span className="highlight">Business Development</span>
            </h1>
            <p className="apply-job-description">
              You have chosen the right role for our and your career growth.
            </p>
          </div>

          {/* Right Image */}
          <div className="apply-job-image-container">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Business Development"
              className="apply-job-image"
            />
          </div>
        </div>
      </section>

      {/* Second Section - Inquiry Form */}
      <section className="apply-job-section">
      <div className="apply-job-container">
        {/* Left Side: Job Details */}
        <div className="apply-job-details">
          <div className="job-box">
            <h3>SALES AND BUSINESS DEVELOPMENT</h3>
            <p>
              Welcome to Thrillophilia! 7 Million users come every month to plan
              their trips on Thrillophilia. We are your one-stop solution to
              book your tours, activities, staycations, and much more.
            </p>
          </div>

          <div className="job-box">
            <h3>WHAT YOU WOULD BE DOING</h3>
            {/* Added bullet-list class for bullet dots */}
            <p>
               In addition to enjoying the company of/interacting with some of the 
               smartest brains/entrepreneurs in the industry and NOT worrying about the pain of 
               making cold calls, you would be:
           </p>
            <ul className="bullet-list">
              <li>Becoming an expert on fancy travel experiences.</li>
              <li>Act as a travel thought leader/consultant.</li>
              <li>
                Selling fascinating travel experiences to consumers (no/minimal
                cold calls).
              </li>
              <li>
                Maintaining long-term relationships with "loyal/elite" customers.
              </li>
              <li>
                Troubleshooting customer issues by liaising with the business
                team.
              </li>
            </ul>
          </div>

          <div className="job-box">
            <h3>WHO YOU SHOULD BE</h3>
            {/* Added bullet-list class for bullet dots */}
            <ul className="bullet-list">
              <li>Super energetic.</li>
              <li>Loves communicating with people.</li>
              <li>A relentless convincer with a “get stuff done” attitude.</li>
              <li>Enjoys a fast-paced work environment.</li>
              <li>Great at interacting with diverse backgrounds.</li>
            </ul>
          </div>

          <div className="job-box">
            <h3>WHAT YOU WOULD GET</h3>
            {/* Added bullet-list class for bullet dots */}
            <ul className="bullet-list">
              <li>Make a big business impact in the future of travel.</li>
              <li>Ownership and independence at an early career stage.</li>
              <li>Best-in-class salary and mentorship.</li>
            </ul>
          </div>

          <div className="job-box">
            <h3>PREREQUISITES</h3>
            {/* Added bullet-list class for bullet dots */}
            <ul className="bullet-list">
              <li>A graduate degree (Engineering/MBA NOT necessary).</li>
              <li>Freshers are welcome.</li>
              <li>
                1-2 years of B2B/B2C consumer sales experience is preferred.
              </li>
              <li>Travel acumen will be a HUGE plus.</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Apply Form */}
        <div className="apply-job-form-container">
          <h2 className="form-heading">Apply to this role</h2>
          <form className="apply-job-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="+91 Your Phone" required />
            <input type="text" placeholder="LinkedIn URL" />
            <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
            <textarea placeholder="Add a cover letter here"></textarea>
            <button type="submit" className="submit-button">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ApplyJob;
