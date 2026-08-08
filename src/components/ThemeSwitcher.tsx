"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Gamepad, Zap } from "lucide-react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-card/80 p-2 rounded-full backdrop-blur-sm border border-border">
      <Button 
        variant={theme === "dark" ? "default" : "ghost"} 
        size="icon" 
        className="rounded-full w-10 h-10"
        onClick={() => setTheme("dark")}
        title="Modo Neon (Padrão)"
      >
        <Monitor className="w-5 h-5" />
      </Button>
      <Button 
        variant={theme === "gameboy" ? "default" : "ghost"} 
        size="icon" 
        className="rounded-full w-10 h-10 text-[#0f380f]"
        onClick={() => setTheme("gameboy")}
        title="Modo Game Boy"
      >
        <Gamepad className="w-5 h-5" />
      </Button>
      <Button 
        variant={theme === "virtualboy" ? "default" : "ghost"} 
        size="icon" 
        className="rounded-full w-10 h-10 text-[#ff0000]"
        onClick={() => setTheme("virtualboy")}
        title="Modo Virtual Boy"
      >
        <Zap className="w-5 h-5" />
      </Button>
    </div>
  );
}
