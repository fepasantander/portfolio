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
* **Relatório Detalhado:** Todos os itens, decisões de design e justificativas técnicas foram registrados em [IMPLEMENTATION-RFC-0003.md](file:///C:/Users/MacInBox/Documents/profissional/portfolio/md/plataforma/IMPLEMENTATION-RFC-0003.md).

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
* **Documentação Técnica:** Elaborei o relatório consolidado [md/plataforma/IMPLEMENTATION-DD-0001.md](file:///C:/Users/MacInBox/Documents/profissional/portfolio/md/plataforma/IMPLEMENTATION-DD-0001.md) descrevendo as mudanças efetuadas, itens mantidos e próximos passos de conformidade.

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

---

## 🔮 Próximos Passos
1. **Playbook Alignment:** Validar se a página metodológica `/playbook` reflete o mesmo tom focado em destravar gargalos operacionais e sistêmicos.
2. **Review de Marca:** Integrar novos feedbacks conceituais decorrentes do review executivo de portfólio.





