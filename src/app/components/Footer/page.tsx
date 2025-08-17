import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-[#101828] text-primary-content p-10">
        <aside>
          <img
            src="/header/logo-texto-branco.png"
            alt="FINK Estamparia Logo"
            className="w-30 mb-4"
          />
          <p className="font-bold">FINK. Estamparia</p>
          <p className="font-bold">Transformando ideias em produtos reais</p>
          <p>
            © {new Date().getFullYear()} FINK Estamparia - Todos os direitos
            reservados
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.instagram.com/finkestamparia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#EFA531] transition duration-200 ease-in-out"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="mailto:finkestamparia@gmail.com"
              target="_blank"
              className="text-white hover:text-[#EFA531] transition duration-200 ease-in-out"
            >
              <MdOutlineMail size={30} />
            </a>
            {/* <Link
              href="/AtSoon/page"
              className="text-white hover:text-[#EFA531] transition duration-200 ease-in-out"
            >
              <FaWhatsapp size={30} />
            </Link> */}
          </div>
        </nav>
      </footer>
    </>
  );
}
