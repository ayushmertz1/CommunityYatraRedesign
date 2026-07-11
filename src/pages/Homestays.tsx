import { useState } from "react";
import Seo from "@/components/Seo";
import { TLink } from "@/lib/transition";
import { Lines } from "@/lib/motion";
import { homestays } from "@/data/site";
import { ArrowRight, Bed, MapPin, Search } from "@/components/Icons";

export default function Homestays() {
  const [query, setQuery] = useState("");

  const filtered = homestays.filter(
    (h) =>
      h.name.toLowerCase().includes(query.toLowerCase()) ||
      h.location.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <Seo
        title="Homestays — Community Yatra"
        description="Stay with families across Nepal — Pokhara mountain views, Kathmandu heritage courtyards and Chitwan riverside stilt houses."
      />

      <header className="container-site pt-44 pb-16">
        <p data-reveal className="eyebrow text-clay mb-6">Homestays</p>
        <h1 data-reveal-line className="display-hero text-[clamp(2.8rem,7vw,6rem)] max-w-5xl">
          <Lines>{["Sleep where", "the story lives."]}</Lines>
        </h1>
        <p data-reveal className="max-w-xl text-[1.08rem] text-ink-soft leading-[1.8] mt-8">
          Every stay is a family home — vetted by us, run by them. Your bed funds the household, your
          dinner comes from their fields, and your welcome is the genuine article.
        </p>

        <div data-reveal className="relative max-w-md mt-10">
          <label htmlFor="homestay-search" className="field-label">
            Find a homestay
          </label>
          <div className="relative">
            <input
              id="homestay-search"
              type="search"
              className="field-input pr-10"
              placeholder="Search by name or place…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Search className="absolute right-1 top-1/2 -translate-y-1/2 text-ink-faint" />
          </div>
        </div>
      </header>

      <section className="container-site pb-(--spacing-section)" aria-live="polite">
        {filtered.length === 0 ? (
          <div className="border border-line rounded-2xl py-20 text-center">
            <p className="font-display text-[1.6rem] font-[450]">No homestays match "{query}"</p>
            <p className="text-ink-soft mt-3">
              Try "Pokhara", "Kathmandu" or "Chitwan" — or ask us, the network is always growing.
            </p>
            <button type="button" onClick={() => setQuery("")} className="btn-ghost mt-7 cursor-pointer">
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-0">
            {filtered.map((h, i) => (
              <article key={h.name} data-reveal className="border-t border-line last:border-b py-12 md:py-16">
                <div className={`grid gap-8 lg:gap-16 lg:grid-cols-2 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`img-frame img-zoom aspect-[16/10] ${i % 2 === 1 ? "rounded-t-[5rem] rounded-b-xl" : "rounded-xl"}`}>
                      <div data-parallax="8" className="h-[112%] w-full -mt-[6%]">
                        <img src={h.image} alt={`${h.name}, ${h.location}`} loading="lazy" />
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="flex items-center gap-1.5 eyebrow text-ink-faint">
                      <MapPin className="text-clay" /> {h.location}
                    </p>
                    <h2 className="display-md text-[clamp(1.8rem,3.4vw,2.7rem)] mt-3">{h.name}</h2>
                    <p className="text-[1.03rem] text-ink-soft leading-[1.8] mt-4 max-w-lg">{h.description}</p>
                    <p className="flex items-center gap-2.5 text-[0.9rem] text-ink-faint mt-5">
                      <Bed className="text-clay" /> {h.details.join("  ·  ")}
                    </p>
                    <TLink to="/contact" className="btn-ghost mt-8">
                      Ask about this stay <ArrowRight />
                    </TLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Value band */}
      <section className="bg-pine-deep text-paper">
        <div className="container-site py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Vetted, not listed",
                body: "We know every family personally. No anonymous listings, no surprises — just homes we would send our own parents to.",
              },
              {
                title: "Direct benefit",
                body: "Your payment goes to the household, not through layers of middlemen. That is the whole model.",
              },
              {
                title: "Real welcome",
                body: "You are a guest, not a booking reference. Expect to be fed, adopted and waved off like family.",
              },
            ].map((v, i) => (
              <div key={v.title} data-reveal data-reveal-delay={`${i * 0.08}`}>
                <span className="font-display italic text-marigold text-[1.4rem]">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-[1.5rem] font-[480] mt-3">{v.title}</h2>
                <p className="text-pine-mist/80 leading-relaxed mt-3">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
