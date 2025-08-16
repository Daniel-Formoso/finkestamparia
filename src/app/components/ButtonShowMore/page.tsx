"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Azulejo",
    id: "produto-azulejo-wallace",
    href: "#contato",
    description:
      "Azulejo decorativo Wallace, ideal para personalizar sua parede ou mesa.",
    features: [
      "Azulejo de cerâmica resistente",
      "Impressão de alta qualidade",
      "Tamanho 20x20cm",
    ],
    featured: true,
    image: "./produtos/azulejo-wallace.png",
  },
  {
    name: "Azulejo",
    id: "produto-azulejo-wallace",
    href: "#contato",
    description:
      "Azulejo decorativo Wallace, ideal para personalizar sua parede ou mesa.",
    features: [
      "Azulejo de cerâmica resistente",
      "Impressão de alta qualidade",
      "Tamanho 20x20cm",
    ],
    featured: true,
    image: "./produtos/azulejo-wallace.png",
  },
  {
    name: "Azulejo",
    id: "produto-azulejo-wallace",
    href: "#contato",
    description:
      "Azulejo decorativo Wallace, ideal para personalizar sua parede ou mesa.",
    features: [
      "Azulejo de cerâmica resistente",
      "Impressão de alta qualidade",
      "Tamanho 20x20cm",
    ],
    featured: true,
    image: "./produtos/azulejo-wallace.png",
  },
  {
    name: "Azulejo",
    id: "produto-azulejo-wallace",
    href: "#contato",
    description:
      "Azulejo decorativo Wallace, ideal para personalizar sua parede ou mesa.",
    features: [
      "Azulejo de cerâmica resistente",
      "Impressão de alta qualidade",
      "Tamanho 20x20cm",
    ],
    featured: true,
    image: "./produtos/azulejo-wallace.png",
  },
  {
    name: "Azulejo",
    id: "produto-azulejo-wallace",
    href: "#contato",
    description:
      "Azulejo decorativo Wallace, ideal para personalizar sua parede ou mesa.",
    features: [
      "Azulejo de cerâmica resistente",
      "Impressão de alta qualidade",
      "Tamanho 20x20cm",
    ],
    featured: true,
    image: "./produtos/azulejo-wallace.png",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Products() {
  const [mostrarMais, setMostrarMais] = useState(false);
  const qtdInicial = 0; // Exibe 2 inicialmente

  // Exibe todos os produtos se mostrarMais for true, ou só os iniciais
  const produtosExibidos = mostrarMais
    ? products
    : products.slice(0, qtdInicial);

  return (
    <div className="relative isolate bg-[#041F3F] mb-8 lg:px-8">
      <div className="mt-8 grid max-w-5xl mx-auto grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-6 align-items-center justify-items-center">
        {produtosExibidos.map((product, idx) => (
          <div
            key={product.id}
            className={classNames(
              "md:w-100 xl:w-full",
              product.featured
                ? "relative bg-gray-800 relative rounded-2xl bg-gray-800 border border-[#EFA531]/40 md:p-6 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                : "bg-white/2.5 sm:mx-8 lg:mx-0",
              product.featured
                ? ""
                : idx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-white/10 sm:p-10 flex flex-col h-full justify-between"
            )}
          >
            <h3
              id={product.id}
              className={classNames(
                "text-[#EFA531]",
                "font-semibold sm:text-xl"
              )}
            >
              {product.name}
            </h3>
            <img
              src={product.image}
              alt={product.name}
              className="my-4 w-full h-auto object-cover rounded-2xl"
            />
            <p className="text-gray-400 mt-2 text-xs/6 md:text-xs/6 lg:text-sm/6">
              {product.description}
            </p>
            <ul
              role="list"
              className="my-4 space-y-2 text-gray-400 text-xs/6 lg:text-sm/6"
            >
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-x-2">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-[#EFA531]"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={product.href}
              aria-describedby={product.id}
              className="mt-4 block rounded-md bg-[#EFA531] px-3.5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#EFA531]"
            >
              Peça Já o Seu!
            </a>
          </div>
        ))}
      </div>

      {/* Botão Ver Mais / Ver Menos */}
      <div className={`flex justify-center ${mostrarMais ? "mt-8" : "mt-4 "}`}>
        <button
          onClick={() => setMostrarMais(!mostrarMais)}
          className="btn btn-outline bg-[#EFA531] text-white border-[#EFA531] hover:bg-white hover:text-[#EFA531] px-10"
        >
          {mostrarMais ? "Ver menos" : "Ver mais"}
        </button>
      </div>
    </div>
  );
}
