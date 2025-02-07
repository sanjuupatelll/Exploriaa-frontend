import React from "react";
import "./partnerwithus.css";

const PartnerWithUs = () => {
  const categories = [
    {
      image:
        "https://images.unsplash.com/photo-1622185134994-3e87da0f1bb6?w=500&auto=format&fit=crop&q=60",
      title: "Automobiles",
    },
    {
      image:
        "https://images.unsplash.com/photo-1610642372651-fe6e7bc209ef?w=500&auto=format&fit=crop&q=60",
      title: "Airlines",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?w=500&auto=format&fit=crop&q=60",
      title: "Travel Gear Accessories",
    },
    {
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60",
      title: "Hotels & Resorts",
    },
  ];

  return (
    <div>
      {/* First Section - Advertise With Us */}
      <div className="partner-container">
        <div className="partner-left">
          <h1>
            Advertise <span>With Us</span>
          </h1>
          <p>Engage with 30+ MILLION travel lovers</p>
        </div>

        <div className="form-card">
          <h2>Let's Talk</h2>
          <p>
            Fill out the form below, and our team will get in touch with you
            soon.
          </p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Contact No." />
            <input type="text" placeholder="Company Name" />
            <input type="url" placeholder="Company Website" />
            <select>
              <option>Business Type</option>
              <option>Startup</option>
              <option>Enterprise</option>
              <option>Freelancer</option>
            </select>
            <textarea placeholder="Add Comment..." rows="4"></textarea>
            <button type="submit">Send Details</button>
          </form>
        </div>
      </div>

      {/* New Section - Partner With Exploriaa */}
      <div className="partner-exploriaa">
        <h2>
          Partner With </h2> <h2><span className="highlight">Exploriaa</span>
        </h2>
        <h5>
          Brands across sectors partner with us to reach </h5> <h5>travel-loving audiences
          across Asia.
        </h5>

        {/* Grid Container for Categories */}
        <div className="grid-container">
          {categories.map((category, index) => (
            <div key={index} className="grid-item">
              <img src={category.image} alt={category.title} />
              <div className="overlay">{category.title}</div>
            </div>
          ))}
        </div>

        {/* Why Exploriaa Section */}
        <div className="why-exploriaa">
          <h3>
            Why <span className="highlight">Exploriaa</span>
          </h3>
          <div className="stats-container">
            <div className="stat-box">
              <h4>35M+</h4>
              <p>Website Users/Year</p>
            </div>
            <div className="stat-box">
              <h4>2M+</h4>
              <p>Happy Customers</p>
            </div>
            <div className="stat-box">
              <h4>12000+</h4>
              <p>Experiences</p>
            </div>
            <div className="stat-box">
              <h4>15+</h4>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
