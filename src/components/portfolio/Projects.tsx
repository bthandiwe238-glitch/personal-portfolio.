import { Github, LayoutDashboard, ShieldAlert, Network, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    num: "01",
    title: "Horizon Dashboard",
    desc: "A modern analytics dashboard built with React and Tailwind CSS featuring responsive layouts, data visualization and user-friendly navigation.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    href: "https://github.com/ayandabuthelezi/horizon-dashboard",
    Icon: LayoutDashboard,
    grad: "var(--grad-cyan-blue)",
    color: "var(--cyan)",
    glow: "var(--shadow-glow-cyan)",
  },
  {
    num: "02",
    title: "Cybersecurity Awareness Website",
    desc: "An educational website designed to teach users about online safety, phishing attacks, password security and cybersecurity best practices.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/ayandabuthelezi/cyber-awareness",
    Icon: ShieldAlert,
    grad: "var(--grad-purple-magenta)",
    color: "var(--magenta)",
    glow: "var(--shadow-glow-magenta)",
  },
  {
    num: "03",
    title: "Network Scanning Lab",
    desc: "A cybersecurity lab project using Nmap to discover devices, identify open ports and analyze network security.",
    tags: ["Nmap", "Linux", "Networking"],
    href: "https://github.com/ayandabuthelezi/network-scanning-lab",
    Icon: Network,
    grad: "var(--grad-cyan-lime)",
    color: "var(--lime)",
    glow: "0 0 44px -8px color-mix(in oklab, var(--lime) 60%, transparent)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <div className="blob left-1/3 top-0 size-96" style={{ background: "var(--blue)" }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "var(--lime)" }}>
            03 — Projects
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Featured <span className="grad-text">Work</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.num} delay={i * 100}>
              <article
                className="glass grad-border lift group relative flex h-full flex-col overflow-hidden rounded-3xl p-7"
                style={{ ["--tw-shadow" as string]: p.glow }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = p.glow)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ backgroundImage: p.grad }}
                />
                <div className="flex items-start justify-between">
                  <span
                    className="font-display text-5xl font-bold leading-none opacity-70"
                    style={{
                      backgroundImage: p.grad,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {p.num}
                  </span>
                  <span
                    className="flex size-14 items-center justify-center rounded-2xl"
                    style={{ backgroundImage: p.grad, boxShadow: `0 0 30px -8px ${p.color}` }}
                  >
                    <p.Icon className="size-7" style={{ color: "#07152B" }} />
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-white/5 px-3 py-1 font-mono text-[11px] tracking-wide"
                      style={{ color: p.color }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[#07152B] transition-transform duration-300 hover:scale-[1.02]"
                  style={{ backgroundImage: p.grad }}
                >
                  <Github className="size-4" /> View on GitHub
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
