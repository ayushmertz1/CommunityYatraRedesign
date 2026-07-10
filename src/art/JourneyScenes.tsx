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

/** Ghalegaun — Gurung village under the Annapurna snow wall, alpine morning. */
export function GhalegaunScene() {
  return (
    <Frame id="gg" sky={['#22304d', '#7f98b6', '#d8e2e8']}>
      {/* snow wall */}
      <path d="M0 250 L60 140 L110 205 L185 95 L255 195 L330 115 L395 200 L470 85 L545 190 L600 140 L640 195 L640 400 L0 400 Z" fill="#eef3f4" />
      <g fill="#a9bccb">
        <path d="M185 95 L255 195 L205 198 Z" />
        <path d="M470 85 L545 190 L492 193 Z" />
        <path d="M60 140 L110 205 L74 207 Z" />
        <path d="M330 115 L395 200 L348 202 Z" />
      </g>
      {/* forest ridge */}
      <path d="M0 305 C110 280 220 268 330 274 C450 280 550 265 640 285 L640 400 L0 400 Z" fill="#33475a" />
      <g fill="#27394a">
        <path d="M80 288 l8 -16 8 16 Z" />
        <path d="M112 282 l7 -14 7 14 Z" />
        <path d="M480 272 l8 -16 8 16 Z" />
        <path d="M512 268 l7 -14 7 14 Z" />
      </g>
      {/* village terraces */}
      <path d="M0 400 L0 340 C130 322 260 314 390 322 C500 329 580 342 640 352 L640 400 Z" fill="#22303c" />
      <g fill="#141f28">
        <rect x="250" y="304" width="36" height="26" />
        <rect x="294" y="300" width="42" height="30" />
        <rect x="342" y="308" width="32" height="22" />
      </g>
      <g fill="#8a8f93">
        <path d="M246 304 L268 290 L290 304 Z" />
        <path d="M290 300 L315 284 L340 300 Z" />
        <path d="M338 308 L358 295 L378 308 Z" />
      </g>
      <g fill="#e8a33d">
        <rect x="262" y="312" width="6" height="8" />
        <rect x="308" y="308" width="6" height="8" />
        <rect x="352" y="314" width="5" height="7" />
      </g>
      <g stroke="#d8e2e8" strokeWidth="1" opacity="0.14" fill="none">
        <path d="M40 372 C170 356 320 350 460 360" />
        <path d="M110 390 C240 376 380 370 520 380" />
      </g>
    </Frame>
  )
}

/** Panauti — tiered temple at the river confluence, lamp-lit dusk. */
export function PanautiScene() {
  return (
    <Frame id="pn" sky={['#33244a', '#8f4d51', '#e5a25c']}>
      <circle cx="180" cy="164" r="44" fill="#f3c877" opacity="0.9" />
      {/* valley rim */}
      <path d="M0 235 C110 215 230 205 350 212 C470 219 560 205 640 218 L640 400 L0 400 Z" fill="#5c4258" />
      {/* temple */}
      <g>
        {/* plinth */}
        <rect x="330" y="286" width="150" height="14" fill="#241a2e" />
        <rect x="342" y="274" width="126" height="12" fill="#2b2036" />
        {/* body */}
        <rect x="376" y="234" width="58" height="40" fill="#241a2e" />
        {/* three tiered roofs */}
        <path d="M348 240 L405 196 L462 240 L440 240 L405 214 L370 240 Z" fill="#8f3a26" />
        <path d="M356 238 L405 202 L454 238 Z" fill="#a03d28" />
        <path d="M366 210 L405 180 L444 210 Z" fill="#8f3a26" />
        <path d="M378 186 L405 164 L432 186 Z" fill="#a03d28" />
        <rect x="401" y="150" width="8" height="14" fill="#e8a33d" />
        {/* lit doorway */}
        <rect x="397" y="252" width="16" height="22" rx="7" fill="#e8a33d" />
      </g>
      {/* ghats and river */}
      <path d="M0 400 L0 312 C160 300 340 296 640 306 L640 400 Z" fill="#1c1426" />
      <g stroke="#e5a25c" strokeWidth="1.4" opacity="0.5">
        <path d="M60 330 h130 M76 344 h120 M92 358 h112" fill="none" />
      </g>
      {/* river with lamp reflections */}
      <path d="M0 400 L0 368 C180 358 420 356 640 364 L640 400 Z" fill="#2a2440" />
      <g stroke="#f3c877" strokeLinecap="round" opacity="0.7">
        <path d="M404 372 v10" strokeWidth="2.4" />
        <path d="M180 376 v8" strokeWidth="2" />
        <path d="M290 380 v7" strokeWidth="2" />
        <path d="M520 378 v8" strokeWidth="2" />
      </g>
    </Frame>
  )
}

