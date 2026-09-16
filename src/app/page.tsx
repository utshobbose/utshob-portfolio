import React from "react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07080c] text-zinc-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Subtle CRT Scanline overlay effect */}
      <div className="fixed inset-0 scanlines pointer-events-none z-40 opacity-40" />

      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
