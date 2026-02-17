"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { ShieldCheck, Clock, BadgeCheck, Sparkles, Star } from "lucide-react"
import type { ReactNode } from "react"

export default function FinalCTA() {
  const { openModal } = useQuoteModal()

  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070707] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,210,30,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_75%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-neutral-300 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-[#ffd21e]" />
            Austin’s Trusted Moving Professionals
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
          >
            Move Without Stress.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd21e] via-white to-[#ffd21e]">
              Move With Confidence.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 text-lg md:text-xl text-neutral-300"
          >
            Licensed. Insured. On Time. Every Time.
          </motion.p>

          {/* Trust Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <TrustPill icon={<Clock className="h-4 w-4" />} text="Same-Day Quotes" />
            <TrustPill icon={<ShieldCheck className="h-4 w-4" />} text="Transparent Pricing" />
            <TrustPill icon={<BadgeCheck className="h-4 w-4" />} text="Professional Crews" />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-12 flex flex-col items-center gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                onClick={openModal}
                className="
                  group
                  relative
                  rounded-2xl
                  px-10 md:px-14 py-6
                  text-base md:text-lg font-semibold
                  bg-[#ffd21e] text-black
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                  active:scale-[0.98]
                  border border-black/10
                "
              >
                Get My Free Moving Quote →
              </Button>
            </motion.div>

            <div className="flex flex-col items-center gap-2 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-[#ffd21e]" />
                <span className="uppercase tracking-wide text-neutral-300">
                  Premium Service. Zero Surprises.
                </span>
              </div>
              <span className="text-neutral-500">
                Reply in minutes • Clear pricing • Owner Always Present
              </span>
            </div>
          </motion.div>

          {/* Premium Assurance Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-14"
          >
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 backdrop-blur">

              {/* Sweep Effect */}
              <motion.div
                aria-hidden
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,210,30,0.15) 40%, rgba(255,210,30,0.15) 50%, rgba(255,210,30,0.15) 60%, transparent 100%)",
                }}
              />

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <BadgeCheck className="h-5 w-5 text-[#ffd21e]" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm text-neutral-200 font-semibold">
                      Fully licensed & insured moving team
                    </p>
                    <p className="text-xs text-neutral-400">
                      Your home, your time, your peace of mind — protected.
                    </p>
                  </div>
                </div>

                <div className="h-px w-full md:hidden bg-white/10" />

                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <MiniStat label="Quote" value="Free" />
                  <span className="text-white/10">|</span>
                  <MiniStat label="Response" value="Same-Day" />
                  <span className="text-white/10">|</span>
                  <MiniStat label="Arrival" value="On-Time" />
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

function TrustPill({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-neutral-300 backdrop-blur">
      <span className="text-[#ffd21e]">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
        {label}
      </span>
      <span className="text-sm font-semibold text-neutral-200">
        {value}
      </span>
    </div>
  )
}
