# TASK-012 — Asset Source Repair

Status: Ready

Priority: Blocker

Type:
Bug Fix
Assets
Data Mapping

## Objetivo

Corrigir dois problemas reais de carregamento e renderização de assets:

1. logotipo incorreto da VM Comunicação na Home;
2. imagem quebrada dentro do Case VitruChat.

Não realizar alterações de layout ou redesign.

---

## Problema 1 — VM Comunicação

O logotipo exibido na Home continua incorreto, apesar de o código aparentemente já referenciar:

logo-vm-comunicacao.jpg

### Diagnóstico obrigatório

Não assumir que o nome do arquivo garante que o asset renderizado esteja correto.

Localizar:

- o elemento visual exato exibido na Home;
- o componente responsável;
- a fonte de dados responsável;
- o valor final de `src`;
- todas as ocorrências de `logo-vm-comunicacao.jpg`;
- arquivos duplicados com o mesmo nome;
- possíveis imports estáticos;
- possíveis referências em arrays, objetos ou arquivos de configuração;
- possíveis fallbacks;
- possíveis transformações visuais que estejam alterando a aparência.

Confirmar qual arquivo físico está sendo servido no navegador.

### Asset correto

Origem:

C:\Users\MacInBox\Documents\profissional\portfolio\imagem\vm\logo-vm-comunicacao.jpg

O arquivo exibido na Home deve corresponder exatamente a esse asset.

### Correção

Copiar ou mover o asset para o diretório público correto, caso necessário.

Atualizar o `src` real utilizado pela Home.

Remover ou deixar de utilizar referências duplicadas ou incorretas.

Preservar o componente e o layout existentes.

---

## Problema 2 — VitruChat

Existe uma imagem quebrada no Case, cujo navegador tenta carregar por meio de:

/imagem/vitru/vitruchat/v1-light/Acessibilidade_MenuOpen&PropOpen&PromptClosed.png

A URL gerada pelo Next aparece como:

/_next/image?url=%2Fimagem%2Fvitru%2Fvitruchat%2Fv1-light%2FAcessibilidade_MenuOpen%26PropOpen%26PromptClosed.png

### Diagnóstico obrigatório

Verificar:

- se o arquivo existe fisicamente;
- se está dentro de `public`;
- se o nome corresponde exatamente, incluindo maiúsculas, espaços, acentos e símbolos;
- se existe diferença entre `&` e outra codificação;
- se a referência vem do conteúdo editorial, galeria de evidências ou arquivo de dados;
- se o caminho correto está sendo produzido no navegador;
- se há diferença entre a estrutura de origem e a estrutura pública.

### Correção

Caso o arquivo correto exista fora de `public`, disponibilizá-lo no local público adequado.

Caso o nome ou caminho esteja incorreto, corrigir a referência no dado responsável.

Não substituir por uma imagem diferente sem confirmar que ela representa a mesma evidência.

---

## Validação obrigatória

Após a correção, validar no servidor já existente:

http://localhost:3006

Confirmar no navegador:

- o logotipo correto da VM Comunicação;
- a imagem do VitruChat carregando sem erro;
- ausência de resposta 404 para os dois assets;
- ausência de ícone de imagem quebrada;
- ausência de regressões visuais.

---

## Restrições

Não alterar:

- layout;
- grid;
- dimensões dos componentes;
- tipografia;
- textos;
- animações;
- estrutura editorial;
- outros Cases;
- outras imagens.

Não executar `npm run dev`.

O servidor já está em execução.

---

## Critérios de aceite

✓ logo visualmente correto da VM Comunicação;

✓ arquivo servido corresponde à origem indicada;

✓ imagem de acessibilidade do VitruChat carrega corretamente;

✓ nenhum erro 404 para os dois assets;

✓ `src` final documentado;

✓ nenhuma alteração fora do escopo;

✓ causa raiz de cada problema documentada.

---

## Entregável

IMPLEMENTATION-TASK-012.md