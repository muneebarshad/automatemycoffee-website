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
}

const elements: FloatingElement[] = [
  {
    // Classic mug with handle — top left
    id: 1,
    viewBox: "0 0 60 50",
    paths: [
      "M8 18 C7 18 5 19 5 22 L7 38 C7 42 10 44 16 44 L36 44 C42 44 45 42 45 38 L47 22 C47 19 45 18 44 18 Z M47 22 C49 22 53 23 53 27 C53 31 49 33 47 33",
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
    x: "80%",
    y: "70%",
    size: 68,
    floatDuration: 7.5,
    floatDelay: 0.8,
    floatY: 16,
    rotate: -4,
    opacity: 0.25,
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
