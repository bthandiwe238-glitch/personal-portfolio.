import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const cards = [
  {
    label: "Email",
    value: "bthandiwe238@gmail.com",
    href: "mailto:bthandiwe238@gmail.com",
    Icon: Mail,
    grad: "var(--grad-cyan-blue)",
    color: "var(--cyan)",
  },
  {
    label: "GitHub",
    value: "ayandabuthelezi",
    href: "https://github.com/ayandabuthelezi",
    Icon: Github,
    grad: "var(--grad-purple-magenta)",
    color: "var(--violet)",
  },
  {
    label: "LinkedIn",
    value: "ayandabuthelezi",
    href: "https://linkedin.com/in/ayandabuthelezi",
    Icon: Linkedin,
    grad: "var(--grad-blue-violet)",
    color: "var(--blue)",
  },
  {
    label: "Location",
    value: "South Africa",
    href: null,
    Icon: MapPin,
    grad: "var(--grad-orange-pink)",
    color: "var(--orange)",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:bthandiwe238@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  }

  const field =
    "w-full rounded-xl border border-input bg-white/5 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-transparent focus:ring-2 focus:ring-ring";

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="blob left-0 bottom-10 size-80" style={{ background: "var(--violet)" }} />
      <div className="blob right-0 top-10 size-72" style={{ background: "var(--cyan)", opacity: 0.4 }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "var(--magenta)" }}>
            06 — Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Get In <span className="grad-text">Touch</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Have an opportunity or just want to connect? My inbox is always open.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((c, i) => {
              const inner = (
                <>
                  <span
                    className="flex size-11 items-center justify-center rounded-xl"
                    style={{ backgroundImage: c.grad, boxShadow: `0 0 24px -8px ${c.color}` }}
                  >
                    <c.Icon className="size-5" style={{ color: "#07152B" }} />
                  </span>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-1 break-all text-sm font-semibold" style={{ color: c.color }}>
                    {c.value}
                  </p>
                </>
              );
              return (
                <Reveal key={c.label} delay={i * 80}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="glass grad-border lift block h-full rounded-3xl p-6"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="glass grad-border lift h-full rounded-3xl p-6">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={140}>
            <form onSubmit={onSubmit} className="glass grad-border h-full rounded-3xl p-7 sm:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity…"
                    className={`${field} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold text-[#07152B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-cyan)]"
                  style={{ backgroundImage: "var(--grad-brand)" }}
                >
                  <Send className="size-4" />
                  Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row lg:px-8">
        <p>
          Ayanda<span className="grad-text font-bold">.</span> — Aspiring Cybersecurity Professional
        </p>
        <p>© {new Date().getFullYear()} Ayanda Thandiwe Buthelezi · South Africa</p>
      </div>
    </footer>
  );
}
