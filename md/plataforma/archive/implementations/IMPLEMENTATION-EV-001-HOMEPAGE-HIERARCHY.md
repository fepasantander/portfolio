# Sprint EV-001 — Homepage Content Hierarchy

- Empresas é agora uma faixa horizontal exclusiva de logos existentes, monocromática, sem descrição ou CTA.
- Cases permanece imediatamente após Empresas, por meio do componente de catálogo existente.
- Nenhuma rota, SEO ou conteúdo de Case foi alterado.

Componentes reutilizados: `Companies`, `Transformations`, `Container` e `next/image`. Nenhum asset foi criado. A antiga seção de Transformações não é apresentada como seção separada na hierarquia; o bloco de Cases ocupa essa posição.

Nova ordem: Hero → Empresas → Cases → Testimonials → Como Trabalho → Sobre → Journal → Contato.

Impacto esperado: recrutadores encontram prova social e Cases com menos etapas de leitura. EV-002 deve substituir a implementação legada de Cards por `portfolioCases` quando o catálogo tiver conteúdo aprovado.
