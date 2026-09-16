"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { RetroButton } from "@/components/8bit/RetroButton";
import { Menu, X, FileDown, Terminal } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#07080c]/90 backdrop-blur-md border-b-2 border-[#1c2236] shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-b border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Pixel Logo using the custom BOSE. graphic */}
        <button
          onClick={() => scrollTo("about")}
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
          <div className="bg-[#0a0c14] border-2 border-emerald-500/80 px-2 py-1 shadow-[2px_2px_0px_0px_#064e3b] group-hover:border-emerald-400 group-hover:shadow-[3px_3px_0px_0px_#064e3b] transition-all flex items-center justify-center">
            <Image
              src="/bose-logo-cropped.png"
              alt="BOSE."
              width={82}
              height={30}
              className="h-6 w-auto object-contain select-none"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-pixel text-[11px] text-zinc-100 group-hover:text-emerald-400 transition-colors">
              {profile.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 inline-block animate-pulse" />
              v2026.online
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0d101a]/80 p-1 border-2 border-[#20273c] shadow-[2px_2px_0px_0px_#000]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 font-pixel text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-zinc-950 font-semibold border border-emerald-300 shadow-[2px_2px_0px_0px_#064e3b]"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-[#161c2c] border border-transparent"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden md:flex items-center gap-3">
          <RetroButton
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </RetroButton>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <RetroButton
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="px-2 py-1 text-[9px]"
          >
            Resume ↓
          </RetroButton>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#121624] border-2 border-[#242c44] text-zinc-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c14] border-b-2 border-[#20273c] px-4 py-4 space-y-2 shadow-2xl">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-2.5 font-pixel text-[11px] uppercase tracking-wider flex items-center justify-between border ${
                  isActive
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/60"
                    : "text-zinc-300 border-transparent hover:bg-[#141928]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <Terminal className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
