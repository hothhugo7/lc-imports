"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { ease } from "./Reveal";

const links = ["Novidades", "Camisetas", "Tênis", "Moletons", "Acessórios"];

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 240 && y > prev);
  });

  const iconBtn = "grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-bone/5";

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease }}
        className={`sticky top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500 ${
          scrolled ? "border-b border-bone/5 bg-ink/70 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="container-x grid h-16 grid-cols-3 items-center">
          <div className="flex items-center gap-1">
            <button aria-label="Menu" className={`${iconBtn} lg:hidden`} onClick={() => setOpen(true)}>
              <Menu size={20} strokeWidth={1.4} />
            </button>
            <nav className="hidden gap-8 lg:flex">
              {links.slice(0, 3).map((l) => (
                <a key={l} href="#" className="text-[11px] uppercase tracking-[0.2em] text-bone/70 transition-colors hover:text-bone">
                  {l}
                </a>
              ))}
            </nav>
          </div>
          <a href="#" className="justify-self-center" aria-label="LC Imports">
            <Logo size="sm" />
          </a>
          <div className="flex items-center justify-self-end">
            <button aria-label="Buscar" className={iconBtn}>
              <Search size={19} strokeWidth={1.4} />
            </button>
            <button aria-label="Carrinho" className={`${iconBtn} relative`}>
              <ShoppingBag size={19} strokeWidth={1.4} />
              <span className="absolute right-2 top-2 grid h-4 w-4 place-items-center rounded-full bg-azure text-[9px] font-semibold text-ink">2</span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="container-x flex h-16 items-center justify-between pt-[env(safe-area-inset-top)]">
              <Logo size="sm" />
              <button aria-label="Fechar" className={iconBtn} onClick={() => setOpen(false)}>
                <X size={22} strokeWidth={1.4} />
              </button>
            </div>
            <nav className="container-x mt-10 flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href="#"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease }}
                  className="flex items-baseline justify-between border-b border-bone/10 py-5 font-display text-4xl font-light"
                >
                  {l}
                  <span className="font-sans text-[10px] tracking-[0.3em] text-bone/40">0{i + 1}</span>
                </motion.a>
              ))}
            </nav>
            <p className="eyebrow container-x mt-auto pb-[max(2rem,env(safe-area-inset-bottom))]">Envios para todo Brasil</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
