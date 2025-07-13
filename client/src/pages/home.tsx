import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import MeetingScheduler from "@/components/meeting-scheduler";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <AboutSection />
      <MeetingScheduler />
      <ContactSection />
      <Footer />
    </div>
  );
}
