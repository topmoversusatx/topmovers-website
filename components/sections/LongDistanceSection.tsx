"use client"

import { motion } from "framer-motion"
import { Truck, MapPinned, ShieldCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { useEffect, useState } from "react"

export default function LongDistanceSection() {
  const { openModal } = useQuoteModal()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

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
      {isMobile ? (
        <>
          {/* ✅ Mobile “Fixed Background” (parallax feel, reliable on iOS) */}
          <div
            className="fixed inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('/long-distance-moving-bg-mobile.jpg')",
            }}
          />
          {/* This keeps the section stacking context clean */}
          <div className="absolute inset-0 -z-10" />
        </>
      ) : (
        <>
          {/* ✅ Desktop stays exactly the same */}
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/long-distance-moving-bg.jpg')",
            }}
          />
        </>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 -z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-24 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-extrabold leading-tight"
        >
          Long Distance & Interstate Moving
          <span className="block text-primary mt-2">Nationwide Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-6 max-w-3xl mx-auto text-base md:text-xl text-gray-200"
        >
          From Texas to every corner of the United States, we deliver secure,
          on-time, and professionally managed long-haul relocations.
        </motion.p>

        {/* ✅ OPTIMIZED GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
            mt-10 md:mt-16
            grid
            grid-cols-2
            md:grid-cols-2
            lg:grid-cols-4
            gap-4 md:gap-8
          "
        >
          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <Truck className="mx-auto mb-3 w-7 h-7 md:w-10 md:h-10 text-primary" />
            <h3 className="text-sm md:text-xl font-semibold">Dedicated Trucks</h3>
            <p className="text-xs md:text-sm text-gray-200 mt-1 md:mt-2">
              Direct transport, no brokers.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <ShieldCheck className="mx-auto mb-3 w-7 h-7 md:w-10 md:h-10 text-primary" />
            <h3 className="text-sm md:text-xl font-semibold">Secure Protection</h3>
            <p className="text-xs md:text-sm text-gray-200 mt-1 md:mt-2">
              Professional wrapping standards.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <Clock className="mx-auto mb-3 w-7 h-7 md:w-10 md:h-10 text-primary" />
            <h3 className="text-sm md:text-xl font-semibold">On-Time Delivery</h3>
            <p className="text-xs md:text-sm text-gray-200 mt-1 md:mt-2">
              Clear delivery windows.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition">
            <MapPinned className="mx-auto mb-3 w-7 h-7 md:w-10 md:h-10 text-primary" />
            <h3 className="text-sm md:text-xl font-semibold">Coast-to-Coast</h3>
            <p className="text-xs md:text-sm text-gray-200 mt-1 md:mt-2">
              Anywhere in the U.S.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              onClick={openModal}
              className="
                text-base md:text-lg px-8 md:px-10 py-5 md:py-6 rounded-2xl shadow-xl
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
