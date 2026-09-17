"use client";

import React from "react";
import { RetroButton } from "@/components/8bit/RetroButton";
import { AlertTriangle, Play, ArrowRight } from "lucide-react";

interface InitialStateProps {
  onStart: () => void;
  onSkip: () => void;
}

export function InitialState({ onStart, onSkip }: InitialStateProps) {
  return (
    <div className="space-y-4 animate-fade-in text-left">
      {/* Title & Subtitle */}
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold font-sans tracking-tight text-white flex items-center gap-2">
            <span className="text-emerald-400 font-pixel text-xs">&gt;</span>
            <span>DEBUG THE BUILD</span>
          </h3>
          <span className="font-pixel text-[9px] uppercase tracking-wider text-emerald-400/90 bg-emerald-950/40 px-2 py-0.5 border border-emerald-800/60 shadow-[1px_1px_0px_#000]">
            ~20s mini challenge
          </span>
        </div>
        <p className="text-xs text-zinc-400 font-mono">
          A quick debugging challenge for sharp minds
        </p>
      </div>

      {/* Incident Alert Panel */}
      <div className="bg-[#140b0e] border-2 border-rose-500/70 p-3.5 shadow-[3px_3px_0px_0px_#000000] relative overflow-hidden">
        <div className="flex items-start gap-2.5">
          <div className="p-1 bg-rose-950/80 border border-rose-600/60 text-rose-400 shrink-0">
            <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />
          </div>
          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[10px] text-rose-400 uppercase tracking-wide">
                ⚠ Production Build Failed
              </span>
            </div>
            <p className="font-mono text-xs text-rose-200/95 font-medium">
              Error: DATABASE_URL undefined
            </p>
            <p className="text-xs text-zinc-300 font-sans">
              Can you fix production?
            </p>
          </div>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <RetroButton
          type="button"
          onClick={onStart}
          variant="primary"
          size="md"
          className="w-full sm:w-auto"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>START DEBUGGING</span>
        </RetroButton>

        <button
          type="button"
          onClick={onSkip}
          className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors inline-flex items-center justify-center sm:justify-start gap-1 py-1 cursor-pointer"
        >
          <span>Skip to Projects</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
