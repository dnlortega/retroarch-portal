"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HardDriveDownload, ArrowLeft, Search, Play, CheckCircle2, Loader2, XCircle, Clock } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DriveFile {
  id: string;
  name: string;
  size: string;
  status: "idle" | "downloading" | "success" | "error";
}

export default function DriveDownloaderPage() {
  const [url, setUrl] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = async () => {
    if (!url) return;
    setIsAnalyzing(true);
    setErrorMsg("");
    setFiles([]);

    try {
      const res = await fetch("/api/drive-analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Erro ao analisar link");
      }

      let filteredFiles = data.files;
      if (filter !== "Todos") {
        filteredFiles = data.files.filter((f: any) => {
          const ext = f.name.split('.').pop()?.toLowerCase();
          if (filter === "Imagens") return ["jpg", "jpeg", "png", "gif", "webp"].includes(ext);
          if (filter === "Vídeos") return ["mp4", "mkv", "avi", "mov", "webm"].includes(ext);
          if (filter === "Documentos") return ["pdf", "doc", "docx", "txt", "xls", "xlsx"].includes(ext);
          return true;
        });
      }

      setFiles(filteredFiles.map((f: any) => ({ ...f, status: "idle" })));
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const startDownload = async () => {
    if (files.length === 0 || isDownloading) return;
    setIsDownloading(true);

    for (let i = 0; i < files.length; i++) {
      if (files[i].status === "success") continue;

      // Update status to downloading
      setFiles(prev => {
        const newFiles = [...prev];
        newFiles[i].status = "downloading";
        return newFiles;
      });

      // Trigger download via hidden iframe
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${files[i].id}`;
      
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = downloadUrl;
      
      if (iframeContainerRef.current) {
        iframeContainerRef.current.appendChild(iframe);
      }

      // Wait a bit for the browser to catch the download header before marking success
      // In a real scenario, detecting completion from a cross-origin iframe is impossible,
      // so we just delay before moving to the next.
      await new Promise(resolve => setTimeout(resolve, 1500));

      setFiles(prev => {
        const newFiles = [...prev];
        newFiles[i].status = "success";
        return newFiles;
      });
      
      // Cleanup iframe after a few seconds
      setTimeout(() => {
        if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      }, 10000);
      
      // Wait before starting the next file to prevent browser blocking multiple downloads
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    setIsDownloading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6">
        <Link href="/" className={`inline-flex items-center gap-2 mb-4 px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors`}>
          <ArrowLeft className="w-4 h-4" /> Voltar para o Portal
        </Link>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 max-w-5xl space-y-12 pb-12">
        <section className="text-center space-y-4">
          <div className="inline-flex p-4 rounded-full bg-blue-500/10 text-blue-500 mb-2">
            <HardDriveDownload className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-primary to-purple-500">
            Drive Downloader Web
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cole o link de uma pasta pública do Google Drive para baixar todos os arquivos em lote direto pelo seu navegador.
          </p>
        </section>

        <Card className="border-2 shadow-2xl bg-card/60 backdrop-blur-xl border-blue-500/20">
          <CardHeader>
            <CardTitle>Painel de Controle</CardTitle>
            <CardDescription>Configure sua fila de downloads</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Cole o link do Google Drive aqui..."
                className="flex-1 bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Todos">Todos os Arquivos</option>
                <option value="Imagens">Apenas Imagens</option>
                <option value="Vídeos">Apenas Vídeos</option>
                <option value="Documentos">Documentos</option>
              </select>
              <Button onClick={handleAnalyze} disabled={isAnalyzing || !url} className="px-8 bg-blue-600 hover:bg-blue-500 text-white">
                {isAnalyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5 mr-2" />}
                {isAnalyzing ? "Analisando..." : "Analisar"}
              </Button>
            </div>

            {errorMsg && (
              <div className="p-4 bg-destructive/10 text-destructive rounded-lg flex items-center gap-2 border border-destructive/20">
                <XCircle className="w-5 h-5" /> {errorMsg}
              </div>
            )}

            {files.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <div className="flex justify-between items-end border-b pb-2">
                  <div>
                    <h3 className="font-bold text-lg">Fila de Downloads</h3>
                    <p className="text-sm text-muted-foreground">{files.length} arquivos encontrados.</p>
                  </div>
                  <Button onClick={startDownload} disabled={isDownloading} className="bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/20">
                    {isDownloading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                    {isDownloading ? "Processando Fila..." : "Iniciar Download em Lote"}
                  </Button>
                </div>

                <div className="max-h-[400px] overflow-y-auto space-y-2 pr-2">
                  <AnimatePresence>
                    {files.map((file, idx) => (
                      <motion.div 
                        key={file.id + idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                          file.status === 'downloading' ? 'bg-primary/10 border-primary/30' : 
                          file.status === 'success' ? 'bg-green-500/10 border-green-500/30' : 
                          'bg-background border-border hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          {file.status === 'idle' && <Clock className="w-5 h-5 text-muted-foreground shrink-0" />}
                          {file.status === 'downloading' && <Loader2 className="w-5 h-5 animate-spin text-primary shrink-0" />}
                          {file.status === 'success' && <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />}
                          <span className="truncate font-medium">{file.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                          {file.status === 'downloading' ? 'Preparando...' : file.status === 'success' ? 'Enviado pro Navegador' : 'Aguardando'}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Hidden container for iframes to trigger downloads */}
      <div ref={iframeContainerRef} style={{ display: 'none' }} />
    </div>
  );
}
