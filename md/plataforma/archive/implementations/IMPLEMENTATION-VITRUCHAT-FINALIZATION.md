# Finalização do Case VitruChat LLM

**Data:** 15 de julho de 2026  
**Escopo:** somente o Case VitruChat LLM

## Objetivo

Finalizar o Case VitruChat LLM na aplicação canônica, preservando o histórico Git e tornando a galeria de evidências mais navegável sem mudar a narrativa aprovada.

## Implementação

### Galeria de evidências

- Mantidas as 28 capturas publicadas em `public/imagem/vitru/vitruchat/`.
- Reorganizada a navegação em quatro grupos:
  1. Versão 1.0 — Tema claro (5 imagens)
  2. Versão 1.0 — Tour guiado (4 imagens)
  3. Versão 2.0 — Tema claro (10 imagens)
  4. Versão 2.0 — Tema escuro (9 imagens)
- Adicionada uma seleção inicial compacta com oito evidências prioritárias e acesso explícito à galeria completa.
- O bloco de evidências permanece imediatamente após o Executive Summary e não introduz conteúdo estratégico novo.

### Modal acessível

- Exibe o grupo atual, a posição da imagem dentro do grupo e a posição total na galeria.
- Permite avançar e voltar pelos botões ou pelas teclas `←` e `→`.
- Fecha com `Esc`, move o foco para o controle de fechamento ao abrir, contém a navegação por `Tab` e devolve o foco ao elemento que abriu a galeria.
- Mantém as legendas atuais, derivadas apenas da versão, tema ou tour fornecidos; não foram criadas legendas estratégicas.

## Escopo preservado

- Nenhuma alteração à narrativa do Case, ao Design System, ao Hub do Innovation Lab ou a outros Cases.
- Nenhuma rota, dependência ou arquitetura nova foi criada.

## Histórico e publicação

- A finalização reutiliza os commits validados de evidências visuais e de seu registro de publicação em uma branch dedicada.
- A branch dedicada foi integrada em `main` por fast-forward, preservando a sequência de commits do Case.
- Publicação canônica confirmada: `https://felipe-santander.vercel.app/transformations/vitru-oportunidades-tecnologicas`.
- O projeto isolado utilizado na validação inicial não representa a URL pública definitiva do Case.

## Validação

- Lint específico da página do VitruChat: aprovado.
- Lint completo: executado, com falha preexistente em `src/lib/analytics.ts` por `no-explicit-any`; não alterado por estar fora do escopo do Case. Há também três avisos preexistentes em arquivos fora do Case.
- Build de produção: aprovado com compilação, TypeScript, coleta de dados e pré-renderização das 13 rotas.
