import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import * as si from 'simple-icons';

const techItems = [
  // List requested by the user
  { name: "WordPress", iconPath: si.siWordpress.path, color: "#21759B" },
  { name: "WooCommerce", iconPath: si.siWoocommerce.path, color: "#96588A" },
  { name: "Node.js", iconPath: si.siNodedotjs.path, color: "#339933" },
  { name: "Express.js", iconPath: si.siExpress.path, color: "#ffffff" },
  { name: "Next.js", iconPath: si.siNextdotjs.path, color: "#ffffff" },
  { name: "React Native", iconPath: si.siReact.path, color: "#61DAFB" },
  { name: "TypeScript", iconPath: si.siTypescript.path, color: "#3178C6" },
  { name: "HTML5", iconPath: si.siHtml5.path, color: "#E34F26" },
  { name: "CSS3", iconPath: si.siCss.path, color: "#1572B6" },
  { name: "Tailwind CSS", iconPath: si.siTailwindcss.path, color: "#06B6D4" },
  { name: "MySQL", iconPath: si.siMysql.path, color: "#4479A1" },
  { name: "PostgreSQL", iconPath: si.siPostgresql.path, color: "#4169E1" },
  { name: "MongoDB", iconPath: si.siMongodb.path, color: "#47A248" },
  { name: "Supabase", iconPath: si.siSupabase.path, color: "#3ECF8E" },
  { name: "Firebase", iconPath: si.siFirebase.path, color: "#FFCA28" },
  { name: "Blockchain", iconPath: si.siEthereum.path, color: "#3C3C3D" },
  { name: "Git", iconPath: si.siGit.path, color: "#F05032" },
  { name: "GitHub", iconPath: si.siGithub.path, color: "#ffffff" },
  { name: "Postman", iconPath: si.siPostman.path, color: "#FF6C37" },
];

const TechIcon = ({ item, index }: { item: typeof techItems[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex flex-col items-center justify-center gap-2 w-20 h-24 sm:w-24 sm:h-28 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-sm"
        style={{
          borderColor: hovered ? item.color + "60" : "hsl(240 10% 20% / 0.4)",
          backgroundColor: hovered ? item.color + "15" : "hsl(240 15% 10% / 0.5)",
          boxShadow: hovered ? `0 0 25px ${item.color}30, inset 0 0 20px ${item.color}10` : "none",
        }}
      >
        {/* Glow behind icon on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${item.color}30 0%, transparent 70%)` }}
        />

        {/* SVG Icon */}
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 z-10"
          style={{
            transform: hovered ? "scale(1.15)" : "scale(1)",
          }}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-full h-full"
            style={{
              fill: hovered ? item.color : "hsl(240 5% 55%)",
              transition: "fill 0.3s ease",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={item.iconPath} />
          </svg>
        </div>

        {/* Name */}
        <span
          className="text-[10px] sm:text-xs font-medium transition-colors duration-300 text-center px-1 z-10"
          style={{ color: hovered ? "#fff" : "hsl(240 5% 55%)" }}
        >
          {item.name}
        </span>
      </div>
    </div>
  );
};

const TechSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="tech" className="py-20 scroll-mt-24 relative overflow-hidden flex flex-col items-center">
      {/* Background radial grid lines & glow (from reference design) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[800px] h-[400px] pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent blur-[80px]" />

        {/* Simplified conceptual wireframe lines matching reference aesthetic */}
        <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="400" cy="200" rx="350" ry="150" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
          <ellipse cx="400" cy="200" rx="250" ry="100" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
          <ellipse cx="400" cy="200" rx="150" ry="60" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />

          <path d="M 50,200 L 750,200" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
          <path d="M 400,20 L 400,380" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
          <path d="M 150,50 L 650,350" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
          <path d="M 150,350 L 650,50" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div ref={ref} className="mb-16 flex flex-col items-start text-left px-4 sm:px-8">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <span className="gradient-text">Tech Stack</span>
          </h2>
          {/* Using solid cyan gradient line to exactly match the text color vibe */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-full mb-6" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s 0.2s" }} />
        </div>

        {/* Flowing honeycomb/grid center aligned layout */}
        <div className="flex flex-wrap justify-center content-center max-w-4xl gap-3 sm:gap-4 px-4 sm:px-8">
          {techItems.map((item, i) => (
            <TechIcon key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
