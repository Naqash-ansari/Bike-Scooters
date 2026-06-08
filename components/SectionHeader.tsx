type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export default function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-4xl red-line">
      <p className="text-sm font-bold text-brand-red">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{copy}</p> : null}
    </div>
  );
}
