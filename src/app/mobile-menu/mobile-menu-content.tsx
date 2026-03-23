"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Phone, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { menuCategories } from "@/lib/menu-data";
import { locations } from "@/lib/site-data";

const NASHVILLE_ORDER_URL =
  "https://tillfivepizza.activemenus.com/glue/Antioch-Airport-Downtown-menu/134349";
import { CollapsibleSection } from "@/components/collapsible-section";
import { PizzaBuilderInfo } from "@/components/pizza-builder-info";

export function MobileMenuContent() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const categoryNavRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* Scroll active pill into view in the category nav */
  useEffect(() => {
    const nav = categoryNavRef.current;
    if (!nav) return;
    const active = nav.querySelector<HTMLElement>("[data-active='true']");
    if (active) {
      active.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }, [activeCategory]);

  /* Intersection observer to track active section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveCategory(entry.target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
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
      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="flex items-center gap-3 px-4 py-3">
          <Image
            src="/images/logo.png"
            alt="Till Five Pizza"
            width={36}
            height={36}
            className="rounded-full shrink-0"
          />
          <div className="min-w-0">
            <p className="font-bold text-foreground leading-tight">Till Five Pizza</p>
            <p className="text-xs text-foreground-subtle truncate">
              Open 10 AM – 5 AM · Nashville, TN
            </p>
          </div>
        </div>

        {/* Category pills */}
        <div className="relative border-t border-border">
          <div className="pointer-events-none absolute left-0 inset-y-0 w-5 bg-gradient-to-r from-white to-transparent z-10" />
          <div
            ref={categoryNavRef}
            className="hide-scrollbar flex gap-1.5 overflow-x-auto px-4 py-2.5"
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                data-active={activeCategory === cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={cn(
                  "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                  activeCategory === cat.id
                    ? "bg-brand text-white shadow-sm shadow-brand/30"
                    : "bg-background-alt text-foreground-muted hover:bg-border hover:text-foreground"
                )}
              >
                {cat.name}
              </button>
            ))}
            <div className="shrink-0 w-4" aria-hidden="true" />
          </div>
          <div className="pointer-events-none absolute right-0 inset-y-0 w-5 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </header>

      {/* ── Menu sections ── */}
      <div className="px-4 py-6 pb-28">
        {menuCategories.map((cat) => {
          const sortedItems = [...cat.items]
            .filter((item) => !(cat.id === "pizza" && item.name === "Build Your Own Pizza"))
            .sort((a, b) => {
              if (a.image && !b.image) return -1;
              if (!a.image && b.image) return 1;
              return 0;
            });

          return (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => { sectionRefs.current[cat.id] = el; }}
              className="mb-6 scroll-mt-[120px]"
            >
              <CollapsibleSection
                title={cat.name}
                description={cat.id === "pizza" ? undefined : cat.description}
                defaultOpen={true}
              >
                {cat.id === "pizza" && (
                  <PizzaBuilderInfo />
                )}

                {sortedItems.length > 0 && (
                  <>
                    {cat.id === "pizza" && (
                      <div className="mt-8 mb-3 border-t border-border pt-6">
                        <p className="text-sm font-bold text-foreground">Popular Combinations</p>
                        <p className="text-xs text-foreground-muted">Ready-made specialty favorites</p>
                      </div>
                    )}
                <div className="flex flex-col gap-3">
                  {sortedItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex gap-3 rounded-xl border border-border bg-white p-3"
                    >
                      {item.image && (
                        <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="68px"
                          />
                        </div>
                      )}
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-semibold text-foreground leading-snug">
                            {item.name}
                          </h3>
                          <span className="shrink-0 text-sm font-bold text-brand">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="mt-0.5 text-xs leading-relaxed text-foreground-muted line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                  </>
                )}
              </CollapsibleSection>
            </section>
          );
        })}

        {/* Location info at bottom */}
        <div className="mt-4 rounded-2xl bg-background-alt p-5 text-center">
          <p className="text-sm font-semibold text-foreground">Two Nashville Locations</p>
          {locations.map((loc) => (
            <div key={loc.id} className="mt-3">
              <p className="text-xs font-medium text-foreground">{loc.name}</p>
              <p className="text-xs text-foreground-muted">{loc.address}, {loc.city}</p>
              <p className="text-xs text-foreground-subtle">{loc.hours}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Fixed bottom CTA bar ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-white/95 backdrop-blur-md px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-3">
          <a
            href={`tel:${locations[0].phoneRaw}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href={NASHVILLE_ORDER_URL}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            <ShoppingBag size={16} />
            Order Online
          </a>
        </div>
      </div>
    </>
  );
}
