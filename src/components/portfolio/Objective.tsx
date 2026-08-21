import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Objective() {
  return (
    <section className="relative px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-24"
            style={{
              backgroundImage:
                "linear-gradient(120deg, var(--darkpurple), var(--purple) 22%, var(--blue) 62%, var(--cyan))",
              backgroundSize: "200% 200%",
              animation: "gradient-pan 12s ease infinite",
            }}
          >
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
            <div
              className="blob left-10 top-6 size-56"
              style={{ background: "var(--magenta)", opacity: 0.5 }}
            />
            <div
              className="blob bottom-0 right-8 size-56"
              style={{ background: "var(--lime)", opacity: 0.35 }}
            />

            <div className="relative mx-auto max-w-3xl">
              <h2 className="font-display text-4xl font-bold leading-tight text-[#07152B] sm:text-6xl">
                Ready to Learn.
                <br />
                Ready to Contribute.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#07152B]/80 sm:text-lg">
                Currently seeking internship, learnership and entry-level opportunities in
                Cybersecurity where I can apply my technical knowledge, gain practical experience and
                contribute to securing digital environments.
              </p>
              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-[#07152B] px-8 py-4 font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)]"
              >
                Let&apos;s Connect
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
