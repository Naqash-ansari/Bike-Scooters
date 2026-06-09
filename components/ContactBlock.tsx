import ButtonLink from "./ButtonLink";
import ScrollReveal from "./ScrollReveal";
import {
  phoneDisplay,
  phoneHref,
  shareText,
  shopAddress,
  siteUrl,
  whatsAppHref
} from "./site-data";

export default function ContactBlock() {
  const encodedShareText = encodeURIComponent(shareText);
  const encodedSiteUrl = encodeURIComponent(siteUrl);

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal>
          <p className="text-sm font-bold text-brand-red">Contact M7</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Call, WhatsApp, or request a quote.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Phone / WhatsApp:{" "}
            <a href={phoneHref} className="font-bold text-slate-950 hover:text-brand-red">
              {phoneDisplay}
            </a>
          </p>
          <p className="mt-3 text-lg text-slate-600">
            Address: <span className="font-bold text-slate-950">{shopAddress}</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={phoneHref}>Call Now</ButtonLink>
            <ButtonLink href={whatsAppHref} variant="dark">
              WhatsApp
            </ButtonLink>
          </div>
          <div className="interactive-card mt-8 rounded-md fine-border bg-slate-50 p-6">
            <p className="text-xl font-extrabold text-slate-950">Find us</p>
            <p className="mt-1 text-sm text-slate-600">{shopAddress}</p>
            <iframe
              title="M7 Bike & Scooters location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(shopAddress)}&output=embed`}
              className="mt-4 aspect-video w-full rounded-md border border-slate-200 bg-white"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="interactive-card mt-5 rounded-md fine-border bg-slate-50 p-6">
            <p className="text-xl font-extrabold text-slate-950">Share this shop</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Send M7 Bike & Scooters to someone who needs bike repairs, rentals, or parts.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <a
                href={`https://wa.me/?text=${encodedShareText}%20${encodedSiteUrl}`}
                className="rounded-md bg-[#25D366] px-4 py-3 text-center text-sm font-extrabold text-white"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedSiteUrl}`}
                className="rounded-md bg-[#1877F2] px-4 py-3 text-center text-sm font-extrabold text-white"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedSiteUrl}`}
                className="rounded-md bg-slate-950 px-4 py-3 text-center text-sm font-extrabold text-white"
                target="_blank"
                rel="noreferrer"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={120}>
        <form className="interactive-card rounded-md fine-border bg-slate-50 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Name</span>
              <input
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-brand-red"
                placeholder="Your name"
                type="text"
              />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Phone</span>
              <input
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-brand-red"
                placeholder="Your phone number"
                type="tel"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-bold text-slate-700">Service</span>
            <select className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-brand-red">
              <option>Bike repair</option>
              <option>Scooter repair</option>
              <option>Buy a bike</option>
              <option>Sell a used bike</option>
              <option>Bike rental</option>
              <option>Parts or accessories</option>
            </select>
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-bold text-slate-700">Message</span>
            <textarea
              className="mt-2 min-h-40 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-brand-red"
              placeholder="Tell us what you need..."
            />
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-brand-red px-5 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-slate-950"
          >
            Send Enquiry
          </button>
          <p className="mt-4 text-sm text-slate-500">
            This demo form is ready for connection to your preferred email or CRM service.
          </p>
        </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
