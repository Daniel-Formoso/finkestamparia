"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import ButtonShowMore from "../ButtonShowMore/page";

const products = [
  {
    name: "Azulejo 15x15cm",
    id: "produto-azulejo-15",
    href: "#contato",
    description:
      "Azulejo personalizado com estampa exclusiva, perfeito para decorar sua casa ou escritório.",
    features: [
      "Tamanho: 15x15cm",
      "Material cerâmico de alta qualidade",
      "Design único com tema Lua e Faísca (cachorros)",
      "Acabamento resistente e durável",
    ],
    featured: true,
    image: "./produtos/azulejo-lua-faisca.png",
  },
  {
    name: "Caneca de Chopp",
    id: "produto-caneca-chopp",
    href: "#contato",
    description:
      "Caneca de vidro para chopp, elegante e resistente, perfeita para bebidas geladas.",
    features: [
      "Material: vidro de qualidade",
      "Capacidade: 475ml",
      "Design exclusivo personalizado",
      "Ideal para presentes ou uso pessoal",
    ],
    featured: true,
    image: "./produtos/caneca-de-chopp.png",
  },
  {
    name: "Caneca Snoopy",
    id: "produto-caneca-snoopy",
    href: "#contato",
    description:
      "Estampa divertida do Snoopy, ideal para começar o dia com bom humor.",
    features: [
      "Material: cerâmica branca",
      "Capacidade: 325ml",
      "Design exclusivo com tema Snoopy",
      "Acabamento resistente",
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
    <div
      id="produtos"
      className="relative isolate bg-[#041F3F] px-6 py-24 sm:py-32 lg:px-8"
    >
      {/* Título */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="relative italic rounded-full py-1 text-sm/6 font-semibold text-[#EFA531]">
          Produtos
        </h2>
        <h2 className="w-full text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          <span className="text-[#EFA531]">Personalize</span>, 
          <span className="text-[#EFA531]"> crie </span> e
          <span className="text-[#EFA531]"> inspire</span> com cada peça!
        </h2>
      </div>
      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400 sm:text-lg">
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
              "border border-[#EFA531]/40", // <-- borda amarela para todos os cards
              product.featured
                ? "relative bg-gray-800 rounded-2xl md:p-6 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              className={classNames("text-[#EFA531] font-semibold sm:text-xl")}
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
              className="bg-[#EFA531] border-2 hover:bg-[#EFA531] tn btn-outline bg-[#EFA531] text-white border-[#EFA531] hover:bg-white hover:text-[#EFA531] mt-4 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-1 transition"
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
