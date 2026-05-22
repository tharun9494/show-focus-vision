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
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full gradient-radial-gold blur-3xl" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full gradient-radial-gold blur-3xl" 
      />

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
          <h2 className="font-display text-4xl leading-[1.1] font-light text-white md:text-6xl">
            We love to put up a grandeur Show that is never out of <span className="italic gradient-gold">Focus.</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-[#A0A0A0] md:text-lg">
            It all began 12 years ago with our insane passion and obsession towards planning an event down to last detail and framing an occasion that speaks of flair and poise. Show Focus having a global experience operates with a core objective of offering a new dimension to organizing an event that depicts the essential values and integrity of a brand. From ideation to delivery, we constantly reform, learn and explore new and novel approaches to bring out the best experiences that magnify engagement and hold your audience spellbound.
          </p>
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

        {/* Founders Section */}
        <div className="mt-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mb-20 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3 text-xs tracking-[0.4em] text-gold uppercase">
              <span className="h-px w-10 bg-gold" />
              The Visionaries
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-4xl leading-[1] font-light text-white md:text-6xl">
              Meet the <span className="italic gradient-gold">Founders</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#A0A0A0]">
              Our experienced team of professionals love to hear your requirements and deliver absolute perfection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 mt-16">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative flex flex-col gap-8 rounded-3xl glass p-8 transition-all duration-700 hover:border-gold md:flex-row md:items-start md:p-10"
            >
              <div className="shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-32 w-32 overflow-hidden rounded-full border border-white/10 transition-colors duration-500 group-hover:border-gold"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=300" 
                    alt="Rinku Bhansali"
                    className="h-full w-full object-cover object-center filter grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-3xl text-white">Rinku Bhansali</h3>
                <div className="mb-4 text-[10px] tracking-[0.3em] text-gold uppercase">Co-Founder & Director</div>
                <p className="mb-6 text-sm leading-relaxed text-[#A0A0A0]">
                  With over a decade of pioneering experience in luxury event curation, Rinku is the visionary architect behind some of the world's most exclusive celebrations. Known for an uncompromising eye for detail and a mastery of cinematic aesthetics, Rinku ensures every concept transitions flawlessly from imagination to reality, redefining the global standard for high-end experiences.
                </p>

                <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                  <a href="tel:+919620553355" className="flex items-center gap-3 group/link">
                    <div className="text-gold transition-transform group-hover/link:scale-110">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <span className="text-xs font-medium tracking-wider text-[#A0A0A0] transition-colors group-hover/link:text-white">+91-962-055-3355</span>
                  </a>
                  <a href="mailto:rinkum@showfocus.in" className="flex items-center gap-3 group/link">
                    <div className="text-gold transition-transform group-hover/link:scale-110">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <span className="text-xs font-medium tracking-wider text-[#A0A0A0] transition-colors group-hover/link:text-white">rinkum@showfocus.in</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative flex flex-col gap-8 rounded-3xl glass p-8 transition-all duration-700 hover:border-gold md:flex-row md:items-start md:p-10"
            >
              <div className="shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-32 w-32 overflow-hidden rounded-full border border-white/10 transition-colors duration-500 group-hover:border-gold"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" 
                    alt="Mahaveer Bhansali"
                    className="h-full w-full object-cover object-center filter grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-3xl text-white">Mahaveer Bhansali</h3>
                <div className="mb-4 text-[10px] tracking-[0.3em] text-gold uppercase">Co-Founder & Operations</div>
                <p className="mb-6 text-sm leading-relaxed text-[#A0A0A0]">
                  Mahaveer is the operational powerhouse behind Show Focus, transforming grand concepts into seamless executions. His deep expertise in large-scale logistics, global vendor networks, and technical orchestration ensures that every event, no matter how complex or remote, is delivered with absolute precision and grace.
                </p>

                <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                  <a href="tel:+919886889485" className="flex items-center gap-3 group/link">
                    <div className="text-gold transition-transform group-hover/link:scale-110">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <span className="text-xs font-medium tracking-wider text-[#A0A0A0] transition-colors group-hover/link:text-white">+91-988-688-9485</span>
                  </a>
                  <a href="mailto:mahaveerb@showfocus.in" className="flex items-center gap-3 group/link">
                    <div className="text-gold transition-transform group-hover/link:scale-110">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <span className="text-xs font-medium tracking-wider text-[#A0A0A0] transition-colors group-hover/link:text-white">mahaveerb@showfocus.in</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
