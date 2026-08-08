import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const nintendoCores = [
  { id: "nes", name: "NES (Nintendinho)", core: "FCEUmm ou Mesen", desc: "Mesen é o mais preciso e moderno. FCEUmm é ótimo para PCs mais fracos ou celulares.", img: "/nes_card.png" },
  { id: "snes", name: "Super Nintendo (SNES)", core: "Snes9x ou bsnes", desc: "Snes9x roda perfeitamente em qualquer aparelho. bsnes é focado em precisão absoluta (exige PC forte).", img: "/snes_card.png" },
  { id: "gba", name: "Game Boy Advance", core: "mGBA", desc: "O rei indiscutível do GBA. Rápido, com suporte a cabos link virtuais e extremante preciso.", img: "/gba_card.png" },
  { id: "n64", name: "Nintendo 64", core: "Mupen64Plus-Next", desc: "Melhor compatibilidade 3D, com opção de usar o plugin ParaLLEl para gráficos impecáveis.", img: "/n64_card.png" },
];

const segaCores = [
  { id: "genesis", name: "Mega Drive / Genesis", core: "Genesis Plus GX", desc: "Roda Master System, Mega Drive e Sega CD com precisão de 100%. Obrigatório!", img: "/genesis_card.png" },
  { id: "arcade", name: "Arcade (Fliperama)", core: "Final Burn Neo (FBNeo)", desc: "A forma mais fácil e estável de rodar clássicos de fliperama (Capcom CPS1/2/3, Neo Geo, etc).", img: "/arcade_card.png" },
];

const sonyCores = [
  { id: "ps1", name: "PlayStation 1 (PSX)", core: "Beetle PSX HW ou SwanStation", desc: "Ambos permitem melhorar os gráficos 3D absurdamente. SwanStation é mais leve, Beetle é mais preciso.", img: "/ps1_card.png" },
  { id: "psp", name: "PlayStation Portable (PSP)", core: "PPSSPP", desc: "O único e melhor emulador de PSP existente. Roda liso e aumenta a resolução nativa sem esforço.", img: "/psp_card.png" },
];

export function CoresSection() {
  const cardVariants: any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, rotate: [-1, 1, -1, 0], transition: { type: "spring", stiffness: 300 } }
  };

  const renderCards = (cores: any[], colorClass: string) => (
    <motion.div 
      initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {cores.map((core) => (
        <motion.div key={core.id} variants={cardVariants} whileHover="hover">
          <Card className={`bg-card border-${colorClass}/20 hover:border-${colorClass} transition-colors cursor-pointer shadow-lg hover:shadow-${colorClass}/20 overflow-hidden`}>
            <div className={`w-full h-48 relative border-b border-${colorClass}/20`}>
              <Image src={core.img} alt={core.name} fill className="object-cover" />
            </div>
            <CardHeader><CardTitle>{core.name}</CardTitle></CardHeader>
            <CardContent>
              <p className={`text-lg text-${colorClass} font-bold`}>{core.core}</p>
              <p className="text-sm text-muted-foreground mt-2">{core.desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
      id="cores" 
      className="pt-8 space-y-8"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
          <Settings className="text-secondary" />
          Os Melhores Cores
        </h2>
        <p className="text-muted-foreground">Recomendações dos melhores emuladores para cada sistema clássico.</p>
      </div>

      <Tabs defaultValue="nintendo" className="w-full flex flex-col">
        <TabsList className="flex flex-col sm:flex-row w-full max-w-3xl mx-auto mb-6 bg-muted/50 p-2 rounded-lg h-auto gap-2">
          <TabsTrigger value="nintendo" className="flex-1 py-3 text-base md:text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Nintendo</TabsTrigger>
          <TabsTrigger value="sega" className="flex-1 py-3 text-base md:text-lg data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">Sega & Arcade</TabsTrigger>
          <TabsTrigger value="sony" className="flex-1 py-3 text-base md:text-lg data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">Sony</TabsTrigger>
        </TabsList>
        
        <TabsContent value="nintendo" className="mt-4">
          {renderCards(nintendoCores, "primary")}
        </TabsContent>
        
        <TabsContent value="sega" className="mt-4">
          {renderCards(segaCores, "secondary")}
        </TabsContent>
        
        <TabsContent value="sony" className="mt-4">
          {renderCards(sonyCores, "accent")}
        </TabsContent>
      </Tabs>
    </motion.section>
  );
}
