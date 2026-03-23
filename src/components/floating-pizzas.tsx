"use client";

import Image from "next/image";

type FloatingItem = {
  src: string;
  size: number;
  x: string;
  y: string;
  rotate: number;
  duration: string;
  delay: string;
  anim: string;
};

const variantA: FloatingItem[] = [
  { src: "/images/pizzas/pepperoni-lover-pizza.jpg", size: 200, x: "-6%", y: "2%", rotate: 12, duration: "22s", delay: "0s", anim: "pizza-float-1" },
  { src: "/images/pizzas/margherita-pizza.jpg", size: 160, x: "90%", y: "35%", rotate: -18, duration: "26s", delay: "-5s", anim: "pizza-float-2" },
  { src: "/images/pizzas/hawaiian-pizza.jpg", size: 130, x: "2%", y: "65%", rotate: 25, duration: "20s", delay: "-10s", anim: "pizza-float-3" },
  { src: "/images/pizzas/supreme-pizza.jpg", size: 110, x: "85%", y: "5%", rotate: -30, duration: "24s", delay: "-3s", anim: "pizza-float-4" },
  { src: "/images/pizzas/classic-pizza.jpg", size: 90, x: "88%", y: "72%", rotate: 15, duration: "21s", delay: "-8s", anim: "pizza-float-1" },
];

const variantB: FloatingItem[] = [
  { src: "/images/pizzas/meat-lover-pizza.jpg", size: 180, x: "88%", y: "5%", rotate: 20, duration: "24s", delay: "-2s", anim: "pizza-float-2" },
  { src: "/images/pizzas/veggie-lover-pizza.jpg", size: 150, x: "-4%", y: "40%", rotate: -15, duration: "22s", delay: "-7s", anim: "pizza-float-3" },
  { src: "/images/pizzas/bbq-chicken-pizza.jpg", size: 120, x: "85%", y: "60%", rotate: 30, duration: "20s", delay: "-12s", anim: "pizza-float-4" },
  { src: "/images/pizzas/primo-pizza.jpg", size: 100, x: "3%", y: "8%", rotate: -25, duration: "26s", delay: "-4s", anim: "pizza-float-1" },
  { src: "/images/pizzas/classic-pizza.jpg", size: 85, x: "0%", y: "75%", rotate: 10, duration: "23s", delay: "-15s", anim: "pizza-float-2" },
];

type FloatingPizzasProps = {
  variant?: "a" | "b";
};

export function FloatingPizzas({ variant = "a" }: FloatingPizzasProps) {
  const items = variant === "a" ? variantA : variantB;

  return (
    <>
      <style jsx>{`
        @keyframes pizza-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(var(--r)); }
          25% { transform: translate(20px, -30px) rotate(calc(var(--r) + 10deg)); }
          50% { transform: translate(-15px, -50px) rotate(calc(var(--r) - 8deg)); }
          75% { transform: translate(25px, -20px) rotate(calc(var(--r) + 15deg)); }
        }
        @keyframes pizza-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(var(--r)); }
          30% { transform: translate(-25px, -35px) rotate(calc(var(--r) - 12deg)); }
          60% { transform: translate(18px, -55px) rotate(calc(var(--r) + 8deg)); }
          85% { transform: translate(-10px, -20px) rotate(calc(var(--r) - 5deg)); }
        }
        @keyframes pizza-float-3 {
          0%, 100% { transform: translate(0, 0) rotate(var(--r)); }
          20% { transform: translate(30px, -25px) rotate(calc(var(--r) + 14deg)); }
          50% { transform: translate(-20px, -45px) rotate(calc(var(--r) - 10deg)); }
          80% { transform: translate(15px, -15px) rotate(calc(var(--r) + 6deg)); }
        }
        @keyframes pizza-float-4 {
          0%, 100% { transform: translate(0, 0) rotate(var(--r)); }
          35% { transform: translate(-18px, -40px) rotate(calc(var(--r) + 12deg)); }
          65% { transform: translate(22px, -30px) rotate(calc(var(--r) - 15deg)); }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="absolute rounded-full overflow-hidden shadow-2xl"
            style={{
              left: item.x,
              top: item.y,
              width: item.size,
              height: item.size,
              // @ts-expect-error CSS custom property
              "--r": `${item.rotate}deg`,
              animation: `${item.anim} ${item.duration} ease-in-out infinite`,
              animationDelay: item.delay,
            }}
          >
            <Image
              src={item.src}
              alt=""
              fill
              className="object-cover"
              sizes={`${item.size}px`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
