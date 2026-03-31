import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Locations & Contact | Till Five Pizza Nashville",
  description:
    "Find Till Five Pizza in Nashville — two locations open daily from 10 AM to 5 AM. Get directions, call us, or order online for pickup or delivery.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Locations & Contact | Till Five Pizza Nashville",
    description:
      "Two Nashville locations open daily until 5 AM. Get directions, call us, or order online.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
