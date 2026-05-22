import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Show Focus didn't deliver an event — they delivered a memory our family will carry for generations.",
    name: "Aanya & Vikram Singh",
    role: "Private Wedding · Udaipur",
  },
  {
    quote: "The most ambitious brand experience we've ever commissioned. Every detail felt directed by a filmmaker.",
    name: "Priya Menon",
    role: "CMO · Nebula Group",
  },
  {
    quote: "A team that thinks in cinema. They turned a product launch into something that genuinely moved people.",
    name: "Daniel Roth",
    role: "VP Global Marketing · Maison Lumière",
  },
  {
    quote: "Flawless choreography, breathtaking design, zero compromise. World-class in every sense.",
    name: "Rohan Kapoor",
    role: "Founder · Aurora Capital",
  },
];

const logos = ["NEBULA", "AURORA", "MAISON", "LUMIÈRE", "VEER", "PAVILION 07", "SAHARA", "ATELIER 21"];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#050505] py-32 md:py-48">
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full gradient-radial-gold blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-xs tracking-[0.4em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" />
            Chapter 04 — Voices
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-5xl leading-[1] font-light text-white md:text-7xl">
            Words from the <span className="italic gradient-gold">people we honour.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              data-cursor-hover
              className="group relative overflow-hidden rounded-3xl glass p-10 transition-all duration-500 hover:border-gold"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                className="h-full w-full"
              >
                <div className="absolute -top-6 -left-2 font-display text-[180px] leading-none text-[#D4AF37]/10 transition-colors duration-500 group-hover:text-[#D4AF37]/25">
                  "
                </div>
                <div className="relative z-10">
                  <p className="font-display text-2xl leading-snug text-white md:text-3xl">
                    {t.quote}
                  </p>
                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7a6019] glow-gold" />
                    <div>
                      <div className="text-sm font-medium text-white">{t.name}</div>
                      <div className="mt-0.5 text-xs tracking-[0.2em] text-[#A0A0A0] uppercase">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Logo marquee */}
        <div className="relative mt-24 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-[#050505] to-transparent" />
          <div className="flex animate-marquee gap-20 whitespace-nowrap hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-3xl tracking-[0.3em] text-white/30 transition-colors hover:text-gold md:text-4xl"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
