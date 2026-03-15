import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Caroline Tomas",
  description: "Dra. Caroline Tomas, gastroenterologista e hepatologia, atende em São Paulo e de forma online. Agende sua consulta para cuidados gastrointestinais de qualidade.",
  icons: {
    icon: [
      {
        url: '/v2 simbolo sem fundo 5.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/v2 simbolo sem fundo 11.svg', // coloque aqui o caminho do ícone para tema escuro
        media: '(prefers-color-scheme: dark)',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
