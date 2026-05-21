export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505] py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="font-display text-3xl tracking-[0.25em] text-white">
              SHOW<span className="text-gold">·</span>FOCUS
            </div>
            <div className="mt-2 text-[10px] tracking-[0.4em] text-[#A0A0A0] uppercase">
              Luxury Experiences · Est. 2007
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-[0.25em] text-white/60 uppercase">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">Behance</a>
            <a href="#" className="hover:text-gold">Vimeo</a>
            <a href="#" className="hover:text-gold">LinkedIn</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-[10px] tracking-[0.3em] text-white/30 uppercase md:flex-row">
          <span>© {new Date().getFullYear()} Show Focus Atelier</span>
          <span>Crafted with cinematic obsession</span>
        </div>
      </div>
    </footer>
  );
}
