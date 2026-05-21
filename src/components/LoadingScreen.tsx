import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 12;
        if (next >= 100) {
          clearInterval(i);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return next;
      });
    }, 90);
    return () => clearInterval(i);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#050505]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 text-center"
          >
            <div className="font-display text-5xl md:text-7xl tracking-[0.3em] text-white">
              SHOW <span className="gradient-gold">FOCUS</span>
            </div>
            <div className="mt-3 text-xs tracking-[0.5em] text-[#A0A0A0]">LUXURY EXPERIENCES</div>
          </motion.div>
          <div className="h-px w-64 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 font-mono text-xs tracking-widest text-[#D4AF37]">
            {Math.floor(progress).toString().padStart(3, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
