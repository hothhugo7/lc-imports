"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { featured } from "@/lib/data";

type Product = (typeof featured)["tee"];

function Campaign({ p, index, flip }: { p: Product; index: string; flip?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-16 ${flip ? "lg:[direction:rtl]" : ""}`}>
      <Reveal className="relative lg:col-span-7 [direction:ltr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-800 sm:aspect-[5/6]">
          <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
            <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <span className="absolute left-5 top-5 font-display text-7xl font-light text-bone/15 sm:text-8xl">{index}</span>
          {/* Overlaid name for a campaign feel on mobile */}
          <div className="absolute inset-x-5 bottom-5 lg:hidden">
            <p className="eyebrow mb-2 text-gold-soft/80">{p.eyebrow}</p>
            <h3 className="font-display text-4xl font-light leading-none">{p.name}</h3>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="lg:col-span-5 [direction:ltr]">
        <p className="eyebrow mb-4 hidden text-gold-soft/80 lg:block">{p.eyebrow}</p>
        <h3 className="mb-6 hidden font-display text-6xl font-light leading-[0.95] lg:block">{p.name}</h3>
        <p className="max-w-md text-[15px] leading-relaxed text-bone/60">{p.copy}</p>
        <div className="mt-8 flex items-center justify-between gap-6 border-t border-bone/10 pt-6">
          <div>
            <p className="eyebrow mb-1">A partir de</p>
            <p className="font-display text-3xl">{p.price}</p>
            <p className="mt-1 text-xs text-bone/40">ou 10x sem juros</p>
          </div>
          <a href="#" className="btn-primary group shrink-0 px-6">
            Comprar
            <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />
      <div className="container-x relative space-y-24 sm:space-y-36">
        <Campaign p={featured.tee} index="01" />
        <Campaign p={featured.sneaker} index="02" flip />
      </div>
    </section>
  );
}
