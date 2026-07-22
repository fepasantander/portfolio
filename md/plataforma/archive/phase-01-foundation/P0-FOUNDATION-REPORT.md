# Sprint P0 — Foundation Report

Data: 2026-07-17  
Status: Foundation concluída — sem implementação

## 1. Entendimento do produto

**Felipe Santander — Portfolio** é o ativo principal de conversão para candidaturas. Sua métrica norteadora é a geração de entrevistas. Ele deve comunicar, com rapidez, quem é Felipe, que problemas resolve, como trabalha e quais resultados entrega.

O produto não é um blog, currículo, documentação ou Journal. A navegação e o conteúdo devem reduzir fricção para recrutadores, Talent Acquisition e RH, sem perder relevância para lideranças de Produto e Tecnologia.

O Journal permanece como camada de aprofundamento: explica o processo por trás dos resultados, mas não deve disputar atenção com o Portfolio. A relação pretendida é deliberadamente assimétrica: o Portfolio converte; o Journal aprofunda.

### Direção editorial e visual consolidada

- Leitura prevista: Home em até 3 minutos, Case em até 2 minutos e Sobre em até 1 minuto.
- Linguagem objetiva, humana e clara; sem exagero promocional, buzzwords ou tom acadêmico.
- Home obrigatoriamente reúne Hero, empresas, cases, testimonials, modo de trabalho, Journal e contato.
- Cases iniciais: VitruChat, SofIA, Hub de Correções, Harmonia, Diva, Odonto1, Portais VM e Listo.
- Prioridade visual: espaço em branco, tipografia ampla e respirada, cards limpos, imagens reais e contexto visual suficiente.
- Imagens não podem ser ilustrativas nem stock photos.
- Cada case deve ter imagem hero, galeria, resultados e CTA para o Journal.
- Testimonials ficam logo após os cases e não podem ocupar mais protagonismo que eles.
- CTAs permanecem disponíveis e claros durante a jornada.
- São proibidos conteúdo "Coming Soon", Lorem Ipsum, placeholders, páginas vazias e equivalentes.

## 2. Confronto com a base atual

A base é uma aplicação Next.js 16 com App Router, React 19 e Tailwind 4. A Home atual é formada por seções reutilizáveis, e o domínio de cases já possui dados centrais em `src/data/case-studies.ts`, rotas estáticas e rota dinâmica por slug.

Há uma fundação técnica reaproveitável — layout global, componentes de UI, seções, sistema de rotas e ativos locais —, mas a experiência atual ainda traz características de Portfolio/Journal extenso. Seções como problema, desafios, raciocínio e seleção são adequadas ao aprofundamento, porém precisam ser avaliadas na Sprint de arquitetura de informação para que a Home continue cabendo no tempo de leitura definido.

O Innovation Lab já é um conjunto de cases aprofundados e deve ser preservado como destino de Journal. Sua navegação e suas evidências são ativos reutilizáveis, não o modelo obrigatório de densidade para a Home de conversão.

## 3. Conflitos arquiteturais e riscos técnicos

| Classificação | Achado | Impacto para o novo produto | Direção proposta |
|---|---|---|---|
| Alto | Rotas de transformações coexistem em páginas estáticas e em `[slug]`. | Crescimento de cases pode gerar duplicidade de fonte de verdade, comportamentos divergentes e colisões de rota. | Definir um único catálogo de cases e uma estratégia explícita para rotas canônicas antes de expandir o conteúdo. |
| Alto | O catálogo atual contém apenas um case genérico em `case-studies.ts`, enquanto a especificação prevê oito casos iniciais. | Não há modelo de conteúdo suficiente para escalar cards, hero, resultados, galeria e CTA de forma consistente. | Criar, em sprint posterior, um contrato de dados de case compatível com o Portfolio e com o Journal. |
| Alto | A constituição proíbe placeholders e páginas vazias; parte dos casos previstos ainda não tem evidências ou conteúdo confirmado na base. | Publicar rotas ou cards incompletos violaria a especificação. | Só publicar um case quando tiver material aprovado; manter itens ausentes fora da superfície pública, sem estados “em breve”. |
| Médio | A Home atual tem muitas seções e conteúdo potencialmente analítico. | Risco de ultrapassar os três minutos e diminuir a conversão. | Fazer inventário de conteúdo e priorização editorial antes de qualquer reconstrução. |
| Médio | O tema global suporta modo escuro automático. | Não é proibido, mas pode ampliar decisões visuais e QA sem contribuir diretamente para conversão. | Decidir explicitamente se o novo produto terá apenas tema claro ou paridade de tema; não inferir. |
| Médio | Ativos públicos têm nomenclaturas heterogêneas, duplicidades aparentes e pastas por cliente/projeto. | Dificulta seleção de imagens reais, otimização e manutenção de galerias. | Inventariar e normalizar metadados/caminhos sem alterar os arquivos originais inicialmente. |
| Médio | `next.config.ts` está praticamente vazio. | Não há política explícita para imagens, headers, redirecionamentos ou cache. | Definir requisitos de produção após a arquitetura de informação, evitando otimizações prematuras. |
| Baixo | Existem rotas administrativas e de playbook no mesmo projeto. | Podem vazar para navegação ou SEO se não forem isoladas na estratégia de informação. | Delimitar áreas públicas, privadas e técnicas no mapa de rotas. |
| Baixo | O lint global possui uma falha pré-existente em `src/lib/analytics.ts` e avisos não relacionados ao novo produto. | Pode bloquear o gate de qualidade da futura implementação. | Corrigir como item técnico isolado antes da Sprint de entrega, sem misturá-lo à Foundation. |

