# Sprint P08 — Analytics

## Arquitetura e coleta

`src/lib/analytics.ts` expõe `track` e um catálogo fechado de eventos para Home, Cases, Testimonials, Sobre, Contato, Journal, performance e erros. Componentes chamam a fachada `analytics`, sem acoplamento a fornecedor.

No navegador, a coleta gera um UUID em `sessionStorage`, sem cookies e sem identificação de pessoa. O payload contém somente timestamp do banco, rota, referer, tipo de dispositivo, viewport, idioma, evento, sessão e propriedades não pessoais.

## Banco e dashboard

`supabase/analytics-events.sql` cria `analytics_events`, com RLS habilitado e política exclusiva de inserção anônima. O dashboard administrativo deve consultar agregados dessa tabela após aplicar a migração; não foram incluídas credenciais ou dados pessoais no cliente.

## Fluxo

Interface → fachada `analytics` → payload mínimo → Supabase `analytics_events` → agregados no dashboard. Search Console, Clarity, Plausible e PostHog permanecem pontos de integração futura, sem dependência atual.

## Validação

O catálogo e o payload foram revisados estaticamente para ausência de nome, e-mail, IP completo e cookies. Para validar persistência, aplique a migração no projeto Supabase configurado. Lint/build seguem bloqueados pelo npm global inválido (`npm-cli.js` ausente).
