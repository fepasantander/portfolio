# TASK-028 — Development Environment Recovery

## Causa identificada

Node estava instalado e íntegro, mas o prefixo npm do usuário apontava para `C:\Users\MacInBox\AppData\Roaming\npm`. Os wrappers oficiais de npm/npx redirecionavam para esse prefixo, onde `npm-cli.js` e `npx-cli.js` não existiam.

## Ação realizada

O prefixo npm foi restaurado para `C:\Program Files\nodejs` usando o npm distribuído com a instalação oficial do Node. Nenhum arquivo do projeto foi modificado.

## Versões finais

- Node: `v24.14.1`
- npm: `11.11.0`
- npx: `11.11.0`

## npm doctor

Registry, Git e pasta global foram aprovados. O comando recomenda Node `v24.18.0` e npm `v12.0.1`, mas isso é recomendação de atualização, não falha de integridade.

## Confirmação

O ambiente está apto para executar Build, Type Check e Lint.
