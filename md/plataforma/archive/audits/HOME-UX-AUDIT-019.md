# Home UX Audit 019 — Storytelling & Scroll Journey

Data: 2026-07-21  
Método: auditoria estática; nenhum código modificado.

## Mapa da jornada atual

Hero → Empresas → Cases → Testimonials → Como Trabalho → Sobre → Product Transformation Journal → Contato → Footer.

## Storytelling

1. **Quem é Felipe?** O Hero agora apresenta nome, proposta de valor e integração Produto–Engenharia–Negócio.
2. **Por que acreditar?** Empresas e testimonials cumprem papel de prova social, embora a força dependa da qualidade do conteúdo já publicado.
3. **Onde aplicou?** Cases aparecem cedo e o CTA conduz diretamente a eles.
4. **Quais evidências?** A Home aponta para os Cases; as evidências detalhadas ficam corretamente na página do Case/Journal.
5. **Qual ação realizar?** Há CTA para Cases no início e contato ao fim, mas o caminho para Journal compete parcialmente com a continuidade de conversão.

## Perfis

| Perfil | Leitura principal | Risco de abandono |
|---|---|---|
| RH | Identifica profissional e acesso rápido aos Cases. | Pode não chegar ao contato se os blocos intermediários forem densos. |
| UX Manager | Reconhece UX, Discovery e evidência de processo. | Testimonials/como trabalho podem parecer repetitivos se não forem concisos. |
| Head de Produto | Reconhece alinhamento estratégico e Cases. | Resultados de negócio precisam aparecer rapidamente nos cards/Cases. |
| CTO | Reconhece conexão com Engenharia e IA. | A prova técnica está concentrada nos Cases e Journal, não acima da dobra. |

## Problemas, impacto e backlog

| Severidade | Problema | Impacto | Recomendação | Prioridade |
|---|---|---|---|---|
| Alta | Apenas um Case canônico publicado reduz a percepção de amplitude. | A seção Cases não demonstra ainda a variedade prometida. | Publicar próximos Cases somente quando aprovados pelo pipeline. | P0 |
| Média | Testimonials e Como Trabalho podem repetir argumentos do Hero. | Aumenta carga cognitiva no scroll. | Revisar concisão editorial quando conteúdos finais estiverem aprovados. | P1 |
| Média | Journal aparece após vários blocos. | Parte dos visitantes pode não descobrir o aprofundamento técnico. | Validar CTR antes de alterar posição ou CTA. | P1 |
| Baixa | Contato concentra a conversão no fim. | Visitante com intenção imediata pode precisar rolar. | Medir CTA do Header antes de adicionar novo ponto de contato. | P2 |

## Pontos de conversão

- Hero: `Ver Cases`.
- Case: CTA contextual para Journal.
- Header: `Vamos conversar`.
- Contato: e-mail, LinkedIn e currículo.

## Screenshots

Desktop, Tablet e Mobile não foram gerados: o navegador de inspeção não está disponível nesta sessão. Nenhuma evidência visual foi simulada.
