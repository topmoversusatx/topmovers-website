"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ResidentialService from "./ResidentialService"
import CommercialService from "./CommercialService"
import HeavySpecialtyItems from "./HeavySpecialtyItems"
import LongDistanceSection from "./LongDistanceSection"

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://topmoversusatx.com/#residential-moving-service",
      "name": "Residential Moving Service in Austin, TX",
      "description":
        "Top Movers USA TX provides full-service residential moving in Austin and surrounding areas. Every move includes packing materials, furniture disassembly and reassembly, professional equipment, and owner on-site supervision — with transparent flat-rate pricing and no hidden fees.",
      "serviceType": "Residential Moving",
      "provider": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "areaServed": [
        { "@type": "City", "name": "Austin" },
        { "@type": "City", "name": "Round Rock" },
        { "@type": "City", "name": "Cedar Park" },
        { "@type": "City", "name": "Georgetown" },
        { "@type": "City", "name": "Pflugerville" },
        { "@type": "City", "name": "Hutto" },
        { "@type": "City", "name": "Leander" },
        { "@type": "City", "name": "Kyle" },
        { "@type": "City", "name": "Buda" },
        { "@type": "City", "name": "Killeen" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://topmoversusatx.com/#commercial-moving-service",
      "name": "Commercial Moving Service in Austin, TX",
      "description":
        "Top Movers USA TX offers professional commercial and office moving in Austin with minimal business downtime.",
      "serviceType": "Commercial Moving",
      "provider": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      }
    },
    {
      "@type": "Service",
      "@id": "https://topmoversusatx.com/#specialty-items-moving-service",
      "name": "Heavy & Specialty Items Moving in Austin, TX",
      "description":
        "Top Movers USA TX safely moves heavy and specialty items including pianos, safes, antiques, and gym equipment across Austin and surrounding areas.",
      "serviceType": "Specialty Item Moving",
      "provider": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      }
    },
    {
      "@type": "Service",
      "@id": "https://topmoversusatx.com/#long-distance-moving-service",
      "name": "Long Distance Moving Service from Austin, TX",
      "description":
        "Top Movers USA TX provides reliable long-distance moving from Austin, TX.",
      "serviceType": "Long Distance Moving",
      "provider": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      }
    }
  ]
}

interface OurServicesSectionProps {
  openModal?: () => void
}

export default function OurServicesSection({ openModal }: OurServicesSectionProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section
        id="services"
        aria-label="Our Moving Services"
        className="scroll-mt-24 text-white"
      >

        <div className="relative pt-32 pb-32 md:pt-32 md:pb-32 overflow-hidden">

          <div className="absolute inset-0 -z-10">
            <picture>
              <source srcSet="/services-bg.avif" type="image/avif" />
              <source srcSet="/services-bg.webp" type="image/webp" />
              <img
                src="/services-bg.jpg"
                alt="Professional movers loading furniture and boxes into a moving truck in Austin TX"
                className="w-full h-full object-cover object-bottom"
                fetchPriority="high"
                loading="eager"
                width={1920}
                height={1080}
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 text-center -top-20 md:-top-20">

            <p className="text-xs sm:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase text-neutral-300 mb-4 md:mb-6">
              Professional Moving Services in Austin, TX
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Move With Confidence.
              <br />
              No Hidden Fees. Ever.
            </h2>

            <p className="mt-4 md:mt-5 text-sm sm:text-base text-neutral-400 tracking-wide">
              Residential, commercial & long-distance moving — Austin and surrounding areas.
            </p>

            <div className="relative mt-6 md:mt-0 md:top-20">

              <p className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-4xl font-medium text-neutral-200">
                One flat price. Everything included from day one.
              </p>

              <p className="mt-3 text-sm sm:text-base text-[#c9b84c] font-medium tracking-wide">
                Trusted by homeowners and businesses across Austin and the surrounding area.
              </p>

              <ul
                aria-label="What's included in every move with Top Movers USA TX"
                className="mt-6 md:mt-10 text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-y-2 gap-x-6 list-none"
              >
                <li>✓ Packing materials</li>
                <li>✓ Furniture disassembly & reassembly</li>
                <li>✓ Full professional equipment</li>
                <li>✓ Owner on-site every move</li>
                <li>✓ 100% satisfaction guaranteed</li>
              </ul>

              <div className="mt-10 flex justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    onClick={() => openModal?.()}
                    aria-label="Get a free moving quote from Top Movers USA TX"
                    className="
                      px-8 py-6 text-base font-semibold rounded-2xl
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                      active:scale-[0.98]
                    "
                  >
                    Get a Free Quote
                  </Button>
                </motion.div>
              </div>

            </div>

          </div>

        </div>

        <div id="residential-moving" className="bg-neutral-950">
          <ResidentialService />
        </div>

        <div id="commercial-moving" className="bg-neutral-950">
          <CommercialService />
        </div>

        <div id="heavy-specialty-items" className="bg-neutral-950">
          <HeavySpecialtyItems />
        </div>

        <div id="long-distance-moving">
          <LongDistanceSection />
        </div>

      </section>
    </>
  )
}