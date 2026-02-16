"use client"

import { motion } from "framer-motion"

export default function TrustEmotional() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto text-center space-y-10"
    >
      {/* Headline */}
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        Your Home Isn’t Just Furniture.
        <br />
        <span className="text-[#facc15] drop-shadow-[0_0_15px_rgba(250,204,21,0.25)]">
          It’s Your Life.
        </span>
      </h3>

      {/* Main Paragraph */}
      <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        Every box we lift carries memories, milestones, and moments that cannot be replaced.
        That’s why our team moves with precision, protection, and respect.
      </p>

      {/* Secondary Paragraph */}
      <p className="text-neutral-500 text-base md:text-lg">
        When you choose Top Movers, you’re not hiring labor.
        <span className="text-white font-semibold"> You’re trusting professionals.</span>
      </p>

      {/* Elegant Divider */}
      <div className="w-24 h-[2px] bg-[#facc15] mx-auto mt-6 rounded-full opacity-70" />
    </motion.div>
  )
}
