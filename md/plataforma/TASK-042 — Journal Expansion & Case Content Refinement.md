# TASK-042 — Journal Expansion & Case Content Refinement

Status: Ready

Priority: High — P1

Type:

* UX
* UI
* Content
* Navigation
* Asset replacement

---

# Objetivo

Refinar a Home, ampliar o catálogo do Product Transformation Journal, melhorar a legibilidade das listas internas dos cases e corrigir rotas incorretas relacionadas ao Journal.

Esta tarefa deve ser concluída e validada integralmente em localhost antes de qualquer push ou deploy.

---

# Contexto

O ambiente local está disponível em:

`http://localhost:3006`

A rota principal do Product Transformation Journal é:

`/journal`

A rota antiga:

`/#transformations`

não deve mais ser utilizada.

---

# 1. Home — Logos Listo e VM Comunicações

Na seção que apresenta as empresas por onde passei:

## Background

Garantir que o fundo da seção seja exatamente:

```css
#000000
```

Não utilizar cinza escuro aproximado, transparência ou outra variável visual que resulte em cor diferente de preto puro.

## Listo

Substituir a imagem atualmente utilizada pela nova versão:

```text
C:\Users\MacInBox\Documents\profissional\portfolio\imagem\listo\logo-white.png
```

## VM Comunicações

Substituir a imagem atualmente utilizada pela nova versão:

```text
C:\Users\MacInBox\Documents\profissional\portfolio\imagem\vm\logo-white.png
```

Caso a pasta da VM possua outro nome no projeto, localizar a pasta correta da empresa antes de executar a substituição.

## Requisitos

* copiar os novos assets para a estrutura pública oficial do projeto, quando necessário;
* não referenciar diretamente caminhos absolutos do Windows no código;
* manter proporção e legibilidade;
* preservar alinhamento visual com os demais logotipos;
* remover ou substituir referências aos assets antigos sem apagar arquivos que ainda sejam utilizados em outro contexto;
* não aplicar fundo branco individual aos logos.

---

# 2. `/journal` — Transformar botões em destaques com thumbnails

Atualmente, o Journal apresenta apenas três entradas:

* VitruChat;
* SofIA;
* Hub de Correções.

Essas entradas não devem mais parecer simples botões.

Transformar o catálogo em uma composição de destaques visuais com:

* thumbnail;
* título;
* empresa ou contexto;
* descrição curta;
* CTA ou affordance clara de acesso;
* hover consistente com a identidade visual do portfólio;
* boa leitura em desktop e mobile.

Não utilizar carrossel.

Utilizar grid responsivo.

---

# 3. `/journal` — Catálogo de cases

O Journal deve apresentar os seguintes cases:

## Vitru Innovation Lab

* VitruChat;
* SofIA;
* Hub de Correções.

## VM Comunicações

* Odonto1;
* Revistas;
* Eventos.

## Carenet

* Orchestra;
* Diva.

Total esperado:

**8 destaques.**

---

# 4. Thumbnails do Journal

Para cada case, utilizar prioritariamente:

1. thumbnail já existente no projeto;
2. asset visual já associado ao case;
3. identidade visual ou logotipo disponível na pasta da empresa;
4. fallback tipográfico local criado no próprio projeto, caso não exista imagem adequada.

Não utilizar imagens externas.

Não buscar assets na internet.

Não criar dependência externa.

Os thumbnails devem seguir dimensões e proporções consistentes.

Evitar que diferentes formatos de origem quebrem o alinhamento do grid.

---

# 5. Rotas dos destaques do Journal

Antes de implementar os links, inspecionar as rotas existentes do projeto.

Utilizar rotas canônicas já existentes sempre que disponíveis.

## Cases já conhecidos

VitruChat deve apontar para sua transformação correspondente.

SofIA deve apontar para sua transformação correspondente.

Hub de Correções deve apontar para sua transformação correspondente.

Odonto1 deve apontar para o Journal da VM Comunicações, e não para a transformação da Vitru.

## Novas entradas

Para:

* Revistas;
* Eventos;
* Orchestra;
* Diva;

verificar se já existem páginas ou rotas de transformação implementadas.

### Caso a rota exista

Utilizar a rota canônica existente.

### Caso o conteúdo exista, mas a rota ainda não esteja exposta

Adicionar o destaque apontando para a rota correta prevista pela estrutura atual do Journal.

### Caso não exista conteúdo nem rota

Não inventar um case completo.

Criar o destaque visual preparado para o catálogo e:

* utilizar estado visual de “Em desenvolvimento”, se esse padrão já existir no projeto;
* não criar links quebrados;
* registrar a ausência no relatório de implementação.

Não criar narrativas falsas ou conteúdo não fornecido.

---

# 6. Organização visual do `/journal`

O catálogo pode ser agrupado por empresa ou apresentado em um único grid, desde que fique clara a associação entre cada case e sua organização.

Priorizar:

* hierarquia editorial;
* leitura rápida;
* consistência entre thumbnails;
* contraste;
* responsividade;
* ausência de aparência de painel administrativo;
* linguagem visual compatível com o restante do portfólio.

Cada destaque deve apresentar conteúdo suficiente para ser compreendido sem abrir a página.

---

# 7. Cases — Listas em “Problema” e “Principais Aprendizados”

Revisar todos os cases que utilizam o template atual.

Nas seções:

* `Problema`;
* `Principais Aprendizados`;

quando o conteúdo for composto por múltiplos itens, apresentar cada item como uma lista semântica com bullets.

