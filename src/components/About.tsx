import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2007", title: "The Beginning", desc: "Show Focus is born from a passion for unforgettable moments — our first boutique wedding sets the tone." },
  { year: "2012", title: "Corporate Era", desc: "We design our first 5,000-guest brand launch, pioneering immersive stage technology in India." },
  { year: "2016", title: "Going Global", desc: "Destination weddings across Italy, Bali, and Dubai redefine luxury celebration." },
  { year: "2020", title: "Hybrid Spectacles", desc: "We engineer cinematic broadcast experiences with LED volumes and live mixed reality." },
  { year: "2024", title: "The New Atelier", desc: "1,200+ events delivered. A new studio, a new language of luxury — and you are part of it." },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-[#050505] py-32 md:py-48">
      <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full gradient-radial-gold blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full gradient-radial-gold blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3 text-xs tracking-[0.4em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" />
            Chapter 01 — Our Journey
          </div>
          <h2 className="font-display text-5xl leading-[1] font-light text-white md:text-7xl">
            Seventeen years of <span className="italic gradient-gold">defining moments</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-4 w-px bg-gradient-to-b from-[#D4AF37] via-[#FFD700] to-transparent md:left-1/2"
          />

          <div className="space-y-24">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.05 }}
                className={`relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="font-display text-6xl gradient-gold md:text-8xl">{m.year}</div>
                </div>
                <div className="pl-12 md:pl-0">
                  <div className="glass rounded-2xl p-8 transition-all duration-500 hover:border-gold hover:-translate-y-1 hover:glow-gold">
                    <h3 className="mb-3 font-display text-2xl text-white md:text-3xl">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-[#A0A0A0]">{m.desc}</p>
                  </div>
                </div>
                {/* dot */}
                <div className="absolute top-8 left-4 -translate-x-1/2 md:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-gold glow-gold" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
