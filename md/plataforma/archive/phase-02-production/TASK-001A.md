# TASK-001A — Rebuild MasterCaseTemplate

Status

Critical

Objetivo

Eliminar definitivamente o bloqueador que impede futuras alterações no Case.

---

Escopo

Reconstruir integralmente:

MasterCaseTemplate.tsx

---

Requisitos

Preservar:

- props públicas;
- exports;
- comportamento funcional;
- compatibilidade com EditorialCase.

Não preservar:

estrutura interna;

layout interno;

ordem dos componentes.

A implementação poderá ser completamente reorganizada.

---

Resultado esperado

MasterCaseTemplate torna-se:

- legível;
- modular;
- preparado para futuras alterações.

---

Critérios

✓ arquivo reconstruído.

✓ API preservada.

✓ nenhum patch incremental.

✓ preparado para próximas TASKs.

Entregável

IMPLEMENTATION-TASK-001A.md