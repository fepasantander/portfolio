# TASK-046 — Release 1.0 Commit, Push & Production Deploy

Status: Ready

Priority: Critical (P0)

Type:

- Git
- Release
- Deployment

---

# Objetivo

Publicar oficialmente a Release 1.0.

---

# Pré-check obrigatório

Antes de qualquer operação:

Confirmar:

- localhost saudável;
- branch atual;
- working tree;
- commit pendente;
- remoto origin;
- tag v1.0.0 existente.

---

# Fluxo

1.

Criar o commit final da Release.

Mensagem:

Release 1.0 — Portfolio MVP

---

2.

Executar:

git push origin <branch_atual>

---

3.

Publicar a tag correspondente.

Caso já exista localmente:

utilizar a tag existente.

Não recriar.

Não alterar.

---

4.

Executar o push da tag.

---

5.

Acompanhar o deploy automático da Vercel.

---

6.

Executar Smoke Test.

Validar:

- Home
- Journal
- VitruChat
- Hub
- SofIA
- Odonto1
- Deep Links
- Responsividade

---

# Política para bloqueios

Caso exista qualquer bloqueio de segurança:

PARAR.

Apresentar:

- diagnóstico;
- motivo;
- risco;
- ação que será executada após autorização.

Somente continuar após confirmação do usuário.

Não contornar políticas.

Não alterar remotos.

Não usar force push.

---

# Critérios de aceite

✓ Commit criado.

✓ Push concluído.

✓ Tag publicada.

✓ Deploy concluído.

✓ Smoke Test aprovado.

---

# Entregável

IMPLEMENTATION-TASK-046.md