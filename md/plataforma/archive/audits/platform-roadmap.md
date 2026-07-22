# Platform Roadmap — Plano de Estabilização

## P0 — Contenção imediata

1. Revogar e rotacionar a credencial de ferramenta externa exposta em processo local.
2. Remover segredos de argumentos de linha de comando e revisar logs/processos que possam tê-los registrado.
3. Definir um proprietário para a política de secrets e separar chaves públicas de chaves server-side.

**Critério de saída:** nenhum segredo aparece em command line, repositório, logs ou documentação; variáveis sensíveis possuem rotação documentada.

## P1 — Build e qualidade reprodutíveis

1. Corrigir o erro de ESLint e os avisos existentes; manter `npm run lint` verde.
2. Criar validação de ambiente tipada para Supabase e evitar inicialização com valores vazios em builds sem integração ativa.
3. Adicionar CI com `npm ci`, lint, typecheck, build e audit report.
4. Definir o comportamento suportado para build sem rede/fontes e registrar o procedimento.

**Critério de saída:** checkout limpo, instalação, lint e build repetem sem intervenção manual e sem apagar `.next`.

## P2 — Operação Windows, cache e Git

1. Criar runbook de diagnóstico: portas, processos Node, `.next`, antivírus/indexador e limpeza segura.
2. Padronizar scripts `dev`, `dev:3005`, `clean` e `diagnose` sem depender de comandos manuais longos.
3. Inventariar worktrees, remover as temporárias quando encerradas e executar `git worktree prune`/GC de forma controlada.
4. Definir que cada worktree usa sua própria porta e seu próprio processo Next.

**Critério de saída:** EPERM e localhost indisponível possuem diagnóstico determinístico; worktrees e deploys são identificáveis.

## P3 — Segurança de plataforma

1. Introduzir headers de segurança e CSP gradual, com allowlists explícitas para Supabase, Vercel e Figma quando necessário.
2. Revisar iframe externo com `sandbox`, `referrerPolicy` e fallback.
3. Atualizar a cadeia `next/postcss` por upgrade compatível, validando build e regressões.
4. Documentar e verificar RLS, chaves anônimas e futuras chaves server-side do Supabase.

**Critério de saída:** headers mensuráveis em produção, audit sem vulnerabilidades conhecidas aceitáveis e integração externa restrita por política.

## P4 — Fundação escalável de Cases

1. Definir schema tipado para Programa, Case, seções, evidências e estados de publicação.
2. Extrair `CaseLayout`, `EvidenceSupport`, modal e FactSheet compartilhados.
3. Migrar um Case por vez, preservando narrativa e Design System, até eliminar os modelos concorrentes.
4. Organizar Markdown por constituição, programa, case, decisão, implementação e auditoria, com índice de fontes de verdade.

**Critério de saída:** um novo Case é criado a partir de dados validados e composição, não por cópia de uma página de centenas de linhas.

## P5 — Performance e observabilidade

1. Medir bundle e Core Web Vitals por rota antes de otimizar.
2. Converter conteúdo estático em Server Components e limitar Client Components às interações.
3. Remover chamadas de sessão/logs não usadas; introduzir provider de analytics com contrato de eventos e consentimento.
4. Criar orçamento de imagem, fonte única de assets, otimização e lazy loading seletivo.

**Critério de saída:** métricas por rota, sem chamadas client-side sem propósito e crescimento de assets controlado.

## Sequência recomendada

`P0 segurança → P1 qualidade → P2 operação → P3 política de segurança → P4 arquitetura → P5 performance`.

Nenhuma nova funcionalidade deve começar antes de P0 e P1 estarem concluídos; Cases e programas novos devem aguardar pelo menos P2 e o desenho de P4.
