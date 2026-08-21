import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass grad-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]" : ""
        } mx-3 lg:mx-auto`}
      >
        <a href="#top" className="font-display text-xl font-bold tracking-tight">
          Ayanda<span className="grad-text text-2xl">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow-cyan)] sm:inline-flex"
            style={{ backgroundImage: "var(--grad-cyan-blue)" }}
          >
            Let&apos;s Connect <ArrowRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="glass inline-flex size-10 items-center justify-center rounded-xl lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-3 overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "mt-2 max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="glass grad-border rounded-2xl p-3">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="p-1">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--grad-cyan-blue)" }}
            >
              Let&apos;s Connect <ArrowRight className="size-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
