import { Calendar, Coffee, Code2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Calendar, label: "Years Experience", value: "1.5+" },
  { icon: Code2, label: "Projects Done", value: "5+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-32 px-6 scroll-mt-24 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full mb-16" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s 0.2s" }} />

        <div className={`transition-all duration-700 delay-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="glass rounded-[32px] p-8 lg:p-10 glow-border bg-card/40 border-border/40 shadow-xl shadow-black/40 min-h-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90">Background</h3>

            <div className="space-y-6 mb-12">
              <p className="border-l-2 border-primary/40 pl-5 py-1 text-foreground/80 leading-relaxed text-lg relative hover:border-l-4 transform transition-all">
                I'm a passionate full-stack web developer with a love for creating beautiful, performant web applications.
                With 1.5+ years of experience, I specialize in React, TypeScript, WordPress, WooCommerce and modern web technologies.
              </p>
              <p className="border-l-2 border-primary/40 pl-5 py-1 text-foreground/60 leading-relaxed text-base relative hover:border-l-4 transform transition-all">
                When I'm not coding, you'll find me exploring new technologies, Researching on Cyber Security and Web application Security.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center p-6 rounded-2xl bg-secondary/30 border border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-all group shadow-sm bg-blend-overlay">
                  <Icon className="w-6 h-6 mx-auto mb-3 text-foreground/50 group-hover:text-primary transition-colors duration-300" />
                  <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
                  <div className="text-sm font-medium text-foreground/60">{label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
