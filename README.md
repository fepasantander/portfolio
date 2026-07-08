# Plataforma Felipe Santander — Portfólio Executivo de Produto

Este é o repositório da plataforma profissional de Felipe Santander, projetada como uma experiência digital de alta fidelidade para comunicar posicionamento, credibilidade e liderança em Produto, Design e Engenharia.

---

## 🚀 Tecnologias e Design System

* **Core:** Next.js (App Router, v16.2), React v19, TypeScript
* **Styling:** Tailwind CSS v4, Lucide React (Ícones)
* **Acessibilidade:** Conformidade com padrões WCAG AA (contraste de cores e semântica de tags)
* **Performance:** Build estático otimizado e pré-renderização Turbopack
* **Integração:** Supabase SDK integrado e agnóstico a falhas no pipeline de build.

---

## 📦 Estrutura de Diretórios do Projeto

* `src/app/` — Rotas do Next.js:
  * `src/app/page.tsx` — Página principal da Landing Experience.
  * `src/app/transformations/[slug]/page.tsx` — Rota dinâmica dos estudos de caso detalhados com embeds de Figma e proteção de domínio.
* `src/components/` — Componentes React modulares e UI atômicos reutilizáveis.
* `src/data/` — Bancos de dados locais (ex: `case-studies.ts` para estudos de caso).
* `src/lib/` — Clientes de SDK (Supabase, camada de Analytics customizada).
* `md/` — Diretrizes estratégicas, Brand/Product Constitutions e histórico de decisões de produto.
* `public/` — Imagens, logotipos corporativos oficiais e documentos em PDF (currículos).

---

## 🛠️ Executando o Projeto Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Crie o arquivo `.env.local` na raiz com suas credenciais do Supabase:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=seu-url-supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-supabase
   ```

3. Inicie o servidor de desenvolvimento na porta **3005** (configurada para evitar conflitos locais):
   ```bash
   npm run dev -- -p 3005
   ```
   Acesse no navegador: **[http://localhost:3005](http://localhost:3005)**

4. Para rodar um teste completo de compilação de produção localmente:
   ```bash
   npm run build
   ```

---

## 🌐 Publicação (Vercel)

O projeto possui integração automática com a Vercel através de commits enviados para a branch `main` do repositório GitHub.
O link de produção oficial é: **[felipe-santander.vercel.app](https://felipe-santander.vercel.app/)**
