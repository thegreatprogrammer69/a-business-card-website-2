import { SectionTitle } from "@/components/section-title";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Обо мне"
          title="Разрабатываю на 1С с фокусом на бизнес-результат"
          description="Я подключаюсь как к точечным задачам, так и к долгосрочному сопровождению: от аудита и проектирования до внедрения и поддержки."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Опыт в проектах от малого бизнеса до распределенных компаний с несколькими юрлицами.",
            "Глубоко понимаю типовые процессы учета, продаж, закупок, зарплаты и производственного планирования.",
            "Выстраиваю безопасные доработки: обновляемость, тестирование, читаемый код и документация для команды.",
          ].map((text) => (
            <article
              key={text}
              className="animate-fade-in-up rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-slate-300"
            >
              {text}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
