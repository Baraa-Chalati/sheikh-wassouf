import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import AuthModal from "@/components/layout/AuthModal";
import SkipLink from "@/components/ui/SkipLink";
import FloatingActions from "@/components/ui/FloatingActions";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Products from "@/components/sections/Products";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <BeforeAfter />
        <Products />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <CartDrawer />
      <AuthModal />
    </>
  );
}
