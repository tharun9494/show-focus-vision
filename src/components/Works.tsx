import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const works = [
  { title: "Aurora Gala", cat: "Corporate · Mumbai", year: "2024", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200" },
  { title: "House of Veer", cat: "Royal Wedding · Udaipur", year: "2024", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" },
  { title: "Nebula Launch", cat: "Brand Reveal · Dubai", year: "2023", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" },
  { title: "Sahara Nights", cat: "Destination · Morocco", year: "2023", img: "https://images.unsplash.com/photo-1533174000223-95d10526e828?auto=format&fit=crop&q=80&w=1200" },
  { title: "Pavilion 07", cat: "Exhibition · Berlin", year: "2023", img: "https://images.unsplash.com/photo-1470229722913-7c092fb1f1dc?auto=format&fit=crop&q=80&w=1200" },
  { title: "Maison Lumière", cat: "Gala · Paris", year: "2022", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200" },
];

export function Works() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rawX = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);
  const x = useSpring(rawX, { stiffness: 100, damping: 30, restDelta: 0.001 });

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

      {/* Desktop View */}
      <div ref={ref} className="hidden md:block relative h-[120vh]">
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
                {/* Background Image Container */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 filter grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${w.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.25),transparent_60%)]" />
                </div>

                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }} />

                {/* Floating number */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="absolute top-8 right-8 font-display text-8xl text-white/20 transition-all duration-700 group-hover:text-[#FFD700]/60 group-hover:scale-110"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>

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

      {/* Mobile Carousel View */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:hidden flex snap-x snap-mandatory overflow-x-auto pb-8 px-6 gap-6 hide-scrollbar"
      >
        {works.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative h-[60vh] w-[85vw] shrink-0 snap-center overflow-hidden rounded-3xl glass-strong"
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70 filter grayscale transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${w.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            </div>

            {/* Floating number */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className="absolute top-6 right-6 font-display text-7xl text-white/20"
            >
              {String(i + 1).padStart(2, "0")}
            </motion.div>

            <div className="absolute right-0 bottom-0 left-0 p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] tracking-[0.3em] text-white/80 uppercase backdrop-blur">
                <span className="h-1 w-1 rounded-full bg-gold" />
                {w.year}
              </div>
              <h3 className="font-display text-3xl font-light text-white">{w.title}</h3>
              <p className="mt-2 text-xs tracking-[0.2em] text-white/70 uppercase">{w.cat}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
