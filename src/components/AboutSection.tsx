import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MonitorPlay } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="pt-8">
      <Card className="border-accent/20 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <MonitorPlay className="text-accent" />
            O que é o RetroArch?
          </CardTitle>
          <CardDescription className="text-lg">Entenda a magia por trás da cortina.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground text-lg leading-relaxed">
          <p>
            O RetroArch <strong>não é um emulador</strong> em si. Ele é um <em>Frontend</em> poderoso (uma interface unificada) que usa a API Libretro.
          </p>
          <p>
            Dentro do RetroArch, você baixa e roda os chamados <strong>"Cores" (Núcleos)</strong>. Cada "Core" é um emulador independente transformado em um plugin para o RetroArch. A grande vantagem? Você configura seu controle, filtros de tela (Shaders) e atalhos <strong>uma única vez</strong>, e essas configurações se aplicam a todos os videogames!
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
