"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Nossos Diferenciais", href: "/#diferenciais" },
  { name: "Sobre Nós", href: "/#sobre" },
  { name: "Produtos", href: "/#produtos" },
  { name: "Clientes & Trabalhos", href: "/#clientestrabalhos" },
  { name: "Personalize o Seu!", href: "/#contato" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 bg-[#041F3F]">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo principal */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                alt="logo loja menu principal"
                src="/header/logo-texto-branco.webp"
                width={120}
                height={50}
              />
            </Link>
          </div>

          {/* Botão mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <Bars3Icon aria-hidden="true" className="w-8 h-8" />
            </button>
          </div>

          {/* Links desktop */}
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

        {/* Menu mobile */}
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <Image
                  alt="logo loja menu mobile"
                  src="/header/logo-texto-azul.webp"
                  width={150}
                  height={50}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
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

      
<main className="mt-24 max-w-5xl mx-auto px-4 py-8 text-[#F0F0EC] rounded-xl shadow-lg">
  <h1 className="sm:text-4xl text-xl font-bold mb-6 text-[#EFA531]">
    Política de Privacidade
  </h1>

  <p className="mb-4 text-base leading-relaxed">
    Nós da <strong>Fink Estamparia</strong> valorizamos a privacidade dos nossos usuários
    e estamos comprometidos em proteger seus dados pessoais. Esta política explica
    como coletamos, usamos, armazenamos e protegemos suas informações.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Coluna 1 */}
    <div>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-[#EFA531]">1. Coleta de Dados</h2>
        <p className="text-base leading-relaxed">
          Coletamos informações que você nos fornece diretamente, como:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Nome e sobrenome</li>
          <li>E-mail e telefone</li>
          {/* <li>Informações de pagamento (quando aplicável)</li> */}
        </ul>
        {/* <p className="text-base leading-relaxed">
          Também podemos coletar dados automaticamente, como endereço IP, tipo
          de navegador, dispositivo, páginas acessadas e tempo de navegação.
        </p> */}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-[#EFA531]">2. Uso dos Dados</h2>
        <p className="text-base leading-relaxed">Os dados coletados são utilizados para:</p>
        <ul className="list-disc list-inside">
          <li>Oferecer nossos serviços de forma personalizada.</li>
          <li>Entrar em contato sobre atualizações, promoções ou suporte.</li>
          <li>Melhorar a experiência no nosso site.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-[#EFA531]">3. Compartilhamento de Dados</h2>
        <p className="text-base leading-relaxed">
          Não vendemos suas informações a terceiros. Podemos compartilhar dados com:
        </p>
        <ul className="list-disc list-inside">
          <li>Prestadores de serviços que ajudam na operação do site.</li>
          <li>Autoridades legais, se exigido por lei.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-[#EFA531]">4. Segurança das Informações</h2>
        <p className="text-base leading-relaxed">
          Adotamos medidas de segurança técnicas e administrativas para proteger seus dados contra
          acessos não autorizados, alterações, divulgação ou destruição.
        </p>
      </section>
    </div>

    {/* Coluna 2 */}
    <div>
      {/* <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-[#EFA531]">5. Cookies e Tecnologias Semelhantes</h2>
        <p className="text-base leading-relaxed">
          Nosso site pode utilizar cookies para melhorar a navegação, analisar padrões de uso e
          personalizar conteúdos e anúncios. Você pode gerenciar as preferências de cookies
          diretamente no seu navegador.
        </p>
      </section> */}

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-[#EFA531]">5. Direitos do Usuário</h2>
        <p className="text-base leading-relaxed">Você tem direito a:</p>
        <ul className="list-disc list-inside">
          <li>Solicitar acesso, correção ou exclusão dos seus dados</li>
          <li>Revogar consentimento para o uso de seus dados</li>
          <li>Entrar em contato conosco para dúvidas sobre privacidade</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-[#EFA531]">6. Alterações nesta Política</h2>
        <p className="text-base leading-relaxed">
          Podemos atualizar esta política periodicamente. Recomendamos revisitar esta página regularmente
          para se manter informado sobre quaisquer mudanças.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-[#EFA531]">Contato</h2>
        <p className="text-base leading-relaxed">
          Para dúvidas ou solicitações sobre sua privacidade, entre em contato:
        </p>
        <ul className="list-disc list-inside">
          <li>
            E-mail: <strong>finkestamparia@gmail.com</strong>
          </li>
          <li>
            Telefone: <strong>Em breve...</strong>
          </li>
        </ul>
      </section>

      <Link
        href="/"
        className="btn border-2 btn-outline bg-[#EFA531] text-white border-[#EFA531] xl:hover:bg-white xl:hover:text-[#EFA531] px-10 w-full"
      >
         Voltar para a página inicial
      </Link>
    </div>
  </div>


</main>



    </>
  );
}
