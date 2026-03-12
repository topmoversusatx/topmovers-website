"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

// ─────────────────────────────────────────────
// useEffect + useState for mobile detection
// removed completely.
// The browser handles responsive images natively
// via <picture> — no JS needed, better performance.
// ─────────────────────────────────────────────

export default function CommercialService() {
  const { openModal } = useQuoteModal()

  return (
    <section
      id="commercial-moving"
      aria-label="Commercial Moving Service in Austin TX"
      className="relative w-full min-h-[100vh] overflow-hidden"
    >

      {/* ============================= */}
      {/* CURVED TRANSITION (TOP)       */}
      {/* ============================= */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[45px] rotate-180 block"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      {/* ============================= */}
      {/* BACKGROUND IMAGE              */}
      {/* — AVIF → WebP → JPG fallback  */}
      {/* — <picture> replaces isMobile */}
      {/* — loading="lazy" (below fold) */}
      {/* — will-change-transform (GPU) */}
      {/* ============================= */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 will-change-transform"
      >
        {/* Mobile Image */}
        <picture className="block md:hidden w-full h-full">
          <source srcSet="/commercial-moving-mobile.avif" type="image/avif" />
          <source srcSet="/commercial-moving-mobile.webp" type="image/webp" />
          <img
            src="/commercial-moving-mobile.jpg"
            alt="Commercial moving crew relocating office equipment in Austin TX"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
            width={768}
            height={1024}
          />
        </picture>

        {/* Desktop Image */}
        <picture className="hidden md:block w-full h-full">
          <source srcSet="/commercial-moving-bg.avif" type="image/avif" />
          <source srcSet="/commercial-moving-bg.webp" type="image/webp" />
          <img
            src="/commercial-moving-bg.jpg"
            alt="Professional commercial movers relocating office furniture and equipment in Austin TX"
            className="w-full h-full object-cover object-center md:object-[center_30%]"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />
        </picture>

        {/* Overlay Gradient — right-side origin to frame left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(315deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 85%)",
          }}
        />
      </motion.div>

      {/* ============================= */}
      {/* CONTENT — right aligned       */}
      {/* ============================= */}
      <div className="relative z-10 flex items-center justify-end min-h-[100vh]">
        <div className="text-white max-w-3xl pr-6 md:pr-24 text-right">

          {/* Eyebrow — geo + service context */}
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-4">
            Commercial Moving — Austin, TX
          </p>

          {/* H2 — keyword local included */}
          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Seamless Commercial &amp; Office Moving
            <br />
            in Austin, TX
          </h2>

          {/* Extended paragraph — 50+ words, geo + service scope */}
          <p className="text-base md:text-lg text-neutral-200 mb-6 leading-relaxed">
            We relocate offices, corporate spaces, and commercial facilities across
            Austin, TX with precision and minimal disruption — so your business
            continues operating without delays. Every commercial move is handled
            by our experienced team at a transparent flat rate.
          </p>

          {/* Feature list — 2x2 grid, right-aligned, scannable */}
          <ul
            aria-label="What's included in commercial moving with Top Movers USA TX"
            className="text-neutral-300 text-base md:text-lg mb-6 list-none grid grid-cols-2 gap-x-6 gap-y-2 justify-items-end"
          >
            <li>✓ Office equipment protection</li>
            <li>✓ After-hours relocation available</li>
            <li>✓ Minimal operational downtime</li>
            <li>✓ Experienced commercial team</li>
          </ul>

          {/* Trust signal */}
          <p className="text-sm text-neutral-400 mb-8">
            Trusted by businesses across Austin and the greater Austin area.
          </p>

          {/* AI Search extraction — sr-only */}
          <p className="sr-only">
            Top Movers USA TX provides commercial and office moving services in
            Austin, TX including workspace relocation, office equipment transport,
            and secure handling of business assets with minimal operational
            downtime and transparent flat-rate pricing.
          </p>

          {/* CTA + micro urgency */}
          <div className="flex flex-col items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={openModal}
                aria-label="Request a free commercial moving quote in Austin TX"
                className="
                  px-8 py-6 text-base font-semibold rounded-2xl
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                  active:scale-[0.98]
                "
              >
                Request a Business Quote
              </Button>
            </motion.div>
            {/* Micro urgency */}
            <p className="text-xs text-neutral-400">Free quotes available today.</p>
          </div>

        </div>
      </div>

      {/* ============================= */}
      {/* CURVED TRANSITION (BOTTOM)    */}
      {/* ============================= */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[45px] block"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0,80 
               C360,20 1080,140 1440,80 
               L1440,120 L0,120 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

    </section>
  )
}
