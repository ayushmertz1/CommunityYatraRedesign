import Seo from "@/components/Seo";
import { TLink } from "@/lib/transition";
import { Lines } from "@/lib/motion";
import { journeys, upcomingJourneys } from "@/data/journeys";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";

function JourneyRow({ index, journey }: { index: number; journey: (typeof journeys)[number] }) {
  const even = index % 2 === 1;
  return (
    <article data-reveal className="border-t border-line py-14 md:py-20">
      <TLink
        to={`/journeys/${journey.slug}`}
        className={`group grid gap-8 lg:gap-16 lg:grid-cols-2 items-center ${even ? "" : ""}`}
      >
        <div className={even ? "lg:order-2" : ""}>
          <div className={`img-frame img-zoom aspect-[16/10] ${even ? "rounded-t-[5rem] rounded-b-xl" : "rounded-xl"}`}>
            <div data-parallax="8" className="h-[112%] w-full -mt-[6%]">
              <img src={journey.imageWide} alt="" loading="lazy" />
            </div>
          </div>
        </div>

        <div className={even ? "lg:order-1" : ""}>
          <p className="flex items-baseline gap-4 mb-5">
            <span className="font-display italic text-clay text-[1.4rem]">{String(index + 1).padStart(2, "0")}</span>
            <span className="eyebrow text-ink-faint">{journey.region}</span>
          </p>
          <h2 className="display-md text-[clamp(1.9rem,3.6vw,2.9rem)] group-hover:text-clay transition-colors">
            {journey.title}
          </h2>
          <p className="text-[1.05rem] text-ink-soft leading-[1.8] mt-5 max-w-xl">{journey.intro}</p>

          <dl className="flex flex-wrap gap-x-10 gap-y-3 mt-7 text-[0.9rem]">
            <div>
              <dt className="text-ink-faint text-[0.75rem] uppercase tracking-[0.12em] font-semibold">Duration</dt>
              <dd className="font-medium mt-0.5">{journey.duration}</dd>
            </div>
            <div>
              <dt className="text-ink-faint text-[0.75rem] uppercase tracking-[0.12em] font-semibold">Pace</dt>
              <dd className="font-medium mt-0.5">{journey.pace}</dd>
            </div>
          </dl>

          <span className="link-arrow text-clay font-semibold text-[0.95rem] mt-8 inline-flex">
            Read the journey <ArrowRight />
          </span>
        </div>
      </TLink>
    </article>
  );
}

export default function Journeys() {
  return (
    <>
      <Seo
        title="Journeys — Community Yatra"
        description="Homestay circuits, agriculture, arts & crafts and volunteer journeys across Nepal — designed with the communities that host them."
      />

      <header className="container-site pt-44 pb-16 md:pb-24">
        <p data-reveal className="eyebrow text-clay mb-6">The journeys</p>
        <h1 data-reveal-line className="display-hero text-[clamp(2.8rem,7vw,6rem)] max-w-4xl">
          <Lines>{["Choose the Nepal", "you want to meet."]}</Lines>
        </h1>
        <p data-reveal className="max-w-xl text-[1.08rem] text-ink-soft leading-[1.8] mt-8">
          Every journey below was designed with the villages that host it — not sold to them. Pick a
          thread: farming, craft, service, or the slow circuit that ties them all together.
        </p>
      </header>

      <div className="container-site">
        {journeys.map((j, i) => (
          <JourneyRow key={j.slug} index={i} journey={j} />
        ))}
      </div>

      {/* On-request journeys */}
      <section className="container-site py-(--spacing-section)">
        <div className="bg-pine-deep text-paper rounded-2xl px-7 py-14 md:p-16 overflow-hidden relative">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -right-4 -bottom-10 text-[11rem] leading-none text-pine opacity-60"
            style={{ fontFamily: "var(--font-devanagari)" }}
           lang="ne">
            यात्रा
          </span>
          <div className="relative grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center">
            <div>
              <p data-reveal className="eyebrow text-marigold mb-5">On request</p>
              <h2 data-reveal className="display-md text-[clamp(1.8rem,3.4vw,2.7rem)]">
                Six more journeys, shaped to your season
              </h2>
              <p data-reveal className="text-pine-mist/85 mt-5 leading-relaxed">
                Cooking, yoga, language, family, festival and project journeys run whenever the timing is
                right. Tell us your dates and we will build the route.
              </p>
              <TLink data-reveal to="/contact" className="btn-primary mt-8">
                Start a conversation <ArrowUpRight />
              </TLink>
            </div>
            <ul data-reveal className="grid grid-cols-2 gap-x-8 gap-y-1">
              {upcomingJourneys.map((u) => (
                <li key={u.title} className="border-b border-line-dark py-3.5">
                  <p className="font-display text-[1.15rem] font-[450]">{u.title}</p>
                  <p className="text-[0.82rem] text-pine-mist/70 mt-0.5">{u.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
