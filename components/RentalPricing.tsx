import ButtonLink from "./ButtonLink";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const prices = [
  { name: "Quick Ride", price: "GBP 8", detail: "Up to 2 hours" },
  { name: "Day Hire", price: "GBP 18", detail: "Same-day return" },
  { name: "Weekend", price: "GBP 40", detail: "Two-day booking" }
];

export default function RentalPricing() {
  return (
    <section className="bg-[#f4f5f7] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Rental pricing"
          title="Simple hire options for short trips and longer rides."
          copy="Dummy pricing shown for website setup. The shop can replace these rates with live rental prices, deposit rules, and ID requirements."
        />
        <div className="mb-8 overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
          <Image
            src="/images/rental-pricing-hire-options.png"
            alt="Rental bikes and scooters ready for hire"
            width={1200}
            height={640}
            className="aspect-[18/7] w-full object-cover"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {prices.map((price) => (
            <article key={price.name} className="rounded-md fine-border bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-extrabold text-slate-950">{price.name}</h3>
              <p className="mt-5 text-4xl font-extrabold text-brand-red">{price.price}</p>
              <p className="mt-2 font-semibold text-slate-600">{price.detail}</p>
              <div className="mt-7">
                <ButtonLink href="/contact" variant="dark">
                  Book Rental
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
