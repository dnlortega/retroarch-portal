import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
        404 - Jogo Não Encontrado
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">
        Parece que você tentou carregar uma ROM que não existe neste cartucho.
      </p>
      <Button asChild size="lg" className="rounded-full">
        <Link href="/">Voltar para o Menu Principal</Link>
      </Button>
    </div>
  );
}
