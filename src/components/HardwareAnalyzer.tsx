"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Smartphone, Monitor, HardDrive } from "lucide-react";

type Platform = "pc_weak" | "pc_strong" | "android_weak" | "android_strong" | null;

export function HardwareAnalyzer() {
  const [platform, setPlatform] = useState<Platform>(null);

  const renderRecommendation = () => {
    switch (platform) {
      case "pc_weak":
        return (
          <div className="space-y-4 text-left">
            <h4 className="text-xl font-bold text-primary">Recomendações para PC Fraco / Antigo</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>SNES:</strong> Use <span className="text-white font-semibold">Snes9x</span> (evite bsnes).</li>
              <li><strong>GBA:</strong> <span className="text-white font-semibold">mGBA</span> roda perfeitamente.</li>
              <li><strong>PS1:</strong> Use <span className="text-white font-semibold">SwanStation</span> ou PCSX ReARMed.</li>
              <li><strong>N64:</strong> Mupen64Plus-Next usando o plugin gráfico <span className="text-white font-semibold">GLideN64</span>.</li>
              <li><strong>Filtros (Shaders):</strong> Evite filtros CRT avançados como Royale. Use <code>crt-easymode</code> ou apenas <code>scanlines</code> básicos.</li>
            </ul>
          </div>
        );
      case "pc_strong":
        return (
          <div className="space-y-4 text-left">
            <h4 className="text-xl font-bold text-secondary">Recomendações para PC Gamer</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>SNES:</strong> Use <span className="text-white font-semibold">bsnes</span> para precisão perfeita (cycle-accurate).</li>
              <li><strong>PS1:</strong> Use <span className="text-white font-semibold">Beetle PSX HW</span> (aumente a resolução interna para 4K ou 8K e use Vulkan).</li>
              <li><strong>N64:</strong> Mupen64Plus-Next usando o plugin <span className="text-white font-semibold">ParaLLEl</span> para precisão extrema.</li>
              <li><strong>GameCube/Wii:</strong> <span className="text-white font-semibold">Dolphin</span> funciona liso em altíssima resolução.</li>
              <li><strong>Filtros (Shaders):</strong> Abuse! Use <code>crt-royale</code> ou <code>Mega Bezel</code> para simular a curvatura do vidro da TV de tubo e reflexos.</li>
            </ul>
          </div>
        );
      case "android_weak":
        return (
          <div className="space-y-4 text-left">
            <h4 className="text-xl font-bold text-accent">Recomendações para Celular Básico</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>GBA / SNES / Mega Drive:</strong> Rodam nativamente na velocidade máxima sem esforço (Snes9x, mGBA, Genesis Plus GX).</li>
              <li><strong>PS1:</strong> Use exclusivamente o <span className="text-white font-semibold">PCSX ReARMed</span>. É o Core mais leve para arquitetura móvel (ARM).</li>
              <li><strong>PSP:</strong> O PPSSPP pode engasgar. Tente reduzir a resolução interna para 1x e ligar o "Frameskip".</li>
              <li><strong>Evite:</strong> Jogos de N64, Dreamcast ou usar opções avançadas como "Run-Ahead".</li>
            </ul>
          </div>
        );
      case "android_strong":
        return (
          <div className="space-y-4 text-left">
            <h4 className="text-xl font-bold text-blue-400">Recomendações para Celular Topo de Linha</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>PS1 / N64 / Dreamcast:</strong> Rodam perfeitamente. Use SwanStation (PS1), Mupen64Plus (N64) e Flycast (Dreamcast) escalando a resolução para 1080p.</li>
              <li><strong>GameCube / PS2:</strong> Use o Core Dolphin para GameCube e LRPS2 para PS2, mas prefira a API Vulkan nas configurações de vídeo.</li>
              <li><strong>Filtros:</strong> Celulares potentes aguentam Shaders básicos como <code>crt-lottes</code> sem drenar a bateria rapidamente.</li>
            </ul>
          </div>
        );
      default:
        return (
          <p className="text-muted-foreground text-center py-8">
            Clique em um dos botões acima para ver o diagnóstico do seu aparelho.
          </p>
        );
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="pt-8 space-y-12 my-24 max-w-5xl mx-auto"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
          <Monitor className="text-primary" />
          Roda no meu aparelho? (Scanner)
        </h2>
        <p className="text-muted-foreground">Selecione seu tipo de dispositivo abaixo e diremos exatamente quais configurações usar para evitar lag.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button 
          onClick={() => setPlatform("pc_weak")}
          className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all hover:scale-105 ${platform === "pc_weak" ? "bg-primary/20 border-primary" : "bg-card border-border hover:border-primary/50"}`}
        >
          <HardDrive className="w-8 h-8 text-primary" />
          <span className="font-bold">PC Fraco / Antigo</span>
        </button>
        <button 
          onClick={() => setPlatform("pc_strong")}
          className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all hover:scale-105 ${platform === "pc_strong" ? "bg-secondary/20 border-secondary" : "bg-card border-border hover:border-secondary/50"}`}
        >
          <Cpu className="w-8 h-8 text-secondary" />
          <span className="font-bold">PC Gamer</span>
        </button>
        <button 
          onClick={() => setPlatform("android_weak")}
          className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all hover:scale-105 ${platform === "android_weak" ? "bg-accent/20 border-accent" : "bg-card border-border hover:border-accent/50"}`}
        >
          <Smartphone className="w-8 h-8 text-accent" />
          <span className="font-bold">Celular Básico</span>
        </button>
        <button 
          onClick={() => setPlatform("android_strong")}
          className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all hover:scale-105 ${platform === "android_strong" ? "bg-blue-500/20 border-blue-500" : "bg-card border-border hover:border-blue-500/50"}`}
        >
          <Smartphone className="w-8 h-8 text-blue-400" />
          <span className="font-bold">Celular Top (Flagship)</span>
        </button>
      </div>

      <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-[0_0_30px_rgba(255,0,255,0.1)]">
        <CardContent className="pt-6">
          <motion.div
            key={platform}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderRecommendation()}
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
