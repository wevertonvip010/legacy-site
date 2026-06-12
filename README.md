# LEGACY MOVING — Site Institucional v1.1

Site completo, navegável, com identidade Vertente B Premium Editorial. HTML/CSS/JS puro, sem dependências de build, mobile-first.

## Novidades v1.1
- 19 edições textuais aplicadas conforme prints
- Seção Içamentos e embalagens especiais (substituindo internacional)
- Botão WhatsApp flutuante navy + champagne em todas as páginas
- Micro animações premium (fade-in, reveal on scroll, hover refinado)
- Ícones SVG outline em serviços, contato e diferenciais
- Seção de captura de leads (Guia Legacy — 12 perguntas)
- SEO completo (meta tags, Open Graph, Schema.org LocalBusiness, sitemap.xml, robots.txt)
- Formulários preparados para integração com sistema Legacy

## Estrutura

- index.html — Home
- servicos.html — 4 serviços (Residencial, Corporativo, Storage, Içamentos)
- trabalhamos.html — Processo em 4 etapas
- legacy.html — A Legacy (sobre)
- cobertura.html — Cidades + Operações Especiais
- contato.html — Canais de contato
- orcamento.html — Formulário
- styles.css — Folha de estilo única
- main.js — Interações (menu, scroll reveal, integração)
- sitemap.xml — Mapa do site para Google
- robots.txt — Diretrizes para crawlers
- README.md — Este arquivo

## Para ver o site agora

Abra index.html no seu navegador. Pronto.

## Para publicar online em 5 minutos (Netlify Drop)

1. https://app.netlify.com/drop
2. Arraste a pasta Legacy_Site_v1 inteira
3. Aguarde 30 segundos
4. URL automático tipo https://legacy-moving-xxxxx.netlify.app

Para vincular legacymoving.com.br: criar conta no Netlify, em Domain Management adicionar o domínio e configurar DNS no Registro.br.

## Integração com sistema Legacy

O site emite eventos JavaScript estruturados quando formulários são submetidos. O sistema Legacy pode escutar via:

```javascript
window.addEventListener('legacy:lead', function(e) {
  console.log('Lead recebido:', e.detail);
  // e.detail contém payload JSON estruturado
  // Enviar para seu backend via fetch:
  fetch('https://api.legacymoving.com.br/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(e.detail)
  });
});
```

### Payloads disponíveis

**Lead do Guia (captura por email/whatsapp):**
```json
{
  "source": "guia-legacy",
  "channel": "email" | "whatsapp",
  "contact": "valor preenchido",
  "timestamp": "ISO 8601"
}
```

**Lead de Orçamento:**
```json
{
  "source": "orcamento",
  "servico": "residencial|corporativo|storage|especiais|naosei",
  "origem_cep": "00000-000",
  "destino_cep": "00000-000",
  "data_desejada": "YYYY-MM-DD",
  "tamanho": "texto livre",
  "nome": "texto",
  "telefone": "texto",
  "email": "texto",
  "observacoes": "texto livre",
  "timestamp": "ISO 8601"
}
```

### Formulários

- O formulário Guia tem atributo `data-form="guia"`
- O formulário Orçamento tem atributo `data-form="orcamento"`
- Ambos seguem padrão Netlify Forms por padrão, mas podem ser apontados para qualquer endpoint via JavaScript

## SEO implementado

- Meta description e keywords em cada página
- Open Graph (Facebook/LinkedIn) e Twitter Card
- Canonical URLs
- Schema.org JSON-LD (MovingCompany) na home
- Sitemap.xml com prioridades
- Robots.txt liberado para indexação
- HTML semântico (header, main, footer, nav, section, aria-labels)
- Headings hierárquicos
- Mobile-first responsivo
- Performance otimizada (sem libs externas pesadas)

## Próximos passos críticos

1. Substituir placeholders: telefone (11) 0000-0000, e-mails, CNPJ, WhatsApp 5511900000000
2. Fotografia profissional editorial (R$ 8.000 a R$ 20.000)
3. Registrar legacymoving.com.br no Registro.br
4. Configurar e-mail @legacymoving.com.br (Google Workspace)
5. Conectar formulário ao sistema Legacy via endpoint próprio
6. Registrar no Google Search Console e submeter sitemap.xml
7. Configurar Google Analytics 4 e Google My Business
8. Instalar fontes Playfair Display e Inter no Illustrator (para edição dos logos)

## Identidade visual aplicada

- Navy #1A2942 (institucional dominante)
- Ivory #F8F6F1 (fundo neutro premium)
- Bronze #B08D57 (acento e filete)
- Champagne #C9A66B (versão luminosa para fundos escuros)
- Tipografia: Playfair Display (serif) + Inter (sans)

Site v1.1 — 27 de Maio de 2026 — Vertente B Premium Editorial.