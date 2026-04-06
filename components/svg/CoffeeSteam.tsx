"use client";

import { motion } from "framer-motion";

interface CoffeeSteamProps {
  className?: string;
}

export default function CoffeeSteam({ className = "" }: CoffeeSteamProps) {
  const steamPaths = [
    {
      d: "M 50 300 C 50 250, 30 220, 50 180 C 70 140, 30 100, 50 50 C 70 0, 40 -30, 50 -60",
      delay: 0,
      duration: 4,
      opacity: 0.06,
      strokeWidth: 2.5,
    },
    {
      d: "M 80 300 C 80 260, 100 230, 80 190 C 60 150, 100 110, 80 60 C 60 10, 90 -20, 80 -50",
      delay: 0.8,
      duration: 4.5,
      opacity: 0.045,
      strokeWidth: 2,
    },
    {
      d: "M 110 300 C 110 255, 90 225, 110 185 C 130 145, 90 105, 110 55 C 130 5, 100 -25, 110 -55",
      delay: 1.6,
      duration: 5,
      opacity: 0.035,
      strokeWidth: 1.5,
    },
    {
      d: "M 140 300 C 140 260, 160 235, 140 195 C 120 155, 160 115, 140 65 C 120 15, 150 -15, 140 -45",
      delay: 2.2,
      duration: 4.2,
      opacity: 0.04,
      strokeWidth: 2,
    },
    {
      d: "M 65 300 C 65 245, 45 210, 65 170 C 85 130, 45 90, 65 40 C 85 -10, 55 -40, 65 -70",
      delay: 1.2,
      duration: 4.8,
      opacity: 0.03,
      strokeWidth: 1.8,
    },
  ];

  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {steamPaths.map((steam, i) => (
          <motion.path
            key={i}
            d={steam.d}
            stroke="var(--terracotta)"
            strokeWidth={steam.strokeWidth}
            strokeLinecap="round"
            fill="none"
            opacity={0}
            initial={{ pathLength: 0, opacity: 0, y: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, steam.opacity, steam.opacity, 0],
              y: [0, -40],
            }}
            transition={{
              duration: steam.duration,
              delay: steam.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle coffee ring at the bottom */}
        <motion.ellipse
          cx="95"
          cy="295"
          rx="55"
          ry="8"
          stroke="var(--terracotta)"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
