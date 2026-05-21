import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Works } from "@/components/Works";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
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
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
