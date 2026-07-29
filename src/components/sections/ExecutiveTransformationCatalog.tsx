import Image from "next/image";
import Link from "next/link";
import { executiveTransformationCatalog } from "@/data/executive-transformation-curation";

export function ExecutiveTransformationCatalog() {
  return (
    <section aria-labelledby="transformations-title" className="mt-14">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">
          Executive Transformation
        </p>
        <h2 id="transformations-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Transformações
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Como atuo como líder em contextos que exigem alinhamento entre Produto, UX, Negócio, Tecnologia e IA.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {executiveTransformationCatalog.map((item) => {
          const content = (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full bg-[#ff00ff] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20 group-focus-visible:opacity-20 motion-reduce:transition-none"
              />
              <div className="relative h-28 bg-black sm:h-32">
                <Image
                  src={item.thumbnail.src}
                  alt={item.thumbnail.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-5 transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">{item.company}</p>
                <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{item.label}</h3>
                {item.status === "published" ? (
                  <span className="mt-3 inline-flex text-sm font-medium text-[#a800a8] dark:text-[#ff00ff]">
                    Explorar transformação
                    <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1 motion-reduce:transition-none">
                      →
                    </span>
                  </span>
                ) : (
                  <span className="mt-3 inline-flex rounded-full border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                    Work in progress
                  </span>
                )}
              </div>
            </>
          );
          const classes =
            "group relative isolate overflow-hidden rounded-xl border border-zinc-200 bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ff00ff] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff00ff] focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-950 dark:focus-visible:ring-offset-black motion-reduce:transform-none motion-reduce:transition-none";

          return item.destination ? (
            <Link key={item.id} href={item.destination} target="_blank" rel="noopener noreferrer" className={classes}>
              {content}
            </Link>
          ) : (
            <article key={item.id} className={classes}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
