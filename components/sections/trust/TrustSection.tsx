"use client"

import TrustMetrics from "./TrustMetrics"
import TrustEmotional from "./TrustEmotional"
import TestimonialsGrid from "./TestimonialsGrid"
import TrustCTA from "./TrustCTA"

export default function TrustSection() {
  return (
    <section className="relative text-white overflow-hidden min-h-screen md:min-h-full py-12 md:py-32">

      {/* ============================= */}
      {/* Background Image */}
      {/* ============================= */}
      <div className="absolute inset-0 -z-10">

        {/* Desktop Background */}
        <img
          src="/trust-bg.jpg"
          alt="Professional moving team"
          className="hidden md:block w-full h-full object-cover object-center"
        />

        {/* Mobile Background (9:16) */}
        <img
          src="/trust-bg-mobile.jpg"
          alt="Professional moving team mobile"
          className="
            block md:hidden
            w-full h-full
            object-cover
            object-[center_20%]
            scale-110
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-black/85 
          via-black/85 
          to-black/90 
          md:from-black/70 
          md:via-black/75 
          md:to-black/85" 
        />

        {/* Depth blur */}
        <div className="absolute inset-0 backdrop-blur-[1.5px] md:backdrop-blur-[2px]" />
      </div>

      {/* ============================= */}
      {/* Content */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6 space-y-14 md:space-y-32">

        <TrustMetrics />
        <TrustEmotional />
        <TestimonialsGrid />
        <TrustCTA />

      </div>

    </section>
  )
}
