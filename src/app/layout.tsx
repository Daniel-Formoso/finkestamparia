import Preloader from "./preload";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Fonte Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// 🔹 SEO e Metadata (Server Component)
export const metadata: Metadata = {
  title: "FINK Estamparia – Loja de Personalizados",
  description:
    "FINK Estamparia – Canecas, squeezes, azulejos e outros produtos personalizados com design exclusivo.",
};

// 🔹 Layout raiz (não pode ter "use client")
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
