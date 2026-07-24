# TASK-041 — Product Transformation Journal & Final Visual Polish

Status: Ready

Priority: High (P1)

Type:
UX
UI
Visual Design
Content

---

# Objetivo

Executar os últimos refinamentos visuais e narrativos antes da publicação da Release 1.0.

Esta tarefa deve priorizar consistência visual, storytelling e reutilização de componentes.

---

# 1. Product Transformation Journal (Novo componente)

Criar (ou refatorar para) um único componente reutilizável para todas as ocorrências do Product Transformation Journal.

A identidade visual deve transmitir um artefato premium.

Sugestões:

- fundo escuro;
- borda sutil;
- glow cyan discreto;
- ícone de Journal;
- título destacado;
- texto explicativo;
- CTA com maior contraste;
- animação suave de hover.

O componente deverá aceitar:

- título;
- descrição;
- texto do botão;
- URL.

Todas as versões devem abrir em:

target="_blank"

com:

rel="noopener noreferrer"

---

# 2. Home

Substituir a seção atual do Product Transformation Journal.

Ela deve comunicar claramente:

- o que é;
- por que existe;
- para quem foi criado;
- por que vale a leitura.

O objetivo é despertar curiosidade.

Evitar aparência de link isolado.

Criar uma seção visualmente destacada.

---

# 3. Empresas

Na Home.

Alterar o fundo da seção de empresas.

De:

branco

Para:

preto.

Utilizar os assets preparados para fundo escuro.

Substituir:

Uniasselvi
imagem:
imagem/uniasselvi/logo-white.png

Carenet
imagem:
imagem/carenet/logo-white.png

Listo
imagem:
imagem/listo/logo-white.png

Manter proporções.

Não alterar os demais logos caso não exista versão dark.

---

# 4. VitruChat

Substituir a seção atual do Product Transformation Journal.

Utilizar exatamente o mesmo componente criado para a Home.

Alterar apenas:

- título;
- descrição.

Texto orientado ao contexto da Vitru:

explicar que o Journal documenta decisões, trade-offs, arquitetura do produto, UX e evolução da solução.

---

Botão

Abrir em nova aba.

Adicionar:

target="_blank"

rel="noopener noreferrer"

---

Hover

Melhorar contraste.

Adicionar glow cyan consistente com o restante do portfolio.

---

# 5. Odonto1

Atualizar "Marcas relacionadas"

Lista correta:

- Odonto1
- ImplantNews
- PerioNews
- Ortodontia SPO
- IN Congress
- Orto Congress

Layout horizontal.

Sem carrossel.

---

# 6. Odonto1 — Principais Aprendizados

Reescrever completamente.

Destacar:

- importância da pesquisa com centenas de participantes;
- decisões de produto orientadas por evidências;
- criação de um produto Premium;
- estratégia de upsell;
- inbound marketing;
- RD Station;
- cross-sell entre marcas;
- geração de recorrência;
- fortalecimento do ecossistema digital.

Evitar repetições.

Transformar em uma conclusão executiva.

---

# 7. Odonto1

Substituir a seção atual do Product Transformation Journal.

Utilizar o mesmo componente da Home.

Descrição específica.

Relacionar o Journal às decisões de pesquisa, inbound marketing, monetização e evolução do Odonto1.

Botão:

abrir em nova aba.

Hover:

utilizar glow cyan.

---

# Restrições

Não alterar arquitetura.

Não alterar SEO.

Não alterar Analytics.

Não alterar infraestrutura.

Não alterar Git.

Não alterar Deploy.

---

# Critérios de aceite

✓ Novo componente reutilizável do Journal.

✓ Home com seção visualmente destacada.

✓ CTA abrindo em nova aba.

✓ Fundo preto na seção de empresas.

✓ Logos white utilizados.

✓ VitruChat utilizando o novo componente.

✓ Hover cyan consistente.

✓ Odonto1 atualizado.

✓ Principais Aprendizados reescritos.

✓ Marcas relacionadas corrigidas.

✓ Lint aprovado.

✓ Validação em localhost:3006.

---

# Entregável

IMPLEMENTATION-TASK-041.md

Registrar:

- componentes criados;
- componentes reutilizados;
- arquivos alterados;
- validação visual;
- validação em localhost;
- screenshots comparativos quando possível.