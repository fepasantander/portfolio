# Codex Baseline Audit Report

**Data:** 14 de julho de 2026  
**Escopo:** auditoria de entendimento e qualidade. Nenhum código de produção foi alterado.

## Resumo executivo

A plataforma é uma aplicação Next.js 16 / React 19 bem encaminhada para o posicionamento definido: a Home apresenta primeiro o problema organizacional e os hubs de transformação adotam, em geral, a estrutura cenário, decisões e impacto. Há um Design System inicial reutilizável, assets locais, metadados globais e camadas preparatórias de Supabase e analytics.

O baseline não está pronto para uma nova feature. A validação está bloqueada por três erros de lint e o build local não conseguiu concluir porque `next/font` não conseguiu baixar Geist e Geist Mono neste ambiente. Além disso, a implementação de produção diverge do Strategic Log: Listo e Uniasselvi são deliberadamente ocultados fora de desenvolvimento, e as abas Revistas e Eventos da VM também ficam bloqueadas em produção, embora os documentos os descrevam como ativos e implementados.

A prioridade deve ser estabilização: corrigir qualidade e acessibilidade, decidir e remover o comportamento de bloqueio por ambiente, consolidar o modelo de hubs/cases e então validar build, lint e responsividade antes de evoluir conteúdo ou funcionalidades.

## Arquitetura do repositório

- **Stack:** Next.js 16.2.10 (App Router e Turbopack), React 19.2.4, TypeScript estrito, Tailwind CSS 4, Lucide e Supabase JS 2.
- **Rotas:** Home em `src/app/page.tsx`; hubs de transformação para VM, Listo, Carenet, Uniasselvi e Vitru; uma rota dinâmica legada em `src/app/transformations/[slug]`; e placeholders para `/about`, `/admin`, `/playbook` e `/transformations`.
- **Composição:** a Home compõe seções em `src/components/sections`; os primitivos reutilizáveis em `src/components/ui` são `Button`, `Card`, `Container`, `Heading` e `Paragraph`.
- **Dados:** existe uma fonte local separada apenas para a rota dinâmica, `src/data/case-studies.ts`. Cada hub, porém, mantém tipos, dados, renderização de casos e modal no próprio `page.tsx`.
- **Assets:** imagens e PDFs são entregues a partir de `public/`; os documentos estratégicos permanecem em `md/plataforma/`.
- **Infraestrutura:** não há `vercel.json` nem diretório `.vercel` versionado. A integração com Vercel é apenas documentada no README e depende da configuração externa do projeto ligado ao repositório GitHub.

## Estado de build e qualidade

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Instalação (`npm install`) | Bloqueada pelo ambiente | O `npm` global aponta para `npm-cli.js` inexistente; nenhuma dependência foi alterada. |
| Build de produção | Bloqueado por dependência externa | `next build` iniciou e falhou exclusivamente ao obter Geist e Geist Mono de `fonts.googleapis.com`. Não houve erro de TypeScript, rota ou asset antes dessa etapa. |
| Lint | Reprovado | A execução equivalente sobre `src` encontrou 3 erros e 4 avisos. A varredura completa `eslint .` excedeu 120 s neste ambiente. |
| Testes | Indisponíveis | Não há script `test`, configuração ou diretório de testes no `package.json`. |

Erros de lint confirmados:

1. `src/app/transformations/vitru-oportunidades-tecnologicas/page.tsx`: duas ocorrências de aspas não escapadas em JSX.
2. `src/lib/analytics.ts`: uso de `any` em `trackEvent`.
3. Avisos adicionais de imports/variáveis não utilizados em `page.tsx`, `Hero.tsx`, `Problem.tsx` e no hub Vitru.

## Comparação com o Strategic Log e as fontes de verdade

