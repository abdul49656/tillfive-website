"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { menuCategories } from "@/lib/menu-data";
import { siteConfig } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ImageCarousel } from "@/components/image-carousel";
import { CollapsibleSection } from "@/components/collapsible-section";

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

export default function MenuPage() {
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
  }

  return (
    <>
      {/* Header with carousel background */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <ImageCarousel
            images={bannerImages}
            speed={30}
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
            Full Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 max-w-lg text-white/60"
          >
            Dough made fresh daily on premises with top-tier locally sourced
            ingredients. All pizzas can be ordered as calzones.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href={siteConfig.orderUrl}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5"
          >
            <ShoppingBag size={16} />
            Order Online
          </motion.a>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-[73px] z-30 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10" />
            <div
              ref={navRef}
              className="hide-scrollbar flex gap-1 overflow-x-auto py-3 px-1"
            >
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={cn(
                    "relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    activeCategory === cat.id
                      ? "bg-brand text-white shadow-md shadow-brand/20"
                      : "text-foreground-muted hover:bg-background-alt hover:text-foreground"
                  )}
                >
                  {cat.name}
                </button>
              ))}
              <div className="shrink-0 w-4" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {menuCategories.map((cat) => {
          const sortedItems = [...cat.items].sort((a, b) => {
            if (a.image && !b.image) return -1;
            if (!a.image && b.image) return 1;
            return 0;
          });

          return (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => { sectionRefs.current[cat.id] = el; }}
              className="mb-12 scroll-mt-36"
            >
              <CollapsibleSection
                title={cat.name}
                description={cat.description}
                defaultOpen={true}
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {sortedItems.map((item) => (
                    <div
                      key={item.name}
                      className="group flex gap-4 rounded-xl border border-border bg-white p-4 transition-all duration-500 hover:shadow-lg hover:border-brand/20 hover:-translate-y-0.5"
                    >
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
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-brand transition-colors duration-300">
                            {item.name}
                          </h3>
                          <span className="shrink-0 text-sm font-bold text-brand">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="mt-1 text-xs leading-relaxed text-foreground-muted line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-background-alt py-16 text-center">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Order?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-foreground-muted">
            Order online for pickup or delivery from any of our Nashville
            locations.
          </p>
          <a
            href={siteConfig.orderUrl}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/25 hover:-translate-y-1"
          >
            <ShoppingBag size={18} />
            Order Now
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
