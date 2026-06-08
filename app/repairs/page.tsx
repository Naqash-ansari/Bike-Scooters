import PageHero from "@/components/PageHero";
import ContactBlock from "@/components/ContactBlock";

const repairItems = [
  "Puncture repair and tube replacement",
  "Brake pads, cables, and hydraulic checks",
  "Gear indexing and drivetrain adjustment",
  "Wheel truing and spoke replacement",
  "Scooter brake, tyre, and safety checks",
  "Full service packages and safety inspections"
];

export const metadata = {
  title: "Repairs"
};

export default function Repairs() {
  return (
    <>
      <PageHero
        eyebrow="Repairs"
        title="Get your bike or scooter back on the road quickly."
        copy="Tell us what is wrong, bring it into the shop, or request a repair quote by phone or WhatsApp."
      />
      <section className="bg-[#f4f5f7] px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold text-brand-red">
              Common jobs
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Workshop services for everyday riders.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {repairItems.map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <span className="font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
