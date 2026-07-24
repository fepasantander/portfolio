# Sprint P05 — Design Language

## Tradução do P05

A interface foi consolidada como uma base quase monocromática, com tipografia legível, containers amplos, espaçamento previsível e transições curtas. A decoração foi reduzida: cards usam borda e sombra discreta no hover, sem deslocamento ou efeitos visuais competitivos.

## Componentes padronizados

- `Container`: largura máxima única e gutters responsivos.
- `Button`: três variações existentes, foco visível e estados disabled consistentes.
- `Card`: borda, raio, espaçamento e hover únicos.
- `Heading` e `Paragraph`: escalas tipográficas já centralizadas.
- CSS global: tokens de espaçamento, links, imagens responsivas e regras de movimento reduzido.

## Consistência entre superfícies

Home, Cases, Journal e páginas institucionais consomem os mesmos componentes de UI, Container e estilos globais. O Journal pode se diferenciar por composição, mas mantém os mesmos tokens, contraste, foco e tipografia.

## Acessibilidade e responsividade

- Foco visível global com contraste adequado.
- `prefers-reduced-motion` reduz animações e transições.
- Imagens preservam proporção e largura responsiva.
- Container e componentes usam escala mobile-first.

## Evolução para Design System

Os próximos incrementos podem formalizar tokens semânticos de cor, elevação, radius, estados de formulário, variantes de grid e testes visuais. A base atual já separa esses padrões sem alterar a arquitetura de conteúdo.

## Validações

Revisão estática de responsividade, foco e movimento reduzido concluída. `npm run lint` e `npm run build` permanecem bloqueados pelo npm global inválido do ambiente (`npm-cli.js` ausente), já documentado nas Sprints P1 e P2.
