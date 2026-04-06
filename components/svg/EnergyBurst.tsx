"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface EnergyBurstProps {
  className?: string;
}

export default function EnergyBurst({ className = "" }: EnergyBurstProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const lineCount = 16;
  const lines = Array.from({ length: lineCount }, (_, i) => {
    const angle = (i * 360) / lineCount;
    const innerRadius = 20;
    const outerRadius = 60 + (i % 3) * 15;
    const rad = (angle * Math.PI) / 180;
    return {
      x1: 100 + Math.cos(rad) * innerRadius,
      y1: 100 + Math.sin(rad) * innerRadius,
      x2: 100 + Math.cos(rad) * outerRadius,
      y2: 100 + Math.sin(rad) * outerRadius,
      delay: i * 0.04,
    };
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="var(--terracotta)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.06}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 0.06 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: 0.6,
            delay: line.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}
