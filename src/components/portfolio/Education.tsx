import { Reveal } from "./Reveal";

const items = [
  {
    title: "Advanced Diploma in Fine Arts — Digital Arts Major",
    period: "2026 — Present",
    place: "Vaal University of Technology",
    desc: "Focused on digital art, visual design, multimedia and creative technologies, developing advanced skills in digital content creation, artistic innovation and visual communication.",
    color: "var(--cyan)",
    grad: "var(--grad-cyan-blue)",
  },
  {
    title: "Diploma in Fine Arts — Digital Arts Major",
    period: "2023 — 2025",
    place: "Vaal University of Technology",
    desc: "Focused on digital art, visual design, multimedia and creative technologies, developing advanced skills in digital content creation, artistic innovation and visual communication.",
    color: "var(--violet)",
    grad: "var(--grad-purple-magenta)",
  },
  {
    title: "National Senior Certificate",
    period: "2021",
    place: "Tshepo-Themba Secondary School",
    desc: "Completed with a focus on Mathematics and Physical Sciences.",
    color: "var(--orange)",
    grad: "var(--grad-orange-pink)",
  },
];

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 sm:py-32">
      <div className="blob right-0 top-1/3 size-80" style={{ background: "var(--orange)", opacity: 0.35 }} />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "var(--orange)" }}>
            04 — Education
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Academic <span className="grad-text">Journey</span>
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-8 pl-10 sm:pl-14">
          <span
            className="absolute left-[13px] top-2 h-[calc(100%-1rem)] w-[2px] rounded-full sm:left-[21px]"
            style={{ backgroundImage: "linear-gradient(var(--cyan), var(--violet), var(--orange))" }}
            aria-hidden="true"
          />
          {items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i * 100}>
              <span
                className="absolute -left-[26px] mt-6 flex size-4 items-center justify-center rounded-full sm:-left-[34px]"
                style={{ backgroundImage: it.grad, boxShadow: `0 0 18px 2px ${it.color}` }}
                aria-hidden="true"
              />
              <div className="glass grad-border lift rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 font-mono text-[11px] font-semibold text-[#07152B]"
                    style={{ backgroundImage: it.grad }}
                  >
                    {it.period}
                  </span>
                  <span className="text-sm text-muted-foreground">{it.place}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold" style={{ color: it.color }}>
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
