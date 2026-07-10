/** Recurring hand-made marks: prayer flags, sun, dividers, small icons. */

const FLAG_COLORS = ['#4d7ea8', '#f7f1e3', '#c2543a', '#47614f', '#e8a33d']

export function PrayerFlags({
  className = '',
  flags = 9,
  string = '#f7f1e3',
}: {
  className?: string
  flags?: number
  string?: string
}) {
  const w = flags * 46 + 40
  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} 72`}
      fill="none"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <path
        d={`M0 10 Q ${w / 2} ${34} ${w} 6`}
        stroke={string}
        strokeOpacity="0.55"
        strokeWidth="1.4"
      />
      {Array.from({ length: flags }).map((_, i) => {
        const t = (i + 0.5) / flags
        // point on the quadratic curve
        const x = t * w
        const y = (1 - t) * (1 - t) * 10 + 2 * (1 - t) * t * 34 + t * t * 6
        const c = FLAG_COLORS[i % FLAG_COLORS.length]
        const sway = i % 2 === 0 ? 3 : -2
        return (
          <path
            key={i}
            d={`M${x - 14} ${y} h28 l${sway} 30 h-28 Z`}
            fill={c}
            fillOpacity={c === '#f7f1e3' ? 0.85 : 0.92}
          />
        )
      })}
    </svg>
  )
}

/** A woodblock-style sun with rays — used as a section mark. */
export function SunMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="9" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6
          const x1 = 24 + Math.cos(a) * 14
          const y1 = 24 + Math.sin(a) * 14
          const x2 = 24 + Math.cos(a) * (i % 2 === 0 ? 20 : 17)
          const y2 = 24 + Math.sin(a) * (i % 2 === 0 ? 20 : 17)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        })}
      </g>
    </svg>
  )
}

/** Small line icons drawn to one 24px grid, stroke inherits currentColor. */
export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    home: (
      <>
        <path d="M4 11.5 12 5l8 6.5" />
        <path d="M6.5 10.5V19h11v-8.5" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
    bowl: (
      <>
        <path d="M4 12h16c0 4.5-3.5 8-8 8s-8-3.5-8-8Z" />
        <path d="M9 8.5c0-1.2 1-1.4 1-2.6M13.5 8.5c0-1.2 1-1.4 1-2.6" />
      </>
    ),
    seed: (
      <>
        <path d="M12 20v-7" />
        <path d="M12 13c0-3.5 2.5-6 6.5-6 0 3.8-2.5 6-6.5 6Z" />
        <path d="M12 15c0-2.6-2-4.5-5-4.5 0 2.9 2 4.5 5 4.5Z" />
      </>
    ),
    book: (
      <>
        <path d="M12 6.5C10.5 5 8.5 4.5 5 4.5v13c3.5 0 5.5.5 7 2 1.5-1.5 3.5-2 7-2v-13c-3.5 0-5.5.5-7 2Z" />
        <path d="M12 6.5v13" />
      </>
    ),
    hammer: (
      <>
        <path d="M10 8.5 4.5 14a1.8 1.8 0 0 0 0 2.5l3 3a1.8 1.8 0 0 0 2.5 0L15.5 14" />
        <path d="M9 7.5c2-2.5 5-3.5 8-3l2.5 2.5c.5 3-.5 6-3 8L9 7.5Z" />
      </>
    ),
    sprout: (
      <>
        <path d="M12 21v-8" />
        <path d="M12 13c0-4 3-7 7.5-7 0 4.4-3 7-7.5 7Z" />
        <path d="M12 16c0-3-2.2-5-5.7-5 0 3.3 2.2 5 5.7 5Z" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m15 9-2 5-4 1 2-5 4-1Z" />
      </>
    ),
    arrow: <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
  }
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/** Dashed "stitch" divider, like the seam of a dhaka weave. */
export function Stitch({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 4" preserveAspectRatio="none" aria-hidden="true">
      <line
        x1="0"
        y1="2"
        x2="200"
        y2="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  )
}
