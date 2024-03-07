import type { Metadata } from "next";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Criando Rotas com NEXT",
  description: "Aula 05",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {children}
    </html>
  );
}
