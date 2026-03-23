"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig, locations } from "@/lib/site-data";
import { ScrollReveal, StaggerContainer } from "@/components/scroll-reveal";
import { TextMarquee } from "@/components/marquee";
import { ImageCarousel } from "@/components/image-carousel";
import { LineReveal } from "@/components/text-split";
import { ParallaxImage } from "@/components/parallax-image";
import { FloatingPizzas } from "@/components/floating-pizzas";


const featuredItems = [
  {
    name: "Meat Lover's Pizza",
    description: "Pepperoni, sausage, bacon, beef, and ham.",
    image: "/images/pizzas/meat-lover-pizza.jpg",
  },
  {
    name: "Supreme Pizza",
    description: "Pepperoni, sausage, onions, green peppers, mushrooms.",
    image: "/images/pizzas/supreme-pizza.jpg",
  },
  {
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken, onions, with BBQ sauce.",
    image: "/images/pizzas/bbq-chicken-pizza.jpg",
  },
  {
    name: "Fettuccine Alfredo",
    description: "Grilled chicken, cajun chicken, or shrimp.",
    image: "/images/pastas/fettucine-alfredo.jpg",
  },
  {
    name: "Chicken Wings",
    description: "Choice of 8 sauces. Available in 5, 10, 15, or 20 pieces.",
    image: "/images/appetizers/chicken-wings.jpg",
  },
  {
    name: "Tiramisu",
    description: "Coffee-flavored Italian dessert with mascarpone cheese.",
    image: "/images/desserts/tiramisu.jpg",
  },
];

const carouselImages = [
  { src: "/images/pizzas/primo-pizza.jpg", alt: "Primo Pizza" },
  { src: "/images/pastas/fettucine-alfredo.jpg", alt: "Fettuccine Alfredo" },
  { src: "/images/pizzas/meat-lover-pizza.jpg", alt: "Meat Lover's Pizza" },
  { src: "/images/appetizers/chicken-wings.jpg", alt: "Chicken Wings" },
  { src: "/images/pizzas/bbq-chicken-pizza.jpg", alt: "BBQ Chicken Pizza" },
  { src: "/images/desserts/tiramisu.jpg", alt: "Tiramisu" },
  { src: "/images/pizzas/supreme-pizza.jpg", alt: "Supreme Pizza" },
  { src: "/images/burgers/classic-cheeseburger.jpg", alt: "Classic Cheeseburger" },
  { src: "/images/pastas/meat-lasagna.jpg", alt: "Meat Lasagna" },
  { src: "/images/salads/greek-salad.jpg", alt: "Greek Salad" },
];

const carouselRow2 = [
  { src: "/images/pizzas/hawaiian-pizza.jpg", alt: "Hawaiian Pizza" },
  { src: "/images/subs/meatball-sub.jpg", alt: "Meatball Sub" },
  { src: "/images/pizzas/margherita-pizza.jpg", alt: "Margherita Pizza" },
  { src: "/images/appetizers/sampler-platter.jpg", alt: "Sampler Platter" },
  { src: "/images/pastas/chicken-parmesan-pasta.jpg", alt: "Chicken Parmesan" },
  { src: "/images/pizzas/classic-pizza.jpg", alt: "Classic Pizza" },
  { src: "/images/burgers/gyro-pita.jpg", alt: "Gyro Pita" },
  { src: "/images/desserts/cannoli.jpg", alt: "Cannoli" },
  { src: "/images/pizzas/veggie-lover-pizza.jpg", alt: "Veggie Lover's" },
  { src: "/images/appetizers/cheezy-bacon-fries.jpg", alt: "Cheesy Bacon Fries" },
];

