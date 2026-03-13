"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { useRef } from "react"

export default function ContactSection() {
  const { openModal } = useQuoteModal()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -100px 0px" })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="scroll-mt-24 relative text-white overflow-hidden"
    >

      {/* ================= VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">

        {/* Poster image shown before video loads (create a /video-poster.jpg from first frame) */}
        {!isInView && (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/video-poster.jpg')" }}
          />
        )}

        {/* Video only renders in DOM when section is near viewport */}
        {isInView && (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/video-poster.jpg"
          >
            <source src="/video.webm" type="video/webm" />
            <source src="/video.mp4" type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/95" />

        <div className="absolute left-1/2 top-[45%] h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="min-h-[100vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >

            <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-white/40 mb-8">
              Final Step
            </p>

            <h2 className="text-5xl md:text-8xl font-bold leading-[0.98] tracking-tight">
              Your Move.
              <br />
              <span className="text-white/90">Handled.</span>
            </h2>

            <p className="mt-8 text-base md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Tell us where you're going. We'll handle the rest with precision,
              protection, and punctuality.
            </p>

            {/* CTA */}
            <div className="mt-14 flex flex-col items-center gap-6">

              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="
                  group
                  inline-flex items-center justify-center
                  rounded-2xl
                  bg-[#ffd21e] text-black
                  px-10 py-5
                  text-sm md:text-base font-semibold tracking-wide
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                  active:scale-[0.98]
                "
              >
                Start My Move
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <p className="text-white/40 text-sm">
                Licensed • Insured • Background-Checked Teams
              </p>

              <p className="text-white/30 text-xs tracking-wide">
                Average response time: under 5 minutes
              </p>
            </div>

            <div className="mt-20 flex items-center justify-center gap-4 text-white/25 text-xs tracking-widest uppercase">
              <span className="inline-block h-[1px] w-12 bg-white/20" />
              <span>Austin, Texas • Serving Nationwide</span>
              <span className="inline-block h-[1px] w-12 bg-white/20" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
