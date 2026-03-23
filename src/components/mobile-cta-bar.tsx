"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-surface/95 backdrop-blur-md px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={siteConfig.orderUrl}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        <ShoppingBag size={18} />
        Order Now
      </a>
    </div>
  );
}
