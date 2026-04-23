import { SectionTitle } from "@/components/section-title";
import { skills } from "@/lib/site-data";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Навыки"
          title="Техническая экспертиза"
          description="Комбинирую глубокую 1С-разработку с системным подходом к интеграциям и производительности."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="animate-fade-in-up rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
