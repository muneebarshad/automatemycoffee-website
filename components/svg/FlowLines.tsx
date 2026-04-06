"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FlowLinesProps {
  className?: string;
}

export default function FlowLines({ className = "" }: FlowLinesProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paths = [
    "M 0 80 C 120 20, 280 140, 400 80 S 680 20, 800 80",
    "M 0 120 C 150 60, 250 180, 400 120 S 650 60, 800 120",
    "M 0 160 C 130 100, 270 220, 400 160 S 670 100, 800 160",
  ];

  return (
    <svg
      ref={ref}
      viewBox="0 0 800 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--terracotta)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity={0.08 + i * 0.04}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
