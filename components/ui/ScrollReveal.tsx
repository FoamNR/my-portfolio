"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

/**
 * Fades a section in once when it scrolls into view.
 * The hidden state uses `motion-safe:` so people who prefer reduced motion
 * see the content immediately, without waiting for JavaScript.
 */
export default function ScrollReveal({ children, className = "", threshold = 0.1 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
