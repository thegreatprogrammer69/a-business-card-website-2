import { SectionTitle } from "@/components/section-title";
import { projects } from "@/lib/site-data";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Портфолио"
          title="Реальные кейсы внедрений и доработок"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="animate-fade-in-up rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              <p className="mt-3 text-sm text-slate-200">{project.result}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
