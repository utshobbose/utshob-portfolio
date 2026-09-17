"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
import { SUGGESTED_QUESTIONS } from "@/content/aiTwinContext";
import { RetroBadge } from "@/components/8bit/RetroBadge";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export function AiTwinChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Greetings! I am Utshob's AI Twin. I'm loaded with Utshob's full resume, experience at BIID Foundation, edtech venture Science Simulab, and projects like FitTrack. Ask me anything!",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const scrollToBottom = () => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTo({
        top: transcriptRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (questionText?: string) => {
    const textToSend = (questionText || input).trim();
    if (!textToSend || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          data.reply ||
          "I received your inquiry. Utshob is experienced in Next.js and full-stack development. Feel free to contact him directly at officialutshob@gmail.com!",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Connection glitch in transmission. You can always reach Utshob at officialutshob@gmail.com.",
          timestamp: "Now",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#0a0c14] border-2 border-emerald-900/60 shadow-[4px_4px_0px_0px_#042f24] overflow-hidden flex flex-col transition-all">
      {/* Agents UI Header Bar with LiveKit aesthetic */}
      <div className="bg-[#101420] border-b-2 border-[#1e2538] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8 bg-emerald-950/80 border border-emerald-500/60">
            <Bot className="w-4 h-4 text-emerald-400" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#101420] shadow-[0_0_8px_#10b981]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-pixel text-[11px] text-zinc-200 uppercase tracking-wide">
                Utshob AI Twin
              </h4>
              <RetroBadge variant="emerald" size="sm" dot>
                LiveKit UI
              </RetroBadge>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono">
              Digital Avatar · Full Context Active
            </p>
          </div>
        </div>

        {/* LiveKit-style Audio/Signal Visualizer Bar */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-0.5 h-4 px-2 py-0.5 bg-[#07080d] border border-[#1b2132]">
            <span
              className={`w-1 bg-emerald-400 transition-all ${
                isLoading ? "h-3 animate-pulse" : "h-2"
              }`}
            />
            <span
              className={`w-1 bg-emerald-400 transition-all ${
                isLoading ? "h-4 animate-bounce" : "h-1.5"
              }`}
            />
            <span
              className={`w-1 bg-cyan-400 transition-all ${
                isLoading ? "h-2 animate-pulse" : "h-3"
              }`}
            />
            <span
              className={`w-1 bg-emerald-400 transition-all ${
                isLoading ? "h-3.5 animate-bounce" : "h-2"
              }`}
            />
            <span
              className={`w-1 bg-emerald-400 transition-all ${
                isLoading ? "h-1.5 animate-pulse" : "h-1"
              }`}
            />
          </div>

          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-[#192030] transition-colors"
            title={isMinimized ? "Expand Chat" : "Collapse Chat"}
          >
            {isMinimized ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Transcript Area (LiveKit AgentChatTranscript Style) */}
          <div
            ref={transcriptRef}
            className="p-4 space-y-4 max-h-[340px] min-h-[220px] overflow-y-auto font-sans text-sm"
          >
            {messages.map((msg) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${
                    isAssistant ? "justify-start" : "justify-end"
                  }`}
                >
                  {isAssistant && (
                    <div className="w-6 h-6 shrink-0 bg-emerald-950 border border-emerald-600/50 flex items-center justify-center mt-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] p-3.5 space-y-1.5 ${
                      isAssistant
                        ? "bg-[#131726] border border-[#232a42] text-zinc-200 rounded-none shadow-[2px_2px_0px_0px_#000]"
                        : "bg-emerald-950/70 border border-emerald-600/70 text-emerald-100 rounded-none shadow-[2px_2px_0px_0px_#064e3b]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-pixel text-[9px] uppercase tracking-wider text-zinc-400">
                        {isAssistant ? "AI Twin" : "Visitor"}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {msg.timestamp}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {msg.content}
                    </div>
                  </div>

                  {!isAssistant && (
                    <div className="w-6 h-6 shrink-0 bg-zinc-800 border border-zinc-700 flex items-center justify-center mt-1">
                      <User className="w-3 h-3 text-zinc-300" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Thinking / Streaming Indicator */}
            {isLoading && (
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 shrink-0 bg-emerald-950 border border-emerald-600/50 flex items-center justify-center">
                  <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin" />
                </div>
                <div className="bg-[#131726] border border-[#232a42] px-4 py-2.5 flex items-center gap-2 shadow-[2px_2px_0px_0px_#000]">
                  <span className="font-pixel text-[9px] text-emerald-400 uppercase tracking-wider">
                    Agent Synthesizing
                  </span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-emerald-400 animate-bounce" />
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Preset Prompts Row */}
          <div className="px-4 py-2 bg-[#0c0e18] border-t border-[#1a1f30] flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="font-pixel text-[9px] text-zinc-500 shrink-0 uppercase">
              Suggested:
            </span>
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                disabled={isLoading}
                onClick={() => handleSend(q)}
                className="shrink-0 font-pixel text-[9px] text-zinc-300 hover:text-emerald-300 bg-[#141828] hover:bg-[#1a2034] px-2.5 py-1 border border-[#252c44] hover:border-emerald-700/60 transition-colors uppercase cursor-pointer disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#101420] border-t-2 border-[#1e2538] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Utshob's experience, stack, or projects..."
              disabled={isLoading}
              className="flex-1 bg-[#090b12] border-2 border-[#2b324a] px-3 py-2 text-xs font-mono text-zinc-100 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-3.5 py-2 font-pixel text-[10px] uppercase tracking-wider flex items-center gap-1.5 border-2 border-emerald-300 shadow-[2px_2px_0px_#064e3b] active:translate-y-0.5 active:translate-x-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              <span>Transmit</span>
              <Send className="w-3 h-3" />
            </button>
          </form>
        </>
      )}
    </div>
  );
}
