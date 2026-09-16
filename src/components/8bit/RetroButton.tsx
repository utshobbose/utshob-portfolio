"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface RetroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "cyan" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export const RetroButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  RetroButtonProps
>(({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-pixel text-xs transition-all uppercase tracking-wider select-none active:translate-y-0.5 active:translate-x-0.5 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-[10px]",
    md: "px-4 py-2.5 text-xs",
    lg: "px-6 py-3.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 border-2 border-emerald-300 shadow-[3px_3px_0px_0px_#064e3b] hover:shadow-[4px_4px_0px_0px_#064e3b] active:shadow-[1px_1px_0px_0px_#064e3b] font-semibold",
    cyan:
      "bg-cyan-500 hover:bg-cyan-400 text-zinc-950 border-2 border-cyan-300 shadow-[3px_3px_0px_0px_#155e75] hover:shadow-[4px_4px_0px_0px_#155e75] active:shadow-[1px_1px_0px_0px_#155e75] font-semibold",
    secondary:
      "bg-[#151928] hover:bg-[#1c2237] text-zinc-200 border-2 border-[#2f3857] shadow-[3px_3px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] active:shadow-[1px_1px_0px_0px_#000000]",
    outline:
      "bg-transparent hover:bg-emerald-500/10 text-emerald-400 border-2 border-emerald-500/80 shadow-[3px_3px_0px_0px_#064e3b] hover:shadow-[4px_4px_0px_0px_#064e3b] active:shadow-[1px_1px_0px_0px_#064e3b]",
    ghost:
      "bg-transparent hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-200 border-2 border-transparent hover:border-zinc-700 shadow-none",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
});

RetroButton.displayName = "RetroButton";
