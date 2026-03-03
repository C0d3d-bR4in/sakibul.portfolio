import { MapPin, Calendar, Coffee, Code2 } from "lucide-react";
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
          <div className="glass rounded-2xl p-8 glow-border">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-mono">Savar, Dhaka, Bangladesh</span>
            </div>

            <p className="text-foreground/90 leading-relaxed mb-4">
              I'm a passionate full-stack web developer with a love for creating beautiful, performant web applications.
              With 1.5+ years of experience, I specialize in React, TypeScript, WordPress, WooCommerce and modern web technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, Researching on Cyber Security and Web application Security.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group">
                  <Icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="text-2xl font-bold text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
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
