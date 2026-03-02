import { ExternalLink, Github, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useRef } from "react";

const projects = [
  {
    title: "Gaming & Digital Product Topup",
    description: "A full-stack e-commerce solution with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["React", "Node.js", "Supabase", "WebSocket", "Bkash API"],
    color: "from-cyan-500/20 to-blue-600/20",
    video: "/videos/project-1.webm",
    thumbnail: "/images/project-1-thumb.png",
    liveLink: "http://bdzone.store/",
    sourceLink: "#",
  },
  {
    title: "Elysvo Fashion E-commerce",
    description: "A full-stack woocommerce solution with real-time inventory, Bkash payment Gateway, and WP admin dashboard.",
    tags: ["Wordpress", "WooCommerce", "Elementor", "WpBakery Page Builder"],
    color: "from-purple-500/20 to-pink-600/20",
    video: "/videos/project-2.webm",
    thumbnail: "/images/project-2-thumb.png",
    liveLink: "https://elysvo.com/",
    sourceLink: "#",
  },
  {
    title: "CipherVault",
    description: "Interactive data visualization dashboard with real-time metrics, custom charts, and exportable reports.",
    tags: ["React", "Vite", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    color: "from-emerald-500/20 to-teal-600/20",
    video: "/videos/project-3.webm",
    thumbnail: "/images/project-3-thumb.png",
    liveLink: "https://cipher-vault.replit.app/",
    sourceLink: "https://github.com/C0d3d-bR4in/cipher-vault",
  },
  {
    title: "BDTV.live",
    description: "A modern social platform with real-time feeds, stories, messaging, and content recommendation engine.",
    tags: ["Next.js", "Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS", "Firebase"],
    color: "from-orange-500/20 to-red-600/20",
    video: "/videos/project-4.webm",
    thumbnail: "/images/project-4-thumb.png",
    liveLink: "https://tv.gametopup.store/",
    sourceLink: "https://github.com/C0d3d-bR4in/BDTV.live",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="glass rounded-2xl overflow-hidden glow-border hover:glow-box transition-all duration-300 group h-full"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.1s ease-out, box-shadow 0.3s",
        }}
      >
        {/* Video/Image preview */}
        <div className={`h-52 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          {project.video ? (
            <>
              <video
                ref={videoRef}
                src={project.video}
                muted
                loop
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
              />
              {/* Static thumbnail overlay */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
              <span className="text-4xl opacity-60">🚀</span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">
              <Github className="w-4 h-4" /> Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-16 scroll-mt-24 relative">
      <div>
        <div ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-16" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s 0.2s" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
