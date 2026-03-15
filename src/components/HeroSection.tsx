import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/3 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-primary/40 animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/30 animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary/20 animate-pulse-glow" style={{ animationDelay: "2s" }} />

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-20 w-20 h-20 border border-primary/10 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/4 left-20 w-16 h-16 border border-primary/10 rounded-full animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Greeting */}
        <p className="text-muted-foreground text-lg md:text-xl mb-4 animate-slide-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="inline-block animate-slide-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <span className="gradient-text glow-text break-words whitespace-normal">Sakibul Islam Sheikh</span>
          </span>
        </h1>

        {/* Role with typewriter */}
        <div className="flex justify-center mb-8 animate-slide-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <span className="font-mono text-lg md:text-2xl text-muted-foreground">
            {"{ "}
            <span className="text-primary">Creative Developer</span>
            {" }"}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "1s", opacity: 0 }}>
          I craft immersive digital experiences with clean code and creative design.
          Turning complex problems into elegant, user-centric solutions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "1.2s", opacity: 0 }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(191_100%_50%/0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-xl border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
