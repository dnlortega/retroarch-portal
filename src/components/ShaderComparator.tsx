"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ShaderComparator() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 my-16">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Magia dos Shaders CRT</h3>
        <p className="text-muted-foreground max-w-xl text-lg">
          Arraste a barra para comparar o pixel quadrado puro (Esquerda) com a magia nostálgica dos filtros de TV de tubo do RetroArch (Direita).
        </p>
      </div>

      <div className="relative w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-border select-none group">
        {/* Lado Esquerdo - Pixel Art Puro */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/retro_game.png')" }}
        />

        {/* Lado Direito - Efeito CRT */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/retro_game.png')",
            clipPath: `inset(0 0 0 ${sliderPos}%)`,
            filter: "contrast(1.2) brightness(0.9) sepia(0.2)"
          }}
        >
          {/* Overlay de Scanlines CSS */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
            style={{
              background: "repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)"
            }}
          />
          {/* Overlay de Glow/Bloom do tubo */}
          <div className="absolute inset-0 pointer-events-none bg-primary/10 mix-blend-screen shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
        </div>

        {/* Barra do Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />

        {/* Linha Divisória Visual */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10 pointer-events-none"
          style={{ left: `calc(${sliderPos}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-bold z-10 pointer-events-none backdrop-blur-sm">
          Sem Filtro (Pixel Puro)
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-bold z-10 pointer-events-none backdrop-blur-sm">
          Filtro CRT + Scanlines
        </div>
      </div>
    </div>
  );
}
