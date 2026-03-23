"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { menuCategories } from "@/lib/menu-data";
import { locations } from "@/lib/site-data";
import { CollapsibleSection } from "@/components/collapsible-section";
import { PizzaBuilderInfo } from "@/components/pizza-builder-info";
import { SpecialtyPizzaInfo } from "@/components/specialty-pizza-info";

const NASHVILLE_ORDER_URL =
  "https://tillfivepizza.activemenus.com/glue/Antioch-Airport-Downtown-menu/134349";

const location = locations[0]; // Murfreesboro Pike

export function MobileMenuContent() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => Object.fromEntries(menuCategories.map((cat) => [cat.id, true]))
  );
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
    setOpenSections((prev) => ({ ...prev, [id]: true }));
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleSection(id: string) {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <>
      {/* ── Mini hero (scrolls away) ── */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="/images/storefront.jpg"
          alt="Till Five Pizza – Murfreesboro Pike"
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
        />
        {/* Heavier gradient so the glass card reads cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/75" />

        {/* Logo — top right */}
        <div className="absolute top-4 right-4 z-10">
          <Image
            src="/images/logo.png"
            alt="Till Five Pizza"
            width={50}
            height={50}
            className="rounded-full border-2 border-white/30 shadow-xl"
            loading="eager"
          />
        </div>

        {/* Glass card — bottom, left-aligned text */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="rounded-2xl bg-black/45 px-4 py-3.5 backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
              Mobile Menu
            </p>
            <p className="mt-0.5 text-xl font-bold text-white leading-tight">Till Five Pizza</p>
            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand">
              {location.name}
            </p>
            <div className="mt-2 flex flex-col gap-0.5">
              <p className="text-xs text-white/65">{location.address}, {location.city}</p>
              <p className="text-xs text-white/65">Open {location.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Category pills (sticky) ── */}
      <div className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="relative">
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
      </div>

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
              className="mb-6 scroll-mt-[56px]"
            >
              <CollapsibleSection
                title={cat.name}
                description={cat.id === "pizza" || cat.id === "specialty" ? undefined : cat.description}
                open={openSections[cat.id] ?? false}
                onToggle={() => toggleSection(cat.id)}
              >
                {cat.id === "pizza" && (
                  <PizzaBuilderInfo />
                )}

                {cat.id === "specialty" && (
                  <SpecialtyPizzaInfo />
                )}

                {sortedItems.length > 0 && (
                  <>
                    {cat.id === "specialty" && (
                      <div className="mt-6 mb-3 border-t border-border pt-5">
                        <p className="border-l-2 border-brand pl-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground">
                          Specialty Pizzas
                        </p>
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
                              {cat.id !== "specialty" && (
                                <span className="shrink-0 text-sm font-bold text-brand">
                                  {item.price}
                                </span>
                              )}
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

        {/* Murfreesboro Pike location info */}
        <div className="mt-4 rounded-2xl bg-background-alt p-5">
          <p className="text-sm font-bold text-foreground">{location.name}</p>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-start gap-2">
              <MapPin size={13} className="mt-0.5 shrink-0 text-brand" />
              <p className="text-xs text-foreground-muted">{location.address}, {location.city}</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={13} className="shrink-0 text-brand" />
              <p className="text-xs text-foreground-muted">Open {location.hours}</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={13} className="shrink-0 text-brand" />
              <a href={`tel:${location.phoneRaw}`} className="text-xs text-foreground-muted">
                {location.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Fixed bottom CTA bar ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-white/95 backdrop-blur-md px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-3">
          <a
            href={`tel:${location.phoneRaw}`}
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
