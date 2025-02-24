import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingPage.css";

const BookingPage = ({ packageDetails }) => {
  // Ensure packageDetails is defined before accessing its properties
  const initialBookingDetails = {
    fullName: "",
    email: "",
    phoneNumber: "",
    numberOfAdults: "",
    numberOfChildren: "",
    tourName: packageDetails?.tourName || "",
    destination: packageDetails?.destination || "",
    startDate: new Date(),
    endDate: new Date(),
    price: packageDetails?.price || 0,
    discount: packageDetails?.discount || 0,
    totalPrice: (packageDetails?.price || 0) - (packageDetails?.discount || 0),
    paymentMethod: "",
    cardDetails: {
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      cardHolder: "",
    },
    upiID: "",
  };

  const [bookingDetails, setBookingDetails] = useState(initialBookingDetails);

  useEffect(() => {
    // Update state when packageDetails changes
    setBookingDetails(initialBookingDetails);
  }, [packageDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, email, phoneNumber, numberOfAdults, tourName, destination, totalPrice, paymentMethod } = bookingDetails;

    if (!fullName || !email || !phoneNumber || !numberOfAdults || !tourName || !destination || !totalPrice || !paymentMethod) {
      alert("Please fill in all required fields.");
      return false;
    }
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
      alert("Full Name should contain only letters.");
      return false;
    }
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      alert("Enter a valid 10-digit phone number.");
      return false;
    }
    if (numberOfAdults < 1) {
      alert("At least one adult traveler is required.");
      return false;
    }
    return true;
  };

  const handlePaymentMethodChange = (e) => {
    setBookingDetails({ ...bookingDetails, paymentMethod: e.target.value });
  
    // Hide OTP section when changing the payment method
    setShowOTP(false);
  };

 
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");

  

  const handleCardDetailsChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      cardDetails: {
        ...bookingDetails.cardDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleConfirm = () => {
    setShowOTP(true); // Show OTP input after clicking Confirm
  };

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOTPSubmit = () => {
    alert(`OTP Submitted: ${otp}`);
  };
  const handleUPIChange = (e) => {
    setBookingDetails({ ...bookingDetails, upiID: e.target.value });
  };

  const submitBooking = () => {
    if (validateForm()) {
      console.log("Booking Submitted", bookingDetails);
      alert("Payment Successful!");
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Your Tour</h1>

     <div className="book"> <h4>Traveler Information</h4> </div>
      <label>Full Name</label>
      <input type="text" name="fullName" value={bookingDetails.fullName} onChange={handleInputChange} required />
      <label>Email</label>
      <input type="email" name="email" value={bookingDetails.email} onChange={handleInputChange} required />
      <label>Phone Number</label>
      <input type="text" name="phoneNumber" value={bookingDetails.phoneNumber} onChange={handleInputChange} required />
      <label>Number of Adults</label>
      <input type="number" name="numberOfAdults" value={bookingDetails.numberOfAdults} onChange={handleInputChange} min="1" required />
      <label>Number of Children</label>
      <input type="number" name="numberOfChildren" value={bookingDetails.numberOfChildren} onChange={handleInputChange} min="0" />

      <div className="book">  <h4>Tour Details</h4> </div>
      <label>Tour Name</label>
      <input type="text" name="tourName" value={bookingDetails.tourName} onChange={handleInputChange} required />
      <label>Destination</label>
      <input type="text" name="destination" value={bookingDetails.destination} onChange={handleInputChange} required />
      <label>Start Date</label>
      <DatePicker selected={bookingDetails.startDate} onChange={(date) => setBookingDetails({ ...bookingDetails, startDate: date })} dateFormat="dd-MM-yyyy" className="date-picker" />
      <label>End Date</label>
      <DatePicker selected={bookingDetails.endDate} onChange={(date) => setBookingDetails({ ...bookingDetails, endDate: date })} dateFormat="dd-MM-yyyy" className="date-picker" />

      <div className="book">  <h4>Pricing </h4> </div>
      <p>Price: ₹{bookingDetails.price}</p>
      <p>Discount: ₹{bookingDetails.discount}</p>
      <p>Total Price: ₹{bookingDetails.totalPrice}</p>

      <div className="book">  <h4>Payment</h4> </div>
      <label>Payment Method</label>
      <select name="paymentMethod" value={bookingDetails.paymentMethod} onChange={handlePaymentMethodChange}>
        <option value="">Select Payment Method</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="UPI">UPI</option>
      </select>

        {/* Credit/Debit Card Payment Form */}
{/* Show Card Form Only if Payment Method is Credit or Debit Card and OTP is not displayed */}
{(bookingDetails.paymentMethod === "Credit Card" || bookingDetails.paymentMethod === "Debit Card") && !showOTP && (
  <div className="card-container">
    <label>Card Holder Name</label>
    <input type="text" name="cardHolder" value={bookingDetails.cardDetails.cardHolder} onChange={handleCardDetailsChange} />

    <label>Card Number</label>
    <input type="text" name="cardNumber" value={bookingDetails.cardDetails.cardNumber} onChange={handleCardDetailsChange} />

    <label>Expiry Date</label>
    <div className="card-expiry">
      <select name="expiryMonth" value={bookingDetails.cardDetails.expiryMonth} onChange={handleCardDetailsChange}>
        <option value="">Month</option>
        {[...Array(12).keys()].map((m) => (
          <option key={m + 1} value={m + 1}>{m + 1}</option>
        ))}
      </select>
      <select name="expiryYear" value={bookingDetails.cardDetails.expiryYear} onChange={handleCardDetailsChange}>
        <option value="">Year</option>
        {[...Array(10).keys()].map((y) => (
          <option key={y} value={2024 + y}>{2024 + y}</option>
        ))}
      </select>
    </div>

    <label>CVV</label>
    <input type="text" name="cvv" value={bookingDetails.cardDetails.cvv} onChange={handleCardDetailsChange} />

    <div className="card-icons">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/120px-Visa.svg.png" alt="Visa" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/120px-Mastercard-logo.svg.png" alt="MasterCard" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/120px-American_Express_logo.svg.png" alt="Amex" />
    </div>

    <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
  </div>
)}

{/* Show OTP Section After Clicking Confirm */}
{showOTP && (
  <div className="otp-container">
    <img src="https://img.freepik.com/premium-vector/unlock-password-correct-success-login-concept-vector-illustration-flat-design_662353-282.jpg?semt=ais_hybrid" alt="OTP" className="otp-icon" />
    <h3>Authorization transaction code</h3>
    <p>We sent a 6-digit OTP to 01***0000</p>

    <div className="ot-input-container">
      <input type="text" className="otp-input" placeholder="OTP" value={otp} onChange={handleOTPChange} />
      <button className="resend-btn">Resend</button>
    </div>

    <button className="continue-btn" onClick={handleOTPSubmit}>Continue</button>
    <p className="not-now">Not now</p>
  </div>
)}


      {/* UPI Payment Form */}
      {bookingDetails.paymentMethod === "UPI" && (
      <div className="upi-container">
    
    <label>Select your UPI app</label>
    <div className="upi-dropdown-container">
      <select name="upiApp" className="upi-dropdown">
          <option value="" >Select UPI App</option>
        <option value="Google Pay">🟡 Google Pay</option>
        <option value="PhonePe">🟣 PhonePe</option>
        <option value="Paytm">🔵 Paytm</option>
        <option value="BHIM">🟢 BHIM</option>
      </select>
    </div>

    <label>Enter your UPI ID </label>
    <div className="upi-input-container">
      <input type="text" name="upiID" className="upi-input" value={bookingDetails.upiID} onChange={handleUPIChange} />
      <div className="upi-suffix-dropdown">
    <select >
        <option value="@okicici">@okicici</option>
        <option value="@oksbi">@oksbi</option>
        <option value="@okhdfc">@okhdfc</option>
        <option value="@okaxis">@okaxis</option>
        <option value="@okicici">@okicici</option>
      </select>
    </div>
    </div>
    

    <button className="upi-confirm-btn" onClick={() => alert("Redirecting to UPI app for payment...")}>
      VERIFY & PAY
    </button>
  </div>
)}

      <div className="buttons">
        <button className="add-btn" onClick={submitBooking}>Book Now</button>
      </div>
    </div>
  );
};

export default BookingPage;