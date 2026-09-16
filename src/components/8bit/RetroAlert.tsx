import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";

export interface RetroAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "info" | "warning";
  title?: string;
}

export function RetroAlert({
  className,
  variant = "info",
  title,
  children,
  ...props
}: RetroAlertProps) {
  const variantStyles = {
    success:
      "bg-emerald-950/50 border-2 border-emerald-500 text-emerald-200 shadow-[3px_3px_0px_0px_#064e3b]",
    error:
      "bg-rose-950/50 border-2 border-rose-500 text-rose-200 shadow-[3px_3px_0px_0px_#881337]",
    warning:
      "bg-amber-950/50 border-2 border-amber-500 text-amber-200 shadow-[3px_3px_0px_0px_#78350f]",
    info:
      "bg-cyan-950/50 border-2 border-cyan-500 text-cyan-200 shadow-[3px_3px_0px_0px_#155e75]",
  };

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    error: <XCircle className="w-4 h-4 text-rose-400 shrink-0" />,
    warning: <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />,
    info: <Info className="w-4 h-4 text-cyan-400 shrink-0" />,
  };

  return (
    <div
      className={cn(
        "p-3.5 flex items-start gap-3 transition-all",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icons[variant]}
      <div className="space-y-1 text-xs">
        {title && (
          <h5 className="font-pixel text-[11px] uppercase tracking-wider font-medium">
            {title}
          </h5>
        )}
        <div className="text-zinc-300 font-sans leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
