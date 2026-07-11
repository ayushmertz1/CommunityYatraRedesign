import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Smooth scroll via Lenis, wired into GSAP's ticker. */
export function useLenis() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}

/**
 * Wires up scroll-triggered reveals for the current page.
 * - [data-reveal]        → fade + rise
 * - [data-reveal-line]   → masked line rise (wrap content in .line-inner)
 * - [data-parallax]      → subtle image drift (value = percent, e.g. "12")
 * Re-runs on route change.
 */
export function useScrollReveals(deps: unknown[] = []) {
  const location = useLocation();

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => (el.style.opacity = "1"));
      return;
    }

    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const delay = parseFloat(el.dataset.revealDelay ?? "0");
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      document.querySelectorAll<HTMLElement>("[data-reveal-line]").forEach((el) => {
        const inners = el.querySelectorAll<HTMLElement>(".line-inner");
        gsap.to(inners, {
          y: 0,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.09,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const strength = parseFloat(el.dataset.parallax ?? "10");
        gsap.fromTo(
          el,
          { yPercent: -strength / 2 },
          {
            yPercent: strength / 2,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });

    // Let layout settle (images/fonts) before measuring
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 120);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, ...deps]);
}

/** Scroll to top instantly on route change (before paint). */
export function useScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

/** Masked-line heading helper: splits children into animatable lines. */
export function Lines({ children, as: Tag = "span" }: { children: ReactNode[] | ReactNode; as?: "span" | "div" }) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <>
      {items.map((line, i) => (
        <Tag key={i} className="block overflow-hidden">
          <span className="line-inner">{line}</span>
        </Tag>
      ))}
    </>
  );
}

/** Simple count-up number for stats. */
export function useCountUp(target: number, suffix = "") {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(obj.v)}${suffix}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [target, suffix]);

  return ref;
}
