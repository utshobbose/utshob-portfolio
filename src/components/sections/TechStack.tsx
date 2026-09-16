"use client";

import React, { useState } from "react";
import { skillCategories } from "@/content/skills";
import { certifications } from "@/content/certifications";
import { RetroBadge } from "@/components/8bit/RetroBadge";
import { RetroCard } from "@/components/8bit/RetroCard";
import { RetroTabs } from "@/components/8bit/RetroTabs";
import { Award, Terminal, Cpu, Layers } from "lucide-react";

export function TechStack() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Skills", count: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0) },
    { id: "Languages", label: "Languages" },
    { id: "Frameworks & Libraries", label: "Frameworks" },
    { id: "Databases", label: "Databases" },
    { id: "Platforms & Hosting", label: "Hosting / Ops" },
    { id: "Methodologies", label: "Methodologies" },
  ];

  const filteredCategories =
    selectedFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === selectedFilter);

  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-block">
          <RetroBadge variant="emerald" size="md" dot>
            SYS.STACK // CORE_CAPABILITIES
          </RetroBadge>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
          Technical Stack & Skills
        </h2>
        <p className="text-zinc-400 font-mono text-xs sm:text-sm max-w-xl mx-auto">
          Grouped directly from the verified engineering background and production deployments.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-10 overflow-x-auto">
        <RetroTabs
          tabs={filterTabs}
          activeTab={selectedFilter}
          onTabChange={setSelectedFilter}
          size="sm"
        />
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((group) => (
          <RetroCard
            key={group.category}
            titleBar={`${group.tag}`}
            variant="default"
            className="hover:border-emerald-500/60 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-pixel text-[11px] text-zinc-200 uppercase tracking-wide">
                  {group.category}
                </h3>
                <span className="font-mono text-[10px] text-emerald-400">
                  [{group.skills.length} modules]
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <RetroBadge
                    key={skill}
                    variant="default"
                    size="md"
                    className="hover:border-emerald-500/70 hover:text-emerald-300 transition-colors cursor-default"
                  >
                    {skill}
                  </RetroBadge>
                ))}
              </div>
            </div>
          </RetroCard>
        ))}
      </div>

      {/* Certifications & Achievements Banner */}
      <div className="mt-14">
        <RetroCard
          titleBar="honors_and_credentials.log"
          statusBadge="VERIFIED"
          variant="cyan"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1b2234] pb-3">
              <Award className="w-4 h-4 text-cyan-400" />
              <h3 className="font-pixel text-xs text-white uppercase tracking-wide">
                Certifications & Achievements
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-[#0a0c14] border border-[#21273c] p-3.5 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-pixel text-[9px] text-cyan-400 uppercase">
                      {cert.issuer}
                    </span>
                    <RetroBadge variant="cyan" size="sm">
                      {cert.badge}
                    </RetroBadge>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-zinc-100 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RetroCard>
      </div>
    </section>
  );
}
