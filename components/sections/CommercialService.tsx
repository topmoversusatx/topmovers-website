"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

export default function CommercialService() {
  const { openModal } = useQuoteModal()

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/commercial-moving-bg.jpg"
          alt="Commercial and office relocation services in Austin"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(315deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 85%)"
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-end min-h-screen">
        <div className="text-white max-w-3xl pr-12 md:pr-24 text-right">

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Seamless Commercial & Office Relocation
          </h2>

          <p className="text-xl md:text-2xl text-neutral-200 mb-10">
            We relocate offices, corporate spaces, and commercial facilities
            with precision and minimal disruption — so your business keeps moving
            forward without missing a beat.
          </p>

          {/* 🔥 Premium Primary CTA */}
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
              Request a Business Quote
            </Button>
          </motion.div>

        </div>
      </div>

      {/* CURVED TRANSITION (BOTTOM) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[25px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 
               C240,120 360,40 600,80 
               C840,120 1080,40 1440,80 
               L1440,120 L0,120 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

    </section>
  )
}
