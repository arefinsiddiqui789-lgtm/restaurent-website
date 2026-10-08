"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Lightweight scroll-reveal wrapper using Framer Motion.
 * Subtle fade-up that respects prefers-reduced-motion automatically
 * (Framer Motion handles this when `useReducedMotion` is set globally —
 * we keep the animation minimal so it never becomes a problem).
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px -60px 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  light?: boolean;
};

export function Eyebrow({ children, className = "", light = false }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] ${
        light ? "text-[var(--brand-cream)]/85" : "text-[var(--brand-terracotta)]"
      } ${className}`}
    >
      <span
        className={`inline-block h-px w-7 ${
          light ? "bg-[var(--brand-cream)]" : "bg-[var(--brand-terracotta)]"
        }`}
      />
      {children}
    </span>
  );
}
