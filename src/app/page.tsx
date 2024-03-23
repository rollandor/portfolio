import About from "@/src/components/about";
import Contact from "@/src/components/contact";
import Experience from "@/src/components/experience";
import Intro from "@/src/components/intro";
import Projects from "@/src/components/projects";
import SectionDivider from "@/src/components/section-divider";
import Skills from "@/src/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
