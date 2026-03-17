import CustomCursor from "@/components/CustomCursor";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SidebarCard from "@/components/SidebarCard";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechSection from "@/components/TechSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Heart } from "lucide-react";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollReveal(0.5);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setFilled(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setFilled(false);
    }
  }, [isVisible]);

  return (
    <footer ref={ref} className="py-8 px-6 border-t border-border/50 text-center">
      <p className="text-sm text-muted-foreground font-mono leading-loose flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="text-primary">&lt;</span>
        <span>Built with</span>
        <Heart 
          className={`w-4 h-4 transition-all duration-500 cursor-pointer hover:scale-110 hover:fill-[#00D0FF] ${filled ? 'fill-[#00D0FF] text-[#00D0FF]' : 'text-[#00D0FF] fill-transparent'}`} 
          onMouseEnter={() => setFilled(true)}
          onClick={() => setFilled(true)}
        />
        <span>By MD. Sakibul Islam Sheikh</span>
        <span className="text-primary">/&gt;</span>
      </p>
    </footer>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <CustomCursor />
      <Navbar />
      <HeroSection />

      {/* Two-column layout: sticky sidebar + scrollable content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
