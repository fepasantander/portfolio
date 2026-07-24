# Risk Matrix — Platform Hardening

| Risco | Probabilidade | Impacto | Classificação | Indicador atual | Mitigação planejada |
| --- | --- | --- | --- | --- | --- |
| Exposição de credencial em processo local | Média | Muito alto | Crítico | Segredo observado em command line de ferramenta externa. | Rotação imediata e mudança do mecanismo de injeção. |
| Build falhar sem variáveis Supabase | Alta | Alto | Alto | Cliente aceita string vazia e quebra na pré-renderização. | Validação tipada e separação browser/server. |
| Regressão chegar à produção | Alta | Alto | Alto | Lint vermelho; sem testes/CI. | Zerar lint e criar pipeline de qualidade. |
| Crescimento de Cases multiplicar manutenção | Alta | Alto | Alto | Hubs repetidos de centenas de linhas. | Layout de Case + schema e migração incremental. |
| Política de segurança insuficiente | Média | Alto | Alto | Headers/CSP ausentes; iframe externo. | Headers por ambiente e allowlists testadas. |
| EPERM/localhost instável no Windows | Média | Médio | Médio | Histórico de lock `.next`; múltiplas worktrees/processos. | Procedimento operacional, script de diagnóstico e isolamento de processos. |
| Divergência/perda de assets | Alta | Médio | Médio | Assets idênticos em duas árvores. | Fonte única, catálogo e CI de integridade. |
| Dependência vulnerável | Média | Médio | Médio | 2 vulnerabilidades moderadas em `next → postcss`. | Upgrade compatível em branch dedicada. |
| Bundle/hydration aumentar com novos Cases | Alta | Médio | Médio | Client boundaries extensos e páginas monolíticas. | Server-first e lazy loading seletivo. |
| Confusão de branch/deploy | Média | Médio | Médio | Sete worktrees, worktrees destacadas e objetos inalcançáveis. | Inventário, prune e política de deploy canônico. |
| Estilos inconsistentes | Média | Baixo | Baixo | Classes de cor fora da escala documentada. | Tokens Tailwind e validação de classes. |
| Custo de scroll/network desnecessário | Média | Baixo | Baixo | Header e Hero executam trabalho não essencial. | Otimização após estabilização. |

## Critério de prioridade

- **Crítico:** segredo ou falha capaz de comprometer segurança; tratar antes de nova feature.
- **Alto:** bloqueia confiabilidade, build ou evolução segura; tratar no primeiro ciclo de estabilização.
- **Médio:** amplia custo operacional ou regressões à medida que o produto cresce; planejar em sequência.
- **Baixo:** otimização preventiva sem impacto imediato na produção.
