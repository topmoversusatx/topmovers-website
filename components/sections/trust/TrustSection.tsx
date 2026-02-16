"use client"

import TrustMetrics from "./TrustMetrics"
import TrustEmotional from "./TrustEmotional"
import TestimonialsGrid from "./TestimonialsGrid"
import TrustCTA from "./TrustCTA"

export default function TrustSection() {
  return (
    <section className="relative text-white py-32 overflow-hidden">

      {/* ============================= */}
      {/* Background Image */}
      {/* ============================= */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/trust-bg.jpg"
          alt="Professional moving team"
          className="w-full h-full object-cover object-center"
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85" />

        {/* Subtle texture depth */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* ============================= */}
      {/* Content */}
      {/* ============================= */}
      <div className="relative max-w-7xl mx-auto px-6 space-y-32">

        <TrustMetrics />

        <TrustEmotional />

        <TestimonialsGrid />

        <TrustCTA />

      </div>

    </section>
  )
}
