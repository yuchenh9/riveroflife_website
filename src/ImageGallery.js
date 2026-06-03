import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import useFolderImages from "./hooks/useFolderImages";
import "./ImageGallery.css";

function GalleryLightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose}>
          &times;
        </button>
        <button type="button" className="lightbox-nav lightbox-prev" onClick={onPrev}>
          &#8249;
        </button>
        <img
          src={images[index]}
          alt={`Full size ${index + 1}`}
          className="lightbox-image"
        />
        <button type="button" className="lightbox-nav lightbox-next" onClick={onNext}>
          &#8250;
        </button>
        <div className="lightbox-counter">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

function ImageGalleryStrip({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);
  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  return (
    <>
      <div className="gallery-strip">
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`Gallery image ${index + 1}`}
            className="gallery-strip-thumb"
            onClick={() => setLightboxIndex(index)}
          />
        ))}
      </div>
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}
    </>
  );
}

function ImageGalleryCarousel({ images }) {
  const [state, setState] = useState({ current: 0, prev: 0, direction: 1, transitioning: false });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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
      setState((s) => ({ ...s, transitioning: false }));
    }, transitionDuration);
    return () => clearTimeout(timer);
  }, [state.transitioning]);

  function slideTo(idx, dir) {
    if (state.transitioning || idx === state.current || images.length === 0) return;
    setState((s) => ({ current: idx, prev: s.current, direction: dir, transitioning: true }));
    clearTimeout(timeoutRef.current);
  }

  function goLeft() {
    slideTo(state.current === 0 ? images.length - 1 : state.current - 1, -1);
  }
  function goRight() {
    slideTo((state.current + 1) % images.length, 1);
  }

  function openLightbox(index) {
    setLightboxIndex(index);
    setLightboxOpen(true);
    clearTimeout(timeoutRef.current);
  }

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);
  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  return (
    <div className="gallery-container">
      <div className="gallery-slider-wrapper">
        <button type="button" className="gallery-btn left" onClick={goLeft} disabled={state.transitioning}>
          <span>&lt;</span>
        </button>
        <div className="gallery-slider">
          {images.map((img, idx) => {
            let className = "gallery-image";
            if (idx === state.current) className += " active";
            else if (idx === state.prev) className += state.direction === 1 ? " slide-left" : " slide-right";
            else className += state.direction === 1 ? " slide-right" : " slide-left";
            return (
              <img
                key={img}
                src={img}
                alt={`Slide ${idx + 1}`}
                className={className}
                draggable={false}
                onClick={() => openLightbox(idx)}
                style={{ cursor: "pointer" }}
              />
            );
          })}
        </div>
        <button type="button" className="gallery-btn right" onClick={goRight} disabled={state.transitioning}>
          <span>&gt;</span>
        </button>
      </div>
      <div className="gallery-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`gallery-dot${state.current === idx ? " active" : ""}`}
            onClick={() => slideTo(idx, idx > state.current ? 1 : -1)}
          />
        ))}
      </div>
      {lightboxOpen && (
        <GalleryLightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}
    </div>
  );
}

function ImageGallery({ folder, variant = "carousel", width = "100%", height = "auto" }) {
  const { urls: images, loading, error } = useFolderImages(folder);

  if (loading) {
    return <div style={{ textAlign: "center", padding: 24 }}>加载图片中…</div>;
  }
  if (error) {
    return <div style={{ textAlign: "center", padding: 24, color: "#c00" }}>{error}</div>;
  }
  if (images.length === 0) return null;

  if (variant === "strip") {
    return <ImageGalleryStrip images={images} />;
  }

  return <ImageGalleryCarousel images={images} width={width} height={height} />;
}

ImageGallery.propTypes = {
  folder: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["carousel", "strip"]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ImageGallery;
