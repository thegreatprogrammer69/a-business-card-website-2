import { SectionTitle } from "@/components/section-title";
import { profile } from "@/lib/site-data";

export function ContactsSection() {
  return (
    <section id="contacts" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Контакты"
          title="Обсудим задачи по вашей 1С-системе"
          description="Напишите удобным способом — отвечаю оперативно и сразу предлагаю план работ, сроки и этапы."
        />

        <div className="animate-fade-in-up rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-cyan-500/12 via-indigo-500/10 to-slate-900 p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            <a className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-cyan-300/40" href={`mailto:${profile.email}`}>
              <p className="text-xs uppercase tracking-widest text-slate-400">Email</p>
              <p className="mt-2 text-slate-100">{profile.email}</p>
            </a>
            <a className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-cyan-300/40" href={`https://t.me/${profile.telegram.replace("@", "")}`}>
              <p className="text-xs uppercase tracking-widest text-slate-400">Telegram</p>
              <p className="mt-2 text-slate-100">{profile.telegram}</p>
            </a>
            <a className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-cyan-300/40" href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
              <p className="text-xs uppercase tracking-widest text-slate-400">Телефон</p>
              <p className="mt-2 text-slate-100">{profile.phone}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
