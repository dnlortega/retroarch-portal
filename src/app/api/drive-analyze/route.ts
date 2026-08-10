import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL é obrigatória' }, { status: 400 });
    }

    let files = [];
    
    // Tratamento básico para arquivos únicos
    if (url.includes('/d/') && !url.includes('folders/')) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      const id = match ? match[1] : null;
      if (id) {
        files.push({ id, name: `Arquivo_${id}`, size: 'Desconhecido' });
      }
    } 
    // Tratamento para Pastas
    else if (url.includes('folders/')) {
      const match = url.match(/folders\/([a-zA-Z0-9_-]+)/);
      const folderId = match ? match[1] : null;
      
      if (!folderId) {
        return NextResponse.json({ error: 'URL de pasta inválida' }, { status: 400 });
      }

      // Tenta fazer o scrape da página HTML do Google Drive
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9',
        }
      });
      
      const html = await response.text();
      
      // Procura pelo padrão DOM embutido na página
      try {
        const regex = /data-id="([a-zA-Z0-9_-]{28,33})"[^>]*?data-tooltip="([^"]+)"/g;
        let m;
        const uniqueIds = new Set();
        
        while ((m = regex.exec(html)) !== null) {
          const id = m[1];
          const name = m[2];
          
          // Filtra possíveis itens que não sejam arquivos reais (ex: pastas sem extensão, botoes)
          // Na maioria das vezes, arquivos tem extensão (.)
          if (!uniqueIds.has(id) && name.includes('.')) {
            uniqueIds.add(id);
            files.push({ id, name, size: 'Desconhecido' });
          }
        }
        
        // Se a regex primária falhar, tenta a heurística antiga de JSON embutido
        if (files.length === 0) {
           const fallbackRegex = /\["([a-zA-Z0-9_-]{28,33})",\["([^"]+\.[a-zA-Z0-9]{2,5})"/g;
           while ((m = fallbackRegex.exec(html)) !== null) {
              const [ , id, name ] = m;
              if (!uniqueIds.has(id)) {
                uniqueIds.add(id);
                files.push({ id, name, size: 'Desconhecido' });
              }
           }
        }
      } catch (err) {
        console.error("Erro ao analisar HTML do Drive:", err);
      }
    } else {
       // Se for url de ID direto (ex: id=...)
       const urlObj = new URL(url);
       const id = urlObj.searchParams.get('id');
       if (id) {
         files.push({ id, name: `Arquivo_${id}`, size: 'Desconhecido' });
       }
    }

    if (files.length === 0) {
      return NextResponse.json({ error: 'Nenhum arquivo detectado ou pasta privada/vazia.' }, { status: 404 });
    }

    return NextResponse.json({ files });
    
  } catch (error) {
    console.error("API Analyze Error:", error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
