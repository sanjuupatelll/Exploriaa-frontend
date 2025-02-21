import React from "react";
import { useNavigate } from "react-router-dom";

const ViewAllImages = () => {
    const navigate = useNavigate();
  // Sample images (Replace with actual data)
  const images = [
    "https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=1000",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500",
    "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?w=500",
    "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?w=500",
    "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=500",
  ];

  return (
    <div className="view-all-images">
      <h2>All Images</h2>
      <div className="image-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ViewAllImages;
