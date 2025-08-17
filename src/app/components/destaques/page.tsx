"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Nossos Diferenciais", href: "#diferenciais" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Produtos", href: "#produtos" },
  { name: "Clientes & Trabalhos", href: "#clientestrabalhos" },
  { name: "Personalize o Seu!", href: "#contato" },
  { name: "Políticas e Privacidade", href: "../pages/politicas-privacidade" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#041F3F]">
      <header className="absolute inset-x-0 top-0 z-50 animate-fade animate-duration-500 animate-delay-3000 animate-ease-in animate-normal animate-fill-both">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <img
                alt="logo loja menu principal"
                src="./header/logo-texto-branco.webp"
                className="w-30"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <Bars3Icon aria-hidden="true" className="size-8" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 h-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-regular text-white py-2 hover:border-b-2 border-[#EFA531]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <Image
                  alt="logo loja menu mobile"
                  src="./header/logo-texto-azul.webp"
                  className="w-30"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)} // Fecha o menu ao clicar
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-10 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#F2F2F2] via-[#FFFFFF] to-[#D9D9D9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <div className="relative italic rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-gray-900/50 animate-fade animate-duration-500 animate-delay-3400 animate-ease-in animate-normal animate-fill-both hidden sm:block">
              Quer ficar por dentro das novidades?
              <a
                href="https://www.instagram.com/finkestamparia/"
                className="font-semibold text-[#EFA531] pl-2 hover:text-white"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Confira no Instagram!<span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl animate-fade animate-duration-500 animate-delay-3800 animate-ease-in animate-normal animate-fill-both">
              Transforme <span className="text-[#EFA531]">objetos comuns</span>{" "}
              em<span className="text-[#EFA531]"> peças inesquecíveis!</span>
            </h1>
            <p className="mt-8 text-lg font-regular text-gray-400 sm:text-lg/8 animate-fade animate-duration-500 animate-delay-4200 animate-ease-in animate-normal animate-fill-both">
              Criamos canecas, azulejos, squeezes e muito mais, feitos sob
              medida para refletir o seu estilo. Surpreenda com presentes únicos
              ou dê mais personalidade ao seu dia a dia.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-8">
              <Link
                href="#contato"
                className="btn border-2 btn-outline bg-[#EFA531] text-white border-[#EFA531] xl:hover:bg-white xl:hover:text-[#EFA531] px-10 animate-fade-right animate-duration-500 animate-delay-[4600ms] animate-ease-in animate-normal animate-fill-both"
              >
                Já Quero!
              </Link>
              <Link
                href="#produtos"
                className="text-sm/6 font-semibold text-gray-400 xl:hover:text-[#EFA531] animate-fade-left animate-duration-500 animate-delay-[4600ms] animate-ease-in animate-normal animate-fill-both"
              >
                Ver modelos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#F2F2F2] via-[#FFFFFF] to-[#D9D9D9] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
