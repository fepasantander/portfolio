# Registro de Decisões de Produto (Product Decisions Log)
## Plataforma Felipe Santander

Este documento registra de forma perene as decisões de produto, arquitetura, design e copywriting tomadas ao longo do desenvolvimento das Releases 0.1 e 0.2 da plataforma.

---

## 📋 Histórico de Decisões

### 1. Rejeição da Seção "Manifesto"
* **Decisão:** Não criar uma seção autônoma para o Manifesto na Landing Page.
* **Contexto:** Inicialmente propôs-se uma nova seção de Manifesto, mas o usuário preferiu embutir essa linha de pensamento diretamente na Hero, mantendo o minimalismo da página inicial.
* **Solução:** O manifesto foi representado visualmente através da composição abstrata da **Nano Banana Pro** e da tag de destaque **"Estratégia, Design e Impacto."** na Hero.

### 2. Redirecionamentos de Caso e Rota Dinâmica
* **Decisão:** Implementar a **Opção B (Páginas Dedicadas)** para estudos de caso.
* **Contexto:** Para apresentar profundidade de storytelling e permitir visualização de protótipos Figma integrados.
* **Solução:** Criação da estrutura dinâmica `/transformations/[slug]` no Next.js App Router e centralização dos dados em `src/data/case-studies.ts` para fácil expansão e manutenção.

### 3. Retenção de Usuários no Domínio (Modal de Interceptação)
* **Decisão:** Interceptar cliques que levam a links externos para manter o usuário no domínio.
* **Contexto:** Garantir que recrutadores e executivos não saiam do funil de conversão principal do site.
* **Solução:** Criação de um modal acolhedor com layout premium e desfoque de fundo (backdrop-blur) que impede o redirecionamento ao clicar em "Abrir Externamente", orientando o usuário a interagir com o protótipo Figma incorporado.

### 4. Estética de Neon sob o Box (Underglow Skyline GT-R)
* **Decisão:** Adicionar um efeito luminoso azul neon apenas na base dos boxes de Desafio Organizacional no hover.
* **Contexto:** Proporcionar micro-interações dinâmicas premium, fugindo de sombras homogêneas padrão (halos).
* **Solução:** Implementação de um elemento absoluto na base do card com sombra de raio amplo direcionada para baixo (`offset-y`), gerando um efeito de "poça de luz" neon no fundo.

### 5. Refinamento de Cores para Cyan Puro (CMYK)
* **Decisão:** Migrar as cores de destaque e sob o box do azul céu (`sky-500`) para o Cyan puríssimo do CMYK (`#00ffff`).
* **Contexto:** O usuário solicitou que as luzes e o brilho seguissem a cor conceitual pura da escala CMYK.
* **Solução:** Uso do código hexadecimal `#00ffff` para o underglow e sombras. Para manter a acessibilidade e contraste (WCAG AA) no modo claro, o texto em hover utiliza um tom de cyan de médio contraste (`cyan-600`), enquanto no modo escuro utiliza-se o cyan neon elétrico original (`#00ffff` / `cyan-400`).

---

## 🚀 Próximos Passos
* Adicionar novos estudos de caso estruturados (Listo, Carenet, Odonto1, Uniasselvi) no arquivo `case-studies.ts` assim que os protótipos do Figma correspondentes forem disponibilizados.
