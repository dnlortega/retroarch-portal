"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Paintbrush, Gamepad2, Settings, Smartphone } from "lucide-react";

export function ThemesGallery() {
  const themes = [
    {
      id: "xmb",
      name: "XMB (Estilo PlayStation 3)",
      desc: "O tema clássico e mais amado. Navegação em ondas limpa e elegante, perfeita para jogar na TV da sala com um controle.",
      img: "/theme_xmb.png",
      mockup: null,
    },
    {
      id: "ozone",
      name: "Ozone (Estilo Nintendo Switch)",
      desc: "O padrão atual do RetroArch. Design moderno em barra lateral (sidebar) escura, otimizada para monitores modernos e TVs 4K.",
      img: null,
      mockup: (
        <div className="absolute inset-0 bg-zinc-900 flex text-white overflow-hidden p-2">
          {/* Sidebar */}
          <div className="w-1/3 bg-zinc-950/80 rounded-l-lg border-r border-zinc-800 p-3 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-zinc-700 mb-2" />
            <div className="h-3 w-3/4 bg-zinc-600 rounded" />
            <div className="h-3 w-1/2 bg-zinc-700 rounded" />
            <div className="h-3 w-full bg-zinc-800 rounded mt-4" />
            <div className="h-3 w-4/5 bg-zinc-800 rounded" />
            <div className="h-3 w-full bg-primary/40 rounded shadow-[0_0_8px_rgba(255,0,255,0.4)]" />
          </div>
          {/* Main Area */}
          <div className="flex-1 bg-zinc-900 rounded-r-lg p-4 grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-zinc-800 rounded aspect-square border border-zinc-700" />
            ))}
          </div>
        </div>
      )
    },
    {
      id: "rgui",
      name: "RGUI (Estilo Retrô 8-bit)",
      desc: "Baixíssima resolução, feito para monitores CRT antigos e dispositivos com pouca memória. O visual raiz e ultra rápido.",
      img: null,
      mockup: (
        <div className="absolute inset-0 bg-green-950 flex items-center justify-center p-4">
          <div className="w-3/4 h-3/4 border-4 border-green-500 bg-black flex flex-col items-center justify-start p-4" style={{ imageRendering: 'pixelated' }}>
            <div className="text-green-500 font-mono font-bold tracking-widest text-lg mb-4 uppercase">RetroArch</div>
            <div className="w-full h-1 bg-green-500 mb-4" />
            <div className="text-green-400 font-mono w-full text-left">> Load Core</div>
            <div className="text-green-400 font-mono w-full text-left">> Load Content</div>
            <div className="text-black bg-green-500 font-mono w-full text-left">> Settings</div>
            <div className="text-green-400 font-mono w-full text-left">> Quit RetroArch</div>
          </div>
        </div>
      )
    },
    {
      id: "glui",
      name: "MaterialUI (Estilo Android)",
      desc: "Projetado exclusivamente para telas sensíveis ao toque (Celulares e Tablets), com botões grandes estilo Google Material Design.",
      img: null,
      mockup: (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center overflow-hidden">
          <div className="w-[180px] h-full bg-white shadow-2xl flex flex-col">
            <div className="h-12 bg-blue-600 w-full flex items-center px-4 shadow-md z-10">
              <div className="w-4 h-4 bg-white/50 rounded-full" />
            </div>
            <div className="flex-1 flex flex-col p-2 gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-10 bg-slate-200 rounded flex items-center px-2 gap-2">
                   <div className="w-4 h-4 rounded-full bg-slate-400" />
                   <div className="h-2 w-16 bg-slate-400 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="pt-8 space-y-12 my-24"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
          <Paintbrush className="text-primary" />
          Todos os Temas (Menu Drivers)
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          O RetroArch permite trocar toda a sua interface de usuário. Escolha a "cara" que mais combina com seu dispositivo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {themes.map((t, idx) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-primary/20 group bg-card flex flex-col justify-end"
          >
            {t.img ? (
              <Image src={t.img} alt={t.name} fill className="object-cover" />
            ) : (
              t.mockup
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            
            <div className="relative z-10 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
              <p className="text-white/80 text-sm md:text-base">
                {t.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
