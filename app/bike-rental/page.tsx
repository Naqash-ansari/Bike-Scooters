import PageHero from "@/components/PageHero";
import RentalPricing from "@/components/RentalPricing";

export const metadata = {
  title: "Bike Rental"
};

export default function BikeRental() {
  return (
    <>
      <PageHero
        eyebrow="Bike rental"
        title="Flexible bike hire for errands, commuting, and weekend rides."
        copy="Rent a bike for a short trip, a full day, or a longer booking. Dummy pricing is shown for layout and can be updated with live shop rates."
      />
      <RentalPricing />
    </>
  );
}