Utilizar:

```html
<ul>
  <li>...</li>
</ul>
```

ou a abstração equivalente do componente existente.

## Requisitos visuais

* bullets visíveis;
* recuo consistente;
* espaçamento adequado entre itens;
* boa leitura em mobile;
* alinhamento com o grid e a tipografia do case;
* evitar parágrafos visualmente colados que pareçam uma lista sem marcador.

## Requisitos de conteúdo

Não transformar um parágrafo narrativo único em lista artificialmente.

Aplicar bullets apenas quando o conteúdo representar efetivamente vários pontos.

Não alterar o significado dos textos.

---

# 8. Odonto1 — Corrigir link do Journal

Na rota:

`/cases/odonto1`

o CTA do Product Transformation Journal está apontando incorretamente para:

`/transformations/vitru-oportunidades-tecnologicas`

Corrigir para a página do Journal correspondente à VM Comunicações.

Antes de alterar, identificar a rota canônica do Journal da VM já existente ou prevista na estrutura atual.

O link não deve apontar para:

* Vitru;
* Home;
* `/journal` genérico, caso já exista uma página específica da VM.

Caso a página específica da VM ainda não exista, criar somente a rota estrutural necessária utilizando conteúdo já disponível no projeto, sem inventar uma narrativa extensa.

O CTA deve continuar abrindo em nova aba, conforme o comportamento já definido para o componente do Journal:

```html
target="_blank"
rel="noopener noreferrer"
```

---

# 9. Transformação Vitru — Corrigir link de retorno

Na rota:

`/transformations/vitru-oportunidades-tecnologicas`

o link:

`Voltar para as Transformações`

está apontando para:

`/#transformations`

Essa âncora não existe mais.

Alterar o destino para:

`/journal`

## Requisitos

* preservar o texto atual, salvo se a estrutura do componente exigir pequena adequação;
* utilizar navegação interna do Next.js;
* não abrir em nova aba;
* verificar se existem outras referências a `/#transformations` no projeto;
* substituir outras ocorrências obsoletas equivalentes por `/journal`, quando estiverem claramente relacionadas ao mesmo fluxo.

---

# 10. Validação técnica

Executar:

* verificação de TypeScript;
* lint;
* build;
* inspeção de links e rotas alteradas.

Caso o lint exceda novamente o limite operacional do terminal:

1. confirmar se o processo continua ativo;
2. coletar o resultado final por método seguro;
3. não classificar como aprovado sem código de saída ou evidência conclusiva;
4. registrar com precisão no relatório.

Não iniciar outro servidor Next.js.

Não alterar a porta `3006`.

---

# 11. Validação em localhost

Validar no mínimo:

* `/`;
* `/journal`;
* `/cases/vitruchat`;
* `/cases/odonto1`;
* `/transformations/vitru-oportunidades-tecnologicas`;
* rota do Journal da VM;
* rotas dos destaques que estiverem ativas.

Confirmar:

* HTTP 200;
* HTML não vazio;
* thumbnails carregando;
* logos brancos atualizados;
* fundo da seção Empresas em `#000000`;
* grid responsivo;
* links corretos;
* ausência de 404;
* ausência de 500;
* ausência de erros críticos no Console;
* bullets visíveis em Problema e Principais Aprendizados;
* hot reload preservado.

---

# Restrições

Não executar push.

Não executar deploy.

Não criar tag.

Não alterar o histórico Git.

Não criar commit, salvo se houver solicitação posterior explícita.

Não alterar SEO global.

Não alterar Analytics.

Não instalar dependências.

Não utilizar imagens externas.

Não recriar todo o template sem necessidade.

Não inventar conteúdo factual para cases ainda não documentados.

Não alterar o projeto que está executando na porta `8080`.

---

# Critérios de aceite

* seção Empresas com fundo `#000000`;
* novos logos brancos de Listo e VM aplicados;
* `/journal` com oito destaques previstos;
* destaques com thumbnails e não mais simples botões;
* grid responsivo e sem carrossel;
* rotas existentes utilizadas corretamente;
* nenhum link quebrado para cases ainda não publicados;
* Problema com bullets quando houver múltiplos itens;
* Principais Aprendizados com bullets quando houver múltiplos itens;
* Odonto1 apontando para o Journal da VM;
* retorno da transformação Vitru apontando para `/journal`;
* ausência de referências funcionais obsoletas a `/#transformations`;
* localhost validado;
* TypeScript e build aprovados;
* lint com resultado conclusivo ou pendência documentada com evidência.

---

# Entregável

Atualizar ou criar:

`IMPLEMENTATION-TASK-042.md`

Registrar:

## Assets

* arquivos de origem utilizados;
* destinos públicos;
* referências substituídas.

## Journal

* componente alterado ou criado;
* estrutura do grid;
* oito destaques;
* thumbnails utilizadas;
* rotas de cada destaque;
* itens ativos;
* itens eventualmente marcados como “Em desenvolvimento”.

## Cases

* componentes ou templates ajustados;
* páginas afetadas pelos bullets;
* confirmação de preservação do conteúdo.

## Navegação

* correção do link do Odonto1;
* rota canônica da VM;
* correção de `/#transformations`;
* outras referências obsoletas encontradas.

## Validação

* TypeScript;
* lint;
* build;
* rotas testadas;
* códigos HTTP;
* resultado visual;
* eventuais pendências.

Após concluir o documento, interromper a execução.
