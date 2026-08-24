"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

export type EventImage = {
  src: string;
  alt: string;
  caption?: string;
};

export default function EventGallery({ images }: { images: EventImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Ensure portal target is available (SSR-safe)
  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, [images.length]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex, closeModal, showNext, showPrev]);

  if (!images || images.length === 0) return null;

  const modal = selectedIndex !== null && images[selectedIndex] && (
    <div
      className="cx-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Event Photos Showcase Modal"
      onClick={closeModal}
    >
      <div
        className="cx-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="cx-modal-header">
          <div className="cx-modal-title-wrap">
            <span className="cx-modal-badge">
              <i className="bi bi-star-fill" aria-hidden="true" />
              Official Sponsor
            </span>
            <h3 className="cx-modal-title">Odoo Partner Event 2025</h3>
            <span className="cx-modal-location">
              <i className="bi bi-geo-alt-fill" aria-hidden="true" />
              Radisson Blu, Chittagong · January 2025
            </span>
          </div>

          <div className="cx-modal-actions">
            <span className="cx-modal-counter">
              {selectedIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              className="cx-modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Main Image Showcase */}
        <div className="cx-modal-showcase">
          {images.length > 1 && (
            <button
              type="button"
              className="cx-modal-nav cx-modal-nav--prev"
              onClick={showPrev}
              aria-label="Previous image"
            >
              <i className="bi bi-chevron-left" aria-hidden="true" />
            </button>
          )}

          <div className="cx-modal-img-frame">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="cx-modal-img"
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              className="cx-modal-nav cx-modal-nav--next"
              onClick={showNext}
              aria-label="Next image"
            >
              <i className="bi bi-chevron-right" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Modal Footer: Caption + Thumbnails */}
        <div className="cx-modal-footer">
          <p className="cx-modal-caption">
            {images[selectedIndex].caption || images[selectedIndex].alt}
          </p>

          <div className="cx-modal-thumbs">
            {images.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                className={`cx-modal-thumb-btn ${idx === selectedIndex ? "is-active" : ""}`}
                onClick={() => setSelectedIndex(idx)}
                aria-label={`View photo ${idx + 1}`}
              >
                <img src={img.src} alt={img.alt} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ── Event Grid on Page ── */}
      <div className="cx-event-gallery">
        {/* Main large photo */}
        {images[0] && (
          <button
            type="button"
            className="cx-event-photo cx-event-photo--main cx-event-photo--btn"
            onClick={() => setSelectedIndex(0)}
            aria-label={`Open photo modal: ${images[0].alt}`}
          >
            <img src={images[0].src} alt={images[0].alt} loading="lazy" />
            <span className="cx-event-photo-overlay">
              <i className="bi bi-arrows-fullscreen" aria-hidden="true" />
              <span>Click to open gallery</span>
            </span>
          </button>
        )}

        {/* Remaining photos row */}
        {images.length > 1 && (
          <div className="cx-event-photo-row">
            {images.slice(1).map((img, idx) => {
              const actualIndex = idx + 1;
              return (
                <button
                  key={img.src}
                  type="button"
                  className="cx-event-photo cx-event-photo--btn"
                  onClick={() => setSelectedIndex(actualIndex)}
                  aria-label={`Open photo modal: ${img.alt}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <span className="cx-event-photo-overlay">
                    <i className="bi bi-arrows-fullscreen" aria-hidden="true" />
                    <span>View photo</span>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Modal rendered via portal directly into body — escapes stacking context ── */}
      {mounted && modal && createPortal(modal, document.body)}
    </>
  );
}
