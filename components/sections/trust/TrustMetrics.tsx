"use client"

import CountUp from "react-countup"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function TrustMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div ref={ref} className="text-center space-y-14 md:space-y-20">

      {/* Header */}
      <div>
        {/* H2 — keyword: trusted moving company Austin TX */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6">
          Trusted Moving Company Across Texas
          <span className="block text-primary text-xl md:text-2xl font-medium mt-2 tracking-normal">
            Serving Austin and Surrounding Areas
          </span>
        </h2>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          Hundreds of families and businesses across Austin, TX trust Top Movers
          USA TX with what matters most.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

        <Metric
          value={547}
          suffix="+"
          label="Successful Moves"
          ariaLabel="547 or more successful moves completed"
          inView={inView}
        />

        <Metric
          value={18}
          label="Texas Cities Served"
          ariaLabel="18 Texas cities served"
          inView={inView}
        />

        <Metric
          value={0}
          label="Items Broken or Lost"
          ariaLabel="Zero items broken or lost during transport"
          inView={inView}
        />

        <Metric
          value={4.9}
          suffix="★"
          decimals={1}
          label="Average Rating"
          ariaLabel="4.9 star average rating"
          inView={inView}
        />

      </div>

    </div>
  )
}

interface MetricProps {
  value: number
  suffix?: string
  label: string
  ariaLabel: string
  inView: boolean
  decimals?: number
}

function Metric({ value, suffix = "", label, ariaLabel, inView, decimals = 0 }: MetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-3 md:space-y-4"
    >
      {/* Number — aria-label provides full context for screen readers */}
      <div
        aria-label={ariaLabel}
        className="
          text-4xl md:text-7xl font-extrabold
          text-[#facc15]
          drop-shadow-[0_0_20px_rgba(250,204,21,0.25)]
        "
      >
        {inView && (
          <CountUp
            end={value}
            duration={2}
            decimals={decimals}
            aria-hidden="true"
          />
        )}
        <span aria-hidden="true">{suffix}</span>
      </div>

      {/* Label */}
      <p className="text-neutral-500 text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase">
        {label}
      </p>
    </motion.div>
  )
}
