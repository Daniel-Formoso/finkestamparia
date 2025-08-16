"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import ButtonShowMore from "../ButtonShowMore/page";

const products = [
  {
    name: "Caneca Snoopy",
    id: "produto-caneca-snoopy",
    href: "#contato",
    description:
      "Estampa divertida do Snoopy, ideal para começar o dia com bom humor.",
    features: [
      "Caneca branca de cerâmica",
      "Material de qualidade",
      "Capacidade de 325ml",
    ],
    featured: true,
    image: "./produtos/caneca-snoopy.png",
  },
  {
    name: "Caneca Snoopy",
    id: "produto-caneca-snoopy2",
    href: "#contato",
    description:
      "Estampa divertida do Snoopy, ideal para começar o dia com bom humor.",
    features: [
      "Caneca branca de cerâmica",
      "Material de qualidade",
      "Capacidade de 325ml",
    ],
    featured: true,
    image: "./produtos/caneca-snoopy.png",
  },
  {
    name: "Caneca Snoopy",
    id: "produto-caneca-snoopy3",
    href: "#contato",
    description:
      "Estampa divertida do Snoopy, ideal para começar o dia com bom humor.",
    features: [
      "Caneca branca de cerâmica",
      "Material de qualidade",
      "Capacidade de 325ml",
    ],
    featured: true,
    image: "./produtos/caneca-snoopy.png",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Products() {
  return (
    <div id="produtos" className="relative isolate bg-[#041F3F] px-6 py-24 sm:py-32 lg:px-8">
      {/* Título */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="relative italic rounded-full py-1 text-sm/6 font-semibold text-[#EFA531]">
          Produtos
        </h2>
        <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Com a sua personalidade em cada detalhe!
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-400 sm:text-lg/8">
        Encontre o produto perfeito e deixe com a sua cara! Personalizamos com
        cuidado e qualidade para criar peças únicas, feitas especialmente para
        você.
      </p>

      {/* Grid de produtos */}
      <div className="mt-8 grid max-w-5xl mx-auto grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-6 align-items-center justify-items-center">

        {products.map((product, productIdx) => (
          <div
            key={product.id}
            className={classNames(
              // Largura full por padrão, só fixa no md (tablet)
              "md:w-100 xl:w-full",
              product.featured
                ? "relative bg-gray-800 rounded-2xl border border-[#EFA531]/40 md:p-6 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                : "bg-white/2.5 sm:mx-8 lg:mx-0",
              product.featured
                ? ""
                : productIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              productIdx === 3 ? "hidden md:block lg:hidden" : "",
              "rounded-3xl p-8 ring-1 ring-white/10 sm:p-10 flex flex-col h-full justify-between"
            )}
          >
            <h3
              id={product.id}
              className={classNames(
                "text-[#EFA531] font-semibold sm:text-xl"
              )}
            >
              {product.name}
            </h3>
            <img
              src={product.image}
              alt={product.name}
              className="my-4 w-full h-auto object-cover rounded-2xl"
            />
            <p className="text-gray-400 text-xs/6 md:text-xs/6 lg:text-sm/6">
              {product.description}
            </p>
            <ul className="my-4 space-y-2 text-gray-400 text-xs/6 lg:text-sm/6">
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
              className="bg-[#EFA531] hover:bg-[#EFA531] tn btn-outline bg-[#EFA531] text-white border-[#EFA531] hover:bg-white hover:text-[#EFA531] mt-4 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-1 transition"
            >
              Peça Já o Seu!
            </a>
          </div>
        ))}
      </div>

      <ButtonShowMore />
    </div>
  );
}
