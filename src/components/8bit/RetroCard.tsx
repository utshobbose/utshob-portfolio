import React from "react";
import { cn } from "@/lib/utils";

export interface RetroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  titleBar?: string;
  statusBadge?: string;
  statusVariant?: "emerald" | "cyan" | "violet" | "amber" | "default";
  variant?: "default" | "accent" | "cyan";
  glow?: boolean;
}

export function RetroCard({
  className,
  titleBar,
  statusBadge,
  statusVariant = "emerald",
  variant = "default",
  glow = false,
  children,
  ...props
}: RetroCardProps) {
  const borderStyles = {
    default: "border-2 border-[#24293d] shadow-[4px_4px_0px_0px_#000000]",
    accent:
      "border-2 border-emerald-600/80 shadow-[4px_4px_0px_0px_#064e3b] hover:shadow-[5px_5px_0px_0px_#064e3b]",
    cyan: "border-2 border-cyan-600/80 shadow-[4px_4px_0px_0px_#155e75] hover:shadow-[5px_5px_0px_0px_#155e75]",
  };

  const glowStyles = glow
    ? "relative before:absolute before:-inset-0.5 before:bg-gradient-to-r before:from-emerald-500/20 before:via-cyan-500/20 before:to-transparent before:-z-10 before:blur-md"
    : "";

  return (
    <div
      className={cn(
        "bg-[#0d0f18] text-zinc-200 transition-all flex flex-col",
        borderStyles[variant],
        glowStyles,
        className
      )}
      {...props}
    >
      {titleBar && (
        <div className="bg-[#141826] px-3.5 py-2 border-b-2 border-[#24293d] flex items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-2 min-w-0">
            {/* Terminal OS window control squares */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 bg-rose-500/80 border border-rose-400/40 inline-block shadow-[1px_1px_0px_#000]" />
              <span className="w-2.5 h-2.5 bg-amber-500/80 border border-amber-400/40 inline-block shadow-[1px_1px_0px_#000]" />
              <span className="w-2.5 h-2.5 bg-emerald-500/80 border border-emerald-400/40 inline-block shadow-[1px_1px_0px_#000]" />
            </div>
            <span className="font-pixel text-[11px] text-zinc-300 truncate tracking-wide">
              {titleBar}
            </span>
          </div>

          {statusBadge && (
            <div className="flex items-center gap-1.5 shrink-0 font-pixel text-[9px] uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2 py-0.5 border border-emerald-800/60 shadow-[1px_1px_0px_#000]">
              <span className="w-1.5 h-1.5 bg-emerald-400 inline-block shadow-[0_0_6px_#10b981]" />
              <span>{statusBadge}</span>
            </div>
          )}
        </div>
      )}
      <div className="p-4 md:p-6 flex-1 flex flex-col">{children}</div>
    </div>
  );
}
