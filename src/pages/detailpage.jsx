import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Car, Bed, Plane, Pizza } from "lucide-react";
import background from "../assets/images/Background.png";
import Frame1 from "../assets/images/Frame1.png";
import Frame2 from "../assets/images/Frame2.png";
import Frame3 from "../assets/images/Frame3.png";
import Frame4 from "../assets/images/Frame4.png";
import { useNavigate } from "react-router-dom";
import "./detailpage.css";


const DetailPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Standard");

  const tripDetails = {
    Standard: [
      "Explore Dubai, a city of towering skyscrapers, vibrant souks, and a rich tapestry of global cultures.",
      "Admire the breathtaking panoramic views of Dubai's skyline from the 124th and 125th floors of the Burj Khalifa, the world's tallest building.",
      "Venture into the heart of the Dubai Arabian desert and experience adrenaline-pumping dune bashing, camel rides, and traditional entertainment.",
      "Sail aboard a luxurious Dubai Marina yacht and admire the surrounding architectural marvels and towering skyscrapers.",
      "Discover the six captivating zones of IMG Worlds of Adventure, the largest indoor-themed entertainment destination."
    ],
    Deluxe: [
      "Experience the magic of Dubai under the starlit desert sky, with luxurious dinners and breathtaking views.",
      "Ascend to one of the most stunning buildings in Dubai and the world's tallest building, Burj Khalifa, and enjoy the views from the 124th floor.",
      "Spend quality time on the traditional Dhow Marina Cruise, savoring a delicious dinner while admiring the city skyline.",
      "Experience the thrill of dune bashing in Dubai's vast desert against the backdrop of golden landscapes.",
      "Enjoy the famous Tanoura Dance Show, performed by skilled artists in colorful skirts to rhythmic music."
    ],
    Luxury: [
      "Explore Dubai’s cutting-edge architectural wonders and marvel at the city’s skyline of skyscrapers and futuristic design.",
      "Sail along Dubai Marina aboard a traditional dhow cruise, enjoying views of the city’s iconic marvels while savoring a delicious dinner.",
      "Learn about Dubai’s rich history at the Dubai Museum, exploring exhibits that showcase the city’s transformation.",
      "Indulge in a desert safari adventure, including dune bashing, camel riding, and a traditional Bedouin-style camp experience.",
      "Stay at the iconic Atlantis The Palm resort, offering luxurious accommodations and access to the thrilling Aquaventure Waterpark."
    ]
  };

  const toggleSection = (division, index) => {
    setOpenSections((prev) => ({
      ...prev,
      [division]: prev[division] === index ? null : index,
    }));
  };  


  return (
    
    <div className="detail-page">
      <div className="image-container">
        {/* First half with a single large image */}
        <div className="left-column">
          <img
            src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=1000"
            alt="Dubai Skyline"
          />
        </div>

        {/* Second half with 4 smaller images */}
        <div className="right-column">
          <div className="small-image">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500"
              alt="Destination"
            />
          </div>
          <div className="small-image">
            <img
              src="https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?w=500"
              alt="Stay"
            />
          </div>
          <div className="small-image">
            <img
              src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?w=500"
              alt="Activity"
            />
          </div>
          <div className="small-image">
            <img
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=500"
              alt="Desert Safari"
            />
            <button className="view-all-btn" onClick={() => navigate("/viewallimages")}>
        <span className="icon"></span> View All Images
      </button>

          </div>
        </div>
      </div>
      
      <div className="package-section">
        <div className="package-info">
          <h1 className="package-title">Dubai Highlights | Skyline and Sandscape</h1>
          <div className="trip-details">
            <span className="tag"> Days in Dubai </span>

            <span>5D/4N</span>
          </div>
          <div className="inclusions">
            <div className="icon-row">
              <span className="icon black-white"> 🚖 Transfer Included </span>
              <span className="icon black-white"> 🏨 Stay Included </span>
              <span className="icon black-white"> 🍽️ Breakfast Included </span>
            </div>
            <div className="icon-row">
              <span className="icon black-white">  👀 Sightseeing Included </span>
              <span className="icon black-white">  🍱 Lunch Included</span>
            </div>
          </div>
        </div>
        <div className="destination-routes-container">
      <h2 className="destination-routes-title">Destination Routes</h2>
      <div className="destination-routes-box">
        <span>Dubai</span>
        <span className="arrow">→</span>
        <span>Abu Dhabi</span>
        <span className="arrow">→</span>
        <span>Abu Dhabi</span>
      </div>
    </div>

{/* Stay Category Tabs */}
<h2 style={{ marginTop: "20px", marginLeft: "170px", textAlign: "left" , fontSize:"20px"}}>Stay Category</h2>
<div className="detail-container">
      <div className="stay-category">
        {["Standard", "Deluxe", "Luxury"].map((category) => (
          <span
            key={category}
            className={`category ${selectedCategory === category ? "selected" : ""}`}
            onClick={() => setSelectedCategory(category)} >
            {category}
          </span>
        ))}
      </div>

      {/* Trip Highlights Section */}
      <div className="trip-highlights">
        <h2>Trip Highlights</h2>
        <ul>
          {tripDetails[selectedCategory].map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
</div>
        {/* Inquiry Form on the Right Side */}
        <div className="inquiry-form">
          <h2>Dubai Highlights | Skyline And Sandscapes</h2>
          <p className="price">USD 519.98 <span className="old-price">USD 855.1</span></p>
          <form>
            <input type="text" placeholder="Full Name *" required />
            <input type="email" placeholder="Email *" required />
            <input type="tel" placeholder="+91 Your Phone *" required />
            <div className="form-row">
              <input type="date" placeholder="Travel Date *" required />
              <input type="number" placeholder="Travel Count *" required />
            </div>
            <textarea placeholder="Message..."></textarea>
            <button type="submit" className="submit-btn">Send Enquiry</button>
          </form>
        </div>
        
        <div className="itinerary-summary">
          <div className="itinerary-box">
            <h1>Trip summery</h1>
            <div className="itinerary-header">
               <div>
         <span className="icon">⚡</span>
         <span>3 Activities | </span>
         <span className="icon">🚗</span>
        <span>6 Transfers |</span>
        <span className="icon">🏨</span>
        <span>1 Hotel</span>
      </div>
    </div>


    <div className="day-details"><div className="icon-container">
      <div className="icon-group">
        <span>1</span>
        <Car size={18} className="icon" />
      </div>
      <span className="divider"></span>
      <div className="icon-group">
        <span>1</span>
        <Bed size={18} className="icon" />
      </div>
    </div>
      <div className="label-color">Day 1 - Dubai </div>
      <div className="day-content">
        <div className="activity">
          <h4>Transfer</h4>
          <p>Transfer from Dubai International Airport to Standard Hotel in Dubai</p>
        </div>
        <div className="hr"><hr></hr></div>
        <div className="activity">
          <h4>Hotel</h4>
          <p>Check-in at Standard Hotel in Dubai</p>
        </div>
        <div className="hr"><hr></hr></div>
        <div className="activity leisure">
          <p>Enjoy your time at leisure</p>
        </div>
      </div>
    </div>


    <div className="day-details">
    <div className="icon-container">
      <div className="icon-group">
        <span>3</span>
        <Car size={18} className="icon" />
      </div>
      <span className="divider"></span>
      <div className="icon-group">
        <span>2</span>
        <Pizza size={18} className="icon" />
      </div>
    </div>
    <div className="label-color">Day 2 - Dubai</div>
      <div className="day-content">
        <div className="activity">
          <h4>Transfer</h4>
          <p>1. Transfer from Standard Hotel in Dubai to Burj Khalifa Tickets At the Top 124th 125th Floor</p>
          <p>2. Transfer from Burj Khalifa Tickets At the Top 124th 125th Floor to Dubai Desert Safari with BBQ Dinner</p>
          <p>3. Transfer from Dubai Desert Safari with BBQ Dinner to Standard Hotel in Dubai</p>
        </div>
        <div className="hr"><hr></hr></div>
        <div className="activity">
          <h4>Activities</h4>
          <p>Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125) on a Private basis</p>
          <p>Dubai Desert Safari with BBQ Dinner - Desert Safari with Shared Transfers</p>
        </div>
        <div className="hr"><hr></hr></div>
      </div>
    </div>

    <div className="day-details">
    <div className="icon-container">
      <div className="icon-group">
        <span>1</span>
        <Pizza size={18} className="icon" />
      </div>
      <span className="divider"></span>
      <div className="icon-group">
        <span>1</span>
        <Car size={18} className="icon" />
      </div>
    </div>
    <div className="label-color">Day 3 - Dubai</div>
      <div className="day-content">
        <div className="activity">
          <h4>Transfer</h4>
          <p>1. Transfer from Standard Hotel in Dubai to Standard Hotel in Dubai</p>
        </div>
        <div className="hr"><hr></hr></div>
        <div className="activity">
          <h4>Activities</h4>
          <p>IMG Worlds Of Adventure Tickets, Dubai - IMG World of Adventure Tickets on a Private basis</p>
        </div>
        <div className="hr"><hr></hr></div>
      </div>
    </div>

    <div className="day-details">
    <div className="icon-container">
      <div className="icon-group">
        <span>1</span>
        <Car size={18} className="icon" />
      </div>
      <span className="divider"></span>
    </div>
    <div className="label-color">Day 4 - Dubai</div>
      <div className="day-content">
        <div className="activity">
          <h4>Transfer</h4>
          <p>1. Transfer from Standard Hotel in Dubai to Dubai International Airport</p>
        </div>
        <div className="hr"><hr></hr></div>
      </div>
    </div>
  </div>
</div>
<div className="package-details-section">
      <h2 className="section-title">What's inside the package?</h2>
      <div className="package-container">
        {/* Inclusions Section */}
        <div className="inclusions">
          <h3>Inclusions</h3>
          <ul>
            <li>✅ 4 nights stay in Dubai with breakfast</li>
            <li>✅ Burj Khalifa Tickets At the Top 124th 125th Floor - Private access</li>
            <li>✅ IMG Worlds Of Adventure Tickets - Private basis</li>
            <li>✅ Dhow Cruise Dubai Marina - Marina Dinner Cruise (Shared Transfers)</li>
            <li>✅ Dubai Desert Safari with BBQ Dinner - Shared Transfers</li>
            <li>✅ Airport transfer from Dubai International Airport to Standard Hotel</li>
            <li>✅ Airport transfer from Dubai International Airport</li>
            <li>✅ Daily Breakfast</li>
          </ul>
        </div>

        {/* Exclusions Section */}
        <div className="exclusions">
          <h3>Exclusions</h3>
          <ul>
            <li>❌ Expenses of a personal nature.</li>
            <li>❌ Meals not mentioned in the itinerary or inclusions</li>
            <li>❌ Visa Charges</li>
            <li>❌ Any extra excursions or sightseeing apart from the specified itinerary.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span>Know Before You Go</span>
        <FaChevronDown className={`dropdown-icon ${isOpen ? "rotate" : ""}`} />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
            <li>All international participants must share passport and visa details on arrival.</li>
            <li>Do not consume alcoholic beverages or drugs; intoxicated guests may be asked to leave.</li>
            <li>Respect local customs and traditions, especially during religious holidays.</li>
            <li>Drinks (alcoholic, aerated, or mineral water) are not included in the package.</li>
            <li>ID proof is mandatory for all guests at the time of booking and arrival (PAN card not accepted).</li>
            <li>Dress appropriately and conservatively; avoid wearing shorts.</li>
            <li>Women visiting mosques must wear scarves and cover themselves fully.</li>
            <li>Ladies may wear swimsuits in seashores and pools but should cover up when leaving the seaside.</li>
            <li>Tourists above 8 years of age are considered adults; no charges for kids below 8.</li>
            <li>Any breakage or damage to property items will be charged at actuals.</li>
        </ul>
      )}
    </div>
    <div className="additional-info-container">
      <div className="info-header">
        <h3>Additional Information</h3>
      </div>
      <div className="info-content">
        <a href="#" className="info-link">About the tour...</a>
        <a href="#" className="read-more-link">Read More</a>
      </div>
    </div>
    <div className="banner">
    <img src={background} alt="Detail Page Background" className="background-img" />

    </div>
       <div className="review-container">
      <h2 className="review-title">Reviews (54,780)</h2>
      <div className="review-card">
        {/* Left Section */}
        <div className="left-section">
          <div className="stars">
            <span className="star small">★</span>
            <span className="star small">★</span>
            <span className="star big">★</span>
            <span className="star small">★</span>
            <span className="star small">★</span>
          </div>
          <p className="rating"></p>
          <p className="countries">From 65+ countries</p>
        </div>
        
        {/* Right Section */}
        <div className="right-section">
          {[5, 4, 3, 2, 1].map((star, index) => (
            <div key={star} className="review-row">
              <span className="star-label">{star}★</span>
              <div className="bar-container">
                <div className="bar" style={{ width: `${[80, 50, 10, 1, 2][index]}%` }}></div>
              </div>
              <span className="count">{["43.3K", "9.7K", "1.5K", "104", "156"][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className="image-container">
        {/* First half with a single large image */}
        <div className="left-column">
          <img
            src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=1000"
            alt="Dubai Skyline"
          />
        </div>

        {/* Second half with 4 smaller images */}
        <div className="right-column">
          <div className="small-image">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500"
              alt="Destination"
            />
          </div>
          <div className="small-image">
            <img
              src="https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?w=500"
              alt="Stay"
            />
          </div>
          <div className="small-image">
            <img
              src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?w=500"
              alt="Activity"
            />
          </div>
          <div className="small-image">
            <img
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=500"
              alt="Desert Safari"
            />
          </div>
        </div>
      </div>

   <div className="reviewcard-container">
     {/* Header Section */}
   <div className="reviewcard-header">
    <div className="profile-section">
      <img
        src="https://images.unsplash.com/photo-1522003374706-1ee629dfab6d?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /* Replace with actual profile picture URL */
        alt="Profile"
        className="profile-pic"
      />
      <div>
        <h3 className="reviewer-name">Vinaya Arasu</h3>
        <p className="review-date">Reviewed: 04 Oct 2023</p>
      </div>
    </div>
    <div className="rating-container">
      <span className="rating-value">5.0</span>
      <span className="rating-out-of">/5</span>
    </div>
  </div>

  {/* Booked Tour */}
  <div className="booked-info">
    <p>
      <strong>Booked:</strong> Wonders of Dubai | Journey through Jewels of the
      Emirates{" "}
      <a href="#" className="external-link">
        &#8599;
      </a>
    </p>
  </div>

  {/* Review Text */}
  <p className="review-text">
    A mesmerizing trip to Dubai was very well organized by the thrillophilia
    team. Our heartfelt thanks to Destination Expert Chirayu Sharma and Yash
    for their continuous support for our memorable trip. Itinerary was well
    planned and executed by the team. I would surely recommend thrillophilia
    to all my...
    <span className="read-more"> Read More</span>
  </p>

  {/* Image Gallery */}
  <div className="image-gallery">
    <img
      src="https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?q=80&w=1784&auto=format&fit=crop"
      alt="Preview 1"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=500&auto=format&fit=crop&q=60"
      alt="Preview 2"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1606036858743-c106b6ffbff6?w=500&auto=format&fit=crop&q=60"
      alt="Preview 3"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=500&auto=format&fit=crop&q=60"
      alt="Preview 4"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1462007895615-c8c073bebcd8?w=500&auto=format&fit=crop&q=60"
      alt="Preview 5"
      className="gallery-image"
    />
    <div className="view-all-text">
      <img
      src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFtaWx5JTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D"
      alt="Preview 6"
      className="gallery-image"
      />
      <div className="view-all-text"> +24 View All </div>
    </div>
  </div>
</div>

<div className="reviewcard-container">
     {/* Header Section */}
  <div className="reviewcard-header">
    <div className="profile-section">
      <img
        src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Profile"
        className="profile-pic"
      />
      <div>
        <h3 className="reviewer-name">Sneha Sneha</h3>
        <p className="review-date">Reviewed: 20 March 2023</p>
      </div>
    </div>
    <div className="rating-container">
      <span className="rating-value">5.0</span>
      <span className="rating-out-of">/5</span>
    </div>
  </div>

  {/* Booked Tour */}
  <div className="booked-info">
    <p>
      <strong>Booked:</strong> Wonders of Dubai | Journey through Jewels of the
      Emirates{" "}
      <a href="#" className="external-link">
        &#8599;
      </a>
    </p>
  </div>

  {/* Review Text */}
  <p className="review-text">
    A mesmerizing trip to Dubai was very well organized by the thrillophilia
    team. Our heartfelt thanks to Destination Expert Chirayu Sharma and Yash
    for their continuous support for our memorable trip. Itinerary was well
    planned and executed by the team. I would surely recommend thrillophilia
    to all my...
    <span className="read-more"> Read More</span>
  </p>

  {/* Image Gallery */}
  <div className="image-gallery">
    <img
      src="https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWklMjBzYWZhcml8ZW58MHx8MHx8fDA%3D"
      alt="Preview 1"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1494675006433-9e9428eba6c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHViYWklMjBzYWZhcml8ZW58MHx8MHx8fDA%3D"
      alt="Preview 2"
      className="gallery-image"
    />
    <img
      src="https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Preview 3"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1613835579153-9bfe32e50da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJ1JTIwZGhhYml8ZW58MHx8MHx8fDA%3D"
      alt="Preview 4"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1603565095944-2a6f33bb517c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJ1JTIwZGhhYml8ZW58MHx8MHx8fDA%3D"
      alt="Preview 5"
      className="gallery-image"
    />
    <div className="view-all-text">
      <img
      src="https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhbWlseSUyMHRvdXIlMjBkdWJhaXxlbnwwfHwwfHx8MA%3D%3D"
      alt="Preview 6"
      className="gallery-image"
      />
      <div className="view-all-text"> +24 View All </div>
    </div>
  </div>
</div>

<div className="reviewcard-container">
     {/* Header Section */}
  <div className="reviewcard-header">
    <div className="profile-section">
      <img
        src="https://images.unsplash.com/photo-1531983598325-a62c7a407251?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
        alt="Profile"
        className="profile-pic"
      />
      <div>
        <h3 className="reviewer-name">simerjit kaur</h3>
        <p className="review-date">Reviewed: 17 april 2023</p>
      </div>
    </div>
    <div className="rating-container">
      <span className="rating-value">5.0</span>
      <span className="rating-out-of">/5</span>
    </div>
  </div>

  {/* Booked Tour */}
  <div className="booked-info">
    <p>
      <strong>Booked:</strong> Wonders of Dubai | Journey through Jewels of the
      Emirates{" "}
      <a href="#" className="external-link">
        &#8599;
      </a>
    </p>
  </div>

  {/* Review Text */}
  <p className="review-text">
    A mesmerizing trip to Dubai was very well organized by the thrillophilia
    team. Our heartfelt thanks to Destination Expert Chirayu Sharma and Yash
    for their continuous support for our memorable trip. Itinerary was well
    planned and executed by the team. I would surely recommend thrillophilia
    to all my...
    <span className="read-more"> Read More</span>
  </p>

  {/* Image Gallery */}
  <div className="image-gallery">
    <img
      src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Preview 1"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1600450575743-43793ba079d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
      alt="Preview 2"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1567215378181-6ecf3590646f?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Preview 3"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1589827577276-65d717348780?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Preview 4"
      className="gallery-image"
    />
    <img
      src="https://images.unsplash.com/photo-1523212307269-b5645414b985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHViYWklMjBhaXIlMjBwb3J0fGVufDB8fDB8fHww"
      alt="Preview 5"
      className="gallery-image"
    />
    <div className="view-all-text">
      <img
      src="https://images.unsplash.com/photo-1549944850-84e00be4203b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1YmFpJTIwYWlyJTIwcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
      alt="Preview 6"
      className="gallery-image"
      /> 
      <div className="view-all-text"> +24 View All </div>
    </div>
  </div>
</div>
<div className="load-more-button-container">
  <button className="load-more-button">
    Load More Reviews (54774+)
  </button>
</div>

<div className="frame-cards-container flex justify-center space-x-6 my-8">
        <div className="frame-card">
          <img src={Frame1} alt="Frame 1" className="card-image" />
        </div>
        <div className="frame-card">
          <img src={Frame2} alt="Frame 2" className="card-image" />
        </div>
        <div className="frame-card">
          <img src={Frame3} alt="Frame 3" className="card-image" />
        </div>
        <div className="frame-card">
          <img src={Frame4} alt="Frame 4" className="card-image" />
        </div>
      </div>

      <div className="dropdown-container">
      
      {/* More on Dubai Tourism */}
      <div className="dropdown-section">
        <h3>More On Dubai Tourism</h3>
        <div className="links">
          <a href="#">Dubai Tour Packages |</a>
          <a href="#">Things to do in Dubai |</a>
          <a href="#">Places to visit in Dubai</a>
        </div>
      </div>

      {/* Confirmation Policy Division */}
      <div className="dropdown-section">
        {/* <h3>Confirmation Policy</h3> */}
        <div className="accordion">
          {["Details about confirmation policy go here."].map((content, index) => (
            <div key={index} className="accordion-item">
              <button className="accordion-header" onClick={() => toggleSection("confirmation", index)}>
                Confirmation Policy
                <span className={`icon ${openSections["confirmation"] === index ? "open" : ""}`}>
                {openSections["confirmation"] === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              </button>
              <div className={`accordion-content ${openSections["confirmation"] === index ? "show" : ""}`}>
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Refund Policy Division */}
      <div className="dropdown-section">
        {/* <h3>Refund Policy</h3> */}
        <div className="accordion">
          {["Details about refund policy go here."].map((content, index) => (
            <div key={index} className="accordion-item">
              <button className="accordion-header" onClick={() => toggleSection("refund", index)}>
                Refund Policy
                <span className={`icon ${openSections["refund"] === index ? "open" : ""}`}>
                {openSections["refund"] === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <div className={`accordion-content ${openSections["refund"] === index ? "show" : ""}`}>
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cancellation Policy Division */}
      <div className="dropdown-section">
        {/* <h3>Cancellation Policy</h3> */}
        <div className="accordion">
          {[
            <ul>
              <li>If cancellation is made 30 days or more before the date of travel, 25% of total booking cost will be charged.</li>
              <li>If cancellation is made between 15 to 30 days before travel, 50% of total booking cost will be charged.</li>
              <li>If cancellation is made within 15 days, 100% cancellation fee applies.</li>
              <li>In unforeseen circumstances (weather, government restrictions, etc.), no cash refund will be available.</li>
            </ul>
          ].map((content, index) => (
            <div key={index} className="accordion-item">
              <button className="accordion-header" onClick={() => toggleSection("cancellation", index)}>
                Cancellation Policy
                <span className={`icon ${openSections["cancellation"] === index ? "open" : ""}`}>
                {openSections["cancellation"] === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              </button>
              <div className={`accordion-content ${openSections["cancellation"] === index ? "show" : ""}`}>
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Term Policy Division */}
      <div className="dropdown-section">
        {/* <h3>Payment Term Policy</h3> */}
        <div className="accordion">
          {["Details about payment terms go here."].map((content, index) => (
            <div key={index} className="accordion-item">
              <button className="accordion-header" onClick={() => toggleSection("payment", index)}>
                Payment Term Policy
                <span className={`icon ${openSections["payment"] === index ? "open" : ""}`}>
                 {openSections["payment"] === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
              </button>
              <div className={`accordion-content ${openSections["payment"] === index ? "show" : ""}`}>
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

</div> 
  );
};

export default DetailPage;
