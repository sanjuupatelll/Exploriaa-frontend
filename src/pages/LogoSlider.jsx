import { useEffect, useRef } from "react";
import "./LogoSlider.css";

const logos = [
  "/assets/singaporelogo.svg",
  "/assets/abudhabilogo.svg",
  "/assets/japanlogo.svg",
  "/assets/francelogo.svg",
  "/assets/swedenlogo.svg",
  "/assets/jordanlogo.svg",
];

const LogoSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slide = () => {
      if (slider) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
          slider.scrollTo({ left: 0 });
        } else {
          slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(slide, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-slider-container">
      <h2 className="slider-title">Tourism Board Alliances</h2>
      <div className="logo-slider">
        <div className="logo-track">
          {/* Duplicating the logos for seamless infinite scrolling */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt="Tourism Board Logo" className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;