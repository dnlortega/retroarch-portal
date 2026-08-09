"use client";

import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-6"
      >
        <Gamepad2 className="w-16 h-16 text-primary drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]" />
      </motion.div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl font-bold font-mono text-primary uppercase tracking-widest animate-pulse">
          Loading Content
        </h3>
        <div className="w-48 h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
