"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorColor?: string;
}

export default function Typewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = "",
  cursorColor = "var(--terracotta)",
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (isDeleting) {
      setText((prev) => prev.slice(0, -1));
      if (text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      setText((prev) => currentPhrase.slice(0, prev.length + 1));
      if (text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    }
  }, [text, isDeleting, currentPhrase, phrases.length, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text}
        <span
          className="cursor-blink inline-block ml-0.5"
          style={{ color: cursorColor }}
        >
          |
        </span>
      </span>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {currentPhrase}
      </span>
    </span>
  );
}
