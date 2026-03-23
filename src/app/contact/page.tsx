"use client";

import { MapPin, Phone, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { locations, siteConfig } from "@/lib/site-data";
import { ScrollReveal, StaggerContainer } from "@/components/scroll-reveal";
import { ImageCarousel } from "@/components/image-carousel";
import { ParallaxImage } from "@/components/parallax-image";

const bannerImages = [
  { src: "/images/pizzas/margherita-pizza.jpg", alt: "Margherita Pizza" },
  { src: "/images/appetizers/sampler-platter.jpg", alt: "Sampler Platter" },
  { src: "/images/pizzas/bbq-chicken-pizza.jpg", alt: "BBQ Chicken Pizza" },
  { src: "/images/pastas/meat-lasagna.jpg", alt: "Meat Lasagna" },
  { src: "/images/pizzas/hawaiian-pizza.jpg", alt: "Hawaiian Pizza" },
  { src: "/images/burgers/gyro-pita.jpg", alt: "Gyro Pita" },
  { src: "/images/desserts/cannoli.jpg", alt: "Cannoli" },
  { src: "/images/pizzas/classic-pizza.jpg", alt: "Classic Pizza" },
];

export default function ContactPage() {
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
            Find Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold text-white lg:text-5xl"
          >
            Locations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 max-w-lg text-white/60"
          >
            Two Nashville locations, both open late. Stop by, call ahead, or
            order online.
          </motion.p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <StaggerContainer
            className="grid gap-8 sm:grid-cols-2"
            staggerDelay={0.15}
            variant="fade-up"
          >
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="group rounded-2xl border border-border bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-brand/20"
              >
                <h2 className="text-3xl font-bold text-foreground group-hover:text-brand transition-colors duration-300">
                  {loc.name}
                </h2>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light transition-all duration-300 group-hover:bg-brand/10">
                      <MapPin size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Address
                      </p>
                      <p className="mt-0.5 text-sm text-foreground-muted">
                        {loc.address}
                        <br />
                        {loc.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light transition-all duration-300 group-hover:bg-brand/10">
                      <Phone size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Phone
                      </p>
                      <a
                        href={`tel:${loc.phoneRaw}`}
                        className="mt-0.5 text-sm text-foreground-muted transition-colors hover:text-brand"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light transition-all duration-300 group-hover:bg-brand/10">
                      <Clock size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Hours
                      </p>
                      <p className="mt-0.5 text-sm text-foreground-muted">
                        {loc.hours}
                      </p>
                      <p className="text-xs text-foreground-subtle">
                        Open 7 days a week
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5"
                  >
                    Get Directions
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href={`tel:${loc.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand hover:text-brand hover:-translate-y-0.5"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Parallax divider */}
      <ParallaxImage
        src="/images/pizzas/margherita-pizza.jpg"
        alt="Margherita pizza"
        className="h-[30vh]"
        overlayClassName="bg-brand/70"
        speed={0.3}
      >
        <ScrollReveal variant="clip-center">
          <p className="text-2xl font-bold text-white tracking-wider uppercase sm:text-3xl">
            Nashville&apos;s Late-Night Slice
          </p>
        </ScrollReveal>
      </ParallaxImage>

      {/* Get in Touch — dark section */}
      <section className="bg-foreground py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal variant="fade-up">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-white/60">
                Questions about catering, large orders, or anything else? Give us
                a call at any of our locations or reach out on social media.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-brand hover:text-brand hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Instagram size={18} />
                  @tillfivepizza
                </a>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-brand hover:text-brand hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Facebook size={18} />
                  Facebook
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="mt-12">
                <a
                  href={siteConfig.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/25 hover:-translate-y-1"
                >
                  Order Online
                  <ArrowRight size={20} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
