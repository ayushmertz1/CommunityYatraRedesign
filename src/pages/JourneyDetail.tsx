import { useParams, Navigate } from "react-router-dom";
import Seo from "@/components/Seo";
import { TLink } from "@/lib/transition";
import { Lines } from "@/lib/motion";
import { journeys } from "@/data/journeys";
import { ArrowRight, Check, Minus } from "@/components/Icons";

export default function JourneyDetail() {
  const { slug } = useParams();
  const journey = journeys.find((j) => j.slug === slug);

  if (!journey) return <Navigate to="/journeys" replace />;

  const others = journeys.filter((j) => j.slug !== journey.slug).slice(0, 3);

  return (
    <>
      <Seo title={`${journey.title} — Community Yatra`} description={journey.intro} />

      {/* Header */}
      <header className="container-site pt-44 pb-14">
        <TLink to="/journeys" className="link-arrow text-ink-faint text-[0.88rem] font-medium mb-8 inline-flex hover:text-clay transition-colors">
          <span className="rotate-180 inline-flex"><ArrowRight /></span> All journeys
        </TLink>
        <h1 data-reveal-line className="display-hero text-[clamp(2.6rem,6.5vw,5.5rem)] max-w-5xl">
          <Lines>{journey.title.split(" ").length > 3
            ? [journey.title.split(" ").slice(0, Math.ceil(journey.title.split(" ").length / 2)).join(" "),
               journey.title.split(" ").slice(Math.ceil(journey.title.split(" ").length / 2)).join(" ")]
            : [journey.title]}
          </Lines>
        </h1>
        <p data-reveal className="font-display italic text-[clamp(1.15rem,2.2vw,1.5rem)] text-clay mt-6 max-w-2xl">
          {journey.tagline}
        </p>

        <dl data-reveal className="flex flex-wrap gap-x-12 gap-y-4 mt-10 pt-8 border-t border-line text-[0.95rem]">
          {[
            ["Duration", journey.duration],
            ["Region", journey.region],
            ["Pace", journey.pace],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-ink-faint text-[0.75rem] uppercase tracking-[0.12em] font-semibold">{k}</dt>
              <dd className="font-medium mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Hero image */}
      <div className="container-site pb-16">
        <div data-reveal className="img-frame aspect-[21/10] rounded-2xl">
          <div data-parallax="12" className="h-[116%] w-full -mt-[8%]">
            <img src={journey.imageWide} alt={journey.title} />
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="container-site pb-(--spacing-section)">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <p data-reveal className="eyebrow text-clay">The story</p>
          </div>
          <div className="lg:col-span-7">
            {journey.story.map((para, i) => (
              <p
                key={i}
                data-reveal
                className={`${i === 0 ? "dropcap text-[1.15rem]" : "text-[1.05rem]"} leading-[1.85] text-ink-soft ${i > 0 ? "mt-6" : ""}`}
              >
                {para}
              </p>
            ))}
            {journey.note && (
              <aside data-reveal className="mt-8 border-l-2 border-marigold bg-paper-deep rounded-r-lg px-6 py-5 text-[0.98rem] text-ink-soft leading-relaxed">
                {journey.note}
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-paper-deep border-y border-line">
        <div className="container-site py-(--spacing-section)">
          <p data-reveal className="eyebrow text-clay mb-5">What you'll live</p>
          <h2 data-reveal-line className="display-lg text-[clamp(2rem,4vw,3.2rem)] mb-14">
            <Lines>{["Not sights —", "experiences"]}</Lines>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-xl overflow-hidden">
            {journey.experiences.map((e, i) => (
              <div key={e.title} data-reveal data-reveal-delay={`${i * 0.06}`} className="bg-paper-deep p-7 md:p-8">
                <span className="font-display italic text-clay text-[1.3rem]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[1.3rem] font-[480] mt-3">{e.title}</h3>
                <p className="text-[0.93rem] text-ink-soft leading-relaxed mt-2.5">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      {journey.itinerary && (
        <section className="container-site py-(--spacing-section)">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p data-reveal className="eyebrow text-clay mb-5">Day by day</p>
              <h2 data-reveal-line className="display-lg text-[clamp(2rem,4vw,3.2rem)]">
                <Lines>{["The road,", "unrolled"]}</Lines>
              </h2>
            </div>
            <ol className="lg:col-span-7 lg:col-start-6">
              {journey.itinerary.map((d, i) => (
                <li key={i} data-reveal className="grid grid-cols-[4.5rem_1fr] gap-5 border-t border-line py-7 last:border-b">
                  <span className="font-display italic text-clay text-[1.1rem] pt-0.5">{d.day}</span>
                  <div>
                    <h3 className="font-display text-[1.35rem] font-[480]">{d.title}</h3>
                    <p className="text-[0.97rem] text-ink-soft leading-[1.75] mt-2">{d.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Included / not included */}
      <section className="container-site pb-(--spacing-section)">
        <div className="grid md:grid-cols-2 gap-7">
          <div data-reveal className="bg-pine-deep text-paper rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-[1.5rem] font-[480] mb-6">What's included</h2>
            <ul className="space-y-3.5">
              {journey.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.97rem] text-pine-mist">
                  <Check className="mt-1 shrink-0 text-marigold" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="border border-line rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-[1.5rem] font-[480] mb-6">Not included</h2>
            <ul className="space-y-3.5">
              {journey.notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.97rem] text-ink-soft">
                  <Minus className="mt-1 shrink-0 text-clay" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 pt-7 border-t border-line">
              <p className="text-[0.92rem] text-ink-faint mb-5">
                Dates and group sizes are flexible — every departure is arranged directly with the host
                communities.
              </p>
              <TLink to="/contact" className="btn-primary">
                Ask about this journey <ArrowRight />
              </TLink>
            </div>
          </div>
        </div>
      </section>

      {/* More journeys */}
      <section className="container-site pb-(--spacing-section)">
        <p data-reveal className="eyebrow text-clay mb-8">Keep wandering</p>
        <div className="grid sm:grid-cols-3 gap-7">
          {others.map((j) => (
            <TLink key={j.slug} to={`/journeys/${j.slug}`} className="group block" data-reveal>
              <div className="img-frame img-zoom aspect-[4/3] rounded-xl">
                <img src={j.image} alt="" loading="lazy" />
              </div>
              <h3 className="font-display text-[1.3rem] font-[450] mt-4 group-hover:text-clay transition-colors">
                {j.shortTitle}
              </h3>
              <p className="text-[0.88rem] text-ink-faint mt-1">{j.duration}</p>
            </TLink>
          ))}
        </div>
      </section>
    </>
  );
}
