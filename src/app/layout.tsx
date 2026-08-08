import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { KonamiCode } from "@/components/KonamiCode";
import { RetroAnimations } from "@/components/RetroAnimations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RetroArch - O Guia Definitivo",
  description: "Tudo sobre o RetroArch: O que é, onde baixar, dicas e os melhores cores para emulação.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body 
        className="min-h-full flex flex-col bg-fixed bg-cover bg-center bg-no-repeat transition-colors duration-500"
        style={{ backgroundImage: "url('/bg-retro.png')" }}
      >
        <ThemeSwitcher />
        <KonamiCode />
        <RetroAnimations />
        <div className="flex-1 bg-background/80 backdrop-blur-sm transition-colors duration-500 z-10 relative">
          {children}
        </div>
      </body>
    </html>
  );
}
