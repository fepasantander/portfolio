# Technical Debt Register — Platform Hardening

| ID | Severidade | Dívida | Evidência | Consequência | Direção recomendada |
| --- | --- | --- | --- | --- |
| TD-01 | Crítico | Credencial em argumento de processo | Processo Node de ferramenta externa expõe segredo na command line. | Vazamento local, logs e reutilização indevida de acesso. | Revogar/rotacionar; usar variável de ambiente, cofre ou IPC sem argumento secreto. |
| TD-02 | Alto | Lint não é verde | `analytics.ts` usa `Record<string, any>`; três avisos adicionais. | Sem gate confiável para regressões. | Corrigir tipos/avisos e adicionar CI bloqueante. |
| TD-03 | Alto | Configuração Supabase frágil | Cliente é criado com strings vazias na ausência de env. | Build/pré-renderização falha fora de ambiente configurado. | Validar env em boundary explícito; evitar inicialização em paths não usados. |
| TD-04 | Alto | Hubs duplicados e monolíticos | Cinco páginas de 422–949 linhas repetem modal, shell e estado. | Custo de manutenção cresce linearmente por Case. | Extrair layout, modal e dados compartilhados. |
| TD-05 | Alto | Ausência de headers de segurança | `next.config.ts` não define headers/CSP. | Superfície maior para XSS, framing e leakage de referrer. | Definir headers e CSP incrementalmente, validando Figma/Supabase. |
| TD-06 | Médio | Duplicação de assets | `imagem/` (~8,9 MB) e `public/imagem/` (~20,1 MB) possuem muitos hashes idênticos. | Repositório pesado e divergência de fonte. | Eleger fonte única e automatizar catálogo/otimização. |
| TD-07 | Médio | Dois modelos de Case | `[slug]` com `case-studies.ts` coexistindo com hubs estáticos. | Conteúdo e comportamento inconsistentes. | Planejar migração para um schema de Case. |
| TD-08 | Médio | Client boundaries amplos | Doze seções e seis páginas são Client Components. | Mais hydration e JS inicial que o necessário. | Separar conteúdo estático de interações. |
| TD-09 | Médio | Chamada Supabase no Hero | `auth.getSession()` roda ao montar, sem uso no render. | Custo de rede, ruído de console e dependência desnecessária. | Remover ou realocar para feature que use sessão. |
| TD-10 | Médio | Higiene Git/worktree | Sete worktrees, duas destacadas e objetos inalcançáveis. | Confusão de branch/deploy e EPERM por concorrência. | Política de worktree, `git worktree prune` e GC programado. |
| TD-11 | Médio | Ausência de testes e CI | Não há scripts de teste nem workflow versionado. | Regressões acessíveis/visuais chegam à produção. | Introduzir typecheck, lint, build e smoke tests em CI. |
| TD-12 | Médio | Tailwind sem tokens completos | Classes `zinc-*` não padrão são usadas sem escala documentada. | Estilos silenciosamente ausentes ou divergentes. | Formalizar tokens no tema e lintar classes. |
| TD-13 | Médio | Iframe Figma sem política explícita | Embed externo sem sandbox/CSP local. | Risco de política e comportamento de terceiro. | Definir allowlist, sandbox e fallback controlado. |
| TD-14 | Baixo | Listener de scroll sem limitação | Header atualiza estado a cada scroll. | Trabalho desnecessário em dispositivos lentos. | Usar `requestAnimationFrame` ou observer. |
| TD-15 | Baixo | Fontes externas | `next/font/google` sem estratégia documentada de build fria. | Possível fragilidade em ambientes sem rede. | Confirmar fallback local/cache de fontes. |
| TD-16 | Baixo | Markdown sem taxonomia | Logs, fontes, RFCs e relatórios compartilham diretório. | Descoberta e governança piores com mais Cases. | Criar índice e pastas por tipo/programa/case. |
