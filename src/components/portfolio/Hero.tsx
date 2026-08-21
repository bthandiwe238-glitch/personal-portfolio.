import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Reveal";

export const socials = [
  { label: "GitHub", href: "https://github.com/ayandabuthelezi", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/ayandabuthelezi", Icon: Linkedin },
  { label: "Email", href: "mailto:bthandiwe238@gmail.com", Icon: Mail },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(70%_60%_at_50%_20%,#000,transparent)]" />
      <div className="blob -left-20 top-10 size-72 sm:size-96" style={{ background: "var(--cyan)" }} />
      <div className="blob -right-16 top-40 size-80" style={{ background: "var(--magenta)" }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-foreground/90 sm:text-sm">
              <span
                className="size-2 rounded-full animate-pulse-glow"
                style={{ background: "var(--lime)", boxShadow: "0 0 12px var(--lime)" }}
              />
              South Africa · Open to opportunities
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Ayanda Thandiwe Buthelezi
            </h1>
            <p
              className="mt-3 font-mono text-sm font-semibold uppercase tracking-[0.22em] sm:text-base"
              style={{ color: "var(--cyan)" }}
            >
              Aspiring Cybersecurity Professional
            </p>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="mt-8 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.9rem]">
              Securing <span className="grad-text">Digital Systems</span> Through{" "}
              <span className="grad-text-lime">Continuous Learning</span> &amp; Innovation
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m an aspiring cybersecurity professional passionate about information security,
              network security, threat detection and digital defense. I continuously develop my
              technical skills through practical projects, experimentation and learning.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-cyan)]"
                style={{ backgroundImage: "var(--grad-cyan-blue)" }}
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="glass grad-border group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-magenta)]"
              >
                Contact Me
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <ul className="mt-9 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="glass grad-border flex size-12 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-foreground hover:shadow-[var(--shadow-glow-violet)]"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
