import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Gamepad2, Info } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center space-y-6 pt-10">
      <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
        <Gamepad2 className="w-12 h-12 text-primary" />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
        RetroArch
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
        O hub definitivo para emulação. Jogue seus clássicos favoritos de dezenas de consoles em uma interface única e moderna.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
        <a 
          href="https://www.retroarch.com/?page=platforms" 
          target="_blank" 
          rel="noreferrer"
          className={cn(buttonVariants({ size: "lg", className: "text-lg px-8 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-[0_0_20px_rgba(255,0,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(255,0,255,0.6)]" }))}
        >
          <Download className="w-5 h-5" />
          Baixar Oficial
        </a>
        <a 
          href="#dicas"
          className={cn(buttonVariants({ size: "lg", variant: "outline", className: "text-lg px-8 gap-2 rounded-full border-secondary text-secondary hover:bg-secondary/10" }))}
        >
          <Info className="w-5 h-5" />
          Como Funciona
        </a>
      </div>
    </section>
  );
}
