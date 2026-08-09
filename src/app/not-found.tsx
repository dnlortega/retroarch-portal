import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
        404 - Jogo Não Encontrado
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">
        Parece que você tentou carregar uma ROM que não existe neste cartucho.
      </p>
      <Link href="/" className={cn(buttonVariants({ size: "lg" }), "rounded-full")}>
        Voltar para o Menu Principal
      </Link>
    </div>

  );
}
