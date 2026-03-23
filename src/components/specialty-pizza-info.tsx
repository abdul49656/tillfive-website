import Image from "next/image";
import { cn } from "@/lib/utils";

// TODO: Confirm specialty pizza prices per size with client
const SPECIALTY_SIZES = [
  { name: "Small",    inches: '10"', price: "$12.99" },
  { name: "Medium",   inches: '12"', price: "$14.99" },
  { name: "Large",    inches: '14"', price: "$16.99", popular: true },
  { name: "X-Large",  inches: '16"', price: "$18.99" },
  { name: "XX-Large", inches: '18"', price: "$22.99" },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 border-l-2 border-brand pl-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground">
      {children}
    </p>
  );
}

export function SpecialtyPizzaInfo() {
  return (
    <div className="space-y-8">

      {/* ── Pricing by size ── */}
      <div>
        <Label>Specialty Pizza Pricing</Label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SPECIALTY_SIZES.map((size, index) => (
            <div
              key={size.name}
              className={cn(
                "rounded-2xl border border-border bg-white p-4 text-center transition-all",
                // Center the orphaned last item on mobile 2-col layout
                index === SPECIALTY_SIZES.length - 1 && SPECIALTY_SIZES.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1 mx-auto sm:mx-0 w-[calc(50%-6px)] sm:w-auto"
                  : ""
              )}
            >
              <p className="text-xs font-bold uppercase tracking-wide text-foreground-subtle">
                {size.name}
              </p>
              <p className="mt-1 text-3xl font-black leading-none text-brand">
                {size.inches}
              </p>
              <p className="mt-2 text-xl font-bold text-foreground">
                {size.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Calzone highlight ── */}
      <div className="flex items-center gap-4 rounded-2xl border border-border bg-background-alt p-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
          <Image
            src="/images/pizzas/calzone.jpg"
            alt="Calzone"
            fill
            className="object-cover"
            sizes="80px"
            loading="eager"
          />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand">
            Also Available
          </p>
          <h3 className="mt-0.5 text-base font-bold text-foreground">Calzone</h3>
          <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
            Any specialty pizza can be made as a calzone — same size, same price.
          </p>
        </div>
      </div>

    </div>
  );
}
