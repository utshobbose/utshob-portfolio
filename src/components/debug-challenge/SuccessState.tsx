"use client";

import React from "react";
import { CheckCircle2, RotateCcw, ArrowRight } from "lucide-react";
import { RetroButton } from "@/components/8bit/RetroButton";

interface SuccessStateProps {
  onPlayAgain: () => void;
  onViewProjects: () => void;
}

export function SuccessState({ onPlayAgain, onViewProjects }: SuccessStateProps) {
  return (
    <div className="space-y-4 animate-fade-in text-left">
      {/* Status Badges & Checks */}
      <div className="bg-[#0b1216] border-2 border-emerald-500/80 p-3.5 shadow-[3px_3px_0px_0px_#064e3b] space-y-2.5">
        <div className="flex items-center justify-between border-b border-emerald-900/60 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 inline-block shadow-[0_0_8px_#10b981]" />
            <span className="font-pixel text-[10px] text-emerald-300 uppercase tracking-wider">
              PRODUCTION STATUS: ONLINE
            </span>
          </div>
          <span className="font-pixel text-[9px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 border border-emerald-700/60">
            100%
          </span>
        </div>

        {/* Verification Checks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs font-mono text-emerald-300/90">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Tests passed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Build successful</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Deploy success</span>
          </div>
        </div>

        {/* Full ASCII Progress Bar */}
        <div className="font-mono text-emerald-400 text-xs tracking-wider select-none pt-0.5">
          ████████████████████ 100%
        </div>
      </div>

      {/* Congratulatory Text */}
      <div className="space-y-1">
        <h4 className="text-base sm:text-lg font-bold font-sans text-white flex items-center gap-2">
          <span>You saved production</span>
          <span className="inline-block animate-bounce">🚀</span>
        </h4>
        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
          Nice debugging. You inspected the issue, identified the root cause, and fixed the actual problem.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <RetroButton
          type="button"
          onClick={onViewProjects}
          variant="primary"
          size="md"
          className="flex-1"
        >
          <span>View Utshob&apos;s Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </RetroButton>

        <RetroButton
          type="button"
          onClick={onPlayAgain}
          variant="secondary"
          size="md"
        >
          <RotateCcw className="w-3.5 h-3.5 text-zinc-400" />
          <span>Play Again</span>
        </RetroButton>
      </div>
    </div>
  );
}
