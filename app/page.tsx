import { AboutSection } from "@/components/about-section";
import { ContactsSection } from "@/components/contacts-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
