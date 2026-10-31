"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { ease } from "./Reveal";
import { heroImage } from "@/lib/data";

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({ y: "0%", transition: { duration: 1.1, delay: 0.35 + i * 0.12, ease } }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative -mt-16 flex min-h-[100svh] items-end overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: imgY }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <Image src={heroImage} alt="Campanha LC Imports" fill priority quality={90} placeholder="blur" sizes="100vw" className="object-cover object-center" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#06080C_95%)]" />
      <div className="absolute -left-24 bottom-1/4 h-80 w-80 rounded-full bg-azure-deep/40 blur-[100px]" />

      <motion.div style={{ opacity: fade }} className="container-x relative pb-[max(3.5rem,env(safe-area-inset-bottom))] pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mb-8 flex items-center gap-4"
        >
          <Logo size="sm" />
          <span className="h-px w-10 bg-azure/60" />
          <span className="eyebrow">Motorsport &amp; Jordan</span>
        </motion.div>

        <h1 className="font-display text-[3.4rem] font-light leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          {["Autêntico.", "Importado.", "Inconfundível."].map((w, i) => (
            <span key={w} className="-my-[0.06em] block overflow-hidden py-[0.06em]">
              <motion.span className={`block ${i === 2 ? "text-brand pr-2 italic" : ""}`} variants={line} initial="hidden" animate="show" custom={i}>
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease }}
          className="mt-6 max-w-sm text-[15px] leading-relaxed text-bone/70"
        >
          Peças selecionadas a dedo das marcas mais desejadas do mundo. Originalidade garantida, entregue na sua porta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#destaques" className="btn-primary group">
            Explorar coleção
            <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#categorias" className="btn-ghost">Ver categorias</a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 right-5 hidden flex-col items-center gap-3 sm:flex"
      >
        <span className="eyebrow [writing-mode:vertical-rl]">Scroll</span>
        <span className="h-12 w-px overflow-hidden bg-bone/10">
          <motion.span className="block h-1/2 w-px bg-azure" animate={{ y: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} />
        </span>
      </motion.div>
    </section>
  );
}