/** Chitwan — Terai grasslands, rhino at first light. */
export function ChitwanScene() {
  return (
    <Frame id="ct" sky={['#3c4a4a', '#9fae83', '#e6d3a0']}>
      <circle cx="212" cy="196" r="58" fill="#f3c877" opacity="0.95" />
      {/* treeline */}
      <path d="M0 252 C60 240 90 246 140 238 C200 228 240 240 300 232 C370 224 420 238 480 230 C540 222 590 236 640 228 L640 400 L0 400 Z" fill="#42563e" />
      <g fill="#364833">
        <ellipse cx="86" cy="240" rx="34" ry="18" />
        <rect x="82" y="248" width="8" height="18" />
        <ellipse cx="560" cy="228" rx="40" ry="20" />
        <rect x="556" y="238" width="8" height="20" />
      </g>
      {/* grass bands */}
      <path d="M0 400 L0 288 C160 276 400 274 640 284 L640 400 Z" fill="#5c7350" />
      <path d="M0 400 L0 330 C200 320 440 318 640 326 L640 400 Z" fill="#48604272" />
      {/* river slick */}
      <path d="M0 400 L0 356 C220 346 430 346 640 354 L640 400 Z" fill="#7d939b" opacity="0.5" />
      {/* one-horned rhino, head low to graze */}
      <g fill="#26332a">
        {/* body — high shoulder hump, heavy rump */}
        <path d="M338 336 c-8 -4 -12 -14 -8 -24 5 -13 18 -22 36 -24 l26 -3 c10 -8 22 -12 32 -10 8 2 14 8 18 16 l4 9 c14 4 20 14 18 24 -2 8 -9 13 -18 15 l-3 15 h-11 l-2 -13 -24 1 -2 12 h-11 l-3 -14 c-20 0 -40 -1 -52 -4 Z" />
        {/* head lowered to the grass */}
        <path d="M438 300 c10 -2 20 2 25 10 l10 16 c2 4 1 8 -3 10 l-14 5 c-8 2 -16 -1 -19 -8 l-8 -20 c-2 -6 2 -11 9 -13 Z" />
        {/* horn — upswept from the snout tip */}
        <path d="M462 330 c10 -4 17 -12 19 -22 l6 18 c2 8 -4 15 -12 15 -6 0 -11 -5 -13 -11 Z" />
        {/* ear */}
        <path d="M444 298 l3 -14 10 10 Z" />
        {/* armour fold */}
        <path d="M394 290 c2 14 2 28 -2 42" stroke="#1c261f" strokeWidth="2.5" fill="none" opacity="0.6" />
      </g>
      {/* grass strokes */}
      <g stroke="#3d5138" strokeWidth="2" strokeLinecap="round" opacity="0.7">
        <path d="M60 386 c2 -10 0 -16 -4 -22 M74 388 c1 -9 4 -14 9 -18 M88 386 c0 -8 -2 -14 -6 -20" fill="none" />
        <path d="M540 382 c2 -10 0 -16 -4 -22 M554 384 c1 -9 4 -14 9 -18 M568 382 c0 -8 -2 -14 -6 -20" fill="none" />
      </g>
    </Frame>
  )
}

export const journeyScenes: Record<string, () => React.ReactNode> = {
  bandipur: BandipurScene,
  ghalegaun: GhalegaunScene,
  panauti: PanautiScene,
  chitwan: ChitwanScene,
}
