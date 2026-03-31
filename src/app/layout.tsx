import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tillfivepizza.com"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Till Five Pizza | Nashville's Late-Night Slice",
    description:
      "Hand-tossed dough made fresh daily with locally sourced ingredients. Open till 5 AM.",
    type: "website",
    url: "https://tillfivepizza.com",
    siteName: "Till Five Pizza",
    images: [
      {
        url: "/images/pizzas/meat-lover-pizza.jpg",
        width: 1200,
        height: 800,
        alt: "Meat Lover's Pizza — Till Five Pizza Nashville",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Till Five Pizza | Nashville's Late-Night Slice",
    description:
      "Hand-tossed dough made fresh daily. Open till 5 AM at two Nashville locations.",
    images: ["/images/pizzas/meat-lover-pizza.jpg"],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: "Till Five Pizza — Murfreesboro Pike",
    url: "https://tillfivepizza.com",
    telephone: "+16156063333",
    priceRange: "$$",
    servesCuisine: ["Pizza", "Italian", "American"],
    hasMenu: "https://tillfivepizza.com/menu",
    image: "https://tillfivepizza.com/images/pizzas/meat-lover-pizza.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "825 Murfreesboro Pike",
      addressLocality: "Nashville",
      addressRegion: "TN",
      postalCode: "37217",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "05:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: "Till Five Pizza — Music Valley",
    url: "https://tillfivepizza.com",
    telephone: "+16157273333",
    priceRange: "$$",
    servesCuisine: ["Pizza", "Italian", "American"],
    hasMenu: "https://tillfivepizza.com/menu",
    image: "https://tillfivepizza.com/images/pizzas/meat-lover-pizza.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2450 Music Valley Dr",
      addressLocality: "Nashville",
      addressRegion: "TN",
      postalCode: "37214",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "15:00",
        closes: "05:00",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PGPE6FCERH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PGPE6FCERH');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
