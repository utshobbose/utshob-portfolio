"use client";

import React from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { DebugChallenge } from "@/components/debug-challenge/DebugChallenge";
import {
  FolderCode,
  FileText,
  Download,
  ArrowRight,
  ArrowDown,
  Atom,
  Database,
} from "lucide-react";

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
      className="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 px-3.5 sm:px-6 lg:px-8 overflow-x-clip"
    >
      {/* 3rd Image: Cyberpunk Pixel Art Lofi Workspace Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/hero-bg.jpg"
          alt="Utshob Bose Pixel Art Cyberpunk Workspace"
          fill
          priority
          quality={75}
          className="object-cover object-[32%_center] md:object-[30%_center] lg:object-center"
        />
        {/* Cinematic subtle tint so pixel art is clearly visible, colorful, and vibrant */}
        <div className="absolute inset-0 bg-[#060a14]/35" />
        {/* Gentle top and bottom vignetting to blend with header and next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080c]/80 via-transparent to-[#07080c]" />
        {/* Subtle left-side shading on desktop so text is effortless to read */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#07080c]/70 via-[#07080c]/20 to-transparent" />
        {/* Subtle CRT scanlines */}
        <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-3 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Profile & Info */}
          <div className="lg:col-span-6 xl:col-span-6 text-left space-y-3.5 sm:space-y-4 lg:space-y-5 bg-[#080d18]/70 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-4 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none border border-[#1b253b]/70 lg:border-none shadow-[0_12px_40px_rgba(0,0,0,0.6)] lg:shadow-none">
            {/* > whoami with blinking cursor */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0b1319]/90 border border-emerald-500/40 text-emerald-400 font-mono text-[11px] sm:text-xs shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                <span>&gt; whoami</span>
                <span className="w-1.5 h-3.5 bg-emerald-400 inline-block animate-pulse" />
              </div>
            </div>

            {/* Utshob Bose Heading */}
            <div className="space-y-1 sm:space-y-1.5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                {profile.name}
              </h1>

              {/* Role Line */}
              <p className="font-mono text-xs sm:text-sm md:text-base text-zinc-300 font-medium tracking-wide flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="text-white font-semibold">Full-Stack Developer</span>
                <span className="text-zinc-500">·</span>
                <span className="text-emerald-300">CS Graduate</span>
                <span className="text-zinc-500">·</span>
                <span className="text-cyan-300">AI Enthusiast</span>
              </p>

              {/* Education Subline */}
              <p className="font-mono text-[11px] sm:text-xs text-zinc-400 font-medium">
                system.profile // BRAC University &apos;26
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-sans leading-relaxed max-w-lg">
              Building scalable applications, production-ready systems, and interactive digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5">
              <button
                onClick={() => scrollTo("projects")}
                className="bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold font-sans text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-1.5 sm:gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              >
                <FolderCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0c1017]/80 hover:bg-[#151c28] border border-zinc-700/80 hover:border-zinc-500 text-zinc-200 text-xs sm:text-sm font-medium px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-1.5 sm:gap-2 transition-all"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
                <span>Resume</span>
                <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" />
              </a>
            </div>

            {/* Availability Status Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#0a111a]/85 border border-emerald-900/60 text-[10px] sm:text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" />
                <span>Available for remote &amp; hybrid roles</span>
              </div>
            </div>

            {/* Tech Stack Strip */}
            <div className="space-y-1.5 pt-0.5">
              <span className="font-mono text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider block font-semibold">
                {"// TECH STACK"}
              </span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono text-zinc-200 flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-[9px] font-bold text-white">
                    N
                  </span>
                  <span>Next.js</span>
                </span>
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono text-zinc-200 flex items-center gap-1.5">
                  <Atom className="w-3.5 h-3.5 text-cyan-400" />
                  <span>React</span>
                </span>
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono text-zinc-200 flex items-center gap-1.5">
                  <span className="text-zinc-300 font-bold text-[10px]">ex</span>
                  <span>Express.js</span>
                </span>
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono text-zinc-200 flex items-center gap-1.5">
                  <span className="bg-blue-600/80 text-[9px] font-bold px-1 rounded-xs text-white">
                    TS
                  </span>
                  <span>TypeScript</span>
                </span>
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono text-zinc-200 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>MongoDB</span>
                </span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="border-l-2 border-emerald-400/60 pl-3 py-0.5 font-mono text-[11px] sm:text-xs text-zinc-300 italic">
              <p>&ldquo;Turn ideas into working systems.&rdquo;</p>
              <p className="text-zinc-400 not-italic text-[10px] sm:text-[11px]">— Utshob Bose</p>
            </div>
          </div>

          {/* Right Column: Recruiter Challenge Terminal Window */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end w-full">
            <DebugChallenge />
          </div>
        </div>
      </div>

      {/* Bottom Exploration & Terminal Status Line */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-6 flex flex-col items-center space-y-3 sm:space-y-4 select-none">
        {/* Scroll to explore */}
        <button
          onClick={() => scrollTo("experience")}
          className="group flex flex-col items-center gap-1 text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
          aria-label="Scroll to experience"
        >
          <span className="font-mono text-[11px] sm:text-xs text-zinc-400 group-hover:text-emerald-400">
            Scroll to explore
          </span>
          <div className="w-4 sm:w-5 h-7 sm:h-8 rounded-full border border-zinc-600 group-hover:border-emerald-500/70 flex items-start justify-center p-1 transition-colors">
            <span className="w-1 h-2 bg-zinc-400 group-hover:bg-emerald-400 rounded-full animate-bounce" />
          </div>
          <ArrowDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 animate-bounce -mt-1" />
        </button>

        {/* Status Line */}
        <div className="w-full border-t border-zinc-800/40 pt-3 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono text-zinc-500 gap-1 sm:gap-2 text-center sm:text-left">
          <div>
            Terminal v2026 <span className="text-zinc-700">|</span> Utshob Bose{" "}
            <span className="text-zinc-700">|</span> Full-Stack Developer{" "}
            <span className="text-zinc-700">{"///////////////"}</span>
          </div>
          <div className="hidden sm:block">Build something people love.</div>
        </div>
      </div>
    </section>
  );
}
