import HeroSection from "./components/HeroSection/page";
import DifferencesSection from "./components/DifferencesSection/page";
import AboutUs from "./components/AboutUs/page";
import Products from "./components/Products/page";
import Testimonials from "./components/Testimonials/page";
import Contact from './components/Contact/page';
import Footer from "./components/Footer/page";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DifferencesSection />
      <AboutUs />
      <Products />
      <Testimonials />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
