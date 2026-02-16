"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useQuoteModal } from "@/context/QuoteModalContext"

export default function ContactSection() {
  const { openModal } = useQuoteModal()

  return (
    <section className="relative text-white overflow-hidden">

      {/* ======= VIDEO BACKGROUND ======= */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Optional subtle cinematic glow */}
        <div className="absolute left-1/2 top-[45%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* ======= Fullscreen Closing Frame ======= */}
      <div className="min-h-[100vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs md:text-sm tracking-[0.45em] uppercase text-white/50 mb-6">
              Contact
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-[1.02]">
              Move With Confidence.
            </h2>

            <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Start your move in under 60 seconds. A real human follows up fast.
            </p>

            <div className="mt-12 flex items-center justify-center gap-4">
              
              {/* ✅ BOTÓN AHORA ABRE MODAL GLOBAL */}
              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center rounded-full bg-white text-black px-7 py-4 text-sm md:text-base font-semibold"
              >
                Begin
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </motion.button>

              <div className="hidden md:block text-left">
                <p className="text-white/60 text-sm">
                  Austin-based • Serving nationwide
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Licensed & insured • Background-checked teams
                </p>
              </div>
            </div>

            <div className="mt-16 flex items-center justify-center gap-3 text-white/35 text-xs">
              <span className="inline-block h-[1px] w-10 bg-white/20" />
              <span>Top Movers — Austin, TX</span>
              <span className="inline-block h-[1px] w-10 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
