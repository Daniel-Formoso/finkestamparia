"use client";

import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Comprei um presente personalizado da Fink para o Dia das Mães e fiquei muito satisfeita. Atendimento cuidadoso, entrega no prazo e o resultado emocionou minha mãe. Recomendo com confiança!",
      name: "Rafaela Soares",
      city: "Nova Iguaçu, RJ",
      rating: 5,
    },
    {
      text: "A caneca de chopp ficou incrível, estampa perfeita e chegou antes do prazo.",
      name: "Rafael",
      city: "São Gonçalo, RJ",
      rating: 5,
    },
    {
      text: "Fiz um pedido de squeezes personalizados e todos ficaram perfeitos. Recomendo demais!",
      name: "Camila",
      city: "Petrópolis, RJ",
      rating: 5,
    },
    {
      text: "O azulejo personalizado ficou lindo! Cada detalhe da estampa saiu perfeito.",
      name: "Daniel",
      city: "Vassouras, RJ",
      rating: 5,
    },
    {
      text: "A caneca que pedi veio com ótima qualidade e a entrega foi super rápida.",
      name: "Beatriz",
      city: "Nova Iguaçu, RJ",
      rating: 4,
    },
    {
      text: "Adorei a qualidade e a atenção aos detalhes! Recomendo demais.",
      name: "Rafaela",
      city: "São Paulo, SP",
      rating: 5,
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [containerPadding, setContainerPadding] = useState("px-6");

  // Ajusta cards por página e padding
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

  const maxPage = Math.max(0, testimonials.length - cardsPerPage);
  const translateX = currentPage * (100 / cardsPerPage);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [maxPage]);

  const nextPage = () => setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
  const prevPage = () => setCurrentPage((prev) => (prev <= 0 ? maxPage : prev - 1));

  return (
    <section
      id="clientestrabalhos"
      className={`relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 lg:px-8 ${containerPadding}`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="relative italic rounded-full py-1 text-sm/6 font-semibold text-[#EFA531]">
          Produtos
        </h2>
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Veja a opnião de quem <span className="text-[#EFA531]">confiou</span> em nós!
        </h2>
      </div>

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
              <figure className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border-l-4 border-[#EFA531] rounded-2xl h-[360px] flex flex-col justify-between p-6 shadow-lg">
                <div className="text-[#EFA531] text-3xl">“</div>
                <blockquote className="text-left text-sm/6 font-medium text-white flex-grow flex flex-col justify-between px-2">
                  <p>{t.text}</p>
                  <div className="text-[#EFA531] text-3xl self-end">”</div>
                </blockquote>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFA531]/30 flex items-center justify-center text-white font-semibold text-sm">
                    {t.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col items-start border-1">
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="flex space-x-1">
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
                    <div className="text-gray-400 text-sm">{t.city}</div>
                  </div>
                </div>
              </figure>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevPage}
          className="absolute border-2 border-[#efa531] top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EFA531] cursor-pointer text-white xl:hover:bg-white xl:hover:text-[#EFA531] flex items-center justify-center transition"
        >
          ❮
        </button>
        <button
          onClick={nextPage}
          className="absolute border-2 border-[#efa531] top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EFA531] cursor-pointer text-white xl:hover:bg-white xl:hover:text-[#EFA531] flex items-center justify-center transition"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
