"use client";

import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface StageThreeDeployProps {
  onComplete: () => void;
}

const DEPLOY_STEPS = [
  { text: "> configuring environment...", delay: 200, isSuccess: false },
  { text: "> DATABASE_URL loaded", delay: 450, isSuccess: false },
  { text: "> validating connection...", delay: 700, isSuccess: false },
  { text: "✓ DATABASE_URL configured", delay: 950, isSuccess: true },
  { text: "> connecting to database...", delay: 1200, isSuccess: false },
  { text: "✓ Connection established", delay: 1450, isSuccess: true },
  { text: "> running tests...", delay: 1700, isSuccess: false },
  { text: "✓ Tests passed", delay: 1950, isSuccess: true },
  { text: "> creating production build...", delay: 2150, isSuccess: false },
  { text: "✓ Build successful", delay: 2350, isSuccess: true },
  { text: "> deploying...", delay: 2500, isSuccess: false },
];

const isReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function StageThreeDeploy({ onComplete }: StageThreeDeployProps) {
  const [visibleStepCount, setVisibleStepCount] = useState(() =>
    isReducedMotion() ? DEPLOY_STEPS.length : 1
  );
  const [progress, setProgress] = useState(() => (isReducedMotion() ? 100 : 5));

  useEffect(() => {
    if (isReducedMotion()) {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }

    const intervalTime = 50; // updates every 50ms over ~2.6s
    const totalDuration = 2600;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPct = Math.min(100, Math.round((elapsed / totalDuration) * 100));
      setProgress(currentPct);

      // Determine visible step count based on elapsed time
      const stepsToShow = DEPLOY_STEPS.filter((s) => s.delay <= elapsed).length;
      setVisibleStepCount(Math.max(1, stepsToShow));

      if (elapsed >= totalDuration) {
        clearInterval(timer);
        setTimeout(onComplete, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Generate retro block progress representation
  const blockCount = 20;
  const filledBlocks = Math.round((progress / 100) * blockCount);
  const retroBlocks = "█".repeat(filledBlocks) + "░".repeat(blockCount - filledBlocks);

  return (
    <div className="space-y-3.5 animate-fade-in text-left font-mono">
      {/* Stage Header */}
      <div className="bg-[#111524] border border-[#232b45] p-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Loader2 className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
          <span className="text-xs text-emerald-300 font-medium font-mono">
            STAGE 3: RE-DEPLOYING TO PRODUCTION
          </span>
        </div>
        <span className="font-pixel text-[9px] text-zinc-400">STEP 3/3</span>
      </div>

      {/* Terminal Stream */}
      <div className="bg-[#080a10] border-2 border-[#1c2236] p-3 text-xs space-y-1 h-[155px] overflow-y-auto shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]">
        {DEPLOY_STEPS.slice(0, visibleStepCount).map((step, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-150 ${
              step.isSuccess ? "text-emerald-400 font-medium" : "text-zinc-400"
            }`}
          >
            {step.text}
          </div>
        ))}
        {progress < 100 && (
          <span className="inline-block w-2 h-3.5 bg-emerald-400 animate-pulse ml-0.5" />
        )}
      </div>

      {/* Progress Bar Display */}
      <div className="space-y-1.5 bg-[#0e121e] border border-[#20273c] p-2.5">
        <div className="flex items-center justify-between text-[11px] font-pixel">
          <span className="text-zinc-400">PIPELINE DEPLOY</span>
          <span className="text-emerald-400">{progress}%</span>
        </div>

        {/* ASCII Block Bar */}
        <div className="text-emerald-400 text-xs tracking-wider overflow-hidden select-none">
          {retroBlocks}
        </div>

        {/* Pixel style solid bar */}
        <div className="w-full bg-[#161a2b] h-2 border border-[#262f4a] overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-75 shadow-[0_0_8px_#10b981]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
