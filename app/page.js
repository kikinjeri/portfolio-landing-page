import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechScroller from "@/components/TechScroller";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-root">
      <Navbar />
      <main>
        <Hero />
        <TechScroller />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

