"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

// ─────────────────────────────────────────────────────────────────
// Pricing Schema — PriceSpecification per service tier
//
// ✅ Helps Google understand pricing structure
// ✅ Can appear in rich snippets and AI Overviews
// ✅ Links provider to the global MovingCompany entity in Hero
// ✅ Covers: hourly rates, bundle discount, apartment flat rate
// ─────────────────────────────────────────────────────────────────
const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Offer",
      "@id": "https://topmoversusatx.com/#pricing-2bed",
      "name": "2-Bedroom Moving Rate — Austin, TX",
      "description": "Hourly moving rate for 2-bedroom homes with 2 professional movers. Includes truck, equipment, and packing materials.",
      "price": "150",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "150",
        "priceCurrency": "USD",
        "unitText": "hour"
      },
      "seller": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "areaServed": { "@type": "City", "name": "Austin" }
    },
    {
      "@type": "Offer",
      "@id": "https://topmoversusatx.com/#pricing-3bed",
      "name": "3-Bedroom Moving Rate — Austin, TX",
      "description": "Hourly moving rate for 3-bedroom homes with 3 professional movers. Includes truck, equipment, and packing materials.",
      "price": "160",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "160",
        "priceCurrency": "USD",
        "unitText": "hour"
      },
      "seller": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "areaServed": { "@type": "City", "name": "Austin" }
    },
    {
      "@type": "Offer",
      "@id": "https://topmoversusatx.com/#pricing-4bed",
      "name": "4+ Bedroom Moving Rate — Austin, TX",
      "description": "Hourly moving rate for 4+ bedroom homes with 4 professional movers. Includes truck, equipment, and packing materials.",
      "price": "175",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "175",
        "priceCurrency": "USD",
        "unitText": "hour"
      },
      "seller": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "areaServed": { "@type": "City", "name": "Austin" }
    },
    {
      "@type": "Offer",
      "@id": "https://topmoversusatx.com/#pricing-apartment-flat",
      "name": "$500 Apartment Flat Rate — Austin, TX",
      "description": "Flat-rate apartment moving service within Austin city limits. Includes 2 movers, truck, and no time cap for delays caused by the moving team.",
      "price": "500",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "500",
        "priceCurrency": "USD",
        "unitText": "flat"
      },
      "seller": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "areaServed": { "@type": "City", "name": "Austin" }
    }
  ]
}

export default function Pricing() {
  const { openModal } = useQuoteModal()

  return (
    <>
      {/* ─── Pricing Schema JSON-LD ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <section
        id="pricing"
        aria-label="Moving Prices and Rates in Austin TX"
        className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-16">

            {/* Eyebrow */}
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-500 mb-4">
              Moving Rates — Austin, TX
            </p>

            {/* H2 — keyword: moving company prices Austin TX */}
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Transparent. Structured. Fair.
              <span className="block text-primary mt-2 text-2xl md:text-4xl font-semibold tracking-normal">
                Moving Prices for Austin, TX
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto">
              Professional hourly rates based on home size, crew allocation,
              and operational scope. No guesswork. No hidden fees.
            </p>

            {/*
              SEO support paragraph — visible, indexable
              Covers: brand + city + pricing model + keywords
              Citable by Google AI Overviews, Perplexity, Bing Copilot
            */}
            <p className="text-zinc-500 mt-4 text-sm max-w-2xl mx-auto leading-relaxed">
              Our transparent moving rates in Austin, TX are structured around
              home size, crew allocation, and operational scope. Whether you are
              moving from an apartment or a large family home, our pricing ensures
              predictable costs with no hidden fees.
            </p>

          </div>

          {/* ================= HOW PRICING WORKS ================= */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">

            {/* HOURLY RATES */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-6">
                Hourly Moving Rates
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm">
                <div>2 Bedrooms — <span className="text-white font-medium">$150/hr</span> (2 Movers)</div>
                <div>3 Bedrooms — <span className="text-white font-medium">$160/hr</span> (3 Movers)</div>
                <div>4+ Bedrooms — <span className="text-white font-medium">$175/hr</span> (4 Movers)</div>
              </div>

              <p className="text-xs text-zinc-500 mt-6">
                Final pricing may vary depending on distance,
                building access conditions, and operational complexity.
              </p>
            </motion.div>

            {/* BUNDLE & SAVE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-primary/40 bg-zinc-900/90 p-8 backdrop-blur-sm shadow-[0_0_40px_rgba(234,179,8,0.15)]"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Bundle &amp; Save
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Clients who book moving + packing + unpacking
                may qualify for a reduced hourly rate.
              </p>

              <div className="mt-6 text-white text-lg font-semibold">
                Example:
                <div className="text-primary text-xl mt-2">
                  4-Bedroom Move → $175/hr → $160/hr
                </div>
              </div>

              <p className="text-xs text-zinc-500 mt-6">
                Discount eligibility depends on distance and scope.
              </p>
            </motion.div>

            {/* MINIMUM POLICY */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-6">
                Minimum &amp; Policy
              </h3>

              <p className="text-zinc-300 text-sm">
                4-hour minimum booking.
              </p>

              <p className="text-zinc-300 text-sm mt-4">
                Delays caused by client access issues,
                key availability, or third-party restrictions
                are billed at the standard hourly rate.
              </p>

              <div className="mt-6 text-white font-semibold">
                2 Movers × 4 Hours = $600 Minimum
              </div>
            </motion.div>

          </div>

          {/* ================= APARTMENT OFFER ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-primary bg-zinc-900/95 p-12 text-center shadow-[0_0_70px_rgba(234,179,8,0.25)]"
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-sm font-bold rounded-full tracking-wide">
              AUSTIN SPECIAL
            </span>

            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              $500 Apartment Flat Rate
            </h3>

            <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
              2 Movers + Truck. Any apartment within Austin city limits.
              No time cap when delays are caused by our team.
            </p>

            <p className="text-sm text-zinc-500 mb-10">
              External delays (client readiness, building access, elevator issues)
              are billed hourly.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-3"
            >
              <Button
                size="lg"
                aria-label="Request a moving quote from Top Movers USA TX in Austin"
                className="px-10 py-6 text-lg font-bold hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-all duration-300"
                onClick={openModal}
              >
                Request My Quote
              </Button>
              {/* Micro urgency */}
              <p className="text-xs text-zinc-500">Free quotes available today.</p>
            </motion.div>

          </motion.div>

          {/* AI Search extraction — sr-only */}
          <p className="sr-only">
            Top Movers USA TX offers transparent moving rates in Austin, TX starting
            at $150 per hour for 2-bedroom homes. Services include hourly residential
            moving, packing and unpacking bundles, and a $500 apartment flat rate for
            moves within Austin city limits — with no hidden fees and a 4-hour minimum.
          </p>

        </div>
      </section>
    </>
  )
}
