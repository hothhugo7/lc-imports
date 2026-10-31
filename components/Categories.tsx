"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { ease } from "./Reveal";
import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section id="categorias" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <SectionTitle eyebrow="Navegue por estilo" title={<>Categorias</>} copy="Do essencial ao statement. Encontre a peça que completa a sua presença." />

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.a
              key={c.name}
              href="#"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.08, ease }}
              whileTap={{ scale: 0.98 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink-800 sm:aspect-[4/5]"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                quality={90}
                placeholder="blur"
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover opacity-80 grayscale-[35%] transition-all duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl font-light leading-none sm:text-3xl">{c.name}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-bone/50">{c.count}</p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-bone/20 backdrop-blur transition-colors duration-500 group-hover:border-azure group-hover:bg-azure group-hover:text-ink">
                  <ArrowUpRight size={15} strokeWidth={1.5} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
