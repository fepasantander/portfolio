import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";
import { getPlatformArea, type PlatformAreaId } from "@/lib/platform-navigation";

interface PlatformAreaPlaceholderProps {
  areaId: PlatformAreaId;
}

export function PlatformAreaPlaceholder({ areaId }: PlatformAreaPlaceholderProps) {
  const area = getPlatformArea(areaId);

  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="pt-32 sm:pt-36">
        <Container className="pb-24 pt-8 sm:pb-32">
          <Breadcrumbs areaId={area.id} items={[{ label: area.label }]} />
          <section aria-labelledby={`${area.id}-title`} className="max-w-3xl border-l border-zinc-200 pl-6 dark:border-zinc-800 sm:pl-8">
            <p className="mb-5 text-sm font-medium text-zinc-500 dark:text-zinc-400">Conteúdo em preparação</p>
            <h1 id={`${area.id}-title`} className="text-4xl font-semibold tracking-tight sm:text-5xl">{area.label}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{area.description}</p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">{area.audienceLabel}</p>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
