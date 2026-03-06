import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Proceso from "@/components/Proceso";
import Galeria from "@/components/Galeria";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Proceso />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
