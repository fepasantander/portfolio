# TASK-031 — Repository Audit

Data: 2026-07-21  
Modo: diagnóstico somente. Nenhuma operação Git mutável foi executada.

## Branch e status

- Branch atual: `codex/program-001-vitru-innovation-lab`.
- Arquivos staged: nenhum.
- Arquivos modificados rastreados: 23.
- Arquivos/diretórios não rastreados: alto volume, concentrado em documentação `md/plataforma`, novos componentes/rotas/dados, assets públicos e cópias de assets fora de `public`.

## Inventário e classificação

### Estado rastreado — inventário individual

Os seguintes 23 arquivos rastreados estão modificados. A classificação abaixo é individual; nenhum deles está staged.

| Arquivo | Classe | Observação |
| --- | --- | --- |
| `md/plataforma/07-strategic-log-antigravity.md` | B | Diário histórico. |
| `src/app/about/page.tsx` | A | Página institucional da Release. |
| `src/app/globals.css` | A | Estilos globais. |
| `src/app/layout.tsx` | A | Layout e metadata globais. |
| `src/app/page.tsx` | A | Home pública. |
| `src/app/playbook/page.tsx` | D | Superfície técnica: confirmar escopo público. |
| `src/app/transformations/[slug]/page.tsx` | D | Rota Journal legada. |
| `src/app/transformations/carenet-longevity/page.tsx` | D | Conteúdo/rota legados. |
| `src/app/transformations/listo-sistemas/page.tsx` | D | Conteúdo/rota legados. |
| `src/app/transformations/page.tsx` | D | Índice de rotas legadas. |
| `src/app/transformations/uniasselvi-plataformas-educacionais/page.tsx` | D | Conteúdo/rota legados. |
| `src/app/transformations/vm-comunicacao/page.tsx` | D | Conteúdo/rota legados. |
| `src/components/sections/About.tsx` | A | Seção pública da Home. |
| `src/components/sections/CTA.tsx` | A | Conversão pública. |
| `src/components/sections/Header.tsx` | A | Navegação global. |
| `src/components/sections/Hero.tsx` | A | Hero público. |
| `src/components/sections/Problem.tsx` | D | Acoplado ao conteúdo Journal/legado; revisar uso. |
| `src/components/sections/Transformations.tsx` | D | Catálogo de transformações legado; revisar uso. |
| `src/components/ui/Button.tsx` | A | UI compartilhada. |
| `src/components/ui/Card.tsx` | A | UI compartilhada. |
| `src/components/ui/Container.tsx` | A | UI compartilhada. |
| `src/lib/analytics.ts` | A | Infraestrutura da Release. |

### Não rastreados — inventário por conjunto fechado

