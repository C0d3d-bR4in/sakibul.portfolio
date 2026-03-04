import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/C0d3d-bR4in", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/sakibul.islam.official/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/sakibul.islam.official/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-sakibul-islam-sheikh-64462b290/", label: "LinkedIn" }
];

const SidebarCard = () => {
  return (
    <div className="glass rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center relative overflow-hidden bg-card/40 border-border/40 shadow-xl shadow-black/40">

      {/* Avatar Container */}
      <div className="w-full relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[300px] mb-6 flex items-center justify-center p-0 shadow-lg shadow-black/20 group">
        <img src="/ss.jpeg" alt="Profile Details" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 relative z-0" />
      </div>

      {/* Hero Text */}
      <h2 className="text-[28px] font-extrabold text-white mb-2 tracking-tight mt-0">
        MD. Sakibul Islam Sheikh
      </h2>

      {/* Role */}
      <p className="text-white/80 font-medium text-base mb-1">
        Full Stack Web Developer & Security Researcher
      </p>

      {/* Location */}
      <p className="text-white/60 text-sm mb-8 font-medium">
        Savar, Dhaka, Bangladesh
      </p>

      {/* Clean Social links */}
      <div className="flex gap-3 mb-8">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm shadow-sm"
          >
            <Icon className="w-4 h-4 stroke-[2]" />
          </a>
        ))}
      </div>

      {/* Let's Talk Button */}
      <a
        href="https://wa.me/+8801639658318"
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-sm hover:opacity-90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default SidebarCard;