function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* Video background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover scale-110"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-[1]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-[100svh] items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-32">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              Nashville&apos;s Late-Night Slice
            </motion.p>

            <LineReveal
              lines={["Pizza That Doesn't Sleep.", "Open Till 5 A.M."]}
              delay={0.5}
              stagger={0.2}
              lineClassName="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.0]"
              className="-space-y-1 sm:-space-y-2"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-8 max-w-md text-lg text-white/80 font-light"
            >
              Hand-tossed daily with top-tier locally sourced ingredients across
              two Nashville locations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href={siteConfig.orderUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-1"
              >
                Order Now
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <Link
                href="/menu"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-1"
              >
                View Menu
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <ParallaxHero />

      {/* Marquee divider */}
      <section className="border-y border-border bg-white py-5 overflow-hidden">
        <TextMarquee
          texts={[
            "FRESH DOUGH DAILY",
            "HAND-TOSSED TO ORDER",
            "OPEN TILL 5 AM",
            "NASHVILLE'S LATE-NIGHT SLICE",
            "LOCALLY SOURCED INGREDIENTS",
            "TWO NASHVILLE LOCATIONS",
            "PIZZA THAT DOESN'T SLEEP",
            "MADE WITH LOVE DAILY",
          ]}
          speed={40}
          reverse
          textClassName="text-sm md:text-xl font-bold uppercase tracking-[0.15em] text-foreground/80"
          separator="✦"
        />
      </section>

      {/* Full-width image carousel section */}
      <section className="relative py-0 overflow-hidden">
        <ImageCarousel
          images={carouselImages}
          speed={60}
          imageClassName="h-72 w-[450px] sm:h-80 sm:w-[500px] shrink-0"
          className="mb-2"
        />
        <ImageCarousel
          images={carouselRow2}
          speed={65}
          reverse
          imageClassName="h-72 w-[450px] sm:h-80 sm:w-[500px] shrink-0"
        />
      </section>

      {/* Featured Items */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand">
                  Our Menu
                </p>
                <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
                  Fan Favorites
                </h2>
              </div>
              <Link
                href="/menu"
                className="hidden items-center gap-2 text-sm font-medium text-brand transition-all duration-300 hover:gap-3 sm:flex"
              >
                Full Menu
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.1}
            variant="fade-up"
          >
            {featuredItems.map((item) => (
              <div
                key={item.name}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-brand/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-brand">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>

          <ScrollReveal variant="fade-up" className="mt-8 text-center sm:hidden">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand"
            >
              View Full Menu
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Red brand marquee */}
      <section className="bg-brand py-6 overflow-hidden">
        <TextMarquee
          texts={[
            "PIZZA • PASTA • SUBS • WINGS",
            "NASHVILLE'S FAVORITE LATE-NIGHT SPOT",
            "BURGERS • SALADS • DESSERTS",
            "HAND-TOSSED FRESH DAILY",
            "PIZZA • CALZONES • SUBS",
            "OPEN 10 AM TO 5 AM",
            "WINGS • APPETIZERS • MORE",
            "ORDER ONLINE FOR PICKUP OR DELIVERY",
          ]}
          speed={50}
          reverse
          textClassName="text-sm md:text-2xl font-bold uppercase tracking-[0.1em] text-white"
          separator=""
        />
      </section>

      {/* About Teaser */}
      <section className="bg-background-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal variant="fade-left">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/storefront.jpg"
                  alt="Till Five Pizza storefront"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal variant="fade-right" delay={0.1}>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand">
                  Our Story
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={0.2}>
                <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
                  A Nashville Staple
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={0.3}>
                <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
                  At Till Five Pizza, we believe great pizza starts with great
                  dough — made fresh daily, right here in our kitchen. Every pie is
                  hand-tossed using top-tier, locally sourced ingredients that you
                  can taste in every bite.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={0.4}>
                <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
                  Whether you&apos;re grabbing lunch, a late-night slice after a
                  show, or catering your next event — we&apos;ve got you covered
                  at two convenient Nashville locations.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={0.5}>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand hover:text-brand hover:gap-3 hover:-translate-y-0.5"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width parallax band */}
      <ParallaxImage
        src="/images/pizzas/pepperoni-lover-pizza.jpg"
        alt="Pepperoni lovers pizza"
        className="h-[50vh]"
        overlayClassName="bg-black/50"
        speed={0.4}
      >
        <ScrollReveal variant="fade-up" duration={0.9}>
          <h2 className="text-5xl font-bold text-white lg:text-7xl text-center">
            Made Fresh.<br />
            <span className="text-brand">Every. Single. Day.</span>
          </h2>
        </ScrollReveal>
      </ParallaxImage>

      {/* Menu Categories Overview */}
      <section className="relative py-24 bg-white overflow-hidden">
        <FloatingPizzas variant="b" />
        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand">
                What We Serve
              </p>
              <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
                Something for Everyone
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.08}
            variant="fade-up"
          >
            {[
              { name: "Pizzas & Calzones", count: 27, href: "/menu#specialty", emoji: "🍕" },
              { name: "Pastas", count: 12, href: "/menu#pastas", emoji: "🍝" },
              { name: "Burgers & Pitas", count: 10, href: "/menu#burgers", emoji: "🍔" },
              { name: "Appetizers", count: 19, href: "/menu#appetizers", emoji: "🍗" },
              { name: "Salads", count: 13, href: "/menu#salads", emoji: "🥗" },
              { name: "Subs", count: 13, href: "/menu#subs", emoji: "🥖" },
              { name: "Desserts", count: 5, href: "/menu#desserts", emoji: "🍰" },
              { name: "Catering", count: 7, href: "/menu#catering", emoji: "🎉" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group flex items-center justify-between rounded-xl border border-border bg-white p-5 transition-all duration-500 hover:border-brand hover:shadow-xl hover:-translate-y-1 hover:bg-brand-light/30"
              >
                <div>
                  <p className="text-lg font-semibold text-foreground group-hover:text-brand transition-colors duration-300">
                    {cat.name}
                  </p>
                  <p className="text-sm text-foreground-muted">
                    {cat.count} items
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                    {cat.emoji}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-foreground-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand"
                  />
                </div>
              </Link>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="relative bg-background-alt py-24 overflow-hidden">
        <FloatingPizzas variant="a" />
        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand">
                Find Us
              </p>
              <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
                Two Nashville Locations
              </h2>
              <p className="mx-auto mt-4 max-w-md text-foreground-muted">
                Open daily from 10 AM to 5 AM. Late-night cravings welcome.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
            staggerDelay={0.15}
            variant="fade-up"
          >
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="group rounded-2xl border border-border bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-brand/20"
              >
                <h3 className="text-2xl font-bold text-foreground group-hover:text-brand transition-colors duration-300">
                  {loc.name}
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-brand"
                    />
                    <p className="text-sm text-foreground-muted">
                      {loc.address}, {loc.city}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0 text-brand" />
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="shrink-0 text-brand" />
                    <p className="text-sm text-foreground-muted">{loc.hours}</p>
                  </div>
                </div>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand transition-all duration-300 hover:gap-3"
                >
                  Get Directions
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Banner */}
      <ParallaxImage
        src="/images/pizzas/primo-pizza.jpg"
        alt="Pizza"
        className="py-28"
        overlayClassName="bg-black/60"
        speed={0.3}
      >
        <div className="mx-auto max-w-7xl text-center">
          <ScrollReveal variant="fade-up" duration={0.9}>
            <h2 className="text-4xl font-bold text-white lg:text-6xl">
              Hungry? We&apos;re Open.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-white/80">
              Order online for pickup or delivery from any of our Nashville
              locations.
            </p>
            <a
              href={siteConfig.orderUrl}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-1"
            >
              Order Now
              <ArrowRight size={20} />
            </a>
          </ScrollReveal>
        </div>
      </ParallaxImage>
    </>
  );
}
