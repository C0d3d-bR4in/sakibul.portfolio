import { ExternalLink, Github, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useRef } from "react";
import * as si from 'simple-icons';

const projects = [
  {
    title: "Gaming & Digital Product Topup",
    description: "A full-stack e-commerce solution with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["React", "Node.js", "Supabase", "TypeScript", "Vite", "Bkash API"],
    color: "from-cyan-500/20 to-blue-600/20",
    video: "/videos/project-1.webm",
    thumbnail: "/images/image.png",
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
    tags: ["Next.js", "TypeScript", "React", "shadcn-ui", "Tailwind CSS", "Firebase"],
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
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
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
      className={`transition-all duration-1000 w-full h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="glass rounded-[32px] overflow-hidden p-6 lg:p-8 bg-card/20 border-border/20 shadow-xl shadow-black/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col relative"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: isHovered ? "transform 0.1s ease-out, box-shadow 0.3s, background 0.3s" : "transform 0.5s ease-out, box-shadow 0.5s, background 0.5s",
        }}
      >
        {/* Animated Background Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Video/Image preview */}
        <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden mb-6 shadow-inner ring-1 ring-white/10 group-hover:ring-primary/40 transition-all duration-300`}>
          {project.video ? (
            <>
              <video
                ref={videoRef}
                src={project.video}
                muted
                loop
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
              />
              {/* Static thumbnail overlay */}
              <div className={`absolute inset-0 bg-black/20 transition-all duration-700 ${isHovered ? "opacity-0 invisible" : "opacity-100 visible"}`}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
              <span className="text-4xl opacity-60">🚀</span>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 relative z-10">
          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-foreground/70 text-base leading-relaxed mb-6 font-medium">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {project.tags.map((tag) => {
              const getTagStyle = (t: string) => {
                const brandColors: Record<string, { hex: string; iconProp?: string; customSvg?: React.ReactNode; viewBox?: string }> = {
                  'react': { hex: '#61DAFB', iconProp: 'siReact' },
                  'node.js': { hex: '#339933', iconProp: 'siNodedotjs' },
                  'supabase': { hex: '#3ECF8E', iconProp: 'siSupabase' },
                  'next.js': { hex: '#000000', iconProp: 'siNextdotjs' },
                  'firebase': { hex: '#FFCA28', iconProp: 'siFirebase' },
                  'tailwind css': { hex: '#06B6D4', iconProp: 'siTailwindcss' },
                  'typescript': { hex: '#3178C6', iconProp: 'siTypescript' },
                  'vite': { hex: '#646CFF', iconProp: 'siVite' },
                  'wordpress': { hex: '#21759B', iconProp: 'siWordpress' },
                  'woocommerce': { hex: '#96588A', iconProp: 'siWoocommerce' },
                  'bkash api': {
                    hex: '#e2136e',
                    viewBox: '0 0 48 48',
                    customSvg: (
                      <>
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.981 8.632s-4.163 14.704-3.809 14.704s16.476 2.923 16.476 2.923Z" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.981 8.632L6.329 6.152l12.843 17.184l2.215 10.186l14.261-7.263l3.72-8.814l-8.975 1.501m7.536 1.909H43l-3.632-3.41" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21.387 33.522l.354 1.905l-8.016 6.421l5.447-18.512m16.476 2.923l-.531 2.879l-12.269 3.64M8.455 8.997H5L16.044 19.15" />
                      </>
                    )
                  },
                  'shadcn-ui': {
                    hex: '#000000',
                    customSvg: <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z" />
                  },
                  'elementor': { hex: '#D23953', iconProp: 'siElementor' },
                  'websocket': { hex: '#f0db4f' },
                  'wpbakery page builder': { hex: '#0091CA' },
                };

                const data = brandColors[t.toLowerCase()];
                return data || { hex: 'hsl(var(--primary))' };
              };

              const tagData = getTagStyle(tag);
              const hex = tagData.hex;

              const iconPath = tagData.iconProp ? (si as any)[tagData.iconProp]?.path : null;
              const hasIcon = iconPath || tagData.customSvg;

              return (
                <div
                  key={tag}
                  title={tag}
                  className="w-9 h-9 rounded-full flex items-center justify-center border backdrop-blur-sm transition-all duration-300 hover:scale-[1.2] cursor-help shadow-sm"
                  style={{
                    backgroundColor: hex.startsWith('hsl') ? `hsl(var(--primary) / 0.15)` : `${hex}15`,
                    borderColor: hex.startsWith('hsl') ? `hsl(var(--primary) / 0.4)` : `${hex}40`,
                    boxShadow: hex.startsWith('hsl') ? `0 0 15px hsl(var(--primary) / 0.1)` : `0 0 15px ${hex}15`
                  }}
                >
                  {hasIcon ? (
                    <svg
                      role="img"
                      viewBox={tagData.viewBox || "0 0 24 24"}
                      className="w-[18px] h-[18px]"
                      style={{
                        fill: tagData.customSvg ? 'currentColor' : (hex === '#000000' ? '#ffffff' : hex),
                        color: hex === '#000000' ? '#ffffff' : hex
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {tagData.customSvg ? tagData.customSvg : <path d={iconPath} />}
                    </svg>
                  ) : (
                    <span className="text-[11px] font-bold" style={{ color: hex.startsWith('hsl') ? 'hsl(var(--primary))' : hex }}>
                      {tag.substring(0, 1).toUpperCase()}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-auto">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm text-primary text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-primary/40 hover:border-primary hover:shadow-[0_0_20px_hsla(var(--primary)/0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 ease-in-out" />
              <ExternalLink className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              <span className="relative z-10">Live Demo</span>
            </a>
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-secondary/50 backdrop-blur-sm text-foreground text-sm font-medium border border-border/50 hover:border-white/20 hover:bg-secondary/80 transition-all duration-300 hover:scale-[1.02]"
            >
              <Github className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
              <span className="relative z-10">Source</span>
            </a>
          </div>
        </div>

        {/* Subtle accent line at the bottom that expands on hover */}
        <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-primary to-blue-500 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 scroll-mt-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.04)_0%,transparent_60%)] pointer-events-none blur-3xl z-0" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8">
        <div ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-full mb-20" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s 0.2s" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
