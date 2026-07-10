/**
 * Layered Himalayan dawn — each layer is its own absolutely-positioned SVG
 * sharing one viewBox so the Hero can parallax them independently.
 * Drawn by hand; palette keyed to the site tokens.
 */

const VB = '0 0 1440 810'
const PAR = 'xMidYMax slice'

// overflow-visible + paths that extend below y=810 give each layer bleed,
// so parallax can lift it without exposing the layer underneath.
const layerCls = 'absolute inset-0 h-full w-full overflow-visible'

export function SkyLayer() {
  return (
    <svg className={layerCls} viewBox={VB} preserveAspectRatio={PAR} aria-hidden="true">
      <defs>
        <linearGradient id="cy-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c1422" />
          <stop offset="0.42" stopColor="#1c2c47" />
          <stop offset="0.72" stopColor="#5c5470" />
          <stop offset="0.9" stopColor="#c97f5e" />
          <stop offset="1" stopColor="#e8a36a" />
        </linearGradient>
        <radialGradient id="cy-sunglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f3c877" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#e8a33d" stopOpacity="0.28" />
          <stop offset="1" stopColor="#e8a33d" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="810" fill="url(#cy-sky)" />
      {/* stars — fade toward horizon */}
      <g fill="#f7f1e3">
        <circle cx="120" cy="90" r="1.4" opacity="0.8" />
        <circle cx="310" cy="150" r="1" opacity="0.55" />
        <circle cx="240" cy="260" r="1.2" opacity="0.4" />
        <circle cx="480" cy="70" r="1.5" opacity="0.9" />
        <circle cx="590" cy="200" r="1" opacity="0.5" />
        <circle cx="760" cy="110" r="1.3" opacity="0.75" />
        <circle cx="900" cy="60" r="1.1" opacity="0.8" />
        <circle cx="1030" cy="180" r="1" opacity="0.45" />
        <circle cx="1160" cy="90" r="1.4" opacity="0.85" />
        <circle cx="1300" cy="220" r="1" opacity="0.4" />
        <circle cx="1390" cy="120" r="1.2" opacity="0.7" />
        <circle cx="680" cy="290" r="0.9" opacity="0.3" />
        <circle cx="70" cy="200" r="1" opacity="0.5" />
        <circle cx="860" cy="240" r="0.9" opacity="0.35" />
      </g>
      {/* rising sun — cresting a notch in the far range */}
      <circle cx="1006" cy="420" r="190" fill="url(#cy-sunglow)" />
      <circle cx="1006" cy="420" r="46" fill="#eeae4e" />
      <circle cx="1006" cy="420" r="46" fill="none" stroke="#f3c877" strokeOpacity="0.5" strokeWidth="1.5" />
    </svg>
  )
}

export function FarPeaksLayer() {
  return (
    <svg className={layerCls} viewBox={VB} preserveAspectRatio={PAR} aria-hidden="true">
      <defs>
        <linearGradient id="cy-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d8c4b4" />
          <stop offset="1" stopColor="#8b7d90" />
        </linearGradient>
      </defs>
      {/* high snow range */}
      <path
        d="M0 560 L90 470 L150 505 L235 400 L300 455 L370 380 L430 430 L500 340 L560 410 L640 355 L720 430 L800 370 L860 420 L935 330 L1010 415 L1080 370 L1150 430 L1230 355 L1310 425 L1370 385 L1440 450 L1440 1200 L0 1200 Z"
        fill="url(#cy-far)"
      />
      {/* shadowed faces */}
      <g fill="#8d7f93" opacity="0.5">
        <path d="M235 400 L300 455 L262 460 Z" />
        <path d="M500 340 L560 410 L512 415 Z" />
        <path d="M935 330 L1010 415 L952 418 Z" />
        <path d="M1230 355 L1310 425 L1252 428 Z" />
      </g>
    </svg>
  )
}