| Itens | Classe | Motivo |
| --- | --- | --- |
| `src/app/cases/`, `src/app/journal/`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/transformations/vitru-innovation-lab/` | A | Rotas e SEO necessários para a Release. |
| `src/components/cases/`, `src/components/navigation/`, `src/components/sections/Companies.tsx`, `Journal.tsx`, `SelectedCases.tsx` | A | Renderização e navegação do Portfolio. |
| `src/data/case-production-pipeline.ts`, `draft-cases.ts`, `editorial-model.ts`, `portfolio-content.ts`, `published-cases.ts`, `src/lib/portfolio-navigation.ts`, `supabase/` | A | Pipeline editorial, dados e infraestrutura. |
| `public/imagem/vitru/logo-uniasselvi-white.png`, `public/imagem/vm/logo-vm-comunicacao.jpg` | A | Assets efetivamente servidos pela aplicação. |
| Todos os `.md` não rastreados em `md/plataforma/`, inclusive documentos P00–P10, C01–C02, EV/RC/TASK/UI, relatórios `IMPLEMENTATION-*`, auditorias, notas de release e fontes dos Cases | B | Especificações e histórico técnico; decidir apenas se serão versionados junto com código. |
| `src/components/sections/Companies (1).tsx` | C | Cópia nominada com sufixo `(1)`; não é fonte canônica. |
| `imagem/uniasselvi/`, `imagem/vitru/hub-correcoes/`, `imagem/vitru/sofia/`, `imagem/vitru/vitruchat/`, `imagem/vitru/logo-uniasselvi-white.png`, `imagem/vm/logo-vm-comunicacao.jpg` | D | Fontes locais fora de `public`; exigem decisão de versionamento e de origem canônica. |
| `pnpm-workspace.yaml` | D | Confirmar se representa a estratégia de package manager pretendida. |

### A — Release

- `src/app/cases/`
- `src/app/journal/`
- `src/app/robots.ts`, `src/app/sitemap.ts`
- `src/components/cases/`, `src/components/navigation/`
- `src/components/sections/Companies.tsx`, `Journal.tsx`, `SelectedCases.tsx`
- `src/data/case-production-pipeline.ts`, `draft-cases.ts`, `editorial-model.ts`, `portfolio-content.ts`, `published-cases.ts`
- `src/lib/portfolio-navigation.ts`
- `src/lib/analytics.ts`
- `src/app/page.tsx`, `layout.tsx`, `globals.css`, `about/page.tsx`, `playbook/page.tsx`
- `src/components/sections/Header.tsx`, `Hero.tsx`, `About.tsx`, `CTA.tsx`
- `src/components/ui/Button.tsx`, `Card.tsx`, `Container.tsx`
- `public/imagem/vitru/logo-uniasselvi-white.png`, `public/imagem/vm/logo-vm-comunicacao.jpg`
- `supabase/`

### B — Documentação

- Todos os documentos em `md/plataforma/` com prefixos `P*`, `C*`, `EV-*`, `RC-*`, `TASK-*`, `IMPLEMENTATION-*`, `HOME-UX-AUDIT-*`, `PRODUCTION-READINESS-*`, `ARCHITECTURE-AUDIT.md`, `PORTFOLIO-RELEASE-CANDIDATE.md` e relatórios históricos.
- `md/plataforma/07-strategic-log-antigravity.md` (modificado).

### C — Temporário

- `src/components/sections/Companies (1).tsx` — cópia com sufixo `(1)`.

### D — Revisão manual

- `imagem/uniasselvi/`, `imagem/vitru/hub-correcoes/`, `imagem/vitru/sofia/`, `imagem/vitru/vitruchat/`, `imagem/vitru/logo-uniasselvi-white.png`, `imagem/vm/logo-vm-comunicacao.jpg`: assets fora de `public`; decidir se são fontes locais ou devem ser versionados/movidos.
- Rotas legadas modificadas em `src/app/transformations/**` e componentes `Problem.tsx`, `Transformations.tsx`: ainda atendem o Journal legado e exigem decisão de escopo antes de release.
- `pnpm-workspace.yaml`: não rastreado; confirmar se faz parte da configuração de dependências pretendida.
- `md/plataforma/CHANGELOG.md`: não rastreado; confirmar se será o changelog canônico da Release.

## Rotas e componentes potencialmente órfãos

- `src/app/transformations/**` permanece como Journal/legado e não deve ser removido sem migração explícita.
- `src/components/sections/Companies (1).tsx` é a única cópia claramente temporária detectada.
- As rotas `admin` e `playbook` são superfícies técnicas/legadas e exigem decisão de publicação, não remoção automática.

## Recomendações para a próxima TASK

1. Decidir, item a item, quais grupos A serão incluídos na Release.
2. Confirmar que toda documentação B deve ser versionada ou separar documentos pessoais/históricos.
3. Remover somente após aprovação o item C `Companies (1).tsx`.
4. Definir o destino dos assets D fora de `public` e o escopo das rotas Journal legadas.
5. Só então criar uma seleção explícita para staging e commit; não usar `git add .`.
