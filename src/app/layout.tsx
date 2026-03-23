import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Till Five Pizza | Nashville's Late-Night Slice",
  description:
    "Hand-tossed dough made fresh daily with top-tier locally sourced ingredients. Two Nashville locations open 10 AM to 5 AM.",
  keywords: [
    "pizza",
    "Nashville",
    "late night",
    "delivery",
    "Italian",
    "Till Five Pizza",
  ],
  openGraph: {
    title: "Till Five Pizza | Nashville's Late-Night Slice",
    description:
      "Hand-tossed dough made fresh daily with locally sourced ingredients. Open till 5 AM.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-body antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
