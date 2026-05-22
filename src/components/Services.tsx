import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    n: "01",
    title: "Event Management",
    tag: "Corporate · Personal · Entertainment",
    desc: "It’s our passion that steers us to put gallant efforts in delivering ultimate bespoke events blended with extensive planning and focussed attention. We plan, manage & exquisitely execute corporate, personal & entertainment events with masterly finesse and industrious approach.",
    accent: "from-amber-400/30 via-yellow-500/10 to-transparent",
  },
  {
    n: "02",
    title: "Wedding Planning",
    tag: "Graceful · Illustrious · Unique",
    desc: "We strongly believe that every wedding is connected with a beautiful and unique story and substantial feelings and emotions. In consonance with our belief, we plan and create weddings that unfold into graceful ceremonies creating illustrious memories.",
    accent: "from-rose-300/20 via-amber-300/10 to-transparent",
  },
  {
    n: "03",
    title: "Gift Items",
    tag: "Corporate · Priceless · Optimal",
    desc: "Being the paramount part of corporate culture, gifts are meant to assert priceless relationships and deepen personal connections between clients, customers, and employees. We have partnered with some of the most recognized brands to provide optimal gifting solutions.",
    accent: "from-yellow-400/25 via-amber-400/10 to-transparent",
  },
  {
    n: "04",
    title: "Exhibition Stalls",
    tag: "Design · Production · Engaging",
    desc: "Backed by an efficient design team and a competitive production team, our exhibiting solutions are unparalleled in quality for building the considerable and top-grade exhibits, ensuring you have an elated brand engaging experience.",
    accent: "from-orange-400/25 via-amber-500/10 to-transparent",
  },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: i * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor-hover
      className="group relative overflow-hidden rounded-3xl glass p-10 transition-all duration-700 hover:-translate-y-2 md:p-12"
      style={{ minHeight: 380 }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
      />
      <motion.div 
        animate={{ scale: hovered ? 1.2 : 1, opacity: hovered ? 0.3 : 0 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#D4AF37] blur-3xl" 
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="font-display text-7xl text-white/10 transition-colors duration-500 group-hover:text-[#D4AF37]/40">
            {s.n}
          </span>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0 }}
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
  );
}

export function Services() {
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
              Exemplary skills. <span className="italic gradient-gold">Transformative events.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#A0A0A0]">
            Ever since its inception in 2007, Show Focus has been a name, synonymic with creativity, ingenuity, savvy, and elegancy. Over the years Show Focus has achieved exemplary skills of developing ideas and transforming them into events that have proved successful in enhancing the brand value of the clients and companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
