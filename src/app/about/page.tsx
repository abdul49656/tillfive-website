"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Flame, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-data";
import { ScrollReveal, StaggerContainer } from "@/components/scroll-reveal";
import { ImageCarousel } from "@/components/image-carousel";

const bannerImages = [
  { src: "/images/pizzas/primo-pizza.jpg", alt: "Primo Pizza" },
  { src: "/images/pastas/meat-lasagna.jpg", alt: "Meat Lasagna" },
  { src: "/images/pizzas/supreme-pizza.jpg", alt: "Supreme Pizza" },
  { src: "/images/appetizers/sampler-platter.jpg", alt: "Sampler Platter" },
  { src: "/images/pizzas/bbq-chicken-pizza.jpg", alt: "BBQ Chicken Pizza" },
  { src: "/images/desserts/tiramisu.jpg", alt: "Tiramisu" },
  { src: "/images/burgers/classic-cheeseburger.jpg", alt: "Cheeseburger" },
  { src: "/images/pastas/fettucine-alfredo.jpg", alt: "Fettuccine Alfredo" },
  { src: "/images/pizzas/margherita-pizza.jpg", alt: "Margherita" },
  { src: "/images/subs/meatball-sub.jpg", alt: "Meatball Sub" },
];

const values = [
  {
    icon: Flame,
    title: "Fresh Daily",
    description:
      "Our dough is made from scratch every single day. No frozen dough, no shortcuts — just real, hand-tossed pizza the way it should be.",
  },
  {
    icon: MapPin,
    title: "Locally Sourced",
    description:
      "We use top-tier, locally sourced ingredients because we believe the best food comes from the best suppliers right here in Nashville.",
  },
  {
    icon: Clock,
    title: "Open Till 5 AM",
    description:
      "Whether it's a late-night craving after a show on Broadway or an early morning appetite, we're here when you need us.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "With two Nashville locations, we're proud to be part of the communities we serve — from Antioch to Music Valley.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with carousel background */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageCarousel
            images={bannerImages}
            speed={35}
            imageClassName="h-full w-[400px] shrink-0"
            className="h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-[1]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold text-white lg:text-5xl"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal variant="fade-up">
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                A Nashville Staple
              </h2>
            </ScrollReveal>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground-muted">
              <ScrollReveal variant="fade-up" delay={0.1}>
                <p>
                  Till Five Pizza was born from a simple idea: Nashville deserves
                  great pizza that doesn&apos;t shut down when the night is just
                  getting started. Named for our hours — we&apos;re open until 5
                  AM, every single day — we&apos;re the spot for anyone who
                  believes the best slice is the one you can get whenever you want
                  it.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={0.2}>
                <p>
                  Every pie starts with dough made fresh daily in our kitchens.
                  We hand-toss every pizza to order, using top-tier, locally
                  sourced ingredients. From our classic pepperoni to our loaded
                  Meat Lover&apos;s, from creamy fettuccine alfredo to crispy
                  chicken wings — our diverse menu means there&apos;s something
                  for everyone.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={0.3}>
                <p>
                  What started as a single location on Murfreesboro Pike has grown
                  into two Nashville spots: Antioch and Music Valley near the
                  Grand Ole Opry. Each location carries the same commitment to
                  quality, the same welcoming atmosphere, and the same dedication
                  to feeding Nashville — from lunch through the early morning hours.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={0.4}>
                <p>
                  Whether you&apos;re a local grabbing your regular order, a
                  tourist looking for the best late-night bite in Nashville, or
                  planning a catering spread for your next event — we&apos;re
                  here for you. That&apos;s the Till Five promise.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand">
                What We Stand For
              </p>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Our Values
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.1}
            variant="fade-up"
          >
            {values.map((value) => (
              <div
                key={value.title}
                className="group text-center p-6 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-light transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                  <value.icon
                    size={24}
                    className="text-brand transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal variant="clip-left">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/pizzas/classic-pizza.jpg"
                  alt="Catering pizza"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal variant="fade-right" delay={0.1}>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand">
                  Events & Catering
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={0.2}>
                <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                  Let Us Cater Your Next Event
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={0.3}>
                <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
                  From office lunches to birthday parties, game day spreads to
                  wedding rehearsals — our catering menu has you covered. Half and
                  full trays available for salads, pastas, subs, and of course,
                  pizza.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/menu#catering"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5"
                  >
                    View Catering Menu
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={siteConfig.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand hover:text-brand hover:-translate-y-0.5"
                  >
                    Order Catering
                    <ArrowRight size={16} />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
