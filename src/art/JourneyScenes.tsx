/**
 * Illustrated vignettes for each journey — one shared style,
 * four distinct places, four times of day.
 */

const VB = '0 0 640 400'
const cls = 'h-full w-full'

function Frame({ id, sky, children }: { id: string; sky: [string, string, string]; children: React.ReactNode }) {
  return (
    <svg viewBox={VB} preserveAspectRatio="xMidYMid slice" className={cls} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="0.65" stopColor={sky[1]} />
          <stop offset="1" stopColor={sky[2]} />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill={`url(#${id}-sky)`} />
      {children}
    </svg>
  )
}

/** Bandipur — hilltop Newar bazaar at golden dusk. */
export function BandipurScene() {
  return (
    <Frame id="bp" sky={['#2b2a4a', '#a06253', '#efb27a']}>
      <circle cx="470" cy="140" r="46" fill="#f3c877" opacity="0.92" />
      <circle cx="470" cy="140" r="74" fill="#f3c877" opacity="0.16" />
      {/* far ranges */}
      <path d="M0 240 L70 195 L130 230 L210 175 L280 225 L360 185 L430 228 L520 180 L580 220 L640 195 L640 400 L0 400 Z" fill="#5f4c63" />
      {/* saddle ridge */}
      <path d="M0 330 C120 290 200 268 320 262 C440 256 540 285 640 320 L640 400 L0 400 Z" fill="#3a2e40" />
      {/* bazaar row on the ridge */}
      <g>
        <g fill="#241c2b">
          <rect x="216" y="232" width="42" height="34" />
          <rect x="262" y="226" width="50" height="40" />
          <rect x="316" y="230" width="44" height="36" />
          <rect x="364" y="236" width="38" height="30" />
        </g>
        <g fill="#c2543a">
          <path d="M212 232 L237 216 L262 232 Z" />
          <path d="M258 226 L287 208 L316 226 Z" />
          <path d="M312 230 L338 213 L364 230 Z" />
          <path d="M360 236 L383 221 L406 236 Z" />
        </g>
        <g fill="#e8a33d">
          <rect x="228" y="242" width="7" height="9" />
          <rect x="274" y="238" width="7" height="9" />
          <rect x="292" y="238" width="7" height="9" />
          <rect x="330" y="240" width="7" height="9" />
          <rect x="375" y="244" width="6" height="8" />
        </g>
      </g>
      {/* foreground slope with terraces */}
      <path d="M0 400 L0 352 C140 330 280 322 420 336 C520 346 590 360 640 372 L640 400 Z" fill="#1c1522" />
      <g stroke="#efb27a" strokeWidth="1" opacity="0.15" fill="none">
        <path d="M30 372 C160 354 300 348 430 358" />
        <path d="M90 388 C220 372 360 366 500 376" />
      </g>
    </Frame>
  )
}

/** Agriculture Tour — terraced rice paddies, midday planting. */
export function AgricultureScene() {
  return (
    <Frame id="ag" sky={['#5c7a6e', '#9fae83', '#e6d3a0']}>
      <circle cx="500" cy="120" r="52" fill="#f3d38c" opacity="0.9" />
      {/* distant hills */}
      <path d="M0 200 C100 170 220 185 340 165 C460 145 540 175 640 155 L640 400 L0 400 Z" fill="#7c9270" opacity="0.6" />
      {/* terraced paddies cascading down */}
      <g>
        <path d="M0 400 L0 250 C120 236 260 232 400 244 C500 252 580 262 640 270 L640 296 C560 288 470 280 380 274 C250 264 120 268 0 282 Z" fill="#8fae6e" />
        <path d="M0 282 L0 316 C130 302 270 300 410 312 C510 320 590 328 640 334 L640 300 C560 292 480 284 400 278 C270 268 130 272 0 282 Z" fill="#7a9c5c" />
        <path d="M0 316 L0 400 L640 400 L640 334 C560 340 480 348 400 344 C270 337 130 328 0 316 Z" fill="#688a4d" />
      </g>
      {/* paddy water sheen lines */}
      <g stroke="#cfe0a8" strokeWidth="1" opacity="0.4" fill="none">
        <path d="M20 264 C160 252 320 250 460 260" />
        <path d="M30 300 C170 290 330 292 480 302" />
        <path d="M20 340 C170 334 340 330 500 338" />
      </g>
      {/* farmer bent planting */}
      <g fill="#2c2418">
        <path d="M300 300 c-2 -8 3 -14 10 -15 l3 10 -8 4 -2 8 Z" />
        <path d="M303 295 c8 -10 18 -14 26 -10 l-4 8 c-6 -2 -13 0 -18 6 Z" />
        <circle cx="332" cy="288" r="5" />
        <path d="M296 306 l-6 12 M310 305 l4 13" stroke="#2c2418" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {/* conical straw hat */}
      <path d="M322 282 l16 -6 16 6 -3 3 -13 -4 -13 4 Z" fill="#e8d090" />
    </Frame>
  )
}

