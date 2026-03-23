"use client";

import { useRef } from "react";
import { motion, useInView, type TargetAndTransition } from "framer-motion";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-out"
  | "blur-in"
  | "clip-up"
  | "clip-left"
  | "clip-center"
  | "clip-diagonal"
  | "rotate-in"
  | "flip-up"
  | "slide-rotate";

const hiddenVariants: Record<AnimationVariant, TargetAndTransition> = {
  "fade-up": { opacity: 0, y: 60 },
  "fade-down": { opacity: 0, y: -60 },
  "fade-left": { opacity: 0, x: -60 },
  "fade-right": { opacity: 0, x: 60 },
  "clip-center": { opacity: 0, clipPath: "inset(50% 50% 50% 50%)" },
  "clip-diagonal": { opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
  "zoom-out": { opacity: 0, scale: 1.2 },
  "blur-in": { opacity: 0, filter: "blur(20px)" },
  "clip-up": { opacity: 0, clipPath: "inset(100% 0 0 0)" },
  "clip-left": { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  "rotate-in": { opacity: 0, rotate: -8, y: 40 },
  "flip-up": { opacity: 0, rotateX: 30, y: 40 },
  "slide-rotate": { opacity: 0, x: -40, rotate: -3 },
};

const visibleVariants: Record<AnimationVariant, TargetAndTransition> = {
  "fade-up": { opacity: 1, y: 0 },
  "fade-down": { opacity: 1, y: 0 },
  "fade-left": { opacity: 1, x: 0 },
  "fade-right": { opacity: 1, x: 0 },
  "clip-center": { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
  "clip-diagonal": { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  "zoom-out": { opacity: 1, scale: 1 },
  "blur-in": { opacity: 1, filter: "blur(0px)" },
  "clip-up": { opacity: 1, clipPath: "inset(0 0 0 0)" },
  "clip-left": { opacity: 1, clipPath: "inset(0 0 0 0)" },
  "rotate-in": { opacity: 1, rotate: 0, y: 0 },
  "flip-up": { opacity: 1, rotateX: 0, y: 0 },
  "slide-rotate": { opacity: 1, x: 0, rotate: 0 },
};

type ScrollRevealProps = {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.05,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={hiddenVariants[variant]}
      animate={isInView ? visibleVariants[variant] : hiddenVariants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: AnimationVariant;
  duration?: number;
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  variant = "fade-up",
  duration = 0.6,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.01, margin: "0px 0px -30px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: hiddenVariants[variant],
                visible: {
                  ...visibleVariants[variant],
                  transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
