import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/HeaderPrivacy/page";
import React from "react";

export default function PoliticaPrivacidade() {
  return (
    <div>
      <Header/>
     <main className="mt-24 max-w-5xl mx-auto px-6 py-10 text-[#F0F0EC] rounded-xl shadow-lg">
      
      {/* Título principal */}
      <h1 className="sm:text-4xl text-2xl font-bold mb-8 text-[#EFA531]">
        Política de Privacidade
      </h1>

      {/* Introdução */}
      <p className="mb-6 text-lg leading-relaxed">
        Valorizamos a sua privacidade e queremos explicar de forma clara como
        tratamos as informações que você compartilha conosco.
      </p>

      {/* Coleta de Informações */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#EFA531]">
          1. Informações que Coletamos
        </h2>
        <p className="text-lg leading-relaxed">
          Coletamos apenas as informações que você nos fornece voluntariamente,
          como nome, e-mail, telefone ou mensagem, ao entrar em contato por
          formulário, WhatsApp, Instagram ou e-mail.
        </p>
      </section>

      {/* Uso das Informações */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#EFA531]">
          2. Como Usamos Seus Dados
        </h2>
        <p className="text-lg leading-relaxed">
          Utilizamos seus dados exclusivamente para responder às suas solicitações
          de orçamento ou contato. Não compartilhamos suas informações com terceiros
          para fins comerciais.
        </p>
      </section>

      {/* Cookies e Estatísticas */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#EFA531]">
          3. Cookies e Estatísticas
        </h2>
        <p className="text-lg leading-relaxed">
          Nosso site pode utilizar cookies básicos para melhorar a navegação e
          analisar visitas de forma anônima, sem identificar o usuário.
        </p>
      </section>

      {/* Segurança */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#EFA531]">
          4. Segurança das Informações
        </h2>
        <p className="text-lg leading-relaxed">
          Tomamos medidas para proteger seus dados, mas lembramos que nenhuma
          transmissão de informações pela internet é 100% segura.
        </p>
      </section>

      {/* Contato */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 text-[#EFA531]">
          5. Contato
        </h2>
        <p className="text-lg leading-relaxed">
          Em caso de dúvidas sobre esta Política de Privacidade, entre em contato
          conosco pelo e-mail{" "}
          <a
            href="mailto:finkestamparia@gmail.com"
            className="text-[#EFA531] font-semibold hover:underline"
          >
            finkestamparia@gmail.com
          </a>{" "}
          ou através de nossos canais oficiais no WhatsApp e Instagram.
        </p>
      </section>
    </main>   
    <Footer/>
    </div>
  );
}
