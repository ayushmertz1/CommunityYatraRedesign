import { Reveal, SectionHeading } from './ui'
import { Icon } from '../art/Motifs'

const principles = [
  {
    icon: 'home',
    num: '०१',
    title: 'Stay with families',
    body: 'No hotels pretending to be homes. You sleep in a family’s spare room, wake to their rooster, and drink tea they grew. Households host in rotation, so the welcome never wears thin.',
  },
  {
    icon: 'bowl',
    num: '०२',
    title: 'Share the everyday',
    body: 'Cut grass for the buffalo. Fold momos badly, then better. Learn ten words of Gurung and use all of them at dinner. The itinerary is life itself, lived alongside.',
  },
  {
    icon: 'seed',
    num: '०३',
    title: 'Sustain the village',
    body: 'Every circuit is community-owned. 74% of what you pay stays in the village — with your hosts, your guides, and a common fund the community votes on each season.',
  },
]

export function Principles() {
  return (
    <section id="way" className="relative scroll-mt-20 bg-ink-deep">
      <div className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 sm:pb-40">
        <SectionHeading eyebrow="The Yatra Way">
          Three promises,
          <br />
          kept in every village.
        </SectionHeading>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-paper/10 sm:mt-20 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className="h-full">
              <article className="group relative h-full bg-ink-deep p-8 transition-colors duration-500 hover:bg-ink sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-marigold/30 text-marigold transition-all duration-500 group-hover:border-marigold group-hover:bg-marigold group-hover:text-ink-deep">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-lg text-paper/25" aria-hidden="true">
                    {p.num}
                  </span>
                </div>
                <h3 className="font-display mt-8 text-2xl font-medium text-paper">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-paper/60">{p.body}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-marigold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
