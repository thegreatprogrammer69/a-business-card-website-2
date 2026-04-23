import { navItems, profile } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-base font-semibold tracking-wide text-white">
          {profile.name}
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
          className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
        >
          Обсудить задачу
        </a>
      </div>
    </header>
  );
}
