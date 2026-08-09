"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Globe, MonitorPlay, Gamepad2, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TUTORIALS = [
  {
    id: "achievements",
    title: "RetroAchievements",
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    description: "Conquistas como nos consoles modernos",
    steps: [
      "Crie uma conta gratuita no site RetroAchievements.org.",
      "No RetroArch, vá em Configurações > Conquistas (Achievements).",
      "Ative a opção Habilitar Conquistas.",
      "Insira seu Usuário e Senha criados no site.",
      "(Opcional) Ative o Modo Hardcore. Isso desativa os Save States e os Cheats, mas as conquistas ganham um selo especial!"
    ],
    tip: "Sempre verifique se a sua ROM é da mesma região/versão suportada pelo set de conquistas (geralmente USA/Versão 1.0)."
  },
  {
    id: "netplay",
    title: "Multiplayer Online",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    description: "Jogue online com amigos via Netplay",
    steps: [
      "Ambos os jogadores precisam ter a mesma versão exata da ROM e usar o mesmo Core.",
      "Para o Anfitrião (Host): Vá no menu principal do RetroArch, escolha Netplay > Iniciar Servidor (Host).",
      "Para o Cliente: Vá no menu principal, escolha Netplay > Conectar a um Servidor (Client) e digite o IP do anfitrião ou procure na lista pública."
    ],
    tip: "Para ser anfitrião, pode ser necessário liberar a porta 55435 no seu roteador (Port Forwarding), ou usar o servidor de retransmissão (Relay Server)."
  },
  {
    id: "shaders",
    title: "Filtros CRT",
    icon: MonitorPlay,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    description: "Efeito de TV de Tubo e Scanlines",
    steps: [
      "Abra um jogo qualquer.",
      "Abra o Menu Rápido (Quick Menu) apertando F1 ou o botão Home do controle.",
      "Vá até Shaders no final da lista e ative.",
      "Clique em Carregar (Load) e navegue pela pasta shaders_slang > crt.",
      "Recomendamos crt-geom.slangp ou crt-easymode.slangp. Escolha o arquivo e veja a mágica!"
    ],
    tip: "Gostou do resultado? Volte no menu de Shaders e clique em Salvar > Salvar Predefinição Global para aplicar sempre."
  },
  {
    id: "hotkeys",
    title: "Atalhos de Controle",
    icon: Gamepad2,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    description: "Save states, Fast-Forward e mais",
    steps: [
      "Vá em Configurações > Entrada (Input) > Atalhos (Hotkeys).",
      "Configure um Botão de Habilitar Atalho (Hotkey Enable). Recomendamos Select ou Home.",
      "Mapeie Salvar Estado (R1/RB) e Carregar Estado (L1/LB).",
      "Mapeie Avanço Rápido (R2/RT) e Rebobinar (L2/LT)."
    ],
    tip: "O recurso de Rebobinar (Rewind) precisa ser ativado primeiro nas opções gerais do RetroArch para que o atalho funcione."
  }
];

export function TutorialsSection() {
  const [activeTab, setActiveTab] = useState(TUTORIALS[0].id);

  const activeTutorial = TUTORIALS.find((t) => t.id === activeTab) || TUTORIALS[0];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      id="tutoriais" 
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary/80">
          Tutoriais Avançados
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Eleve sua experiência retrô. Aprenda a configurar recursos incríveis do RetroArch passo a passo com nossos guias detalhados.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {TUTORIALS.map((tutorial) => {
            const Icon = tutorial.icon;
            const isActive = activeTab === tutorial.id;
            
            return (
              <button
                key={tutorial.id}
                onClick={() => setActiveTab(tutorial.id)}
                className={cn(
                  "relative p-4 rounded-xl text-left transition-all duration-300 overflow-hidden group outline-none",
                  isActive 
                    ? "bg-card border border-primary/30 shadow-lg shadow-primary/5" 
                    : "bg-transparent border border-transparent hover:bg-muted/50"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tutorial-bg"
                    className="absolute inset-0 bg-primary/5 border-l-4 border-primary rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn("p-2 rounded-lg transition-colors", isActive ? tutorial.bg : "bg-muted group-hover:bg-muted-foreground/10")}>
                      <Icon className={cn("w-6 h-6 transition-colors", isActive ? tutorial.color : "text-muted-foreground group-hover:text-foreground")} />
                    </div>
                    <div>
                      <h3 className={cn("font-bold text-lg transition-colors", isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground")}>
                        {tutorial.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{tutorial.description}</p>
                    </div>
                  </div>
                  <ArrowRight className={cn("w-5 h-5 transition-all duration-300", isActive ? "text-primary translate-x-0 opacity-100" : "-translate-x-4 opacity-0 text-muted-foreground")} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTutorial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="h-full"
            >
              <Card className={cn("border-2 h-full bg-card/40 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-colors duration-500", activeTutorial.border)}>
                {/* Decorative glowing orb */}
                <div className={cn("absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500", activeTutorial.bg)} />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn("p-3 rounded-xl", activeTutorial.bg)}>
                      <activeTutorial.icon className={cn("w-8 h-8", activeTutorial.color)} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl">{activeTutorial.description}</CardTitle>
                      <CardDescription className="text-base mt-1 text-muted-foreground/80">Siga os passos abaixo para configurar.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8 relative z-10">
                  <div className="space-y-4">
                    {activeTutorial.steps.map((step, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
                          {idx + 1}
                        </div>
                        <p className="text-foreground/90 leading-relaxed pt-1">
                          {step}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: activeTutorial.steps.length * 0.1 }}
                    className={cn("p-5 rounded-xl border flex gap-4 items-start", activeTutorial.bg, activeTutorial.border)}
                  >
                    <CheckCircle2 className={cn("w-6 h-6 flex-shrink-0 mt-0.5", activeTutorial.color)} />
                    <div>
                      <h4 className={cn("font-bold mb-1", activeTutorial.color)}>Dica de Ouro</h4>
                      <p className="text-foreground/80 text-sm leading-relaxed">{activeTutorial.tip}</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
