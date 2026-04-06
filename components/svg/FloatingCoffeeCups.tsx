"use client";

import { motion } from "framer-motion";

interface FloatingElement {
  id: number;
  paths: string[];
  viewBox: string;
  x: string;
  y: string;
  size: number;
  floatDuration: number;
  floatDelay: number;
  floatY: number;
  rotate: number;
  opacity: number;
  steamPaths?: string[];
}

const elements: FloatingElement[] = [
  // --- Coffee Mugs ---
  {
    // Classic mug with handle — top left
    id: 1,
    viewBox: "0 0 60 50",
    paths: [
      "M8 18 C7 18 5 19 5 22 L7 38 C7 42 10 44 16 44 L36 44 C42 44 45 42 45 38 L47 22 C47 19 45 18 44 18 Z M47 22 C49 22 53 23 53 27 C53 31 49 33 47 33",
    ],
    steamPaths: [
      "M18 16 C17 12 20 10 19 6 C18 2 21 0 20 -3",
      "M30 15 C31 11 28 8 29 4 C30 1 27 -2 28 -5",
    ],
    x: "6%",
    y: "12%",
    size: 75,
    floatDuration: 7,
    floatDelay: 0,
    floatY: 18,
    rotate: -6,
    opacity: 0.3,
  },
  {
    // Small espresso mug — top right
    id: 2,
    viewBox: "0 0 50 42",
    paths: [
      "M8 14 C7 14 5 15 5 18 L7 32 C7 35 10 37 15 37 L31 37 C36 37 39 35 39 32 L41 18 C41 15 39 14 38 14 Z M39 18 C41 18 44 19 44 22 C44 25 41 27 39 27",
    ],
    steamPaths: [
      "M20 12 C19 8 21 6 20 3 C19 0 21 -2 20 -5",
    ],
    x: "84%",
    y: "18%",
    size: 60,
    floatDuration: 8,
    floatDelay: 1.5,
    floatY: 15,
    rotate: 5,
    opacity: 0.25,
  },
  {
    // Tall mug — bottom left
    id: 3,
    viewBox: "0 0 44 52",
    paths: [
      "M6 12 C5 12 4 13 4 16 L6 42 C6 45 9 47 14 47 L28 47 C33 47 36 45 36 42 L38 16 C38 13 37 12 36 12 Z M36 18 C38 18 42 19 42 23 C42 27 38 29 36 29",
    ],
    steamPaths: [
      "M15 10 C14 6 16 4 15 1 C14 -2 16 -4 15 -7",
      "M24 9 C25 5 23 3 24 0 C25 -3 23 -5 24 -8",
    ],
    x: "4%",
    y: "62%",
    size: 65,
    floatDuration: 9,
    floatDelay: 2.2,
    floatY: 20,
    rotate: 4,
    opacity: 0.28,
  },
  {
    // Round mug — bottom right
    id: 4,
    viewBox: "0 0 56 46",
    paths: [
      "M6 16 C5 14 7 12 12 12 L38 12 C43 12 45 14 44 16 L42 34 C41 38 37 40 32 40 L18 40 C13 40 9 38 8 34 Z M44 18 C46 18 50 20 50 24 C50 28 46 30 44 30",
    ],
    steamPaths: [
      "M20 10 C19 6 21 4 20 1 C19 -2 21 -4 20 -7",
      "M30 9 C31 5 29 3 30 0",
    ],
    x: "80%",
    y: "70%",
    size: 68,
    floatDuration: 7.5,
    floatDelay: 0.8,
    floatY: 16,
    rotate: -4,
    opacity: 0.25,
  },

  // --- AI Flow Lines & Circuit Sketches ---
  {
    // Neural network nodes with connections — right side
    id: 5,
    viewBox: "0 0 80 80",
    paths: [
      // Three connected nodes
      "M10 20 L40 10 L70 25",
      "M10 20 L40 45 L70 25",
      "M40 10 L40 45",
      "M40 45 L20 70 M40 45 L60 70",
      // Node circles
      "M14 20 A4 4 0 1 0 6 20 A4 4 0 1 0 14 20",
      "M44 10 A4 4 0 1 0 36 10 A4 4 0 1 0 44 10",
      "M74 25 A4 4 0 1 0 66 25 A4 4 0 1 0 74 25",
      "M44 45 A4 4 0 1 0 36 45 A4 4 0 1 0 44 45",
      "M24 70 A4 4 0 1 0 16 70 A4 4 0 1 0 24 70",
      "M64 70 A4 4 0 1 0 56 70 A4 4 0 1 0 64 70",
    ],
    x: "90%",
    y: "42%",
    size: 80,
    floatDuration: 10,
    floatDelay: 0.5,
    floatY: 12,
    rotate: 3,
    opacity: 0.2,
  },
  {
    // Flow/automation arrows — left middle
    id: 6,
    viewBox: "0 0 70 60",
    paths: [
      // Flowing connected path with arrows
      "M5 30 C15 15 25 15 35 30 C45 45 55 45 65 30",
      // Arrow tips
      "M60 25 L65 30 L60 35",
      // Small data dots along the path
      "M18 22 L20 22 M34 30 L36 30 M50 38 L52 38",
      // Gear/cog sketch
      "M35 8 L37 4 L39 8 L43 7 L42 11 L46 13 L43 15 L44 19 L40 18 L38 22 L36 18 L32 19 L33 15 L29 13 L32 11 L31 7 Z",
    ],
    x: "2%",
    y: "38%",
    size: 75,
    floatDuration: 11,
    floatDelay: 1.8,
    floatY: 14,
    rotate: -3,
    opacity: 0.18,
  },
  {
    // Circuit board traces — top center-right
    id: 7,
    viewBox: "0 0 60 50",
    paths: [
      // Horizontal and vertical traces with right angles
      "M5 10 L20 10 L20 25 L40 25 L40 10 L55 10",
      "M5 40 L15 40 L15 25 L25 25",
      "M40 25 L40 40 L55 40",
      // Small square nodes at junctions
      "M18 8 L22 8 L22 12 L18 12 Z",
      "M38 23 L42 23 L42 27 L38 27 Z",
      "M13 38 L17 38 L17 42 L13 42 Z",
    ],
    x: "68%",
    y: "8%",
    size: 65,
    floatDuration: 9.5,
    floatDelay: 3,
    floatY: 10,
    rotate: 2,
    opacity: 0.18,
  },
];

function FloatingSketch({ el }: { el: FloatingElement }) {
  return (
    <motion.div
      className="absolute hidden md:block pointer-events-none"
      style={{
        left: el.x,
        top: el.y,
        width: el.size,
        height: el.size,
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: el.opacity,
        y: [0, -el.floatY, 0],
        rotate: [0, el.rotate, -el.rotate * 0.5, 0],
      }}
      transition={{
        opacity: { duration: 1.5, delay: el.floatDelay },
        y: {
          duration: el.floatDuration,
          delay: el.floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: el.floatDuration * 1.3,
          delay: el.floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <svg
        viewBox={el.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {el.paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="var(--white)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        ))}
        {el.steamPaths?.map((d, i) => (
          <motion.path
            key={`steam-${i}`}
            d={d}
            stroke="var(--white)"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.9, 0.7, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              delay: el.floatDelay + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

export default function FloatingCoffeeCups() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {elements.map((el) => (
        <FloatingSketch key={el.id} el={el} />
      ))}
    </div>
  );
}
