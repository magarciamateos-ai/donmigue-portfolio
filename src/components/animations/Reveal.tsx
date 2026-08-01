"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
};

function isElementInView(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  // Ignore a thin strip at the bottom to avoid peeking during layout shift.
  const viewBottom = viewHeight * 0.92;

  if (rect.bottom <= 0 || rect.top >= viewBottom) {
    return false;
  }

  const visible =
    Math.min(rect.bottom, viewBottom) - Math.max(rect.top, 0);

  return visible / Math.max(rect.height, 1) >= 0.12;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.65,
  distance = 24,
  once = true,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const shouldReduceMotion = reducedMotion === true;
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    if (!node) {
      return;
    }

    if (shouldReduceMotion) {
      setHasRevealed(true);
      return;
    }

    let cancelled = false;
    let ready = false;
    let didReveal = false;
    let observer: IntersectionObserver | null = null;

    const teardown = () => {
      observer?.disconnect();
      observer = null;
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };

    const reveal = () => {
      if (cancelled || didReveal) {
        return;
      }

      didReveal = true;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) {
            setHasRevealed(true);
          }
        });
      });
    };

    const check = () => {
      if (!ready || cancelled || didReveal) {
        return;
      }

      if (isElementInView(node)) {
        reveal();

        if (once) {
          teardown();
        }
      }
    };

    function onScrollOrResize() {
      check();
    }

    observer = new IntersectionObserver(check, {
      threshold: [0, 0.12, 0.25, 0.5],
    });
    observer.observe(node);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const readyTimer = window.setTimeout(() => {
      ready = true;
      check();
    }, 200);

    // Programmatic scroll does not always fire IO/scroll events;
    // poll briefly until the element reveals.
    const pollTimer = window.setInterval(() => {
      check();
      if (didReveal || cancelled) {
        window.clearInterval(pollTimer);
      }
    }, 100);

    return () => {
      cancelled = true;
      window.clearTimeout(readyTimer);
      window.clearInterval(pollTimer);
      teardown();
    };
  }, [node, once, shouldReduceMotion]);

  const style = {
    "--reveal-distance": `${distance}px`,
    "--reveal-duration": shouldReduceMotion ? "0ms" : `${duration * 1000}ms`,
    "--reveal-delay": shouldReduceMotion ? "0ms" : `${delay * 1000}ms`,
  } as CSSProperties;

  return (
    <div
      ref={setNode}
      className={cn(
        "reveal-anim",
        hasRevealed && "reveal-anim--in",
        className,
      )}
      data-revealed={hasRevealed ? "true" : "false"}
      style={style}
    >
      {children}
    </div>
  );
}