| Tema | Estado observado | Avaliação |
| --- | --- | --- |
| Narrativa executiva | Home e hubs usam predominantemente desafio, decisões e impacto. | Alinhado com DD-0001 e RFC-0003. |
| Caso 001 VitruChat | O hub Vitru exibe parte da estrutura oficial, incluindo governança e limitações. Porém a rota dinâmica legada mantém uma narrativa diferente, Figma embutido e modal de retenção. | Duas fontes de conteúdo para o mesmo caso criam risco de divergência. |
| Hubs implementados | As rotas de Listo e Uniasselvi existem, mas seus cards da Home só recebem `slug` em desenvolvimento. Na VM, Revistas e Eventos também são marcados como “Em breve” fora de desenvolvimento. | Diverge dos logs 06 e 07, que registram essas experiências como habilitadas/ativas. |
| Mídias e protótipos | O hub Vitru usa links externos condicionais, conforme o log mais recente; a rota dinâmica antiga ainda incorpora Figma e impede a abertura externa. | Conflito entre implementação legada e a decisão posterior. |
| Design System | Primitivos de UI e `Container` de 1280 px existem e são usados na maior parte das telas. | Parcialmente alinhado; faltam `Section`, `Quote` e `Divider` como componentes formais previstos pela Product Constitution. |

## Observações de acessibilidade

- **Alta:** os modais dos hubs e da rota dinâmica não usam semântica de diálogo (`role="dialog"`, `aria-modal`), não prendem/restauram foco e não oferecem fechamento por `Escape`. Isso prejudica navegação por teclado e leitores de tela.
- **Alta:** há controles interativos aninhados, como `Button` dentro de `<a>` na Hero e CTA, e um `<button>` dentro de `Link` na rota dinâmica. Essa estrutura é HTML inválido e pode produzir foco e anúncio inconsistentes.
- **Média:** o botão do menu móvel não declara `aria-expanded` nem `aria-controls`; seus estilos removem o outline sem fornecer o mesmo foco visível do primitivo `Button`.
- **Média:** várias classes Tailwind utilizam escalas inexistentes sem token definido (`zinc-250`, `450`, `550`, `650`, `655`, `850`, `955`). Quando ignoradas pelo compilador, a cor pode herdar um valor imprevisto, comprometendo contraste e legibilidade.
- **Positivo:** o documento possui `lang="pt-BR"`, hierarquia de títulos, rótulos em controles de carrossel/galeria e textos alternativos nas imagens relevantes. Imagens decorativas têm `alt=""`.

## Observações de responsividade

- A Home usa grid progressivo (`grid-cols-1`, `md`, `lg`), `Container` com padding escalonado e CTAs que se empilham em telas pequenas. Os hubs também têm estrutura de uma coluna antes de `lg`.
- O carrossel de depoimentos reduz de três cartões para um em mobile; navegação por botões e indicadores permanece disponível.
- Não houve validação visual em dispositivos reais nesta auditoria, pois o build local foi interrompido antes de gerar uma execução verificável.
- Risco: as páginas de hub concentram de 422 a 740 linhas cada, com modais e galerias próprios. Alterações de breakpoint, modal ou thumbnail precisam ser repetidas em vários arquivos e têm alta chance de regressão entre tamanhos de tela.

## Observações de SEO

- **Implementado:** metadados globais em português, `metadataBase`, canonical da Home, robots, Open Graph, Twitter large image e imagem local de 1200×630.
- **Lacunas:** não há metadados específicos por rota/caso, `generateMetadata`, `robots.ts`, `sitemap.ts` ou dados estruturados schema.org. Os placeholders e hubs herdam o mesmo título/canonical da Home.
- A presença simultânea do domínio canônico `felipesantander.com` no código e do domínio de produção documentado `felipe-santander.vercel.app` precisa de uma decisão explícita para evitar sinais canônicos conflitantes antes de indexação.

## Supabase, analytics e Vercel

- **Supabase:** `.env.local` contém os dois nomes de variáveis públicas esperados e está ignorado corretamente. O cliente é inicializado em `src/lib/supabase/client.ts`; a Hero executa `supabase.auth.getSession()` no carregamento, mas o resultado não alimenta uma funcionalidade de produto. Isso cria uma chamada e logs de console sem caso de uso definido.
- **Analytics:** a interface prevista pela Product Constitution existe (`trackPage`, `trackEvent`, `trackCTA`, `trackDownload`) e CTAs/carrossel a utilizam. Ela atualmente apenas escreve no console, não possui adaptador de provedor e `trackPage` não é chamado; portanto não há medição real de page view, CTA ou download.
- **Vercel:** não há configuração versionada. A ligação de GitHub/Vercel é descrita no README, mas variáveis de ambiente, domínio canônico, redirects e configurações de deployment não são auditáveis a partir do repositório.

## Dívida técnica e código duplicado

