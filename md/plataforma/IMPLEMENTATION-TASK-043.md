# IMPLEMENTATION-TASK-043

## Escopo concluído

Correção localizada de assets da seção Empresas, thumbnails do Product Transformation Journal, retornos legados e deep links das abas das transformações. Nenhum servidor adicional foi iniciado, e não houve push, deploy, commit ou alteração de tag.

## Assets publicados

| Origem aprovada | Destino público | Uso |
| --- | --- | --- |
| `imagem/listo/logo-white.png` | `/imagem/listo/logo-white-v2.png` | Home — Empresas |
| `imagem/vm/logo-white.png` | `/imagem/vm/logo-white-v2.png` | Home — Empresas |
| `imagem/vitru/vitruchat/VitruChat-logotipo-Transparente.png` | `/imagem/journal/vitruchat-logotipo.png` | Journal — VitruChat |
| `imagem/vitru/sofia/Sof.IA-grande.png` | `/imagem/journal/sofia-grande.png` | Journal — SofIA |
| `imagem/vitru/hub-correcoes/thumb-destaque.png` | `/imagem/journal/hub-correcoes-thumb-destaque.png` | Journal — Hub de Correções |
| `public/imagem/vm/odonto1-thumbnail.svg` | reutilizado, sem cópia | Journal — Odonto1 |
| `imagem/vm/revistas/aprovadas/2-site-revistaimplantnews.png` | `/imagem/journal/vm-revistas-implantnews.png` | Journal — Revistas |
| `imagem/vm/eventos/aprovadas/site-in26.png` | `/imagem/journal/vm-eventos-in26.png` | Journal — Eventos |

Os nomes versionados de Listo e VM eliminam a colisão com versões anteriormente servidas pelo navegador. Os arquivos públicos foram comparados por cópia direta com os arquivos de origem; os endpoints dos assets retornaram HTTP 200.

## Empresas

- Fundo da seção, grid e todos os cards: `#000000`.
- Nenhum wrapper visível dos logos usa cinza, transparência ou `zinc` como fundo.
- Listo usa o novo arquivo público versionado.
- VM usa o novo arquivo público versionado e metadado visual próprio: `max-h-14 max-w-[9.5rem]`. Isso amplia sua presença sem deformar a proporção nem forçar uma largura igual à dos demais logos.
- Bordas permanecem sutis para preservar a separação entre cards.

## Journal e convenção de deep link

Foi adotado exclusivamente o padrão canônico `?tab=<id>`. Cada página valida o parâmetro contra os IDs permitidos, abre o conteúdo correspondente após o carregamento, mantém a escolha em refresh e atualiza a URL com `history.replaceState` em uma troca manual de aba, sem recarregar a página. Um parâmetro inválido mantém a aba padrão sem erro ou 404.

| Destaque | URL final | ID da aba |
| --- | --- | --- |
| VitruChat | `/transformations/vitru-oportunidades-tecnologicas?tab=vitruchat` | `vitruchat` |
| SofIA | `/transformations/vitru-oportunidades-tecnologicas?tab=sofia` | `sofia` |
| Hub de Correções | `/transformations/vitru-oportunidades-tecnologicas?tab=hub-correcoes` | `hub-correcoes` |
| Odonto1 | `/transformations/vm-comunicacao?tab=odonto1` | `odonto1` |
| Revistas | `/transformations/vm-comunicacao?tab=revistas` | `revistas` |
| Eventos | `/transformations/vm-comunicacao?tab=eventos` | `eventos` |
| Orchestra | `/transformations/carenet-longevity?tab=orchestra` | `orchestra` |
| Diva | `/transformations/carenet-longevity?tab=diva` | `diva` |

Todos os thumbnails do Journal usam `object-contain` sobre `#000000`, impedindo cortes inadequados e preservando transparência e proporção.

## Retornos legados

- O retorno de `/transformations/vm-comunicacao` agora aponta para `/journal` na mesma aba.
- As demais referências legadas encontradas a `/#transformations` em retornos de transformações também foram corrigidas para `/journal`.
- Busca final por `href="/#transformations"` em `src` não retornou ocorrências.

## Arquivos modificados

- `src/components/sections/Companies.tsx`
- `src/app/journal/page.tsx`
- `src/app/transformations/vm-comunicacao/page.tsx`
- `src/app/transformations/carenet-longevity/page.tsx`
- `src/app/transformations/vitru-oportunidades-tecnologicas/page.tsx`
- `src/app/transformations/listo-sistemas/page.tsx`
- `src/app/transformations/uniasselvi-plataformas-educacionais/page.tsx`
- `src/app/transformations/[slug]/page.tsx`
- Os sete assets públicos listados acima.

## Validação

- `npx tsc --noEmit`: aprovado (exit code 0).
- `npm run lint`: aprovado (exit code 0).
- `npm run build`: aprovado. Next.js 16.2.10 compilou, executou TypeScript e gerou 20 páginas estáticas sem erro.
- `git diff --check`: sem erros de whitespace.
- Localhost `http://localhost:3006`: Home, Journal e todas as rotas de deep link solicitadas retornaram HTTP 200.
- Assets novos de Listo, VM, VitruChat, SofIA, Hub, Odonto1, Revistas e Eventos retornaram HTTP 200 e o tipo de conteúdo esperado.

## Pendências

Nenhuma pendência técnica identificada neste escopo. A tarefa não foi enviada para produção, conforme solicitado; uma revisão visual humana em desktop e mobile continua sendo o passo anterior ao deploy.
