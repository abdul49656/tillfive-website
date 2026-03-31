import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "Our Story | Till Five Pizza — Nashville's Late-Night Pizzeria",
  description:
    "Learn how Till Five Pizza became Nashville's go-to late-night spot. Hand-tossed dough made daily, locally sourced ingredients, two Nashville locations open till 5 AM.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Our Story | Till Five Pizza — Nashville's Late-Night Pizzeria",
    description:
      "How Till Five Pizza became Nashville's go-to late-night spot. Fresh dough daily, locally sourced ingredients, open till 5 AM.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
