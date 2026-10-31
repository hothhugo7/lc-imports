"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { ease } from "./Reveal";

const DURATION = 2.1;

export default function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, DURATION * 1000 + 250);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ opacity: 0, filter: "blur(12px)", scale: 1.04 }}
      transition={{ duration: 0.7, ease }}
    >
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-azure/20 blur-[90px]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
      />
      <motion.div
        className="relative"
        initial={{ opacity: 0, filter: "blur(14px)", scale: 0.94 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1.1, ease }}
      >
        <Logo size="lg" priority />
      </motion.div>

      {/* Progress bar filling with the brand gradient */}
      <div className="relative mt-10 h-[3px] w-44 overflow-hidden rounded-full bg-bone/10">
        <motion.div
          className="bg-brand absolute inset-y-0 left-0 rounded-full shadow-[0_0_14px_rgba(125,188,226,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: DURATION - 0.3, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
        />
      </div>
    </motion.div>
  );
}
