"use client";

import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”",
      name: "Daniel",
      city: "Vassouras, RJ",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Outro depoimento incrível de cliente satisfeito com o serviço da empresa.”",
      name: "Beatriz",
      city: "Nova Iguaçu, RJ",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Mais um feedback positivo que mostra a qualidade do nosso produto.”",
      name: "Wallace",
      city: "Rio de Janeiro, RJ",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”",
      name: "Danisssel",
      city: "Vassouras, RJ",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Outro depoimento incrível de cliente satisfeito com o serviço da empresa.”",
      name: "Beatrsssaiz",
      city: "Nova Iguaçu, RJ",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Mais um feedback positivo que mostra a qualidade do nosso produto.”",
      name: "Walsssslace",
      city: "Rio de Janeiro, RJ",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [containerPadding, setContainerPadding] = useState("px-6");

  // Ajusta cards por página e padding de acordo com tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1728) {
        setCardsPerPage(3);
        setContainerPadding("px-36");
      } else if (width >= 1280) {
        setCardsPerPage(3);
        setContainerPadding("px-8");
      } else if (width >= 768) {
        setCardsPerPage(2);
        setContainerPadding("px-6");
      } else {
        setCardsPerPage(1);
        setContainerPadding("px-4");
      }
      setCurrentPage(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const translateX = currentPage * 100;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section id="clientestrabalhos"
      className={`relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 lg:px-8 ${containerPadding}`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="relative italic rounded-full py-1 text-sm/6 font-semibold text-[#EFA531]">
          Produtos
        </h2>
        <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Veja a opinião de quem confiou em nós!
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#E5E5E5] via-[#F7F7F7] to-[#CCCCCC] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      {/* Carrossel */}
      <div className="relative mt-12 overflow-hidden xl:mx-24 2xl:mx-70 sm:mx-28 md:mx-10">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`flex-none px-4 mb-6 ${
                cardsPerPage === 1
                  ? "w-full"
                  : cardsPerPage === 2
                  ? "md:w-1/2"
                  : "xl:w-1/3"
              }`}
            >
              <figure className="border border-[#EFA531]/40 bg-gray-800 md:p-4 sm:p-10 lg:p-6 rounded-2xl h-[350px] flex flex-col justify-between m-auto p-4">
                <blockquote className="text-center text-base/8 font-medium text-white sm:text-sm/9">
                  <p>{t.text}</p>
                </blockquote>
                <figcaption className="mt-4 flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-15 h-15 rounded-full object-cover"
                  />
                  {/* Avaliação por estrelas */}
                  <div className="mt-2 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating ? "text-yellow-400" : "text-gray-500"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-white xl:text-sm">
                      {t.name}
                    </div>
                    <svg
                      width={3}
                      height={3}
                      viewBox="0 0 2 2"
                      aria-hidden="true"
                      className="fill-white"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-400 xl:text-sm">{t.city}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevPage}
          className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EFA531] cursor-pointer text-white hover:bg-white hover:text-[#EFA531] flex items-center justify-center transition"
        >
          ❮
        </button>
        <button
          onClick={nextPage}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EFA531] cursor-pointer text-white hover:bg-white hover:text-[#EFA531] flex items-center justify-center transition"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
