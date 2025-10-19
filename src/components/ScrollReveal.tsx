"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutIdRef = useRef<number | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
          }
          timeoutIdRef.current = window.setTimeout(() => {
            setIsVisible(true);
            // stop observing once visible to avoid re-triggering
            observer.unobserve(entry.target);
          }, delay);
        }
      },
      // use threshold 0 and a negative bottom rootMargin so elements trigger earlier on mobile scrolling
      { threshold: 0, root: null, rootMargin: "0px 0px -20% 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      observer.disconnect();
    };
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";

    switch (direction) {
      case "up":
        return "translate3d(0, 30px, 0) scale(0.98)";
      case "down":
        return "translate3d(0, -30px, 0) scale(0.98)";
      case "left":
        return "translate3d(30px, 0, 0) scale(0.98)";
      case "right":
        return "translate3d(-30px, 0, 0) scale(0.98)";
      case "fade":
        return "translate3d(0, 0, 0) scale(0.95)";
      default:
        return "translate3d(0, 30px, 0) scale(0.98)";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
