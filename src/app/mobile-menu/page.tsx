import type { Metadata } from "next";
import { MobileMenuContent } from "./mobile-menu-content";

export const metadata: Metadata = {
  title: "Menu | Till Five Pizza",
  description:
    "Full menu for Till Five Pizza. Pizza, pasta, subs, wings, burgers, salads, and more. Open 10 AM to 5 AM in Nashville, TN.",
};

export default function MobileMenuPage() {
  return <MobileMenuContent />;
}
