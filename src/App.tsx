import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Works } from "@/components/Works";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { MiracleMarquee } from "@/components/MiracleMarquee";
import { CircularBadge } from "@/components/CircularBadge";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <main className="relative bg-[#050505] text-white">
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none" />
      <LoadingScreen />
      <CustomCursor />
      <CircularBadge />
      <Navbar />
      <Hero />
      <About />
      <MiracleMarquee />
      <Services />
      <Works />
      <Gallery />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
