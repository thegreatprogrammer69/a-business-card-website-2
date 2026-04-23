import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Иван Романов — Разработчик 1С",
  description:
    "Сайт-визитка 1С-разработчика: доработка конфигураций, интеграции с API, поддержка, оптимизация и сопровождение проектов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 font-sans text-slate-100">{children}</body>
    </html>
  );
}
