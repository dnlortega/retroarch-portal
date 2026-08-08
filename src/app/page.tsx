"use client";

import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TipsSection } from "@/components/TipsSection";
import { CoresSection } from "@/components/CoresSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ThemesGallery } from "@/components/ThemesGallery";
import { HardwareAnalyzer } from "@/components/HardwareAnalyzer";
import { ConfigBuilder } from "@/components/ConfigBuilder";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-8 space-y-24 py-12">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ThemesGallery />
        <HardwareAnalyzer />
        <ConfigBuilder />
        <TipsSection />
        <CoresSection />
      </main>
      <Footer />
    </div>
  );
}
