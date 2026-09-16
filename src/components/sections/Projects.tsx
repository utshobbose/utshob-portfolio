"use client";

import React from "react";
import { featuredVenture, projects } from "@/content/projects";
import { RetroCard } from "@/components/8bit/RetroCard";
import { RetroBadge } from "@/components/8bit/RetroBadge";
import { RetroButton } from "@/components/8bit/RetroButton";
import { ExternalLink, Sparkles, Rocket, Terminal, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-block">
          <RetroBadge variant="emerald" size="md" dot>
            SYS.PROC // RUNNING_PROJECTS
          </RetroBadge>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
          Featured Ventures & Projects
        </h2>
        <p className="text-zinc-400 font-mono text-xs sm:text-sm max-w-xl mx-auto">
          Production systems, AI pipelines, microservices, and interactive applications.
        </p>
      </div>

      {/* 1. Featured Work Spotlight: Science Simulab (EdTech Co-founder Project) */}
      <div className="mb-14">
        <RetroCard
          titleBar={featuredVenture.processName}
          statusBadge="FLAGSHIP CO-FOUNDER VENTURE"
          variant="accent"
          glow={true}
          className="border-emerald-500/90"
        >
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-[#1f283d] pb-5">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="p-1.5 bg-emerald-950 border border-emerald-500/60 inline-block">
                    <Rocket className="w-4 h-4 text-emerald-400" />
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                    {featuredVenture.name}
                  </h3>
                  <RetroBadge variant="emerald" size="sm">
                    {featuredVenture.year}
                  </RetroBadge>
                </div>
                <p className="text-emerald-400 font-mono text-xs sm:text-sm font-semibold">
                  {featuredVenture.role} · {featuredVenture.tagline}
                </p>
              </div>

              {/* Action links */}
              <div className="flex items-center gap-3">
                {featuredVenture.liveUrl && (
                  <RetroButton
                    href={featuredVenture.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </RetroButton>
                )}
                {featuredVenture.githubUrl && (
                  <RetroButton
                    href={featuredVenture.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </RetroButton>
                )}
              </div>
            </div>

            {/* Description & bullets */}
            <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              {featuredVenture.description}
            </p>

            <ul className="space-y-2.5 pt-1">
              {featuredVenture.highlights.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed"
                >
                  <span className="font-pixel text-[10px] text-emerald-400 mt-1 shrink-0 select-none">
                    ▶
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech chips */}
            <div className="pt-3 border-t border-[#1b2234] flex flex-wrap items-center gap-2">
              <span className="font-pixel text-[9px] text-zinc-500 uppercase mr-1">
                Tech Stack:
              </span>
              {featuredVenture.tech.map((t) => (
                <RetroBadge key={t} variant="emerald" size="sm">
                  {t}
                </RetroBadge>
              ))}
            </div>
          </div>
        </RetroCard>
      </div>

      {/* 2. Responsive Grid of Process Cards (5 Projects) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <RetroCard
            key={proj.id}
            titleBar={proj.processName}
            statusBadge={`PID: ${proj.year}`}
            variant="default"
            className="hover:border-emerald-500/60 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-white font-sans">
                    {proj.name}
                  </h3>
                  <RetroBadge variant="cyan" size="sm">
                    {proj.year}
                  </RetroBadge>
                </div>
                <p className="text-xs font-mono text-emerald-400 mt-1">
                  {proj.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {proj.description}
              </p>

              {/* Highlights bullets */}
              <ul className="space-y-2 pt-1 border-t border-[#1a2032]">
                {proj.highlights.map((hl, hlIdx) => (
                  <li
                    key={hlIdx}
                    className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                  >
                    <span className="font-pixel text-[8px] text-cyan-400 mt-1 shrink-0">
                      ■
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom: Tech chips and actions */}
            <div className="mt-6 pt-4 border-t border-[#1b2236] space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((techItem) => (
                  <RetroBadge key={techItem} variant="default" size="sm">
                    {techItem}
                  </RetroBadge>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-1">
                {proj.liveUrl && (
                  <RetroButton
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="cyan"
                    size="sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Live Demo</span>
                  </RetroButton>
                )}

                {proj.githubUrl && (
                  <RetroButton
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>Source Code</span>
                  </RetroButton>
                )}
              </div>
            </div>
          </RetroCard>
        ))}
      </div>
    </section>
  );
}
