"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CallModal from "@/components/ui/CallModal"
import { useQuoteModal } from "@/context/QuoteModalContext"

export default function Hero() {
  const [open, setOpen] = useState(false)
  const { openModal } = useQuoteModal()

  return (
    <>
      <section className="relative h-[90vh] md:h-[95vh] w-full overflow-hidden">

        {/* ======================= */}
        {/* BACKGROUND IMAGE MOBILE */}
        {/* ======================= */}
        <div className="absolute inset-0 z-0 md:hidden">
          <Image
            src="/hero-mobile.jpg"
            alt="Top Movers Professional Moving Services in Austin Texas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* ======================== */}
        {/* BACKGROUND IMAGE DESKTOP */}
        {/* ======================== */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/hero.jpg"
            alt="Top Movers Professional Moving Services in Austin Texas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* ======================= */}
        {/* DARK GRADIENT OVERLAY */}
        {/* ======================= */}
        <div
          className="
            absolute inset-0 z-10 
            bg-gradient-to-r 
            from-black/90 
            via-black/70 
            to-black/40
            md:from-black/85 
            md:via-black/60 
            md:to-black/30
          "
        />

        {/* ======================= */}
        {/* CONTENT */}
        {/* ======================= */}
        <div className="relative z-20 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                  text-4xl 
                  sm:text-5xl 
                  md:text-7xl 
                  font-bold 
                  leading-[1.05] 
                  tracking-tight 
                  text-white
                "
              >
                Move With Confidence.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="
                  mt-6 
                  text-base 
                  sm:text-lg 
                  md:text-xl 
                  text-gray-300 
                  font-medium
                "
              >
                Austin’s Trusted Moving Professionals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="
                  mt-10 
                  flex 
                  flex-col 
                  sm:flex-row 
                  gap-4 
                  sm:gap-5
                "
              >
                {/* Primary CTA */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    onClick={openModal}
                    className="
                      w-full sm:w-auto
                      px-8 sm:px-10 
                      py-5 sm:py-6 
                      text-base 
                      font-semibold 
                      rounded-2xl
                      transition-all 
                      duration-300 
                      ease-out
                      hover:-translate-y-1
                      hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                      active:scale-[0.98]
                    "
                  >
                    Get a Free Quote
                  </Button>
                </motion.div>

                {/* Secondary CTA */}
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setOpen(true)}
                  className="
                    w-full sm:w-auto
                    px-8 sm:px-10 
                    py-5 sm:py-6 
                    text-base 
                    border-white 
                    text-white 
                    hover:bg-white 
                    hover:text-black 
                    transition
                  "
                >
                  Call Now
                </Button>
              </motion.div>

            </div>
          </div>
        </div>

        {/* ======================= */}
        {/* BOTTOM CURVE */}
        {/* ======================= */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-[60px] md:h-[70px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C360,100 1080,0 1440,40 L1440,100 L0,100 Z"
              fill="#060606"
            />
          </svg>
        </div>

      </section>

      <CallModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
