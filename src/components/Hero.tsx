import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { SkyLayer, FarPeaksLayer, MidRidgeLayer, NearRidgeLayer, VillageLayer } from '../art/HeroScene'
import { PrayerFlags } from '../art/Motifs'
import { Button } from './ui'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Layered parallax — far layers drift slower than near ones.
  const yFar = useTransform(scrollYProgress, [0, 1], [0, -40])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -90])
  const yNear = useTransform(scrollYProgress, [0, 1], [0, -150])
  const yVillage = useTransform(scrollYProgress, [0, 1], [0, -220])
  const yText = useTransform(scrollYProgress, [0, 1], [0, 160])
  const fadeText = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const layer = (mv: typeof yFar) => (reduce ? {} : { y: mv })

  return (
    <section ref={ref} id="top" className="relative h-[108svh] min-h-[640px] overflow-hidden">
      {/* scene */}
      <div className="absolute inset-0" aria-hidden="true">
        <SkyLayer />
        <motion.div style={layer(yFar)} className="absolute inset-0">
          <FarPeaksLayer />
        </motion.div>
        <motion.div style={layer(yMid)} className="absolute inset-0">
          <MidRidgeLayer />
        </motion.div>
        {/* mist band */}
        <motion.div
          style={layer(yMid)}
          className="absolute inset-x-0 top-[58%] h-40 bg-gradient-to-b from-transparent via-mist/14 to-transparent blur-2xl"
        />
        <motion.div style={layer(yNear)} className="absolute inset-0">
          <NearRidgeLayer />
        </motion.div>
        <motion.div style={layer(yVillage)} className="absolute inset-0">
          <VillageLayer />
        </motion.div>
        {/* legibility scrims behind the copy */}
        <div className="absolute inset-y-0 left-0 hidden w-[72%] bg-gradient-to-r from-ink-deep/65 via-ink-deep/30 to-transparent sm:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-ink-deep/45 to-ink-deep/10 sm:hidden" />
        {/* settle into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-deep" />
      </div>

      {/* prayer flags off the top corner, swaying in the morning wind */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: -22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
        className="pointer-events-none absolute -left-6 top-20 w-[min(46vw,420px)] origin-top-left sm:top-24"
        aria-hidden="true"
      >
        <motion.div
          animate={reduce ? {} : { rotate: [0, 1.6, 0, -1.1, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="origin-top-left"
        >
          <PrayerFlags className="w-full" />
        </motion.div>
      </motion.div>

      {/* copy */}
      <motion.div
        style={reduce ? {} : { y: yText, opacity: fadeText }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-5 pb-24 sm:px-8"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-marigold"
        >
          <span className="rule-h w-10 !opacity-60" />
          Community-rooted travel in Nepal
        </motion.p>

        <h1 className="font-display max-w-4xl text-[clamp(2.9rem,8vw,6.4rem)] leading-[0.98] font-medium text-paper">
          {['Arrive a stranger.', 'Leave family.'].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.14, ease: EASE }}
              >
                {i === 1 ? <em className="font-display-wonky text-marigold not-italic">{line}</em> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
          className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-paper/75"
        >
          Homestay journeys through Nepal's villages — where your hosts own the experience, your
          welcome is real, and the value of your visit stays in the community that gave it.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button href="#journeys">Explore journeys</Button>
          <Button href="#way" variant="ghost">
            The Yatra way
          </Button>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#way"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={reduce ? {} : { opacity: fadeText }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll to begin"
      >
        <span className="block h-12 w-px overflow-hidden bg-paper/20">
          <motion.span
            className="block h-4 w-px bg-marigold"
            animate={reduce ? {} : { y: [-16, 48] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>

      {/* Devanagari watermark */}
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute right-[-2%] bottom-[6%] z-[5] text-[clamp(6rem,18vw,15rem)] leading-none font-semibold text-paper/[0.05] select-none"
      >
        यात्रा
      </span>
    </section>
  )
}
