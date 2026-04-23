import { profile } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-18 pt-18 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="animate-fade-in-up">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            {profile.experience}
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-slate-50 md:text-6xl">
            {profile.name}
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-3xl text-transparent md:text-5xl">
              {profile.role}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{profile.tagline}</p>
          <p className="mt-3 text-slate-400">{profile.specialization}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Связаться
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-cyan-200"
            >
              Смотреть проекты
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-500/10 lg:p-8">
          <p className="text-sm text-slate-400">Ключевые конфигурации</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "1С:Бухгалтерия",
              "1С:УТ",
              "1С:ЗУП",
              "1С:ERP",
              "1С:КА",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">
            Интеграции с API, CRM, сайтами, маркетплейсами и внутренними сервисами компании.
            Работаю аккуратно с архитектурой, код-ревью и документацией.
          </p>
        </div>
      </div>
    </section>
  );
}
