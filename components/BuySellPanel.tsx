import SectionHeader from "./SectionHeader";
import ButtonLink from "./ButtonLink";
import Image from "next/image";

const steps = [
  "Bring your bike or send photos by WhatsApp.",
  "We inspect condition, size, parts, and resale value.",
  "Choose a cash offer, trade-in option, or repair before sale."
];

export default function BuySellPanel() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            eyebrow="Buy & sell bikes"
            title="New bikes, used bikes, and fair used-bike offers."
            copy="M7 Bike & Scooters helps customers find practical bikes and gives sellers a clear route to move on from bikes they no longer need."
          />
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Sell Your Bike</ButtonLink>
            <ButtonLink href="/services" variant="dark">
              View Services
            </ButtonLink>
          </div>
        </div>
        <div>
          <div className="mb-4 overflow-hidden rounded-md border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/buy-sell-bike-inspection.png"
              alt="Bikes and scooters suitable for buying and selling"
              width={900}
              height={520}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <div className="grid gap-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-md fine-border bg-slate-50 p-6">
              <span className="text-sm font-extrabold text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-semibold text-slate-800">{step}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
