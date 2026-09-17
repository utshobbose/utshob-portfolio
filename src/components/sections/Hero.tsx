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
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 3rd Image: Cyberpunk Pixel Art Lofi Workspace Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/hero-bg.jpg"
          alt="Utshob Bose Pixel Art Cyberpunk Workspace"
          fill
          priority
          quality={92}
          className="object-cover object-center"
        />
        {/* Cinematic subtle tint and edge vignette so pixel art is clearly visible and vibrant */}
        <div className="absolute inset-0 bg-[#07080c]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-[#07080c]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080c]/70 via-transparent to-[#07080c]/45" />
        {/* Subtle CRT scanlines */}
        <div className="absolute inset-0 scanlines opacity-15 pointer-events-none" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Profile & Info */}
          <div className="lg:col-span-6 xl:col-span-6 text-left space-y-5">
            {/* > whoami with blinking cursor */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0b1319]/90 border border-emerald-500/40 text-emerald-400 font-mono text-xs shadow-[0_0_12px_rgba(16,185,129,0.15)]">
              <span>&gt; whoami</span>
              <span className="w-1.5 h-3.5 bg-emerald-400 inline-block animate-pulse" />
            </div>

            {/* Utshob Bose Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                {profile.name}
              </h1>

              {/* Role Line */}
              <p className="font-mono text-xs sm:text-sm md:text-base text-zinc-300 font-medium tracking-wide flex items-center gap-2 flex-wrap">
                <span className="text-zinc-200">Full-Stack Developer</span>
                <span className="text-zinc-600">·</span>
                <span className="text-emerald-400">CS Graduate</span>
                <span className="text-zinc-600">·</span>
                <span className="text-cyan-400">AI Enthusiast</span>
              </p>

              {/* Education Subline */}
              <p className="font-mono text-xs text-zinc-400">
                system.profile // BRAC University &apos;26
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-lg">
              Building scalable applications, production-ready systems, and interactive digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => scrollTo("projects")}
                className="bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold font-sans text-xs sm:text-sm px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              >
                <FolderCode className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0c1017]/80 hover:bg-[#151c28] border border-zinc-700/80 hover:border-zinc-500 text-zinc-200 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Resume</span>
                <Download className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            {/* Availability Status Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a111a]/85 border border-emerald-900/60 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" />
                <span>Available for remote &amp; hybrid roles</span>
              </div>
            </div>

            {/* Tech Stack Strip */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block">
                {"// TECH STACK"}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-[9px] font-bold text-white">
                    N
                  </span>
                  <span>Next.js</span>
                </span>
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                  <Atom className="w-3.5 h-3.5 text-cyan-400" />
                  <span>React</span>
                </span>
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                  <span className="text-zinc-400 font-bold text-[10px]">ex</span>
                  <span>Express.js</span>
                </span>
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                  <span className="bg-blue-600/80 text-[9px] font-bold px-1 rounded-xs text-white">
                    TS
                  </span>
                  <span>TypeScript</span>
                </span>
                <span className="bg-[#0e131d]/90 border border-[#20293d] px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>MongoDB</span>
                </span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="border-l-2 border-emerald-500/40 pl-3 py-0.5 font-mono text-xs text-zinc-400 italic">
              <p>&ldquo;Turn ideas into working systems.&rdquo;</p>
              <p className="text-zinc-500 not-italic text-[11px]">— Utshob Bose</p>
            </div>
          </div>

          {/* Right Column: Recruiter Challenge Terminal Window */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end w-full">
            <DebugChallenge />
          </div>
        </div>
      </div>

      {/* Bottom Exploration & Terminal Status Line */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-6 flex flex-col items-center space-y-4 select-none">
        {/* Scroll to explore */}
        <button
          onClick={() => scrollTo("experience")}
          className="group flex flex-col items-center gap-1 text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
          aria-label="Scroll to experience"
        >
          <span className="font-mono text-xs text-zinc-400 group-hover:text-emerald-400">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-zinc-600 group-hover:border-emerald-500/70 flex items-start justify-center p-1 transition-colors">
            <span className="w-1 h-2 bg-zinc-400 group-hover:bg-emerald-400 rounded-full animate-bounce" />
          </div>
          <ArrowDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 animate-bounce -mt-1" />
        </button>

        {/* Status Line */}
        <div className="w-full border-t border-zinc-800/40 pt-3 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
          <div>
            Terminal v2026 <span className="text-zinc-700">|</span> Utshob Bose{" "}
            <span className="text-zinc-700">|</span> Full-Stack Developer{" "}
            <span className="text-zinc-700">{"///////////////"}</span>
          </div>
          <div>Build something people love.</div>
        </div>
      </div>
    </section>
  );
}
