"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const { openModal } = useQuoteModal()

  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Transparent. Structured. Fair.
          </h2>
          <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto">
            Professional hourly rates based on home size, crew allocation,
            and operational scope. No guesswork. No hidden fees.
          </p>
        </div>

        {/* ================= HOW PRICING WORKS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">

          {/* HOUSES */}
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
              Rates scale with crew size and operational complexity.
              Distance may influence final quote.
            </p>
          </motion.div>

          {/* PACKING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-primary/40 bg-zinc-900/90 p-8 backdrop-blur-sm shadow-[0_0_40px_rgba(234,179,8,0.15)]"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Bundle & Save
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
              Minimum & Policy
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

          <motion.div whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              className="px-10 py-6 text-lg font-bold hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-all duration-300"
              onClick={openModal}
            >
              Request My Quote
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}