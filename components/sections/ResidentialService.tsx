"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

export default function ResidentialService() {
  const { openModal } = useQuoteModal()

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden">

      {/* ============================= */}
      {/* GOLD CURVE TOP (THIN) */}
      {/* ============================= */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none rotate-180 z-20">
        <svg
          viewBox="0 0 1440 40"
          className="w-full h-[10px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
            fill="#746b19"
          />
        </svg>
      </div>

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {/* Mobile Image */}
        <img
          src="/residential-moving-bg-mobile.jpg"
          alt="Residential moving services in Austin"
          className="block md:hidden w-full h-full object-cover"
        />

        {/* Desktop Image */}
        <img
          src="/residential-moving-bg.jpg"
          alt="Residential moving services in Austin"
          className="hidden md:block w-full h-full object-cover"
        />

        {/* Overlay Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 85%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[100vh]">
        <div className="text-white max-w-3xl pl-6 md:pl-24">

          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Stress-Free Residential Moving
          </h2>

          <p className="text-lg md:text-2xl text-neutral-200 mb-10">
            From small apartments to large family homes, our professional movers
            handle your belongings with care and precision.
          </p>

          {/* Premium Primary CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              onClick={openModal}
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

      {/* ============================= */}
      {/* CURVED TRANSITION (BOTTOM) */}
      {/* ============================= */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[45px] block"
          preserveAspectRatio="none"
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
