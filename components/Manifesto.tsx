"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

/* ── Word-by-word statement (slides from left or right) ── */

function WordByWordStatement({
  text,
  align,
  direction,
}: {
  text: string;
  align: string;
  direction: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
  };

  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`max-w-3xl ${align}`}
    >
      <h2 className="font-(family-name:--font-national-park) font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight flex flex-wrap gap-x-[0.3em]">
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  );
}

/* ── Highlight statement (scale-up + terracotta underline) ── */

function HighlightStatement({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.7, ease }}
      className="text-center mx-auto max-w-3xl"
    >
      <h2
        className="font-(family-name:--font-national-park) font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
        style={{ color: "var(--terracotta)" }}
      >
        {text}
      </h2>
      {/* Terracotta underline that draws itself */}
      <motion.div
        className="mx-auto mt-4 h-0.75 rounded-full"
        style={{
          backgroundColor: "var(--terracotta)",
          maxWidth: "60%",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease }}
      />
    </motion.div>
  );
}

/* ── Closing paragraph with clip-path reveal ── */

function ClosingStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease }}
      className="text-center mx-auto max-w-2xl"
    >
      {/* Animated terracotta divider */}
      <motion.div
        className="inline-block w-12 h-px mb-8"
        style={{ backgroundColor: "var(--terracotta)", transformOrigin: "center" }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.4, ease }}
      />
      <p className="text-lg md:text-xl leading-relaxed opacity-70">
        We&apos;re building the automation agency for people who&apos;d rather be doing{" "}
        <motion.span
          className="inline-block"
          style={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          literally anything else.
        </motion.span>
      </p>
    </motion.div>
  );
}

/* ── Main component ── */

export default function Manifesto() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative side accent */}
      <div
        className="absolute top-24 -left-4 w-2 h-32 md:h-48 rounded-full hidden md:block"
        style={{ backgroundColor: "var(--terracotta)", opacity: 0.15 }}
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-16 lg:gap-24">
        <WordByWordStatement
          text="We believe boring tasks should be illegal."
          align="md:text-left md:ml-0 md:mr-auto"
          direction="left"
        />
        <WordByWordStatement
          text="Your time is worth more than copy-pasting data."
          align="md:text-right md:mr-0 md:ml-auto"
          direction="right"
        />
        <HighlightStatement text="AI should feel like magic, not homework." />
        <ClosingStatement />
      </div>
    </section>
  );
}
