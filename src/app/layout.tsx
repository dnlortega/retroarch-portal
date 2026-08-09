import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { KonamiCode } from "@/components/KonamiCode";
import { RetroAnimations } from "@/components/RetroAnimations";
import { RetroRadio } from "@/components/RetroRadio";
import { RetroBackground } from "@/components/RetroBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RetroArch Portal - O Hub Definitivo",
  description: "O guia e hub definitivo para emulação com RetroArch.",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#ff00ff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="apple-touch-icon" href="/retro_game.png" />
      </head>
      <body 
        className="min-h-full flex flex-col transition-colors duration-500"
      >
        <RetroBackground />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
        <ThemeSwitcher />
        <KonamiCode />
        <RetroAnimations />
        <RetroRadio />
        <div className="flex-1 bg-background/80 backdrop-blur-sm transition-colors duration-500 z-10 relative">
          {children}
        </div>
      </body>
    </html>
  );
}
