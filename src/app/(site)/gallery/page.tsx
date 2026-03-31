import type { Metadata } from "next";
import GalleryContent from "./gallery-content";

export const metadata: Metadata = {
  title: "Food Gallery | Till Five Pizza Nashville",
  description:
    "See our pizzas, pastas, burgers, salads, and more. Till Five Pizza serves Nashville fresh, hand-tossed food daily until 5 AM at two locations.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Food Gallery | Till Five Pizza Nashville",
    description:
      "Pizzas, pastas, burgers, salads, and more — made fresh daily. Till Five Pizza, Nashville's late-night slice.",
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
