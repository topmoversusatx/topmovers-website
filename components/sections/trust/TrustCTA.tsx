"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

export default function TrustCTA() {
  const { openModal } = useQuoteModal()

  return (
    <div className="text-center space-y-6 md:space-y-8">

      {/* H3 — adds geo context without breaking the brand copy */}
      <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
        Move With Confidence.
        <span className="block text-sm font-normal text-neutral-400 mt-2 tracking-[0.2em] uppercase">
          Austin, TX &amp; Surrounding Areas
        </span>
      </h3>

      <p className="text-neutral-400 text-sm md:text-base">
        Fast quotes. Transparent pricing. Zero surprises.
      </p>

      {/*
        CTA — migrated from raw motion.button to Button component
        for design system consistency across all sections.
        aria-label includes brand + city for SEO signal.
      */}
      <div className="flex flex-col items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            size="lg"
            onClick={openModal}
            aria-label="Get a free moving quote from Top Movers USA TX in Austin"
            className="
              px-8 md:px-10
              py-3 md:py-4
              rounded-xl md:rounded-2xl
              text-sm md:text-base font-semibold
              transition-all duration-300 ease-out
              hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]
              hover:-translate-y-1
              active:scale-[0.98]
            "
          >
            Get Your Free Quote
          </Button>
        </motion.div>

        {/* Micro urgency — consistent with all other sections */}
        <p className="text-xs text-neutral-500">Free quotes available today.</p>
      </div>

    </div>
  )
}
