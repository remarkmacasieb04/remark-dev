import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteArtwork } from "@/components/layout/site-artwork";
import { AboutSection } from "@/components/sections/about-section";
import { ChatbotSection } from "@/components/sections/chatbot-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <div className="relative isolate overflow-x-clip">
      <SiteArtwork />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-3 focus:text-canvas"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content" className="pb-4">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <EducationSection />
        <ChatbotSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
