import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { SunMark } from '../art/Motifs'

interface Moment {
  time: string
  title: string
  body: string
}

const moments: Moment[] = [
  {
    time: '05:30',
    title: 'Tea before the sun',
    body: 'Aama is up first. You hear the stove, then smell the chiya — milk, ginger, and enough sugar to start a day. The peaks go pink before anyone speaks.',
  },
  {
    time: '09:00',
    title: 'Out to the terraces',
    body: 'Whatever the season asks: transplanting rice, cutting millet, carrying fodder. You will be slower than the grandmother. Everyone will be kind about it.',
  },
  {
    time: '13:00',
    title: 'Dal bhat, twice-warmed welcome',
    body: 'Lunch is dal bhat tarkari eaten cross-legged, refilled before you can refuse. You learn the most important sentence in Nepal: pugyo, pugyo — enough, enough!',
  },
  {
    time: '16:00',
    title: 'The village hour',
    body: 'School lets out and you are suddenly famous. A walk to the shrine, a card game on a verandah, the day’s gossip translated in both directions.',
  },
  {
    time: '19:00',
    title: 'Firelight & songs',
    body: 'Dinner by the kitchen fire, then someone finds a madal drum. You will be asked to sing something from home. Sing it. This is the night you’ll tell people about.',
  },
]

// Sky keyframes across the day — [top, horizon] pairs.
const SKY_STOPS = [0, 0.25, 0.5, 0.75, 1]
const SKY_TOP = ['#141f38', '#4f7396', '#5e88ab', '#7c5a68', '#0c1422']
const SKY_HORIZON = ['#e8a36a', '#c3d6de', '#d9e4dc', '#e0885a', '#2a2440']
const SUN_COLOR = ['#eeae4e', '#f6e2b0', '#f8ecc9', '#e8935a', '#e8d9b8']

function Scene({ progress }: { progress: MotionValue<number> }) {
  const top = useTransform(progress, SKY_STOPS, SKY_TOP)
  const horizon = useTransform(progress, SKY_STOPS, SKY_HORIZON)
  const sun = useTransform(progress, SKY_STOPS, SUN_COLOR)
  const background = useTransform(
    [top, horizon],
    ([t, h]) => `linear-gradient(to bottom, ${t} 0%, ${h} 100%)`,
  )
  // sun travels an arc: rises, peaks, sets — and fades out with the day
  const sunX = useTransform(progress, [0, 1], ['12%', '88%'])
  const sunY = useTransform(progress, [0, 0.5, 1], ['72%', '18%', '80%'])
  const sunOpacity = useTransform(progress, [0, 0.78, 0.92], [1, 1, 0])
  const stars = useTransform(progress, [0.72, 1], [0, 1])

  return (
    <motion.div style={{ background }} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* stars for the evening */}
      <motion.div style={{ opacity: stars }} className="absolute inset-0">
        <svg viewBox="0 0 1440 800" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <g fill="#f7f1e3">
            {[
              [120, 90, 1.4], [310, 150, 1], [480, 70, 1.5], [700, 180, 1], [890, 60, 1.2],
              [1060, 140, 1], [1240, 90, 1.4], [1380, 200, 1], [220, 260, 0.9], [960, 260, 0.9],
            ].map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} opacity={0.7} />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* sun */}
      <motion.div
        style={{ left: sunX, top: sunY, backgroundColor: sun, opacity: sunOpacity }}
        className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_80px_24px_rgba(238,174,78,0.35)] sm:h-20 sm:w-20"
      />

      {/* constant ridgeline + house silhouette */}
      <svg viewBox="0 0 1440 800" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMax slice">
        <path
          d="M0 640 C160 600 300 580 460 592 C620 604 740 566 900 578 C1060 590 1200 560 1440 586 L1440 800 L0 800 Z"
          fill="#0f1a2a"
          opacity="0.92"
        />
        {/* homestay — kept left of the caption card */}
        <g>
          <rect x="250" y="560" width="120" height="72" fill="#0c1422" />
          <path d="M238 560 L310 512 L382 560 Z" fill="#1a2638" />
          <path d="M238 560 L310 512 L382 560 L364 560 L310 524 L256 560 Z" fill="#c2543a" opacity="0.9" />
          <rect x="270" y="584" width="18" height="22" rx="1.5" fill="#e8a33d" />
          <rect x="314" y="584" width="18" height="22" rx="1.5" fill="#e8a33d" opacity="0.85" />
          {/* chimney smoke */}
          <circle cx="355" cy="500" r="5" fill="#f7f1e3" opacity="0.14" />
          <circle cx="362" cy="484" r="7" fill="#f7f1e3" opacity="0.1" />
          <circle cx="370" cy="464" r="9" fill="#f7f1e3" opacity="0.07" />
        </g>
      </svg>
    </motion.div>
  )
}

