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

export default function ContactContent() {
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

      {/* Location Cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerContainer
            className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto"
            staggerDelay={0.15}
            variant="fade-up"
          >
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="group rounded-2xl border border-border bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-brand/20"
              >
                <h2 className="text-2xl font-bold text-foreground group-hover:text-brand transition-colors duration-300">
                  {loc.name}
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                    <p className="text-foreground-muted">
                      {loc.address}, {loc.city}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="shrink-0 text-brand" />
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="shrink-0 text-brand" />
                    <p className="text-foreground-muted">Open daily {loc.hours}</p>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-6 overflow-hidden rounded-xl border border-border">
                  <iframe
                    title={`Map to Till Five Pizza ${loc.name}`}
                    src={loc.mapEmbedUrl}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand transition-all duration-300 hover:gap-3"
                >
                  Get Directions
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Social / Order CTA */}
      <ParallaxImage
        src="/images/pizzas/primo-pizza.jpg"
        alt="Pizza"
        className="py-24"
        overlayClassName="bg-black/60"
        speed={0.3}
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Ready to Order?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-white/80">
              Order online for pickup or delivery from either Nashville location.
            </p>
            <a
              href={siteConfig.orderUrl}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-1"
            >
              Order Now
              <ArrowRight size={20} />
            </a>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2} className="mt-10">
            <p className="text-sm text-white/50 mb-4">Follow us</p>
            <div className="flex justify-center gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <Facebook size={16} />
                Facebook
              </a>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxImage>
    </>
  );
}
