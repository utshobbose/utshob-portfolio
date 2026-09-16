import React from "react";
import { cn } from "@/lib/utils";

export interface RetroBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "emerald" | "cyan" | "violet" | "amber";
  size?: "sm" | "md";
  dot?: boolean;
}

export function RetroBadge({
  className,
  variant = "default",
  size = "md",
  dot = false,
  children,
  ...props
}: RetroBadgeProps) {
  const variantStyles = {
    default:
      "bg-[#111420] text-zinc-300 border-[#262c42] shadow-[2px_2px_0px_0px_#000000]",
    emerald:
      "bg-emerald-950/40 text-emerald-300 border-emerald-700/60 shadow-[2px_2px_0px_0px_#064e3b]",
    cyan:
      "bg-cyan-950/40 text-cyan-300 border-cyan-700/60 shadow-[2px_2px_0px_0px_#155e75]",
    violet:
      "bg-violet-950/40 text-violet-300 border-violet-700/60 shadow-[2px_2px_0px_0px_#4c1d95]",
    amber:
      "bg-amber-950/40 text-amber-300 border-amber-700/60 shadow-[2px_2px_0px_0px_#78350f]",
  };

  const dotColors = {
    default: "bg-zinc-400",
    emerald: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
    cyan: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
    violet: "bg-violet-400 shadow-[0_0_8px_#8b5cf6]",
    amber: "bg-amber-400 shadow-[0_0_8px_#f59e0b]",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[9px]",
    md: "px-2.5 py-1 text-[10px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-pixel border uppercase tracking-wider select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-none inline-block",
            dotColors[variant]
          )}
        />
      )}
      {children}
    </span>
  );
}
