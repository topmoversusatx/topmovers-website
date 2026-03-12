"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

// ─────────────────────────────────────────────
// Each item now has an id for schema linking
// and potential deep anchor references.
// Descriptions are SEO-rich and keyword-aware.
// ─────────────────────────────────────────────
const items = [
  {
    id: "piano-movers-austin",
    title: "Pianos",
    description:
      "Upright and grand pianos moved with specialized piano dollies, protective padding, and experienced handlers to ensure complete safety throughout your Austin move.",
  },
  {
    id: "gun-safe-movers-austin",
    title: "Gun Safes",
    description:
      "Heavy-duty gun safes transported securely using reinforced equipment, proper weight distribution techniques, and full floor protection — handled with care in Austin and surrounding areas.",
  },
  {
    id: "pool-table-movers-austin",
    title: "Pool Tables",
    description:
      "Professional disassembly, transport, and precision re-leveling so your pool table plays perfectly in its new Austin home.",
  },
  {
    id: "gym-equipment-movers-austin",
    title: "Gym Equipment",
    description:
      "Large treadmills, squat racks, and home gym systems carefully disassembled, transported, and reassembled safely across the Austin metro area.",
  },
]

export default function HeavySpecialtyItems() {
  const { openModal } = useQuoteModal()

  return (
    <section
      id="specialty-item-moving"
      aria-label="Heavy and Specialty Item Moving in Austin TX"
      className="relative py-20 md:py-32 text-white overflow-hidden"
    >

      {/* ============================= */}
      {/* BACKGROUND IMAGE              */}
      {/* — CSS background replaced by  */}
      {/*   <picture> for AVIF/WebP,    */}
      {/*   alt text, lazy loading,     */}
      {/*   and proper SEO indexing     */}
      {/* ============================= */}

      {/* Mobile */}
      <picture className="absolute inset-0 block md:hidden w-full h-full">
        <source srcSet="/heavy-specialty-bg-mobile.avif" type="image/avif" />
        <source srcSet="/heavy-specialty-bg-mobile.webp" type="image/webp" />
        <img
          src="/heavy-specialty-bg-mobile.avif"
          alt="Specialty movers carefully transporting a piano during a move in Austin TX"
          className="w-full h-full object-cover object-top"
          loading="lazy"
          decoding="async"
          width={768}
          height={1024}
        />
      </picture>

      {/* Desktop */}
      <picture className="absolute inset-0 hidden md:block w-full h-full">
        <source srcSet="/heavy-specialty-bg.avif" type="image/avif" />
        <source srcSet="/heavy-specialty-bg.webp" type="image/webp" />
        <img
          src="/heavy-specialty-bg.avif"
          alt="Professional movers transporting a piano and heavy safe during specialty item relocation in Austin TX"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
        />
      </picture>

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
        }}
      />

      {/* CURVE TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[45px]"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#0a0a0a" />
        </svg>
      </div>

      {/* ============================= */}
      {/* CONTENT                       */}
      {/* ============================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-4"
        >
          Specialty Item Moving — Austin, TX
        </motion.p>

        {/* H2 — keyword: specialty item movers Austin TX */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold tracking-tight"
        >
          Heavy &amp; Specialty Item Movers
          <br />
          in Austin, TX
        </motion.h2>

        {/* Subheadline — improved copy + keyword-rich */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-6 text-sm md:text-xl text-neutral-200 max-w-2xl mx-auto"
        >
          Moving oversized and high-value items like pianos, gun safes, and pool tables
          requires specialized equipment, experience, and precision handling — not just strength.
        </motion.p>

        {/* 
          SEO support paragraph — visible, indexable
          Covers: brand + city + all 4 item types
          Helps AI Search extract a direct answer
        */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-xs md:text-sm text-neutral-400 max-w-2xl mx-auto"
        >
          Our team specializes in moving heavy and specialty items including pianos,
          gun safes, pool tables, and large gym equipment throughout Austin, TX and
          the greater Austin area.
        </motion.p>

        {/* Item Cards — 2x2 grid */}
        <div className="mt-10 md:mt-16 grid grid-cols-2 gap-4 md:gap-10 text-left">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-base md:text-2xl font-semibold mb-2 md:mb-4">
                {item.title}
              </h3>
              <p className="text-xs md:text-base text-neutral-200 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA + micro urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              onClick={openModal}
              aria-label="Get a free specialty item moving quote in Austin TX"
              className="
                px-8 py-6 text-base font-semibold rounded-2xl
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                active:scale-[0.98]
              "
            >
              Get a Specialty Moving Quote
            </Button>
          </motion.div>
          <p className="text-xs text-neutral-400">Free quotes available today.</p>
        </motion.div>

        {/* AI Search extraction — sr-only */}
        <p className="sr-only">
          Top Movers USA TX provides specialty item moving services in Austin, TX
          including piano moving, gun safe transport, pool table relocation, and
          heavy gym equipment moving — handled with specialized tools and experienced
          movers throughout the greater Austin area.
        </p>

      </div>

      {/* CURVE BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[40px]"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#0a0a0a" />
        </svg>
      </div>

    </section>
  )
}
