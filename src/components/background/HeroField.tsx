"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { isWebGLSupported } from "@/lib/webgl";
import AntiGravityField from "./AntiGravityField";

const GravityFieldR3F = dynamic(() => import("./GravityFieldR3F"), {
  ssr: false,
});

function subscribe() {
  return () => {};
}

export default function HeroField() {
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 639px)");
  const webglSupported = useSyncExternalStore(
    subscribe,
    () => isWebGLSupported(),
    () => false,
  );

  const useStaticField = isMobile || reduced;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {useStaticField ? (
        <>
          <div className="hero-field-static absolute inset-0" />
          <div className="grid-bg absolute inset-0 opacity-[0.06] sm:opacity-[0.04]" />
        </>
      ) : webglSupported ? (
        <GravityFieldR3F contained interactive />
      ) : (
        <AntiGravityField contained interactive />
      )}
      <div className="hero-scrim-horizontal absolute inset-0" />
      <div className="hero-scrim-vertical absolute inset-0" />
    </div>
  );
}
