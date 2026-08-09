"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Aplicação encontrou um erro:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
        Glitch no Sistema!
      </h2>
      <p className="text-muted-foreground mb-8 text-lg max-w-md">
        Algo deu errado ao carregar este conteúdo. Pode ter sido um &quot;Bad ROM&quot; ou um erro temporário.
      </p>
      <Button onClick={() => reset()} size="lg" className="rounded-full bg-red-600 hover:bg-red-700 text-white">
        Tentar Novamente (Reset)
      </Button>
    </div>
  );
}
