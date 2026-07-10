import { useState, type FormEvent } from 'react'
import { journeys } from '../data/journeys'
import { PrayerFlags } from '../art/Motifs'
import { Reveal, SectionHeading } from './ui'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const inputCls =
  'w-full rounded-xl border border-paper/15 bg-paper/5 px-4 py-3.5 text-paper placeholder:text-paper/35 transition-colors focus:border-marigold/70 focus:bg-paper/8 focus:outline-none'

export function PlanCta() {
  const [interest, setInterest] = useState<string[]>([])
  const [sent, setSent] = useState(false)

  const toggle = (id: string) =>
    setInterest((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]))

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const chosen = journeys.filter((j) => interest.includes(j.id)).map((j) => j.name)
    const body = [
      `Namaste! I'd like to plan a yatra.`,
      ``,
      `Name: ${data.get('name')}`,
      `Travelling in: ${data.get('month') || 'flexible'}`,
      `Interested in: ${chosen.length ? chosen.join(', ') : 'not sure yet'}`,
      ``,
      `${data.get('message') || ''}`,
    ].join('\n')
    window.location.href = `mailto:namaste@communityyatra.com?subject=${encodeURIComponent(
      'Planning my yatra',
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="plan" className="relative scroll-mt-20 overflow-hidden bg-ink-deep">
      {/* warm hearth glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-marigold/8 blur-[120px]"
      />
      <div className="pointer-events-none absolute -left-8 top-14 w-[min(42vw,380px)]" aria-hidden="true">
        <PrayerFlags className="w-full" flags={8} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <SectionHeading eyebrow="Begin the conversation">
              Every yatra starts
              <br />
              with a hello.
            </SectionHeading>
            <Reveal delay={0.15}>
              <div className="mt-9 space-y-6 text-paper/65">
                <p className="max-w-md leading-relaxed">
                  Tell us when you can travel and what pulls at you — mountains, kitchens,
                  classrooms, grasslands. We reply within two days, usually with more
                  questions. Good journeys are planned like meals: together.
                </p>
                <div className="space-y-2.5 text-[0.95rem]">
                  <p>
                    <span className="text-paper/40">Write —</span>{' '}
                    <a href="mailto:namaste@communityyatra.com" className="text-marigold underline-offset-4 hover:underline">
                      namaste@communityyatra.com
                    </a>
                  </p>
                  <p>
                    <span className="text-paper/40">Call / WhatsApp —</span>{' '}
                    <a href="tel:+9779800000000" className="text-paper hover:text-marigold">
                      +977 98 0000 0000
                    </a>
                  </p>
                  <p>
                    <span className="text-paper/40">Find us —</span> Jhamsikhel, Lalitpur · Kathmandu valley
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-paper/10 bg-ink/60 p-7 backdrop-blur-sm sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-paper/70">Your name</span>
                  <input name="name" required autoComplete="name" placeholder="Pasang Lhamu" className={inputCls} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-paper/70">Travelling in</span>
                  <select name="month" className={`${inputCls} appearance-none`} defaultValue="">
                    <option value="" className="bg-ink">
                      I'm flexible
                    </option>
                    {months.map((m) => (
                      <option key={m} value={m} className="bg-ink">
                        {m}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <fieldset className="mt-6">
                <legend className="mb-3 text-sm font-medium text-paper/70">Drawn to</legend>
                <div className="flex flex-wrap gap-2.5">
                  {journeys.map((j) => {
                    const active = interest.includes(j.id)
                    return (
                      <button
                        key={j.id}
                        type="button"
                        onClick={() => toggle(j.id)}
                        aria-pressed={active}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          active
                            ? 'border-marigold bg-marigold text-ink-deep'
                            : 'border-paper/20 text-paper/70 hover:border-paper/50 hover:text-paper'
                        }`}
                      >
                        {j.place}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <label className="mt-6 block">
                <span className="mb-2 block text-sm font-medium text-paper/70">Anything else?</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Two of us, vegetarian, terrified of leeches…"
                  className={`${inputCls} resize-none`}
                />
              </label>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-marigold px-7 py-4 font-semibold text-ink-deep transition-all duration-300 hover:bg-marigold-soft hover:shadow-[0_10px_36px_-10px_rgba(232,163,61,0.65)]"
              >
                Send our way
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h15m0 0-6-6m6 6-6 6" />
                </svg>
              </button>

              {sent && (
                <p className="mt-4 text-center text-sm text-marigold-soft" role="status">
                  Your mail app should be opening — if not, write to namaste@communityyatra.com. Namaste!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
