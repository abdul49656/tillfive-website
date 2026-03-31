"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { menuCategories, MenuItem } from "@/lib/menu-data";
import { siteConfig } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ImageCarousel } from "@/components/image-carousel";
import { CollapsibleSection } from "@/components/collapsible-section";
import { PizzaBuilderInfo } from "@/components/pizza-builder-info";
import { SpecialtyPizzaInfo } from "@/components/specialty-pizza-info";

const bannerImages = [
  { src: "/images/pizzas/primo-pizza.jpg", alt: "Primo Pizza" },
  { src: "/images/pastas/fettucine-alfredo.jpg", alt: "Fettuccine Alfredo" },
  { src: "/images/pizzas/meat-lover-pizza.jpg", alt: "Meat Lover's" },
  { src: "/images/appetizers/chicken-wings.jpg", alt: "Chicken Wings" },
  { src: "/images/pizzas/bbq-chicken-pizza.jpg", alt: "BBQ Chicken Pizza" },
  { src: "/images/desserts/tiramisu.jpg", alt: "Tiramisu" },
  { src: "/images/pizzas/supreme-pizza.jpg", alt: "Supreme Pizza" },
  { src: "/images/burgers/classic-cheeseburger.jpg", alt: "Cheeseburger" },
];

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const cat = menuCategories.find((c) => c.id === hash);
      if (cat) {
        setActiveCategory(cat.id);
        setTimeout(() => {
          sectionRefs.current[cat.id]?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    for (const cat of menuCategories) {
      const el = sectionRefs.current[cat.id];
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  function scrollToCategory(id: string) {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (navRef.current) {
      const btn = navRef.current.querySelector(`[data-id="${id}"]`) as HTMLElement;
      if (btn) {
        const offset = btn.offsetLeft - navRef.current.clientWidth / 2 + btn.clientWidth / 2;
        navRef.current.scrollTo({ left: offset, behavior: "smooth" });
      }
    }
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <ImageCarousel
            images={bannerImages}
            speed={35}
            imageClassName="h-full w-[400px] shrink-0"
            className="h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/70 z-[1]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand"
          >
            Our Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold text-white lg:text-5xl"
          >
            Nashville Pizza & Italian Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 max-w-lg text-white/60"
          >
            Hand-tossed to order with locally sourced ingredients. Open daily until 5 AM.
          </motion.p>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-[73px] z-30 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div
            ref={navRef}
            className="hide-scrollbar flex gap-1 overflow-x-auto py-3"
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                data-id={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-brand text-white shadow-md shadow-brand/20"
                    : "text-foreground-muted hover:bg-background-alt hover:text-foreground"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Order CTA */}
      <div className="border-b border-border bg-background-alt">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-foreground-muted">
              Ready to order?{" "}
              <span className="font-medium text-foreground">
                Order online for pickup or delivery.
              </span>
            </p>
            <a
              href={siteConfig.orderUrl}
              className="flex shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/25"
            >
              <ShoppingBag size={15} />
              Order Now
            </a>
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="space-y-16">
          {menuCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              ref={(el) => { sectionRefs.current[category.id] = el; }}
              className="scroll-mt-[140px]"
            >
              <ScrollReveal variant="fade-up">
                <div className="mb-8 border-b border-border pb-4">
                  <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="mt-1 text-sm text-foreground-muted">
                      {category.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>

              {category.id === "specialty" && (
                <ScrollReveal variant="fade-up" className="mb-6">
                  <SpecialtyPizzaInfo />
                </ScrollReveal>
              )}
              {category.id === "cheese" && (
                <ScrollReveal variant="fade-up" className="mb-6">
                  <PizzaBuilderInfo />
                </ScrollReveal>
              )}

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex gap-4 rounded-xl border border-border bg-white p-4 transition-all duration-300 hover:border-brand/20 hover:shadow-md">
      {item.image && (
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="80px"
          />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <p className="font-semibold text-foreground group-hover:text-brand transition-colors duration-300">
            {item.name}
          </p>
          {item.description && (
            <p className="mt-0.5 text-xs leading-relaxed text-foreground-muted line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
        {item.price && (
          <p className="mt-2 text-sm font-semibold text-brand">{item.price}</p>
        )}
      </div>
    </div>
  );
}
