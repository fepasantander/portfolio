import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Felipe Santander — Product Leader & Strategy Executive",
    template: "%s | Felipe Santander"
  },
  description: "Transformo desafios complexos de negócios em produtos digitais escaláveis conectando Produto, Negócio e Engenharia.",
  metadataBase: new URL("https://felipesantander.com"),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Felipe Santander — Product Leader & Strategy Executive",
    description: "Transformo desafios complexos de negócios em produtos digitais escaláveis conectando Produto, Negócio e Engenharia.",
    url: "https://felipesantander.com",
    siteName: "Felipe Santander",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Santander — Product Leader & Strategy Executive",
    description: "Transformo desafios complexos de negócios em produtos digitais escaláveis conectando Produto, Negócio e Engenharia.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-zinc-950 dark:text-zinc-50 font-sans">
        {children}
      </body>
    </html>
  );
}
