import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechScroller from "@/components/TechScroller";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechScroller />
      
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  );
}


