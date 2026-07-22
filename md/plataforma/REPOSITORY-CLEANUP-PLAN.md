# TASK-032 — Repository Cleanup Plan

Data: 2026-07-21  
Base: `REPOSITORY-AUDIT.md`  
Modo: planejamento somente. Nenhuma operação Git, alteração de código, movimentação ou remoção foi executada.

## Decisão por item inventariado

| Arquivo ou conjunto | Categoria da auditoria | Ação | Justificativa |
| --- | --- | --- | --- |
| `md/plataforma/07-strategic-log-antigravity.md` | B — Documentação | KEEP | Registro estratégico do projeto. |
| `src/app/about/page.tsx` | A — Release | KEEP | Rota institucional pública. |
| `src/app/globals.css` | A — Release | KEEP | Estilos globais da aplicação. |
| `src/app/layout.tsx` | A — Release | KEEP | Layout e metadata globais. |
| `src/app/page.tsx` | A — Release | KEEP | Home pública. |
| `src/app/playbook/page.tsx` | D — Revisão | REVIEW | Confirmar se a superfície deve permanecer publicada na Release 1.0. |
| `src/app/transformations/[slug]/page.tsx` | D — Revisão | REVIEW | Rota legada do Journal; depende de decisão de migração. |
| `src/app/transformations/carenet-longevity/page.tsx` | D — Revisão | REVIEW | Conteúdo legado; não remover sem decisão editorial. |
| `src/app/transformations/listo-sistemas/page.tsx` | D — Revisão | REVIEW | Conteúdo legado; não remover sem decisão editorial. |
| `src/app/transformations/page.tsx` | D — Revisão | REVIEW | Índice do Journal legado; requer escopo explícito. |
| `src/app/transformations/uniasselvi-plataformas-educacionais/page.tsx` | D — Revisão | REVIEW | Conteúdo legado; não remover sem decisão editorial. |
| `src/app/transformations/vm-comunicacao/page.tsx` | D — Revisão | REVIEW | Conteúdo legado; não remover sem decisão editorial. |
| `src/components/sections/About.tsx` | A — Release | KEEP | Seção pública da Home. |
| `src/components/sections/CTA.tsx` | A — Release | KEEP | Conversão pública. |
| `src/components/sections/Header.tsx` | A — Release | KEEP | Navegação global. |
| `src/components/sections/Hero.tsx` | A — Release | KEEP | Hero público. |
| `src/components/sections/Problem.tsx` | D — Revisão | REVIEW | Confirmar uso efetivo e dependência do Journal legado. |
| `src/components/sections/Transformations.tsx` | D — Revisão | REVIEW | Confirmar uso efetivo após a substituição pelo catálogo de Cases. |
| `src/components/ui/Button.tsx`, `Card.tsx`, `Container.tsx` | A — Release | KEEP | Componentes UI compartilhados. |
| `src/lib/analytics.ts` | A — Release | KEEP | Infraestrutura de analytics da Release. |
| `src/app/cases/`, `src/app/journal/`, `src/app/robots.ts`, `src/app/sitemap.ts` | A — Release | KEEP | Rotas canônicas e SEO necessários em produção. |
| `src/app/transformations/vitru-innovation-lab/` | A — Release | KEEP | Conteúdo legado ainda referenciado pelo Journal; manter até migração deliberada. |
| `src/components/cases/`, `src/components/navigation/` | A — Release | KEEP | Renderização dos Cases e navegação. |
| `src/components/sections/Companies.tsx`, `Journal.tsx`, `SelectedCases.tsx` | A — Release | KEEP | Seções vigentes da Home. |
| `src/data/case-production-pipeline.ts`, `draft-cases.ts`, `editorial-model.ts`, `portfolio-content.ts`, `published-cases.ts` | A — Release | KEEP | Fonte de verdade editorial e pipeline de publicação. |
| `src/lib/portfolio-navigation.ts`, `supabase/` | A — Release | KEEP | Navegação derivada e infraestrutura de dados. |
| `public/imagem/vitru/logo-uniasselvi-white.png`, `public/imagem/vm/logo-vm-comunicacao.jpg` | A — Release | KEEP | Assets efetivamente servidos pela aplicação. |
| Todos os documentos de especificação e histórico em `md/plataforma/` — P00–P10, C01–C02, EV, RC, TASK, UI, IMPLEMENTATION, auditorias, release notes e fontes dos Cases | B — Documentação | KEEP | Constituem o histórico técnico, a especificação aprovada e os registros de execução. |
| `md/plataforma/CHANGELOG.md` | B — Documentação | KEEP | Changelog canônico da Release; deve permanecer junto ao histórico técnico. |
| `src/components/sections/Companies (1).tsx` | C — Temporário | DELETE | Cópia com sufixo de duplicação; a versão canônica é `Companies.tsx`. |
| `imagem/uniasselvi/` | D — Revisão | IGNORE | Fonte local fora de `public`; manter localmente até uma decisão de curadoria/versionamento. |
| `imagem/vitru/hub-correcoes/` | D — Revisão | IGNORE | Acervo-fonte local, não necessário para servir a aplicação atual. |
| `imagem/vitru/sofia/` | D — Revisão | IGNORE | Acervo-fonte local, não necessário para servir a aplicação atual. |
| `imagem/vitru/vitruchat/` | D — Revisão | IGNORE | Acervo-fonte local; a aplicação deve usar somente os assets curados em `public`. |
| `imagem/vitru/logo-uniasselvi-white.png` | D — Revisão | IGNORE | Duplicata-fonte local do asset público canônico. |
| `imagem/vm/logo-vm-comunicacao.jpg` | D — Revisão | IGNORE | Duplicata-fonte local do asset público canônico. |
| `pnpm-workspace.yaml` | D — Revisão | REVIEW | Confirmar o package manager antes de versionar ou descartar. |

## Resumo quantitativo

As quantidades contam as linhas de inventário acima; linhas que representam uma família de arquivos foram preservadas como uma unidade de decisão para evitar ações parciais.

| Ação | Quantidade | Resultado pretendido |
| --- | ---: | --- |
| KEEP | 20 | Versionar/preservar como parte da Release ou documentação canônica. |
| IGNORE | 6 | Manter localmente como fonte de assets, fora do versionamento. |
| DELETE | 1 | Remover somente após aprovação explícita da execução da limpeza. |
| REVIEW | 10 | Decisão manual obrigatória antes de qualquer alteração. |
| MOVE | 0 | Nenhuma movimentação é segura sem definir uma política oficial para fontes de imagem. |

## Sequência recomendada para a próxima TASK

1. Decidir o destino público das rotas e componentes legados `transformations` e `playbook`.
2. Confirmar se `pnpm-workspace.yaml` pertence ao repositório.
3. Aprovar formalmente a remoção única de `Companies (1).tsx`.
4. Somente depois, estabelecer uma regra de ignore para os acervos de imagem locais e selecionar explicitamente os arquivos KEEP para staging.

Nenhuma dessas ações foi executada nesta TASK.
