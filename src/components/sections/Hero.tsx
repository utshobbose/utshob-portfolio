"use client";

import React from "react";
import dynamic from "next/dynamic";
import { profile } from "@/content/profile";
import { RetroBadge } from "@/components/8bit/RetroBadge";
import { RetroButton } from "@/components/8bit/RetroButton";
import { DebugChallenge } from "@/components/debug-challenge/DebugChallenge";
import { ArrowDown, Code2, Sparkles, FileDown } from "lucide-react";

// Dynamically import ShaderBackground client-side only (never blocks first paint)
const ShaderBackground = dynamic(
  () => import("@/components/canvas/ShaderBackground"),
  { ssr: false }
);

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Ambient WebGL Mesh Gradient Background */}
      <ShaderBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Main Grid: Responsive split on xl+ screens, stacked on mobile/tablet */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center justify-items-center">
          {/* Existing Hero Content */}
          <div className="xl:col-span-7 w-full max-w-2xl mx-auto text-center flex flex-col items-center space-y-7">
            {/* Retro Badge: > whoami */}
            <div className="animate-fade-in">
              <RetroBadge variant="emerald" size="md" dot>
                {profile.badge}
              </RetroBadge>
            </div>

            {/* Utshob Bose: Large, Clean, Modern Sans-Serif */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans">
                {profile.name}
              </h1>

              {/* Role line */}
              <p className="font-mono text-sm sm:text-base md:text-lg text-emerald-400 font-medium tracking-wide flex items-center justify-center gap-2 flex-wrap">
                <span className="text-emerald-300">Full-Stack Developer</span>
                <span className="text-zinc-600">·</span>
                <span className="text-cyan-300">CS Graduate</span>
                <span className="text-zinc-600">·</span>
                <span className="text-violet-300">AI Enthusiast</span>
              </p>
            </div>

            {/* Terminal Info Snippet Card */}
            <div className="bg-[#0b0e18]/85 border-2 border-[#20273c] p-4 sm:p-5 text-left max-w-2xl w-full shadow-[4px_4px_0px_0px_#000000] backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-[#1b2132] pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 inline-block shadow-[0_0_6px_#10b981]" />
                  <span className="font-pixel text-[10px] text-zinc-300">
                    system.profile // BRAC University &apos;26
                  </span>
                </div>
                <span className="font-mono text-[11px] text-zinc-500">Dhaka, BD</span>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base font-sans leading-relaxed">
                {profile.summary}
              </p>

              <div className="mt-4 pt-3 border-t border-[#181e2e] flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="text-emerald-400 font-pixel text-[9px] uppercase">Current:</span>
                <span className="text-zinc-200">Program Associate (ICT) @ BIID</span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-200">Tech Co-Founder @ Science Simulab</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <RetroButton
                onClick={() => scrollTo("projects")}
                variant="primary"
                size="md"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>View Projects</span>
              </RetroButton>

              <RetroButton
                onClick={() => scrollTo("contact")}
                variant="cyan"
                size="md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </RetroButton>

              <RetroButton
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </RetroButton>
            </div>
          </div>

          {/* Recruiter Challenge Panel */}
          <div className="xl:col-span-5 w-full max-w-xl mx-auto flex flex-col items-center">
            <DebugChallenge />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-10">
          <button
            onClick={() => scrollTo("experience")}
            className="group flex flex-col items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
            aria-label="Scroll to experience"
          >
            <span className="font-pixel text-[9px] uppercase tracking-widest text-zinc-500 group-hover:text-emerald-400">
              Scroll Down
            </span>
            <div className="p-1.5 bg-[#0e121e] border border-[#20273a] group-hover:border-emerald-500/60 shadow-[2px_2px_0px_#000]">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
