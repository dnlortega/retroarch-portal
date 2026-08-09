"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, Globe, MonitorPlay, Gamepad2 } from "lucide-react";

export function TutorialsSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      id="tutoriais" 
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tutoriais Avançados</h2>
        <p className="text-muted-foreground">Aprenda a configurar recursos incríveis do RetroArch passo a passo.</p>
      </div>

      <Tabs defaultValue="achievements" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-4 h-auto p-1">
          <TabsTrigger value="achievements" className="py-3 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span className="hidden sm:inline">RetroAchievements</span>
            <span className="sm:hidden">Conquistas</span>
          </TabsTrigger>
          <TabsTrigger value="netplay" className="py-3 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Netplay
          </TabsTrigger>
          <TabsTrigger value="shaders" className="py-3 flex items-center gap-2">
            <MonitorPlay className="w-4 h-4" />
            Shaders
          </TabsTrigger>
          <TabsTrigger value="hotkeys" className="py-3 flex items-center gap-2">
            <Gamepad2 className="w-4 h-4" />
            Hotkeys
          </TabsTrigger>
        </TabsList>

        <TabsContent value="achievements">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Trophy className="w-6 h-6" /> Conquistas como nos consoles modernos
              </CardTitle>
              <CardDescription className="text-base">
                Integre sua conta do RetroAchievements e desbloqueie troféus em jogos clássicos.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Crie uma conta gratuita no site <a href="https://retroachievements.org/" target="_blank" rel="noreferrer" className="text-primary hover:underline">RetroAchievements.org</a>.</li>
                <li>No RetroArch, vá em <strong>Configurações {'>'} Conquistas (Achievements)</strong>.</li>
                <li>Ative a opção <strong>Habilitar Conquistas</strong>.</li>
                <li>Insira seu Usuário e Senha criados no site.</li>
                <li>(Opcional) Ative o <strong>Modo Hardcore</strong>. Isso desativa os Save States e os Cheats, mas as conquistas ganham um selo especial de Hardcore no site!</li>
              </ol>
              <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary/20">
                <p className="text-sm font-medium text-foreground">💡 Dica de Ouro:</p>
                <p className="text-sm">Sempre verifique se a sua ROM é da mesma região/versão suportada pelo set de conquistas (geralmente USA/Versão 1.0).</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="netplay">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Globe className="w-6 h-6" /> Multiplayer Online
              </CardTitle>
              <CardDescription className="text-base">
                Jogue seus jogos retrô favoritos com amigos através da internet usando o Netplay.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Ambos os jogadores precisam ter a <strong>mesma versão exata da ROM</strong> e usar o <strong>mesmo Core</strong>.</li>
                <li><strong>Para o Anfitrião (Host):</strong> Vá no menu principal do RetroArch, escolha <strong>Netplay {'>'} Iniciar Servidor (Host)</strong>.</li>
                <li><strong>Para o Cliente:</strong> Vá no menu principal, escolha <strong>Netplay {'>'} Conectar a um Servidor (Client)</strong> e digite o IP do anfitrião ou procure na lista pública.</li>
              </ol>
              <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary/20">
                <p className="text-sm font-medium text-foreground">⚠️ Atenção:</p>
                <p className="text-sm">Para ser anfitrião, pode ser necessário liberar a porta 55435 no seu roteador (Port Forwarding), ou você pode ativar o servidor de retransmissão (Relay Server) nas configurações do Netplay para não precisar configurar o roteador (embora possa adicionar latência).</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shaders">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <MonitorPlay className="w-6 h-6" /> Efeito de TV de Tubo (CRT Shaders)
              </CardTitle>
              <CardDescription className="text-base">
                Deixe seus jogos com a aparência autêntica das antigas TVs CRT (Scanlines, brilho, curvatura).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Abra um jogo qualquer.</li>
                <li>Abra o <strong>Menu Rápido (Quick Menu)</strong> apertando F1 ou o botão Home do controle.</li>
                <li>Vá até <strong>Shaders</strong> no final da lista.</li>
                <li>Ative os Shaders (se estiver desativado) e clique em <strong>Carregar (Load)</strong>.</li>
                <li>Navegue pela pasta <code>shaders_slang</code> e escolha a subpasta <code>crt</code>.</li>
                <li>Recomendamos começar com <strong>crt-geom.slangp</strong> ou <strong>crt-easymode.slangp</strong>. Escolha o arquivo e veja a mágica acontecer!</li>
              </ol>
              <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary/20">
                <p className="text-sm font-medium text-foreground">💾 Salvar Shader:</p>
                <p className="text-sm">Gostou do resultado? Volte no menu de Shaders e clique em <strong>Salvar {'>'} Salvar Predefinição Global (ou por Core/Jogo)</strong> para aplicar sempre.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hotkeys">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Gamepad2 className="w-6 h-6" /> Atalhos Essenciais (Hotkeys)
              </CardTitle>
              <CardDescription className="text-base">
                Use atalhos no controle para salvar o jogo rapidamente, acelerar o tempo ou voltar no tempo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Vá em <strong>Configurações {'>'} Entrada (Input) {'>'} Atalhos (Hotkeys)</strong>.</li>
                <li>Configure um <strong>Botão de Habilitar Atalho (Hotkey Enable)</strong>. Recomendamos usar o botão <em>Select</em> ou o <em>Home</em> do controle. Isso funciona como a tecla "Shift" (os atalhos só funcionam quando você segura este botão).</li>
                <li>Agora mapeie os comandos:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Salvar Estado (Save State):</strong> Recomendamos R1 (RB).</li>
                    <li><strong>Carregar Estado (Load State):</strong> Recomendamos L1 (LB).</li>
                    <li><strong>Avanço Rápido (Fast-Forward):</strong> Recomendamos R2 (RT). Ótimo para pular diálogos e loadings longos!</li>
                    <li><strong>Rebobinar (Rewind):</strong> Recomendamos L2 (LT). Atenção: é preciso ativar o recurso de Rebobinar nas opções do RetroArch primeiro!</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.section>
  );
}
