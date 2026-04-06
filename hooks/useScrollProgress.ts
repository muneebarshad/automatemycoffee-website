"use client";

import { useScroll, type MotionValue } from "framer-motion";
import { type RefObject } from "react";

export function useScrollProgress(
  target: RefObject<HTMLElement | null>,
  offset: ["start end", "end start"] = ["start end", "end start"]
): MotionValue<number> {
  const { scrollYProgress } = useScroll({ target, offset });
  return scrollYProgress;
}

export function useWindowScroll() {
  const { scrollY } = useScroll();
  return scrollY;
}
