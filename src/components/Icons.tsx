import type { SVGProps } from "react";

/* Hand-set line icons — one family, 1.5px stroke, consistent metrics. */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

type P = SVGProps<SVGSVGElement>;

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M6 18 18 6M9 6h9v9" />
  </svg>
);

export const ArrowDown = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M12 4v15M6 13l6 6 6-6" />
  </svg>
);

export const Mountain = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M3 19h18M5.5 19 11 8l3 5.5L16.5 10l3.5 9" />
    <path d="M9.5 11.5 11 13l1.5-1.5" />
  </svg>
);

export const Home = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M4 11.5 12 4l8 7.5M6 10v9h12v-9" />
    <path d="M10 19v-5h4v5" />
  </svg>
);

export const Leaf = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M5 19C5 9 12 4 20 4c0 9-5 15-13 15" />
    <path d="M5 19c3-5 7-8 11-10" />
  </svg>
);

export const HandHeart = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M12 8.5c1.5-2.7 5.5-2 5.5 1 0 2.2-3 4-5.5 5.5C9.5 13.5 6.5 11.7 6.5 9.5c0-3 4-3.7 5.5-1Z" />
    <path d="M3 21v-4.5c2 0 3-1 4.5-1M21 21v-4.5c-2 0-3-1-4.5-1" />
  </svg>
);

export const Users = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c.7-3 2.9-4.5 5.5-4.5s4.8 1.5 5.5 4.5" />
    <path d="M15.5 5.4a3.2 3.2 0 0 1 0 5.2M17.8 14.9c1.5.7 2.4 2 2.7 4.1" />
  </svg>
);

export const Pot = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M5 10h14M6 10c0 6 2 9 6 9s6-3 6-9M9 10V7.5M15 10V7.5M12 10V6" />
  </svg>
);

export const Brush = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M19 4 9.5 13.5M9.5 13.5c-2 0-3.5 1.5-3.5 3.5 0 1.5-1 2.5-2.5 2.5 2 1.5 6 1 7-1 .8-1.6.5-3.5-1-5Z" />
  </svg>
);

export const Compass = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>
);

export const Bed = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M3 18v-8m0 4h18v4m0-4v-2a3 3 0 0 0-3-3H10v5" />
    <circle cx="6.5" cy="11.5" r="1.5" />
  </svg>
);

export const MapPin = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M12 21s-6.5-5.4-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.2" />
  </svg>
);

export const Mail = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

export const Phone = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 2-2 2C10.5 19.5 4.5 13.5 4.5 5.5c0-1 1-2 2-2Z" />
  </svg>
);

export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const Minus = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
);

export const Search = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </svg>
);

export const Facebook = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M14 8.5V7a1.5 1.5 0 0 1 1.5-1.5H17V2.5h-2.5A4.5 4.5 0 0 0 10 7v1.5H7.5V12H10v9.5h4V12h2.5l.5-3.5h-3Z" />
  </svg>
);

export const Instagram = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const Linkedin = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M8 10.5V17M8 7.5v.01M12 17v-3.8c0-1.2.8-2.2 2-2.2s2 1 2 2.2V17" />
  </svg>
);
