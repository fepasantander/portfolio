# TASK-035 — Release Staging Preparation

Data: 2026-07-22  
Modo: planejamento somente. Nenhuma operação Git mutável foi executada.

## Resumo do status

- Branch atual: `codex/program-001-vitru-innovation-lab`.
- Staged: nenhum arquivo.
- Arquivos rastreados modificados: 22 arquivos de aplicação e 16 remoções aparentes de Markdown na raiz.
- Não rastreados: novos arquivos da Release, documentação reorganizada em `md/plataforma/archive/`, assets públicos e fontes locais de imagem.

As 16 remoções de Markdown não são exclusões efetivas: seus equivalentes estão em `md/plataforma/archive/`. Devem ser staged junto com os arquivos do archive para que o Git detecte as movimentações e preserve o histórico.

## INCLUDE

| Arquivo ou conjunto | Justificativa |
| --- | --- |
| `md/plataforma/CHANGELOG.md`, `REPOSITORY-AUDIT.md`, `REPOSITORY-CLEANUP-PLAN.md`, `TASK-033 — Documentation Organization.md`, `TASK-034 — Repository Final Cleanup.md`, `TASK-035 — Release Staging Preparation.md`, `IMPLEMENTATION-TASK-033.md`, `IMPLEMENTATION-TASK-034.md`, `RELEASE-STAGING-PLAN.md` | Documentação operacional e de Release. |
| `md/plataforma/archive/` | Histórico técnico preservado e reorganizado. Inclui as 16 movimentações que hoje aparecem como `D` na raiz. |
| `src/app/about/page.tsx`, `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx` | Superfícies e estilos públicos classificados como `KEEP`. |
| `src/components/sections/About.tsx`, `CTA.tsx`, `Header.tsx`, `Hero.tsx` | Seções vigentes da Home, classificadas como `KEEP`. |
| `src/components/ui/Button.tsx`, `Card.tsx`, `Container.tsx` | UI compartilhada da Release. |
| `src/lib/analytics.ts` | Analytics da Release. |
| `src/app/cases/`, `src/app/journal/`, `src/app/robots.ts`, `src/app/sitemap.ts` | Rotas canônicas e SEO da Release. |
| `src/app/transformations/vitru-innovation-lab/` | Conteúdo Journal legado aprovado para permanência. |
| `src/components/cases/`, `src/components/navigation/` | Renderização e navegação dos Cases. |
| `src/components/sections/Companies.tsx`, `Journal.tsx`, `SelectedCases.tsx` | Componentes vigentes da Home. |
| `src/data/case-production-pipeline.ts`, `draft-cases.ts`, `editorial-model.ts`, `portfolio-content.ts`, `published-cases.ts` | Pipeline e fonte editorial da Release. |
| `src/lib/portfolio-navigation.ts`, `supabase/` | Navegação derivada e infraestrutura. |
| `public/imagem/vitru/logo-uniasselvi-white.png`, `public/imagem/vm/logo-vm-comunicacao.jpg` | Assets públicos efetivamente servidos. |
| Remoção de `src/components/sections/Companies (1).tsx` | Exclusão aprovada da cópia temporária; a versão canônica está em `Companies.tsx`. |

## EXCLUDE

| Arquivo ou conjunto | Justificativa |
| --- | --- |
| `src/app/playbook/page.tsx` | Item `REVIEW` no plano aprovado; não integrar sem decisão de escopo público. |
| `src/app/transformations/[slug]/page.tsx`, `carenet-longevity/page.tsx`, `listo-sistemas/page.tsx`, `page.tsx`, `uniasselvi-plataformas-educacionais/page.tsx`, `vm-comunicacao/page.tsx` | Alterações em rotas legadas classificadas como `REVIEW`; manter a versão já rastreada fora deste staging. |
| `src/components/sections/Problem.tsx`, `Transformations.tsx` | Componentes associados ao Journal legado, classificados como `REVIEW`. |
| `imagem/uniasselvi/`, `imagem/vitru/hub-correcoes/`, `imagem/vitru/sofia/`, `imagem/vitru/vitruchat/`, `imagem/vitru/logo-uniasselvi-white.png`, `imagem/vm/logo-vm-comunicacao.jpg` | Fontes locais de assets classificadas como `IGNORE`; não fazem parte dos assets públicos curados. |
| `pnpm-workspace.yaml` | Item `REVIEW`; o projeto utiliza `package-lock.json` e não há `pnpm-lock.yaml`. |

## Confirmação

A Release está pronta para **staging seletivo** conforme esta lista. O staging deve incluir apenas os itens `INCLUDE`; não utilizar `git add .` enquanto os itens `EXCLUDE` permanecerem no diretório de trabalho.
