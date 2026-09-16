"use client";

import React, { useState } from "react";
import { profile } from "@/content/profile";
import { RetroCard } from "@/components/8bit/RetroCard";
import { RetroBadge } from "@/components/8bit/RetroBadge";
import { RetroButton } from "@/components/8bit/RetroButton";
import { RetroInput } from "@/components/8bit/RetroInput";
import { RetroTextarea } from "@/components/8bit/RetroTextarea";
import { RetroAlert } from "@/components/8bit/RetroAlert";
import { AiTwinChat } from "@/components/agents-ui/AiTwinChat";
import { Mail, Copy, Check, MapPin, Send, MessageSquare } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill out all transmission fields.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Message transmitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Transmission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network glitch. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Ambient background glow behind Contact section */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[500px] pointer-events-none -z-10 blur-[130px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(6,182,212,0.25) 50%, transparent 70%)",
        }}
      />

      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-block">
          <RetroBadge variant="violet" size="md" dot>
            SYS.COMMS // DIRECT_UPLINK
          </RetroBadge>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
          Get In Touch & AI Twin
        </h2>
        <p className="text-zinc-400 font-mono text-xs sm:text-sm max-w-xl mx-auto">
          Transmit a transmission via the contact terminal or chat interactively with Utshob's AI Twin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Form & Info (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <RetroCard titleBar="contact_dispatcher.sh" variant="accent">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[#1c2236] pb-3 mb-2">
                <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send Direct Signal</span>
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  Transmissions deliver directly to Utshob's inbox.
                </p>
              </div>

              {status === "success" && (
                <RetroAlert variant="success" title="Transmitted">
                  {statusMessage}
                </RetroAlert>
              )}

              {status === "error" && (
                <RetroAlert variant="error" title="Transmission Error">
                  {statusMessage}
                </RetroAlert>
              )}

              <RetroInput
                label="Sender Name"
                placeholder="e.g. Linus Torvalds"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <RetroInput
                label="Email Frequency / Address"
                type="email"
                placeholder="your.email@organization.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <RetroTextarea
                label="Transmission Content"
                placeholder="Discussing projects, full-stack roles, Science Simulab collaborations, or general inquiries..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />

              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-[11px] text-zinc-500">
                  Response SLA: &lt; 24 hrs
                </span>

                <RetroButton
                  type="submit"
                  disabled={status === "submitting"}
                  variant="primary"
                  size="md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === "submitting" ? "Transmitting..." : "Send Signal"}</span>
                </RetroButton>
              </div>
            </form>
          </RetroCard>

          {/* Quick Info & Social Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email card */}
            <div className="bg-[#0b0e18] border-2 border-[#20273a] p-4 shadow-[3px_3px_0px_#000] flex flex-col justify-between space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="font-pixel text-[10px] text-zinc-300 uppercase">
                  Primary Email
                </span>
              </div>
              <div className="font-mono text-xs text-zinc-200 truncate select-all">
                {profile.email}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <RetroButton
                  onClick={copyEmail}
                  variant="secondary"
                  size="sm"
                  className="w-full text-[9px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Address</span>
                    </>
                  )}
                </RetroButton>
              </div>
            </div>

            {/* Location card */}
            <div className="bg-[#0b0e18] border-2 border-[#20273a] p-4 shadow-[3px_3px_0px_#000] flex flex-col justify-between space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="font-pixel text-[10px] text-zinc-300 uppercase">
                  Coordinates
                </span>
              </div>
              <div className="font-mono text-xs text-zinc-200">
                {profile.location}
              </div>
              <div className="pt-1 flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
                <span className="w-1.5 h-1.5 bg-cyan-400 inline-block" />
                <span>Available for remote & hybrid roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: LiveKit Agents UI AI Twin (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <AiTwinChat />

          <div className="p-3.5 bg-[#0b0e18] border border-[#1d2334] text-xs text-zinc-400 font-mono space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold font-pixel text-[10px] uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-400 inline-block animate-pulse" />
              <span>AI Twin Protocol</span>
            </div>
            <p className="leading-relaxed text-zinc-400 text-[11px]">
              Trained on Utshob's background, BIID projects, and Science Simulab architecture. Powered by dual-mode LLM streaming with instant knowledge retrieval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
