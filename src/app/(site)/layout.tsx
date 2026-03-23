import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
