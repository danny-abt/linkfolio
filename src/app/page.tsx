import { HeroSection } from "@/components/HeroSection";
import { OffersSection } from "@/components/OffersSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OffersSection />
      <ProjectsSection />
      <SectorsSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
