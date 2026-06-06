"use client";

/**
 * Hero-local scrims for headline readability.
 * The particle network lives in PageBackdrop (single canvas, site-wide).
 */
export default function HeroField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="hero-scrim-horizontal absolute inset-0" />
      <div className="hero-scrim-vertical absolute inset-0" />
    </div>
  );
}
