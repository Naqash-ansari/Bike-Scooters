import Image from "next/image";
import Link from "next/link";
import { services } from "./site-data";

type ServiceCardsProps = {
  detailed?: boolean;
};

const serviceAssets = [
  {
    image: "/images/bike-repair-workshop.png",
    tag: "Workshop",
    points: ["Safety check", "Brake & gear setup"]
  },
  {
    image: "/images/bike-repair-workshop.png",
    tag: "Scooters",
    points: ["Tyres & brakes", "Service support"]
  },
  {
    image: "/images/uk-bikes-scooters-hero.png",
    tag: "Sales",
    points: ["New models", "Local advice"]
  },
  {
    image: "/images/uk-bikes-scooters-hero.png",
    tag: "Used Bikes",
    points: ["Fair offers", "Quick inspection"]
  },
  {
    image: "/images/rental-bikes-scooters.png",
    tag: "Pre-owned",
    points: ["Checked bikes", "Ready to ride"]
  },
  {
    image: "/images/rental-bikes-scooters.png",
    tag: "Rental",
    points: ["Short hire", "Daily options"]
  },
  {
    image: "/images/bike-repair-workshop.png",
    tag: "Parts",
    points: ["Tubes & tyres", "Brake pads"]
  },
  {
    image: "/images/rental-bikes-scooters.png",
    tag: "Accessories",
    points: ["Locks & lights", "Helmets & pumps"]
  }
];

export default function ServiceCards({ detailed = false }: ServiceCardsProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => {
        const asset = serviceAssets[index];

        return (
          <article
            key={service.title}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <Image
                src={asset.image}
                alt={service.title}
                width={720}
                height={520}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-slate-950 shadow-sm">
                {asset.tag}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <h3 className="text-2xl font-extrabold leading-tight text-white">
                  {service.title}
                </h3>
                <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-extrabold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="p-5">
              <p className="text-sm leading-6 text-slate-600">{service.copy}</p>

              <div className="mt-5 grid gap-2">
                {asset.points.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
                {detailed ? (
                  <span className="text-xs font-bold text-slate-500">Quote available</span>
                ) : (
                  <span className="text-xs font-bold text-slate-500">M7 Service</span>
                )}
                <Link
                  href="/contact"
                  className="rounded-md bg-slate-950 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-brand-red"
                >
                  Get quote
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
