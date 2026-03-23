"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type TextSplitProps = {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function TextSplit({
  text,
  className,
  delay = 0,
  charDelay = 0.03,
  as: Tag = "h1",
}: TextSplitProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={cn("overflow-hidden", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => {
            const totalIndex =
              words
                .slice(0, wordIndex)
                .reduce((acc, w) => acc + w.length, 0) + charIndex;
            return (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  isInView
                    ? { y: "0%", opacity: 1 }
                    : { y: "100%", opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: delay + totalIndex * charDelay,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

type LineRevealProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
};

export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.15,
}: LineRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            className={lineClassName}
            initial={{ y: "110%", rotate: 2 }}
            animate={
              isInView ? { y: "0%", rotate: 0 } : { y: "110%", rotate: 2 }
            }
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
