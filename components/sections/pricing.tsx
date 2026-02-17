"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const { openModal } = useQuoteModal()

  const plans = [
    {
      title: "Basic Move",
      price: "$120",
      subtitle: "Small apartments",
      features: [
        "2 Movers",
        "Truck Included",
        "Basic Equipment",
        "Loading & Unloading",
      ],
    },
    {
      title: "Standard Move",
      price: "$160",
      subtitle: "Most Popular",
      features: [
        "3 Movers",
        "Furniture Protection",
        "Disassembly",
        "Floor Protection",
      ],
      highlight: true,
    },
    {
      title: "Premium Move",
      price: "$220",
      subtitle: "Larger homes",
      features: [
        "4 Movers",
        "Full Wrapping",
        "Priority Scheduling",
        "Insurance Coverage",
      ],
      full: true,
    },
  ]

  return (
    <section
      id="pricing"
      className="scroll-mt-24 relative bg-gradient-to-b from-black via-zinc-950 to-black text-white pt-14 pb-16 md:py-28 px-4 md:px-6"
    >

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-14 md:h-24 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight leading-tight">
            Simple. Transparent. Fair.
          </h2>
          <p className="text-zinc-400 mt-2 md:mt-4 text-sm md:text-lg">
            No hidden fees. No surprises.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mb-14 md:mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                rounded-2xl border p-4 md:p-8 transition duration-300 backdrop-blur-sm
                ${plan.highlight
                  ? "bg-zinc-900/95 border-primary shadow-[0_0_50px_rgba(234,179,8,0.35)] scale-[1.04] md:scale-100 z-10"
                  : "bg-zinc-900/80 border-zinc-800"
                }
                ${plan.full ? "col-span-2 md:col-span-1 mt-2 md:mt-0" : ""}
              `}
            >
              <h3 className="text-base md:text-2xl font-semibold mb-1">
                {plan.title}
              </h3>

              {plan.highlight && (
                <span className="inline-block mb-2 px-2 py-0.5 text-[9px] md:text-sm bg-primary/20 text-primary rounded-full font-medium tracking-wide">
                  MOST POPULAR
                </span>
              )}

              <div className="text-2xl md:text-4xl font-bold mb-2 tracking-tight">
                {plan.price}
                <span className="text-[10px] md:text-lg text-zinc-400 font-medium">
                  {" "}
                  / hr
                </span>
              </div>

              <p className="text-zinc-400 text-[10px] md:text-base mb-3">
                {plan.subtitle}
              </p>

              <ul className="space-y-1 text-[10px] md:text-base text-zinc-300 mb-4 md:mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="text-primary">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  className="
                    w-full py-2 md:py-6 text-[11px] md:text-base font-semibold
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:shadow-[0_0_30px_rgba(234,179,8,0.35)]
                  "
                  onClick={openModal}
                >
                  Book
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* PROMO BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900/95 border border-primary rounded-3xl p-6 md:p-12 text-center shadow-[0_0_70px_rgba(234,179,8,0.25)] backdrop-blur-sm"
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-black text-[10px] md:text-sm font-bold rounded-full tracking-wide">
            LIMITED OFFER
          </span>

          <h3 className="text-xl md:text-4xl font-bold mb-3 md:mb-6">
            Apartment to Apartment Special
          </h3>

          <div className="text-5xl md:text-6xl font-extrabold mb-3 md:mb-6 text-primary tracking-tight">
            $500
          </div>

          <p className="text-xs md:text-base text-zinc-400 mb-4 md:mb-8 max-w-2xl mx-auto">
            Flat rate for 2-bedroom apartment moves under 20 miles.
          </p>

          <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
            <Button
              size="lg"
              className="
                px-6 md:px-10 py-3 md:py-6 text-sm md:text-lg font-bold
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(234,179,8,0.4)]
              "
              onClick={openModal}
            >
              Claim This Offer
            </Button>
          </motion.div>

          <p className="text-[10px] md:text-xs text-zinc-500 mt-3 md:mt-6">
            Valid for standard apartment moves only.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
