import { TLink } from "@/lib/transition";
import { site } from "@/data/site";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "./Icons";

const nav = [
  { to: "/journeys", label: "Journeys" },
  { to: "/homestays", label: "Homestays" },
  { to: "/about", label: "About us" },
  { to: "/team", label: "Our team" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-paper" role="contentinfo">
      {/* Big invitation */}
      <div className="container-site pt-20 pb-14 md:pt-28 md:pb-20 border-b border-line-dark">
        <p className="eyebrow text-marigold mb-6">Begin your yatra</p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <h2 className="display-lg text-[clamp(2.4rem,6vw,4.75rem)] max-w-3xl">
            The village is already
            <br />
            <em className="text-marigold-soft">expecting you.</em>
          </h2>
          <TLink to="/contact" className="btn-primary self-start lg:self-auto lg:mb-3">
            Plan your journey <ArrowUpRight />
          </TLink>
        </div>
      </div>

      {/* Columns */}
      <div className="container-site py-14 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="font-display text-2xl font-[450] mb-1">
            Community Yatra{" "}
            <span className="text-marigold text-lg" style={{ fontFamily: "var(--font-devanagari)" }} aria-hidden="true" lang="ne">
              यात्रा
            </span>
          </p>
          <p className="text-pine-mist/80 text-[0.95rem] leading-relaxed mt-4">
            Community-rooted travel across Nepal. Homestays, farming, craft and culture — journeys where
            every rupee stays in the village that welcomes you.
          </p>
          <div className="flex gap-3 mt-7">
            {[
              { href: site.social.facebook, label: "Facebook", Icon: Facebook },
              { href: site.social.instagram, label: "Instagram", Icon: Instagram },
              { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Community Yatra on ${label}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-pine-mist transition-all duration-300 hover:bg-marigold hover:text-ink hover:border-marigold"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-pine-mist/60 mb-5">Explore</p>
          <ul className="space-y-3">
            {nav.map((l) => (
              <li key={l.to}>
                <TLink
                  to={l.to}
                  className="text-[0.98rem] text-paper/90 hover:text-marigold transition-colors"
                >
                  {l.label}
                </TLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-pine-mist/60 mb-5">Find us</p>
          <ul className="space-y-4 text-[0.95rem] text-paper/90">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-marigold" />
              {site.address}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-marigold transition-colors">
                <Mail className="mt-0.5 shrink-0 text-marigold" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="flex items-start gap-3 hover:text-marigold transition-colors">
                <Phone className="mt-0.5 shrink-0 text-marigold" />
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site py-6 border-t border-line-dark flex flex-col sm:flex-row gap-2 justify-between text-[0.82rem] text-pine-mist/60">
        <p>© {new Date().getFullYear()} Community Yatra Pvt. Ltd. All rights reserved.</p>
        <p>
          Made with care in Kathmandu — travelling toward <span className="text-marigold-soft">Net Zero</span>.
        </p>
      </div>
    </footer>
  );
}
