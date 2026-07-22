# Sprint P1 — Information Architecture

Data: 2026-07-17  
Status: Implementada — conteúdo definitivo fora do escopo

## Escopo entregue

- Navegação fixa com `Cases`, `Sobre`, `Journal`, `Contato` e CTA `Vamos conversar`.
- Rotas canônicas do Portfolio: `/cases`, `/sobre` e `/journal`.
- Redirecionamentos das entradas legadas `/transformations` e `/playbook` para `/journal`.
- Breadcrumbs reutilizáveis em Cases, Sobre e Journal.
- Relação Portfolio → Journal contextualizada por links para VitruChat, SofIA e Hub de Correções, únicos cases já publicados.
- Ajuste das âncoras de Home para `#cases`, `#sobre` e `#contact`.
- Remoção de controles e páginas públicas com mensagem “Em breve”.

## Decisões de IA preservadas

- O Portfolio mantém-se como entrada de conversão; o Journal é aprofundamento opcional.
- Nenhum case sem narrativa e evidências aprovadas foi publicado no novo índice.
- Não foram criadas páginas de case vazias, textos finais, métricas, imagens, animações ou uma nova identidade visual.
- A arquitetura dos cases no Journal existente foi preservada nesta Sprint.

## Fluxo implementado

`Home → Cases → Case publicado no Journal`  
`Home → Journal → Case publicado`  
`Home → Sobre`  
`Menu/CTA → Contato na Home`

Todos os destinos públicos definidos ficam a no máximo dois cliques da Home.

## Validações

- Rotas verificadas por análise estática: `/`, `/cases`, `/sobre`, `/journal`, `/transformations` e `/playbook`.
- Navegação verificada por análise estática: menu desktop/mobile, CTA e links Portfolio → Journal usam destinos existentes.
- Breadcrumbs verificados em Cases, Sobre e Journal, com `aria-label` e `aria-current`.
- Foco visível foi incluído nos novos links e controles de navegação; o menu mobile mantém `aria-expanded` e `aria-controls`.
- Busca estática não encontrou estados públicos `Em breve`, `Coming Soon`, `Lorem Ipsum` ou placeholders no escopo novo do Portfolio.
- `npm run lint` foi iniciado, mas o `npm` global do ambiente está inválido (`npm-cli.js` ausente). A tentativa com o runtime local foi bloqueada sem diagnóstico pelo ambiente após exceder o tempo normal; portanto, a validação completa de lint não pode ser declarada aprovada nesta sessão.
- `npm run build` foi iniciado e bloqueou antes do Next.js pelo mesmo erro do executável global de npm (`npm-cli.js` ausente); permanece pendente de execução em um terminal com Node/npm funcional.

## Próxima Sprint recomendada

P2 — Fundação visual e componentes de conversão, após a aprovação do catálogo de conteúdo e dos ativos reais a publicar.
