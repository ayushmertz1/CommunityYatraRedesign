import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, contact } from '../data/site'
import { SunMark } from '../art/Motifs'

function Wordmark({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`group flex items-center gap-2.5 ${className}`} aria-label="Community Yatra — home">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-marigold text-ink-deep transition-transform duration-500 group-hover:rotate-90">
        <SunMark className="h-5 w-5" />
      </span>
      <span className="font-display text-lg leading-none font-semibold tracking-tight">
        Community
        <br />
        <span className="text-marigold">Yatra</span>
      </span>
    </a>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 border-b transition-all duration-500 ${
            scrolled
              ? 'border-paper/8 bg-ink-deep/70 backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        />
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.85rem] font-medium tracking-wide text-paper/80 transition-colors hover:text-paper"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-marigold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#plan"
            className="rounded-full border border-marigold/70 px-5 py-2 text-[0.85rem] font-semibold text-marigold transition-all duration-300 hover:bg-marigold hover:text-ink-deep"
          >
            Plan your yatra
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-paper transition-all duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-6 bg-paper transition-all duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink-deep/97 px-6 pt-28 pb-10 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display border-b border-paper/8 py-4 text-3xl font-medium text-paper"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#plan"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + nav.length * 0.06, duration: 0.5 }}
                className="font-display py-4 text-3xl font-medium text-marigold"
              >
                Plan your yatra
              </motion.a>
            </nav>
            <p className="text-sm text-paper/50">
              Kathmandu, Nepal · {contact.email}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
