import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { journeys, type Journey } from '../data/journeys'
import { journeyScenes } from '../art/JourneyScenes'
import { Icon, Stitch } from '../art/Motifs'
import { Reveal, SectionHeading } from './ui'

function JourneyCard({ journey, onOpen }: { journey: Journey; onOpen: () => void }) {
  const Scene = journeyScenes[journey.id]
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      layoutId={`card-${journey.id}`}
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper-bright text-left shadow-[0_1px_2px_rgba(19,30,48,0.06)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_rgba(19,30,48,0.35)]"
      aria-label={`${journey.name} — open itinerary`}
    >
      <div className="relative aspect-[8/5] overflow-hidden">
        <motion.div layoutId={`scene-${journey.id}`} className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]">
          <Scene />
        </motion.div>
        <span className="absolute top-4 left-4 rounded-full bg-ink-deep/55 px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-paper uppercase backdrop-blur-sm">
          {journey.duration} · {journey.nights}
        </span>
        <span className="absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 group-hover:opacity-100">
          <Icon name="arrow" className="h-5 w-5 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
        </span>
      </div>
      <div className="flex grow flex-col p-6 sm:p-7">
        <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-clay uppercase">{journey.region}</p>
        <h3 className="font-display mt-2.5 text-[1.55rem] leading-tight font-medium text-ink">{journey.name}</h3>
        <p className="mt-2.5 leading-relaxed text-ink/60">{journey.tagline}</p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-sm text-ink/55">
            from <span className="font-display text-xl font-semibold text-ink">${journey.priceFrom}</span>
            <span className="text-ink/40"> / person</span>
          </span>
          <span className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/60">
            {journey.pace} pace
          </span>
        </div>
      </div>
    </motion.button>
  )
}

function JourneyModal({ journey, onClose }: { journey: Journey; onClose: () => void }) {
  const Scene = journeyScenes[journey.id]
  const reduce = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      opener?.focus()
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] overflow-y-auto bg-ink-deep/60 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${journey.name} itinerary`}
    >
      <motion.div
        layoutId={reduce ? undefined : `card-${journey.id}`}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto my-4 w-full max-w-3xl overflow-hidden rounded-3xl bg-paper-bright text-ink shadow-2xl"
      >
        <div className="relative aspect-[16/8] overflow-hidden sm:aspect-[16/6.5]">
          <motion.div layoutId={reduce ? undefined : `scene-${journey.id}`} className="absolute inset-0">
            <Scene />
          </motion.div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close itinerary"
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-ink-deep/60 text-paper backdrop-blur-sm transition-colors hover:bg-ink-deep"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/70 to-transparent p-6 sm:p-8">
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-marigold uppercase">
              {journey.region} · {journey.duration} · {journey.nights}
            </p>
            <h3 className="font-display mt-1 text-3xl font-medium text-paper sm:text-4xl">{journey.name}</h3>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <p className="text-[1.02rem] leading-relaxed text-ink/75">{journey.description}</p>

          <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {journey.moments.map((m) => (
              <p key={m} className="flex items-start gap-2.5 text-[0.92rem] leading-snug text-ink/70">
                <svg viewBox="0 0 12 12" className="mt-1 h-3 w-3 shrink-0 text-marigold" fill="currentColor" aria-hidden="true">
                  <circle cx="6" cy="6" r="3" />
                </svg>
                {m}
              </p>
            ))}
          </div>

          <Stitch className="my-9 h-1 w-full text-clay" />

          <h4 className="text-[0.72rem] font-semibold tracking-[0.24em] text-clay uppercase">Day by day</h4>
          <ol className="mt-6 space-y-7">
            {journey.itinerary.map((d) => (
              <li key={d.day} className="grid gap-2 sm:grid-cols-[88px_1fr] sm:gap-6">
                <span className="font-display text-lg font-semibold whitespace-nowrap text-clay">Day {d.day}</span>
                <div>
                  <h5 className="font-display text-xl font-medium text-ink">{d.title}</h5>
                  <p className="mt-1.5 leading-relaxed text-ink/65">{d.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-ink p-6 text-paper sm:p-7">
            <div>
              <p className="text-sm text-paper/60">
                from <span className="font-display text-2xl font-semibold text-paper">${journey.priceFrom}</span> / person
              </p>
              <p className="mt-1 text-xs text-paper/45">Every booking is confirmed directly with the host community.</p>
            </div>
            <a
              href="#plan"
              onClick={onClose}
              className="group inline-flex items-center gap-2.5 rounded-full bg-marigold px-6 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-marigold-soft"
            >
              Begin this yatra
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Journeys() {
  const [openId, setOpenId] = useState<string | null>(null)
  const open = journeys.find((j) => j.id === openId)

  return (
    <section id="journeys" className="relative scroll-mt-20 bg-paper text-ink">
      {/* torn-paper transition from the dark act above */}
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="block h-10 w-full text-ink-deep sm:h-12" aria-hidden="true">
        <path d="M0 0 L1440 0 L1440 12 C1320 30 1220 8 1090 22 C960 36 860 14 720 26 C580 38 480 12 350 24 C220 36 110 16 0 28 Z" fill="currentColor" />
      </svg>

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Curated circuits" tone="dark">
            Four journeys,
            <br />
            forty open doors.
          </SectionHeading>
          <Reveal delay={0.15}>
            <p className="max-w-sm leading-relaxed text-ink/60">
              Each circuit strings together villages that chose to host — routes shaped by the
              communities themselves, from Terai grasslands to Annapurna balconies.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-7 sm:mt-20 sm:grid-cols-2">
          {journeys.map((j, i) => (
            <Reveal key={j.id} delay={(i % 2) * 0.12} className="h-full">
              <JourneyCard journey={j} onOpen={() => setOpenId(j.id)} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="text-center text-sm text-ink/55">
            Dates flex around village life — festivals, harvests, weddings.{' '}
            <a href="#plan" className="font-semibold text-clay underline-offset-4 hover:underline">
              Tell us your month
            </a>{' '}
            and we’ll shape the route with your hosts.
          </p>
        </Reveal>
      </div>

      <AnimatePresence>{open && <JourneyModal journey={open} onClose={() => setOpenId(null)} />}</AnimatePresence>
    </section>
  )
}
