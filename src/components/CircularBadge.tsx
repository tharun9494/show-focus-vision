import { motion } from "framer-motion";

export function CircularBadge() {
  const text = "LUXURY EVENT ATELIER • EST. 2007 • ";
  const characters = text.split("");
  const radius = 50;

  return (
    <div className="fixed bottom-10 right-10 z-50 mix-blend-difference pointer-events-none hidden md:block">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full"
      >
        <div className="absolute text-[#D4AF37]">
          {/* A central diamond/star */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
        
        {characters.map((char, i) => {
          const rotation = (i * 360) / characters.length;
          return (
            <span
              key={i}
              className="absolute font-display text-[10px] font-bold tracking-[0.2em] text-white"
              style={{
                transform: `rotate(${rotation}deg) translateY(-${radius}px)`,
                transformOrigin: "center center",
              }}
            >
              {char}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}
