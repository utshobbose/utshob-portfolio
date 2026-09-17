"use client";

import React, { useState } from "react";
import { AlertTriangle, Terminal, RefreshCw, Globe, CheckCircle2 } from "lucide-react";

interface StageOneProps {
  onSuccess: () => void;
}

export function StageOne({ onSuccess }: StageOneProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice);

    if (choice === "logs") {
      setIsSuccess(true);
      setFeedback("✓ Good call. Always inspect before guessing.");
      setTimeout(() => {
        onSuccess();
      }, 700);
    } else if (choice === "restart") {
      setIsSuccess(false);
      setFeedback("↻ Server restarted...\nError still exists: DATABASE_URL undefined.\nTry again.");
    } else if (choice === "dns") {
      setIsSuccess(false);
      setFeedback("DNS has been blamed.\nUnfortunately, DNS is innocent this time.\nTry again.");
    }
  };

  return (
    <div className="space-y-4 animate-fade-in text-left">
      {/* Incident Header Status */}
      <div className="bg-[#111524] border border-[#232b45] p-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono text-xs text-amber-300 font-medium">
            STAGE 1: TRIAGE INCIDENT
          </span>
        </div>
        <span className="font-pixel text-[9px] text-zinc-400">STEP 1/3</span>
      </div>

      {/* Question Context */}
      <div className="space-y-1">
        <p className="font-mono text-xs text-rose-300">
          ⚠ Production Build Failed — Error: DATABASE_URL undefined
        </p>
        <h4 className="text-sm sm:text-base font-bold text-white font-sans">
          What would you do first?
        </h4>
      </div>

      {/* Choice Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
        <button
          type="button"
          onClick={() => handleChoice("logs")}
          disabled={isSuccess}
          className={`px-3 py-2.5 font-pixel text-[10px] sm:text-[11px] uppercase tracking-wide border-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-default ${
            selectedChoice === "logs" && isSuccess
              ? "bg-emerald-500 text-zinc-950 border-emerald-300 shadow-[3px_3px_0px_0px_#064e3b]"
              : "bg-[#141828] hover:bg-[#1a2136] text-zinc-200 border-[#2b3552] shadow-[3px_3px_0px_0px_#000000] hover:border-emerald-500/70 active:translate-y-0.5"
          }`}
        >
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>Inspect Logs</span>
        </button>

        <button
          type="button"
          onClick={() => handleChoice("restart")}
          disabled={isSuccess}
          className={`px-3 py-2.5 font-pixel text-[10px] sm:text-[11px] uppercase tracking-wide border-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-default ${
            selectedChoice === "restart"
              ? "bg-amber-950/70 text-amber-200 border-amber-500 shadow-[3px_3px_0px_0px_#78350f]"
              : "bg-[#141828] hover:bg-[#1a2136] text-zinc-200 border-[#2b3552] shadow-[3px_3px_0px_0px_#000000] hover:border-amber-500/70 active:translate-y-0.5"
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
          <span>Restart Server</span>
        </button>

        <button
          type="button"
          onClick={() => handleChoice("dns")}
          disabled={isSuccess}
          className={`px-3 py-2.5 font-pixel text-[10px] sm:text-[11px] uppercase tracking-wide border-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-default ${
            selectedChoice === "dns"
              ? "bg-amber-950/70 text-amber-200 border-amber-500 shadow-[3px_3px_0px_0px_#78350f]"
              : "bg-[#141828] hover:bg-[#1a2136] text-zinc-200 border-[#2b3552] shadow-[3px_3px_0px_0px_#000000] hover:border-cyan-500/70 active:translate-y-0.5"
          }`}
        >
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>Blame DNS</span>
        </button>
      </div>

      {/* Feedback Message Alert */}
      {feedback && (
        <div
          role="status"
          aria-live="polite"
          className={`p-3 border-2 text-xs transition-all shadow-[2px_2px_0px_#000] flex items-start gap-2.5 ${
            isSuccess
              ? "bg-emerald-950/70 border-emerald-500 text-emerald-200"
              : "bg-amber-950/70 border-amber-500 text-amber-200"
          }`}
        >
          {isSuccess ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          )}
          <div className="font-mono whitespace-pre-line leading-relaxed">
            {feedback}
          </div>
        </div>
      )}
    </div>
  );
}
