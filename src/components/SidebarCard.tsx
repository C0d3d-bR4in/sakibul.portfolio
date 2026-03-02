import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/C0d3d-bR4in", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-sakibul-islam-sheikh-64462b290/", label: "LinkedIn" }
];

const SidebarCard = () => {
  return (
    <div className="glass rounded-2xl glow-border p-8 flex flex-col items-center text-center relative overflow-hidden">

      {/* Top Left Circle Background Arc */}
      <svg className="absolute -top-[10%] -left-[10%] w-[60%] h-[30%] text-primary/60 pointer-events-none z-0" viewBox="0 0 100 100" fill="none" overflow="visible">
        <circle cx="0" cy="0" r="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" />
      </svg>

      {/* Avatar Container */}
      <div className="relative z-10 w-56 h-64 mb-6">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 via-primary/10 to-accent/20 flex items-center justify-center p-0 shadow-lg shadow-black/20">
          <img src="/ss.png" alt="Profile" className="w-full h-full object-cover relative z-10" />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-foreground mb-2 mt-0 z-10 relative">
        MD. Sakibul Islam Sheikh
      </h2>

      {/* Role */}
      <p className="text-muted-foreground text-sm z-10 relative mb-4">
        Full Stack Web Developer & Security Reseracher
      </p>

      {/* Connectors & Fire Icon */}
      <div className="relative z-0 flex items-center justify-center flex-col mb-4">

        <div className="relative z-10 w-9 h-9 flex items-center justify-center mb-2">

          {/* SVG Connector UP (from center to top-left across image right-edge) */}
          <svg className="absolute bottom-1/2 left-1/2 w-0 h-0 text-primary/60 pointer-events-none" overflow="visible" fill="none">
            {/* Coordinates originating from center of flame to loop around profile picture */}
            <path d="M 0,0 C 120,-100 180,-300 -60,-400" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
          </svg>

          {/* SVG Connector DOWN (from center to bottom-left) */}
          <svg className="absolute top-1/2 right-1/2 w-0 h-0 text-primary/60 pointer-events-none" overflow="visible" fill="none">
            <path d="M 0,0 C -30,60 -80,90 -200,100" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
          </svg>

          {/* Bangladesh flag section styles matching reference */}
          <div className="w-full h-full rounded-full bg-transparent flex items-center justify-center relative z-10 flex-col mt-4">
            {/* Text with SVG inline */}
            <div className="flex items-center gap-2 mb-2 whitespace-nowrap">
              <span className="text-muted-foreground font-medium">I am Proudly a </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 rounded-sm shadow-sm flex-shrink-0">
                {/* Background square */}
                <rect width="512" height="512" fill="#006a4e" />
                {/* Circle offset slightly left to account for squared aspect ratio keeping it visually centered */}
                <circle cx="230" cy="256" r="160" fill="#f42a41" />
              </svg>
            </div>

            {/* Email */}
            <a href="mailto:mail2sakibul@gmail.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
              mail2sakibul@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-muted-foreground text-base leading-relaxed mb-6 px-2 z-10 relative">
        I am a Full-Stack Web Developer and Security Researcher with experience in creating scalable web applications and secure systems, focusing on high-performance backend architectures and modern frontend interfaces.
      </p>

      {/* Social links */}
      <div className="flex gap-4 mb-0 z-10 relative">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-primary/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Icon className="w-5 h-5 stroke-[1.5]" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarCard;