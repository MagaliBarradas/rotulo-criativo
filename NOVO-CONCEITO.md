# Rótulo Criativo — novo conceito oficial

Este documento é a referência oficial para a próxima reconstrução do site da Rótulo Criativo.

## Posicionamento visual

O site deve abandonar a linguagem excessivamente colorida e divertida e assumir uma direção:

- editorial;
- conceitual;
- minimalista;
- autoral;
- contemporânea;
- profissional.

A atmosfera deve aproximar-se de editoriais de moda, portfólios contemporâneos, grids suíços e projetos com forte direção tipográfica. A composição combina rigor editorial com cards modernos, fotografia monocromática, geometria e espaço vazio. As referências visuais servem como inspiração de atmosfera e não devem ser copiadas literalmente.

Antes de qualquer reconstrução, analisar todo o projeto existente. Preservar a logo oficial, fotografias reais, clientes e projetos reais, links válidos, SEO útil e funcionalidades que ainda façam sentido. Não inventar clientes, projetos, depoimentos ou qualquer informação.

## Tipografia

Utilizar apenas duas famílias gratuitas do Google Fonts:

### Space Grotesk

Fonte principal, moderna, editorial e autoral.

- 700 / Bold: headlines e títulos de grande impacto;
- 600 / SemiBold: subtítulos e chamadas;
- 500 / Medium: labels, botões, nomes de projetos, serviços e preços.

### Inter

Fonte secundária para leitura e organização.

- 400 / Regular: textos corridos e descrições;
- 500 / Medium: menus, legendas e informações técnicas;
- 600 / SemiBold: destaques secundários.

Síntese: **Space Grotesk cria impacto; Inter garante leitura e organização.**

## Paleta oficial

Criar e utilizar estas variáveis CSS:

```css
:root {
  --black: #0B0B0C;
  --graphite: #1E2023;
  --grey: #777A7E;
  --light-grey: #D7D7D3;
  --off-white: #F3F1EB;
  --petrol: #0C6F73;
  --petrol-light: #29989B;
}
```

Proporção visual aproximada:

- 55% off-white;
- 25% preto e grafite;
- 15% cinzas;
- 5% azul-petróleo.

O off-white substitui o branco puro. O azul-petróleo funciona como assinatura visual, aparecendo pontualmente em palavras, links, hovers, linhas, símbolos, shapes e pequenos detalhes. Não deve transformar o projeto num “site azul”.

Exemplo: na headline “DESIGN QUE DÁ FORMA ÀS IDEIAS.”, todo o texto pode ser preto e apenas “IDEIAS.” usar azul-petróleo.

## Linguagem visual

- Predominância de preto, grafite, cinza e off-white.
- Fotografia real preferencialmente em preto e branco.
- Tipografia grande e forte hierarquia editorial.
- Uso intencional de espaço vazio e assimetria controlada.
- Cards modernos com diferentes proporções, pequenos overlaps e deslocamentos.
- Retângulos, linhas, círculos, recortes geométricos, blocos sobrepostos e formas derivadas do símbolo da Rótulo.
- Iconografia outline, geométrica, monocromática e de traço fino.
- Não utilizar ícones 3D, emojis, neon, glow, bounce, elastic ou formas infantis.
- Não alterar a logo oficial.

## Arquitetura de ficheiros prevista

O HTML semântico das secções permanece no `index.html` para preservar SEO. Estilos, scripts e assets específicos ficam organizados por secção:

```text
assets/
scripts/
  main.js
styles/
  global.css
sections/
  01-home/
    home.css
    home.js
  02-clientes/
    clientes.css
    clientes.js
  03-destaques/
    destaques.css
    destaques.js
  04-servicos/
    servicos.css
    servicos.js
  05-planos/
    planos.css
    planos.js
  06-sobre/
    sobre.css
    sobre.js
  07-contato/
    contato.css
    contato.js
  08-footer/
    footer.css
    footer.js
```

A numeração existe apenas para organizar pastas e nunca deve aparecer visualmente no site. O conteúdo não deve ser carregado integralmente por JavaScript.

## Estrutura e conteúdo

### Navegação

- Logo original à esquerda.
- Links: Projetos, Serviços, Planos, Sobre e Contato.
- CTA à direita: “Falar comigo”.
- Navbar editorial, minimalista e sticky de forma discreta.
- No mobile: logo e menu hambúrguer.
- Não usar setas nos botões ou CTAs.

### Home

Headline: **DESIGN QUE DÁ FORMA ÀS IDEIAS.**

Texto: “Branding, sites e presença digital para transformar boas ideias em marcas que fazem sentido — e funcionam no mundo real.”

CTAs: “Falar sobre um projeto” e “Ver projetos”.

Informações editoriais: “Estratégia · Design · Implementação” e “Ideias · Marcas · Resultados”.

A hero deve criar tensão entre tipografia, fotografia e espaço vazio, evitando o layout padrão de texto de um lado e imagem do outro. A imagem pode invadir a tipografia. Formas geométricas em azul-petróleo podem surgir pontualmente.

No desktop, letras ou palavras podem reagir discretamente ao cursor apenas com `transform` (`scale`, `translate` e pequena rotação), sem layout shift e respeitando `prefers-reduced-motion`.

### Clientes

Título: **MARCAS QUE JÁ CONFIARAM NO MEU TRABALHO.**

Complemento: “De negócios locais a marcas maiores, cada projeto começa do mesmo lugar: entender o que precisa ser comunicado antes de decidir como vai parecer.”

