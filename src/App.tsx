import { useLenis } from './hooks/useLenis'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
import { Principles } from './components/Principles'
import { Journeys } from './components/Journeys'
import { DayInLife } from './components/DayInLife'
import { Volunteer } from './components/Volunteer'
import { Impact } from './components/Impact'
import { Voices } from './components/Voices'
import { PlanCta } from './components/PlanCta'
import { Footer } from './components/Footer'
import { Torn } from './components/Torn'

export default function App() {
  useLenis()

  return (
    <div className="grain">
      <a
        href="#journeys"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-marigold focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-deep"
      >
        Skip to journeys
      </a>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Principles />
        <Journeys />
        <div className="bg-ink-deep">
          <Torn color="text-paper" />
        </div>
        <DayInLife />
        <div className="bg-paper-warm">
          <Torn color="text-ink-deep" />
        </div>
        <Volunteer />
        <div className="bg-ink">
          <Torn color="text-paper-warm" />
        </div>
        <Impact />
        <div className="bg-paper">
          <Torn color="text-ink" />
        </div>
        <Voices />
        <div className="bg-ink-deep">
          <Torn color="text-paper" />
        </div>
        <PlanCta />
      </main>
      <Footer />
    </div>
  )
}
