"use client";

import React, { useState } from "react";
import { ChallengeState } from "./types";
import { InitialState } from "./InitialState";
import { StageOne } from "./StageOne";
import { StageTwo } from "./StageTwo";
import { StageThreeDeploy } from "./StageThreeDeploy";
import { SuccessState } from "./SuccessState";

interface DebugChallengeProps {
  className?: string;
}

export function DebugChallenge({ className = "" }: DebugChallengeProps) {
  const [state, setState] = useState<ChallengeState>("idle");

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-full bg-[#0d0f18] border-2 border-[#24293d] shadow-[4px_4px_0px_0px_#000000] text-zinc-200 transition-all flex flex-col ${className}`}
    >
      {/* Terminal Application Header Bar */}
      <div className="bg-[#141826] px-3.5 py-2 border-b-2 border-[#24293d] flex items-center justify-between gap-2 select-none">
        <div className="flex items-center gap-2 min-w-0">
          {/* Retro Window Control Squares */}
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 bg-rose-500/80 border border-rose-400/40 inline-block shadow-[1px_1px_0px_#000]" />
            <span className="w-2.5 h-2.5 bg-amber-500/80 border border-amber-400/40 inline-block shadow-[1px_1px_0px_#000]" />
            <span className="w-2.5 h-2.5 bg-emerald-500/80 border border-emerald-400/40 inline-block shadow-[1px_1px_0px_#000]" />
          </div>
          <span className="font-pixel text-[11px] text-zinc-300 truncate tracking-wide">
            RECRUITER_CHALLENGE.exe
          </span>
        </div>

        {/* Dynamic Status Pill */}
        <div className="flex items-center gap-1.5 shrink-0 font-pixel text-[9px] uppercase tracking-wider px-2 py-0.5 border shadow-[1px_1px_0px_#000] transition-colors">
          {state === "success" ? (
            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border-emerald-800/60">
              <span className="w-1.5 h-1.5 bg-emerald-400 inline-block shadow-[0_0_6px_#10b981]" />
              <span>ONLINE</span>
            </div>
          ) : state === "deploying" ? (
            <div className="flex items-center gap-1.5 text-cyan-400 bg-cyan-950/40 border-cyan-800/60">
              <span className="w-1.5 h-1.5 bg-cyan-400 inline-block animate-pulse shadow-[0_0_6px_#06b6d4]" />
              <span>DEPLOYING</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-amber-400 bg-amber-950/40 border-amber-800/60">
              <span className="w-1.5 h-1.5 bg-rose-400 inline-block animate-pulse shadow-[0_0_6px_#f43f5e]" />
              <span>INCIDENT #404</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Interactive Stage Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
        {state === "idle" && (
          <InitialState
            onStart={() => setState("stage-1")}
            onSkip={scrollToProjects}
          />
        )}

        {state === "stage-1" && (
          <StageOne onSuccess={() => setState("stage-2")} />
        )}

        {state === "stage-2" && (
          <StageTwo onSuccess={() => setState("deploying")} />
        )}

        {state === "deploying" && (
          <StageThreeDeploy onComplete={() => setState("success")} />
        )}

        {state === "success" && (
          <SuccessState
            onPlayAgain={() => setState("stage-1")}
            onViewProjects={scrollToProjects}
          />
        )}
      </div>
    </div>
  );
}
