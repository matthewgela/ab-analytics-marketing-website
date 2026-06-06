"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { isWebGLSupported } from "@/lib/webgl";

const GravityFieldR3F = dynamic(() => import("./GravityFieldR3F"), {
  ssr: false,
});

const AntiGravityField = dynamic(() => import("./AntiGravityField"), {
  ssr: false,
});

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function PageBackdrop() {
  const reduced = useReducedMotion();
  const webglSupported = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="page-grid-overlay grid-bg absolute inset-0" />

      {!reduced &&
        (webglSupported ? (
          <GravityFieldR3F interactive />
        ) : (
          <AntiGravityField interactive />
        ))}
    </div>
  );
}
