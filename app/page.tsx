import Link from "next/link";

import { SectionTitle } from "@/components/section-title";

const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#contacts", label: "Контакты" },
];

const skills = [
  "1С:Предприятие 8",
  "Управляемые формы",
  "Запросы, СКД и оптимизация",
  "HTTP-сервисы и REST API",
  "Обмены: XML / JSON / CommerceML",
  "SQL (PostgreSQL, MS SQL)",
  "Типовые и нетиповые конфигурации",
  "CI/CD для поставки обновлений",
];

const services = [
  {
    title: "Доработка типовых конфигураций",
    description:
      "Аккуратные доработки с сохранением возможности обновления и понятной документацией.",
  },
  {
    title: "Разработка с нуля",
    description:
      "Проектирование подсистем, справочников, документов и бизнес-процессов под задачи компании.",
  },
  {
    title: "Интеграции с CRM и сайтами",
    description:
      "Двусторонний обмен с Bitrix24, amoCRM, интернет-магазинами, маркетплейсами и ERP-системами.",
  },
  {
    title: "Оптимизация производительности",
    description:
      "Ускорение медленных отчетов и обработок, профилирование запросов и устранение узких мест.",
  },
  {
    title: "Поддержка и сопровождение",
    description:
      "Регулярное обслуживание, мониторинг обменов, оперативная реакция на инциденты и доработки.",
  },
  {
    title: "Исправление ошибок и консультации",
    description:
      "Разбор сложных кейсов, аудит базы, рекомендации по архитектуре и развитию 1С-ландшафта.",
  },
];

