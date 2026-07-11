import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

/** Infinite horizontal ticker. Content is duplicated for a seamless loop. */
export default function Marquee({ children, duration = 40, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee-track" style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
