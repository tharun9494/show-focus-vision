import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const works = [
  { title: "Aurora Gala", cat: "Corporate · Mumbai", year: "2024", hue: "from-amber-500/40 to-rose-500/30" },
  { title: "House of Veer", cat: "Royal Wedding · Udaipur", year: "2024", hue: "from-yellow-400/40 to-orange-500/30" },
  { title: "Nebula Launch", cat: "Brand Reveal · Dubai", year: "2023", hue: "from-yellow-300/40 to-amber-700/30" },
  { title: "Sahara Nights", cat: "Destination · Morocco", year: "2023", hue: "from-orange-400/40 to-red-600/30" },
  { title: "Pavilion 07", cat: "Exhibition · Berlin", year: "2023", hue: "from-amber-300/40 to-yellow-700/30" },
  { title: "Maison Lumière", cat: "Gala · Paris", year: "2022", hue: "from-rose-300/40 to-amber-500/30" },
];

export function Works() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  return (
    <section id="works" className="relative overflow-hidden bg-[#050505] py-32 md:py-48">
      <div className="mx-auto mb-20 max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs tracking-[0.4em] text-gold uppercase">
              <span className="h-px w-10 bg-gold" />
              Chapter 03 — Selected Works
            </div>
            <h2 className="font-display text-5xl leading-[1] font-light text-white md:text-7xl">
              A reel of <span className="italic gradient-gold">moments.</span>
            </h2>
          </div>
          <span className="text-xs tracking-[0.3em] text-[#A0A0A0] uppercase">1,200+ events · 38 countries</span>
        </motion.div>
      </div>

      <div ref={ref} className="relative h-[120vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-10">
            {works.map((w, i) => (
              <motion.div
                key={w.title}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5 }}
                data-cursor-hover
                className="group relative h-[70vh] w-[80vw] max-w-[520px] shrink-0 overflow-hidden rounded-3xl glass-strong"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${w.hue} opacity-80`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.25),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }} />

                {/* Floating number */}
                <div className="absolute top-8 right-8 font-display text-8xl text-white/20 transition-all duration-700 group-hover:text-[#FFD700]/60 group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="absolute right-0 bottom-0 left-0 p-8 md:p-10">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] tracking-[0.3em] text-white/80 uppercase backdrop-blur">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {w.year}
                  </div>
                  <h3 className="font-display text-4xl font-light text-white md:text-5xl">{w.title}</h3>
                  <p className="mt-2 text-xs tracking-[0.2em] text-white/70 uppercase">{w.cat}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.3em] text-gold uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    View case study <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
