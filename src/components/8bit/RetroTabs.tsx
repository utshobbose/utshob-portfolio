"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number | string;
}

export interface RetroTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  size?: "sm" | "md";
}

export function RetroTabs({
  tabs,
  activeTab,
  onTabChange,
  className,
  size = "md",
}: RetroTabsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-1.5 p-1.5 bg-[#090b12] border-2 border-[#1f2538] shadow-[2px_2px_0px_0px_#000000]",
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "font-pixel tracking-wider uppercase transition-all select-none cursor-pointer flex items-center gap-2",
              size === "sm" ? "px-2.5 py-1 text-[10px]" : "px-3.5 py-1.5 text-xs",
              isActive
                ? "bg-emerald-500 text-zinc-950 font-semibold border-2 border-emerald-300 shadow-[2px_2px_0px_0px_#064e3b]"
                : "bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-[#141824] border-2 border-transparent"
            )}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "px-1.5 py-0.2 text-[9px] font-mono",
                  isActive
                    ? "bg-emerald-950/80 text-emerald-300"
                    : "bg-[#181d2c] text-zinc-400"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