## 4. Estrutura inicial recomendada

Sem alterar a implementação nesta Sprint, a estrutura-alvo deve separar claramente três camadas:

1. **Portfolio público:** Home curta, Sobre, páginas de case orientadas a resultado e contato.
2. **Journal:** aprofundamento técnico, incluindo Innovation Lab e outros relatos de transformação, acessível por CTAs contextuais.
3. **Base de conteúdo:** um catálogo único para metadados de cases, imagens aprovadas, resultados factuais, rotas e vínculo opcional ao Journal.

Componentes compartilhados devem conter apenas padrões de apresentação e interação. O conteúdo aprovado, as imagens e o vínculo com o Journal devem permanecer em dados estruturados, evitando textos duplicados entre Home, cards e páginas de case.

## 5. Plano de implementação por Sprints

### P1 — Arquitetura de Informação e contrato de conteúdo

- Mapear a Home obrigatória e garantir o limite de leitura.
- Definir taxonomia Portfolio versus Journal e rotas canônicas.
- Especificar o contrato de dados dos oito cases, sem inventar conteúdo.
- Inventariar quais casos têm imagem hero, evidências, resultados e CTA aprovados.
- Definir critérios de publicação para impedir placeholders.

### P2 — Fundação visual e componentes de conversão

- Traduzir as Brand Guidelines em tokens e padrões já existentes, sem criar identidade paralela.
- Consolidar Hero, cards de case, logos de empresas, testimonial, CTA e contato.
- Definir comportamento de foco, teclado, contraste, estados de link e responsividade.
- Estabelecer regras de imagem real, proporção e carregamento.

### P3 — Home de conversão

- Implementar a Home na ordem obrigatória definida na Constituição.
- Priorizar cases e CTAs, mantendo testimonials como suporte.
- Garantir links explícitos para o Journal, sem deslocar o foco da conversão.
- Validar leitura, mobile, tablet, desktop, desempenho e acessibilidade.

### P4 — Cases do Portfolio

- Publicar apenas os cases com conteúdo e ativos aprovados.
- Aplicar o modelo: hero, contexto curto, resultados, galeria e CTA para Journal.
- Migrar/ligar os casos existentes sem reescrever narrativas aprovadas.
- Validar SEO técnico, imagens, navegação e teclado em modais.

### P5 — Sobre, prova social e contato

- Implementar a página Sobre de leitura breve.
- Inserir testimonials aprovados e mecanismos de contato/agenda definidos pelo responsável.
- Medir eventos de conversão somente após definição de privacidade e ferramenta analítica.

### P6 — Hardening e lançamento

- Corrigir gates técnicos pré-existentes.
- Executar lint, build, auditoria de rotas, links, imagens, performance e acessibilidade.
- Revisar metadados, indexação e analytics.
- Consolidar documentação, release notes, commit e deploy.

## 6. Sugestões que preservam a estratégia

- Tratar os oito cases como um funil editorial: poucos em destaque na Home e acesso a uma lista completa, sempre sem diminuir a qualidade visual.
- Usar evidências reais como prova visual, com legendas puramente descritivas e resultados somente quando aprovados.
- Manter o Innovation Lab como exemplo de profundidade no Journal, acionado a partir do CTA do case correspondente.
- Tornar CTAs de contato e exploração visíveis ao fim de cada bloco decisório, sem pop-ups ou competição visual.
- Criar uma checklist de publicação por case: narrativa aprovada, imagem hero real, resultados verificáveis, galeria selecionada, CTA para Journal, acessibilidade e revisão de links.
- Definir uma política simples de imagem: originais preservados, derivados otimizados para web e metadados centralizados no catálogo.

## 7. Dúvidas realmente necessárias

1. Quais são os canais oficiais do CTA de conversão — e-mail, LinkedIn, calendário de agenda, formulário ou combinação deles?
2. Quais dos oito cases possuem, neste momento, narrativa e resultados aprovados para publicação? Os demais devem permanecer fora da Home até a aprovação, conforme a Constituição?
3. O Portfolio v1.0 terá somente tema claro ou deve preservar suporte completo ao modo escuro já existente?
4. Há testimonials aprovados, com autoria e autorização de publicação, para a posição obrigatória após os cases?

## Conclusão

A estratégia está consistente: uma superfície curta que gera confiança e conversa, apoiada por um Journal aprofundado. O risco principal não é visual; é permitir que a aplicação atual, rica em narrativa, se torne longa ou publique casos incompletos. A primeira sprint de implementação deve resolver taxonomia, catálogo de conteúdo e critérios de publicação antes de qualquer alteração de interface.
