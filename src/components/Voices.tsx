import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { testimonials } from '../data/site'
import { SectionHeading } from './ui'

export function Voices() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { margin: '-20%' })
  const t = testimonials[index]

  // gentle auto-rotation while visible; any manual pick pauses it
  useEffect(() => {
    if (reduce || paused || !inView) return
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 8000)
    return () => clearInterval(id)
  }, [reduce, paused, inView])

  return (
    <section ref={sectionRef} className="bg-paper text-ink">
      <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-36">
        <SectionHeading eyebrow="Voices from the verandah" tone="dark" align="center">
          They went as guests.
        </SectionHeading>

        <div className="relative mt-14 min-h-[300px] sm:mt-16 sm:min-h-[260px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={reduce ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -18 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="font-display block text-6xl leading-none text-clay/30" aria-hidden="true">
                “
              </span>
              <blockquote className="font-display -mt-4 text-[clamp(1.3rem,2.6vw,1.9rem)] leading-[1.4] font-light text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="mt-1 text-sm tracking-wide text-ink/50">{t.detail}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                setIndex(i)
                setPaused(true)
              }}
              aria-label={`Show testimonial from ${item.name}`}
              aria-pressed={i === index}
              className={`h-2.5 rounded-full transition-all duration-400 ${
                i === index ? 'w-8 bg-clay' : 'w-2.5 bg-ink/20 hover:bg-ink/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* villages ticker — the wider family of host communities */}
      <div className="overflow-hidden border-t border-ink/8 py-6" aria-hidden="true">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap motion-reduce:animate-none">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center gap-8">
              {[
                'Bandipur', 'Ghalegaun', 'Panauti', 'Barauli', 'Sirubari', 'Ghandruk',
                'Ramkot', 'Ghanpokhara', 'Namobuddha', 'Chitlang', 'Balthali', 'Nuwakot',
              ].map((v) => (
                <span key={v} className="flex items-center gap-8 font-display text-xl text-ink/35">
                  {v}
                  <svg viewBox="0 0 8 8" className="h-2 w-2 text-clay/50" fill="currentColor">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
