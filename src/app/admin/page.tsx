import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Painel Administrativo
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Esta rota está reservada para gerenciamento de conteúdo e métricas da plataforma. Acesso restrito.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
}
