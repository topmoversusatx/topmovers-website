"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CallModal from "@/components/ui/CallModal"
import { useQuoteModal } from "@/context/QuoteModalContext"

// ─────────────────────────────────────────────────────────────────
// JSON-LD Schema — LocalBusiness + MovingCompany
// Reemplaza los valores placeholder con los datos reales del negocio.
// También puedes mover este objeto a un componente <JsonLd> separado
// o inyectarlo desde layout.tsx si prefieres centralizar el schema.
// ─────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Top Movers",
  description:
    "Top Movers is a licensed and insured moving company in Austin, TX offering residential and commercial moving services. Serving Austin, Round Rock, Pflugerville, Hutto, Georgetown and surrounding Central Texas communities.",
  url: "https://www.topmoversusatx.com",
  telephone: "+17372443247",
  priceRange: "$$",
  image: "https://www.topmoversusatx.com/hero.avif",
  address: {
  "@type": "PostalAddress",
  addressLocality: "Austin",
  addressRegion: "TX",
  addressCountry: "US"
},
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: [
    { "@type": "City", name: "Austin" },
    { "@type": "City", name: "Round Rock" },
    { "@type": "City", name: "Cedar Park" },
    { "@type": "City", name: "Georgetown" },
    { "@type": "City", name: "Pflugerville" },
    { "@type": "City", "name": "Hutto" },
    { "@type": "City", "name": "Leander" },
    { "@type": "City", "name": "Kyle" },
    { "@type": "City", "name": "Buda" },
    { "@type": "City", "name": "Killeen" }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "90",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
}

export default function Hero() {
  const [open, setOpen] = useState(false)
  const { openModal } = useQuoteModal()

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* h-[90svh] previene CLS en mobile causado por la barra del navegador */}
      <section
        aria-label="Top Movers — Professional Moving Services in Austin TX"
        className="relative h-[90svh] md:h-[95svh] w-full overflow-hidden"
      >

        {/* ======================= */}
        {/* BACKGROUND IMAGE MOBILE */}
        {/* ======================= */}
        <div className="absolute inset-0 z-0 md:hidden">
          <Image
            src="/hero-mobile.avif"
            alt="Professional movers loading a truck in Austin Texas"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* ======================== */}
        {/* BACKGROUND IMAGE DESKTOP */}
        {/* ======================== */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/hero.avif"
            alt="Top Movers crew handling a residential move in Austin TX"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* ======================= */}
        {/* DARK GRADIENT OVERLAY   */}
        {/* ======================= */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0 z-10
            bg-gradient-to-r
            from-black/90
            via-black/70
            to-black/40
            md:from-black/85
            md:via-black/60
            md:to-black/30
          "
        />

        {/* ======================= */}
        {/* CONTENT                 */}
        {/* ======================= */}
        <div className="relative z-20 flex h-full items-end pb-16 md:items-center md:pb-0">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">

              {/* H1: keyword principal + ciudad + señal de autoridad */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  font-bold
                  leading-[1.05]
                  tracking-tight
                  text-white
                "
              >
                Austin&apos;s #1 Rated
                <br />
                Moving Company
              </motion.h1>

              {/* Subtítulo: servicios + credenciales + área geográfica */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="
                  mt-6
                  text-base
                  sm:text-lg
                  md:text-xl
                  text-white/90
                  font-medium
                "
              >
                Residential &amp; Commercial Movers — Licensed &amp; Insured.
                <br className="hidden sm:block" />
                Serving Austin, Round Rock, Cedar Park &amp; the greater metro area.
              </motion.p>

              {/* Trust Signals — E-E-A-T + conversión */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.35 }}
                aria-label="Company credentials"
                className="
                  mt-5
                  flex flex-wrap
                  gap-x-5 gap-y-2
                  text-sm
                  text-white/80
                  font-medium
                "
              >
                <span>⭐ 90+ Five-Star Reviews</span>
                <span>✔ Licensed &amp; Insured</span>
                <span>✔ Free Same-Day Quotes</span>
              </motion.div>

              {/* ======================= */}
              {/* CTAs                    */}
              {/* ======================= */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="
                  mt-10
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  sm:gap-5
                "
              >
                {/* Primary CTA */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    onClick={openModal}
                    aria-haspopup="dialog"
                    aria-label="Get a free moving quote"
                    className="
                      w-full sm:w-auto
                      px-8 sm:px-10
                      py-5 sm:py-6
                      text-base
                      font-semibold
                      rounded-2xl
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-1
                      hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                      active:scale-[0.98]
                    "
                  >
                    Get My Free Moving Quote
                  </Button>
                </motion.div>

                {/* Secondary CTA — tel: nativo, número visible */}
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="
                    w-full sm:w-auto
                    px-8 sm:px-10
                    py-5 sm:py-6
                    text-base
                    border-white
                    text-white
                    hover:bg-white
                    hover:text-black
                    transition
                  "
                >
                  <a href="tel:+17372443247" aria-label="Call Top Movers Austin">
                    Call (737) 244-3247
                  </a>
                </Button>
              </motion.div>

              {/* Párrafo semántico para AI Search / E-E-A-T (sr-only) */}
              <p className="sr-only">
                Top Movers is a licensed and insured moving company based in Austin,
                TX. We specialize in local residential and commercial moves throughout
                the Austin metro area, including Round Rock, Cedar Park, Georgetown,
                and Pflugerville. With over 90 five-star reviews, our professional
                moving crew provides stress-free, damage-free relocations at
                competitive rates. Request a free same-day quote online or call us
                directly to speak with an Austin moving specialist.
              </p>

            </div>
          </div>
        </div>

        {/* ======================= */}
        {/* BOTTOM CURVE            */}
        {/* ======================= */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30"
        >
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-[60px] md:h-[70px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C360,100 1080,0 1440,40 L1440,100 L0,100 Z"
              fill="#060606"
            />
          </svg>
        </div>

      </section>

      <CallModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
