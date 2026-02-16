"use client"

import CountUp from "react-countup"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function TrustMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div ref={ref} className="text-center space-y-20">

      {/* Header */}
      <div>
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Trusted Across Texas.
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Hundreds of families and businesses trust Top Movers with what matters most.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

        <Metric value={547} suffix="+" label="Successful Moves" inView={inView} />

        <Metric value={18} label="Texas Cities Served" inView={inView} />

        <Metric value={0} label="Items Broken During Transport" inView={inView} />

        <Metric value={4.9} suffix="★" decimals={1} label="Average Rating" inView={inView} />

      </div>

    </div>
  )
}

function Metric({ value, suffix = "", label, inView, decimals = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      {/* Number */}
      <div className="
        text-6xl md:text-7xl font-extrabold
        text-[#facc15]
        drop-shadow-[0_0_20px_rgba(250,204,21,0.25)]
      ">
        {inView && (
          <CountUp
            end={value}
            duration={2}
            decimals={decimals}
          />
        )}
        {suffix}
      </div>

      {/* Label */}
      <p className="text-neutral-500 text-sm tracking-[0.2em] uppercase">
        {label}
      </p>
    </motion.div>
  )
}
