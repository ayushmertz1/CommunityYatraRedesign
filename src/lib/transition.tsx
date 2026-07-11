import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Link, useNavigate, type LinkProps } from "react-router-dom";
import gsap from "gsap";
import { prefersReducedMotion } from "./motion";

/**
 * Page transition: a pine-green veil sweeps up over the page,
 * the route swaps beneath it, then it lifts away. The word
 * "यात्रा" (yatra — journey) fades through the middle.
 */

const TransitionContext = createContext<(to: string) => void>(() => {});

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const veilRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const busyRef = useRef(false);

  const go = useCallback(
    (to: string) => {
      if (busyRef.current) return;
      if (prefersReducedMotion() || !veilRef.current) {
        navigate(to);
        return;
      }

      busyRef.current = true;
      const veil = veilRef.current;
      const word = wordRef.current;

      const tl = gsap.timeline({
        onComplete: () => {
          busyRef.current = false;
        },
      });

      tl.set(veil, { yPercent: 101, visibility: "visible" })
        .set(word, { opacity: 0, y: 14 })
        .to(veil, { yPercent: 0, duration: 0.45, ease: "power3.inOut" })
        .to(word, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.12")
        .call(() => {
          navigate(to);
          window.scrollTo(0, 0);
        })
        .to(word, { opacity: 0, y: -14, duration: 0.25, ease: "power2.in" }, "+=0.28")
        .to(veil, { yPercent: -101, duration: 0.5, ease: "power3.inOut" }, "-=0.05")
        .set(veil, { yPercent: 101, visibility: "hidden" });
    },
    [navigate],
  );

  return (
    <TransitionContext.Provider value={go}>
      {children}
      <div ref={veilRef} className="transition-veil" aria-hidden="true">
        <span
          ref={wordRef}
          className="font-devanagari text-marigold text-4xl md:text-5xl opacity-0"
          style={{ fontFamily: "var(--font-devanagari)" }}
         lang="ne">
          यात्रा
        </span>
      </div>
    </TransitionContext.Provider>
  );
}

/** Link that routes through the transition veil. */
export function TLink({ to, onClick, children, ...rest }: LinkProps & { to: string }) {
  const go = useContext(TransitionContext);

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    go(to);
  };

  return (
    <Link to={to} onClick={handle} {...rest}>
      {children}
    </Link>
  );
}
