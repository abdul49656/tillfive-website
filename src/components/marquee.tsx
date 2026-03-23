"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export function Marquee({
  children,
  reverse = false,
  speed = 30,
  className,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{ ["--marquee-duration" as string]: `${speed}s` }}
    >
      <div
        className={cn(
          "flex w-max gap-8",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

type TextMarqueeProps = {
  text?: string;
  texts?: string[];
  reverse?: boolean;
  speed?: number;
  className?: string;
  separator?: string;
  textClassName?: string;
};

export function TextMarquee({
  text,
  texts,
  reverse = false,
  speed = 25,
  className,
  separator = " — ",
  textClassName,
}: TextMarqueeProps) {
  const phrases = texts || Array.from({ length: 8 }, () => text!);
  const items = phrases.map((phrase, i) => (
    <span key={i} className={cn("shrink-0 whitespace-nowrap", textClassName)}>
      {phrase}
      <span className="mx-6 text-brand opacity-60">{separator}</span>
    </span>
  ));

  return (
    <Marquee reverse={reverse} speed={speed} className={className}>
      {items}
    </Marquee>
  );
}
