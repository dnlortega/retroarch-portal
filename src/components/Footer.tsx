import { Gamepad2, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-card/30 backdrop-blur-md mt-16 py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            RetroArch
          </span>
        </div>
        
        <div className="text-center md:text-left text-sm text-muted-foreground space-y-1">
          <p>O Guia Definitivo © {new Date().getFullYear()}</p>
          <p>Este site não distribui jogos comerciais ou ROMs protegidas por direitos autorais.</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/30 transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
