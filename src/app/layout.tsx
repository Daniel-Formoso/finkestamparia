import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Preloader from "./components/preload/page";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
})

export const metadata: Metadata = {
  title: "FINK Estamparia – Loja de Personalizados",
  description: "FINK Estamparia – Canecas, squeezes, azulejos e outros produtos personalizados com design exclusivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Preloader/>
        {children}
      </body>
    </html>
  );
}
