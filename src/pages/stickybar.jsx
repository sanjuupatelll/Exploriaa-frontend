import React, { useRef, useState, useEffect } from "react";
import { Flame, ChevronRight, ChevronLeft } from "lucide-react";
import "./StickyBar.css";

const destinations = [
  { name: "Dubai", trending: true, icon: "/assets/Dubai.svg" },
  { name: "Singapore", trending: false, icon: "/assets/Singapore.svg" },
  { name: "North East India", trending: false, icon: "/assets/NEI.svg" },
  { name: "Thailand", trending: false, icon: "/assets/Thailand.svg" },
  { name: "Kashmir", trending: false, icon: "/assets/Kashmir.svg" },
  { name: "Switzerland", trending: true, icon: "/assets/Switzerland.svg" },
  { name: "Bhutan", trending: false, icon: "/assets/Bhutan.svg" },
  { name: "Japan", trending: false, icon: "/assets/Japan.svg" },
  { name: "Norway", trending: false, icon: "/assets/Norway.svg" },
  { name: "Kerala", trending: false, icon: "/assets/Kerala.svg" },
  { name: "Bali", trending: true, icon: "/assets/Bali.svg" },
  { name: "Rajasthan", trending: false, icon: "/assets/Rajasthan.svg" },
  { name: "Vietnam", trending: false, icon: "/assets/Vietnam.svg" },
  { name: "Ladakh", trending: true, icon: "/assets/Ladakh.svg" },
];

const StickyBar = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 200, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky-bar">
      <div className="sticky-content">
        <div className="explore">
          <Flame className="flame-icon" stroke="#e63946" fill="#e63946" size={30} />
          <span className="explore-text">Explore</span>
          <div className="underline"></div>
        </div>

        {showLeftButton && (
          <button className={`scroll-btn left-btn ${showLeftButton ? "visible" : ""}`} onClick={() => scroll(-1)}>
            <ChevronLeft stroke="black" />
          </button>
        )}

        <div ref={scrollRef} className="scroll-container" onScroll={checkScrollPosition}>
          {destinations.map((item, index) => (
            <div key={index} className="destination">
              <img src={item.icon} alt={item.name} className="destination-image" />
              <span className="destination-name">{item.name}</span>
              {item.trending && <span className="trending">Trending</span>}
            </div>
          ))}
        </div>

        {showRightButton && (
          <button className={`scroll-btn right-btn ${showRightButton ? "visible" : ""}`} onClick={() => scroll(1)}>
            <ChevronRight stroke="black" />
          </button>
        )}
      </div>
    </div>
  );
};


export default StickyBar;