# Platform Hardening — Relatório de Auditoria

**Data:** 16 de julho de 2026  
**Base auditada:** `main` no commit `81ca1d3`  
**Escopo:** qualidade técnica; nenhuma funcionalidade, narrativa ou interface foi alterada.

## Resumo executivo

A plataforma compila em produção, mas ainda não é uma base estável para crescimento prolongado. Os riscos predominantes estão em segurança operacional, duplicação estrutural dos cases, gestão de assets, confiabilidade do ambiente Windows e ausência de automação de qualidade.

Os achados prioritários são:

1. **Crítico:** uma credencial de ferramenta externa estava visível na linha de comando de um processo Node ativo.
2. **Alto:** `npm run lint` falha na base; não há gate de qualidade funcional.
3. **Alto:** o cliente Supabase é criado com valores vazios quando as variáveis não existem, interrompendo a pré-renderização do build.
4. **Alto:** cinco páginas de cases repetem estrutura, estado, modais e imports, com arquivos entre 422 e 949 linhas.
5. **Médio:** assets duplicados em `imagem/` e `public/imagem/` aumentam o repositório e a chance de divergência.

## 1. Arquitetura e organização atual

| Área | Estado atual | Avaliação |
| --- | --- | --- |
| Aplicação | Next.js 16 App Router, React 19, TypeScript estrito e Tailwind 4. | Base moderna e pequena. |
| Rotas | Landing, páginas institucionais, cinco hubs de transformação e uma rota dinâmica `[slug]`. | Dois modelos concorrentes de Case. |
| UI | `components/ui` contém primitives simples; `components/sections` contém seções de landing. | Primitives são úteis, mas páginas de Case não compõem a partir de módulos de Case. |
| Dados | `src/data/case-studies.ts` alimenta apenas a rota dinâmica legada. | Modelo não cobre os hubs executivos atuais. |
| Integrações | Supabase e camada de analytics local. | Sem provider, contrato ou estratégia de falha centralizados. |
| Documentação | `md/plataforma` combina constituições, fontes de verdade, logs e relatórios. | Sem taxonomia, índice ou ciclo de vida. |

## 2. Auditoria de componentes e responsabilidades

### Componentes excessivamente acoplados — Alto

- `vitru-oportunidades-tecnologicas/page.tsx` tem 949 linhas e concentra conteúdo, catálogo de imagens, modal acessível, foco, navegação por teclado, estado de abas e apresentação do Case.
- As páginas de `vm-comunicacao` (650 linhas), `carenet-longevity` (606), `uniasselvi-plataformas-educacionais` (520) e `listo-sistemas` (422) repetem o mesmo padrão de hub, header/footer, estados de modal e primitives de UI.
- A rota dinâmica `[slug]` mantém um terceiro padrão de Case, com dados estáticos, iframe Figma e modal próprio.

**Impacto:** uma melhoria de acessibilidade, modal, telemetria ou estrutura exige alterações coordenadas em vários arquivos; com 50 Cases, a duplicação se torna o principal freio de evolução.

### Responsabilidades mal distribuídas — Médio

- `Hero` realiza apresentação visual, telemetria, rolagem e uma chamada de sessão Supabase que não alimenta a UI.
- `analytics.ts` é um placeholder com `console.log`, mas é importado por componentes de interface. A infraestrutura de analytics está misturada à interação de apresentação.
- `case-studies.ts` carrega narrativa e URLs de um modelo antigo enquanto os Cases executivos usam páginas independentes.

### Problemas de importação e client boundaries — Médio

- Doze seções de landing e as seis páginas de Case usam `"use client"`.
- A página inicial é Server Component, mas a maior parte de seu conteúdo é hidratada porque importa seções Client.
- A rota `[slug]` também é Client Component para usar estado e `use(params)`, embora grande parte do conteúdo possa permanecer no servidor.

### Tailwind e Design System — Médio

- Os tokens globais existem em `globals.css`, mas a maioria das páginas usa cadeias extensas de classes inline.
- Há classes de escala não padrão como `zinc-250`, `zinc-350`, `zinc-450`, `zinc-555`, `zinc-650`, `zinc-905` e `zinc-955`. Sem tokens customizados documentados, elas podem gerar estilos ausentes ou inconsistentes.

## 3. Ambiente, cache e Windows

### Localhost e processos Node — Médio

- Na inspeção havia quatro processos `node.exe`, todos associados a ferramentas auxiliares; nenhum processo Next estava escutando as portas 3000, 3001, 3005, 3006 ou 3007.
- Logo, não foi encontrado processo Next preso no momento da auditoria. O risco é operacional: processos de ferramentas externas coexistem com projetos Next e tornam mais difícil identificar a origem de uma porta ou lock.
- O README exige iniciar em `3005`, mas não existe script dedicado nem verificação automática de porta.

### `.next`, EPERM e watchers — Alto

