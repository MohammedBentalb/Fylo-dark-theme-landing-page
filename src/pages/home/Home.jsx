import Contact from '../../components/Contact';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import Productive from '../../components/Productive';
import Testimonials from '../../components/Testimonials';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Productive />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
