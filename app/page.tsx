import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCards from "@/components/ServiceCards";
import Gallery from "@/components/Gallery";
import RentalPricing from "@/components/RentalPricing";
import BuySellPanel from "@/components/BuySellPanel";
import ContactBlock from "@/components/ContactBlock";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-[#f4f5f7] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Local service centre"
            title="Fast repairs, sharp bikes, honest advice."
            copy="From punctures and brake tuning to scooter diagnostics and full bike builds, M7 Bike & Scooters keeps riders moving with practical service and clear pricing."
          />
          <ServiceCards />
        </div>
      </section>
      <Gallery />
      <BuySellPanel />
      <RentalPricing />
      <CtaBand />
      <ContactBlock />
    </>
  );
}
