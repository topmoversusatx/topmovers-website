"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const austinMetro = [
  "Austin","Round Rock","Cedar Park","Georgetown","Pflugerville",
  "Leander","Lakeway","Hutto","Kyle","Buda",
]

const texasCities = [
  "Dallas",
  "Houston",
  "San Antonio",
  "Fort Worth",
  "El Paso",
  "Arlington",
  "Plano",
  "Corpus Christi",
  "Irving",
  "Amarillo",
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

  // Oscuro cuando inicia, claro cuando bajas
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 0.5, 0.25]
  )

  return (
    <section
      ref={sectionRef}
      className="relative py-44 text-white overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src="/coverage-area-bg.jpg"
          alt="Austin skyline"
          className="w-full h-full object-cover object-center"
        />

        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-28">
          <p className="text-sm tracking-[0.4em] uppercase text-neutral-400 mb-6">
            Coverage Area
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            From Austin to Every Corner
            <br />
            of the United States
          </h2>

          <p className="text-neutral-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Local precision in Austin. Statewide strength across Texas.
            Licensed and insured interstate moving services nationwide.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-8">

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
              className="
                p-10
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              "
            >

              <h3 className="text-sm tracking-[0.4em] uppercase text-neutral-400 mb-8 text-center">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 gap-6 text-center">
                {section.data.map((city) => (
                  <div
                    key={city}
                    className="
                      text-neutral-300
                      text-lg
                      hover:text-red-500
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    {city}
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* FLEXIBLE ROUTES */}
        <div className="text-center mt-24">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Flexible Origin & Destination Nationwide
          </h3>

          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Your move doesn’t have to start in Austin. We provide pickup and delivery
            services between any cities across Texas and throughout the United States.
            Whether it's San Antonio to Dallas, Miami to Houston, or coast to coast,
            Top Movers handles full-service relocations with no geographic limitations.
          </p>
        </div>

      </div>

    </section>
  )
}
