"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const austinMetro = [
  "Austin","Round Rock","Cedar Park","Georgetown","Pflugerville",
  "Leander","Lakeway","Hutto","Kyle","Buda",
]

const texasCities = [
  "Dallas","Houston","San Antonio","Fort Worth","El Paso",
  "Arlington","Plano","Corpus Christi","Irving","Amarillo",
]

const usaCities = [
  "New York","Los Angeles","Chicago","Miami","Atlanta",
  "Denver","Las Vegas","Phoenix","Seattle","Washington D.C.",
]

export default function CoverageAreaSection() {

  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 0.5, 0.25]
  )

  return (
    <section
      id="coverage"
      ref={sectionRef}
      className="scroll-mt-24 relative pt-16 pb-32 md:pt-28 md:pb-40 text-white overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* Desktop Background */}
        <img
          src="/coverage-area-bg.jpg"
          alt="Austin skyline"
          className="hidden md:block w-full h-full object-cover object-center"
        />

        {/* Mobile Background */}
        <img
          src="/coverage-area-bg-mobile.jpg"
          alt="Austin skyline mobile"
          className="block md:hidden w-full h-full object-cover object-center"
        />

        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs tracking-[0.45em] uppercase text-neutral-400 mb-4">
            Coverage Area
          </p>

          <h2 className="text-3xl md:text-6xl font-bold leading-tight">
            From Austin to Every Corner
            <br />
            of the United States
          </h2>

          <p className="text-neutral-300 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Local precision in Austin. Statewide strength across Texas.
            Licensed and insured interstate moving services nationwide.
          </p>
        </div>

        {/* MOBILE GRID */}
        <div className="grid grid-cols-3 gap-4 md:hidden text-center">
          {[{
            title: "Austin Metro",
            data: austinMetro
          },{
            title: "Texas",
            data: texasCities
          },{
            title: "USA",
            data: usaCities
          }].map((section) => (
            <div key={section.title}>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-4">
                {section.title}
              </h3>

              <div className="flex flex-col gap-3">
                {section.data.map((city) => (
                  <div
                    key={city}
                    className="text-neutral-300 text-sm transition-all duration-300 hover:text-[#ffd21e]"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE FLEXIBLE ROUTES */}
        <div className="md:hidden text-center mt-16">
          <h3 className="text-2xl font-bold mb-6 leading-tight">
            Flexible Origin & Destination Nationwide
          </h3>

          <p className="text-neutral-200 text-lg font-semibold max-w-md mx-auto mb-4">
            Your move doesn’t have to start in Austin.
          </p>

          <p className="text-neutral-300 text-sm leading-relaxed max-w-md mx-auto">
            We provide pickup and delivery services between any cities across Texas 
            and throughout the United States.
          </p>
        </div>

        {/* DESKTOP CARDS */}
        <div className="hidden md:grid lg:grid-cols-3 gap-8">
          {[{
            title: "Austin Metro Area",
            data: austinMetro
          },{
            title: "Across Texas",
            data: texasCities
          },{
            title: "Across the United States",
            data: usaCities
          }].map((section) => (
            <div
              key={section.title}
              className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-[#ffd21e]/40 transition-all duration-500"
            >
              <h3 className="text-xs tracking-[0.45em] uppercase text-neutral-400 mb-8 text-center">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 gap-6 text-center">
                {section.data.map((city) => (
                  <div
                    key={city}
                    className="text-neutral-300 text-lg transition-all duration-300 hover:text-[#ffd21e] hover:scale-105"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP FLEXIBLE ROUTES */}
        <div className="hidden md:block text-center mt-24 md:mt-28">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Flexible Origin & Destination Nationwide
          </h3>

          <p className="text-neutral-200 text-xl md:text-2xl font-semibold max-w-3xl mx-auto mb-6">
            Your move doesn’t have to start in Austin.
          </p>

          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We provide pickup and delivery services between any cities across Texas 
            and throughout the United States.
          </p>
        </div>

      </div>
    </section>
  )
}
