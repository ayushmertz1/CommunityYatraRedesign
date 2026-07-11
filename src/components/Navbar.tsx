import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { TLink } from "@/lib/transition";
import { prefersReducedMotion } from "@/lib/motion";

const links = [
  { to: "/journeys", label: "Journeys" },
  { to: "/homestays", label: "Homestays" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <TLink to="/" className="flex items-baseline gap-2 group" aria-label="Community Yatra — home">
      <span
        className={`font-display text-[1.35rem] leading-none tracking-tight font-[450] transition-colors ${light ? "text-paper" : "text-ink"}`}
      >
        Community&nbsp;Yatra
      </span>
      <span
        className={`text-[0.95rem] leading-none transition-colors group-hover:text-marigold ${light ? "text-marigold" : "text-clay"}`}
        style={{ fontFamily: "var(--font-devanagari)" }}
        aria-hidden="true"
        lang="ne"
      >
        यात्रा
      </span>
    </TLink>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Solid background + hide-on-scroll-down behaviour
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      setHidden(y > 480 && y > lastY.current && !open);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Animate mobile menu
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (open) {
      document.body.style.overflow = "hidden";
      if (!prefersReducedMotion()) {
        gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.fromTo(
          menu.querySelectorAll("[data-menu-item]"),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, delay: 0.08, ease: "power3.out" },
        );
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (to: string) => pathname === to || pathname.startsWith(to + "/");

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header
        className={[
          "fixed inset-x-0 top-0 transition-all duration-500",
          open ? "z-210" : "z-100",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          solid && !open ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_var(--color-line)]" : "bg-transparent",
        ].join(" ")}
      >
        <nav className="container-site flex items-center justify-between h-[4.5rem]" aria-label="Primary">
          <Wordmark light={open} />

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {links.map((l) => (
                <li key={l.to}>
                  <TLink
                    to={l.to}
                    className={[
                      "text-[0.92rem] font-medium transition-colors hover:text-clay relative py-2",
                      isActive(l.to) ? "text-clay" : "text-ink",
                    ].join(" ")}
                    aria-current={isActive(l.to) ? "page" : undefined}
                  >
                    {l.label}
                    {isActive(l.to) && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-marigold rounded-full" />
                    )}
                  </TLink>
                </li>
              ))}
            </ul>
            <TLink to="/contact" className="btn-ghost !py-2.5 !px-5 text-[0.88rem]">
              Plan a journey
            </TLink>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden relative z-210 flex h-11 w-11 items-center justify-center rounded-full cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-[14px] w-6">
              <span
                className={[
                  "absolute left-0 top-0 h-[2px] w-full rounded transition-all duration-300",
                  open ? "top-[6px] rotate-45 bg-paper" : "bg-ink",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 bottom-0 h-[2px] w-full rounded transition-all duration-300",
                  open ? "bottom-[6px] -rotate-45 bg-paper" : "bg-ink",
                ].join(" ")}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-0 z-200 bg-pine-deep text-paper flex flex-col md:hidden"
        >
          <div className="h-[4.5rem]" aria-hidden="true" />
          <nav className="container-site flex-1 flex flex-col justify-center gap-2" aria-label="Mobile">
            {links.map((l, i) => (
              <div key={l.to} data-menu-item>
                <TLink
                  to={l.to}
                  className="group flex items-baseline gap-4 py-3"
                  aria-current={isActive(l.to) ? "page" : undefined}
                >
                  <span className="text-[0.75rem] text-marigold font-medium tabular-nums">0{i + 1}</span>
                  <span className="font-display text-4xl font-[420] group-hover:text-marigold transition-colors">
                    {l.label}
                  </span>
                </TLink>
              </div>
            ))}
            <div data-menu-item className="pt-6">
              <TLink to="/contact" className="btn-primary">
                Plan a journey
              </TLink>
            </div>
          </nav>
          <div data-menu-item className="container-site pb-10 text-sm text-pine-mist/70">
            Thamel, Kathmandu · communityyatra@gmail.com
          </div>
        </div>
      )}
    </>
  );
}
