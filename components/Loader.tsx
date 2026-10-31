"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { ease } from "./Reveal";

export default function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1900);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ opacity: 0, filter: "blur(12px)", scale: 1.04 }}
      transition={{ duration: 0.7, ease }}
    >
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
      />
      <motion.div
        initial={{ opacity: 0, filter: "blur(14px)", scale: 0.92 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1.1, ease }}
      >
        <Logo size="lg" />
      </motion.div>
      <div className="relative mt-10 h-px w-28 overflow-hidden bg-bone/10">
        <motion.span
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
