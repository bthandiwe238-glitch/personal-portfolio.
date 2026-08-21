import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Objective } from "@/components/portfolio/Objective";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Ayanda Thandiwe Buthelezi — Cybersecurity Portfolio";
const description =
  "Portfolio of Ayanda Thandiwe Buthelezi, an aspiring cybersecurity professional from South Africa specialising in network security, threat detection and digital defense.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Objective />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
