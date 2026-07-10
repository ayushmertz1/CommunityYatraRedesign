import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Stitch } from '../art/Motifs'

const SENTENCE =
  'In Nepali, yatra means journey — not the kind measured in kilometres, but the kind that changes who comes home.'

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.16, 1])
  const highlight = word === 'yatra' || word === 'journey'
  return (
    <motion.span style={{ opacity }} className={highlight ? 'text-marigold italic' : undefined}>
      {word}{' '}
    </motion.span>
  )
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.82', 'end 0.42'],
  })
  const words = SENTENCE.split(' ')

  return (
    <section className="relative bg-ink-deep">
      <div className="mx-auto max-w-5xl px-5 py-28 sm:px-8 sm:py-40">
        <Stitch className="mb-14 h-1 w-24 text-marigold" />
        <div ref={ref}>
          <p className="font-display text-[clamp(1.7rem,3.6vw,3.1rem)] leading-[1.28] font-light text-paper">
            {reduce ? (
              <span>
                {SENTENCE.split(' ').map((w, i) => (
                  <span key={i} className={w === 'yatra' || w === 'journey' ? 'text-marigold italic' : undefined}>
                    {w}{' '}
                  </span>
                ))}
              </span>
            ) : (
              words.map((w, i) => (
                <Word key={i} word={w} index={i} total={words.length} progress={scrollYProgress} />
              ))
            )}
          </p>
        </div>
        <p className="mt-12 max-w-2xl text-[1.02rem] leading-relaxed text-paper/60">
          Community Yatra Pvt. Ltd. was started to promote the Nepali community through tourism
          development — empowering hosts by preserving and exchanging local culture, and
          safeguarding the environment for sustainable tourism, with the long-term objective of a
          Net Zero Road Map. No resorts. No middlemen. Just doors that open, and tables that make
          room.
        </p>
      </div>
    </section>
  )
}
