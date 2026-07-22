# Architecture Audit — Sprint P09

Data: 2026-07-17

## Pontos fortes

- App Router, componentes de UI e navegação compartilhados formam uma base adequada para evolução incremental.
- `portfolio-content.ts` separa contratos de conteúdo da apresentação e prevê hero, galeria, resultado, tags, categoria e Journal opcional.
- SEO técnico já possui metadata base, canonical, sitemap, robots e JSON-LD.
- Analytics é desacoplado da interface e limita o payload a dados não pessoais.
- Portfolio e Journal compartilham domínio, mas possuem rotas e metadados próprios.

## Limitações e riscos

| Nível | Achado | Efeito | Recomendação |
|---|---|---|---|
| Alto | Não existe ainda `/cases/[slug]` consumindo `portfolioCases`. | O MVP de Case individual do roadmap não está concluído e a navegação de Case não pode ser exercida. | Criar a rota canônica quando o primeiro Case cumprir os critérios de publicação. |
| Alto | O Journal ainda possui várias páginas estáticas e uma rota dinâmica legada fora do catálogo novo. | Há risco de duplicação de fontes de conteúdo e metadata. | Migrar progressivamente cada Case publicado para o catálogo central, sem reescrever narrativas aprovadas. |
| Médio | `portfolioCases` e `testimonials` estão vazios. | Correto para evitar conteúdo fictício, mas impede os cards finais da Home. | Popular apenas com material aprovado e testes de publicação. |
| Médio | Dashboard de analytics depende da migração Supabase e não possui proteção/autorização implementada. | Dados não poderão ser visualizados com segurança até a próxima etapa. | Definir autenticação e consulta agregada server-side antes de expor o dashboard. |
| Médio | Sitemap não deriva ainda do catálogo de cases. | Novos Cases exigiriam alteração manual do sitemap. | Derivar itens publicados do catálogo quando a rota canônica existir. |
| Baixo | Internacionalização não está preparada em rotas, dados ou metadata. | PT-BR é a única versão possível hoje. | Introduzir locale no modelo e prefixos de rota apenas quando inglês/espanhol forem priorizados. |

## Escalabilidade

Novos Cases podem ser adicionados ao contrato sem alterar os componentes base, mas exigem a implementação da rota canônica. Novos Journals podem ser cadastrados por referência, porém a unificação plena requer a migração das páginas legadas. A separação conteúdo/interface é suficiente para uma futura camada CMS, desde que o contrato seja mantido e a fonte atual seja substituída por adaptador, não por chamadas dentro de componentes.

## Aderência P00–P09

**Parcialmente aderente.** Visão, IA, linguagem, SEO e contrato de dados estão representados. O MVP ainda não pode ser considerado completo porque faltam Cases canônicos publicados, conteúdo aprovado no catálogo, dashboard funcional, validação executável de lint/build e deploy do novo Portfolio.
