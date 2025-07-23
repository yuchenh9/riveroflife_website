import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./ImageGallery.css";

function ImageGallery({ images = [], width = "100%", height = "auto" }) {
  const [state, setState] = useState({ current: 0, prev: 0, direction: 1, transitioning: false });
  const timeoutRef = useRef(null);
  const transitionDuration = 600;

  useEffect(() => {
    if (state.transitioning || images.length === 0) return;
    timeoutRef.current = setTimeout(() => {
      slideTo((state.current + 1) % images.length, 1);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [state, images.length]);

  useEffect(() => {
    if (!state.transitioning) return;
    const timer = setTimeout(() => {
      setState(s => ({ ...s, transitioning: false }));
    }, transitionDuration);
    return () => clearTimeout(timer);
  }, [state.transitioning]);

  function slideTo(idx, dir) {
    if (state.transitioning || idx === state.current || images.length === 0) return;
    setState(s => ({ current: idx, prev: s.current, direction: dir, transitioning: true }));
    clearTimeout(timeoutRef.current);
  }

  function goLeft() {
    slideTo(state.current === 0 ? images.length - 1 : state.current - 1, -1);
  }
  function goRight() {
    slideTo((state.current + 1) % images.length, 1);
  }

  if (images.length === 0) return null;

  return (
    <div className="gallery-container" style={{ width, height, maxWidth: "100%", margin: "0 auto" }}>
      <button className="gallery-btn left" onClick={goLeft} disabled={state.transitioning}>&lt;</button>
      <div className="gallery-slider" style={{ width: "100%", height: "100%" }}>
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
              style={{ width: "100%", height: height === "auto" ? "auto" : "100%" }}
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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ImageGallery; 