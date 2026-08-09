"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function TipsSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      id="dicas" 
      className="pt-8 space-y-8"
    >
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
        <AccordionItem value="item-5" className="border-border">
          <AccordionTrigger className="text-xl hover:text-primary transition-colors">Onde baixo ROMs e como uso?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground space-y-2">
            <p><strong>ROMs</strong> são os arquivos dos jogos. O RetroArch não vem com jogos pré-instalados.</p>
            <ul className="list-disc pl-5">
              <li><strong>Legalidade:</strong> É recomendado que você extraia (faça o "dump") dos seus próprios cartuchos e CDs físicos. Para baixar jogos gratuitos, legais e desenvolvidos pela comunidade, recomendamos o site <a href="https://pdroms.de/" target="_blank" rel="noreferrer" className="text-primary hover:underline">PDRoms</a>, focado em jogos de Domínio Público e Homebrews.</li>
              <li><strong>Como usar:</strong> Crie uma pasta chamada "Games" no seu PC. No RetroArch, vá em <em>Importar Conteúdo &gt; Analisar Diretório</em>. Ele vai procurar as ROMs e criar listas de reprodução lindas (Playlists) separadas por videogame!</li>
              <li><strong>Dica de Ouro:</strong> Mantenha os arquivos no formato <code>.zip</code> para economizar espaço (a maioria dos Cores da Nintendo e Sega suportam ler arquivos zipados direto).</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-border">
          <AccordionTrigger className="text-xl hover:text-primary transition-colors text-left">Dica: Como instalar o RetroArch no Android?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground space-y-2">
            <p>Emular no celular é incrível, mas a versão da Google Play Store costuma estar desatualizada e possui limitações técnicas impostas pelo Google.</p>
            <p><strong>Para a melhor experiência no Android:</strong></p>
            <ul className="list-disc pl-5">
              <li>Não baixe da Play Store. Acesse o <a href="https://www.retroarch.com/?page=platforms" target="_blank" rel="noreferrer" className="text-primary hover:underline">site oficial do RetroArch</a> no seu celular.</li>
              <li>Faça o download da versão <strong>APK (Download 64-bit)</strong>.</li>
              <li>No seu celular, permita a "Instalação de Fontes Desconhecidas" e instale o APK.</li>
              <li>A versão do site oficial não tem as restrições da Play Store, permitindo usar mais núcleos (Cores) e acessar os diretórios do seu celular sem bloqueios do Android.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.section>
  );
}

