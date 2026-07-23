"use client";

import { motion } from "framer-motion";

const line1 = "You don't have to";
const line2 = "carry this alone.";

function AnimatedLine({ text, delayStart }: { text: string; delayStart: number }) {
  const words = text.split(" ");
  return (
    <span className="block">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, delay: delayStart + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function HeroHeadline() {
  return (
    <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl md:text-6xl">
      <AnimatedLine text={line1} delayStart={0.1} />
      <span className="text-accent">
        <AnimatedLine text={line2} delayStart={0.5} />
      </span>
    </h1>
  );
}
