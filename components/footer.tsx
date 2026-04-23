import { profile } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>Разработка и сопровождение решений на 1С для бизнеса.</p>
        <p>
          {profile.email} • {profile.telegram} • {profile.phone}
        </p>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
