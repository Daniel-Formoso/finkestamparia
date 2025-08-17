"use client";
import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Modal, { ModalHandle } from "../modal/modal";

export default function Contact() {
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const modalRef = useRef<ModalHandle>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const newErrors: { [key: string]: string } = {};

    if (!form.get("first-name"))
      newErrors["first-name"] = "Digite seu primeiro nome.";
    if (!form.get("last-name"))
      newErrors["last-name"] = "Digite seu último nome.";
    if (!form.get("email")) newErrors["email"] = "Digite seu email.";
    if (!form.get("phone-number"))
      newErrors["phone-number"] = "Digite seu telefone.";
    if (!form.get("message")) newErrors["message"] = "Digite sua mensagem.";
    if (!form.get("agree-to-policies"))
      newErrors["agree-to-policies"] =
        "Você deve aceitar a política de privacidade.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("https://formspree.io/f/xldlkeqb", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: form,
        });

        if (response.ok) {
          modalRef.current?.open(); // Abre o modal após envio
          (e.target as HTMLFormElement).reset();
        } else {
          alert("❌ Erro ao enviar. Tente novamente mais tarde.");
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        alert("⚠️ Erro de conexão. Verifique sua internet.");
      }
    }
  };

  return (
    <div id="contato" className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="relative italic rounded-full py-1 text-sm/6 font-semibold text-[#EFA531]">
          Contato
        </h2>
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Transforme <span className="text-[#EFA531]">suas ideias</span> em
          realidade
        </h2>
        <p className="mt-2 text-lg/8 text-gray-400">
          Preencha o formulário e receba uma proposta personalizada para o seu
          projeto.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-14">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Primeiro Nome */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-white"
            >
              Primeiro nome
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                placeholder="Primeiro nome"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#EFA531]"
              />
              {errors["first-name"] && (
                <p className="text-[#EFA531] text-sm mt-1">
                  {errors["first-name"]}
                </p>
              )}
            </div>
          </div>

          {/* Último Nome */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-white"
            >
              Último nome
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                placeholder="Último nome"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#EFA531]"
              />
              {errors["last-name"] && (
                <p className="text-[#EFA531] text-sm mt-1">
                  {errors["last-name"]}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#EFA531]"
              />
              {errors["email"] && (
                <p className="text-[#EFA531] text-sm mt-1">{errors["email"]}</p>
              )}
            </div>
          </div>

          {/* Telefone */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-white"
            >
              Telefone
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white/5 outline outline-1 outline-white/10 focus-within:outline-2 focus-within:outline-[#EFA531]">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 focus:outline-none sm:text-sm/6"
                  >
                    <option value="">UF</option>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="(00) 9 9999-9999"
                  value={phone}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
                    if (value.length > 11) value = value.slice(0, 11); // Limita 11 dígitos
                    value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses no DDD
                    value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca o hífen após 5 números
                    setPhone(value);
                  }}
                  className="pl-3.5 block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                />
              </div>
              {errors["phone-number"] && (
                <p className="text-[#EFA531] text-sm mt-1">
                  {errors["phone-number"]}
                </p>
              )}
            </div>
          </div>

          {/* Mensagem */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-white"
            >
              Mensagem
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder="Escreva sua mensagem aqui"
                rows={4}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#EFA531]"
              />
              {errors["message"] && (
                <p className="text-[#EFA531] text-sm mt-1">
                  {errors["message"]}
                </p>
              )}
            </div>
          </div>

          {/* Política de privacidade */}
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-[#EFA531] transition-colors duration-200 ease-in-out has-checked:bg-[#EFA531] has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-hidden cursor-pointer"
                />
              </div>
            </div>
            <label
              htmlFor="agree-to-policies"
              className="text-xs/6 text-gray-400"
            >
              Ao marcar esta opção, você concorda com as nossas{" "}
              <Link
                href="../pages/Privacy"
                className="font-semibold whitespace-nowrap text-[#EFA531] hover:text-[#E1AF65] hover:border-b-2 transition duration-200 ease-in-out"
              >
                políticas de privacidade
              </Link>
              .
            </label>
          </div>
          {errors["agree-to-policies"] && (
            <span className="text-[#EFA531] text-sm block w-full sm:col-span-2">
              {errors["agree-to-policies"]}
            </span>
          )}
        </div>

        {/* Botão */}
        <div className="mt-10">
          <button
            type="submit"
            className="btn border-2 btn-outline bg-[#EFA531] text-white border-[#EFA531] xl:hover:bg-white xl:hover:text-[#EFA531] px-10 w-full"
          >
            Faça um orçamento
          </button>
        </div>
      </form>
      {/* Modal de sucesso */}
      <Modal ref={modalRef} title="Mensagem enviada!">
        Tudo certo! Nossa equipe vai te ajudar a personalizar seus produtos em
        breve.
        <div className="mt-4 text-right text-sm text-[#EFA531] font-semibold">
          — FINK.
        </div>
      </Modal>
    </div>
  );
}
