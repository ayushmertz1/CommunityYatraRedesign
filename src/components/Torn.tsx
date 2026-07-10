/** Torn-paper edge between acts. Renders the *previous* section's color on top of the current one. */
export function Torn({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-12 ${color} ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M0 0 L1440 0 L1440 12 C1320 30 1220 8 1090 22 C960 36 860 14 720 26 C580 38 480 12 350 24 C220 36 110 16 0 28 Z"
        fill="currentColor"
      />
    </svg>
  )
}
