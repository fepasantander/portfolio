# TASK-031 — Repository Audit

Status: Ready

Priority: Critical (P0)

Type:
Repository
Audit
Release

---

# Objetivo

Realizar uma auditoria completa do repositório antes da criação da Release 1.0.

Esta TASK é exclusivamente de diagnóstico.

Nenhum arquivo deve ser modificado, movido, removido ou criado (exceto o relatório final).

---

## Contexto

Durante a tentativa de criação da Release 1.0 foram identificadas inconsistências no repositório:

- grande quantidade de arquivos não rastreados;
- arquivos históricos;
- assets fora da estrutura esperada;
- possível arquivo duplicado;
- alterações fora do escopo da Release.

Antes de qualquer limpeza é necessário conhecer exatamente o estado do repositório.

---

## Escopo

Auditar integralmente:

- git status
- arquivos modificados
- arquivos staged
- arquivos untracked
- arquivos duplicados
- arquivos temporários
- assets fora de /public
- documentos históricos
- diretórios potencialmente obsoletos
- arquivos de backup
- possíveis conflitos de nomenclatura

Não alterar nenhum deles.

---

## Classificação

Cada item encontrado deverá ser classificado em apenas uma categoria:

### A — Release

Arquivo pertence à Release 1.0.

Deve permanecer.

---

### B — Documentação

Documentos pessoais.

Notas.

Markdowns.

Pesquisas.

Arquivos de apoio.

Não devem necessariamente entrar no Git.

---

### C — Temporário

Arquivos de backup.

Arquivos duplicados.

Arquivos "(1)".

.old

.bak

.tmp

Conflitos.

---

### D — Revisão

Arquivos que exigem decisão manual.

Componentes potencialmente órfãos.

Rotas antigas.

Assets sem uso confirmado.

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

Não remover nenhum arquivo.

Não alterar o .gitignore.

Não renomear arquivos.

---

## Critérios de aceite

✓ Inventário completo produzido.

✓ Todos os itens classificados.

✓ Nenhuma alteração realizada no repositório.

---

## Entregável

REPOSITORY-AUDIT.md

O relatório deve conter:

- branch atual;
- resumo do git status;
- arquivos modificados;
- arquivos staged;
- arquivos untracked;
- arquivos duplicados;
- assets fora da estrutura esperada;
- classificação (A, B, C ou D) para cada item;
- recomendações para a próxima etapa.

Após concluir, interromper imediatamente.