export function MidRidgeLayer() {
  return (
    <svg className={layerCls} viewBox={VB} preserveAspectRatio={PAR} aria-hidden="true">
      <path
        d="M0 640 C120 610 200 570 330 585 C430 596 500 550 610 560 C720 570 780 520 900 535 C1020 550 1100 505 1210 525 C1310 543 1380 520 1440 535 L1440 1200 L0 1200 Z"
        fill="#3a4a66"
      />
      <path
        d="M0 640 C120 610 200 570 330 585 C430 596 500 550 610 560 C720 570 780 520 900 535 C1020 550 1100 505 1210 525 C1310 543 1380 520 1440 535 L1440 560 C1370 548 1300 566 1200 552 C1090 537 1010 575 895 562 C775 548 715 595 605 586 C495 577 425 620 325 610 C205 598 115 636 0 665 Z"
        fill="#5a6484"
        opacity="0.45"
      />
    </svg>
  )
}

export function NearRidgeLayer() {
  return (
    <svg className={layerCls} viewBox={VB} preserveAspectRatio={PAR} aria-hidden="true">
      <path
        d="M0 700 C150 665 260 640 400 655 C520 668 640 620 770 635 C900 650 1000 605 1130 625 C1260 645 1360 615 1440 630 L1440 1200 L0 1200 Z"
        fill="#24344c"
      />
      {/* faint forest texture */}
      <g fill="#1b2940" opacity="0.8">
        <path d="M180 668 l7 -14 7 14 Z" />
        <path d="M210 662 l6 -12 6 12 Z" />
        <path d="M560 648 l7 -14 7 14 Z" />
        <path d="M592 642 l6 -12 6 12 Z" />
        <path d="M980 632 l7 -14 7 14 Z" />
        <path d="M1012 626 l6 -12 6 12 Z" />
        <path d="M1290 640 l7 -14 7 14 Z" />
      </g>
    </svg>
  )
}

/** Foreground hill with terraces + village silhouette with lit windows. */
export function VillageLayer() {
  return (
    <svg className={layerCls} viewBox={VB} preserveAspectRatio={PAR} aria-hidden="true">
      <defs>
        <linearGradient id="cy-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#15202f" />
          <stop offset="1" stopColor="#0c1422" />
        </linearGradient>
      </defs>
      <path
        d="M0 1200 L0 762 C130 742 230 712 340 718 C470 725 560 690 700 700 C840 710 960 680 1090 695 C1220 710 1340 692 1440 705 L1440 1200 Z"
        fill="url(#cy-hill)"
      />
      {/* terrace contour lines */}
      <g stroke="#f5c6a0" strokeWidth="1" opacity="0.14" fill="none">
        <path d="M40 780 C180 760 300 742 430 748" />
        <path d="M120 796 C260 778 380 762 520 768" />
        <path d="M880 744 C1010 728 1130 720 1260 730" />
        <path d="M950 770 C1080 754 1200 748 1330 758" />
      </g>
      {/* village cluster */}
      <g>
        {/* houses */}
        <g fill="#0c1422">
          <path d="M600 700 h58 v-34 h-58 Z" />
          <path d="M596 666 L629 646 L662 666 Z" />
          <path d="M676 704 h48 v-28 h-48 Z" />
          <path d="M672 676 L700 660 L728 676 Z" />
          <path d="M540 706 h44 v-26 h-44 Z" />
          <path d="M536 680 L562 664 L588 680 Z" />
        </g>
        {/* roofs catching first light */}
        <g fill="#c2543a" opacity="0.75">
          <path d="M596 666 L629 646 L662 666 L652 666 L629 652 L606 666 Z" />
          <path d="M672 676 L700 660 L728 676 L718 676 L700 665 L682 676 Z" />
          <path d="M536 680 L562 664 L588 680 L578 680 L562 669 L546 680 Z" />
        </g>
        {/* lit windows */}
        <g fill="#e8a33d">
          <rect x="612" y="678" width="8" height="10" rx="1" />
          <rect x="636" y="678" width="8" height="10" rx="1" opacity="0.85" />
          <rect x="690" y="684" width="7" height="9" rx="1" />
          <rect x="554" y="688" width="7" height="9" rx="1" opacity="0.9" />
        </g>
        {/* stupa */}
        <g>
          <ellipse cx="775" cy="700" rx="17" ry="9" fill="#0c1422" />
          <path d="M760 700 a15 15 0 0 1 30 0 Z" fill="#101a2b" />
          <rect x="771" y="672" width="8" height="14" fill="#0c1422" />
          <path d="M775 656 l6 16 h-12 Z" fill="#0c1422" />
          <circle cx="775" cy="654" r="2.5" fill="#e8a33d" />
        </g>
      </g>
    </svg>
  )
}
