import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./viewallimages.css";

const allImages = [
    "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1661962769667-a159071a31cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1628859017536-c2f1d69f3c84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1606036858743-c106b6ffbff6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGR1YmFpfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661947673080-a2bb1f4d328a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1462007895615-c8c073bebcd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1531586024505-b040066c2d5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1615747476328-41153cf6da54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1591609073408-f3d66d8fc11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1504326787394-e6d75cae8027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1611577810610-642f8ac05c32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1588408687414-434a389defac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1582120042072-d01e2fc8f3ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1603783032802-460a687c4eef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGR1YmFpfGVufDB8fDB8fHww",
  ];
  
  const activities = [
    
    "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1606036858743-c106b6ffbff6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGR1YmFpJTIwYWN0aXZpdGllc3xlbnwwfHwwfHx8MA%3D%3D",
  ];
  
  const destinations = [
    
    "https://images.unsplash.com/photo-1531586024505-b040066c2d5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1615747476328-41153cf6da54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1591609073408-f3d66d8fc11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1504326787394-e6d75cae8027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1611577810610-642f8ac05c32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGR1YmFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1462007895615-c8c073bebcd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGR1YmFpfGVufDB8fDB8fHww",
  ];
  
  const stay = [

    "https://plus.unsplash.com/premium_photo-1661922394835-1defffc9524d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWklMjBob3RlbHN8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1661962360690-e91cc0df88f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHViYWklMjBob3RlbHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1664607069803-96e9d885050e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHViYWklMjBob3RlbHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1717276657665-3e467a9129ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1YmFpJTIwaG90ZWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/flagged/photo-1585730505390-5523c283675e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGR1YmFpJTIwaG90ZWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1524234599372-a5bd0194758d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGR1YmFpJTIwaG90ZWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1554289087-51d078c78d8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGR1YmFpJTIwaG90ZWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1589695021834-9f2413573b28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGR1YmFpJTIwaG90ZWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGR1YmFpJTIwaG90ZWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1629707669424-c3980d79b0fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGR1YmFpJTIwaG90ZWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1714300339419-8377c31205de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1700860838212-10c44393f9e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  ];
  

  const ViewAllImages = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("All Images");
  
    const tabs = ["All Images", "Destination", "Activities", "Stay"];
    const imagesMap = {
      "All Images": allImages,
      Activities: activities,
      Destination: destinations,
      Stay: stay,
    };
  
    return (
      <div className="viewall-container">
        {/* Back Button */}
        <div className="back-button-container" onClick={() => navigate(-1)}>
        <IoArrowBack className="back-icon" />
         <span className="back-text">Back</span>
        </div>

        {/* Tabs Section */}
        <div className="tabs">
          {tabs.map((tab) => (
            <span
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
  
        
  
        {/* Image Grid */}
        <div className="image-grid">
          {imagesMap[activeTab].map((src, index) => (
            <div key={index} className="image-box">
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ViewAllImages;
