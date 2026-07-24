# Felipe Santander — Portfolio

# P08 — Analytics Strategy

Version: 1.0

Status: Approved

---

# Objetivo

Definir como o Portfolio será medido.

Analytics existe para responder perguntas.

Nunca para coletar dados desnecessários.

Toda métrica deve gerar uma decisão de produto.

---

# Filosofia

Privacidade em primeiro lugar.

Poucos eventos.

Muito contexto.

Nenhuma métrica de vaidade.

---

# Perguntas que o Analytics deve responder

Os visitantes chegam aos Cases?

↓

Quais Cases despertam maior interesse?

↓

Os Testimonials aumentam confiança?

↓

O Journal está sendo acessado?

↓

Os visitantes entram em contato?

↓

Qual é o caminho percorrido antes da conversão?

---

# KPIs

Primários

Taxa de Conversão

CTR dos Cases

CTR do Journal

Clique em Contato

Tempo até Conversão

---

Secundários

Tempo na Home

Tempo por Case

Scroll

Origem do tráfego

Dispositivo

Idioma

---

Nunca utilizar

Page Views isoladamente

Bounce Rate como principal indicador

Número de visitantes como métrica de sucesso

---

# Eventos

## Home

Portfolio Open

Hero CTA

Journal CTA

Scroll 25%

Scroll 50%

Scroll 75%

Scroll 100%

---

## Cases

Case Open

Gallery Open

Gallery Image Change

Journal CTA

Previous Case

Next Case

Back to Cases

---

## Testimonials

Visible

Expanded (caso exista)

LinkedIn Click

---

## Sobre

Resume Download

LinkedIn Click

Currículo Download

---

## Contato

Email Click

LinkedIn Click

Agenda Click

Form Submit

---

## Journal

Journal Open

Journal Case Open

Return to Portfolio

---

# Conversões

Conversão Principal

Contato iniciado.

Conversões Secundárias

Currículo baixado

LinkedIn acessado

Journal acessado

Case visualizado integralmente

---

# Dashboard

Construir dashboard próprio.

Não depender do painel do Google Analytics.

Utilizar Supabase como fonte principal.

Visualização sugerida

Resumo

↓

Aquisição

↓

Cases

↓

Journal

↓

Conversões

↓

Origem

↓

Dispositivos

↓

Performance

---

# Dados Coletados

Somente:

timestamp

rota

referer

device

viewport

country

language

event

session

Nunca armazenar

nome

email

IP completo

dados pessoais

cookies desnecessários

---

# Sessões

Gerar Session ID anônimo.

Persistência curta.

Sem identificação pessoal.

---

# Heatmaps

Não implementar na versão 1.0.

Avaliar posteriormente.

---

# A/B Test

Não implementar.

O produto ainda estará em fase inicial.

---

# Alertas

Criar alertas internos para:

Erro 404

Erro 500

Links quebrados

Imagem inexistente

Queda de conversão

---

# Performance

Monitorar

LCP

CLS

INP

TTFB

Erro Javascript

Erro React

Erro Next

---

# Origem

Registrar

LinkedIn

Indeed

Gupy

Revelo

Email

Google

Direto

Outros

---

# Dashboard Administrativo

Criar área administrativa simples.

Visualização rápida.

Sem filtros complexos.

Objetivo

Responder em menos de um minuto:

Quem entrou?

O que viu?

Onde saiu?

Entrou em contato?

---

# Integrações Futuras

Google Search Console

Microsoft Clarity

Plausible

OpenPanel

PostHog

Apenas quando agregarem valor.

---

# Critérios de Aceite

✓ Dashboard próprio

✓ Eventos documentados

✓ Conversões rastreadas

✓ Nenhum dado pessoal armazenado

✓ Performance monitorada

✓ Estrutura preparada para crescimento

✓ Analytics desacoplado da interface