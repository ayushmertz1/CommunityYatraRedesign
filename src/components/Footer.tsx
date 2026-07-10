import { nav, contact } from '../data/site'
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
            <p className="mt-3 leading-relaxed">{contact.address}</p>
            <a href={`mailto:${contact.email}`} className="mt-3 block text-marigold underline-offset-4 hover:underline">
              {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="mt-1.5 block text-paper/60 hover:text-paper">
              {contact.phoneDisplay}
            </a>
            <div className="mt-4 flex items-center gap-4">
              <a href={contact.facebook} aria-label="Community Yatra on Facebook" className="text-paper/50 hover:text-marigold">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.9 2 14.56 2 11.8 2 10 3.66 10 6.7v2.8H7v4h3V22h4Z" />
                </svg>
              </a>
              <a href={contact.instagram} aria-label="Community Yatra on Instagram" className="text-paper/50 hover:text-marigold">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={contact.linkedin} aria-label="Community Yatra on LinkedIn" className="text-paper/50 hover:text-marigold">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38ZM5.25 3.2a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18Z" />
                </svg>
              </a>
            </div>
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
