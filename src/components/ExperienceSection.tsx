import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "TechCorp Inc.",
    role: "Senior Frontend Developer",
    period: "2022 – Present",
    description: "Leading the frontend team in building scalable React applications. Architected a design system serving 20+ internal products.",
  },
  {
    company: "StartupXYZ",
    role: "Full-Stack Developer",
    period: "2020 – 2022",
    description: "Built and shipped a SaaS platform from scratch using React, Node.js, and PostgreSQL. Grew the product to 10K+ users.",
  },
  {
    company: "Digital Agency Co.",
    role: "Frontend Developer",
    period: "2019 – 2020",
    description: "Developed responsive web applications and interactive experiences for Fortune 500 clients.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2018 – 2019",
    description: "Started my career building websites and web apps for local businesses and startups.",
  },
];

const TimelineItem = ({ item, index }: { item: typeof experiences[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex md:items-center mb-12 last:mb-0">
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 glow-box" />

      {/* Card */}
      <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"}`}>
        <div
          className={`glass rounded-2xl p-6 glow-border hover:glow-box transition-all duration-500 ${
            isVisible
              ? isLeft ? "animate-slide-left" : "animate-slide-right"
              : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
            <Briefcase className="w-4 h-4" />
            {item.period}
          </div>
          <h3 className="text-xl font-bold text-foreground mb-1">{item.role}</h3>
          <p className="text-primary/80 font-medium mb-3">{item.company}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-16 scroll-mt-24 relative">
      <div>
        <div ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-16" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s 0.2s" }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.85rem] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          {experiences.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
