"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dictionary = [
  {
    term: "Core",
    def: "É o emulador em si. O RetroArch não emula nada sozinho; ele é como um 'leitor de DVD' e os Cores são os 'DVDs'. Se quer jogar Super Nintendo, você baixa o Core do Snes9x."
  },
  {
    term: "Run-Ahead",
    def: "Uma tecnologia mágica que calcula quadros (frames) do jogo escondido no futuro para remover o 'Input Lag' (atraso do controle). O jogo responde mais rápido que no console original!"
  },
  {
    term: "Slang Shader",
    def: "Filtros de imagem ultra avançados que rodam direto na placa de vídeo (usando Vulkan ou DirectX). Servem para desenhar os pixels como se fossem TVs de Tubo (CRT) com reflexos reais."
  },
  {
    term: "RetroAchievement",
    def: "Sistema de conquistas (troféus estilo PlayStation/Xbox) para jogos antigos. Se você logar sua conta no RetroArch, ele te dá um troféu quando você zera Mario ou pega as esmeraldas no Sonic!"
  },
  {
    term: "Frontend",
    def: "A interface de usuário. O RetroArch é um Frontend para a API Libretro. Ele desenha os menus, gerencia os controles e a tela, mas passa a bola do processamento do jogo para os Cores."
  },
  {
    term: "DSP Plugin",
    def: "Digital Signal Processor. São pequenos 'filtros' para o áudio, assim como os Shaders são para o vídeo. Você pode colocar um DSP de 'Reverb' para o som do jogo parecer que está tocando num salão."
  }
];

export function RetroDictionary() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="pt-8 space-y-12 my-24 max-w-6xl mx-auto"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
          <BookOpen className="text-secondary" />
          Dicionário do Emulador
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          O jargão do RetroArch assusta iniciantes. Veja abaixo o que significam os nomes mais estranhos que você vai encontrar nos menus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dictionary.map((item, idx) => (
          <motion.div
            key={item.term}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full bg-card/40 backdrop-blur border-secondary/20 hover:border-secondary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">{item.term}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.def}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
