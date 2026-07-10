import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Icon, SunMark } from '../art/Motifs'

/** Scroll-into-view reveal with a soft rise. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Eyebrow + display heading used at the top of each act. */
export function SectionHeading({
  eyebrow,
  children,
  align = 'left',
  tone = 'light',
}: {
  eyebrow: string
  children: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
            tone === 'light' ? 'text-marigold' : 'text-clay'
          }`}
        >
          <SunMark className="h-4 w-4" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display max-w-3xl text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1.04] font-medium text-balance">
          {children}
        </h2>
      </Reveal>
    </div>
  )
}

/** Primary CTA — marigold pill with an arrow that leans into the journey. */
export function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
}: {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost' | 'paper'
  onClick?: () => void
  className?: string
}) {
  const base =
    'group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'
  const variants = {
    primary:
      'bg-marigold text-ink-deep hover:bg-marigold-soft hover:shadow-[0_10px_36px_-10px_rgba(232,163,61,0.65)]',
    ghost:
      'border border-paper/30 text-paper hover:border-paper/70 hover:bg-paper/5',
    paper:
      'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper',
  }
  const cls = `${base} ${variants[variant]} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <Icon
        name="arrow"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
      />
    </>
  )
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}
