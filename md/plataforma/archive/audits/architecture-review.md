# Architecture Review — Platform Hardening

## Mapa atual

```text
src/app
├── page.tsx                    Landing (Server) → seções Client
├── transformations
│   ├── [slug]/page.tsx         Case legado, dados locais e iframe
│   └── <cinco hubs>/page.tsx   Cases com conteúdo e interação acoplados
├── components
│   ├── ui                      Container, Card, Heading, Paragraph, Button
│   └── sections                Landing e navegação
├── data/case-studies.ts        Catálogo legado de um Case
└── lib
    ├── analytics.ts            Placeholder local
    └── supabase/client.ts      Cliente público global
```

## Diagnóstico

### Pontos saudáveis

- App Router, TypeScript estrito e alias `@/*` estão corretamente configurados.
- As primitives de UI possuem responsabilidades simples e reaproveitáveis.
- A estrutura de rotas é pequena e o build estático é concluído com sucesso.
- `public/` é utilizado para os ativos servidos pelo Next.

### Lacunas arquiteturais

1. **Dois sistemas de Case.** A rota dinâmica baseada em `case-studies.ts` e os hubs executivos independentes não compartilham modelo, renderer, modal ou convenções de conteúdo.
2. **Páginas-monólito.** Hubs repetem estrutura, navegação, estados e modais em arquivos muito grandes.
3. **Sem domínio de programa/case.** Não existe uma fonte estruturada para Programa, Case, evidência, status, fonte de verdade e relações de navegação.
4. **Sem providers/hooks.** Supabase e analytics não possuem boundaries explícitos. A interface importa infraestrutura diretamente.
5. **Conteúdo e apresentação acoplados.** Narrativa, arrays de mídia, estados e markup convivem nas mesmas páginas.

## Organização proposta (não implementada)

```text
src/
├── app/
│   ├── (site)/
│   └── transformations/[program]/[case]/page.tsx
├── features/
│   ├── cases/
│   │   ├── components/          CaseLayout, EvidenceSupport, EvidenceModal
│   │   ├── content/             fontes estruturadas por Case
│   │   ├── schemas/             validação de dados do Case
│   │   └── types.ts
│   ├── programs/
│   ├── analytics/
│   └── auth/
├── components/
│   ├── ui/                      somente primitives
│   └── layout/                  Header, Footer, shell
├── lib/
│   ├── env.ts                   validação tipada e fail-fast
│   ├── supabase/                browser, server e middleware clients
│   └── security.ts
└── content/
    ├── programs/
    └── cases/
```

## Decisões recomendadas

- Definir um `CaseLayout` único e compor blocos opcionais (Executive Summary, EvidenceSupport, FactSheet, evolução, limitações).
- Migrar progressivamente páginas repetidas para dados tipados, sem reescrever narrativa nem Design System.
- Converter conteúdo puramente estático para Server Components; manter Client Components apenas em menus, carrosséis, modais e interações.
- Criar `env.ts` validado na inicialização e separar cliente Supabase de browser/server antes de autenticação ou dashboard.
- Transformar `analytics.ts` em interface de provider, com implementação no-op para desenvolvimento e provider real por ambiente.
- Definir convenção de assets: fonte fora do repositório ou em `assets-source/`; publicação exclusivamente por `public/` ou import estático, nunca ambos.

## Escalabilidade

Sem esse desenho, cada novo Case tende a copiar centenas de linhas. Com uma composição por dados, novos Cases passam a acrescentar conteúdo validado e configurações de blocos, não novos hubs monolíticos.