const projects = [
  {
    name: "Автоматизация финансового контура в 1С:ERP",
    summary:
      "Стабилизировал контур планирования и управленческой отчетности для производства на 400+ сотрудников.",
    done: "Внедрил подсистему бюджетирования, настроил маршруты согласования и ускорил ключевые отчеты на 58%.",
    stack: "1С:ERP, СКД, MS SQL, EDT, Git",
  },
  {
    name: "Интеграция 1С:УТ с интернет-магазином",
    summary:
      "Построил надежный двусторонний обмен заказами, остатками и ценами без ручных операций.",
    done: "Реализовал HTTP API-интеграцию, очередь повторных отправок и журнал ошибок для поддержки.",
    stack: "1С:УТ 11, REST API, JSON, PostgreSQL",
  },
  {
    name: "Кадровый контур и зарплата в 1С:ЗУП",
    summary:
      "Подготовил систему к масштабированию HR-процессов в сети филиалов.",
    done: "Разработал пакет кадровых обработок, автоматизировал проверку начислений и контроль отклонений.",
    stack: "1С:ЗУП 3.1, XLSX, регламентные задания",
  },
  {
    name: "Сервисный модуль обмена с внешними API",
    summary:
      "Создал универсальный механизм интеграций для CRM, логистики и платежных сервисов.",
    done: "Собрал библиотеку коннекторов, централизованное логирование и шаблоны безопасной авторизации.",
    stack: "1С:БСП, HTTPСоединение, JWT, Kafka gateway",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#hero" className="text-sm font-semibold tracking-wide text-slate-100">
            Иван Романов · 1С Developer
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacts"
            className="rounded-full border border-cyan-400/50 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            Связаться
          </a>
        </div>
      </header>

      <main className="bg-slate-950 text-slate-100">
        <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-8 lg:pt-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_rgba(15,23,42,0)_55%)]" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="animate-fade-up space-y-7">
              <p className="inline-flex rounded-full border border-cyan-400/35 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                Доработка, интеграции, поддержка, оптимизация
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Иван Романов
                <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Разработчик 1С
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Помогаю компаниям превращать 1С в прозрачный и быстрый инструмент для бизнеса: от точечных
                доработок до комплексной автоматизации и поддержки в режиме SLA.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacts"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Связаться
                </a>
                <a
                  href="#portfolio"
                  className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Смотреть проекты
                </a>
              </div>
            </div>
            <div className="animate-fade-up-delay rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_80px_-30px_rgba(34,211,238,0.65)]">
              <p className="text-sm text-slate-400">Фокус:</p>
              <ul className="mt-4 space-y-4 text-sm text-slate-200">
                <li className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">1С:Бухгалтерия · 1С:УТ · 1С:ЗУП</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">1С:ERP · 1С:Комплексная автоматизация</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">Интеграции с API, CRM и web-сервисами</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20 lg:px-8">
          <div className="mx-auto w-full max-w-6xl animate-fade-up space-y-7 rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
            <SectionTitle eyebrow="Обо мне" title="Экспертная разработка 1С для стабильных бизнес-процессов" />
            <p className="max-w-4xl text-slate-300">
              Более 8 лет работаю с корпоративными системами 1С: проектирую архитектуру, развиваю типовые
              конфигурации и внедряю надежные интеграции. Умею говорить с бизнесом на языке результата, а с IT — на
              языке качественного кода и прозрачной поддержки.
            </p>
            <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <p className="text-slate-500">Опыт</p>
                <p className="mt-1 text-lg font-semibold text-slate-100">8+ лет в 1С-разработке</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <p className="text-slate-500">Конфигурации</p>
                <p className="mt-1 text-lg font-semibold text-slate-100">БП, УТ, ЗУП, ERP, КА</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <p className="text-slate-500">Интеграции</p>
                <p className="mt-1 text-lg font-semibold text-slate-100">REST API, обмены, шины данных</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-20 lg:px-8">
          <div className="mx-auto w-full max-w-6xl animate-fade-up">
            <SectionTitle eyebrow="Навыки" title="Технологический стек и ключевые компетенции" />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/60"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-20 lg:px-8">
          <div className="mx-auto w-full max-w-6xl animate-fade-up">
            <SectionTitle eyebrow="Услуги" title="Решения под ваши задачи: от точечных работ до полного сопровождения" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-300/60"
                >
                  <h3 className="text-lg font-semibold text-slate-100">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-6 py-20 lg:px-8">
          <div className="mx-auto w-full max-w-6xl animate-fade-up">
            <SectionTitle eyebrow="Портфолио" title="Проекты, которые уже приносят результат" />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-300/60"
                >
                  <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
                  <p className="mt-3 text-sm text-slate-300">{project.summary}</p>
                  <p className="mt-4 text-sm text-slate-200">
                    <span className="font-medium text-cyan-200">Что сделано:</span> {project.done}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">{project.stack}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="px-6 pb-20 pt-20 lg:px-8">
          <div className="mx-auto w-full max-w-6xl animate-fade-up rounded-3xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 p-8">
            <SectionTitle eyebrow="Контакты" title="Готов обсудить ваш проект и предложить рабочее решение" />
            <div className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-3">
              <Link href="mailto:ivan.romanov.1c@proton.me" className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4 transition hover:border-cyan-300/60">
                Email
                <p className="mt-1 text-base font-semibold">ivan.romanov.1c@proton.me</p>
              </Link>
              <Link href="https://t.me/ivan_romanov_1c" className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4 transition hover:border-cyan-300/60">
                Telegram
                <p className="mt-1 text-base font-semibold">@ivan_romanov_1c</p>
              </Link>
              <Link href="tel:+79991234567" className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4 transition hover:border-cyan-300/60">
                Телефон
                <p className="mt-1 text-base font-semibold">+7 (999) 123-45-67</p>
              </Link>
            </div>
            <a
              href="mailto:ivan.romanov.1c@proton.me"
              className="mt-7 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Написать и обсудить задачу
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Иван Романов · Разработчик 1С · Интеграции и автоматизация бизнеса.</p>
          <p>© {new Date().getFullYear()} · ivan.romanov.1c@proton.me · +7 (999) 123-45-67</p>
        </div>
      </footer>
    </>
  );
}
