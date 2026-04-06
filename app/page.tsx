"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay: number, y: number = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
    duration: 0.6,
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
  },
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.5, ease: "easeOut" as const },
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      {/* Main content */}
      <div className="flex flex-col items-center gap-8 flex-1 justify-center">
        {/* Logo */}
        <motion.div {...fadeUp(0.3)} className="logo-glow">
          <Image
            src="/logos/automatemycoffeelogo_transparent.svg"
            alt="Automate My Coffee"
            width={200}
            height={200}
            preload
            className="w-37.5 md:w-50 h-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.8)}
          className="font-(family-name:--font-national-park) text-[32px] md:text-[48px] lg:text-[64px] text-center leading-tight"
        >
          Something&apos;s brewing.{" "}
          <span className="coffee-float">☕</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          {...fadeUp(1.3, 15)}
          className="text-base md:text-lg text-center max-w-md opacity-80 leading-relaxed"
        >
          We&apos;re killing your boring tasks, one automation at a time.
          <br />
          Back very soon.
        </motion.p>
      </div>

      {/* Footer */}
      <motion.footer
        {...fadeIn(1.8)}
        className="py-8 text-sm opacity-50"
      >
        &copy; 2026 Automate My Coffee
      </motion.footer>
    </div>
  );
}
