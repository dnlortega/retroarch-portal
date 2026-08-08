import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function TipsSection() {
  return (
    <section id="dicas" className="pt-8 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Dicas Essenciais</h2>
        <p className="text-muted-foreground">Tudo o que você precisa saber para começar a jogar.</p>
      </div>

      <Accordion className="w-full">
        <AccordionItem value="item-1" className="border-border">
          <AccordionTrigger className="text-xl hover:text-primary transition-colors">Como instalo os Emuladores (Cores)?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            No menu principal do RetroArch, vá em <strong>Menu Principal &gt; Atualizador Online &gt; Baixar Núcleo (Core Downloader)</strong>. Escolha o console e baixe o Core recomendado. Após isso, você já pode carregar seus jogos!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-border">
          <AccordionTrigger className="text-xl hover:text-primary transition-colors">Preciso configurar meu controle?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Geralmente não! O RetroArch suporta controles modernos (Xbox, PlayStation, 8BitDo) no formato <strong>Plug-and-Play</strong>. Assim que você conecta, ele reconhece e mapeia automaticamente os botões para você.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-border">
          <AccordionTrigger className="text-xl hover:text-primary transition-colors">O que é o Menu Rápido (Quick Menu)?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Durante um jogo, aperte <strong>F1</strong> no teclado ou o botão "Home/Xbox/PS" do seu controle. Isso abre o Quick Menu. Nele, você pode salvar o jogo (Save States), carregar, aplicar Shaders (filtros de TV de tubo), ou fechar o jogo atual.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-border">
          <AccordionTrigger className="text-xl hover:text-primary transition-colors">E a BIOS? Onde coloco?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Alguns consoles (como PS1, Sega CD, Saturn) precisam dos arquivos de BIOS originais do videogame para funcionar. Você deve baixar esses arquivos e colocá-los dentro da pasta <code>system</code> que fica no diretório de instalação do seu RetroArch.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
