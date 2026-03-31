import type { Metadata } from "next";
import MenuContent from "./menu-content";

export const metadata: Metadata = {
  title: "Nashville Pizza Menu — Open Daily Till 5 AM | Till Five Pizza",
  description:
    "Explore our full menu — hand-tossed pizzas, pastas, calzones, wings, burgers, salads, subs, and desserts. Order online for pickup or delivery in Nashville.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Nashville Pizza Menu — Open Daily Till 5 AM | Till Five Pizza",
    description:
      "Hand-tossed pizzas, pastas, calzones, wings, burgers, salads, subs, and desserts. Order online for pickup or delivery.",
  },
};

export default function MenuPage() {
  return <MenuContent />;
}
