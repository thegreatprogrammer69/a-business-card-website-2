import { SectionTitle } from "@/components/section-title";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Услуги"
          title="Что могу сделать для вашей компании"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="animate-fade-in-up rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <h3 className="text-lg font-semibold text-slate-100">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
