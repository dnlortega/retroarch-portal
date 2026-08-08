import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings } from "lucide-react";

export function CoresSection() {
  return (
    <section id="cores" className="pt-8 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
          <Settings className="text-secondary" />
          Os Melhores Cores
        </h2>
        <p className="text-muted-foreground">Recomendações dos melhores emuladores para cada sistema clássico.</p>
      </div>

      <Tabs defaultValue="nintendo" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-muted/50 p-1 rounded-lg">
          <TabsTrigger value="nintendo" className="text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Nintendo</TabsTrigger>
          <TabsTrigger value="sega" className="text-lg data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">Sega & Arcade</TabsTrigger>
          <TabsTrigger value="sony" className="text-lg data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">Sony</TabsTrigger>
        </TabsList>
        
        <TabsContent value="nintendo" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-card">
              <CardHeader><CardTitle>NES (Nintendinho)</CardTitle></CardHeader>
              <CardContent><p className="text-lg text-primary font-bold">FCEUmm ou Mesen</p></CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader><CardTitle>Super Nintendo (SNES)</CardTitle></CardHeader>
              <CardContent><p className="text-lg text-primary font-bold">Snes9x</p></CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader><CardTitle>Game Boy Advance</CardTitle></CardHeader>
              <CardContent><p className="text-lg text-primary font-bold">mGBA</p></CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader><CardTitle>Nintendo 64</CardTitle></CardHeader>
              <CardContent><p className="text-lg text-primary font-bold">Mupen64Plus-Next</p></CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sega" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-card">
              <CardHeader><CardTitle>Mega Drive / Genesis</CardTitle></CardHeader>
              <CardContent><p className="text-lg text-secondary font-bold">Genesis Plus GX</p></CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader><CardTitle>Arcade (Fliperama)</CardTitle></CardHeader>
              <CardContent><p className="text-lg text-secondary font-bold">Final Burn Neo (FBNeo)</p></CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sony" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-card">
              <CardHeader><CardTitle>PlayStation 1 (PSX)</CardTitle></CardHeader>
              <CardContent><p className="text-lg text-accent font-bold">Beetle PSX ou PCSX ReARMed</p></CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader><CardTitle>PlayStation Portable (PSP)</CardTitle></CardHeader>
              <CardContent><p className="text-lg text-accent font-bold">PPSSPP</p></CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