/** Arts & Crafts Tour — a Mithila-painted courtyard workshop, warm dusk. */
export function ArtsCraftsScene() {
  return (
    <Frame id="ac" sky={['#3a2440', '#8f4d51', '#e5a25c']}>
      <circle cx="150" cy="150" r="42" fill="#f3c877" opacity="0.85" />
      {/* courtyard wall */}
      <path d="M0 250 L640 250 L640 400 L0 400 Z" fill="#d8a35a" />
      {/* Mithila mural band */}
      <g fill="#a03d28">
        <circle cx="90" cy="200" r="18" />
        <circle cx="90" cy="200" r="9" fill="#e8a33d" />
        <path d="M150 185 l14 30 h-28 Z" />
        <circle cx="230" cy="200" r="14" fill="#47614f" />
        <path d="M290 185 q20 15 0 30 q-20 -15 0 -30 Z" fill="#e8a33d" />
        <circle cx="350" cy="200" r="10" />
        <path d="M400 188 l12 24 -12 -6 -12 6 Z" fill="#47614f" />
      </g>
      <g stroke="#a03d28" strokeWidth="2" opacity="0.6" fill="none">
        <path d="M40 230 h420" />
        <path d="M40 175 h420" />
      </g>
      {/* potter at the wheel */}
      <g>
        <ellipse cx="480" cy="330" rx="34" ry="8" fill="#241a2e" opacity="0.5" />
        <circle cx="480" cy="316" r="16" fill="#7a5230" />
        <path d="M480 300 a8 12 0 0 1 0 24 a5 8 0 0 1 0 -24 Z" fill="#8f6338" />
        {/* potter figure */}
        <g fill="#241a2e">
          <circle cx="510" cy="278" r="8" />
          <path d="M502 288 c4 -6 14 -6 18 0 l4 22 h-26 Z" />
          <path d="M500 296 l-14 14 M520 296 l10 16" stroke="#241a2e" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
      {/* hanging thangka-style banner */}
      <g>
        <rect x="560" y="140" width="42" height="56" rx="2" fill="#8f3a26" />
        <rect x="566" y="146" width="30" height="30" fill="#e8a33d" opacity="0.85" />
        <circle cx="581" cy="161" r="9" fill="#3a2440" />
      </g>
    </Frame>
  )
}

/** Volunteer Tour — a village schoolhouse, bright morning. */
export function VolunteerScene() {
  return (
    <Frame id="vl" sky={['#3a5470', '#7f98b6', '#d8e2e8']}>
      <circle cx="520" cy="110" r="46" fill="#f6ecc9" opacity="0.9" />
      {/* hills */}
      <path d="M0 220 C120 195 240 210 360 190 C460 174 550 200 640 182 L640 400 L0 400 Z" fill="#5c7a8f" opacity="0.55" />
      <path d="M0 400 L0 300 C140 280 300 276 460 288 C520 292 580 298 640 306 L640 400 Z" fill="#33475a" />
      {/* schoolhouse */}
      <g>
        <rect x="220" y="230" width="180" height="80" fill="#241c2b" />
        <path d="M210 230 L310 178 L410 230 Z" fill="#a03d28" />
        {/* chalkboard-lit windows */}
        <rect x="244" y="252" width="34" height="40" rx="2" fill="#e8a33d" opacity="0.9" />
        <rect x="292" y="252" width="34" height="40" rx="2" fill="#e8a33d" opacity="0.75" />
        <rect x="340" y="252" width="34" height="40" rx="2" fill="#e8a33d" opacity="0.9" />
        {/* flag */}
        <rect x="308" y="150" width="3" height="30" fill="#0c1422" />
        <path d="M311 152 l20 6 -20 6 Z" fill="#c2543a" />
      </g>
      {/* children silhouettes in the yard */}
      <g fill="#141f28">
        <circle cx="160" cy="308" r="7" />
        <path d="M153 316 c0 -8 14 -8 14 0 l-2 20 h-10 Z" />
        <circle cx="184" cy="312" r="6" />
        <path d="M178 319 c0 -7 12 -7 12 0 l-2 17 h-8 Z" />
        <circle cx="450" cy="306" r="7" />
        <path d="M443 314 c0 -8 14 -8 14 0 l-2 20 h-10 Z" />
      </g>
      {/* foreground path */}
      <path d="M0 400 L0 344 C160 332 320 330 480 338 C540 341 590 345 640 350 L640 400 Z" fill="#22303c" />
    </Frame>
  )
}

export const journeyScenes: Record<string, () => React.ReactNode> = {
  'homestay-circuit': BandipurScene,
  'agriculture-tour': AgricultureScene,
  'arts-crafts-tour': ArtsCraftsScene,
  'volunteer-tour': VolunteerScene,
}