- Cinco hubs mantêm interfaces muito semelhantes (`ProjectItem`, `CaseStudyData`), estado de seleção, layout, fact sheet, área de anexos e modal. Eles ocupam aproximadamente 2.938 linhas em `page.tsx` separados.
- `src/data/case-studies.ts` e o hub Vitru descrevem o mesmo case em modelos e narrativas diferentes; o primeiro alimenta uma rota dinâmica legada.
- Ícones SVG de LinkedIn são declarados separadamente em Hero e CTA.
- Dados de conteúdo, comportamento de modal e layout estão acoplados nos arquivos de rota, dificultando revisão editorial contra os documentos oficiais.
- Classes de cor fora da escala Tailwind e animações `animate-in` sem plugin declarado tornam parte do acabamento dependente de comportamento implícito/ausente.

## Lacunas de documentação

- A precedência cita `00-Brand-Operating-System.md`, mas o arquivo não existe no repositório. É a principal lacuna de fonte de verdade.
- Não existe documentação de arquitetura atual, contrato de dados dos hubs, estados de publicação por ambiente, estratégia de migração da rota dinâmica ou inventário dos assets aprovados.
- README não registra os scripts de lint/testes, limites conhecidos de build de `next/font`, variáveis exigidas em Vercel ou a diferença entre domínio canônico e URL Vercel.
- O Strategic Log registra implementações concluídas, mas não diferencia claramente rotas presentes, rotas ativas em produção e conteúdo condicionado por `NODE_ENV`.

## Problemas priorizados

### Crítico

1. **Gate de produção contraditório:** Listo e Uniasselvi ficam sem link na Home em produção; Revistas e Eventos da VM ficam bloqueados. Isso contradiz os logs e reduz a evidência de transformação disponível ao visitante.

### Alto

1. **Lint reprovado:** três erros impedem o critério de aceite definido pelo AGENTS.md.
2. **Acessibilidade de modais e controles aninhados:** impede uma experiência de teclado/leitor de tela confiável.
3. **Duas implementações do VitruChat:** o hub oficial e a rota dinâmica legada divergem em fonte, protótipo e comportamento externo.

### Médio

1. **Duplicação extensa entre hubs:** aumenta custo e probabilidade de inconsistência visual/funcional.
2. **SEO somente global:** faltam títulos, canonical e dados estruturados por rota pública.
3. **Build não reprodutível offline:** `next/font/google` exige acesso externo durante a compilação local.
4. **Analytics sem provedor e sem `trackPage`:** as métricas estratégicas ainda não podem ser observadas.

### Baixo

1. **Primitivos ausentes no Seed Design System:** `Section`, `Quote` e `Divider` seguem informais/repetidos.
2. **Configuração Vercel não versionada:** reduz visibilidade do deploy, embora possa ser aceitável como configuração da plataforma.
3. **Rotas placeholder públicas:** podem ser indexadas com conteúdo “Em breve” se não receberem política de indexação específica.

## Recomendações

1. Criar uma branch de estabilização e definir, com base nos documentos aprovados, quais hubs/abas devem ser públicos; remover a ambiguidade de `NODE_ENV` antes de qualquer novo conteúdo.
2. Fazer o lint passar e repetir build/lint em ambiente com acesso às fontes ou com uma estratégia aprovada de fontes locais/fallback.
3. Corrigir primeiro a semântica dos controles e o ciclo de foco dos modais; depois realizar uma revisão de contraste em light e dark mode com as classes válidas de Tailwind.
4. Eleger uma única rota e uma única estrutura de dados para cada case, começando pelo VitruChat, preservando o Case 001 como fonte editorial oficial.
5. Extrair somente após a estabilização um shell compartilhado de hub, anexos e modal, deixando conteúdo em dados tipados e revisáveis.
6. Definir domínio canônico, metadados por rota, sitemap, robots e schema.org antes de promover as subpáginas em busca orgânica.
7. Documentar a arquitetura atual, matriz de disponibilidade por ambiente, configuração de Vercel e plano de analytics antes de integrar um provedor.

## Primeira branch de implementação proposta

`codex/stabilize-baseline`

**Objetivo:** restaurar o baseline de aceite sem introduzir funcionalidades: alinhar visibilidade de produção ao Strategic Log aprovado, resolver os erros de lint, corrigir os problemas críticos de acessibilidade e registrar a decisão sobre a rota legada do VitruChat. A branch só deve avançar para refatoração de hubs após build e lint verdes e validação responsiva/manual.
