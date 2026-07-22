import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Felipe Santander — Líder de Produto & Executivo de Estratégia",
    template: "%s | Felipe Santander"
  },
  description: "Transformo desafios complexos de negócios em produtos digitais escaláveis conectando Produto, Negócio e Engenharia.",
  metadataBase: new URL("https://felipe-santander.vercel.app"),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Felipe Santander — Líder de Produto & Executivo de Estratégia",
    description: "Transformo desafios complexos de negócios em produtos digitais escaláveis conectando Produto, Negócio e Engenharia.",
    url: "https://felipe-santander.vercel.app",
    siteName: "Felipe Santander — Portfolio",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Felipe Santander — Líder de Produto & Executivo de Estratégia",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Santander — Líder de Produto & Executivo de Estratégia",
    description: "Transformo desafios complexos de negócios em produtos digitais escaláveis conectando Produto, Negócio e Engenharia.",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-zinc-950 dark:text-zinc-50 font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Person", name: "Felipe Santander", jobTitle: "Product Designer", url: "https://felipe-santander.vercel.app" }, { "@type": "WebSite", name: "Felipe Santander — Portfolio", url: "https://felipe-santander.vercel.app" }] }) }} />
        {children}
      </body>
    </html>
  );
}
