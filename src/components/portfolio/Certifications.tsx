import { BadgeCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const certs = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Completed 2026",
    Icon: BadgeCheck,
    grad: "var(--grad-cyan-blue)",
    color: "var(--cyan)",
  },
  {
    title: "AI Skills Acceleration",
    issuer: "CAPACITI",
    date: "Completed 2026",
    Icon: Sparkles,
    grad: "var(--grad-purple-magenta)",
    color: "var(--magenta)",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-24 sm:py-32">
      <div className="blob left-0 top-10 size-80" style={{ background: "var(--cyan)", opacity: 0.35 }} />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "var(--cyan)" }}>
            05 — Certifications
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Professional <span className="grad-text">Certifications</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="glass grad-border lift relative overflow-hidden rounded-3xl p-7">
                <div
                  className="grid-lines pointer-events-none absolute inset-0 opacity-20"
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between">
                  <span
                    className="flex size-14 items-center justify-center rounded-2xl"
                    style={{ backgroundImage: c.grad, boxShadow: `0 0 30px -8px ${c.color}` }}
                  >
                    <c.Icon className="size-7" style={{ color: "#07152B" }} />
                  </span>
                  <span
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px]"
                    style={{ color: c.color }}
                  >
                    {c.date}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-bold">{c.title}</h3>
                <p className="relative mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <div
                  className="relative mt-6 h-1 w-full rounded-full"
                  style={{ backgroundImage: c.grad }}
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
