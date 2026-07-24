# Diário de Bordo — Fase 2: Production Readiness Review

Data: 2026-07-21  
Decisão: **NO GO**

## Resumo executivo

A plataforma possui uma base editorial e de renderização reutilizável: `EditorialCase`, `MasterCaseTemplate`, catálogo derivado e rota dinâmica de Case. Contudo, existem dois bloqueadores reais para Deploy v1.0: validação de build/lint não demonstrada no estado atual e separação Draft → Published ainda violada pela promoção do Odonto1.

## Checklist

| Área | Estado | Achados |
|---|---|---|
| Arquitetura | Parcial | VitruChat segue `EditorialCase → pipeline → catálogo → rota dinâmica → template`. Odonto1 ainda é reexportado de `draft-cases` pela camada Published. |
| Navegação | Parcial | Home e rotas individuais existem; `/cases` foi removido da navegação pública, mas ainda consta no sitemap. |
| UX e conteúdo | Parcial | VitruChat recebeu estrutura editorial. Páginas Journal legadas ainda exibem estados `Em breve`; não bloqueiam o Case publicado, mas reduzem acabamento. |
| Cases | Parcial | VitruChat e Odonto1 compartilham template quando publicados; Odonto1 precisa sair fisicamente da camada Draft. |
| Responsividade | Não validada | Componentes usam classes responsivas, porém não houve QA visual em Desktop, Tablet e Mobile. |
| Performance | Não validada | Next Image é usado em superfícies novas; sem Lighthouse, console e build não há baseline verificável. |
| SEO | Parcial | Metadata base, robots e sitemap existem. Sitemap não deriva o catálogo e não inclui URLs individuais de Cases publicados. |

## Backlog priorizado

### P0 — impede Deploy

1. Executar e aprovar type check, lint e build no estado atual.
2. Promover Odonto1 fisicamente de `draft-cases.ts` para `published-cases.ts`, removendo a reexportação Draft dentro da camada Published.

### P1 — corrigir antes do Deploy

1. Derivar sitemap do catálogo publicado e incluir `/cases/vitruchat` e `/cases/odonto1`.
2. Executar QA funcional das rotas, imagens, breadcrumbs, Header, Footer e CTAs em Desktop, Tablet e Mobile.
3. Executar Lighthouse e revisar erros de console.

### P2 — evolução pós-publicação

1. Remover ou tratar estados `Em breve` nas páginas Journal legadas.
2. Consolidar metadados específicos de todos os Cases publicados.

## Riscos

- Sem build validado, erros de tipo, import ou rota podem chegar ao deploy.
- Manter Draft como dependência de Published permite publicação acidental de conteúdo ainda não promovido.
- Sitemap incompleto reduz descoberta orgânica de Cases já publicados.

## Recomendação final

**NO GO.** Corrigir exclusivamente os dois P0 acima, então executar build/lint e QA de rotas. Após isso, os P1 devem ser concluídos antes do Deploy v1.0 para garantir navegação e SEO coerentes.
