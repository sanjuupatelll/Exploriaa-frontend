import React, { useState } from "react";
import "./support.css";
import ticketiconIcon from "../assets/images/ticketicon.svg"; // Import the SVG

const Support = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage the pop-up

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>Hi, how can we help you?</h1>
        <input
          type="text"
          placeholder="Type your question and let's find a solution"
        />
        <div className="background-text left">EXPLORIA</div>
        <div className="background-text center">EXPLORIA</div>
        <div className="background-text right">EXPLORIA</div>
      </div>

      {/* Queries Section */}
      <div className="content">
        <h2>Customer Related Queries</h2>
        <div className="grid">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div key={index} className="card">
                <h3>How to book a tour on the site.</h3>
                <p>
                  Visit the homepage of the website and enter the activity you
                  are looking for in the search{" "}
                  <span className="read-more">Read More...</span>
                </p>
              </div>
            ))}
        </div>

        {/* Ticket Card */}
        <div className="ticket-card" onClick={openPopup}>
          <div className="ticket-container">
            <img
              src={ticketiconIcon}
              alt="Submit a Ticket Icon"
              className="ticket-icon"
            />
            <div className="ticket-text">
              <h3>Submit a Ticket</h3>
              <p>Need help? Submit a support ticket, and our team will assist you as soon as possible.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-Up Menu */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-header">
              <h3>Submit a Ticket</h3>
              <button className="close-btn" onClick={closePopup}>
                &#x2716;
              </button>
            </div>
            <p>
              Submit a support ticket, <br></br>and our team will assist you as soon as
              possible.
            </p>

            {/* Form */}
            <form>
              <select className="popup-select">
                <option>Select The Booking</option>
                <option>Booking 1</option>
                <option>Booking 2</option>
              </select>
              <select className="popup-select">
                <option>Select The Issue Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
              <select className="popup-select">
                <option>Select The Specific Reason</option>
                <option>Reason 1</option>
                <option>Reason 2</option>
              </select>
              <textarea
                className="popup-textarea"
                placeholder="Add Comment..."
              ></textarea>
                <div className="upload-section">
                   <input
                      type="file"
                      id="upload"
                      hidden
                      multiple
                      accept="image/*"
                      />
                    <label htmlFor="upload" className="upload-box">
                  <span className="upload-icon">⬆️</span>
                  <span className="upload-text">Upload Images</span>
                  </label>
              </div>
              <button type="submit" className="popup-submit-btn">
                Submit Ticket

              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
