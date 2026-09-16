"use client";

import React from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { RetroButton } from "@/components/8bit/RetroButton";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t-2 border-[#1c2236] bg-[#07090f] relative overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & status */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="bg-[#0a0c14] border border-emerald-500/60 px-2 py-0.5 shadow-[2px_2px_0px_#000] flex items-center justify-center">
                <Image
                  src="/bose-logo-cropped.png"
                  alt="BOSE."
                  width={64}
                  height={22}
                  className="h-5 w-auto object-contain"
                />
              </div>
              <span className="font-pixel text-xs text-zinc-300 uppercase tracking-wide">
                Terminal v2026
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono max-w-md">
              A developer's terminal, illuminated by generative AI and retro pixel craftsmanship.
            </p>
          </div>

          {/* Social Row */}
          <div className="flex items-center gap-3">
            <RetroButton
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </RetroButton>

            <RetroButton
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="cyan"
              size="sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </RetroButton>

            <RetroButton
              href={`mailto:${profile.email}`}
              variant="primary"
              size="sm"
              aria-label="Email Utshob"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </RetroButton>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#1a2030] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Utshob Bose. All rights reserved.</span>
            <span>·</span>
            <span className="text-emerald-500/80">Dhaka, Bangladesh</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Built with Next.js, 8bitcn & Three.js</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 font-pixel text-[10px] text-zinc-400 hover:text-emerald-400 uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
