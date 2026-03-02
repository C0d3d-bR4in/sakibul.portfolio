import { useEffect, useState } from "react";
import { Home, User, FolderOpen, Building2, Wrench, MessageSquare } from "lucide-react";

const sections = ["hero", "about", "experience", "projects", "tech", "contact"];
const labels: Record<string, string> = {
  hero: "Home",
  about: "About Me",
  experience: "Experience",
  projects: "Projects",
  tech: "Tech Stack",
  contact: "Contact",
};
const icons: Record<string, React.ElementType> = {
  hero: Home,
  about: User,
  experience: Building2,
  projects: FolderOpen,
  tech: Wrench,
  contact: MessageSquare,
};

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Main text navbar - visible at top */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "opacity-0 -translate-y-full pointer-events-none" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="text-2xl font-bold font-mono tracking-tight group">
            <span className="text-primary glow-text">&lt;</span>
            <span className="text-foreground group-hover:text-primary transition-colors">Dev</span>
            <span className="text-primary glow-text">/&gt;</span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {sections.filter((s) => s !== "hero").map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                  active === id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {labels[id]}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className={`w-6 h-0.5 bg-primary transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-primary transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-primary transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 animate-scale-in">
            {sections.filter((s) => s !== "hero").map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active === id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {labels[id]}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Sticky icon navbar - appears on scroll */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="glass rounded-full px-6 py-2.5 flex items-center gap-3 glow-border">
          {sections
            .map((id) => {
              const Icon = icons[id];
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    active === id
                      ? "text-primary bg-primary/15"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </button>
              );
            })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
