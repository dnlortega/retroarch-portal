"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ConfigBuilder() {
  const [vsync, setVsync] = useState(true);
  const [runAhead, setRunAhead] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [crtFilter, setCrtFilter] = useState(false);
  const [fastForward, setFastForward] = useState(false);

  const generateAndDownloadCfg = () => {
    const lines = [
      `# Arquivo de configuração gerado pelo RetroArch Portal`,
      `video_vsync = "${vsync ? "true" : "false"}"`,
      `run_ahead_enabled = "${runAhead ? "true" : "false"}"`,
      `run_ahead_frames = "${runAhead ? "1" : "0"}"`,
      `savestate_auto_save = "${autoSave ? "true" : "false"}"`,
      `savestate_auto_load = "${autoSave ? "true" : "false"}"`,
      `video_shader_enable = "${crtFilter ? "true" : "false"}"`,
    ];

    if (fastForward) {
      lines.push(`input_hold_fast_forward = "space"`);
    }

    const content = lines.join("\\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "retroarch.cfg";
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
          <Settings className="text-primary" />
          Gerador de CFG (Config Builder)
        </h2>
        <p className="text-muted-foreground">
          Marque as suas preferências abaixo e baixe o seu arquivo de configuração <code>retroarch.cfg</code> pronto para uso.
        </p>
      </div>

      <Card className="bg-card shadow-[0_0_20px_rgba(255,0,255,0.05)] border-primary/20">
        <CardContent className="pt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
              <div className="space-y-0.5">
                <Label htmlFor="vsync-switch" className="text-base font-bold">V-Sync (Sincronia Vertical)</Label>
                <p className="text-sm text-muted-foreground">Evita "cortes" na tela, mas pode adicionar milissegundos de lag.</p>
              </div>
              <Switch id="vsync-switch" aria-label="Ativar V-Sync" checked={vsync} onCheckedChange={setVsync} />
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
              <div className="space-y-0.5">
                <Label htmlFor="runahead-switch" className="text-base font-bold text-secondary">Run-Ahead (Anti-Lag)</Label>
                <p className="text-sm text-muted-foreground">Remove o atraso dos controles lendo quadros no futuro. Exige CPU forte.</p>
              </div>
              <Switch id="runahead-switch" aria-label="Ativar Run-Ahead" checked={runAhead} onCheckedChange={setRunAhead} />
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
              <div className="space-y-0.5">
                <Label htmlFor="autosave-switch" className="text-base font-bold text-accent">Auto Save/Load</Label>
                <p className="text-sm text-muted-foreground">Salva automaticamente ao sair e continua de onde parou ao abrir o jogo.</p>
              </div>
              <Switch id="autosave-switch" aria-label="Ativar Auto Save" checked={autoSave} onCheckedChange={setAutoSave} />
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
              <div className="space-y-0.5">
                <Label htmlFor="crt-switch" className="text-base font-bold">Ligar Shaders por Padrão</Label>
                <p className="text-sm text-muted-foreground">Ativa a camada de filtro CRT automaticamente para todos os jogos.</p>
              </div>
              <Switch id="crt-switch" aria-label="Ativar Filtros CRT" checked={crtFilter} onCheckedChange={setCrtFilter} />
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border md:col-span-2">
              <div className="space-y-0.5">
                <Label htmlFor="fastforward-switch" className="text-base font-bold text-primary">Atalho de Fast-Forward (Tecla Espaço)</Label>
                <p className="text-sm text-muted-foreground">Permite acelerar o jogo enquanto você segura a barra de espaço (ótimo para pular diálogos em RPGs).</p>
              </div>
              <Switch id="fastforward-switch" aria-label="Ativar atalho Fast-Forward" checked={fastForward} onCheckedChange={setFastForward} />
            </div>

          </div>

          <div className="flex justify-center pt-4">
            <button 
              onClick={generateAndDownloadCfg}
              aria-label="Baixar arquivo retroarch.cfg gerado"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,255,0.8)] hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5" />
              Baixar meu retroarch.cfg
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
