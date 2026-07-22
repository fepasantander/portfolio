# Sprint P2 — Content Architecture

Data: 2026-07-17  
Status: Implementada — aguardando conteúdo aprovado

## Entregas

- Home reorganizada em exatamente oito blocos: Hero, Empresas, Cases, Testimonials, Como Trabalho, Sobre, Product Transformation Journal e Contato.
- Criado `src/data/portfolio-content.ts` com os contratos definitivos de `PortfolioCase`, `Testimonial` e `Company`.
- O contrato de Case prevê hero, resumo, tecnologias, atuação, resultado, galeria e CTA contextual para o Journal, sem permitir métricas estimadas.
- Criado componente de Empresas com links opcionais para cases relacionados.
- Criado bloco institucional do Journal com CTA opcional e contextual.
- Mantida a estrutura existente de Testimonials, pronta para receber apenas depoimentos autorizados.

## Preservação de conteúdo

- Nenhum texto, imagem, depoimento, métrica ou resultado fictício foi incluído.
- Coleções de Cases e Testimonials novas permanecem vazias até aprovação editorial; portanto, nenhum card incompleto é exposto por essa camada.
- Os destinos já publicados do Journal permanecem acessíveis pela navegação existente.

## Validações

- Leitura mobile: a nova lista de Empresas usa quebra de linha responsiva; os blocos usam uma coluna por padrão.
- Desktop: a Home preserva a composição de seções e grids existentes, com o novo conteúdo limitado a containers responsivos.
- `npm run lint` e `npm run build` foram tentados na Sprint P1 e continuam bloqueados antes da execução pelo npm global inválido (`npm-cli.js` ausente). Não há aprovação de lint/build enquanto o ambiente não for corrigido.

## Próximo passo

Inserir somente conteúdo editorial e ativos reais aprovados no catálogo, para então habilitar os oito cards de case e testimonials sem estados vazios.
