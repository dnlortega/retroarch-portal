"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Paintbrush } from "lucide-react";

export function ThemesGallery() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="pt-8 space-y-8 my-24"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
          <Paintbrush className="text-primary" />
          Temas do Sistema
        </h2>
        <p className="text-muted-foreground">O RetroArch não é apenas poderoso, ele é lindo. Escolha a interface que mais combina com você.</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-primary/30 group"
        >
          <Image src="/theme_xmb.png" alt="RetroArch XMB Theme" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-3xl font-bold text-white mb-2">Tema XMB (Estilo PlayStation 3)</h3>
            <p className="text-white/80 text-lg">
              O tema clássico e mais amado pela comunidade. Apresenta uma navegação em ondas limpa e elegante, perfeita para jogar na TV da sala com um controle na mão.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
