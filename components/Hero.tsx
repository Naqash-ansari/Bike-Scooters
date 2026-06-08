import ButtonLink from "./ButtonLink";
import { phoneHref, whatsAppHref } from "./site-data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#f4f5f7] px-4">
      <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div>
          <p className="mb-5 inline-flex rounded-sm bg-red-50 px-4 py-2 text-sm font-bold text-brand-red ring-1 ring-red-100">
            Sale - Repair - Accessories
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight text-slate-950 md:text-7xl">
            M7 Bike <span className="text-brand-red">&</span> Scooters
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Bicycle and scooter repairs, new bike sales, used bike buying and selling,
            rentals, spare parts, and accessories for local riders.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={phoneHref}>Call Now</ButtonLink>
            <ButtonLink href={whatsAppHref} variant="white">
              WhatsApp
            </ButtonLink>
            <ButtonLink href="/repairs" variant="dark">
              Get Repair Quote
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-md bg-slate-200 shadow-2xl">
            <Image
              src="/images/uk-bikes-scooters-hero.png"
              alt="Bicycles and electric scooters in a UK street setting"
              width={1000}
              height={720}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-sm font-semibold text-white">All Bikes Spare Parts & Service Center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
