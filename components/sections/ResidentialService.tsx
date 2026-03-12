"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

export default function ResidentialService() {
  const { openModal } = useQuoteModal()

  return (
    <section
      id="residential-moving"
      aria-label="Residential Moving Service in Austin TX"
      className="relative w-full min-h-[100vh] overflow-hidden"
    >

      {/* ============================= */}
      {/* GOLD CURVE TOP (THIN)         */}
      {/* ============================= */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none rotate-180 z-20">
        <svg
          viewBox="0 0 1440 40"
          className="w-full h-[10px] block"
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

      {/* ============================= */}
      {/* BACKGROUND IMAGE              */}
      {/* — AVIF → WebP → JPG fallback  */}
      {/* — loading="lazy" (below fold) */}
      {/* — Separate alt per breakpoint */}
      {/* ============================= */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 will-change-transform"
      >
        {/* Mobile Image */}
        <picture className="block md:hidden w-full h-full">
          <source srcSet="/residential-moving-bg-mobile.avif" type="image/avif" />
          <source srcSet="/residential-moving-bg-mobile.webp" type="image/webp" />
          <img
            src="/residential-moving-bg-mobile.avif"
            alt="Professional movers loading boxes from an Austin apartment during a residential move"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={768}
            height={1024}
          />
        </picture>

        {/* Desktop Image */}
        <picture className="hidden md:block w-full h-full">
          <source srcSet="/residential-moving-bg.avif" type="image/avif" />
          <source srcSet="/residential-moving-bg.webp" type="image/webp" />
          <img
            src="/residential-moving-bg.avif"
            alt="Professional residential moving team in Austin TX carefully handling furniture during a home move"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />
        </picture>

        {/* Overlay Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 85%)",
          }}
        />
      </motion.div>

      {/* ============================= */}
      {/* CONTENT                       */}
      {/* ============================= */}
      <div className="relative z-10 flex items-center min-h-[100vh]">
        <div className="text-white max-w-3xl pl-6 md:pl-24">

          {/* Eyebrow — geo + service context */}
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-4">
            Residential Moving — Austin, TX
          </p>

          {/* H2 — includes local keyword per audit recommendation */}
          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Stress-Free Residential Moving
            <br />
            in Austin, TX
          </h2>

          {/*
            Extended paragraph — 50+ words for SEO
            Covers: service scope, what's included, location
            Optimized for Google AI Overviews, Perplexity, Bing Copilot
          */}
          <p className="text-base md:text-lg text-neutral-200 mb-6 leading-relaxed">
            From small apartments to large family homes, our residential moving
            services in Austin, TX are designed to make your move simple and
            stress-free. Our professional movers handle packing, furniture
            protection, loading, transportation, and careful placement in your
            new home — all at a transparent flat rate.
          </p>

          {/* Feature list — 2x2 grid, scannable, CRO + AI extraction */}
          <ul
            aria-label="What's included in residential moving with Top Movers USA TX"
            className="text-neutral-300 text-base md:text-lg mb-6 list-none grid grid-cols-2 gap-x-6 gap-y-2"
          >
            <li>✓ Packing materials included</li>
            <li>✓ Furniture disassembly &amp; reassembly</li>
            <li>✓ Flat-rate pricing — no surprises</li>
            <li>✓ Owner present on every job</li>
          </ul>

          {/* Trust signal */}
          <p className="text-sm text-neutral-400 mb-8">
            Trusted by homeowners across Austin and the greater Austin area.
          </p>

          {/* AI Search extraction paragraph — sr-only */}
          <p className="sr-only">
            Top Movers USA TX residential moving services in Austin include packing
            materials, furniture disassembly and reassembly, professional moving
            equipment, and safe transportation for homes, apartments, and condos —
            with transparent flat-rate pricing and no hidden fees.
          </p>

          {/* CTA — centered inside content column, moved up from bottom */}
          <div className="flex flex-col items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={openModal}
                aria-label="Get a free residential moving quote in Austin TX"
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
            {/* Micro urgency — CRO */}
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
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

    </section>
  )
}
