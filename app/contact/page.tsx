import PageHero from "@/components/PageHero";
import ContactBlock from "@/components/ContactBlock";

export const metadata = {
  title: "Contact"
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call, WhatsApp, or send a message to M7 Bike & Scooters."
        copy="Ask about repairs, bike sales, used bike valuations, rentals, spare parts, or accessories."
      />
      <ContactBlock />
    </>
  );
}
