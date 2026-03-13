import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Pricing from "@/components/sections/pricing"
import TrustSection from "@/components/sections/trust/TrustSection"
import CoverageAreaSection from "@/components/sections/CoverageAreaSection"
import FinalCTA from "@/components/sections/FinalCTA"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="reviews">
        <TrustSection />
      </section>

      <section id="coverage">
        <CoverageAreaSection />
      </section>

      <section id="quote">
        <FinalCTA />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />

    </main>
  )
}