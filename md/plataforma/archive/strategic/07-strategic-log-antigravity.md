# Diário Estratégico — Antigravity (AG) — Fase 0.4
**Data de Início:** 09 de Julho de 2026  
**Projeto:** Plataforma Felipe Santander (Portfólio Executivo de Produto)  
**Status Atual:** Fase 0.4 / Sprint 03 Iniciada  

Este documento inicia o histórico de alinhamento estratégico, decisões técnicas, arquitetura e implementações práticas executadas na plataforma a partir da conclusão e deploy da Release 0.3.

---

## 🛠️ Log de Alterações (Fase 0.4 / Sprint 03)

### 1. Implementação Completa da RFC-0003 (Reposicionamento Estratégico)
* **Novo Posicionamento Narrativo:** Transicionei a voz da Landing Page para priorizar o problema operacional do cliente visitante em vez de focar individualmente nas qualidades de Felipe como Senior Product Designer.
* **Componentes Refatorados:**
  * **[Hero.tsx](file:///C:/Users/MacInBox/Documents/profissional/portfolio/src/components/sections/Hero.tsx):** Texto focado na aceleração da empresa por meio da unificação de frentes e CTA de rolagem para `#problem`.
  * **[ProblemsEncountered.tsx](file:///C:/Users/MacInBox/Documents/profissional/portfolio/src/components/sections/ProblemsEncountered.tsx) [NOVO]:** Grid de 9 cards de sintomas de dores organizacionais para gerar rápida identificação.
  * **[HowIThink.tsx](file:///C:/Users/MacInBox/Documents/profissional/portfolio/src/components/sections/HowIThink.tsx):** Renomeado para *"Como resolvo problemas"* e focado em método prático de trabalho (quanti-quali, handoffs, UX para IA).
  * **[WhyHireMe.tsx](file:///C:/Users/MacInBox/Documents/profissional/portfolio/src/components/sections/WhyHireMe.tsx):** Renomeado para *"O que normalmente muda"*, focando em transformações e eficiência de squads.
  * **[Transformations.tsx](file:///C:/Users/MacInBox/Documents/profissional/portfolio/src/components/sections/Transformations.tsx):** Reescrita da cópia de desafios e impactos para focar em transformações táticas de negócio.
  * **[FitAndSelection.tsx](file:///C:/Users/MacInBox/Documents/profissional/portfolio/src/components/sections/FitAndSelection.tsx) [NOVO]:** Split layout com critérios de ajuste ideal de projetos à esquerda e disclaimer de anti-fit de alta credibilidade à direita.
  * **[Header.tsx](file:///C:/Users/MacInBox/Documents/profissional/portfolio/src/components/sections/Header.tsx):** Atualização dos rótulos visuais de navegação para *"Método"* e *"Resultados"*.
* **Casos Subhomes Refatorados:**
  * Atualizei os títulos das subhomes e cases em `listo-sistemas`, `carenet-longevity`, `vm-comunicacao`, `vitru-oportunidades-tecnologicas` e `uniasselvi-plataformas-educacionais` para expressarem problemas operacionais específicos em vez de meras marcas ou produtos.
* **Relatório Detalhado:** Todos os itens, decisões de design e justificativas técnicas foram registrados em [IMPLEMENTATION-RFC-0003.md](../implementations/IMPLEMENTATION-RFC-0003.md).

### 2. Refatoração de Exibição de Mídia nas Subhomes (Modais & Thumbnails)
* **Remoção de Imagens Inline:** Removi as capturas de tela e o emulador de celular que ficavam no meio do texto, limpando a verticalidade da página e focando na leitura de contexto e desafios.
* **Componente de Thumbnails & Apoio a Decisão:** Adicionei uma seção inferior contendo 4 botões horizontais estilizados como thumbnails representativos dos materiais de projeto:
  * **Galeria de Imagens:** Abre um modal com os mockups/telas (ex.: Diva slides, Orchestra dashboards, logos VM).
  * **Vídeos / Demos (NDA previsto):** Abre um modal bloqueador explicando a restrição de dados de saúde/negócio reais.
  * **Protótipos Figma (NDA previsto):** Abre um modal bloqueador detalhando a propriedade das lógicas de fluxo.
  * **Boards / Decisões (Ativo em Vitru):** Em *VitruChat LLM*, abre a visualização interativa do diagrama de arquitetura conversacional (UX-AI), que foi re-alocado nesta modalidade. Nos demais, opera sob NDA.
* **Modal Overlay Geral:** Implementado um modal responsivo escuro premium com backdrop blur para exibição limpa e controle de fechamento intuitivo.

### 3. Ajuste de Contraste e Simplificação de Mídias nas Subhomes
* **Contraste de Textos Corrigido:** Substituí classes tipográficas incorretas no Fact Sheet e no banner de NDA (que deixavam o texto ilegível no modo escuro) por classes Tailwind válidas (`dark:text-zinc-200`, `dark:text-zinc-300`), garantindo máxima legibilidade.
* **Comportamento de Thumbnails Inativos:** Thumbnails cujos materiais não estejam disponíveis são renderizados com a tag `disabled`, opacidade reduzida, cursor de bloqueio e o subtexto *"Em breve"*, eliminando modais de aviso redundantes.
* **Remoção de Diagrama não-real:** Removi por completo o diagrama conceitual de multiagentes em *VitruChat LLM*, tanto na página quanto no modal.
* **Abertura Externa de Protótipos:** Configurei os links de Protótipos ativos para abrirem diretamente em uma nova aba (`_blank`), eliminando qualquer etapa intermediária de modal.
* **Ajuste de Opacidade do Backdrop & Borda da Janela Modal:** 
  * Reduzi a opacidade do overlay escuro do modal para `bg-black/15`.
  * Adicionei uma borda fina e sofisticada na janela modal (`border border-zinc-200/20 dark:border-zinc-800`), integrando-a com suavidade ao visual premium.

### 4. Integração de Links de Contato na Seção de Depoimentos
* **Botões de LinkedIn & WhatsApp:** Adicionei botões de mídias sociais no rodapé de cada card de recomendação, alinhados à direita do avatar e nome.
* **Mensagem Automática do WhatsApp:** Configurada via API (`https://wa.me/...`) para abrir em nova aba (`target="_blank"`) carregando a seguinte mensagem padrão: *"Bom dia, encontrei sua recomendação profissional sobre o Felipe Santander nas redes do mesmo, poderíamos conversar sobre este profissional?"*.
* **Estados Ativos / Bloqueados:**
  * **Débora Lopes:** LinkedIn Ativo | WhatsApp Bloqueado (Disabled)
  * **Rafael Medeiros:** LinkedIn Ativo | WhatsApp Ativo (Liberado)
  * **Anderson Venancio:** LinkedIn Ativo | WhatsApp Ativo
  * **Marcos Valesk:** LinkedIn Ativo | WhatsApp Ativo
  * **Thiago Velloso:** LinkedIn Ativo | WhatsApp Bloqueado (Disabled)

### 5. Evolução da Transformação da VM Comunicação (Caso: Revistas e Eventos)
* **Caso de Uso - Revistas:**
  * Re-escrevi a cópia do caso de uso de **Revistas** para esclarecer o papel das mídias científicas impressas premium como a fonte de autoridade e origem das matérias e entrevistas dos portais web.
  * Atualizei a lista de portais editoriais criados: **INPN, ImplantNews, PerioNews, PróteseNews, ImplantNewsPerio, OrtociênciaSPO e PCP**.
  * Detalhei no item de contribuição o desenvolvimento (em conjunto com TI) de um **parser de automação de diagramação** que traduz arquivos de diagramação física (InDesign) diretamente em código tabulado HTML/CSS, otimizando o fluxo e eliminando a necessidade de digitação manual de artigos.
  * Ajustei a galeria de **Revistas** para exibir exatamente os **8 slides** ordenados e nomeados pelo usuário (ImplantNews Capa $\rightarrow$ ImplantNews Site $\rightarrow$ ImplantNewsPerio Capa $\rightarrow$ ImplantNewsPerio Site $\rightarrow$ Ortodontia Capa $\rightarrow$ Ortodontia Site $\rightarrow$ Prótese News Capa $\rightarrow$ Prótese News Site).
* **Caso de Uso - Eventos:**
  * **Cópia e Storytelling:** Atualizei o caso de **Eventos** detalhando a estratégia de inbound marketing e nutrição na plataforma Odonto1 para cross-sell de ingressos de congressos, a modelagem da plataforma interna transacional de ticketing e vendas, e a produção de roteiros e vídeos promocionais no YouTube veiculados via Google Ads.
  * **Eventos e URLs:** Especifiquei os eventos atendidos (**IN, Orto, Abross, Ateliê Oral, Goiânia Dental Meeting, Celebration, Consenso e IPS**) ao longo das edições de **2014 a 2019**, esclarecendo que a estratégia tecnológica manteve as mesmas URLs (reaproveitamento dinâmico de domínios) para preservar o SEO e histórico.
  * **Galeria de Ativos:** Restringi os slides do modal de imagens do caso de **Eventos** estritamente aos ativos aprovados da pasta `eventos/aprovadas` (`site-in26.png` e `site-orto26.png`).
* **Correção de Estrutura Estática:** Copiei a árvore de ativos de imagem da raiz (`imagem/vm`) para a pasta pública do Next.js (`public/imagem/vm`), incluindo as subpastas `aprovadas`, garantindo o carregamento correto das imagens no servidor de desenvolvimento local e em produção.

### 6. Reposicionamento Narrativo Transversal (Design Directive 0001)
* **Diretriz Executada:** Re-roteirizei todos os estudos de caso da plataforma (incluindo as 5 subhomes de transformação e o feed da homepage) para migrar o foco de "atividades operacionais executadas" para "problemas organizacionais resolvidos".
* **Estrutura de Storytelling unificada:** Cada caso de uso agora adota a lógica implícita de **Cenário Encontrado** (diagnóstico de dores), **Decisões Tomadas** (estratégia e processos de squads) e **Impacto Gerado** (retorno prático ao negócio, engenharia e produto).
* **Documentação Técnica:** Elaborei o relatório consolidado [md/plataforma/IMPLEMENTATION-DD-0001.md](../implementations/IMPLEMENTATION-DD-0001.md) descrevendo as mudanças efetuadas, itens mantidos e próximos passos de conformidade.

### 7. Implementação do Estudo de Caso 001 - VitruChat LLM (Versão 1.0)
* **Objetivo:** Implementação da narrativa integral baseada no documento oficial de verdade `case-001-vitru-generative-ai-platform-v1.0.md`.
* **Componentes Criados/Reutilizados:**
  * **Reutilizados:** Contêineres, painel de abas lateral, botões de anexos com estado `disabled` para itens em NDA/em breve, componentes tipográficos (`Heading`, `Paragraph`) e componentes de cartão (`Card`).
  * **Criados/Modificados:** Adicionado bloco condicional de layout na subhome `/transformations/vitru-oportunidades-tecnologicas` para renderizar uma estrutura rica exclusiva para o Case 001.
* **Decisões Tomadas:**
  * Foco na governança de dados e segurança de informações corporativas versus mero design de interface.
  * Inclusão detalhada dos diferenciais (Contextualização Acadêmica e Camada Gerencial com acompanhamento de consumo de tokens e sustentabilidade).
  * Inclusão transparente das limitações (despriorização de pesquisa corporativa) e aprendizados (integração interdisciplinar desde o início).
* **Dificuldades Encontradas:**
  * Mapeamento fino de formatação no parser de diff do Next.js para substituição limpa e sem quebras de compilação. Resolvido com checkout manual e aplicação focada.
* **Sugestões para a Próxima Sprint:**
  * Integrar mockups e mídias visuais assim que forem liberados e catalogados.
  * Executar a estruturação rica para os demais estudos de caso (`sofia` e `hub-correcoes`) quando houver fontes de verdade dedicadas.

### 8. Adição de Novo Depoimento (Caio Cesar Barreira Luvisotto)
* **Objetivo:** Incluir a recomendação profissional de Caio Cesar Barreira Luvisotto na landing page principal.
* **Componentes Criados/Reutilizados:**
  * **Reutilizados:** Componente de carrossel `Testimonials.tsx` e estrutura de exibição social (botões de redirecionamento do LinkedIn e WhatsApp com mensagens pré-configuradas).
* **Decisões Tomadas:**
  * Utilizado o estilo de destaque `pink` no hover (`group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]`) para contrastar visualmente com os cards adjacentes.
  * O WhatsApp foi cadastrado como Ativo (`whatsappLocked: false`) utilizando o número fornecido.

### 9. Liberação de Acesso ao Case da Vitru em Produção
* **Objetivo:** Liberar o acesso público à subhome da Vitru (`/transformations/vitru-oportunidades-tecnologicas`) através do card correspondente na landing page.
* **Componentes Criados/Reutilizados:**
  * **Modificados:** [Transformations.tsx](file:///C:/Users/MacInBox/Documents/profissional/portfolio/src/components/sections/Transformations.tsx) (unlocked the card by setting the slug directly instead of only in dev mode `isDev`).

### 10. Bloqueio das Abas SofIA e Hub de Correções em Vitru
* **Objetivo:** Garantir que apenas o case do VitruChat LLM esteja ativo na subhome da Vitru, bloqueando as abas das oportunidades "SofIA" e "Hub de Correções" com badges de "Em breve" e desabilitando cliques.
* **Componentes Modificados:** [page.tsx](file:///C:/Users/MacInBox/Documents/profissional/portfolio/src/app/transformations/vitru-oportunidades-tecnologicas/page.tsx) (added `locked` property to `ProjectItem` interface and conditional styles in the sidebar rendering).

### 11. Case 002 — SofIA: Assistente Administrativa e evolução para Agente de Secretaria
* **Objetivo:** Implementar o segundo Case Executivo a partir do Documento Mestre `case-002-sofia-administrative-ai-assistant-v1.0.md`, reutilizando a estrutura do Case 001 sem alterar o Hub do Innovation Lab, o Design System ou outros Cases.
* **Implementação:** A aba SofIA foi liberada no hub existente `/transformations/vitru-oportunidades-tecnologicas` e passou a renderizar a narrativa completa do Case: contexto, problema, atuação, estratégia de retenção, comparação Web/Mobile, evolução do produto, limitações, aprendizados e resultado.
* **Decisões tomadas:** A esfera-guia foi registrada como mecanismo de direcionamento da atenção, retenção e futura gamificação; a evolução foi explicitada como Onboarding → Assistente Administrativa → Agente de Secretaria. Questões pedagógicas permanecem fora do escopo inicial, conforme Documento Mestre.
* **Evidências:** O bloco compartilhado `Evidências e Apoio à Decisão` foi posicionado imediatamente após o Executive Summary. Como não há ativos catalogados, ele está preparado e sinalizado como `Em atualização`, sem imagens, legendas ou conteúdos fictícios.
* **Validação:** Lint específico da página aprovado. O lint completo foi executado, mas permanece bloqueado por um erro preexistente em `src/lib/analytics.ts` (`no-explicit-any`) e três avisos fora do Case. O build de produção foi aprovado com TypeScript e pré-renderização das 13 rotas. Os grids responsivos existentes foram preservados para mobile, tablet e desktop; a SofIA não abre modal enquanto não houver evidências catalogadas.

### 12. Navegação entre o Innovation Lab, VitruChat e SofIA
* **Objetivo:** Eliminar fricção entre a Home, o Hub do Innovation Lab, os dois Cases publicados e as evidências visuais.
* **Rotas públicas:** Criado o Hub em `/transformations/vitru-innovation-lab` e estabelecida a rota canônica pública do SofIA em `/transformations/sofia-administrative-ai-assistant`. A Home direciona o card Vitru para o Hub; a partir dele, VitruChat e SofIA estão a um clique.
* **Navegação:** Foram adicionados breadcrumbs, ação `Voltar ao Innovation Lab`, links reais entre os Cases e estados explícitos de foco, hover, ativo e indisponível. Iniciativas futuras permanecem visíveis e sem interação simulada.
* **Evidências:** O bloco de evidências permanece logo após o Executive Summary, agora compacto, com CTA `Ver evidências visuais`. Quatro destaques selecionados foram posicionados após a contribuição do VitruChat; a galeria completa preserva as 28 imagens e sua navegação por teclado e foco controlado.

### 13. Sprint 08 — Hub de Correções: Preparação Estrutural
* **Objetivo:** Preparar a rota canônica `/transformations/hub-correcoes` para receber o terceiro Case do Innovation Lab sem antecipar narrativa, métricas ou evidências.
* **Estrutura:** A página recebeu a mesma ordem estrutural dos Cases existentes: Executive Summary, Evidências e Apoio à Decisão, Contexto, Problema, Minha Atuação, Processo, Decisões de Produto, Resultados, Aprendizados e navegação entre Cases. Todas as seções sem Documento Mestre exibem somente `Conteúdo em preparação`.
* **Evidências:** O bloco está preparado para imagens, boards, FigJam e documentos, sem ativos, legendas ou controles fictícios.
* **Navegação:** O Hub do Innovation Lab apresenta o Hub de Correções como `Case em preparação`, separado das iniciativas futuras. A sequência passa a ser VitruChat → SofIA → Hub de Correções.

---

## 🔮 Próximos Passos
1. **Playbook Alignment:** Validar se a página metodológica `/playbook` reflete o mesmo tom focado em destravar gargalos operacionais e sistêmicos.
2. **Review de Marca:** Integrar novos feedbacks conceituais decorrentes do review executivo de portfólio.

---

## 11. Sprint 04 — Product Parity

**Data:** 14 de julho de 2026
**Objetivo:** eliminar divergências entre documentos aprovados, Strategic Log, implementação e publicação, sem introduzir funcionalidades, alterar narrativa, Design System ou arquitetura.

### Paridade de publicação

- Removidos os gates condicionados a `NODE_ENV` da Home para as transformações **Listo** e **Uniasselvi**. Ambas as rotas existentes agora recebem links públicos em produção.
- Removido o gate de desenvolvimento da transformação **VM Comunicação**. As abas **Revistas** e **Eventos**, já registradas como implementadas e com assets aprovados, agora permanecem ativas em produção.

### Estabilização técnica

- Substituída a dependência de build em `next/font/google` pela pilha de fallback Geist/Inter já prevista pela Product Constitution. O build deixou de exigir acesso à rede para buscar fontes.
- Corrigidos os erros e avisos identificados pelo lint: importações/variáveis não usadas, aspas em JSX e tipagem insegura em analytics.
- Build de produção executado com sucesso: TypeScript, geração estática e as 13 rotas foram concluídos.
- Lint executado com sucesso sobre todo o código em `src/`.

### Acessibilidade e responsividade

- Removidos controles interativos aninhados entre links e botões.
- Adicionados `aria-expanded` e `aria-controls` ao menu móvel.
- Os modais de casos agora expõem semântica de diálogo, foco inicial no fechamento e fechamento via `Escape`.
- Confirmada por inspeção estática a preservação dos breakpoints existentes de Home e hubs; a validação visual automatizada em navegador não foi concluída devido à restrição de permissões do ambiente local.

### Registro da implementação

- O detalhamento de escopo, arquivos alterados e validações está em `IMPLEMENTATION-SPRINT-04-PRODUCT-PARITY.md`.

---

## 12. Case 001 VitruChat — Documento Mestre v2.0

**Data:** 14 de julho de 2026

### Implementação

- A página ativa de `VitruChat LLM` em `/transformations/vitru-oportunidades-tecnologicas` foi atualizada integralmente a partir de `case-001-vitru-generative-ai-platform-v2.0.md`.
- A narrativa agora preserva todas as seções da fonte oficial: Executive Summary, Contexto, Problema, Contribuição, universo acadêmico, camada gerencial, escalabilidade, limitações, aprendizados e resultado.
- Referências legadas da experiência ativa que não constavam no Documento Mestre v2.0 foram removidas, incluindo métricas e reconhecimentos não presentes na fonte oficial.
- O Fact Sheet passou a apresentar somente Empresa, Área e Produto, conforme o cabeçalho do documento mestre.
- Foram reutilizados `Container`, `Heading`, `Paragraph`, `Card`, a estrutura de hub, grids responsivos e anexos existentes; não foram criadas rotas, dependências ou componentes visuais novos.

### Validação

- Lint aprovado em `src/`.
- Build de produção aprovado, incluindo TypeScript e geração das 13 rotas.
- A estrutura responsiva existente foi preservada em mobile, tablet e desktop por meio dos breakpoints `sm`, `md` e `lg`.
- A página mantém listas semânticas, hierarquia de headings e o diálogo acessível do hub.

### Registro da implementação

- O relatório completo está em `IMPLEMENTATION-CASE-001-VITRU-V2.0.md`.

---

## 13. Sprint 06 - Programa 001 Innovation Lab

**Data:** 15 de julho de 2026

### Implementação

- Criada a rota `/transformations/vitru-innovation-lab` como Hub Executivo do Programa 001 - Innovation Lab.
- A página preserva a narrativa do Documento Mestre: resumo executivo, contexto, objetivos, contribuição, iniciativas, princípios de atuação, resultado e navegação do programa.
- Foram reutilizados `Header`, `Footer`, `Container`, `Heading`, `Paragraph` e `Card`; não houve alteração de Design System, identidade visual ou arquitetura.
- O card da Vitru na Home agora direciona para o Hub do programa. O Hub destaca e direciona explicitamente para o Case Completo do VitruChat em `/transformations/vitru-oportunidades-tecnologicas`.
- SofIA, Hub de Correções e Pesquisa Corporativa sobre IA foram registrados apenas como iniciativas do mesmo programa. Nenhum novo Case foi iniciado.

### Validação

- Lint e build de produção foram executados após a implementação.
- A página usa grids `md` e `lg`, tipografia fluida e espaçamentos responsivos para mobile, tablet e desktop.
- A estrutura inclui `main`, seções identificadas por headings, listas semânticas, links com texto descritivo e ícones decorativos ocultos de leitores de tela.

### Registro da implementação

- O detalhamento desta Sprint está em `SPRINT-06-REPORT.md`.

---

## 14. VitruChat - Evidências Visuais

**Data:** 15 de julho de 2026

### Implementação

- A galeria do Case VitruChat passou a utilizar as 28 capturas organizadas em `v1-light`, `v1-tour-guiado`, `v2-dark` e `v2-light`.
- O modal apresenta uma captura por vez, ocupa 90% da viewport e oferece navegação acessível entre as imagens, com legenda provisória de versão, tema ou tour.
- O bloco `Evidências e Apoio à Decisão (Anexos)` foi posicionado imediatamente após o Executive Summary, preservando o foco do Case em transformação organizacional antes dos demais aprofundamentos.
- Os ativos públicos foram atualizados sob `public/imagem/vitru/vitruchat/`; não houve alteração de narrativa, Design System, arquitetura ou outros Cases.

### Registro da implementação

- O registro compartilhável desta atualização está em `IMPLEMENTATION-VITRUCHAT-EVIDENCIAS-2026-07-15.md`.

### Publicação

- O Case VitruChat foi publicado em produção no projeto isolado `portfolio-vitruchat-deploy`: `https://portfolio-vitruchat-deploy.vercel.app`.
- O deploy usou uma worktree limpa do commit VitruChat e concluiu build, TypeScript e pré-renderização com sucesso.

## Navegação — Innovation Lab, VitruChat e SofIA

**Data:** 16 de julho de 2026

### Implementação

- Criado o Hub público do Innovation Lab em `/transformations/vitru-innovation-lab` e a rota canônica pública do SofIA em `/transformations/sofia-administrative-ai-assistant`.
- A Home agora direciona o card Vitru para o Hub; VitruChat e SofIA estão acessíveis a partir dele em um clique.
- Foram adicionados breadcrumbs, ação `Voltar ao Innovation Lab`, links entre Cases e estados claros para itens disponíveis e iniciativas `Em breve`.
- O bloco de evidências permanece após o Executive Summary com CTA compacto `Ver evidências visuais`; quatro destaques foram posicionados após a contribuição do VitruChat e a galeria completa mantém as 28 imagens.

### Registro da implementação

- O registro compartilhável desta atualização está em `IMPLEMENTATION-NAVIGATION-VITRU-INNOVATION-LAB-CASES.md`.

## Sprint 08 — Hub de Correções: Preparação Estrutural

**Data:** 16 de julho de 2026

### Implementação

- Criada a rota canônica pública `/transformations/hub-correcoes` com estrutura de Case pronta para receber Documento Mestre.
- As seções Executive Summary, Evidências e Apoio à Decisão, Contexto, Problema, Minha Atuação, Processo, Decisões de Produto, Resultados e Aprendizados exibem somente `Conteúdo em preparação`.
- O componente de evidências foi preparado para imagens, boards, FigJam e documentos, sem ativos ou conteúdo fictício.
- O Hub de Correções passou a ser apresentado no Innovation Lab como `Case em preparação`, separado das iniciativas futuras; a sequência agora é VitruChat → SofIA → Hub de Correções.

### Registro da implementação

- O registro compartilhável desta atualização está em `IMPLEMENTATION-HUB-INFRASTRUCTURE.md`.
