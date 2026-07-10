import { nav } from '../data/site'
import { SunMark } from '../art/Motifs'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-paper/8 bg-ink-deep">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-3" aria-label="Community Yatra — back to top">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-marigold text-ink-deep">
                <SunMark className="h-6 w-6" />
              </span>
              <span className="font-display text-xl font-semibold">
                Community <span className="text-marigold">Yatra</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-paper/50">
              Community-based tourism from Nepal's villages — homestays, cultural circuits and
              volunteering, owned by the people who host you.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            {[...nav, { label: 'Plan your yatra', href: '#plan' }].map((item) => (
              <a key={item.href + item.label} href={item.href} className="text-paper/60 transition-colors hover:text-marigold">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-paper/60">
            <p className="font-semibold text-paper/80">Kathmandu office</p>
            <p className="mt-3 leading-relaxed">
              Jhamsikhel, Lalitpur
              <br />
              Kathmandu valley, Nepal
            </p>
            <a href="mailto:namaste@communityyatra.com" className="mt-3 block text-marigold underline-offset-4 hover:underline">
              namaste@communityyatra.com
            </a>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="mt-16 overflow-hidden" aria-hidden="true">
          <p className="font-display translate-y-[0.28em] text-center text-[clamp(3rem,12.5vw,11rem)] leading-none font-semibold whitespace-nowrap text-paper/[0.06] select-none">
            शुभ यात्रा
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-paper/8 pt-6 text-xs text-paper/35 sm:flex-row">
          <p>© {year} Community Yatra. Made with the villages of Nepal.</p>
          <p>
            <span aria-hidden="true">शुभ यात्रा</span> — safe travels
          </p>
        </div>
      </div>
    </footer>
  )
}
