"use client";

import React, { useState } from "react";
import { Terminal, Settings, Trash2, Package, AlertTriangle, CheckCircle2 } from "lucide-react";

interface StageTwoProps {
  onSuccess: () => void;
}

export function StageTwo({ onSuccess }: StageTwoProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice);

    if (choice === "env") {
      setIsSuccess(true);
      setFeedback("✓ Environment variable loaded. Preparing deployment pipeline...");
      setTimeout(() => {
        onSuccess();
      }, 700);
    } else if (choice === "delete") {
      setIsSuccess(false);
      setFeedback("⚠ Definitely not.\nDeleting production data will not fix a missing environment variable.");
    } else if (choice === "npm") {
      setIsSuccess(false);
      setFeedback("Packages already installed.\nThe issue is configuration, not dependencies. Classic.");
    }
  };

  return (
    <div className="space-y-3.5 animate-fade-in text-left">
      {/* Stage Header */}
      <div className="bg-[#111524] border border-[#232b45] p-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-mono text-xs text-cyan-300 font-medium">
            STAGE 2: LOG INSPECTION &amp; ROOT CAUSE
          </span>
        </div>
        <span className="font-pixel text-[9px] text-zinc-400">STEP 2/3</span>
      </div>

      {/* Terminal Log Output Window */}
      <div className="bg-[#080a10] border-2 border-[#1c2236] p-3 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] font-mono text-xs space-y-1 overflow-x-auto">
        <div className="flex items-center justify-between text-[10px] text-zinc-500 border-b border-[#181d2e] pb-1.5 mb-1.5 font-pixel">
          <span>{"// LOG OUTPUT: build-stream.log"}</span>
          <span className="text-rose-400 animate-pulse">● FAILED</span>
        </div>
        <div className="text-zinc-400">
          <span className="text-cyan-400 font-semibold">[INFO]</span> Booting production build...
        </div>
        <div className="text-zinc-400">
          <span className="text-cyan-400 font-semibold">[INFO]</span> ENVIRONMENT: production
        </div>
        <div className="text-zinc-400">
          <span className="text-cyan-400 font-semibold">[INFO]</span> Connecting to database...
        </div>
        <div className="text-rose-400 font-medium">
          <span className="text-rose-500 font-bold">[ERROR]</span> DATABASE_URL = undefined
        </div>
        <div className="text-rose-400 font-medium">
          <span className="text-rose-500 font-bold">[ERROR]</span> Database connection failed
        </div>
        <div className="text-rose-400 font-medium">
          <span className="text-rose-500 font-bold">[ERROR]</span> Build blocked
        </div>
      </div>

      {/* Question Prompt */}
      <div className="space-y-0.5">
        <p className="font-mono text-xs text-emerald-400 font-medium">
          Root cause detected.
        </p>
        <h4 className="text-sm font-bold text-white font-sans">
          Choose the fix:
        </h4>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <button
          type="button"
          onClick={() => handleChoice("env")}
          disabled={isSuccess}
          className={`px-3 py-2.5 font-pixel text-[10px] sm:text-[11px] uppercase tracking-wide border-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-default ${
            selectedChoice === "env" && isSuccess
              ? "bg-emerald-500 text-zinc-950 border-emerald-300 shadow-[3px_3px_0px_0px_#064e3b]"
              : "bg-[#141828] hover:bg-[#1a2136] text-zinc-200 border-[#2b3552] shadow-[3px_3px_0px_0px_#000000] hover:border-emerald-500/70 active:translate-y-0.5"
          }`}
        >
          <Settings className="w-3.5 h-3.5 text-emerald-400" />
          <span>Configure ENV</span>
        </button>

        <button
          type="button"
          onClick={() => handleChoice("delete")}
          disabled={isSuccess}
          className={`px-3 py-2.5 font-pixel text-[10px] sm:text-[11px] uppercase tracking-wide border-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-default ${
            selectedChoice === "delete"
              ? "bg-rose-950/70 text-rose-200 border-rose-500 shadow-[3px_3px_0px_0px_#881337]"
              : "bg-[#141828] hover:bg-[#1a2136] text-zinc-200 border-[#2b3552] shadow-[3px_3px_0px_0px_#000000] hover:border-rose-500/70 active:translate-y-0.5"
          }`}
        >
          <Trash2 className="w-3.5 h-3.5 text-rose-400" />
          <span>Delete Database</span>
        </button>

        <button
          type="button"
          onClick={() => handleChoice("npm")}
          disabled={isSuccess}
          className={`px-3 py-2.5 font-pixel text-[10px] sm:text-[11px] uppercase tracking-wide border-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-default ${
            selectedChoice === "npm"
              ? "bg-amber-950/70 text-amber-200 border-amber-500 shadow-[3px_3px_0px_0px_#78350f]"
              : "bg-[#141828] hover:bg-[#1a2136] text-zinc-200 border-[#2b3552] shadow-[3px_3px_0px_0px_#000000] hover:border-amber-500/70 active:translate-y-0.5"
          }`}
        >
          <Package className="w-3.5 h-3.5 text-amber-400" />
          <span>npm install again</span>
        </button>
      </div>

      {/* Feedback Message */}
      {feedback && (
        <div
          role="status"
          aria-live="polite"
          className={`p-3 border-2 text-xs transition-all shadow-[2px_2px_0px_#000] flex items-start gap-2.5 ${
            isSuccess
              ? "bg-emerald-950/70 border-emerald-500 text-emerald-200"
              : "bg-rose-950/70 border-rose-500 text-rose-200"
          }`}
        >
          {isSuccess ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          )}
          <div className="font-mono whitespace-pre-line leading-relaxed">
            {feedback}
          </div>
        </div>
      )}
    </div>
  );
}
