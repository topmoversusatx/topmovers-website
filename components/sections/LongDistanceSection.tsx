/*************************
top-movers/components/LongDistanceSection.tsx
@Serendipity Digital
**************************/

"use client"

import { motion } from "framer-motion"
import { Truck, MapPinned, ShieldCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useQuoteModal } from "@/context/QuoteModalContext"

export default function LongDistanceSection() {
  const { openModal } = useQuoteModal()

  return (
    <section
      id="long-distance-moving"
      aria-label="Long Distance Moving Service from Austin TX"
      className="
        relative w-full overflow-hidden
        md:min-h-screen md:flex md:items-center md:justify-center
      "
    >

      {/* CURVE TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[40px]"
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
      {/* — CSS background replaced by  */}
      {/*   <picture> for AVIF/WebP,    */}
      {/*   alt text, lazy loading,     */}
      {/*   and proper SEO indexing     */}
      {/* ============================= */}

      {/* Mobile */}
      <picture className="absolute inset-0 block md:hidden w-full h-full -z-10">
        <source srcSet="/long-distance-moving-bg-mobile.avif" type="image/avif" />
        <source srcSet="/long-distance-moving-bg-mobile.webp" type="image/webp" />
        <img
          src="/long-distance-moving-bg-mobile.jpg"
          alt="Moving truck on a highway during a long distance relocation from Austin TX"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={768}
          height={1024}
        />
      </picture>

      {/* Desktop */}
      <picture className="absolute inset-0 hidden md:block w-full h-full -z-10">
        <source srcSet="/long-distance-moving-bg.avif" type="image/avif" />
        <source srcSet="/long-distance-moving-bg.webp" type="image/webp" />
        <img
          src="/long-distance-moving-bg.jpg"
          alt="Professional long distance moving truck traveling on a Texas highway for a nationwide relocation from Austin"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* ============================= */}
      {/* CONTENT                       */}
      {/* ============================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 text-center text-white">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-4"
        >
          Long Distance Moving — Austin, TX
        </motion.p>

        {/* H2 — keyword: long distance movers Austin TX */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-6xl font-extrabold leading-tight"
        >
          Long Distance &amp; Interstate Movers
          <span className="block text-primary mt-1 md:mt-2">
            from Austin, TX
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 md:mt-6 max-w-3xl mx-auto text-sm md:text-xl text-gray-200"
        >
          From Texas to every corner of the United States, we deliver secure,
          on-time, and professionally managed long-haul relocations.
        </motion.p>

        {/*
          SEO support paragraph — visible, indexable
          Covers: brand + city + service scope
          Citable by Google AI Overviews, Perplexity, Bing Copilot
        */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-xs md:text-sm text-neutral-400 max-w-2xl mx-auto"
        >
          Our long distance movers handle relocations from Austin to destinations
          across the United States with dedicated trucks, secure transport, and
          professional coordination at a transparent flat rate.
        </motion.p>

        {/* GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
            mt-8 md:mt-16
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4 md:gap-8
          "
        >
          <div className="bg-white/10 backdrop-blur-sm md:backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <Truck className="mx-auto mb-2 md:mb-3 w-6 h-6 md:w-10 md:h-10 text-primary" aria-hidden="true" />
            <h3 className="text-sm md:text-xl font-semibold">Dedicated Trucks</h3>
            <p className="text-xs md:text-sm text-gray-200 mt-1">
              Direct transport, no brokers.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm md:backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <ShieldCheck className="mx-auto mb-2 md:mb-3 w-6 h-6 md:w-10 md:h-10 text-primary" aria-hidden="true" />
            <h3 className="text-sm md:text-xl font-semibold">Secure Protection</h3>
            <p className="text-xs md:text-sm text-gray-200 mt-1">
              Professional wrapping standards.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm md:backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <Clock className="mx-auto mb-2 md:mb-3 w-6 h-6 md:w-10 md:h-10 text-primary" aria-hidden="true" />
            <h3 className="text-sm md:text-xl font-semibold">On-Time Delivery</h3>
            <p className="text-xs md:text-sm text-gray-200 mt-1">
              Clear delivery windows.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm md:backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <MapPinned className="mx-auto mb-2 md:mb-3 w-6 h-6 md:w-10 md:h-10 text-primary" aria-hidden="true" />
            <h3 className="text-sm md:text-xl font-semibold">Coast-to-Coast</h3>
            <p className="text-xs md:text-sm text-gray-200 mt-1">
              Anywhere in the U.S.
            </p>
          </div>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm text-gray-300 mt-8 md:mt-10"
        >
          Trusted by families and businesses relocating from Texas to destinations nationwide.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8 flex flex-col items-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              onClick={openModal}
              aria-label="Get a free long distance moving quote from Austin TX"
              className="
                text-sm md:text-lg px-6 md:px-10 py-4 md:py-6 rounded-2xl shadow-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                active:scale-[0.98]
              "
            >
              Get Your Long-Distance Quote
            </Button>
          </motion.div>
          {/* Micro urgency */}
          <p className="text-xs text-neutral-400">Free quotes available today.</p>
        </motion.div>

        {/* AI Search extraction — sr-only */}
        <p className="sr-only">
          Top Movers USA TX provides long distance and interstate moving services
          from Austin, TX to destinations across the United States. Every long
          distance move includes dedicated trucks, secure professional wrapping,
          guaranteed delivery windows, and transparent flat-rate pricing with no
          hidden fees.
        </p>

      </div>
    </section>
  )
}
