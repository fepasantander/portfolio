import Image from "next/image";
import { Container } from "../ui/Container";

const logos = [
  { name: "Vitru", src: "/imagem/vitru/logo-vitru-negative.png", tone: "bg-zinc-950" },
  { name: "Uniasselvi", src: "/imagem/vitru/logo-uniasselvi-black.png", tone: "bg-white" },
  { name: "Carenet", src: "/imagem/carenet/Logotipo_Carenet.avif", tone: "bg-white" },
  { name: "Listo", src: "/imagem/listo/logo_listo_22a683e3e4.svg", tone: "bg-white" },
  { name: "VM Comunicação", src: "/imagem/vm/logo-vm-comunicacao.jpg", tone: "bg-white" },
];

export default function Companies() {
  return <section aria-labelledby="companies-title" className="border-y border-zinc-200/70 py-10 dark:border-zinc-800"><Container><h2 id="companies-title" className="sr-only">Empresas</h2><ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{logos.map((logo) => <li key={logo.name} className={`flex h-16 items-center justify-center rounded-md border border-zinc-200 p-4 shadow-sm transition-colors duration-150 hover:border-cyan-500/60 dark:border-zinc-800 ${logo.tone}`}><Image src={logo.src} alt={logo.name} width={128} height={48} className="max-h-9 w-auto max-w-full object-contain" /></li>)}</ul></Container></section>;
}
