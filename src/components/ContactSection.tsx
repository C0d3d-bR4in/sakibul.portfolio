import { useState, useRef } from "react";
import { Github, Linkedin, Twitter, Mail, Copy, Check, Send, Loader2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/C0d3d-bR4in" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/md-sakibul-islam-sheikh-64462b290/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText("mail2sakibul@gmail.com");
    setCopied(true);
    toast({ title: "Email copied!", description: "mail2sakibul@gmail.com" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    // Replace these 3 variables with your EmailJS credentials
    // Note: It's totally safe to expose public keys here securely on the frontend!
    const SERVICE_ID = "service_p46rjba";
    const TEMPLATE_ID = "template_ad7omgw";
    const PUBLIC_KEY = "fePEx8GOTFhfbBFuZ";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          toast({ title: "Message sent successfully!", description: "Thanks for reaching out. I'll get back to you soon." });
          formRef.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          toast({ variant: "destructive", title: "Oops!", description: "Something went wrong. Please try again later." });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 scroll-mt-24 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-16" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s 0.2s" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 glow-border space-y-6">
              {["name", "email", "message"].map((field) => (
                <div key={field} className="relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-2 capitalize">
                    {field}
                  </label>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      required
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      rows={4}
                      className={`w-full bg-secondary/50 border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 resize-none ${focused === field ? "border-primary shadow-[0_0_15px_hsl(var(--primary)/0.2)]" : "border-border"
                        }`}
                      placeholder={`Your ${field}...`}
                    />
                  ) : (
                    <input
                      name={field}
                      required
                      type={field === "email" ? "email" : "text"}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-secondary/50 border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${focused === field ? "border-primary shadow-[0_0_15px_hsl(var(--primary)/0.2)]" : "border-border"
                        }`}
                      placeholder={`Your ${field}...`}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info side */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="glass rounded-2xl p-8 glow-border mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Let's work together</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              {/* Email copy */}
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm text-foreground/90">mail2sakibul@gmail.com</span>
                <span className="ml-auto">
                  {copied ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass rounded-xl p-4 flex flex-col items-center gap-2 glow-border hover:glow-box hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
