import Image from "next/image";
import SectionHeader from "./SectionHeader";

const galleryImages = [
  {
    src: "/images/gallery-uk-bike-scooter-riders.png",
    title: "UK bike and scooter riders",
    copy: "Everyday transport for local streets, commuting, errands, and short trips."
  },
  {
    src: "/images/gallery-repair-service-centre.png",
    title: "Repair and service centre",
    copy: "Bike repairs, scooter support, spare parts, accessories, and safety checks."
  },
  {
    src: "/images/gallery-rental-used-bikes.png",
    title: "Rental and used bikes",
    copy: "Bikes and scooters ready for hire, buying, selling, and practical daily use."
  }
];

export default function Gallery() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Bike and scooter services"
          title="Built for everyday cycling and scooter use around Salford."
          copy="The site now uses bike and scooter focused visuals instead of generic shop imagery, keeping the look relevant to repairs, rentals, sales, and used bikes."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {galleryImages.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-sm ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={900}
                height={620}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
