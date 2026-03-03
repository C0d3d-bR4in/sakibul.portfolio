import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Gaming & Digital Commerce Platform",
    role: "Full-Stack Developer",
    period: "2025 – Present",
    description: "Built and deployed a real-time digital product top-up system using React, Node.js, Supabase, and WebSocket. Integrated Piprapay and bKash APIs, developed admin dashboards, and implemented secure transaction handling with live inventory synchronization.",
  },
  {
    company: "CipherVault & Blockchain Project",
    role: "Security Researcher & System Architect",
    period: "2025 – Present",
    description: "Designed and developed an advanced encryption/decryption platform featuring steganography-based message hiding, dual-container secure file architecture, plausible deniability mode, and experimental cryptographic tools. Conducted malware behavior analysis and secure data workflow research. Also I Worked on Blockchain based DID projects.",
  },
  {
    company: "WooCommerce & Marketplace Systems",
    role: "E-commerce Developer",
    period: "2023 – 2025",
    description: "Developed and customized high-performance WooCommerce platforms with real-time inventory, payment gateway integrations, and optimized UI/UX.",
  },
  {
    company: "Web & Interactive Applications",
    role: "Frontend Developer",
    period: "2022 – 2023",
    description: "Started my career building websites and web apps for local businesses and startups.",
  },
];

const TimelineItem = ({ item, index }: { item: typeof experiences[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-between mb-16 last:mb-0 w-full transition-all duration-1000 ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16"
        }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Timeline central neon dot */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary z-20 shadow-[0_0_15px_hsl(var(--primary))] ring-4 ring-background transition-transform duration-500 hover:scale-150" />

      {/* Connection Line to Dot (Desktop only) */}
      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r ${isLeft ? "from-transparent to-primary/50 right-1/2" : "from-primary/50 to-transparent left-1/2"} w-8 z-0`} />

      {/* Card Wrapper */}
      <div className={`w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
        <div
          className="group relative glass rounded-2xl p-8 glow-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] cursor-help"
        >
          {/* Animated Background Gradient Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10">
            {/* Header / Period Badge */}
            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 origin-left">
              <Briefcase className="w-4 h-4" />
              {item.period}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {item.role}
            </h3>

            <p className="text-primary/90 font-medium mb-4 text-base tracking-wide">
              {item.company}
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Subtle accent line at the bottom that expands on hover */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 scroll-mt-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05)_0%,transparent_60%)] pointer-events-none blur-3xl z-0" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8">
        <div ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <span className="gradient-text">Career & Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-full mb-20" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s 0.2s" }} />
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Glowing Line */}
          <div className="absolute left-[31px] md:left-1/2 md:-translate-x-[1px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent shadow-[0_0_10px_hsl(var(--primary)/0.4)] z-0" />

          {experiences.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
