"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: { src: string; alt: string }[];
  speed?: number;
  className?: string;
  imageClassName?: string;
  overlay?: boolean;
  reverse?: boolean;
};

export function ImageCarousel({
  images,
  speed = 25,
  className,
  imageClassName,
  overlay = false,
  reverse = false,
}: ImageCarouselProps) {
  const doubled = [...images, ...images];

  return (
    <div className={cn("overflow-hidden", className)}>
      {overlay && (
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />
      )}
      <div
        className={cn(
          "flex w-max h-full",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className={cn(
              "relative shrink-0",
              imageClassName || "h-64 w-96"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

type BannerCarouselProps = {
  images: { src: string; alt: string }[];
  speed?: number;
  overlayClassName?: string;
  className?: string;
  children?: React.ReactNode;
};

export function BannerCarousel({
  images,
  speed = 30,
  overlayClassName = "bg-black/60",
  className,
  children,
}: BannerCarouselProps) {
  const doubled = [...images, ...images];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-full w-[500px] shrink-0"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="500px"
            />
          </div>
        ))}
      </div>
      <div className={cn("absolute inset-0 z-10", overlayClassName)} />
      {children && (
        <div className="absolute inset-0 z-20 flex items-center">
          {children}
        </div>
      )}
    </div>
  );
}
