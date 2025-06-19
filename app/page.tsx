import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
// import CenteredCarousel from "./components/caraousel"
import RecognitionSection from "./components/recognition-section"
import ProductsSection from "./components/products-section"
import InnovationSection from "./components/innovation-section"
import HowItWorksSection from "./components/how-it-works-section"
import BenefitsSection from "./components/benefits-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <CenteredCarousel /> */}
      <RecognitionSection />
      <ProductsSection />
      <InnovationSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
