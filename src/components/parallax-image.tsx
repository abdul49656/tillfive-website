"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  overlayClassName?: string;
  speed?: number;
  children?: React.ReactNode;
};

export function ParallaxImage({
  src,
  alt,
  className,
  overlayClassName = "bg-black/50",
  speed = 0.3,
  children,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 30}%`, `${speed * 30}%`]
  );

  return (
    <section ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div className="absolute inset-[-20%]" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className={cn("absolute inset-0 z-[1]", overlayClassName)} />
      {children && (
        <div className="relative z-10 flex min-h-full items-center justify-center px-6 py-16">
          {children}
        </div>
      )}
    </section>
  );
}
