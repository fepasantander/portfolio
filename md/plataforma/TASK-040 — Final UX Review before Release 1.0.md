# TASK-040 — Final UX Review before Release 1.0

Status: Ready

Priority: High (P1)

Type:
UX
Content
UI
Polish

---

# Objetivo

Realizar os últimos ajustes de UX, conteúdo e navegação antes da publicação da Release 1.0.

Esta tarefa não contempla alterações de arquitetura, infraestrutura ou deploy.

---

# 1. Case VitruChat

Ocultar temporariamente toda a seção "Evidências".

A seção não deve ser removida do projeto.

Ela deverá apenas deixar de ser exibida na interface.

Objetivo:

Na próxima branch será desenvolvida uma narrativa específica para apresentação gradual das evidências.

Nenhuma outra alteração neste case.

---

# 2. Remover rota redundante

Revisar toda a navegação.

A rota:

/cases

não deve mais existir.

Caso ainda exista:

- remover a página;
- remover links internos;
- remover referências de navegação;
- garantir que qualquer acesso à rota seja redirecionado para "/".

Não criar uma sub-home.

A Home continua sendo o catálogo principal.

---

# 3. Product Transformation Journal

Na Home existe o botão:

"Explorar o Product Transformation Journal"

Alterar para abertura em:

target="_blank"

incluindo os atributos de segurança adequados.

---

# 4. Thumb Odonto1

Na Home.

Substituir a imagem atual.

Criar um thumb minimalista contendo apenas:

ODONTO1

Seguindo a identidade visual do portfolio.

Não utilizar imagens externas.

Não utilizar IA.

Gerar um card vetorial simples com tipografia.

---

# 5. Case Odonto1

## Breadcrumb

Corrigir:

VitruChat

↓

Odonto1

---

## Seção de Evidências

Substituir o título.

De:

"Evidências"

Para:

"Marcas relacionadas"

(Substituir por "Ecossistema Odonto1" apenas se já existir consenso no projeto.)

---

Substituir o carrossel.

Exibir pequenas DIVs alinhadas horizontalmente contendo as marcas.

Exemplos:

- ImplantNews
- PerioNews
- OrtodontiaSPO
- FOL
- INPN
- IN Congress
- demais marcas relacionadas existentes

Layout responsivo.

Sem slider.

Sem carrossel.

Com quebra automática de linha.

---

## Conteúdo

Expandir o storytelling utilizando as informações já aprovadas.

Adicionar:

### Pesquisa

Destacar que o projeto nasceu de uma pesquisa extensa com centenas de participantes.

Explicar que essa pesquisa orientou:

- funcionalidades
- arquitetura
- conteúdo
- priorização

---

### Estratégia

Explicar que foi construída uma régua de comunicação baseada em Inbound Marketing.

Citar a utilização da RD Station para:

- automação;
- nutrição;
- segmentação;
- campanhas;
- acompanhamento da jornada.

---

### Produto

Explicar claramente que o Odonto1 era o produto Premium da empresa.

Concentrava conteúdos das demais marcas.

Incluía:

- vídeos;
- áudios;
- ebooks;
- conteúdos ricos;
- conteúdos exclusivos;
- assinatura de maior valor.

Destacar o papel estratégico como mecanismo de:

- upsell;
- retenção;
- recorrência;
- aumento de LTV.

---

# Restrições

Não alterar arquitetura.

Não alterar Design System.

Não alterar SEO.

Não alterar Analytics.

Não alterar infraestrutura.

Não alterar deploy.

Não alterar Git.

---

# Critérios de aceite

✓ VitruChat sem seção de Evidências.

✓ /cases inexistente ou redirecionando para "/".

✓ Product Transformation Journal abrindo em nova aba.

✓ Novo thumb ODONTO1.

✓ Breadcrumb corrigido.

✓ Marcas relacionadas apresentadas horizontalmente.

✓ Storytelling expandido.

✓ Pesquisa adicionada.

✓ RD Station adicionada.

✓ Posicionamento Premium do produto evidenciado.

---

# Entregável

IMPLEMENTATION-TASK-040.md

Registrar:

- arquivos alterados;
- componentes modificados;
- rotas afetadas;
- validação visual;
- screenshots comparativos (quando possível).