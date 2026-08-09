import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const ThemesGallery = dynamic(() => import("@/components/ThemesGallery").then((mod) => mod.ThemesGallery));
const HardwareAnalyzer = dynamic(() => import("@/components/HardwareAnalyzer").then((mod) => mod.HardwareAnalyzer));
const ConfigBuilder = dynamic(() => import("@/components/ConfigBuilder").then((mod) => mod.ConfigBuilder));
const CheatBuilder = dynamic(() => import("@/components/CheatBuilder").then((mod) => mod.CheatBuilder));
const RetroDictionary = dynamic(() => import("@/components/RetroDictionary").then((mod) => mod.RetroDictionary));
const TipsSection = dynamic(() => import("@/components/TipsSection").then((mod) => mod.TipsSection));
const CoresSection = dynamic(() => import("@/components/CoresSection").then((mod) => mod.CoresSection));

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
        <CheatBuilder />
        <RetroDictionary />
        <TipsSection />
        <CoresSection />
      </main>
      <Footer />
    </div>
  );
}
