# TASK-033 — Documentation Organization

Status: Ready

Priority: High (P1)

Type:
Documentation
Repository
Organization

---

# Objetivo

Organizar automaticamente toda a documentação técnica do projeto em uma estrutura permanente, preservando apenas os documentos atualmente ativos na raiz da documentação.

Esta TASK modifica apenas arquivos Markdown (.md).

Nenhum arquivo de código deverá ser alterado.

Nenhuma operação Git deverá ser executada.

---

## Contexto

Durante o desenvolvimento da Release 1.0 foram produzidos dezenas de documentos técnicos:

- TASKs
- IMPLEMENTATIONs
- Auditorias
- Release Candidates
- Architecture Reviews
- Strategic Logs
- Planning
- Case Sources

A pasta raiz tornou-se excessivamente grande, dificultando a localização dos documentos ativos.

---

## Estrutura desejada

Organizar a documentação em:

md/plataforma/

├── active/
├── archive/
│   ├── phase-01-foundation/
│   ├── phase-02-production/
│   ├── audits/
│   ├── implementations/
│   ├── release/
│   ├── strategic/
│   └── cases/
└── templates/ (criar somente se já existir conteúdo relacionado)

Caso alguma categoria não possua documentos, não criar a pasta.

---

## Política de organização

### Permanecem em active/

Somente os documentos necessários para o trabalho imediato.

Exemplos:

- CHANGELOG.md
- REPOSITORY-AUDIT.md
- REPOSITORY-CLEANUP-PLAN.md
- TASK-033
- TASK-034 (quando existir)
- TASK-035 (quando existir)

O objetivo é manter apenas os documentos da etapa atual facilmente acessíveis.

---

### Archive

Mover automaticamente todos os documentos históricos para a categoria mais apropriada.

Exemplos:

TASK antigos

IMPLEMENTATION antigos

Auditorias concluídas

Release Candidates antigos

Strategic Logs

Architecture Reviews

Case Sources

Production Readiness

---

## Regras

Não renomear documentos.

Não alterar conteúdo.

Não modificar datas.

Não alterar links internos, exceto quando necessário devido à mudança de localização.

Preservar toda a documentação.

Nenhum documento deve ser apagado.

---

## Restrições

Não modificar:

- código fonte;
- componentes;
- assets;
- .gitignore;
- Git.

Não executar:

- git add
- git rm
- git clean
- git commit
- git push

---

## Critérios de aceite

✓ Documentação organizada.

✓ Apenas documentos ativos permanecem em active/.

✓ Todo histórico preservado em archive/.

✓ Nenhum documento perdido.

✓ Links internos atualizados quando necessário.

---

## Entregável

IMPLEMENTATION-TASK-033.md

Informar:

- pastas criadas;
- documentos movidos;
- documentos mantidos em active;
- links atualizados;
- validação de que nenhum documento foi perdido.

Após concluir, interromper imediatamente.