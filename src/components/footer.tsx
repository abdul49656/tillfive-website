"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { siteConfig, locations, navLinks } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/90">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <ScrollReveal variant="fade-up">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="Till Five Pizza"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-white">
                  Till Five Pizza
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                {siteConfig.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-all duration-300 hover:text-white hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-all duration-300 hover:text-white hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/sms-signup"
                    className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                  >
                    SMS Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Locations */}
          <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-2">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                Locations
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {locations.map((loc) => (
                  <div key={loc.id} className="space-y-2">
                    <p className="text-sm font-semibold text-white">
                      {loc.name}
                    </p>
                    <div className="flex items-start gap-2 text-sm text-white/60">
                      <MapPin size={14} className="mt-0.5 shrink-0" />
                      <span>
                        {loc.address}
                        <br />
                        {loc.city}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Phone size={14} className="shrink-0" />
                      <a
                        href={`tel:${loc.phoneRaw}`}
                        className="transition-colors hover:text-white"
                      >
                        {loc.phone}
                      </a>
                    </div>
                    <p className="text-xs text-white/40">{loc.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Till Five Pizza. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
