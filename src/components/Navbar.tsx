import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Works", id: "works" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-2xl bg-[#050505]/70 border-b border-white/5" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#" className="group flex items-center gap-2" data-cursor-hover>
          <div className="font-display text-2xl tracking-[0.25em] text-white">
            SHOW<span className="text-gold">·</span>FOCUS
          </div>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-cursor-hover
              className="group relative text-xs tracking-[0.25em] text-white/70 uppercase transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          data-cursor-hover
          className="group relative hidden overflow-hidden rounded-full border border-gold px-6 py-2.5 text-xs tracking-[0.2em] text-white uppercase transition-colors md:inline-block"
        >
          <span className="relative z-10 transition-colors group-hover:text-black">Get in touch</span>
          <span className="absolute inset-0 -translate-x-full bg-[#D4AF37] transition-transform duration-500 group-hover:translate-x-0" />
        </a>
      </div>
    </motion.header>
  );
}
