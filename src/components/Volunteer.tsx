import { volunteerTracks } from '../data/site'
import { Icon, PrayerFlags } from '../art/Motifs'
import { Button, Reveal, SectionHeading } from './ui'

export function Volunteer() {
  return (
    <section id="volunteer" className="relative scroll-mt-20 overflow-hidden bg-paper-warm text-ink">
      <div className="pointer-events-none absolute -right-6 top-12 w-[min(40vw,360px)] opacity-80" aria-hidden="true">
        <PrayerFlags className="w-full" flags={7} string="#47614f" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Give a hand, not a handout" tone="dark">
              Volunteer where
              <br />
              the village leads.
            </SectionHeading>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-lg text-[1.02rem] leading-relaxed text-ink/65">
                Our volunteering is deliberately unglamorous: no orphanage tours, no
                photo-op builds. Village committees decide what is needed each season; you
                bring your hands, your patience and your appetite. Most placements pair with
                a homestay circuit, so your work and your welcome share the same roof.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-9">
                <Button href="#plan" variant="paper">
                  Ask about placements
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            {volunteerTracks.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.1}>
                <article className="group flex gap-5 rounded-2xl border border-ink/10 bg-paper-bright p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-clay/40 hover:shadow-[0_18px_44px_-20px_rgba(160,61,40,0.35)] sm:p-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-clay/10 text-clay transition-colors duration-500 group-hover:bg-clay group-hover:text-paper">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">{t.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink/60">{t.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
