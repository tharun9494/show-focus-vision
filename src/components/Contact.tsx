import { motion } from "framer-motion";

const branches = [
  { city: "Mumbai", x: "52%", y: "55%", delay: 0 },
  { city: "Delhi", x: "47%", y: "38%", delay: 0.4 },
  { city: "Bengaluru", x: "50%", y: "70%", delay: 0.8 },
  { city: "Hyderabad", x: "53%", y: "62%", delay: 1.2 },
  { city: "Goa", x: "45%", y: "63%", delay: 1.6 },
  { city: "Udaipur", x: "44%", y: "47%", delay: 2.0 },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#050505] py-32 md:py-48">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3 text-xs tracking-[0.4em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" />
            Chapter 05 — Begin
          </div>
          <h2 className="font-display text-5xl leading-[1] font-light text-white md:text-7xl">
            Let's design a <span className="italic gradient-gold">moment</span> the world remembers.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl glass-strong p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(212,175,55,0.15),transparent_60%)]" />
            <div className="relative h-full w-full">
              {/* Stylized India outline */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M45,25 Q42,30 44,35 L40,38 Q38,42 42,46 L38,50 Q36,55 40,58 L42,62 Q40,68 44,72 L48,78 Q52,80 54,76 L58,72 Q60,68 58,64 L60,58 Q62,52 58,48 L60,42 Q58,38 54,36 L56,30 Q52,26 48,26 Z"
                  fill="url(#goldGrad)"
                  stroke="#D4AF37"
                  strokeWidth="0.3"
                  opacity="0.4"
                />
                {/* Grid */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="rgba(255,255,255,0.04)" strokeWidth="0.1" />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="0.1" />
                ))}
              </svg>

              {/* Pins */}
              {branches.map((b) => (
                <div
                  key={b.city}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: b.x, top: b.y }}
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: b.delay }}
                      className="absolute inset-0 h-3 w-3 rounded-full bg-[#FFD700]"
                    />
                    <div className="relative h-3 w-3 rounded-full bg-[#FFD700] glow-gold" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-[0.2em] text-white/80 uppercase">
                      {b.city}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs">
              <div>
                <div className="tracking-[0.3em] text-gold uppercase">Studios</div>
                <div className="mt-1 font-display text-3xl text-white">06 Cities</div>
              </div>
              <div className="text-right text-[10px] tracking-[0.3em] text-white/40 uppercase">
                India · UAE · Italy
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-strong rounded-3xl p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: "Your name", type: "text", placeholder: "Aanya Mehra" },
                { label: "Email", type: "email", placeholder: "aanya@example.com" },
                { label: "Event type", type: "text", placeholder: "Wedding · Gala · Launch…" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="mb-2 block text-[10px] tracking-[0.3em] text-gold uppercase">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    data-cursor-hover
                    className="w-full border-b border-white/15 bg-transparent pb-3 text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold"
                  />
                </div>
              ))}
              <div>
                <label className="mb-2 block text-[10px] tracking-[0.3em] text-gold uppercase">
                  Tell us about your vision
                </label>
                <textarea
                  rows={4}
                  placeholder="A starlit gala in Udaipur for 400 guests…"
                  data-cursor-hover
                  className="w-full resize-none border-b border-white/15 bg-transparent pb-3 text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold"
                />
              </div>
              <button
                type="submit"
                data-cursor-hover
                className="group relative mt-6 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gold py-4 text-xs font-medium tracking-[0.3em] text-black uppercase transition-transform hover:scale-[1.02]"
              >
                <span className="relative z-10">Begin the conversation</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 text-xs">
              <div>
                <div className="mb-1 tracking-[0.3em] text-gold uppercase">Studio</div>
                <div className="text-white">hello@showfocus.com</div>
              </div>
              <div>
                <div className="mb-1 tracking-[0.3em] text-gold uppercase">Press</div>
                <div className="text-white">press@showfocus.com</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
