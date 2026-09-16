"use client";

import React, { useEffect, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

interface ShaderBackgroundProps {
  className?: string;
  intensity?: "normal" | "subtle";
}

export default function ShaderBackground({
  className = "",
  intensity = "normal",
}: ShaderBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Check prefers-reduced-motion
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionMediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionMediaQuery.addEventListener("change", handleMotionChange);

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }

    return () => {
      motionMediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Static CSS Ambient Gradient Fallback
  const staticFallback = (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Deep dark mesh glow */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(6,182,212,0.15) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[20%] -right-[15%] w-[55vw] h-[55vw] rounded-full blur-[130px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[25%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );

  // If reduced motion is preferred or WebGL is unsupported or not mounted yet
  if (!mounted || prefersReducedMotion || !hasWebGL) {
    return staticFallback;
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-1000 ${
        intensity === "subtle" ? "opacity-40" : "opacity-75"
      } ${className}`}
      aria-hidden="true"
    >
      <ShaderGradientCanvas
        pointerEvents="none"
        pixelDensity={1}
        fov={45}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <ShaderGradient
          control="props"
          type="waterPlane"
          shader="defaults"
          animate="on"
          uSpeed={0.12}
          uStrength={1.4}
          uDensity={1.2}
          uFrequency={5.5}
          uAmplitude={0}
          color1="#07080c"
          color2="#064e3b"
          color3="#0e3a47"
          cDistance={32}
          cAzimuthAngle={180}
          cPolarAngle={90}
          cameraZoom={9.1}
          lightType="3d"
          brightness={0.8}
          envPreset="city"
          grain="on"
          wireframe={false}
        />
      </ShaderGradientCanvas>

      {/* Vignette edge mask to blend seamlessly into dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07080c]/60 via-transparent to-[#07080c] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#07080c_80%)] pointer-events-none opacity-80" />
    </div>
  );
}
