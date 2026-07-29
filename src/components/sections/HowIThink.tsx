import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";

const capabilities = [
  ["Research", "Investigo usuários, contexto, comportamento e necessidades para transformar hipóteses em evidências. Combino pesquisa qualitativa e quantitativa conforme o problema, reduzindo decisões baseadas apenas em percepção interna."],
  ["Análise de Negócios", "Entendo objetivos, regras, restrições, atores e oportunidades antes de desenhar a solução. Conecto necessidades dos usuários ao que gera valor para o negócio e ao que realmente pode ser implementado."],
  ["Arquitetura da Informação", "Organizo conteúdos, funcionalidades, hierarquias e fluxos para tornar sistemas complexos compreensíveis. Estruturo a informação para reduzir carga cognitiva e facilitar decisões."],
  ["Visual & Interaction", "Transformo estratégia e arquitetura em interfaces claras e consistentes. Trabalho hierarquia visual, comportamento, estados e interação para que a experiência comunique tanto quanto funciona."],
  ["Validação com T.I.", "Aproximo Design e Engenharia antes da entrega final. Valido viabilidade, componentes, integrações, responsividade, estados e restrições técnicas para reduzir retrabalho e distância entre proposta e implementação."],
  ["UX Writing", "Trato linguagem como parte da interface. Estruturo mensagens, labels, feedbacks e orientações para reduzir ambiguidade, explicar decisões do sistema e ajudar o usuário a avançar."],
  ["Prototipação", "Transformo hipóteses em experiências testáveis antes de comprometer esforço de desenvolvimento. Uso diferentes níveis de fidelidade conforme a pergunta que precisamos responder."],
  ["Vibe Coding", "Uso desenvolvimento assistido por IA para aproximar design e software executável. Isso permite explorar hipóteses, criar protótipos funcionais e validar comportamento e viabilidade com muito mais velocidade."],
  ["Inteligência Artificial", "Desenho experiências que incorporam IA considerando não apenas a interface, mas contexto, comportamento, confiança, governança e participação humana. Trabalho IA como capacidade de produto, não como feature isolada."],
  ["UX Strategy", "Conecto evidências de usuários, objetivos de negócio, produto e tecnologia para orientar decisões de médio e longo prazo. UX deixa de ser apenas execução de interface e passa a participar da direção do produto."],
] as const;

function CapabilityCard({ capability, index, isClosing }: { capability: (typeof capabilities)[number]; index: number; isClosing?: boolean }) {
  return (
    <article
      tabIndex={0}
      className={`group relative isolate overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 outline-none transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#e8f7ff] hover:shadow-lg focus-visible:-translate-y-1 focus-visible:border-[#e8f7ff] focus-visible:ring-2 focus-visible:ring-[#e8f7ff] focus-visible:ring-offset-4 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-[#e8f7ff] dark:focus-visible:border-[#e8f7ff] dark:focus-visible:ring-offset-black motion-reduce:transform-none ${isClosing ? "lg:col-start-2" : ""}`}
    >
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-16 left-1/2 -z-10 h-44 w-[112%] -translate-x-1/2 rounded-full bg-[#e8f7ff] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20 group-focus-visible:opacity-20 motion-reduce:transition-none" />
      <span className="font-mono text-xs tracking-widest text-zinc-400 dark:text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">{capability[0]}</h3>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{capability[1]}</p>
    </article>
  );
}

export const HowIThink = () => (
  <section id="how-i-think" aria-labelledby="how-i-think-title" className="border-b border-zinc-100 py-24 dark:border-zinc-900">
    <Container>
      <div className="max-w-3xl">
        <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Repertório conectado</span>
        <Heading level={2} id="how-i-think-title">Como resolvo problemas.</Heading>
        <Paragraph variant="lead" className="mt-4 max-w-3xl">Eu não aplico uma receita pronta. Combino diferentes disciplinas conforme a natureza do problema.</Paragraph>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.slice(0, 9).map((capability, index) => <CapabilityCard key={capability[0]} capability={capability} index={index} />)}
        <CapabilityCard capability={capabilities[9]} index={9} isClosing />
      </div>
    </Container>
  </section>
);

export default HowIThink;
