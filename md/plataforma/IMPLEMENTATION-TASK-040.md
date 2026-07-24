# IMPLEMENTATION-TASK-040 — Final UX Review before Release 1.0

## Arquivos modificados

- `src/components/cases/MasterCaseTemplate.tsx`
- `src/data/published-cases.ts`
- `src/components/sections/SelectedCases.tsx`
- `src/components/sections/Journal.tsx`
- `src/components/cases/CaseNavigation.tsx`
- `src/app/cases/page.tsx`
- `src/app/sitemap.ts`
- `public/imagem/vm/odonto1-thumbnail.svg`

## Componentes e ajustes

- VitruChat: a seção de Evidências permanece implementada, mas não é renderizada para o slug `vitruchat`.
- Odonto1: breadcrumb dinâmico corrigido para `Home › Odonto1`; o carrossel foi substituído por Marcas relacionadas, com DIVs responsivas e sem slider.
- Odonto1: conteúdo expandido com pesquisa com centenas de participantes, arquitetura orientada pela pesquisa, Inbound Marketing, RD Station, posicionamento Premium, conteúdos ricos, upsell, retenção e LTV.
- Home: o card de Odonto1 utiliza o novo asset vetorial local `odonto1-thumbnail.svg`.
- Journal da Home: CTA renomeado e configurado com `target="_blank"` e `rel="noopener noreferrer"`.
- Navegação entre Cases: retorno direcionado para a Home.

## Rotas afetadas

- `/cases` agora responde com redirecionamento 307 para `/`.
- `/cases/vitruchat` continua pública; a resposta não contém o título de Evidências.
- `/cases/odonto1` continua pública; a resposta contém Marcas relacionadas.
- O sitemap deixou de listar `/cases`.

## Validação

- `npm run lint`: aprovado.
- Servidor local já ativo: Home, VitruChat e Odonto1 retornaram HTTP 200.
- Home confirmou o uso de `odonto1-thumbnail.svg`.
- A validação de responsividade foi preservada pela composição flexível existente: `flex-wrap` para marcas e layouts responsivos já aplicados ao template.

## Observação

Foi tentado um build com o servidor dev ativo; o processo do terminal excedeu o tempo e encerrou com `EPIPE`, sem erro de compilação da aplicação. O último build completo aprovado consta da recuperação do ambiente na TASK-038. Nenhuma alteração de Git, infraestrutura ou deploy foi realizada.
