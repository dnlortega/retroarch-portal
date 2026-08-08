import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Tv, Network, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      id="recursos" 
      className="pt-8 space-y-8"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-accent">Recursos & Configurações Premium</h2>
        <p className="text-muted-foreground">O que faz o RetroArch ser diferente de qualquer outro emulador.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-card/50 backdrop-blur border-accent/20 h-full hover:border-accent transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Trophy className="w-6 h-6" /> RetroAchievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Ganhe troféus e platinas jogando jogos antigos! O RetroArch se conecta ao site RetroAchievements.org. Basta criar uma conta, colocar seu login nas configurações do RetroArch e começar a desbloquear conquistas em clássicos do SNES, PS1 e muito mais.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-card/50 backdrop-blur border-primary/20 h-full hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Tv className="w-6 h-6" /> Shaders Mágicos (Filtros CRT)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Transforme a imagem de pixels puros em uma TV de tubo autêntica (CRT). Vá no menu rápido, escolha &quot;Shaders&quot; e carregue um preset. Recomendação: <strong>crt-easymode</strong> ou <strong>crt-royale</strong> para o visual retrô definitivo.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-card/50 backdrop-blur border-secondary/20 h-full hover:border-secondary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Network className="w-6 h-6" /> Netplay (Multiplayer Online)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Jogue jogos de sofá via internet! O recurso Netplay permite hospedar partidas de Mario Kart, Contra, ou Street Fighter. Seu amigo só precisa ter a mesma ROM e o mesmo Core que você.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-card/50 backdrop-blur border-green-500/20 h-full hover:border-green-500 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-500">
                <Settings2 className="w-6 h-6" /> Configurações Recomendadas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>Para ter a melhor experiência, vá em <strong>Configurações</strong> e altere o seguinte:</p>
              <ul className="list-disc pl-5">
                <li><strong>Vídeo &gt; Driver:</strong> Use <code>vulkan</code> (se sua placa de vídeo suportar) para máxima performance.</li>
                <li><strong>Latência:</strong> Ative <code>Run-Ahead</code> (reduz o atraso dos controles, tornando mais rápido que no console original).</li>
                <li><strong>Interface:</strong> Ative o modo tela cheia exclusiva para evitar engasgos do Windows.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
