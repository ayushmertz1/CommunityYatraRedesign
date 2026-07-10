import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { impactStats } from '../data/site'
import { Reveal, SectionHeading } from './ui'

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, reduce])

  return (
    <span ref={ref} className="font-display text-[clamp(2.8rem,6vw,4.6rem)] leading-none font-semibold text-paper tabular-nums">
      {display.toLocaleString()}
      <span className="text-marigold">{suffix}</span>
    </span>
  )
}

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-20 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <SectionHeading eyebrow="Where the money goes">
          Tourism that pays
          <br />
          its hosts first.
        </SectionHeading>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-paper/10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-ink p-8 sm:p-9">
                <CountUp value={s.value} suffix={s.suffix} />
                <div>
                  <p className="font-semibold text-paper">{s.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/50">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="max-w-2xl text-sm leading-relaxed text-paper/45">
            Figures audited with our village committees each season. The remaining 26% covers
            transport, park permits, insurance and the four of us in the Kathmandu office —
            our books are open, ask and we’ll show you.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
