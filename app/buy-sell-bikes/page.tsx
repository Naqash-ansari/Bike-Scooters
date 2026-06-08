import PageHero from "@/components/PageHero";
import BuySellPanel from "@/components/BuySellPanel";

export const metadata = {
  title: "Buy & Sell Bikes"
};

export default function BuySellBikes() {
  return (
    <>
      <PageHero
        eyebrow="Used and new bikes"
        title="Buy a checked bike or sell your used bike with less hassle."
        copy="M7 Bike & Scooters buys selected used bikes, sells new and pre-owned models, and can help prepare your bike for resale."
      />
      <BuySellPanel />
    </>
  );
}
