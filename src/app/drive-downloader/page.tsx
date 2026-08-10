import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Rocket, Filter, ShieldCheck, Zap, HardDriveDownload, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DriveDownloaderPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Voltar para o Portal
          </Link>
        </Button>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-8 space-y-24 py-8">
        
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-block p-4 rounded-full bg-primary/10 text-primary mb-4">
            <HardDriveDownload className="w-16 h-16" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-primary to-purple-500">
            Google Drive Downloader Pro
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A ferramenta definitiva e autônoma para baixar gigabytes de ROMs, coleções completas e arquivos do Google Drive com velocidade extrema e resiliência.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="rounded-full px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-primary/20">
              <a href="/DriveDownloader.exe" download>
                <Download className="w-5 h-5 mr-2" /> Baixar Versão Windows (.exe)
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 py-6 text-lg w-full sm:w-auto">
              <a href="#como-usar">Como Funciona</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Versão Standalone (Não requer Python) • ~39MB</p>
        </section>

        {/* Splash Image Showcase */}
        <section className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
          <Image 
            src="/drive-splash.png" 
            alt="Interface do Drive Downloader" 
            width={1200} 
            height={600} 
            className="w-full object-cover rounded-2xl opacity-90"
          />
        </section>

        {/* Features Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Recursos Profissionais</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Desenvolvido para máxima eficiência na hora de montar sua biblioteca de jogos retrô ou fazer backups em massa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur border-blue-500/20">
              <CardHeader>
                <Rocket className="w-8 h-8 text-blue-500 mb-2" />
                <CardTitle>Multithreading (Turbo)</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Baixe até 10 arquivos simultaneamente. Configurável dinamicamente através de um controle deslizante na interface.
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-green-500/20">
              <CardHeader>
                <Filter className="w-8 h-8 text-green-500 mb-2" />
                <CardTitle>Filtros Inteligentes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Escolha baixar a pasta inteira ou filtre automaticamente apenas por Imagens, Vídeos ou Documentos. O sistema ignora o resto.
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-purple-500/20">
              <CardHeader>
                <ShieldCheck className="w-8 h-8 text-purple-500 mb-2" />
                <CardTitle>Rede Resiliente (Auto-Retry)</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Em caso de quedas na conexão ou falhas de servidor, o sistema faz até 3 tentativas de reconexão invisíveis antes de acusar erro.
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-orange-500/20 lg:col-span-3">
              <CardHeader>
                <Zap className="w-8 h-8 text-orange-500 mb-2" />
                <CardTitle>Eficiência de Banda (Skip Automático)</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Se a sua internet cair no meio do processo ou você quiser retomar um download depois, não se preocupe. O sistema identifica se um arquivo já existe localmente e o pula automaticamente (Skip), economizando horas de re-download e franquia de dados.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Use */}
        <section id="como-usar" className="max-w-4xl mx-auto space-y-8 bg-muted/30 p-8 md:p-12 rounded-3xl border border-border">
          <div className="space-y-2 text-center mb-8">
            <h2 className="text-3xl font-bold">Como Usar</h2>
            <p className="text-muted-foreground">É simples, rápido e não exige conhecimentos técnicos.</p>
          </div>
          <ol className="relative border-l border-primary/30 ml-4 space-y-10">
            <li className="pl-8 relative">
              <div className="absolute w-6 h-6 bg-primary rounded-full -left-3 top-0 flex items-center justify-center text-xs font-bold text-primary-foreground border-4 border-background">1</div>
              <h3 className="font-bold text-lg mb-1">Baixe e Abra</h3>
              <p className="text-muted-foreground">Baixe o arquivo <code>.exe</code> no botão acima e execute-o. Não precisa instalar nada, é um aplicativo portátil!</p>
            </li>
            <li className="pl-8 relative">
              <div className="absolute w-6 h-6 bg-primary rounded-full -left-3 top-0 flex items-center justify-center text-xs font-bold text-primary-foreground border-4 border-background">2</div>
              <h3 className="font-bold text-lg mb-1">Escolha a Pasta de Destino</h3>
              <p className="text-muted-foreground">Clique em <strong>Procurar Pasta</strong> e selecione onde os arquivos (ROMs, BIOS, etc) serão salvos no seu computador.</p>
            </li>
            <li className="pl-8 relative">
              <div className="absolute w-6 h-6 bg-primary rounded-full -left-3 top-0 flex items-center justify-center text-xs font-bold text-primary-foreground border-4 border-background">3</div>
              <h3 className="font-bold text-lg mb-1">Cole o Link do Drive</h3>
              <p className="text-muted-foreground">Insira o link público da pasta do Google Drive. O histórico lembrará dos seus últimos 5 links automaticamente!</p>
            </li>
            <li className="pl-8 relative">
              <div className="absolute w-6 h-6 bg-primary rounded-full -left-3 top-0 flex items-center justify-center text-xs font-bold text-primary-foreground border-4 border-background">4</div>
              <h3 className="font-bold text-lg mb-1">Inicie o Download</h3>
              <p className="text-muted-foreground">Clique em <strong>Analisar</strong> para listar os arquivos e depois no botão verde <strong>Iniciar Download</strong>. Um alerta sonoro do Windows te avisará quando terminar!</p>
            </li>
          </ol>
        </section>
      </main>

      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>Projeto de código aberto desenvolvido em Python.</p>
        </div>
      </footer>
    </div>
  );
}
