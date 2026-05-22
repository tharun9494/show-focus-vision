import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden md:block"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hovering ? 0 : 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.3 }}
      >
        <div className="h-3 w-3 rounded-full bg-white" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: pos.x - (hovering ? 30 : 20),
          y: pos.y - (hovering ? 30 : 20),
          scale: hovering ? 1 : 1,
          opacity: hovering ? 1 : 0.4,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
      >
        <div 
          className={`rounded-full transition-all duration-300 ${
            hovering 
              ? "h-[60px] w-[60px] bg-white border-none mix-blend-difference" 
              : "h-10 w-10 border border-white"
          }`} 
        />
      </motion.div>
    </>
  );
}
