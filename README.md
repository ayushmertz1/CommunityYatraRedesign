# Community Yatra — redesigned

A ground-up redesign of [communityyatra.com](https://communityyatra.com/): community-based
tourism in Nepal — homestay circuits, cultural immersion and volunteering, owned by the
villages that host you.

## The concept

*Yatra* means journey — the kind that changes who comes home. The site is built as one
continuous scroll journey through a day in the hills:

- **A layered Himalayan dawn hero** — five hand-drawn SVG layers (sky, snow range, ridges,
  village) with independent scroll parallax, a rising sun, swaying prayer flags and a
  Devanagari watermark.
- **A scroll-linked manifesto** that reveals word by word as you read.
- **Four illustrated journey circuits** (Bandipur, Ghalegaun, Panauti, Chitwan), each with a
  bespoke vignette in its own light — golden dusk, alpine morning, lamp-lit evening, grassland
  dawn — opening into a shared-element itinerary modal.
- **"One day in the homestay"** — a sticky, scroll-driven scene whose sky moves from
  5:30 tea through midday fields to 19:00 firelight, narrated in five moments.
- **Volunteer, impact and voices** sections, a village-names marquee, and a
  plan-your-yatra form.

Every visual asset is hand-drawn SVG — no stock photography, no external requests.
The whole site ships as a single self-contained bundle with self-hosted fonts.

## Design language

| Token | Value | Meaning |
| --- | --- | --- |
| `ink` / `ink-deep` | `#131e30` / `#0c1422` | Himalayan night |
| `paper` / `paper-warm` | `#f7f1e3` / `#f1e7d2` | handmade paper |
| `clay` | `#c2543a` | Nepali brick & roof tile |
| `marigold` | `#e8a33d` | garland gold |
| `juniper` | `#47614f` | hill forest |

Type: **Fraunces Variable** (display, with optical sizing + SOFT/WONK axes) and
**Inter Variable** (text). Motion: Lenis smooth scroll + Framer Motion, with a full
`prefers-reduced-motion` fallback (static day-in-life timeline, no parallax).

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens via `@theme`)
- Framer Motion (scroll-linked animation, shared-element modal)
- Lenis (smooth scrolling)
- Self-hosted fonts via Fontsource

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  art/          hand-drawn SVG scenes & motifs (hero layers, journey vignettes, icons)
  components/   one file per section + shared ui primitives
  data/         journeys, itineraries, testimonials, site copy
  hooks/        useLenis smooth-scroll hook
  index.css     design tokens & base styles
```

## Accessibility & performance

- Semantic landmarks, skip link, focus-visible states, labelled controls
- Journey modal: focus management, Escape to close, focus return
- Reduced-motion variants for every animated experience
- No third-party requests at runtime; ~130 kB gzipped JS, CSS + fonts self-hosted
