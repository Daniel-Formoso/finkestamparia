"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Azulejo 20x20cm",
    id: "produto-azulejo-20",
    href: "#contato",
    description:
      "Azulejo de cerâmica 20x20cm personalizado, ideal para decorar qualquer ambiente com estilo.",
    features: [
      "Tamanho: 20x20cm",
      "Material cerâmico de alta qualidade",
      "Estampa personalziada exclusiva",
      "Acabamento resistente e durável",
    ],
    featured: false,
    image: "./produtos/azulejo-wallace.png",
  },
  {
    name: "Caneca Fut. Americano",
    id: "produto-caneca-futebol-1",
    href: "#contato",
    description:
      "Caneca de cerâmica branca personalizada com tema de futebol americano, perfeita para fãs do esporte.",
    features: [
      "Material: cerâmica branca",
      "Capacidade: 325ml",
      "Design exclusivo com tema futebol americano",
      "Acabamento resistente",
    ],
    featured: false,
    image: "./produtos/caneca-gui.png",
  },
  {
    name: "Caneca Fut. Americano",
    id: "produto-caneca-futebol-2",
    href: "#contato",
    description:
      "Outra opção de caneca personalizada com tema de futebol americano, ótima para colecionadores ou fãs do esporte.",
    features: [
      "Material: cerâmica branca",
      "Capacidade: 325ml",
      "Design exclusivo com tema futebol americano",
      "Acabamento resistente",
    ],
    featured: false,
    image: "./produtos/caneca-the-jhon.png",
  },
  {
    name: "Squeeze de Alumínio",
    id: "produto-squeeze-dia-dos-pais",
    href: "#contato",
    description:
      "Squeeze de alumínio personalizada, perfeita para se manter hidratado com estilo no Dia dos Pais.",
    features: [
      "Material: alumínio resistente",
      "Capacidade: 500ml",
      "Design exclusivo para o Dia dos Pais",
      "Leve e portátil, ideal para uso diário",
    ],
    featured: false,
    image: "./produtos/squeeze-dia-dos-pais.png",
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
              "bg-[#1E2939]", // fundo verde
              "rounded-3xl",  // borda bem arredondada
              "md:p-6 p-6 ring-1 ring-white/10 sm:p-10 flex flex-col h-full justify-between border border-[#EFA531]/40"
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
              className="mt-4 block rounded-md bg-[#EFA531] border-2 border-[#efa531] px-3.5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#EFA531]"
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
          className="btn btn-outline border-2 bg-[#EFA531] text-white border-[#EFA531] hover:bg-white hover:text-[#EFA531] px-10"
        >
          {mostrarMais ? "Ver menos" : "Ver mais"}
        </button>
      </div>
    </div>
  );
}
