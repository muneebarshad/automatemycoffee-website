"use client";

import { motion } from "framer-motion";

interface GradientBlobProps {
  className?: string;
}

export default function GradientBlob({ className = "" }: GradientBlobProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
      className={className}
      aria-hidden="true"
    >
      <div
        className="w-full h-full"
        style={{
          aspectRatio: "1",
          background: "radial-gradient(circle, rgba(var(--terracotta-rgb), 0.08) 0%, rgba(var(--terracotta-rgb), 0.03) 40%, transparent 70%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animation: "blob-morph 10s ease-in-out infinite",
        }}
      />
    </motion.div>
  );
}