Usar apenas logos reais num marquee contínuo. Estado normal em cinza; no hover, opacidade total e, quando apropriado, cor original. Pausar no hover. Não usar setas, dots ou paginação.

### Destaques

Dois cards predominantemente visuais:

1. **Sites** — “Sua marca também precisa funcionar na tela.” Serviços: web design, landing pages, Shopify e e-commerce. CTA: “Conhecer projetos web”.
2. **Branding** — “Antes de ser lembrada, uma marca precisa ser reconhecida.” Serviços: identidade visual, logotipo e direção visual. CTA: “Conhecer projetos de branding”.

Um card pode ser preto e o outro off-white ou cinza. Azul-petróleo apenas nos detalhes. Hover de 400–500 ms, imagem com `scale` máximo entre 1.03 e 1.05 e pequeno deslocamento do texto.

### Serviços

Título: **O QUE POSSO FAZER PELA SUA MARCA.**

Introdução: “Não existe uma solução igual para todo negócio. O projeto começa entendendo onde sua marca está e o que ela realmente precisa.”

Três cards:

- “Crio seu site” — sites institucionais, landing pages, mini sites e experiências para e-commerce;
- “Crio sua identidade visual” — logotipo, paleta, tipografia e direção visual;
- “Cuido da sua presença nas redes” — planeamento, posts, stories e organização visual.

Evitar uma cor diferente em cada card. Usar proporções variadas, títulos grandes, linhas finas, fotografia monocromática e pequenos detalhes em petróleo.

### Planos

Título: **ESCOLHA ATÉ ONDE QUER LEVAR A SUA MARCA.**

Os valores são pontos de partida e devem ser apresentados com transparência:

- **Presença** — a partir de 390 €;
- **Marca em movimento** — a partir de 690 €, identificado discretamente como “Mais procurado”;
- **Ecossistema** — a partir de 990 €;
- gestão de redes sociais — a partir de 150 €/mês.

Manter a lista detalhada de entregas definida no briefing original para cada plano. Incluir o aviso de que o orçamento final depende do escopo e que domínio, ferramentas pagas, fotografia, anúncios, e-commerce completo e funcionalidades especiais são orçados separadamente.

### Sobre

Título: **OI, EU SOU A MAGALI.**

Apresentar Magali como designer que trabalha entre identidade, experiência digital e implementação. Explicar a abordagem próxima da Rótulo Criativo: compreender primeiro o negócio e só depois decidir o que precisa de ser desenhado. Reforçar que um projeto não precisa apenas de ficar bonito; precisa de fazer sentido.

Usar a fotografia real existente, preferencialmente em preto e branco. Nunca gerar um rosto artificial para substituir uma fotografia disponível.

Informação secundária: “Estratégia + Design + Implementação”. CTA: “Conhecer meu trabalho”.

### Contato

Headline: **TEM UMA IDEIA? ME CONTA.**

Texto: “Pode ser uma marca começando, um site que precisa ganhar outra cara ou um negócio que simplesmente precisa organizar melhor sua presença digital. Vamos entender o que faz sentido para você.”

CTAs: “Falar comigo no WhatsApp” e “Enviar um e-mail”.

Texto de apoio: “Sem formulário interminável. Me conta o projeto e começamos por aí.”

Pode utilizar fundo preto ou grafite com um pequeno destaque em azul-petróleo.

### Footer

Incluir:

- logo original;
- “Design que dá forma às ideias.”;
- WhatsApp, e-mail, Instagram, Behance e LinkedIn, desde que existam links reais;
- links para Projetos, Serviços, Planos, Sobre e Contato;
- “Portugal · Brasil”;
- copyright com ano automático;
- frase final: **BOAS IDEIAS MERECEM GANHAR FORMA.**

## Movimento e interação

- Cards: `translateY` entre -4 px e -8 px.
- Imagens: `scale` máximo de 1.05.
- Links: sublinhado animado.
- Azul-petróleo pode surgir no hover.
- Usar CSS transitions e `IntersectionObserver` apenas quando necessário.
- Movimento sempre discreto e sofisticado.
- Respeitar `prefers-reduced-motion`.

## Responsividade, desempenho e acessibilidade

- Desktop com layout editorial amplo.
- Tablet com grid reduzido, preservando hierarquia.
- Mobile deve ser verdadeiramente recomposto, não apenas uma versão encolhida do desktop.
- Cards em coluna quando necessário.
- Tipografia responsiva com `clamp()`.
- Margens laterais adequadas e nenhum overflow horizontal.
- Imagens com lazy loading e WebP/AVIF quando possível.
- Evitar bibliotecas grandes de animação.
- Garantir `focus-visible`, textos alternativos, contraste adequado, HTML semântico e `aria-label` quando necessário.

## Regras permanentes

- Não usar setas em botões ou CTAs.
- Não mostrar numeração decorativa nas secções.
- Não alterar a logo oficial.
- Não inventar projetos, clientes, depoimentos ou informação.
- Não usar linguagem genérica de agência.
- Não exagerar no azul-petróleo.
- Não deixar o resultado excessivamente divertido.
- O resultado final deve parecer um estúdio editorial contemporâneo, autoral e profissional.

## Validação da futura reconstrução

Antes da entrega, validar HTML, CSS e JavaScript; testar desktop, tablet e mobile; verificar links, marquee, menu, CTAs, overflow e `prefers-reduced-motion`. Informar os ficheiros criados e modificados, as principais decisões e qualquer conteúdo ou asset ainda em falta.

