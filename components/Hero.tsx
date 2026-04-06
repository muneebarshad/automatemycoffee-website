"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay"
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

      {/* Steam wisps */}
      <SteamWisp delay={0} left="15%" size="60px" />
      <SteamWisp delay={1.5} left="75%" size="45px" />
      <SteamWisp delay={3} left="40%" size="55px" />
      <SteamWisp delay={2} left="85%" size="35px" />

      {/* All content — single centered stack, tight gaps */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center gap-4 px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mb-2"
        >
          <Image
            src="/logos/automatemycoffeelogo_transparent.svg"
            alt="Automate My Coffee"
            width={500}
            height={150}
            preload
            className="w-72 md:w-96 lg:w-120 h-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="font-(family-name:--font-national-park) font-bold text-[clamp(2rem,7vw,4.5rem)] leading-[1.08] tracking-tight"
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

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="text-sm md:text-lg max-w-md leading-relaxed"
          style={{ color: "rgba(var(--cream-rgb), 0.65)" }}
        >
          Something&apos;s brewing. An AI automation agency
          <br className="hidden md:block" />
          {" "}for people who&apos;d rather not do it themselves.
        </motion.p>
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
