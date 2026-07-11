import Seo from "@/components/Seo";
import { asset } from "@/lib/asset";
import { TLink } from "@/lib/transition";
import { Lines } from "@/lib/motion";
import { ArrowRight, Brush, Compass, HandHeart, Home, Leaf, Mountain, Users } from "@/components/Icons";

const objectives = [
  {
    Icon: Mountain,
    title: "Cultural preservation",
    body: "Safeguarding and promoting Nepal's living heritage — so the next generation inherits it intact.",
  },
  {
    Icon: Users,
    title: "Cultural exchange",
    body: "Building mutual understanding between travellers and hosts, one shared meal at a time.",
  },
  {
    Icon: Leaf,
    title: "Environmental care",
    body: "Protecting Nepal's natural beauty through eco-friendly practice and a Net Zero road map.",
  },
  {
    Icon: HandHeart,
    title: "Community involvement",
    body: "Villages design the journeys they host — their voices lead every decision we make.",
  },
  {
    Icon: Home,
    title: "Community empowerment",
    body: "Creating local economic opportunity and skills training that outlasts any single season.",
  },
  {
    Icon: Compass,
    title: "Eco-tourism promotion",
    body: "Advocating tourism that balances growth with environmental and cultural sustainability.",
  },
  {
    Icon: Brush,
    title: "Economic growth",
    body: "Weaving tourism into sustainable local business models that benefit every stakeholder.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About — Community Yatra"
        description="Community Yatra promotes Nepali communities through tourism — preserving culture, protecting the environment, and empowering villages on a Net Zero road map."
      />

      <header className="container-site pt-44 pb-16">
        <p data-reveal className="eyebrow text-clay mb-6">About us</p>
        <h1 data-reveal-line className="display-hero text-[clamp(2.8rem,7vw,6rem)] max-w-5xl">
          <Lines>{["A travel company", "the village owns", "a piece of."]}</Lines>
        </h1>
      </header>

      {/* Opening image + story */}
      <div className="container-site pb-(--spacing-section)">
        <div data-reveal className="img-frame aspect-[21/9] rounded-2xl mb-20">
          <div data-parallax="12" className="h-[116%] w-full -mt-[8%]">
            <img src={asset("/images/gallery/moment-1.webp")} alt="Travellers and their host family sharing a village courtyard" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 data-reveal-line className="display-lg text-[clamp(2rem,4vw,3.2rem)]">
              <Lines>{["What is", "Community", "Yatra?"]}</Lines>
            </h2>
            <p data-reveal className="font-display italic text-clay text-[1.15rem] mt-6">
              "Experience the authenticity and warm hospitality of Nepal."
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p data-reveal className="dropcap text-[1.15rem] leading-[1.85] text-ink-soft">
              Community Yatra Pvt. Ltd. was started to promote Nepali communities through tourism. Our
              mission is simple to say and hard to do: empower villages by preserving and exchanging
              local culture, and safeguard the environment for sustainable tourism — with a Net Zero road
              map as our destination.
            </p>
            <p data-reveal className="text-[1.05rem] leading-[1.85] text-ink-soft mt-6">
              Nepal is renowned for its cultural heritage, its landscapes and its hospitality. We connect
              travellers to all three through community homestays that benefit host families directly —
              creating economic opportunity, preserving traditions, and fostering real exchange between
              visitors and locals.
            </p>
            <p data-reveal className="text-[1.05rem] leading-[1.85] text-ink-soft mt-6">
              Driven by a passionate young team, we use local resources to build Nepal's tourism from the
              village up — and to carry national pride onto a global stage.
            </p>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <section className="bg-pine-deep text-paper">
        <div className="container-site py-(--spacing-section)">
          <div className="max-w-2xl mb-16">
            <p data-reveal className="eyebrow text-marigold mb-5">Our objectives</p>
            <h2 data-reveal-line className="display-lg text-[clamp(2rem,4.2vw,3.4rem)]">
              <Lines>{["Seven promises", "we travel by"]}</Lines>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-line-dark rounded-xl overflow-hidden">
            {objectives.map((o, i) => (
              <div
                key={o.title}
                data-reveal
                data-reveal-delay={`${(i % 4) * 0.05}`}
                className="bg-pine-deep p-7 md:p-8 transition-colors duration-300 hover:bg-pine"
              >
                <o.Icon className="text-marigold" />
                <h3 className="font-display text-[1.25rem] font-[480] mt-5">{o.title}</h3>
                <p className="text-[0.92rem] text-pine-mist/80 leading-relaxed mt-2.5">{o.body}</p>
              </div>
            ))}
            {/* Filler cell with CTA */}
            <div data-reveal className="bg-clay p-7 md:p-8 flex flex-col justify-between min-h-[14rem]">
              <p className="font-display italic text-[1.3rem] text-cream leading-snug">
                Travel is the shortest distance between two cultures.
              </p>
              <TLink to="/journeys" className="link-arrow text-cream font-semibold text-[0.92rem] mt-6">
                See the journeys <ArrowRight />
              </TLink>
            </div>
          </div>
        </div>
      </section>

      {/* Net zero band */}
      <section className="container-site py-(--spacing-section)">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div data-reveal className="img-frame aspect-[4/3] rounded-t-[7rem] rounded-b-xl">
            <img src={asset("/images/mountains.webp")} alt="Himalayan peaks above the valley haze" loading="lazy" />
          </div>
          <div>
            <p data-reveal className="eyebrow text-clay mb-5">The road map</p>
            <h2 data-reveal-line className="display-lg text-[clamp(2rem,4.2vw,3.4rem)]">
              <Lines>{["Net Zero is not", "a slogan. It is", "the route."]}</Lines>
            </h2>
            <p data-reveal className="text-[1.05rem] text-ink-soft leading-[1.85] mt-7">
              Every journey we design starts from a question: what does this leave behind? Local food
              over imported menus. Family homes over new construction. Buses and legs over internal
              flights. The mountains have given Nepal everything — our job is to make sure tourism gives
              something back.
            </p>
            <TLink data-reveal to="/team" className="btn-ghost mt-9">
              Meet the people behind it <ArrowRight />
            </TLink>
          </div>
        </div>
      </section>
    </>
  );
}
