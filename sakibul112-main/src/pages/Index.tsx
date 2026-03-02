import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SidebarCard from "@/components/SidebarCard";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechSection from "@/components/TechSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CustomCursor />
      <Navbar />
      <HeroSection />

      {/* Two-column layout: sticky sidebar + scrollable content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:flex lg:gap-14">
          {/* Sticky sidebar - hidden on mobile */}
          <aside className="hidden lg:block w-[360px] flex-shrink-0 relative">
            <div className="sticky top-24 pb-16">
              <SidebarCard />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <TechSection />
            <ContactSection />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          <span className="text-primary">&lt;</span>
          {" "}Built with ❤️ By MD. Sakibul Islam Sheikh{" "}
          <span className="text-primary">/&gt;</span>
        </p>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Index;
