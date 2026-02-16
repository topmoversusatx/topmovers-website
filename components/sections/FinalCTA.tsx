"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useQuoteModal } from "@/context/QuoteModalContext"

export default function FinalCTA() {
  const { openModal } = useQuoteModal()

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Headline */}
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
          Move Without Stress.
          <br />
          <span className="text-neutral-400">
            Move With Confidence.
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-neutral-300 mb-12">
          Licensed. Insured. On Time. Every Time.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-14 text-neutral-400 text-sm tracking-wide uppercase">
          <span>✔ Same-Day Quotes</span>
          <span>✔ Transparent Pricing</span>
          <span>✔ Professional Crews</span>
        </div>

        {/* 🔥 Premium Primary CTA */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Button
            size="lg"
            onClick={openModal}
            className="
              px-14 py-6 text-lg font-semibold rounded-full
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
              active:scale-[0.98]
            "
          >
            Get My Free Moving Quote →
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
