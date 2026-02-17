"use client"

import { motion } from "framer-motion"

const items = [
  {
    title: "Pianos",
    description:
      "Upright and grand pianos moved with specialized piano dollies, protective padding, and experienced handlers to ensure complete safety.",
  },
  {
    title: "Gun Safes",
    description:
      "Heavy-duty gun safes transported securely using reinforced equipment, proper weight distribution techniques, and full floor protection.",
  },
  {
    title: "Pool Tables",
    description:
      "Professional disassembly, transport, and precision re-leveling to ensure your table plays perfectly in its new space.",
  },
  {
    title: "Gym Equipment",
    description:
      "Large treadmills, squat racks, and home gym systems carefully disassembled, transported, and reassembled safely.",
  },
]

export default function HeavySpecialtyItems() {
  return (
    <section className="relative py-24 md:py-32 text-white overflow-hidden">

      {/* DESKTOP BACKGROUND */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('/heavy-specialty-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* MOBILE BACKGROUND */}
      <div
        className="absolute inset-0 block md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('/heavy-specialty-bg-mobile.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.05)",
        }}
      />

      {/* CURVE TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 120" className="w-full h-[45px]" preserveAspectRatio="none">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#0a0a0a" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold tracking-tight"
        >
          Heavy & Specialty Items
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-6 text-base md:text-xl text-neutral-200 max-w-2xl mx-auto"
        >
          Moving oversized and high-value items requires more than strength — it requires expertise, precision, and the right equipment.
        </motion.p>

        {/* Grid */}
        <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-6 md:gap-10 text-left">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-5 md:p-8 rounded-xl md:rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* CURVE BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[40px]" preserveAspectRatio="none">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#0a0a0a" />
        </svg>
      </div>

    </section>
  )
}
