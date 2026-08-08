"use client";

import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TipsSection } from "@/components/TipsSection";
import { CoresSection } from "@/components/CoresSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 space-y-16">
        <HeroSection />
        <AboutSection />
        <TipsSection />
        <CoresSection />
      </main>
      <Footer />
    </div>
  );
}
