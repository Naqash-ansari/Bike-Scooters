import ButtonLink from "./ButtonLink";
import { phoneHref, whatsAppHref } from "./site-data";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export default function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="bg-[#f4f5f7] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-bold text-brand-red">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{copy}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={phoneHref}>Call Now</ButtonLink>
          <ButtonLink href={whatsAppHref} variant="dark">
            WhatsApp
          </ButtonLink>
          <ButtonLink href="/contact" variant="dark">
            Send Message
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
