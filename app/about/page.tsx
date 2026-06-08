import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const values = [
  "Clear quotes before work begins",
  "Practical repairs for daily riders",
  "New and used bikes checked by the team",
  "Parts, accessories, and service under one roof"
];

export const metadata = {
  title: "About"
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About M7"
        title="A hands-on bike and scooter shop built around local riders."
        copy="M7 Bike & Scooters helps commuters, families, students, and weekend riders buy, sell, rent, repair, and maintain bikes with confidence."
      />
      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Our workshop"
              title="Sale - Repair - Accessories"
              copy="We combine a retail shop, repair counter, spare parts supply, and service centre so you can sort the full job in one visit. Bring in a bike or scooter for inspection, ask about a new model, or sell a used bike you no longer ride."
            />
            <p className="mt-6 max-w-3xl leading-8 text-slate-600">
              Every rider has a different budget and use case. Our team keeps recommendations straightforward, from safe second-hand options to commuter-ready upgrades and reliable repairs for everyday travel.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-extrabold text-slate-950">What we stand for</h2>
            <ul className="mt-6 space-y-4">
              {values.map((value) => (
                <li key={value} className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-2 w-2 flex-none bg-brand-red" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
