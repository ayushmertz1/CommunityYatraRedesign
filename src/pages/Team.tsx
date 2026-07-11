import { useState } from "react";
import Seo from "@/components/Seo";
import { TLink } from "@/lib/transition";
import { Lines } from "@/lib/motion";
import { team } from "@/data/site";
import { ArrowRight } from "@/components/Icons";

function MemberCard({ member, index }: { member: (typeof team)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const isLead = member.role.includes("Founder");

  return (
    <article
      data-reveal
      data-reveal-delay={`${(index % 4) * 0.05}`}
      className={isLead ? "sm:col-span-2 lg:col-span-2" : ""}
    >
      <div className={`group ${isLead ? "grid sm:grid-cols-2 gap-7 items-center bg-paper-deep rounded-2xl p-6 md:p-8 border border-line" : ""}`}>
        <div className={`img-frame img-zoom ${isLead ? "aspect-[4/4.4] rounded-xl" : "aspect-[4/4.6] rounded-xl"}`}>
          <img src={member.image} alt={`Portrait of ${member.name}`} loading="lazy" />
        </div>
        <div className={isLead ? "" : "mt-5"}>
          <p className="eyebrow text-clay">{member.role}</p>
          <h2 className="font-display text-[1.5rem] font-[480] mt-2">{member.name}</h2>
          <p className={`text-[0.95rem] text-ink-soft leading-relaxed mt-3 ${!open && !isLead ? "line-clamp-3" : ""}`}>
            {member.bio}
          </p>
          {!isLead && member.bio.length > 150 && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="text-[0.85rem] font-semibold text-clay mt-2.5 cursor-pointer hover:text-clay-deep transition-colors"
              aria-expanded={open}
            >
              {open ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <>
      <Seo
        title="Our Team — Community Yatra"
        description="Meet the passionate young team driving Community Yatra — dentists, social workers, tourism graduates and technologists, united by the villages of Nepal."
      />

      <header className="container-site pt-44 pb-16">
        <p data-reveal className="eyebrow text-clay mb-6">The team</p>
        <h1 data-reveal-line className="display-hero text-[clamp(2.8rem,7vw,6rem)] max-w-5xl">
          <Lines>{["Eight people,", "one direction:", "toward the village."]}</Lines>
        </h1>
        <p data-reveal className="max-w-xl text-[1.08rem] text-ink-soft leading-[1.8] mt-8">
          A dentist, a social worker, tourism graduates, technologists — the Yatra team came to
          community tourism from every direction, and stayed for the same reason.
        </p>
      </header>

      <section className="container-site pb-(--spacing-section)">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-14">
          {team.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-paper-deep border-t border-line">
        <div className="container-site py-20 md:py-28 text-center">
          <p data-reveal className="eyebrow text-clay mb-6">Join the journey</p>
          <h2 data-reveal className="display-lg text-[clamp(2rem,4.2vw,3.4rem)] max-w-2xl mx-auto">
            The best journeys need good company.
          </h2>
          <TLink data-reveal to="/contact" className="btn-primary mt-9">
            Work with us <ArrowRight />
          </TLink>
        </div>
      </section>
    </>
  );
}
