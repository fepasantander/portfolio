import Image from "next/image";
import { Container } from "../ui/Container";

const logos = [
  { name: "Vitru", src: "/imagem/vitru/logo-vitru-negative.png", imageClassName: "max-h-9" },
  { name: "Uniasselvi", src: "/imagem/uniasselvi/logo-white.png", imageClassName: "max-h-9" },
  { name: "Carenet", src: "/imagem/carenet/logo-white.png", imageClassName: "max-h-9" },
  { name: "Listo", src: "/imagem/listo/logo-white-v2.png", imageClassName: "max-h-9" },
  { name: "VM Comunicações", src: "/imagem/vm/logo-white-v2.png", imageClassName: "max-h-14 max-w-[9.5rem]" },
];

export default function Companies() {
  return (
    <section aria-labelledby="companies-title" className="border-y border-zinc-800 bg-[#000000] py-10 text-white">
      <Container>
        <h2 id="companies-title" className="sr-only">Empresas</h2>
        <ul className="grid grid-cols-2 gap-3 bg-[#000000] sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <li key={logo.name} className="flex h-16 items-center justify-center rounded-md border border-white/10 bg-[#000000] p-4 shadow-sm transition-colors duration-150 hover:border-cyan-400/70">
              <Image src={logo.src} alt={logo.name} width={152} height={64} className={`${logo.imageClassName} w-auto max-w-full object-contain`} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
