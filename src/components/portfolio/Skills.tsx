import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

type Skill = { name: string; level: string; value: number; grad: string };

const technical: Skill[] = [
  { name: "Cybersecurity Fundamentals", level: "Advanced", value: 90, grad: "var(--grad-cyan-blue)" },
  { name: "Network Security", level: "Advanced", value: 88, grad: "var(--grad-purple-magenta)" },
  { name: "Linux", level: "Advanced", value: 87, grad: "var(--grad-orange-pink)" },
  { name: "Windows Administration", level: "Intermediate", value: 68, grad: "var(--grad-blue-violet)" },
  { name: "Wireshark", level: "Advanced", value: 86, grad: "var(--grad-cyan-lime)" },
  { name: "Nmap", level: "Advanced", value: 89, grad: "var(--grad-cyan-lime)" },
  { name: "TCP/IP Networking", level: "Advanced", value: 88, grad: "var(--grad-cyan-blue)" },
  { name: "Basic Python", level: "Intermediate", value: 65, grad: "var(--grad-orange-pink)" },
  { name: "Git & GitHub", level: "Advanced", value: 85, grad: "var(--grad-blue-violet)" },
  { name: "Security Awareness", level: "Advanced", value: 90, grad: "var(--grad-purple-magenta)" },
];

const soft: Skill[] = [
  { name: "Critical Thinking", level: "Expert", value: 96, grad: "var(--grad-purple-magenta)" },
  { name: "Problem Solving", level: "Expert", value: 95, grad: "var(--grad-cyan-blue)" },
  { name: "Communication", level: "Advanced", value: 88, grad: "var(--grad-orange-pink)" },
  { name: "Teamwork", level: "Expert", value: 94, grad: "var(--grad-cyan-lime)" },
  { name: "Adaptability", level: "Advanced", value: 89, grad: "var(--grad-blue-violet)" },
  { name: "Attention to Detail", level: "Expert", value: 96, grad: "var(--grad-purple-magenta)" },
  { name: "Continuous Learning", level: "Expert", value: 97, grad: "var(--grad-cyan-lime)" },
];

function SkillList({ items, title, accent }: { items: Skill[]; title: string; accent: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass grad-border rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold" style={{ color: accent }}>
        {title}
      </h3>
      <ul className="mt-7 space-y-5">
        {items.map((s, i) => (
          <li key={s.name}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium">{s.name}</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.level}
              </span>
            </div>
            <div
              className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/8"
              role="progressbar"
              aria-label={s.name}
              aria-valuenow={s.value}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full"
                style={{
                  backgroundImage: s.grad,
                  width: on ? `${s.value}%` : "0%",
                  transition: `width 1.1s cubic-bezier(0.2,0.8,0.2,1) ${i * 80}ms`,
                  boxShadow: "0 0 14px -2px currentColor",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div className="blob right-0 top-20 size-80" style={{ background: "var(--violet)" }} />
      <div className="blob left-10 bottom-0 size-72" style={{ background: "var(--lime)", opacity: 0.25 }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "var(--violet)" }}>
            02 — Skills
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Technical &amp; <span className="grad-text">Soft Skills</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={80}>
            <SkillList items={technical} title="Technical Skills" accent="var(--cyan)" />
          </Reveal>
          <Reveal delay={160}>
            <SkillList items={soft} title="Soft Skills" accent="var(--magenta)" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
