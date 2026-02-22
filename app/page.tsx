import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080c] text-white relative overflow-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,#1e1b4b_0%,transparent_40%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#172554_0%,transparent_40%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#08080c_70%)] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
