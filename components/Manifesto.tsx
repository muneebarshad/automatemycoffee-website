"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const statements = [
  {
    text: "We believe boring tasks should be illegal.",
    align: "md:text-left md:ml-0 md:mr-auto",
  },
  {
    text: "Your time is worth more than copy-pasting data.",
    align: "md:text-right md:mr-0 md:ml-auto",
  },
  {
    text: "AI should feel like magic, not homework.",
    align: "text-center mx-auto",
    highlight: true,
  },
];

function Statement({
  text,
  align,
  highlight,
}: {
  text: string;
  align: string;
  highlight?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}
      className={`text-center max-w-3xl ${align}`}
    >
      <h2
        className={`font-(family-name:--font-national-park) font-bold leading-[1.1] tracking-tight ${
          highlight
            ? "text-3xl md:text-5xl lg:text-6xl"
            : "text-2xl md:text-4xl lg:text-5xl"
        }`}
        style={highlight ? { color: "var(--terracotta)" } : undefined}
      >
        {text}
      </h2>
    </motion.div>
  );
}

export default function Manifesto() {
  const closingRef = useRef<HTMLDivElement>(null);
  const closingInView = useInView(closingRef, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full py-28 md:py-40 lg:py-52 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative side accent */}
      <div
        className="absolute top-24 -left-4 w-2 h-32 md:h-48 rounded-full hidden md:block"
        style={{ backgroundColor: "var(--terracotta)", opacity: 0.15 }}
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-20 md:gap-28 lg:gap-36">
        {statements.map((s, i) => (
          <Statement key={i} {...s} />
        ))}

        {/* Closing */}
        <motion.div
          ref={closingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={closingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="text-center mx-auto max-w-2xl"
        >
          <div
            className="inline-block w-12 h-px mb-8"
            style={{ backgroundColor: "var(--terracotta)" }}
          />
          <p className="text-lg md:text-xl leading-relaxed opacity-50">
            We&apos;re building the automation agency for people who&apos;d rather be doing literally anything else.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
