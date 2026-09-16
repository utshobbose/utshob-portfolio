"use client";

import React, { useState } from "react";
import { experiences } from "@/content/experience";
import { RetroCard } from "@/components/8bit/RetroCard";
import { RetroBadge } from "@/components/8bit/RetroBadge";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Terminal, ShieldAlert } from "lucide-react";

export function Experience() {
  // Mobile expand/collapse state for each card
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    "biid-associate": true,
    "biid-intern": true,
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-block">
          <RetroBadge variant="cyan" size="md" dot>
            SYS.EXP // TRACK_RECORD
          </RetroBadge>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
          Work Experience
        </h2>
        <p className="text-zinc-400 font-mono text-xs sm:text-sm max-w-xl mx-auto">
          Production infrastructure, security remediation, and enterprise systems engineering.
        </p>
      </div>

      {/* Stacked Terminal Windows */}
      <div className="space-y-8 relative">
        {/* Left vertical terminal pipeline indicator */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500/40 via-cyan-500/40 to-transparent hidden md:block" />

        {experiences.map((exp, idx) => {
          const isExpanded = expandedCards[exp.id] ?? true;
          const isCurrent = exp.id === "biid-associate";

          return (
            <div key={exp.id} className="relative md:pl-16">
              {/* Timeline terminal node */}
              <div className="hidden md:flex absolute left-4 top-5 w-4 h-4 rounded-none bg-[#0a0c14] border-2 border-emerald-500 items-center justify-center -translate-x-1/2">
                <span className={`w-1.5 h-1.5 ${isCurrent ? "bg-emerald-400 animate-ping" : "bg-cyan-400"}`} />
              </div>

              <RetroCard
                titleBar={exp.titleBar}
                statusBadge={exp.statusBadge}
                variant={isCurrent ? "accent" : "default"}
                glow={isCurrent}
              >
                <div className="space-y-4">
                  {/* Role & Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-[#1b2234] pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
                        <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-emerald-400 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:self-start">
                      <RetroBadge variant={isCurrent ? "emerald" : "default"} size="sm">
                        <Calendar className="w-3 h-3 mr-1 inline" />
                        {exp.dateRange}
                      </RetroBadge>

                      <div className="flex items-center gap-1 font-mono text-xs text-zinc-400 px-2 py-0.5 bg-[#141828] border border-[#232a42]">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Toggle button for small screens */}
                  <div className="sm:hidden flex justify-end">
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="font-pixel text-[10px] text-zinc-400 hover:text-white flex items-center gap-1.5 bg-[#121626] px-2.5 py-1 border border-[#242c44]"
                    >
                      <span>{isExpanded ? "Collapse Details" : "Expand Details"}</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Bullets List */}
                  {isExpanded && (
                    <ul className="space-y-3 pt-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3 text-sm text-zinc-300 font-sans leading-relaxed"
                        >
                          <span className="font-pixel text-[10px] text-emerald-400 mt-1 shrink-0 select-none">
                            ▶
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </RetroCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
