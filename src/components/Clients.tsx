import { motion } from "framer-motion";

const clients = [
  "Khazana Jewellery",
  "Pure Platinum",
  "Vizury",
  "Navrathan",
  "HGS",
  "Neelkanth",
  "Arihant Marbles",
  "AVR Jewellers",
  "InMobi",
];

export function Clients() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-xs tracking-[0.4em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" />
            Our Clients
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-4xl leading-[1] font-light text-white md:text-5xl">
            Trusted by the <span className="italic gradient-gold">finest.</span>
          </h2>
        </motion.div>

        {/* Client Typography Grid */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 md:gap-x-24 md:gap-y-16 mt-20">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative"
            >
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-wide text-white/30 transition-colors duration-500 group-hover:text-gold cursor-default">
                {client}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
