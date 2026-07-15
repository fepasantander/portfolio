# VitruChat - Evidências Visuais

**Data:** 15 de julho de 2026
**Escopo:** somente o Case VitruChat LLM

## Objetivo

Atualizar os ativos visuais do Case VitruChat e posicionar as evidências logo após o Executive Summary, para que visitantes interessados possam acessar o artefato sem perder o contexto executivo do Case.

## Implementação

- Substituídas as imagens anteriores pelas 28 capturas organizadas na estrutura de origem:
  - `v1-light`
  - `v1-tour-guiado`
  - `v2-dark`
  - `v2-light`
- Os arquivos publicados foram mantidos em `public/imagem/vitru/vitruchat/`, preservando a mesma organização por versão e tema.
- O modal de imagens ocupa 90% da viewport e exibe uma imagem por vez.
- A navegação usa controles Anterior e Próxima, estado desabilitado nos limites e legenda anunciada para tecnologias assistivas.
- As legendas são provisórias e derivadas exclusivamente da organização fornecida: `VitruChat LLM - versão 1.0`, `VitruChat LLM - versão 2.0`, `Tema claro`, `Tema escuro` e `Tour Guiado`.
- O bloco `Evidências e Apoio à Decisão (Anexos)` foi movido para imediatamente após o Executive Summary.

## Escopo preservado

- Não foram criados ou alterados outros Cases.
- Não houve mudança de narrativa, Design System, identidade visual ou arquitetura.
- Os outros anexos continuam indisponíveis, como já estavam, sem inferir novas evidências.

## Validação

- Lint específico da página do VitruChat: aprovado.
- Revisão estática: uma imagem por vez, modal responsivo em `90vw` por `90vh`, controles com rótulos e hierarquia semântica preservada.
- O build de produção não pôde ser reexecutado neste momento porque um processo externo mantém um artefato em `.next` bloqueado por `EPERM`.

## Publicação

- O projeto isolado `portfolio-vitruchat-deploy` foi usado somente para validar o deploy inicial em uma worktree limpa do commit VitruChat.
- A publicação pública definitiva do Case está na aplicação canônica: `https://felipe-santander.vercel.app/transformations/vitru-oportunidades-tecnologicas`.
