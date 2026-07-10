import { team } from '../data/team'
import { Reveal, SectionHeading } from './ui'

/** A duotone-treated portrait — unifies photos shot in wildly different settings. */
function Portrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-full bg-ink-soft">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover grayscale-[15%] contrast-[1.05] saturate-[0.85]"
      />
      <div className="absolute inset-0 bg-clay mix-blend-color" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-deep/25" aria-hidden="true" />
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-paper/15" aria-hidden="true" />
    </div>
  )
}

export function Team() {
  const [lead, ...rest] = team

  return (
    <section id="team" className="relative scroll-mt-20 bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <SectionHeading eyebrow="The people behind the doors" tone="dark">
          A small team,
          <br />
          working for the villages.
        </SectionHeading>

        <div className="mt-16 grid gap-10 sm:mt-20 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-ink/10 bg-paper-bright p-7 sm:p-8">
              <div className="w-28">
                <Portrait src={lead.image} alt={lead.name} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium text-ink">{lead.name}</h3>
                <p className="mt-1 text-sm font-semibold tracking-wide text-clay uppercase">{lead.role}</p>
                <p className="mt-4 leading-relaxed text-ink/65">{lead.bio}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.08}>
                <article className="flex h-full flex-col items-start gap-4 rounded-2xl border border-ink/10 bg-paper-bright p-6">
                  <div className="w-20">
                    <Portrait src={member.image} alt={member.name} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium text-ink">{member.name}</h4>
                    <p className="mt-0.5 text-xs font-semibold tracking-wide text-clay uppercase">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">{member.bio}</p>
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
