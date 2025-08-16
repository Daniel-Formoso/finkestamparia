import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#EFA531]">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Página não encontrada
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Desculpe, não encontramos a página que você está procurando.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Link href="/">
            <div className="btn btn-outline bg-[#EFA531] text-white border-[#EFA531] hover:bg-white hover:text-[#EFA531] px-10 w-full">
              Voltar para a Home
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
