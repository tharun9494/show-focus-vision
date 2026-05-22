import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MiracleMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Moves right to left
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  // Moves left to right
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center overflow-hidden bg-[#050505] py-24">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
        <h2 className="font-display text-[10vw] font-bold tracking-tighter text-transparent" style={{ WebkitTextStroke: "2px rgba(255,215,0,0.3)" }}>
          WE ENGINEER MIRACLES · WE ENGINEER MIRACLES · WE ENGINEER MIRACLES · WE ENGINEER MIRACLES · 
        </h2>
      </motion.div>

      <motion.div style={{ x: x2 }} className="flex whitespace-nowrap mt-4">
        <h2 className="font-display text-[10vw] font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
          BEYOND IMAGINATION · BEYOND IMAGINATION · BEYOND IMAGINATION · BEYOND IMAGINATION · 
        </h2>
      </motion.div>
    </section>
  );
}
