"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();

  // Header background: transparent → cream with glassmorphism
  const headerBgOpacity = useTransform(scrollY, [150, 350], [0, 0.95]);
  const headerBlur = useTransform(scrollY, [150, 350], [0, 20]);
  const headerShadow = useTransform(scrollY, [250, 350], [0, 0.05]);

  const headerBg = useMotionTemplate`rgba(var(--cream-rgb), ${headerBgOpacity})`;
  const headerBackdrop = useMotionTemplate`blur(${headerBlur}px)`;
  const headerBoxShadow = useMotionTemplate`0 1px 0 rgba(var(--near-black-rgb), ${headerShadow})`;

  // White logo: fully visible at top, fades out as you scroll
  const whiteLogoOpacity = useTransform(scrollY, [150, 350], [0.9, 0]);
  // Orange logo: hidden at top, fades in as header solidifies
  const orangeLogoOpacity = useTransform(scrollY, [150, 350], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: headerBg,
        backdropFilter: headerBackdrop,
        WebkitBackdropFilter: headerBackdrop,
        boxShadow: headerBoxShadow,
      }}
    >
      <div className="mx-auto flex items-center justify-center px-6 py-3 relative">
        {/* White logo — visible over the terracotta hero */}
        <motion.div style={{ opacity: whiteLogoOpacity }} className="absolute inset-0 flex items-center justify-center px-6 py-3">
          <img
            src="/logos/automatemycoffeelogo_transparent_canva.svg"
            alt=""
            className="w-72 md:w-96 h-auto brightness-0 invert"
            aria-hidden="true"
          />
        </motion.div>

        {/* Orange logo — fades in as header becomes cream */}
        <motion.div style={{ opacity: orangeLogoOpacity }}>
          <img
            src="/logos/automatemycoffeelogo_transparent_canva.svg"
            alt="Automate My Coffee"
            className="w-72 md:w-96 h-auto"
          />
        </motion.div>
      </div>
    </motion.header>
  );
}
