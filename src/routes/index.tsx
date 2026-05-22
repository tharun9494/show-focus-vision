import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Show Focus — Luxury Event Experiences" },
      {
        name: "description",
        content:
          "Show Focus is a luxury event atelier crafting cinematic weddings, brand spectacles, gala nights and immersive exhibitions worldwide.",
      },
      { property: "og:title", content: "Show Focus — Luxury Event Experiences" },
      {
        property: "og:description",
        content: "We don't organize events. We create experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
