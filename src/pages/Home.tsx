import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Seo from "@/components/Seo";
import Marquee from "@/components/Marquee";
import { TLink } from "@/lib/transition";
import { Lines, prefersReducedMotion, useCountUp } from "@/lib/motion";
import { journeys, upcomingJourneys } from "@/data/journeys";
import { homestays, testimonials, galleryImages } from "@/data/site";
import { ArrowDown, ArrowRight, ArrowUpRight, Bed, MapPin } from "@/components/Icons";

/* ————— Hero ————— */

function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      // Set initial states here (not in markup) so the hero is fully
      // visible when motion is reduced or JS fails.
      gsap.set(".hero-line .line-inner", { y: "110%" });
      gsap.set(".hero-fade", { opacity: 0, y: 24 });
      gsap.set(".hero-img", { clipPath: "inset(100% 0 0 0)" });
      gsap.set(".hero-img img", { scale: 1.18 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(".hero-line .line-inner", { y: 0, duration: 1.15, stagger: 0.1, delay: 0.15 })
        .to(".hero-fade", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, "-=0.7")
        .to(".hero-img", { clipPath: "inset(0% 0 0 0)", duration: 1.3, ease: "power3.inOut" }, 0.25)
        .to(".hero-img img", { scale: 1, duration: 1.6, ease: "power3.out" }, 0.25);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-dvh flex flex-col justify-end overflow-hidden">
      {/* Devanagari watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-6 top-[10rem] text-[clamp(9rem,22vw,20rem)] leading-none text-sand"
        style={{ fontFamily: "var(--font-devanagari)" }}
       lang="ne">
        यात्रा
      </span>

      <div className="container-site relative grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-end pt-36 pb-16">
        <div className="relative z-10">
          <p className="hero-fade eyebrow text-clay mb-7">
            Community-rooted travel · Nepal
          </p>
          <h1 className="display-hero text-[clamp(3rem,8.5vw,7.5rem)]">
            <span className="hero-line block overflow-hidden pb-1">
              <span className="line-inner block">Travel that</span>
            </span>
            <span className="hero-line block overflow-hidden pb-1">
              <span className="line-inner block">
                <em className="text-clay">belongs</em> to
              </span>
            </span>
            <span className="hero-line block overflow-hidden pb-2">
              <span className="line-inner block">the village.</span>
            </span>
          </h1>

          <p className="hero-fade max-w-md text-[1.06rem] text-ink-soft mt-8 leading-relaxed">
            Homestays, farming, craft and culture across Nepal — journeys built with communities, where
            every rupee stays in the place that welcomes you.
          </p>

          <div className="hero-fade flex flex-wrap gap-4 mt-10">
            <TLink to="/journeys" className="btn-primary">
              Explore journeys <ArrowRight />
            </TLink>
            <TLink to="/about" className="btn-ghost">
              Our story
            </TLink>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative hidden lg:block">
          <div className="hero-img img-frame aspect-[3.4/4] rounded-t-[10rem] rounded-b-2xl">
            <div data-parallax="8" className="h-[112%] w-full -mt-[6%]">
              <img src="/images/hero.webp" alt="Terraced hills and village houses in the Nepali mid-hills" fetchPriority="high" />
            </div>
          </div>
          <figure className="hero-fade absolute -left-16 bottom-10 w-44 rotate-[-4deg] bg-cream p-2.5 pb-4 shadow-[0_18px_40px_rgba(34,29,21,0.18)]">
            <div className="img-frame aspect-square">
              <img src="/images/diyo.webp" alt="An oil lamp offering" loading="lazy" />
            </div>
            <figcaption className="font-display italic text-[0.8rem] text-ink-soft mt-2.5 text-center">
              an evening diyo, Kathmandu
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Mobile hero image */}
      <div className="container-site lg:hidden pb-10">
        <div className="hero-img img-frame aspect-[4/3] rounded-t-[6rem] rounded-b-xl">
          <img src="/images/hero.webp" alt="Terraced hills and village houses in the Nepali mid-hills" fetchPriority="high" />
        </div>
      </div>

      <div className="hero-fade container-site pb-8 hidden md:flex items-center gap-3 text-ink-faint text-[0.82rem]">
        <ArrowDown className="animate-bounce" />
        Scroll to begin
      </div>
    </section>
  );
}

