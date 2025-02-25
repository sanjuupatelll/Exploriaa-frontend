import React from "react";
import "./partnerwithus.css";
import Abudhabi from "../assets/images/abudhabi.svg";
import France from "../assets/images/france.svg";
import Japan from "../assets/images/japan.svg";
import Jorden from "../assets/images/jordan.svg";
import Singapore from "../assets/images/singapor.svg";
import Sweden from "../assets/images/sweden.svg";


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

  const services = [
    {
      id: 1,
      title: "Blogging and Content Marketing",
      description:
        "Content and SEO-optimized blogs with brand integrations authored by experienced travel writers.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ2dpbmclMjBhbmQlMjBDb250ZW50JTIwTWFya2V0aW5nfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description:
        "With a cumulative reach of 2 Million, reach out to millennials with our co-branded posts and stories.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Video Marketing",
      description:
        "Create viral videos with our in-house video production team.",
      image: "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Influencer Marketing",
      description:
        "Work with our network of travel influencers and content creators to reach out to millions of followers.",
      image: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW5mbHVlbmNlciUyME1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const brandLogos = [
    { src: Singapore, alt: "Singapore Tourism Board" },
    { src: Sweden, alt: "Visit Sweden" },
    { src: Japan, alt: "Japan Endless Discovery" },
    { src: France, alt: "France Tourism" },
    { src: Abudhabi, alt: "Experience Abu Dhabi" },
    { src: Jorden, alt: "jorden Tourism" },
    { src: Sweden, alt: "Visit Sweden" },
    { src: France, alt: "France Tourism" },

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
        <div className="marketing-section">
        <h1 className="marketing-solution-heading">Exploriaa Marketing Solutions</h1>
      <p className="marketing-subheading">
        Leverage our custom marketing solutions to pitch your brand to our travel-hungry audience.
      </p>

      <div className="marketing-cards">
        {services.map((service) => (
          <div className="marketing-card" key={service.id}>
            <img src={service.image} alt={service.title} className="marketing-image" />
            <div className="overlay"></div>
            <div className="marketing-number">{service.id}</div>
            <div className="marketing-content">
              <h3 className="marketing-title">{service.title}</h3>
              <p className="marketing-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="brands-section">
      <div><h1 className="brands-heading">Brands That Love Us</h1></div>
      <div className="brands-logos">
        {brandLogos.map((brand, index) => (
          <img key={index} src={brand.src} alt={brand.alt} />
        ))}
      </div>
      <button className="brands-button">GET IN TOUCH</button>
    </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
