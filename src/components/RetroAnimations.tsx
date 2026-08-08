"use client";

import { motion } from "framer-motion";

export function RetroAnimations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      
      {/* Ghost Animation - Floating Up */}
      <motion.div
        initial={{ y: "110vh", x: "10vw" }}
        animate={{ y: "-10vh", x: ["10vw", "12vw", "8vw", "10vw"] }}
        transition={{ 
          y: { duration: 15, repeat: Infinity, ease: "linear" },
          x: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute w-12 h-12"
      >
        <svg viewBox="0 0 14 14" className="w-full h-full fill-primary drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">
          <path d="M7 0C3.134 0 0 3.134 0 7v7l2-2 2 2 2-2 2 2 2-2 2 2 2-2V7c0-3.866-3.134-7-7-7zm-2 6a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </motion.div>

      {/* Pac-Man crossing the screen horizontally */}
      <motion.div
        initial={{ x: "-10vw", y: "80vh" }}
        animate={{ x: "110vw" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute flex items-center gap-4"
      >
        {/* CSS Pacman Shape */}
        <div className="relative w-12 h-12">
          <motion.div 
            animate={{ rotate: [0, 45, 0] }}
            transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-yellow-400 rounded-full"
            style={{ clipPath: "polygon(100% 74%, 44% 48%, 100% 21%, 100% 0, 0 0, 0 100%, 100% 100%)" }}
          />
        </div>
        
        {/* Food dots */}
        <div className="flex gap-8">
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5, times: [0, 0.05, 1] }}
              className="w-3 h-3 bg-yellow-200 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Space Invader crossing from Right to Left */}
      <motion.div
        initial={{ x: "110vw", y: "20vh" }}
        animate={{ x: "-10vw" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute w-12 h-12"
      >
        <motion.svg 
          animate={{ scaleY: [1, 0.8, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 11 8" 
          className="w-full h-full fill-secondary drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
        >
          <path d="M3 0h5v1H2v1H1v1H0v2h1v1h1v1h1V6h1v1h3V6h1v1h1V5h1V3h-1V2h-1V1H8V0H3zm2 3h1v1H5V3zm2 0h1v1H7V3z" />
        </motion.svg>
      </motion.div>

    </div>
  );
}
