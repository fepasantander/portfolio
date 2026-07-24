# Home UX Audit 017A — Above the Fold

Data: 2026-07-21  
Método: revisão estática de Hero e Header; sem alteração de código.

## Perfis

| Perfil | Compreendeu | Atenção | Confusão / fricção |
|---|---|---|---|
| Recrutador RH | Identidade profissional e caminho para Cases. | CTA agora leva aos Cases. | A proposta pode exigir leitura além dos primeiros segundos para diferenciar Produto, UX e IA. |
| UX Manager | Sinal de atuação em produto e design. | Hierarquia tipográfica e CTA. | O Hero legado ainda contém elementos visuais e integração Supabase que não reforçam a primeira impressão. |
| Head de Produto | Posicionamento estratégico. | Caminho direto para trabalho publicado. | Benefício de negócio e integração Produto–Engenharia–Negócio não está necessariamente explícito acima da dobra. |
| CTO | Indício de proximidade com tecnologia. | Referência a Cases. | Não há sinal imediato suficientemente claro de profundidade técnica, IA e colaboração com Engenharia. |

## Heurísticas aplicáveis

- **Correspondência com o mundo real — Médio:** o CTA aponta para Cases, mas a linguagem do Hero precisa manter o foco no que o visitante encontrará.
- **Consistência e padrões — Médio:** Header fixo e CTA são consistentes; há legado visual no Hero que pode competir com clareza.
- **Reconhecimento em vez de memorização — Baixo:** navegação principal é curta, mas a remoção de `/cases` reduz a descoberta via menu.

## Problemas e recomendações

| Severidade | Impacto | Recomendação | Prioridade |
|---|---|---|---|
| Alta | Proposta de valor pode não comunicar Produto + UX + IA em poucos segundos. | Tornar a frase de valor explícita no Hero em tarefa de conteúdo autorizada. | P0 |
| Média | Elementos decorativos/efeitos legados podem aumentar carga cognitiva. | Revisar Hero visualmente em browser e reduzir elementos não informativos. | P1 |
| Média | CTA de Cases está correto, mas menu não oferece mais descoberta por índice. | Validar em teste real se o CTA e a posição da seção compensam a ausência do item de menu. | P1 |

## Screenshots comentados

Não anexados: o navegador de inspeção não está disponível nesta sessão e nenhum screenshot foi simulado. A auditoria visual final requer capturas reais em Desktop, Tablet e Mobile no servidor local já iniciado.
