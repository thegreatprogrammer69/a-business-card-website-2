type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 animate-fade-in-up">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-pretty text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