function MomentPanel({
  moment,
  index,
  progress,
}: {
  moment: Moment
  index: number
  progress: MotionValue<number>
}) {
  const n = moments.length
  const center = n === 1 ? 0.5 : index / (n - 1)
  const span = 1 / n
  const opacity = useTransform(
    progress,
    [center - span * 0.72, center - span * 0.24, center + span * 0.24, center + span * 0.72],
    [0, 1, 1, 0],
  )
  const y = useTransform(
    progress,
    [center - span * 0.72, center, center + span * 0.72],
    [44, 0, -44],
  )
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 bottom-0 px-6 pb-[14svh] sm:px-0"
      aria-hidden="true"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-paper/12 bg-ink-deep/55 p-7 backdrop-blur-md sm:p-9">
        <p className="font-display text-lg font-semibold text-marigold">{moment.time}</p>
        <h3 className="font-display mt-2 text-3xl font-medium text-paper sm:text-[2.1rem]">{moment.title}</h3>
        <p className="mt-3.5 leading-relaxed text-paper/75">{moment.body}</p>
      </div>
    </motion.div>
  )
}

export function DayInLife() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  // ease the ends so the first and last moments hold a beat longer
  const progress = useTransform(scrollYProgress, [0.04, 0.96], [0, 1], { clamp: true })

  if (reduce) {
    // Static, fully accessible fallback
    return (
      <section id="day" className="scroll-mt-20 bg-ink-deep">
        <div className="mx-auto max-w-4xl px-5 py-28 sm:px-8">
          <DayHeading />
          <ol className="mt-14 space-y-10">
            {moments.map((m) => (
              <li key={m.time} className="border-l-2 border-marigold/40 pl-6">
                <p className="font-display text-lg font-semibold text-marigold">{m.time}</p>
                <h3 className="font-display mt-1 text-2xl text-paper">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-paper/70">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    )
  }

  return (
    <section id="day" className="scroll-mt-0 bg-ink-deep">
      <div className="mx-auto max-w-4xl px-5 pt-28 pb-10 text-center sm:px-8 sm:pt-36">
        <DayHeading />
      </div>

      <div ref={ref} className="relative h-[420svh]">
        <div className="sticky top-0 h-svh overflow-hidden">
          <Scene progress={progress} />
          {moments.map((m, i) => (
            <MomentPanel key={m.time} moment={m} index={i} progress={progress} />
          ))}
          {/* progress dots */}
          <div className="absolute top-1/2 right-5 flex -translate-y-1/2 flex-col gap-2.5 sm:right-9">
            {moments.map((m, i) => (
              <Dot key={m.time} index={i} progress={progress} />
            ))}
          </div>
        </div>
      </div>

      {/* screen-reader accessible version of the sticky narrative */}
      <div className="sr-only">
        {moments.map((m) => (
          <p key={m.time}>
            {m.time} — {m.title}. {m.body}
          </p>
        ))}
      </div>
    </section>
  )
}

function Dot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const n = moments.length
  const center = index / (n - 1)
  const span = 1 / n
  const scale = useTransform(progress, [center - span / 2, center, center + span / 2], [1, 1.9, 1])
  const opacity = useTransform(progress, [center - span / 2, center, center + span / 2], [0.35, 1, 0.35])
  return <motion.span style={{ scale, opacity }} className="h-1.5 w-1.5 rounded-full bg-paper" />
}

function DayHeading() {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <span className="inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-marigold">
        <SunMark className="h-4 w-4" />
        From first light to firelight
      </span>
      <h2 className="font-display max-w-3xl text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1.04] font-medium text-paper text-balance">
        One day in the homestay
      </h2>
      <p className="max-w-xl leading-relaxed text-paper/60">
        Scroll through a single day in the hills — the way our travellers actually live it.
      </p>
    </div>
  )
}
