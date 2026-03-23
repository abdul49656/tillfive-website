"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type CollageImage = {
  src: string;
  alt: string;
  position: string;
};

type ScrollCollageProps = {
  images: CollageImage[];
  className?: string;
};

function CollageItem({
  image,
  progress,
  index,
  total,
}: {
  image: CollageImage;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index * (0.6 / total);
  const mid = start + 0.15;
  const end = start + 0.35;

  const clipPath = useTransform(
    progress,
    [start, mid, end],
    [
      "inset(50% 50% 50% 50%)",
      "inset(10% 10% 10% 10%)",
      "inset(0% 0% 0% 0%)",
    ]
  );
  const scale = useTransform(progress, [start, end], [1.15, 1]);
  const opacity = useTransform(progress, [start, mid], [0, 1]);

  return (
    <motion.div
      className={cn("absolute overflow-hidden rounded-xl shadow-2xl", image.position)}
      style={{ clipPath, scale, opacity }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 80vw, 40vw"
      />
    </motion.div>
  );
}

export function ScrollCollage({ images, className }: ScrollCollageProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className={cn("relative h-[200vh]", className)}>
      <div className="sticky top-0 h-screen overflow-hidden bg-foreground">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[clamp(2rem,6vw,5rem)] font-bold text-white/5 uppercase tracking-widest select-none">
            Till Five Pizza
          </p>
        </div>
        <div className="relative h-full w-full max-w-7xl mx-auto px-6">
          {images.map((img, i) => (
            <CollageItem
              key={img.src}
              image={img}
              progress={scrollYProgress}
              index={i}
              total={images.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
