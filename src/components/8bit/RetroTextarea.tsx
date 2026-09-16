import React from "react";
import { cn } from "@/lib/utils";

export interface RetroTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const RetroTextarea = React.forwardRef<
  HTMLTextAreaElement,
  RetroTextareaProps
>(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block font-pixel text-[11px] text-zinc-300 uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={cn(
          "w-full bg-[#0a0c14] border-2 border-[#2b324a] px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 font-mono shadow-[2px_2px_0px_0px_#000000] focus:border-emerald-500 focus:shadow-[3px_3px_0px_0px_#064e3b] focus:outline-none transition-all resize-y min-h-[110px] disabled:opacity-50",
          error && "border-rose-500 focus:border-rose-400 focus:shadow-[3px_3px_0px_0px_#881337]",
          className
        )}
        {...props}
      />
      {error && (
        <p className="font-pixel text-[10px] text-rose-400 mt-1">{error}</p>
      )}
    </div>
  );
});

RetroTextarea.displayName = "RetroTextarea";
