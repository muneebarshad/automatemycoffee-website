"use client";

import { motion } from "framer-motion";

interface OrbitalRingsProps {
  className?: string;
}

export default function OrbitalRings({ className = "" }: OrbitalRingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className={className}
      aria-hidden="true"
    >
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ring 1 - largest, slow clockwise */}
        <g className="orbit-ring-1" style={{ transformOrigin: "250px 250px" }}>
          <ellipse
            cx="250"
            cy="250"
            rx="220"
            ry="140"
            stroke="var(--terracotta)"
            strokeWidth="1"
            opacity="0.08"
            transform="rotate(-15 250 250)"
          />
        </g>

        {/* Ring 2 - medium, counter-clockwise */}
        <g className="orbit-ring-2" style={{ transformOrigin: "250px 250px" }}>
          <ellipse
            cx="250"
            cy="250"
            rx="180"
            ry="110"
            stroke="var(--terracotta)"
            strokeWidth="1.5"
            opacity="0.12"
            transform="rotate(30 250 250)"
          />
        </g>

        {/* Ring 3 - smallest, fast clockwise */}
        <g className="orbit-ring-3" style={{ transformOrigin: "250px 250px" }}>
          <ellipse
            cx="250"
            cy="250"
            rx="140"
            ry="80"
            stroke="var(--terracotta)"
            strokeWidth="1"
            opacity="0.18"
            transform="rotate(-25 250 250)"
          />
        </g>

        {/* Small dot accents on orbits */}
        <g className="orbit-ring-1" style={{ transformOrigin: "250px 250px" }}>
          <circle cx="470" cy="250" r="3" fill="var(--terracotta)" opacity="0.2" />
        </g>
        <g className="orbit-ring-2" style={{ transformOrigin: "250px 250px" }}>
          <circle cx="70" cy="250" r="2.5" fill="var(--terracotta)" opacity="0.15" />
        </g>
        <g className="orbit-ring-3" style={{ transformOrigin: "250px 250px" }}>
          <circle cx="390" cy="250" r="2" fill="var(--terracotta)" opacity="0.25" />
        </g>
      </svg>
    </motion.div>
  );
}
