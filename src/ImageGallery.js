import React, { useState, useEffect, useRef } from "react";
import "./ImageGallery.css";

const images = [
  process.env.PUBLIC_URL + "/images copy/20190602-151619_orig-e1744838455976.webp",
  process.env.PUBLIC_URL + "/images copy/Fellowship-1-e1744837949133.webp",
];

function ImageGallery() {
  const [state, setState] = useState({ current: 0, prev: 0, direction: 1, transitioning: false });
  const timeoutRef = useRef(null);
  const transitionDuration = 600;

  useEffect(() => {
    if (state.transitioning) return;
    timeoutRef.current = setTimeout(() => {
      slideTo((state.current + 1) % images.length, 1);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [state]);

  useEffect(() => {
    if (!state.transitioning) return;
    const timer = setTimeout(() => {
      setState(s => ({ ...s, transitioning: false }));
    }, transitionDuration);
    return () => clearTimeout(timer);
  }, [state.transitioning]);

  function slideTo(idx, dir) {
    if (state.transitioning || idx === state.current) return;
    setState(s => ({ current: idx, prev: s.current, direction: dir, transitioning: true }));
    clearTimeout(timeoutRef.current);
  }

  function goLeft() {
    slideTo(state.current === 0 ? images.length - 1 : state.current - 1, -1);
  }
  function goRight() {
    slideTo((state.current + 1) % images.length, 1);
  }

  return (
    <div className="gallery-container">
      <button className="gallery-btn left" onClick={goLeft} disabled={state.transitioning}>&lt;</button>
      <div className="gallery-slider">
        {images.map((img, idx) => {
          let className = "gallery-image";
          if (idx === state.current) className += " active";
          else if (idx === state.prev) className += state.direction === 1 ? " slide-left" : " slide-right";
          else className += state.direction === 1 ? " slide-right" : " slide-left";
          return (
            <img
              key={idx}
              src={img}
              alt="Slide"
              className={className}
              draggable={false}
            />
          );
        })}
      </div>
      <button className="gallery-btn right" onClick={goRight} disabled={state.transitioning}>&gt;</button>
      <div className="gallery-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`gallery-dot${state.current === idx ? " active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery; 