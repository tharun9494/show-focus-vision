import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section className="relative overflow-hidden bg-[#050505] py-32 md:py-48" ref={containerRef}>
      <div className="mx-auto mb-20 max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-xs tracking-[0.4em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" />
            The Archive
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-4xl leading-[1] font-light text-white md:text-6xl">
            Moments set in <span className="italic gradient-gold">stone.</span>
          </h2>
        </motion.div>
      </div>

      {/* Desktop Masonry */}
      <div className="hidden md:flex mx-auto max-w-[1400px] justify-center gap-4 px-6 md:gap-8 md:px-10">
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 pt-20">
          <div className="group relative overflow-hidden rounded-2xl glass-strong">
            <img src={images[0]} className="h-[300px] w-full object-cover transition-transform duration-1000 group-hover:scale-110 md:h-[400px] filter grayscale hover:grayscale-0" alt="Gallery" />
          </div>
          <div className="group relative overflow-hidden rounded-2xl glass-strong">
            <img src={images[1]} className="h-[400px] w-full object-cover transition-transform duration-1000 group-hover:scale-110 md:h-[500px] filter grayscale hover:grayscale-0" alt="Gallery" />
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8">
          <div className="group relative overflow-hidden rounded-2xl glass-strong">
            <img src={images[2]} className="h-[400px] w-full object-cover transition-transform duration-1000 group-hover:scale-110 md:h-[600px] filter grayscale hover:grayscale-0" alt="Gallery" />
          </div>
          <div className="group relative overflow-hidden rounded-2xl glass-strong">
            <img src={images[3]} className="h-[300px] w-full object-cover transition-transform duration-1000 group-hover:scale-110 md:h-[400px] filter grayscale hover:grayscale-0" alt="Gallery" />
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="hidden flex-col gap-8 md:flex pt-40">
          <div className="group relative overflow-hidden rounded-2xl glass-strong">
            <img src={images[4]} className="h-[350px] w-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale hover:grayscale-0" alt="Gallery" />
          </div>
          <div className="group relative overflow-hidden rounded-2xl glass-strong">
            <img src={images[5]} className="h-[450px] w-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale hover:grayscale-0" alt="Gallery" />
          </div>
        </motion.div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex snap-x snap-mandatory overflow-x-auto pb-8 px-6 gap-4 hide-scrollbar relative z-20">
        {images.map((img, i) => (
          <div key={i} className="w-[85vw] shrink-0 snap-center">
            <div className="group relative overflow-hidden rounded-2xl glass-strong shadow-2xl">
              <img src={img} className="h-[400px] w-full object-cover filter grayscale" alt={`Gallery item ${i}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10" />
    </section>
  );
}
