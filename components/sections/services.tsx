"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ResidentialService from "./ResidentialService"
import CommercialService from "./CommercialService"
import HeavySpecialtyItems from "./HeavySpecialtyItems"
import LongDistanceSection from "./LongDistanceSection"

// ─────────────────────────────────────────────────────────────────
// Service Schema — 4 individual @type: Service nodes
//
// ✅ Complements the global MovingCompany schema in the Hero
// ✅ @id on each Service → stable entity recognition by Google
// ✅ provider links to the Hero entity via @id URL
//    → Update domain if different from topmoversusatx.com
// ✅ areaServed mirrors the Hero schema (full Austin metro)
// ✅ Long-distance correctly scoped to @type: Country
// ─────────────────────────────────────────────────────────────────
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
      ],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "description": "Flat-rate pricing with all materials and equipment included. No hidden fees."
        }
      }
    },
    {
      "@type": "Service",
      "@id": "https://topmoversusatx.com/#commercial-moving-service",
      "name": "Commercial Moving Service in Austin, TX",
      "description":
        "Top Movers USA TX offers professional commercial and office moving in Austin with minimal business downtime. Every job includes full equipment, furniture disassembly, and owner on-site coordination at a transparent flat rate.",
      "serviceType": "Commercial Moving",
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
      "@id": "https://topmoversusatx.com/#specialty-items-moving-service",
      "name": "Heavy & Specialty Items Moving in Austin, TX",
      "description":
        "Top Movers USA TX safely moves heavy and specialty items including pianos, safes, antiques, and gym equipment across Austin and surrounding areas. Specialized equipment and an experienced crew are included in every job.",
      "serviceType": "Specialty Item Moving",
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
      "@id": "https://topmoversusatx.com/#long-distance-moving-service",
      "name": "Long Distance Moving Service from Austin, TX",
      "description":
        "Top Movers USA TX provides reliable long-distance moving from Austin, TX. Every move includes full-service packing, professional equipment, and guaranteed delivery windows — with transparent flat-rate pricing and no surprises on delivery day.",
      "serviceType": "Long Distance Moving",
      "provider": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "areaServed": {
        "@type": "Country",
        "name": "US"
      }
    }
  ]
}

interface OurServicesSectionProps {
  openModal: () => void
}

export default function OurServicesSection({ openModal }: OurServicesSectionProps) {
  return (
    <>
      {/* ─── Service Schema JSON-LD ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section
        id="services"
        aria-label="Our Moving Services"
        className="scroll-mt-24 text-white"
      >

        {/* ========================= */}
        {/* TOP BLOCK WITH BACKGROUND */}
        {/* ========================= */}
        <div className="relative pt-32 pb-32 md:pt-32 md:pb-32 overflow-hidden">

          {/* 
            Background image
            — AVIF → WebP → JPG fallback (generate .avif and .webp from original)
            — fetchPriority="high" + loading="eager" only if above-the-fold
              If this section appears below the Hero, change to:
              fetchPriority="auto" loading="lazy"
          */}
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

          {/* Content */}
          <div className="relative max-w-6xl mx-auto px-6 text-center -top-20 md:-top-20">

            {/* 
              Eyebrow — upgraded with city + service keyword
              Helps Google understand geographic relevance immediately
            */}
            <p className="text-xs sm:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase text-neutral-300 mb-4 md:mb-6">
              Professional Moving Services in Austin, TX
            </p>

            {/* H2 — positive activation + brand voice preserved */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Move With Confidence.
              <br />
              No Hidden Fees. Ever.
            </h2>

            {/* 
              Micro keyword line — sits between H2 and subheadline
              Adds keyword signal without disrupting visual hierarchy
              Low visual weight, high SEO value
            */}
            <p className="mt-4 md:mt-5 text-sm sm:text-base text-neutral-400 tracking-wide">
              Residential, commercial &amp; long-distance moving — Austin and surrounding areas.
            </p>

            <div className="relative mt-6 md:mt-0 md:top-20">

              {/* Subheadline — benefit-first */}
              <p className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-4xl font-medium text-neutral-200">
                One flat price. Everything included from day one.
              </p>

              {/* 
                Trust signal — CRO micro copy
                Styled in brand gold to tie into visual identity
              */}
              <p className="mt-3 text-sm sm:text-base text-[#c9b84c] font-medium tracking-wide">
                Trusted by homeowners and businesses across Austin and the surrounding area.
              </p>

              {/* 
                Scannable feature list
                — aria-label includes brand name for AI citation context
                — Checkmarks over prose → 3-second scan
                — Wrapped in <ul> for semantic correctness
              */}
              <ul
                aria-label="What's included in every move with Top Movers USA TX"
                className="mt-6 md:mt-10 text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-y-2 gap-x-6 list-none"
              >
                <li>✓ Packing materials</li>
                <li>✓ Furniture disassembly &amp; reassembly</li>
                <li>✓ Full professional equipment</li>
                <li>✓ Owner on-site every move</li>
                <li>✓ 100% satisfaction guaranteed</li>
              </ul>

              {/* 
                AI Search extraction paragraph
                ─────────────────────────────────────────────
                Optimized for:
                  — Google AI Overviews
                  — Perplexity
                  — Bing Copilot
                  — ChatGPT Web Results

                Answers directly:
                  "What services does Top Movers USA TX offer?"
                  "What's included in a professional move in Austin?"
                  "Does Top Movers USA have hidden fees?"

                Kept visible — benefits both users and crawlers.
              */}
              <p className="mt-6 md:mt-8 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Top Movers USA TX offers professional moving services in Austin, TX including
                residential moving, commercial relocation, specialty item transport, and long-distance
                moving. Every move includes packing materials, furniture disassembly, professional
                equipment, and owner supervision — with transparent flat-rate pricing and no hidden fees.
              </p>

              {/* CTA Block */}
              <div className="mt-10 flex justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    onClick={openModal}
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

          {/* GOLD CURVE DIVIDER — decorative only */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 1440 40"
              className="w-full h-[4px] md:h-[5px]"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
                fill="#746b19"
              />
            </svg>
          </div>

        </div>

        {/* ========================= */}
        {/* SERVICES BLOCKS           */}
        {/* ========================= */}

        <div
          id="residential-moving"
          className="bg-neutral-950"
          role="region"
          aria-label="Residential Moving Service"
        >
          <ResidentialService />
        </div>

        <div
          id="commercial-moving"
          className="bg-neutral-950"
          role="region"
          aria-label="Commercial Moving Service"
        >
          <CommercialService />
        </div>

        <div
          id="heavy-specialty-items"
          className="bg-neutral-950"
          role="region"
          aria-label="Heavy and Specialty Items Moving"
        >
          <HeavySpecialtyItems />
        </div>

        <div
          id="long-distance-moving"
          role="region"
          aria-label="Long Distance Moving Service"
        >
          <LongDistanceSection />
        </div>

      </section>
    </>
  )
}
