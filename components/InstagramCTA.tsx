"use client";

import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://www.instagram.com/automatemycoffee";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 25 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: {
    duration: 0.8,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
});

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramCTA() {
  return (
    <section
      className="grain-overlay relative overflow-hidden px-6 md:px-12 lg:px-20 py-16 md:py-24"
      style={{ backgroundColor: "var(--terracotta)", color: "var(--cream)" }}
      aria-label="Follow us on Instagram"
    >
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-5 md:gap-7">
        <motion.h2
          {...reveal(0)}
          className="font-(family-name:--font-national-park) font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.1]"
        >
          Catch the vibe.
        </motion.h2>

        <motion.p
          {...reveal(0.1)}
          className="text-base md:text-lg leading-relaxed opacity-60 max-w-md"
        >
          We post behind-the-scenes, hot takes, and automation wins.
        </motion.p>

        <motion.a
          {...reveal(0.2)}
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-2 inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3 rounded-full text-base font-medium border-2 transition-colors duration-300"
          style={{
            borderColor: "var(--cream)",
            color: "var(--cream)",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "var(--cream)";
            el.style.color = "var(--terracotta)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "transparent";
            el.style.color = "var(--cream)";
          }}
        >
          <InstagramIcon />
          Let&apos;s hang on Instagram
        </motion.a>
      </div>
    </section>
  );
}
