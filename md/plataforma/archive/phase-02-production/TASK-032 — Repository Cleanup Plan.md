# TASK-032 — Repository Cleanup Plan

Status: Ready

Priority: Critical (P0)

Type:
Repository
Planning
Release

---

# Objetivo

Transformar a auditoria do repositório em um plano definitivo de limpeza e versionamento.

Esta TASK não modifica nenhum arquivo.

Ela apenas define, de forma explícita, o destino de todos os itens identificados na auditoria.

---

## Contexto

A auditoria identificou:

- arquivos da Release;
- documentação técnica;
- arquivos temporários;
- assets fora da estrutura pública;
- componentes e rotas que exigem decisão manual.

Antes de qualquer remoção ou commit, é necessário decidir o destino de cada grupo.

---

## Escopo

Analisar o relatório REPOSITORY-AUDIT.md.

Para cada item classificado como:

A
B
C
D

definir uma ação definitiva.

---

## Ações permitidas

Cada item deverá receber exatamente uma destas ações:

KEEP
Permanece no repositório.

MOVE
Deve ser movido para outro diretório.

IGNORE
Deve permanecer localmente, mas nunca ser versionado.

DELETE
Pode ser removido.

REVIEW
Exige decisão manual antes de qualquer alteração.

---

## Entregável esperado

Produzir uma tabela contendo:

Arquivo
Categoria
Ação
Justificativa

Ao final, apresentar um resumo:

KEEP:
X itens

MOVE:
X itens

IGNORE:
X itens

DELETE:
X itens

REVIEW:
X itens

---

## Restrições

Não executar:

- git add
- git rm
- git clean
- git restore
- git reset
- git commit
- git push

Não remover arquivos.

Não alterar .gitignore.

Não mover arquivos.

Não renomear arquivos.

---

## Critérios de aceite

✓ Todos os itens classificados.

✓ Plano completo produzido.

✓ Nenhuma alteração realizada no repositório.

---

## Entregável

REPOSITORY-CLEANUP-PLAN.md

Após concluir, interromper imediatamente.