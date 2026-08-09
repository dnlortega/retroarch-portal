"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ghost, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const games = [
  {
    id: "pokemon_fr",
    name: "Pokémon Fire Red (GBA)",
    cheats: [
      { id: "rare_candy", label: "Rare Candies Infinitos no PC", code: "82025840 0044" },
      { id: "master_ball", label: "Master Balls Infinitas no PC", code: "82025840 0001" },
      { id: "walk_walls", label: "Atravessar Paredes (Walk through walls)", code: "509197D3 542975F4\\n78DA95DF 44018CB4" }
    ]
  },
  {
    id: "smw",
    name: "Super Mario World (SNES)",
    cheats: [
      { id: "infinite_lives", label: "Vidas Infinitas", code: "7E0DBE63" },
      { id: "star_power", label: "Estrela Invencível Infinita", code: "7E1490FF" }
    ]
  }
];

export function CheatBuilder() {
  const [selectedGame, setSelectedGame] = useState(games[0].id);
  const [activeCheats, setActiveCheats] = useState<Record<string, boolean>>({});

  const currentGame = games.find(g => g.id === selectedGame)!;

  const toggleCheat = (cheatId: string) => {
    setActiveCheats(prev => ({ ...prev, [cheatId]: !prev[cheatId] }));
  };

  const generateAndDownloadCht = () => {
    let content = `cheats = "${currentGame.cheats.length}"\\n\\n`;
    
    currentGame.cheats.forEach((cheat, index) => {
      const isEnabled = activeCheats[cheat.id] ? "true" : "false";
      content += `cheat${index}_desc = "${cheat.label}"\\n`;
      content += `cheat${index}_code = "${cheat.code}"\\n`;
      content += `cheat${index}_enable = ${isEnabled}\\n\\n`;
    });

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentGame.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.cht`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="pt-8 space-y-12 my-24 max-w-4xl mx-auto"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
          <Ghost className="text-accent" />
          Gerador de Trapaças (Cheat Builder)
        </h2>
        <p className="text-muted-foreground">
          Gere arquivos <code>.cht</code> perfeitos para o RetroArch com um clique!
        </p>
      </div>

      <Card className="bg-card shadow-[0_0_20px_rgba(0,255,128,0.05)] border-accent/20">
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-4">
            <Label className="text-lg">1. Escolha o Jogo (Exemplos)</Label>
            <div className="flex gap-4">
              {games.map(game => (
                <button
                  key={game.id}
                  aria-label={`Selecionar jogo: ${game.name}`}
                  onClick={() => {
                    setSelectedGame(game.id);
                    setActiveCheats({}); // reset
                  }}
                  className={`px-4 py-2 rounded-lg border transition-colors ${selectedGame === game.id ? 'bg-accent text-accent-foreground border-accent' : 'bg-card border-border hover:border-accent/50'}`}
                >
                  {game.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-lg">2. Ative as Trapaças Padrão</Label>
            <div className="grid grid-cols-1 gap-4">
              {currentGame.cheats.map(cheat => (
                <div key={cheat.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="space-y-1">
                    <Label htmlFor={`cheat-${cheat.id}`} className="text-base font-bold">{cheat.label}</Label>
                    <p className="text-xs text-muted-foreground font-mono">{cheat.code}</p>
                  </div>
                  <Switch 
                    id={`cheat-${cheat.id}`}
                    aria-label={`Ativar trapaça: ${cheat.label}`}
                    checked={!!activeCheats[cheat.id]} 
                    onCheckedChange={() => toggleCheat(cheat.id)} 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button 
              onClick={generateAndDownloadCht}
              aria-label="Baixar arquivo de trapaças .cht gerado"
              className="flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full shadow-[0_0_20px_rgba(0,255,128,0.4)] hover:shadow-[0_0_40px_rgba(0,255,128,0.8)] hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5" />
              Baixar Arquivo .cht
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
