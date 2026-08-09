"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  opacity: number;
  x: string;
  scale: number;
  duration: number;
  delay: number;
}

export function RetroBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        opacity: Math.random(),
        x: Math.random() * 100 + "vw",
        scale: Math.random() * 2,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-black">
      {/* Synthwave Sun */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-b from-yellow-400 via-orange-500 to-pink-600 blur-[2px] shadow-[0_0_100px_rgba(255,0,255,0.6)]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 90%)' }}>
        <div className="absolute bottom-0 w-full h-[60%] flex flex-col justify-end gap-2 pb-2">
           <div className="w-full h-1 bg-black" />
           <div className="w-full h-2 bg-black" />
           <div className="w-full h-3 bg-black" />
           <div className="w-full h-4 bg-black" />
           <div className="w-full h-6 bg-black" />
        </div>
      </div>

      {/* Animated 3D Grid */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60vh] w-full [perspective:600px] bg-gradient-to-t from-transparent to-black"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-t-2 border-primary/50"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,0,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,0,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform: "rotateX(75deg) scale(3) translateY(10%)",
            transformOrigin: "top center",
          }}
        />
        {/* Glow near horizon */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/40 to-transparent blur-2xl mix-blend-screen" />
      </div>

      {/* Falling Stars / Dust */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: p.opacity, 
              y: -10, 
              x: p.x,
              scale: p.scale 
            }}
            animate={{ 
              y: "100vh",
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]"
          />
        ))}
      </div>
    </div>
  );
}
