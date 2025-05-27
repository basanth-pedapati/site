import AboutMe from "@/components/aboutme";
import ContactMe from "@/components/contactme";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center">
          <Hero />
          <section id="skills" className="w-full"><Skills /></section>
        </header>
      </div>
      <section id="projects" className="w-full bg-black py-8 sm:py-12 px-2 sm:px-0">
        <Projects />
      </section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AboutMe />
        <section id="contact" className="w-full"><ContactMe /></section>
      </div>
    </main>
  );
}