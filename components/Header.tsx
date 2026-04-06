"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 300);
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-(--cream)/95 backdrop-blur-xl shadow-[0_1px_0_rgba(var(--near-black-rgb),0.05)]"
    >
      <div className="mx-auto flex items-center justify-center px-6 py-2">
        <Image
          src="/logos/automatemycoffeelogo_transparent.svg"
          alt="Automate My Coffee"
          width={160}
          height={50}
          preload
          className="w-32 md:w-36 h-auto"
        />
      </div>
    </motion.header>
  );
}
