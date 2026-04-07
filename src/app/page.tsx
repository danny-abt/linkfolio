import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Contact />
      </main>
      <footer className="py-8 px-6 border-t border-card-border text-center text-muted text-sm">
        <p>
          &copy; {new Date().getFullYear()} Danny Emmanuel Aboutou. Construit
          avec Next.js, Tailwind CSS & Framer Motion.
        </p>
      </footer>
    </>
  );
}
