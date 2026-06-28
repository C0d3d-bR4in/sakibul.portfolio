import { ExternalLink, Github, Play, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useRef } from "react";
import * as si from 'simple-icons';
import { Button } from "@/components/ui/button";

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
    title: "RareMart Gadgets selling E-commerce",
    description: "A comprehensive dashboard for managing warehouse logistics and supply chain operations in real-time.",
    tags: ["Wordpress", "Woocommerce", "Elementor", "php", "mysql", "Bootstrap"],
    color: "from-blue-500/20 to-indigo-600/20",
    video: "/videos/RareMart.mp4",
    thumbnail: "/images/project-5-thumb.png",
    liveLink: "https://raremart.live/",
    sourceLink: "#",
  },
  {
    title: "Stream24.xyz IPTV Streaming Platform",
    description: "A high-performance IPTV streaming platform delivering 4000+ live channels with a clean, real-time interface. ",
    tags: ["Next.js", "TypeScript", "React", "shadcn-ui", "Tailwind CSS", "Firebase"],
    color: "from-orange-500/20 to-red-600/20",
    video: "/videos/project-4.webm",
    thumbnail: "/images/project-4-thumb.png",
    liveLink: "https://stream24.xyz",
    sourceLink: "https://github.com/C0d3d-bR4in/BDTV.live",
  },

   {
    title: "CipherVault",
    description: "A privacy-first encryption toolkit CipherVault. It offers features like steganography, multi-layer encryption, encrypted note storage, and dual-container vaults, targeting security enthusiasts and power users who desire complete data control.",
    tags: ["React", "Vite", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    color: "from-emerald-500/20 to-teal-600/20",
    video: "/videos/project-3.webm",
    thumbnail: "/images/project-3-thumb.png",
    liveLink: "https://cipher-vault.replit.app/",
    sourceLink: "https://github.com/C0d3d-bR4in/cipher-vault",
  },

  {
    title: "Blockchain-Based Decentralized Identity Verification System",
    description: "A decentralized Sensitive data storing platform built on blockchain technology ensuring transparency and tamper-proof data management.",
    tags: ["React", "Ether.js", "Solidity", "ipfs", "Tailwind CSS", "TypeScript"],
    color: "from-emerald-500/20 to-cyan-600/20",
    video: "#",
    thumbnail: "/images/DID.png",
    liveLink: "https://github.com/C0d3d-bR4in/A-Blockchain-Based-DID-Verification-system-using-IPFS-and-Cryptographic-Security",
    sourceLink: "https://github.com/C0d3d-bR4in/A-Blockchain-Based-DID-Verification-system-using-IPFS-and-Cryptographic-Security",
  },

  {
    title: "TopTime Watch Sellling E-commerce",
    description: "A full-stack e-commerce solution with real-time inventory, Bkash payments, and wordpress admin dashboard.",
    tags: ["Wordpress", "Woocommerce", "MYSQL", "Elementor", "Bootstrap"],
    color: "from-purple-500/20 to-indigo-600/20",
    video: "/videos/Toptime.mp4",
    thumbnail: "/images/toptime.png",
    liveLink: "https://watch.gametopup.store/",
    sourceLink: "#",
  },
  
  {
    title: "RareMart auto Reply Assistant & Chatbot",
    description: "A chatbot and auto-reply assistant for E-commerce, designed to enhance customer support and engagement through automated responses.",
    tags: ["Node.js", "React", "Next.js", "Supabase", "Tailwind css"],
    color: "from-rose-500/20 to-orange-600/20",
    video: "/videos/chatbot.mp4",
    thumbnail: "/images/chatbot.jpg",
    liveLink: "https://m.me/RareMart.Live?ref=order_255_Pico_Neo_3_Pro",
    sourceLink: "https://github.com/C0d3d-bR4in/Chatbot-Frontend",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const hasVideo = project.video && project.video !== "#" && project.video !== "";
  const hasThumbnail = project.thumbnail && project.thumbnail !== "" && project.thumbnail !== "#";

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && hasVideo) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="glass rounded-[32px] overflow-hidden p-6 lg:p-8 bg-card/20 border-border/20 shadow-xl shadow-black/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col relative"
      >
        {/* Animated Background Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Video/Image preview */}
        <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden mb-6 shadow-inner ring-1 ring-white/10 group-hover:ring-primary/40 transition-all duration-300`}>
          {hasVideo ? (
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
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                  }}
                />
              </div>
            </>
          ) : hasThumbnail ? (
            <div className="absolute inset-0 transition-all duration-700 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
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
                  'solidity': { hex: '#363636', iconProp: 'siSolidity' },
                  'ether.js': { hex: '#2535A0', iconProp: 'siEthers' },
                  'ipfs': { hex: '#65C2CB', iconProp: 'siIpfs' },
                  'vue.js': { hex: '#4FC08D', iconProp: 'siVuedotjs' },
                  'pinia': { hex: '#FFD859', iconProp: 'siPinia' },
                  'chart.js': { hex: '#FF6384', iconProp: 'siChartdotjs' },
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
                  'php': { hex: '#777BB4', iconProp: 'siPhp' },
                  'mysql': { hex: '#4479A1', iconProp: 'siMysql' },
                  'bootstrap': { hex: '#7952B3', iconProp: 'siBootstrap' },
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
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

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
          {displayedProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {projects.length > 4 && (
          <div className="flex justify-center mt-16">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="group relative px-8 py-6 rounded-2xl bg-background/50 backdrop-blur-md border-primary/20 hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-3 relative z-10">
                {showAll ? (
                  <>
                    <span className="text-lg font-semibold">View Less</span>
                    <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    <span className="text-lg font-semibold">View More Projects</span>
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                  </>
                )}
              </div>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
