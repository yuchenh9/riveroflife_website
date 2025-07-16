import React, { useState, useEffect, useRef } from "react";
import "./ImageGallery.css";

const images = [
  process.env.PUBLIC_URL + "/images copy/20190602-151619_orig-e1744838455976.webp",
  process.env.PUBLIC_URL + "/images copy/Fellowship-1-e1744837949133.webp"
];

function ImageGallery() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goLeft = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goRight = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="gallery-container">
      <button className="gallery-btn left" onClick={goLeft}>&lt;</button>
      <img src={images[current]} alt={`Slide ${current + 1}`} className="gallery-image" />
      <button className="gallery-btn right" onClick={goRight}>&gt;</button>
      <div className="gallery-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`gallery-dot${current === idx ? " active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery; 