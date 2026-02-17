"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"

export default function TrustCTA() {
  const { openModal } = useQuoteModal()

  return (
    <div className="text-center space-y-6 md:space-y-8">

      <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
        Move With Confidence.
      </h3>

      <p className="text-neutral-400 text-sm md:text-base">
        Fast quotes. Transparent pricing. Zero surprises.
      </p>

      <motion.button
        onClick={openModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="
          bg-[#facc15] text-black font-semibold
          px-8 md:px-10 
          py-3 md:py-4 
          rounded-xl md:rounded-2xl
          border border-[#facc15]
          text-sm md:text-base
          transition-all duration-300 ease-out
          hover:bg-yellow-400
          hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]
          hover:-translate-y-1
          active:scale-[0.98]
        "
      >
        Get Your Free Quote
      </motion.button>

    </div>
  )
}
