import { cn } from "@/lib/utils";

const SIZES = [
  { name: "Small",    inches: '10"', base: "$10.00", topping: "$0.99" },
  { name: "Medium",   inches: '12"', base: "$12.00", topping: "$1.49" },
  { name: "Large",    inches: '14"', base: "$14.00", topping: "$1.99", popular: true },
  { name: "X-Large",  inches: '16"', base: "$16.00", topping: "$2.49" },
  { name: "XX-Large", inches: '18"', base: "$20.00", topping: "$2.99" },
];

const SAUCES = [
  "Tomato Sauce", "Olive Oil", "Alfredo Sauce", "Ranch", "BBQ", "Pesto",
];

const CRUSTS = [
  { name: "Thin & Crispy" },
  { name: "New York Style" },
  { name: "Hand Tossed" },
  { name: "Gluten-Free", extra: "+$3.00" },
];

const MEAT_TOPPINGS = [
  { name: "Pepperoni" },
  { name: "Italian Sausage" },
  { name: "Bacon Sausage" },
  { name: "Beef" },
  { name: "Ham" },
  { name: "Salami" },
  { name: "Chicken",    premium: true },
  { name: "Meatballs",  premium: true },
  { name: "Anchovies",  premium: true },
  { name: "Philly",     premium: true },
  { name: "Gyro Meat",  premium: true },
];

const VEGGIE_TOPPINGS = [
  "Fresh Garlic", "Mushroom", "Tomato", "Red Onion", "Green Pepper",
  "Spinach", "Broccoli", "Zucchini", "Eggplant", "Black Olive",
  "Green Olive", "Banana Pepper", "Jalapeños", "Pineapple",
  "Sun-Dried Tomato", "Artichoke", "Basil", "Oregano",
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-foreground-subtle">
      {children}
    </p>
  );
}

export function PizzaBuilderInfo() {
  return (
    <div className="space-y-8">

      {/* ── Sizes ── */}
      <div>
        <Label>Choose Your Size</Label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SIZES.map((size) => (
            <div
              key={size.name}
              className={cn(
                "relative rounded-2xl border p-4 text-center transition-all",
                size.popular
                  ? "border-brand bg-brand shadow-sm shadow-brand/20"
                  : "border-border bg-white"
              )}
            >
              {size.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <p className={cn(
                "text-xs font-bold uppercase tracking-wide",
                size.popular ? "text-white/70" : "text-foreground-subtle"
              )}>
                {size.name}
              </p>
              <p className={cn(
                "mt-1 text-3xl font-black leading-none",
                size.popular ? "text-white" : "text-brand"
              )}>
                {size.inches}
              </p>
              <p className={cn(
                "mt-2 text-xl font-bold",
                size.popular ? "text-white" : "text-foreground"
              )}>
                {size.base}
              </p>
              <p className={cn(
                "mt-1 text-xs",
                size.popular ? "text-white/80" : "text-foreground-muted"
              )}>
                {size.topping} / topping
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Crust + Sauce ── */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label>Crust Options</Label>
          <div className="flex flex-wrap gap-2">
            {CRUSTS.map((crust) => (
              <span
                key={crust.name}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm",
                  crust.extra
                    ? "border border-dashed border-border-strong text-foreground-muted"
                    : "bg-background-alt text-foreground font-medium"
                )}
              >
                {crust.name}
                {crust.extra && (
                  <span className="font-semibold text-brand">{crust.extra}</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Label>Sauce Options</Label>
          <div className="flex flex-wrap gap-2">
            {SAUCES.map((sauce) => (
              <span
                key={sauce}
                className="rounded-full bg-background-alt px-3.5 py-1.5 text-sm font-medium text-foreground"
              >
                {sauce}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Toppings ── */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label>Meat Toppings</Label>
          <div className="flex flex-wrap gap-2">
            {MEAT_TOPPINGS.map((t) => (
              <span
                key={t.name}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm",
                  t.premium
                    ? "bg-brand-light text-brand font-semibold"
                    : "bg-background-alt text-foreground font-medium"
                )}
              >
                {t.name}
                {t.premium && (
                  <span className="text-[10px] font-bold opacity-70">+$0.95</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Label>Veggie Toppings</Label>
          <div className="flex flex-wrap gap-2">
            {VEGGIE_TOPPINGS.map((v) => (
              <span
                key={v}
                className="rounded-full bg-background-alt px-3.5 py-1.5 text-sm font-medium text-foreground"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Fine print ── */}
      <p className="rounded-xl bg-background-alt px-4 py-3 text-xs leading-relaxed text-foreground-subtle">
        <span className="font-semibold text-brand">Premium toppings</span> — chicken, meatballs,
        anchovies, Philly, and gyro meat are an additional{" "}
        <span className="font-semibold">$0.95</span> each.{" "}
        <span className="font-semibold text-brand">Gluten-free crust</span> is an additional{" "}
        <span className="font-semibold">$3.00</span>. Any pizza can also be ordered as a calzone.
      </p>

    </div>
  );
}
