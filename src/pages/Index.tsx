import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Gallery />
      <About />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;