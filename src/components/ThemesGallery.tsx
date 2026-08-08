"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Paintbrush, Gamepad2, Terminal, Smartphone } from "lucide-react";

export function ThemesGallery() {
  const themes = [
    {
      id: "xmb",
      name: "XMB (Estilo PlayStation 3)",
      desc: "O tema clássico e mais amado. Navegação em ondas limpa e elegante, perfeita para jogar na TV da sala com um controle.",
      img: "/theme_xmb.png",
      gradient: "from-blue-600/20 to-purple-600/20",
    },
    {
      id: "ozone",
      name: "Ozone (Estilo Nintendo Switch)",
      desc: "O padrão atual do RetroArch. Design moderno em barra lateral (sidebar) escura, otimizada para monitores modernos e TVs 4K.",
      icon: <Gamepad2 className="w-24 h-24 text-zinc-600" />,
      gradient: "from-zinc-900 to-zinc-800",
    },
    {
      id: "rgui",
      name: "RGUI (Estilo Retrô 8-bit)",
      desc: "Baixíssima resolução, feito para monitores CRT antigos e dispositivos com pouca memória. O visual raiz e ultra rápido.",
      icon: <Terminal className="w-24 h-24 text-green-500" />,
      gradient: "from-black to-green-950",
    },
    {
      id: "glui",
      name: "MaterialUI (Estilo Android)",
      desc: "Projetado exclusivamente para telas sensíveis ao toque (Celulares e Tablets), com botões grandes estilo Google Material Design.",
      icon: <Smartphone className="w-24 h-24 text-blue-500" />,
      gradient: "from-slate-900 to-blue-950",
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
              <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} flex items-center justify-center pb-24`}>
                {t.icon}
              </div>
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
