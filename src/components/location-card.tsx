import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

type LocationCardProps = {
  name: string;
  address: string;
  city: string;
  phone: string;
  phoneRaw: string;
  hours: string;
  mapsUrl: string;
};

export function LocationCard({
  name,
  address,
  city,
  phone,
  phoneRaw,
  hours,
  mapsUrl,
}: LocationCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg">
      <h3 className="font-display text-2xl text-foreground">{name}</h3>

      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
          <div className="text-sm text-foreground-muted">
            <p>{address}</p>
            <p>{city}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} className="shrink-0 text-brand" />
          <a
            href={`tel:${phoneRaw}`}
            className="text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Clock size={18} className="shrink-0 text-brand" />
          <p className="text-sm text-foreground-muted">{hours}</p>
        </div>
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
      >
        Get Directions
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
