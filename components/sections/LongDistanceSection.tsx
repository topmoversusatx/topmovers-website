"use client"

import { motion } from "framer-motion"
import { Truck, MapPinned, ShieldCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useQuoteModal } from "@/context/QuoteModalContext"

export default function LongDistanceSection() {
  const { openModal } = useQuoteModal()

  return (
    <section
      id="long-distance"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* CURVE TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[40px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/long-distance-moving-bg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Long Distance & Interstate Moving
          <span className="block text-primary mt-2">
            Nationwide Services
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200"
        >
          From Texas to every corner of the United States, we deliver secure,
          on-time, and professionally managed long-haul relocations.
          Wherever you're headed — we're already on the road.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <Truck className="mx-auto mb-4 w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold">Dedicated Trucks</h3>
            <p className="text-sm text-gray-200 mt-2">
              Your belongings never mix with other moves. Direct transport, no brokers.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <ShieldCheck className="mx-auto mb-4 w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold">Secure Protection</h3>
            <p className="text-sm text-gray-200 mt-2">
              Professional wrapping, padding, and long-haul protection standards.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <Clock className="mx-auto mb-4 w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold">On-Time Delivery</h3>
            <p className="text-sm text-gray-200 mt-2">
              Clear delivery windows. No vague arrival estimates.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <MapPinned className="mx-auto mb-4 w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold">Coast-to-Coast Coverage</h3>
            <p className="text-sm text-gray-200 mt-2">
              We move you anywhere in the U.S. — from Austin to New York, Miami, or California.
            </p>
          </div>
        </motion.div>

        {/* ✅ Premium CTA (misma micro-interacción que Pricing) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              onClick={openModal}
              className="
                text-lg px-10 py-6 rounded-2xl shadow-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                active:scale-[0.98]
              "
            >
              Get Your Long-Distance Quote
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