/* ————— Place-name ticker ————— */

function PlacesTicker() {
  const places = ["Bandipur", "Dharampani", "Chitwan", "Pokhara", "Kathmandu", "Gorkha", "Nuwakot", "Janakpur", "Ilam"];
  return (
    <div className="border-y border-line bg-paper-deep py-5">
      <Marquee duration={46}>
        {places.map((p) => (
          <span key={p} className="flex items-center">
            <span className="font-display text-[1.5rem] font-[420] italic px-6 text-ink-soft">{p}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-marigold" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ————— Manifesto ————— */

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useCountUp(value, suffix);
  return (
    <div data-reveal>
      <p className="font-display text-[clamp(2.6rem,5vw,4rem)] font-[420] text-clay leading-none">
        <span ref={ref}>0</span>
      </p>
      <p className="text-[0.9rem] text-ink-soft mt-2 max-w-[12rem]">{label}</p>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="container-site py-(--spacing-section)">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <p data-reveal className="eyebrow text-clay mb-5">What we believe</p>
          <h2 data-reveal-line className="display-lg text-[clamp(2.2rem,4.5vw,3.6rem)]">
            <Lines>
              {["Tourism should", "feed the place", "that hosts it."]}
            </Lines>
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-6">
          <p data-reveal className="dropcap text-[1.13rem] leading-[1.8] text-ink-soft">
            Nepal is not a backdrop. It is farms mid-harvest, courtyards at festival time, kitchens where
            recipes are older than borders. Community Yatra was founded to put travellers inside that
            living country — through homestays and journeys designed by the villages themselves, on a
            road map to net-zero tourism.
          </p>
          <p data-reveal className="text-[1.05rem] leading-[1.8] text-ink-soft mt-6">
            When you travel with us, your hosts are your guides, your meals come from the hillside you
            walked that morning, and the money you spend stays where you spent it. We think that is what
            travel was always supposed to be.
          </p>
          <TLink data-reveal to="/about" className="link-arrow text-clay font-semibold mt-8 text-[0.95rem]">
            Read our story <ArrowRight />
          </TLink>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 pt-14 border-t border-line">
        <Stat value={12} suffix="+" label="Partner villages across Nepal" />
        <Stat value={10} suffix="" label="Distinct journeys, one philosophy" />
        <Stat value={100} suffix="%" label="Stays hosted by local families" />
        <Stat value={0} suffix="" label="Net-zero road map — our destination" />
      </div>
    </section>
  );
}

/* ————— Journeys showcase ————— */

function JourneyCard({ index, slug, title, tagline, image, duration, region, offset }: {
  index: number;
  slug: string;
  title: string;
  tagline: string;
  image: string;
  duration: string;
  region: string;
  offset?: boolean;
}) {
  return (
    <article data-reveal className={offset ? "lg:mt-24" : ""}>
      <TLink to={`/journeys/${slug}`} className="group block">
        <div className="img-frame img-zoom aspect-[4/5] rounded-xl">
          <img src={image} alt="" loading="lazy" />
          <span className="absolute top-4 left-4 rounded-full bg-paper/90 backdrop-blur px-3.5 py-1.5 text-[0.75rem] font-semibold text-ink">
            {duration}
          </span>
        </div>
        <div className="flex items-start justify-between gap-4 mt-5">
          <div>
            <p className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-ink-faint mb-1.5">
              {String(index).padStart(2, "0")} · {region}
            </p>
            <h3 className="font-display text-[1.6rem] leading-tight font-[450] group-hover:text-clay transition-colors">
              {title}
            </h3>
            <p className="text-[0.95rem] text-ink-soft mt-2 leading-relaxed">{tagline}</p>
          </div>
          <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:bg-clay group-hover:border-clay group-hover:text-cream">
            <ArrowUpRight />
          </span>
        </div>
      </TLink>
    </article>
  );
}

function JourneysShowcase() {
  return (
    <section className="container-site py-(--spacing-section) pt-0">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <div>
          <p data-reveal className="eyebrow text-clay mb-5">The journeys</p>
          <h2 data-reveal-line className="display-lg text-[clamp(2.2rem,4.5vw,3.6rem)]">
            <Lines>{["Ways into", "the real Nepal"]}</Lines>
          </h2>
        </div>
        <TLink data-reveal to="/journeys" className="link-arrow text-clay font-semibold text-[0.95rem] mb-2">
          All journeys <ArrowRight />
        </TLink>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-14">
        {journeys.map((j, i) => (
          <JourneyCard
            key={j.slug}
            index={i + 1}
            slug={j.slug}
            title={j.shortTitle}
            tagline={j.tagline}
            image={j.image}
            duration={j.duration}
            region={j.region.split("·")[0].split("—")[0].trim()}
            offset={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

/* ————— Featured circuit (dark) ————— */

function FeaturedCircuit() {
  const circuit = journeys[0];
  return (
    <section className="bg-pine-deep text-paper overflow-hidden">
      <div className="container-site py-(--spacing-section)">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p data-reveal className="eyebrow text-marigold mb-5">Featured journey</p>
            <h2 data-reveal-line className="display-lg text-[clamp(2.3rem,4.8vw,3.9rem)]">
              <Lines>{["Four days.", "Three villages.", "One welcome."]}</Lines>
            </h2>
            <p data-reveal className="text-pine-mist/85 text-[1.05rem] leading-[1.8] mt-7 max-w-lg">
              {circuit.intro}
            </p>

            <ol data-reveal className="mt-10 space-y-0 border-t border-line-dark">
              {circuit.itinerary!.map((d, i) => (
                <li key={i} className="group flex gap-5 items-baseline border-b border-line-dark py-4">
                  <span className="font-display italic text-marigold text-[1.05rem] w-14 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-[1.02rem]">{d.title}</p>
                  </div>
                </li>
              ))}
            </ol>

            <TLink data-reveal to={`/journeys/${circuit.slug}`} className="btn-primary mt-10">
              Walk the circuit <ArrowRight />
            </TLink>
          </div>

          <div className="relative">
            <div data-reveal className="img-frame img-zoom aspect-[4/5] rounded-2xl">
              <div data-parallax="10" className="h-[112%] w-full -mt-[6%]">
                <img src={circuit.imageWide} alt="The hilltop bazaar town of Bandipur" loading="lazy" />
              </div>
            </div>
            <figure
              data-reveal
              className="absolute -bottom-8 -left-6 md:-left-12 w-40 md:w-52 rotate-[3deg] bg-cream p-2.5 pb-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="img-frame aspect-[4/3]">
                <img src="/images/bandipur.webp" alt="Bandipur's stone-paved main street" loading="lazy" />
              </div>
              <figcaption className="font-display italic text-[0.8rem] text-ink-soft mt-2.5 text-center">
                the bazaar, Bandipur
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— Homestays preview ————— */

function HomestaysPreview() {
  return (
    <section className="container-site py-(--spacing-section)">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <div>
          <p data-reveal className="eyebrow text-clay mb-5">Stay with us</p>
          <h2 data-reveal-line className="display-lg text-[clamp(2.2rem,4.5vw,3.6rem)]">
            <Lines>{["Homes, not", "hotel rooms"]}</Lines>
          </h2>
        </div>
        <TLink data-reveal to="/homestays" className="link-arrow text-clay font-semibold text-[0.95rem] mb-2">
          All homestays <ArrowRight />
        </TLink>
      </div>

      <div className="grid md:grid-cols-3 gap-7">
        {homestays.map((h, i) => (
          <article data-reveal data-reveal-delay={`${i * 0.08}`} key={h.name}>
            <TLink to="/homestays" className="group block">
              <div className={`img-frame img-zoom aspect-[4/5] ${i === 1 ? "rounded-t-[7rem] rounded-b-xl" : "rounded-xl"}`}>
                <img src={h.image} alt="" loading="lazy" />
              </div>
              <div className="mt-5">
                <p className="flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  <MapPin className="text-clay" /> {h.location}
                </p>
                <h3 className="font-display text-[1.55rem] font-[450] mt-1.5 group-hover:text-clay transition-colors">
                  {h.name}
                </h3>
                <p className="text-[0.95rem] text-ink-soft mt-2 leading-relaxed">{h.description}</p>
                <p className="flex items-center gap-2 text-[0.82rem] text-ink-faint mt-3">
                  <Bed /> {h.details.join(" · ")}
                </p>
              </div>
            </TLink>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ————— Testimonials ————— */

function Testimonials() {
  const [active, setActive] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);

  const show = (i: number) => {
    if (i === active) return;
    if (prefersReducedMotion() || !quoteRef.current) {
      setActive(i);
      return;
    }
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: -12,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setActive(i);
        gsap.fromTo(quoteRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      },
    });
  };

  const t = testimonials[active];

  return (
    <section className="bg-paper-deep border-y border-line">
      <div className="container-site py-(--spacing-section)">
        <p data-reveal className="eyebrow text-clay mb-12 text-center">Voices from the road</p>

        <div data-reveal className="max-w-3xl mx-auto text-center">
          <span aria-hidden="true" className="font-display text-clay text-[5rem] leading-[0.4] block mb-8">
            “
          </span>
          <div ref={quoteRef}>
            <blockquote className="font-display text-[clamp(1.35rem,2.6vw,1.9rem)] font-[420] leading-[1.45] text-ink">
              {t.quote}
            </blockquote>
            <p className="mt-7 text-[0.92rem] font-semibold">{t.name}</p>
            <p className="text-[0.82rem] text-ink-faint">{t.role}</p>
          </div>
        </div>

        <div data-reveal className="flex justify-center gap-2.5 mt-10" role="group" aria-label="Choose a testimonial">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={i === active}
              aria-label={`Testimonial from ${item.name}`}
              onClick={() => show(i)}
              className={[
                "h-11 w-11 rounded-full font-display text-[0.95rem] transition-all duration-300 cursor-pointer",
                i === active
                  ? "bg-clay text-cream"
                  : "bg-transparent border border-line text-ink-soft hover:border-clay hover:text-clay",
              ].join(" ")}
            >
              {item.name.charAt(0)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— Gallery strip ————— */

function GalleryStrip() {
  const rows = [galleryImages.slice(0, 6), galleryImages.slice(6, 12)];
  return (
    <section className="py-(--spacing-section) overflow-hidden">
      <div className="container-site mb-12">
        <p data-reveal className="eyebrow text-clay mb-5">Field notes</p>
        <h2 data-reveal-line className="display-lg text-[clamp(2.2rem,4.5vw,3.6rem)]">
          <Lines>{["Moments between", "the itinerary lines"]}</Lines>
        </h2>
      </div>

      <div className="space-y-5">
        {rows.map((row, r) => (
          <Marquee key={r} duration={r === 0 ? 60 : 74} className="w-full">
            {row.map((img) => (
              <div key={img.src} className="img-frame w-[16rem] md:w-[19rem] aspect-[4/3] rounded-lg mx-2.5 shrink-0">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}

/* ————— Coming soon strip ————— */

function UpcomingStrip() {
  return (
    <section className="container-site pb-(--spacing-section)">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <p data-reveal className="eyebrow text-clay mb-4">And beyond</p>
          <h2 data-reveal className="display-md text-[clamp(1.8rem,3.4vw,2.6rem)]">More ways to wander</h2>
        </div>
        <p data-reveal className="text-[0.9rem] text-ink-faint mb-1 max-w-xs">
          Journeys we run on request — tell us the season and we will shape it.
        </p>
      </div>

      <div data-reveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {upcomingJourneys.map((u) => (
          <TLink key={u.title} to="/contact" className="group block">
            <div className="img-frame img-zoom aspect-[3/4] rounded-lg">
              <img src={u.image} alt="" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-3.5 left-3.5 right-3 text-paper font-display text-[1.05rem] leading-snug font-[450]">
                {u.title}
              </p>
            </div>
          </TLink>
        ))}
      </div>
    </section>
  );
}

/* ————— Page ————— */

export default function Home() {
  return (
    <>
      <Seo
        title="Community Yatra — Travel That Belongs to the Village"
        description="Community-rooted journeys across Nepal — homestays, farming, craft and culture, where every rupee stays in the village that welcomes you."
      />
      <Hero />
      <PlacesTicker />
      <Manifesto />
      <JourneysShowcase />
      <FeaturedCircuit />
      <HomestaysPreview />
      <Testimonials />
      <GalleryStrip />
      <UpcomingStrip />
    </>
  );
}
