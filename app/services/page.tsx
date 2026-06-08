import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Services"
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Workshop and retail"
        title="Bike repairs, scooter repairs, parts, accessories, and sales."
        copy="Choose a quick fix, a full service, a rental, or a used bike check. Our service centre covers the essentials riders need most."
      />
      <section className="bg-[#f4f5f7] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <ServiceCards detailed />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
