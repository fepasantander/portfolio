# Portfolio Release Candidate Review

Status: **não aprovado para apresentação**

## Melhorias realizadas neste ciclo

- Home passou a separar a faixa de Empresas e o catálogo de Cases publicado.
- VitruChat foi introduzido no catálogo editorial e na rota canônica de Portfolio.
- Células de logo e o card de Case receberam refinamento inicial de contraste e composição.

## Problemas encontrados

- O pipeline do VitruChat foi reconstruído, mas type check, lint e build continuam sem execução por falha do npm global (`npm-cli.js` ausente).
- A EV-004 ainda não concluiu hero editorial, carrossel de evidências, Journal editorial na Home e no Case, nem screenshots.
- A Home ainda contém componentes legados com blur intenso, underglow e animações longas, contrários à direção de arte aprovada.
- O `SelectedCases` ainda está em arquivo minificado, reduzindo mantenibilidade e dificultando revisão de qualidade.
- A experiência de dark mode dos logos e responsividade não foi validada visualmente em navegador.

## Correções recomendadas antes da apresentação

1. Executar type check, lint e build em runtime Node/npm funcional.
2. Concluir EV-004B: hero, evidências navegáveis, bloco Journal editorial e layout interno do Case.
3. Reduzir/remover efeitos de blur e animações dos componentes legados que ainda estão na Home.
4. Capturar e revisar Desktop, Tablet e Mobile em ambos os temas.
5. Executar Lighthouse para SEO, LCP, CLS e acessibilidade.

## Screenshots

Não anexados: não houve servidor local/browser validado nesta sessão. Não foram simulados screenshots.

## Autoavaliação

| Critério | Nota | Justificativa |
|---|---:|---|
| UX | 6 | Navegação estrutural melhorou, mas o Case não foi validado em runtime. |
| UI | 5 | Há refinamentos iniciais, porém coexistem componentes legados inconsistentes. |
| Editorial | 6 | O catálogo e o conteúdo aprovado estão mais claros; o Journal ainda é genérico. |
| Motion | 4 | Efeitos legados excedem a direção de arte. |
| Escaneabilidade | 6 | Cases e Empresas melhoraram; Home ainda tem blocos de densidade desigual. |
| Consistência | 5 | Base UI existe, mas superfícies legadas divergem. |
| Identidade visual | 5 | A direção está iniciada, não concluída. |

### Este Portfolio já transmite o nível esperado para um Principal Product Designer?

**Não.** Restam exclusivamente: validações executáveis, conclusão editorial da experiência VitruChat, reconstrução do Journal, redução de efeitos legados, QA visual responsivo e Lighthouse.
