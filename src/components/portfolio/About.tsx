import { ShieldCheck, Radar, GraduationCap, Lock } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    title: "Information Security",
    Icon: ShieldCheck,
    color: "var(--cyan)",
    grad: "var(--grad-cyan-blue)",
    text: "Protecting data confidentiality, integrity and availability across systems.",
  },
  {
    title: "Threat Detection",
    Icon: Radar,
    color: "var(--violet)",
    grad: "var(--grad-blue-violet)",
    text: "Spotting suspicious activity, analysing traffic and responding fast.",
  },
  {
    title: "Continuous Learning",
    Icon: GraduationCap,
    color: "var(--orange)",
    grad: "var(--grad-orange-pink)",
    text: "Labs, certifications and hands-on experimentation, every single week.",
  },
  {
    title: "Digital Defense",
    Icon: Lock,
    color: "var(--magenta)",
    grad: "var(--grad-purple-magenta)",
    text: "Hardening networks and endpoints against modern attack techniques.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="blob left-[-6rem] top-24 size-80" style={{ background: "var(--cyan)" }} />
      <div className="blob right-[-8rem] bottom-10 size-96" style={{ background: "var(--magenta)" }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "var(--cyan)" }}>
            01 — About
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Who <span className="grad-text">I Am</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={80}>
            <div className="glass grad-border rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold">Ayanda Thandiwe Buthelezi</h3>
              <p className="mt-2 font-mono text-sm uppercase tracking-widest" style={{ color: "var(--magenta)" }}>
                Aspiring Cybersecurity Professional
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                I am an aspiring Cybersecurity Professional with a strong interest in information
                security, network security, and digital defense. I am passionate about learning new
                technologies, identifying security risks, and helping organizations protect their
                digital assets. My goal is to build a successful career in cybersecurity through
                continuous learning and practical experience.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {[
                  ["3+", "Projects", "var(--cyan)"],
                  ["2", "Certifications", "var(--violet)"],
                  ["17", "Skills", "var(--orange)"],
                ].map(([n, l, c]) => (
                  <div key={l} className="rounded-2xl border border-border/60 bg-white/5 py-4">
                    <div className="font-display text-2xl font-bold" style={{ color: c }}>
                      {n}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={120 + i * 80}>
                <article className="glass grad-border lift group h-full rounded-3xl p-6">
                  <span
                    className="flex size-12 items-center justify-center rounded-2xl transition-shadow duration-300"
                    style={{
                      backgroundImage: c.grad,
                      boxShadow: `0 0 26px -6px ${c.color}`,
                    }}
                  >
                    <c.Icon className="size-6" style={{ color: "#07152B" }} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold" style={{ color: c.color }}>
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
