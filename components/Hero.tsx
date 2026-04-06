"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import FloatingCoffeeCups from "./svg/FloatingCoffeeCups";

function SteamWisp({ delay, left, size }: { delay: number; left: string; size: string }) {
  return (
    <motion.div
      className="absolute bottom-0 rounded-full"
      style={{
        left,
        width: size,
        height: size,
        background: "radial-gradient(circle, rgba(var(--cream-rgb), 0.12) 0%, transparent 70%)",
      }}
      initial={{ opacity: 0, y: 0, scale: 1 }}
      animate={{
        opacity: [0, 0.8, 0.4, 0],
        y: [0, -120, -240, -360],
        scale: [1, 1.3, 1.1, 0.7],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay"
      style={{ backgroundColor: "var(--terracotta)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-125 h-125 md:w-175 md:h-175 rounded-full border opacity-[0.08] pointer-events-none"
        style={{ borderColor: "var(--cream)" }}
      />
      <div
        className="absolute -bottom-48 -left-48 w-100 h-100 md:w-150 md:h-150 rounded-full border opacity-[0.06] pointer-events-none"
        style={{ borderColor: "var(--cream)" }}
      />

      {/* Floating sketch coffee cups */}
      <FloatingCoffeeCups />

      {/* Steam wisps */}
      <SteamWisp delay={0} left="15%" size="60px" />
      <SteamWisp delay={1.5} left="75%" size="45px" />
      <SteamWisp delay={3} left="40%" size="55px" />
      <SteamWisp delay={2} left="85%" size="35px" />

      {/* All content — single centered stack, tight gaps */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center gap-2 px-6 -mt-20 md:-mt-24">
        {/* Brewing animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="flex flex-col items-center gap-2 mb-4"
        >
          <svg
            viewBox="0 0 80 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
          >
            {/* Coffee cup body */}
            <path
              d="M15 40 C14 40 12 41 12 44 L15 70 C15 75 20 78 28 78 L52 78 C60 78 65 75 65 70 L68 44 C68 41 66 40 65 40 Z"
              stroke="var(--cream)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Handle */}
            <path
              d="M65 46 C68 46 73 48 73 54 C73 60 68 62 65 62"
              stroke="var(--cream)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Saucer */}
            <path
              d="M8 80 Q40 86 72 80"
              stroke="var(--cream)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
            {/* Steam lines — animated */}
            <motion.path
              d="M30 36 C29 30 33 27 31 21 C29 15 33 12 31 6"
              stroke="var(--cream)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.5, 0], y: [0, -4, -8, -12] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M42 34 C43 28 39 25 41 19 C43 13 39 10 41 4"
              stroke="var(--cream)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.4, 0], y: [0, -3, -6, -10] }}
              transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M54 35 C53 29 57 26 55 20 C53 14 57 11 55 5"
              stroke="var(--cream)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.5, 0.3, 0], y: [0, -5, -9, -13] }}
              transition={{ duration: 2.8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Coffee liquid line inside cup */}
            <motion.path
              d="M20 50 Q40 47 60 50"
              stroke="var(--near-black)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.3"
              animate={{ d: ["M20 50 Q40 47 60 50", "M20 50 Q40 53 60 50", "M20 50 Q40 47 60 50"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <motion.span
            className="text-sm md:text-base lg:text-lg tracking-[0.25em] uppercase font-(family-name:--font-national-park)"
            style={{ color: "rgba(var(--cream-rgb), 0.6)" }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Brewing...
          </motion.span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="font-(family-name:--font-national-park) font-bold text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.08] tracking-tight"
          style={{ color: "var(--cream)" }}
        >
          We automate the stuff
          <br />
          <span style={{ color: "var(--near-black)" }}>
            <Typewriter
              phrases={[
                "you hate doing.",
                "that wastes your time.",
                "that bores you to tears.",
                "so you can do what matters.",
              ]}
              typingSpeed={65}
              deletingSpeed={30}
              pauseDuration={2400}
              cursorColor="var(--cream)"
            />
          </span>
        </motion.h1>

      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M0 80L0 40C360 0 1080 0 1440 40L1440 80Z" fill="var(--cream)" />
        </svg>
      </div>
    </section>
  );
}
