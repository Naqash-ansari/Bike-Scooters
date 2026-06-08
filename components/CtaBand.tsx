import ButtonLink from "./ButtonLink";
import { phoneHref, whatsAppHref } from "./site-data";

export default function CtaBand() {
  return (
    <section className="bg-[#f4f5f7] px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-md bg-slate-950 p-8 text-white md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Need a repair quote today?
          </p>
          <p className="mt-2 font-semibold">
            Call or WhatsApp M7 Bike & Scooters and tell us what needs fixing.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={phoneHref} variant="white">
            Call Now
          </ButtonLink>
          <ButtonLink href={whatsAppHref} variant="dark">
            WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
