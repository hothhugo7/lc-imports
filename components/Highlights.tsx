"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { ease } from "./Reveal";
import { highlights } from "@/lib/data";

export default function Highlights() {
  return (
    <section id="destaques" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <SectionTitle
          eyebrow="Destaques da semana"
          title={<>Peças que <em className="text-gold-soft">falam</em> por você</>}
          copy="Uma curadoria enxuta do que há de mais desejado agora. Estoque limitado."
        />
      </div>

      {/* Horizontal snap rail on mobile, grid on desktop */}
      <div className="flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 sm:scroll-px-8 pb-4 [scrollbar-width:none] sm:px-8 lg:container-x lg:grid lg:grid-cols-4 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        {highlights.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: i * 0.1, ease }}
            className="group w-[74vw] max-w-[320px] shrink-0 snap-start lg:w-auto lg:max-w-none"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink-800">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width:1024px) 25vw, 74vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-bone/20 bg-ink/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] backdrop-blur-md">
                {p.tag}
              </span>
              <button
                aria-label={`Adicionar ${p.name}`}
                className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-bone text-ink transition-transform duration-500 active:scale-90 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <Plus size={18} strokeWidth={1.6} />
              </button>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <h3 className="text-sm text-bone/90">{p.name}</h3>
              <span className="shrink-0 text-sm text-bone/50">{p.price}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
