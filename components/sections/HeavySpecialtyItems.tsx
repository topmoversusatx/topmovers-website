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
    <section
      className="relative py-32 text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('/heavy-specialty-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* ============================= */}
      {/* CURVE TOP (INVERTED) */}
      {/* ============================= */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[45px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="px-4 py-1 text-sm tracking-widest uppercase border border-white/20 rounded-full bg-white/10 backdrop-blur-sm">
            Handled With Precision
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Heavy & Specialty Items
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto"
        >
          Moving oversized and high-value items requires more than strength — it requires expertise, precision, and the right equipment.
        </motion.p>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 text-left">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-neutral-200 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ============================= */}
      {/* CURVE BOTTOM */}
      {/* ============================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[40px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

    </section>
  )
}
