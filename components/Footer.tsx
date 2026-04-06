"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function WavyUnderline() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 220 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-50 md:max-w-60 h-3.5 mt-1"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 0 7 Q 27 0, 55 7 Q 82 14, 110 7 Q 137 0, 165 7 Q 192 14, 220 7"
        stroke="var(--terracotta)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
      />
    </svg>
  );
}

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 25 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Footer() {
  return (
    <footer
      className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: "var(--near-black)", color: "var(--cream)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-16 md:gap-20">
        {/* Big statement */}
        <motion.div {...reveal(0)} className="text-center md:text-left">
          <h2 className="font-(family-name:--font-national-park) font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.1]">
            <span className="inline-flex flex-col items-start">
              <span>Good things</span>
              <WavyUnderline />
            </span>{" "}
            take time.
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div {...reveal(0.1)} className="text-center md:text-left">
          <p className="text-base leading-relaxed opacity-40 max-w-md">
            Automate My Coffee is an AI automation agency for businesses
            that want to stop wasting time on tasks a robot could do better.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          {...reveal(0.2)}
          className="w-full h-px"
          style={{ backgroundColor: "rgba(var(--cream-rgb), 0.08)" }}
        />

        {/* Bottom bar */}
        <motion.div
          {...reveal(0.25)}
          className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm opacity-30"
        >
          <span>&copy; 2026 Automate My Coffee</span>
          <span>Made with too much coffee</span>
        </motion.div>
      </div>
    </footer>
  );
}
