"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Gamepad2, Info } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="text-center space-y-6 pt-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4 animate-float"
      >
        <Gamepad2 className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-xy"
      >
        RetroArch
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light"
      >
        O hub definitivo para emulação. Jogue seus clássicos favoritos de dezenas de consoles em uma interface única e moderna.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
        className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
      >
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.retroarch.com/?page=platforms" 
          target="_blank" 
          rel="noreferrer"
          className={cn(buttonVariants({ size: "lg", className: "text-lg px-8 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-[0_0_20px_rgba(255,0,255,0.6)] transition-all hover:shadow-[0_0_40px_rgba(255,0,255,0.9)]" }))}
        >
          <Download className="w-5 h-5" />
          Baixar Oficial
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#dicas"
          className={cn(buttonVariants({ size: "lg", variant: "outline", className: "text-lg px-8 gap-2 rounded-full border-secondary text-secondary hover:bg-secondary/20 hover:border-secondary/80" }))}
        >
          <Info className="w-5 h-5" />
          Como Funciona
        </motion.a>
      </motion.div>
    </section>
  );
}

