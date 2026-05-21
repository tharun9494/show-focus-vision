import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    n: "01",
    title: "Event Management",
    tag: "Concerts · Gala · Brand Launches",
    desc: "Concert-grade stages, programmable kinetic lights, LED volumes and crowd choreography that turn brand moments into cinema.",
    accent: "from-amber-400/30 via-yellow-500/10 to-transparent",
  },
  {
    n: "02",
    title: "Wedding Planning",
    tag: "Destination · Royal · Intimate",
    desc: "Cinematic mandaps, candle-lit florals, golden hour rituals — bespoke celebrations crafted as heirlooms.",
    accent: "from-rose-300/20 via-amber-300/10 to-transparent",
  },
  {
    n: "03",
    title: "Corporate Gifting",
    tag: "Curated · Custom · Couture",
    desc: "Artisan-finished gift suites, micro-collections and presentation rituals designed for boards, clients and partners.",
    accent: "from-yellow-400/25 via-amber-400/10 to-transparent",
  },
  {
    n: "04",
    title: "Exhibition Stalls",
    tag: "Immersive · Modular · 3D",
    desc: "Futuristic booth architecture with rotating product theatres, projection mapping and journey-driven brand storytelling.",
    accent: "from-orange-400/25 via-amber-500/10 to-transparent",
  },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative overflow-hidden bg-[#050505] py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-xs tracking-[0.4em] text-gold uppercase">
              <span className="h-px w-10 bg-gold" />
              Chapter 02 — Practices
            </div>
            <h2 className="font-display text-5xl leading-[1] font-light text-white md:text-7xl">
              Four worlds. <span className="italic gradient-gold">One obsession.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#A0A0A0]">
            Every service is an entirely choreographed world — designed, lit and directed by an in-house atelier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              data-cursor-hover
              className="group relative overflow-hidden rounded-3xl glass p-10 transition-all duration-700 hover:-translate-y-2 md:p-12"
              style={{ minHeight: 380 }}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
              />
              <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#D4AF37]/0 blur-3xl transition-all duration-700 group-hover:bg-[#D4AF37]/30" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-display text-7xl text-white/10 transition-colors duration-500 group-hover:text-[#D4AF37]/40">
                    {s.n}
                  </span>
                  <motion.div
                    animate={{ rotate: hovered === i ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white group-hover:border-gold group-hover:text-gold"
                  >
                    →
                  </motion.div>
                </div>

                <div className="mt-16">
                  <div className="mb-2 text-[10px] tracking-[0.4em] text-gold uppercase">{s.tag}</div>
                  <h3 className="mb-4 font-display text-4xl font-light text-white md:text-5xl">
                    {s.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-[#A0A0A0]">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
