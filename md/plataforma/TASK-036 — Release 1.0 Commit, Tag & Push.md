# TASK-036 — Release 1.0 Commit, Tag & Push

Status: Ready

Priority: Critical (P0)

Type:
Git
Release

---

# Objetivo

Criar oficialmente a Release 1.0 do portfolio.

Esta TASK executa exclusivamente as operações Git necessárias para versionar a Release aprovada.

---

## Pré-condições

✓ Build aprovado

✓ TypeScript aprovado

✓ Lint aprovado

✓ Production Readiness: GO

✓ Repository Cleanup concluído

✓ Release Staging Plan aprovado

---

## Escopo

Executar apenas os arquivos classificados como INCLUDE no RELEASE-STAGING-PLAN.md.

Não utilizar:

git add .

Adicionar somente os arquivos aprovados.

Após o staging:

- revisar git status;
- confirmar que apenas arquivos INCLUDE estão preparados.

Então executar:

git commit

Mensagem:

Release 1.0 — Portfolio MVP

Depois criar a tag:

v1.0.0

Em seguida:

git push

git push --tags

---

## Restrições

Não modificar código.

Não alterar documentação.

Não reorganizar arquivos.

Não executar novos builds.

Não executar lint.

---

## Critérios de aceite

✓ Commit criado.

✓ Tag v1.0.0 criada.

✓ Branch sincronizada com o remoto.

✓ Tags enviadas.

---

## Entregável

IMPLEMENTATION-TASK-036.md

Informar:

- hash do commit;
- branch utilizada;
- tag criada;
- quantidade de arquivos versionados;
- confirmação do push;
- confirmação do push das tags.

Após concluir, interromper imediatamente.