import Seo from "@/components/Seo";
import { TLink } from "@/lib/transition";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found — Community Yatra" />
      <section className="container-site min-h-dvh flex flex-col justify-center items-start pt-32 pb-20">
        <p data-reveal className="eyebrow text-clay mb-6">404 — off the trail</p>
        <h1 data-reveal className="display-hero text-[clamp(2.8rem,7vw,6rem)] max-w-4xl">
          Even the best guides
          <br />
          <em className="text-clay">lose the path</em> sometimes.
        </h1>
        <p data-reveal className="text-[1.08rem] text-ink-soft mt-8 max-w-md leading-relaxed">
          The page you're after has wandered off. Let's head back to somewhere with a view.
        </p>
        <TLink data-reveal to="/" className="btn-primary mt-10">
          Back to the trailhead <ArrowRight />
        </TLink>
      </section>
    </>
  );
}
