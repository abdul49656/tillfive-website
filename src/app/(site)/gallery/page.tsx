"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "@/components/image-carousel";

const bannerImages = [
  { src: "/images/pizzas/meat-lover-pizza.jpg", alt: "Meat Lover's Pizza" },
  { src: "/images/pastas/fettucine-alfredo.jpg", alt: "Fettuccine Alfredo" },
  { src: "/images/appetizers/chicken-wings.jpg", alt: "Chicken Wings" },
  { src: "/images/pizzas/supreme-pizza.jpg", alt: "Supreme Pizza" },
  { src: "/images/desserts/tiramisu.jpg", alt: "Tiramisu" },
  { src: "/images/burgers/classic-cheeseburger.jpg", alt: "Cheeseburger" },
  { src: "/images/salads/greek-salad.jpg", alt: "Greek Salad" },
  { src: "/images/pizzas/primo-pizza.jpg", alt: "Primo Pizza" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "pizzas", name: "Pizzas" },
  { id: "pastas", name: "Pastas" },
  { id: "appetizers", name: "Appetizers" },
  { id: "burgers", name: "Burgers & Pitas" },
  { id: "salads", name: "Salads" },
  { id: "subs", name: "Subs" },
  { id: "desserts", name: "Desserts" },
  { id: "storefront", name: "Storefront" },
];

const galleryImages = [
  { src: "/images/pizzas/meat-lover-pizza.jpg", alt: "Meat Lover's Pizza", category: "pizzas" },
  { src: "/images/pizzas/supreme-pizza.jpg", alt: "Supreme Pizza", category: "pizzas" },
  { src: "/images/pizzas/bbq-chicken-pizza.jpg", alt: "BBQ Chicken Pizza", category: "pizzas" },
  { src: "/images/pizzas/primo-pizza.jpg", alt: "Primo Pizza", category: "pizzas" },
  { src: "/images/pizzas/hawaiian-pizza.jpg", alt: "Hawaiian Pizza", category: "pizzas" },
  { src: "/images/pizzas/margherita-pizza.jpg", alt: "Margherita Pizza", category: "pizzas" },
  { src: "/images/pizzas/classic-pizza.jpg", alt: "Classic Pizza", category: "pizzas" },
  { src: "/images/pizzas/pepperoni-lover-pizza.jpg", alt: "Pepperoni Lover's Pizza", category: "pizzas" },
  { src: "/images/pizzas/veggie-lover-pizza.jpg", alt: "Veggie Lover's Pizza", category: "pizzas" },
  { src: "/images/pizzas/chicken-alfredo-pizza.jpg", alt: "Chicken Alfredo Pizza", category: "pizzas" },
  { src: "/images/pizzas/grilled-chicken-ranch-pizza.jpg", alt: "Grilled Chicken Ranch Pizza", category: "pizzas" },
  { src: "/images/pizzas/calzone.jpg", alt: "Calzone", category: "pizzas" },
  { src: "/images/pastas/fettucine-alfredo.jpg", alt: "Fettuccine Alfredo", category: "pastas" },
  { src: "/images/pastas/meat-lasagna.jpg", alt: "Meat Lasagna", category: "pastas" },
  { src: "/images/pastas/chicken-parmesan-pasta.jpg", alt: "Chicken Parmesan Pasta", category: "pastas" },
  { src: "/images/pastas/seafood-fettucine.jpg", alt: "Seafood Fettuccini", category: "pastas" },
  { src: "/images/pastas/spaghetti-red-sauce.jpg", alt: "Spaghetti Red Sauce", category: "pastas" },
  { src: "/images/pastas/cheese-tortellini.jpg", alt: "Cheese Tortellini", category: "pastas" },
  { src: "/images/appetizers/chicken-wings.jpg", alt: "Chicken Wings", category: "appetizers" },
  { src: "/images/appetizers/sampler-platter.jpg", alt: "Sampler Platter", category: "appetizers" },
  { src: "/images/appetizers/mozzerella-sticks.jpg", alt: "Mozzarella Sticks", category: "appetizers" },
  { src: "/images/appetizers/chicken-tender-basket.jpg", alt: "Chicken Tender Basket", category: "appetizers" },
  { src: "/images/appetizers/cheezy-bacon-fries.jpg", alt: "Cheesy Bacon Fries", category: "appetizers" },
  { src: "/images/appetizers/garlic-cheese-breadsticks.jpg", alt: "Garlic Cheese Bread", category: "appetizers" },
  { src: "/images/burgers/classic-cheeseburger.jpg", alt: "Classic Cheeseburger", category: "burgers" },
  { src: "/images/burgers/bacon-cheese-burger.jpg", alt: "Bacon Cheeseburger", category: "burgers" },
  { src: "/images/burgers/gyro-pita.jpg", alt: "Gyro Pita", category: "burgers" },
  { src: "/images/burgers/buffalo-chicken-sandwich.jpg", alt: "Buffalo Chicken Sandwich", category: "burgers" },
  { src: "/images/salads/greek-salad.jpg", alt: "Greek Salad", category: "salads" },
  { src: "/images/salads/grilled-chicken-salad.jpg", alt: "Grilled Chicken Salad", category: "salads" },
  { src: "/images/salads/buffalo-chicken-salad.jpg", alt: "Buffalo Chicken Salad", category: "salads" },
  { src: "/images/salads/house-salad.jpg", alt: "House Salad", category: "salads" },
  { src: "/images/subs/meatball-sub.jpg", alt: "Meatball Sub", category: "subs" },
  { src: "/images/subs/philly-cheeseteak.jpg", alt: "Philly Cheesesteak Sub", category: "subs" },
  { src: "/images/subs/chicken-ranch-sub.jpg", alt: "Chicken Ranch Sub", category: "subs" },
  { src: "/images/subs/club-sub.jpg", alt: "Club Sub", category: "subs" },
  { src: "/images/desserts/tiramisu.jpg", alt: "Tiramisu", category: "desserts" },
  { src: "/images/desserts/cannoli.jpg", alt: "Cannoli", category: "desserts" },
  { src: "/images/desserts/cheesecake.jpg", alt: "Cheesecake", category: "desserts" },
  { src: "/images/desserts/chocolate-cake.jpg", alt: "Chocolate Cake", category: "desserts" },
  { src: "/images/desserts/chocolate-chip-cookie.jpg", alt: "Chocolate Chip Cookie", category: "desserts" },
  { src: "/images/storefront.jpg", alt: "Till Five Pizza Storefront", category: "storefront" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  function navigateLightbox(direction: number) {
    if (lightbox === null) return;
    const next = lightbox + direction;
    if (next >= 0 && next < filtered.length) setLightbox(next);
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
            Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold text-white lg:text-5xl"
          >
            See Our Food
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 max-w-lg text-white/60"
          >
            Every dish is made with care. Take a look at what&apos;s waiting for
            you.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[73px] z-30 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="hide-scrollbar flex gap-1 overflow-x-auto py-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  activeFilter === cat.id
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

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            layout
            className="columns-1 gap-4 sm:columns-2 lg:columns-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.button
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                  onClick={() => setLightbox(i)}
                  className="group mb-4 block w-full overflow-hidden rounded-xl"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                      <p className="text-sm font-medium text-white drop-shadow-lg">{img.alt}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {lightbox < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={900}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
              <p className="mt-4 text-center text-sm text-white/80">
                {filtered[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
