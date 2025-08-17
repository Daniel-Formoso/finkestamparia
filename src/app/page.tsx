import HeroSection from "./components/destaques/page";
import DifferencesSection from "./components/nossos-diferenciais/page";
import AboutUs from "./components/sobre-nos/page";
import Products from "./components/produtos/page";
import Testimonials from "./components/depoimentos/page";
import Contact from "./components/contato/page";
import Footer from "./components/footer/page";
import BackToTop from "./components/botao-voltar-topo/page";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DifferencesSection />
      <AboutUs />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