- O build atual gerou 478 arquivos em `.next` (~15,3 MB), comportamento normal do Next/Turbopack.
- O repositório ignora `.next`, mas não documenta limpeza segura, encerramento de dev servers ou separação de worktrees por processo.
- Em Windows, EPERM costuma ocorrer quando `next dev/build`, antivírus, Explorer, indexadores ou outro processo Node mantém handles em `.next` ou módulos nativos. O histórico desta plataforma já registrou EPERM em `.next`.
- Não há configuração de watchers, cache ou Turbopack que cause o problema por si só; a hipótese mais forte é lock de arquivo e concorrência de processos/worktrees.

### Git, worktrees e cache — Médio

- Foram encontrados sete worktrees: uma principal com mudanças locais, três branches de trabalho e duas worktrees destacadas de validação/deploy.
- `git fsck` não apontou corrupção, mas listou muitos objetos inalcançáveis e `git count-objects` reportou lixo na área de worktree.
- Isso não quebra o projeto agora, mas aumenta a chance de branch errada, artefato divergente, disco desperdiçado e confusão entre build/deploy canônico e isolado.

## 4. Dependências e qualidade executada

| Comando | Resultado |
| --- | --- |
| `npm install` | Concluído; 370 pacotes instalados. |
| `npm audit` | 2 vulnerabilidades moderadas: cadeia `next → postcss` (GHSA-qx2v-qp2m-jg93). A correção automática sugerida implica downgrade incompatível; exige atualização compatível planejada. |
| `npm outdated` | Atualizações patch disponíveis para Supabase, Tailwind/PostCSS, Lucide e ESLint; React 19.2.7 e TypeScript 7 são versões mais recentes fora das faixas atuais. Next 16.2.10 aparece como atual. |
| `npm run lint` | Falhou: `src/lib/analytics.ts` usa `any` explícito. Há três avisos adicionais de variáveis não usadas. |
| `npm run build` | Aprovado com variáveis locais carregadas; TypeScript e pré-renderização das 13 rotas concluídos. |

Não existe script de teste, suíte automatizada, verificação de tipos separada, CI versionado ou política de atualização de dependências.

## 5. Performance

- **Bundle/hydration — Médio:** client boundaries amplos fazem a landing hidratar mais código do que o necessário.
- **Re-renderização — Baixo:** `Header` altera estado a cada evento de scroll sem throttle/`requestAnimationFrame`; em equipamentos modestos pode gerar trabalho desnecessário.
- **Supabase no Hero — Médio:** a chamada `auth.getSession()` ocorre na montagem, não influencia o conteúdo e adiciona custo de rede/logs à primeira tela.
- **Imagens — Médio:** `public/` contém 99 arquivos (~20,1 MB). Há uso de `next/image`, mas não há orçamento de imagem, catálogo, dimensões normalizadas ou estratégia explícita de formatos/qualidade.
- **Fontes — Baixo:** `next/font/google` é usado. O build atual passou, mas uma build fria pode depender de disponibilidade de fonte/rede; não há plano de fallback local documentado.
- **Lazy loading — Médio:** seções e hubs extensos não usam `dynamic()` ou divisão explícita para partes pesadas, modais e iframes.

## 6. Segurança

- **Crítico — credencial em processo:** uma chave de ferramenta externa foi encontrada em argumento de linha de comando de processo Node. Argumentos podem ser lidos por usuários/processos locais e aparecer em logs. A chave deve ser revogada/rotacionada e passada por mecanismo que não exponha o valor no comando.
- **Alto — Supabase sem fail-fast:** `createClient("", "")` é executado quando as variáveis não existem; isso transforma configuração ausente em falha de build. As chaves `NEXT_PUBLIC_*` são apropriadas somente para URL e chave anônima; políticas RLS e chaves server-side não foram verificáveis pelo repositório.
- **Alto — headers/CSP ausentes:** `next.config.ts` está vazio. Não há CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` ou `frame-ancestors` definidos no projeto.
- **Médio — iframe externo:** a rota dinâmica incorpora Figma sem `sandbox` e sem uma CSP que restrinja `frame-src`.
- **Médio — vulnerabilidades:** duas vulnerabilidades moderadas na cadeia de CSS/Next aguardam estratégia de atualização compatível.

## 7. Escalabilidade projetada

| Cenário | Problema provável sem mudança estrutural |
| --- | --- |
| 100 componentes | Imports manuais, estilos inline e ausência de convenções de domínio dificultam descoberta e consistência. |
| 50 Cases | Páginas de centenas de linhas e modais copiados multiplicam custo de manutenção e regressões. |
| 10 Programas | Não há modelo de dados, roteamento ou manifesto para relacionar Programa → Case → evidências. |
| Área administrativa | Falta camada de autenticação, autorização, provider, middleware, schema e boundary server-side. |
| Analytics real | Placeholder atual não tem contrato de eventos, consentimento, fila, provider, ambiente ou testes. |
| Autenticação | Cliente Supabase é público/global; faltam session handling, server client, proteção de rota e RLS verificável. |
| Dashboard | Ausência de fetching server-side, cache/revalidação, query layer e componentes de visualização reutilizáveis. |

## Conclusão

O projeto é funcional para a escala atual, mas requer hardening antes de expandir produtos. A prioridade não é criar mais telas: é estabelecer controles de segurança, qualidade reprodutível, uma arquitetura de Case dirigida por dados e uma rotina operacional estável para Windows/Git/Next.
