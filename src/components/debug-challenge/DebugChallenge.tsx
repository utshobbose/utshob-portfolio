"use client";

import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  FileText,
  RefreshCw,
  Globe,
  Terminal,
  Trash2,
  Package,
  Check,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export function SpaceInvaderIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d="M5 2h6v1H5zM4 3h8v1H4zM3 4h10v1H3zM3 5h2v1H3zm3 0h4v1H6zm5 0h2v1h-2zM2 6h12v1H2zm1 1h2v1H3zm8 0h2v1h-2zM2 8h1v3H2zm11 0h1v3h-1zM4 9h1v2H4zm7 0h1v2h-1zM5 11h2v1H5zm4 0h2v1H9zM3 13h2v1H3zm8 0h2v1h-2z" />
    </svg>
  );
}

export function RetroBotIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d="M7 1h2v2H7zM4 3h8v1H4zM3 4h10v6H3zm-2 2h2v3H1zm13 0h2v3h-2zM5 6h2v2H5zm4 0h2v2H9zm-2 3h2v1H7zM5 11h6v1H5zM4 12h2v3H4zm6 0h2v3h-2z" />
    </svg>
  );
}

interface DebugChallengeProps {
  className?: string;
}

export function DebugChallenge({ className = "" }: DebugChallengeProps) {
  // Step state: 1 = First Decision, 2 = Log Inspection, 3 = Deploying, 4 = Success
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [stage1Choice, setStage1Choice] = useState<string | null>(null);
  const [stage1Feedback, setStage1Feedback] = useState<string | null>(null);

  const [stage2Choice, setStage2Choice] = useState<string | null>(null);
  const [stage2Feedback, setStage2Feedback] = useState<string | null>(null);

  const [deployProgress, setDeployProgress] = useState(0);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Deployment animation
  useEffect(() => {
    if (step === 3) {
      const duration = 2400;
      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min(100, Math.round((elapsed / duration) * 100));
        setDeployProgress(pct);

        if (elapsed >= duration) {
          clearInterval(timer);
          setTimeout(() => {
            setStep(4);
          }, 300);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [step]);

  const handleStage1 = (choice: "logs" | "restart" | "dns") => {
    setStage1Choice(choice);
    if (choice === "logs") {
      setStage1Feedback(null);
      setStep(2);
    } else if (choice === "restart") {
      setStage1Feedback("↻ Server restarted... Error persists: DATABASE_URL undefined. Try again.");
    } else if (choice === "dns") {
      setStage1Feedback("DNS blamed. Unfortunately, DNS is innocent this time. Try again.");
    }
  };

  const handleStage2 = (choice: "env" | "delete" | "npm") => {
    setStage2Choice(choice);
    if (choice === "env") {
      setStage2Feedback(null);
      setDeployProgress(10);
      setStep(3);
    } else if (choice === "delete") {
      setStage2Feedback("⚠ Definitely not! Deleting production data will not fix missing config.");
    } else if (choice === "npm") {
      setStage2Feedback("Packages already installed. The issue is configuration, not dependencies. Classic.");
    }
  };

  const handleReset = () => {
    setStep(1);
    setStage1Choice(null);
    setStage1Feedback(null);
    setStage2Choice(null);
    setStage2Feedback(null);
    setDeployProgress(0);
  };

  // Block progress representation
  const blockCount = 20;
  const filledBlocks = Math.round((deployProgress / 100) * blockCount);
  const blockString = "█".repeat(filledBlocks) + "░".repeat(blockCount - filledBlocks);

  return (
    <div
      className={`w-full max-w-xl rounded-2xl bg-[#090d16]/95 border border-[#1b253b] backdrop-blur-md shadow-[0_12px_45px_rgba(0,0,0,0.85),0_0_20px_rgba(6,182,212,0.06)] text-zinc-200 transition-all flex flex-col overflow-hidden ${className}`}
    >
      {/* 1. Terminal Window Header Bar */}
      <div className="bg-[#0c1220]/90 px-4 py-2.5 border-b border-[#1b253b] flex items-center justify-between gap-3 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        </div>

        <span className="font-mono text-xs text-zinc-400 tracking-wider">
          RECRUITER_CHALLENGE.exe
        </span>

        <div className="flex items-center gap-2">
          {step === 4 && (
            <button
              onClick={handleReset}
              className="text-[10px] font-mono text-zinc-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
              title="Restart Challenge"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Restart</span>
            </button>
          )}
          <span className="w-3 h-0.5 bg-zinc-600 inline-block" />
        </div>
      </div>

      {/* 2. Challenge Body */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Top Header with Space Invader */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] shrink-0">
              <SpaceInvaderIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-mono tracking-tight text-white flex items-center gap-2">
                <span>DEBUG THE BUILD</span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                A quick challenge for sharp minds
              </p>
            </div>
          </div>

          <div className="text-right font-mono text-[11px] text-zinc-400 shrink-0 hidden sm:block">
            <div>~ 20 sec mini challenge</div>
            <div className="text-zinc-500">Can you fix it?</div>
          </div>
        </div>

        {/* Incident Alert Box */}
        <div className="bg-[#140b10] border border-rose-900/60 rounded-xl p-3 flex items-center gap-3 shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]">
          <div className="p-1.5 bg-rose-950/80 border border-rose-600/60 rounded-lg text-rose-400 shrink-0">
            <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-semibold text-rose-400">
              Production Build Failed
            </div>
            <div className="text-xs font-mono text-rose-200/90 truncate">
              Error: DATABASE_URL undefined
            </div>
          </div>
        </div>

        {/* 3. Stage 1: What would you do? */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-zinc-300 font-medium">
            What would you do?
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleStage1("logs")}
              className={`px-3 py-2 rounded-lg font-mono text-xs border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                stage1Choice === "logs"
                  ? "bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                  : "bg-[#0f1422] hover:bg-[#161e33] border-[#222c44] text-zinc-300 hover:border-zinc-600"
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Inspect Logs</span>
            </button>

            <button
              type="button"
              onClick={() => handleStage1("restart")}
              className={`px-3 py-2 rounded-lg font-mono text-xs border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                stage1Choice === "restart"
                  ? "bg-amber-950/40 border-amber-500 text-amber-300"
                  : "bg-[#0f1422] hover:bg-[#161e33] border-[#222c44] text-zinc-300 hover:border-zinc-600"
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5 text-zinc-400" />
              <span>Restart Server</span>
            </button>

            <button
              type="button"
              onClick={() => handleStage1("dns")}
              className={`px-3 py-2 rounded-lg font-mono text-xs border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                stage1Choice === "dns"
                  ? "bg-amber-950/40 border-amber-500 text-amber-300"
                  : "bg-[#0f1422] hover:bg-[#161e33] border-[#222c44] text-zinc-300 hover:border-zinc-600"
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-zinc-400" />
              <span>Blame DNS</span>
            </button>
          </div>

          {/* Stage 1 Feedback */}
          {stage1Feedback && (
            <div className="p-2 rounded-lg bg-amber-950/30 border border-amber-800/60 text-xs font-mono text-amber-300">
              {stage1Feedback}
            </div>
          )}
        </div>

        {/* 4. Stage 2: LOG OUTPUT & Choose the fix (Unlocked when step >= 2) */}
        {step >= 2 && (
          <div className="space-y-2.5 animate-fade-in pt-1">
            {/* Log Terminal Box */}
            <div className="bg-[#06080e] border border-[#182033] rounded-lg p-3 font-mono text-xs space-y-1">
              <div className="text-[11px] text-zinc-400 font-semibold tracking-wide border-b border-[#141b2b] pb-1 mb-1">
                LOG OUTPUT
              </div>
              <div className="text-zinc-400">
                <span className="text-cyan-400 font-semibold">[INFO]</span> ENVIRONMENT: production
              </div>
              <div className="text-rose-400 font-medium">
                <span className="text-rose-500 font-semibold">[ERROR]</span> DATABASE_URL = undefined
              </div>
              <div className="text-rose-400 font-medium">
                <span className="text-rose-500 font-semibold">[ERROR]</span> STATUS: Build blocked
              </div>
            </div>

            {/* Choose the fix */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-zinc-300 font-medium">
                Choose the fix:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleStage2("env")}
                  disabled={step > 2}
                  className={`px-3 py-2 rounded-lg font-mono text-xs border transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-default ${
                    stage2Choice === "env" || step > 2
                      ? "bg-emerald-950/50 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)] ring-1 ring-emerald-500/50"
                      : "bg-[#0f1422] hover:bg-[#161e33] border-[#222c44] text-zinc-300 hover:border-emerald-600/60"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Configure ENV</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleStage2("delete")}
                  disabled={step > 2}
                  className={`px-3 py-2 rounded-lg font-mono text-xs border transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-default ${
                    stage2Choice === "delete"
                      ? "bg-rose-950/40 border-rose-500 text-rose-300"
                      : "bg-[#0f1422] hover:bg-[#161e33] border-[#222c44] text-zinc-300 hover:border-rose-600/60"
                  }`}
                >
                  <Trash2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Delete Database</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleStage2("npm")}
                  disabled={step > 2}
                  className={`px-3 py-2 rounded-lg font-mono text-xs border transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-default ${
                    stage2Choice === "npm"
                      ? "bg-amber-950/40 border-amber-500 text-amber-300"
                      : "bg-[#0f1422] hover:bg-[#161e33] border-[#222c44] text-zinc-300 hover:border-amber-600/60"
                  }`}
                >
                  <Package className="w-3.5 h-3.5 text-zinc-400" />
                  <span>npm install again</span>
                </button>
              </div>

              {/* Stage 2 Feedback */}
              {stage2Feedback && (
                <div className="p-2 rounded-lg bg-rose-950/30 border border-rose-800/60 text-xs font-mono text-rose-300">
                  {stage2Feedback}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 5. Stage 3 & 4: Deployment & Success */}
        {(step === 3 || step === 4) && (
          <div className="space-y-3 pt-2 border-t border-[#182033] animate-fade-in font-mono">
            {/* Status Checklist */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>Tests passed</span>
              </div>
              <div
                className={`flex items-center gap-1.5 transition-colors ${
                  deployProgress >= 100 || step === 4
                    ? "text-emerald-400"
                    : "text-zinc-500"
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>Deployment successful</span>
              </div>
            </div>

            {/* Glowing Block Progress Bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                <div className="tracking-wider select-none text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] overflow-hidden">
                  {step === 4 ? "████████████████████" : blockString}
                </div>
                <span className="font-bold">
                  {step === 4 ? 100 : deployProgress}%
                </span>
              </div>

              <div className="w-full bg-[#121826] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-400 h-full transition-all duration-75 shadow-[0_0_8px_#10b981]"
                  style={{ width: `${step === 4 ? 100 : deployProgress}%` }}
                />
              </div>
            </div>

            {/* Headline */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
              <span>You saved production</span>
              <span className="inline-block animate-bounce">🚀</span>
            </div>

            {/* Success Bot + Speech Bubble + View Projects Button */}
            {step === 4 && (
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] shrink-0">
                    <RetroBotIcon className="w-8 h-8" />
                  </div>
                  <div className="bg-[#0f1626] border border-[#22304d] rounded-xl px-3 py-1.5 text-[11px] text-zinc-300 font-sans leading-snug">
                    Great debugging!
                    <div className="text-zinc-400">That&apos;s the mindset we need.</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={scrollToProjects}
                  className="bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold font-sans text-xs px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer shrink-0"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
