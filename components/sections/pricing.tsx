"use client"

import { motion } from "framer-motion"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const { openModal } = useQuoteModal()

  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white pt-32 pb-20 md:py-28 px-4 md:px-6">

      
      {/* TOP FADE TRANSITION */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Simple. Transparent. Fair.
          </h2>
          <p className="text-zinc-400 mt-3 md:mt-4 text-base md:text-lg">
            No hidden fees. No surprises. Just honest pricing.
          </p>
        </div>

        {/* HOURLY PLANS */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {[
            {
              title: "Basic Move",
              price: "$120",
              subtitle: "Perfect for small apartments",
              features: [
                "2 Professional Movers",
                "Moving Truck Included",
                "Basic Equipment",
                "Loading & Unloading",
              ],
            },
            {
              title: "Standard Move",
              price: "$160",
              subtitle: "Most Popular",
              features: [
                "3 Professional Movers",
                "Furniture Protection",
                "Disassembly & Reassembly",
                "Floor Protection",
              ],
              highlight: true,
            },
            {
              title: "Premium Move",
              price: "$220",
              subtitle: "For larger homes",
              features: [
                "4 Professional Movers",
                "Full Furniture Wrapping",
                "Priority Scheduling",
                "Insurance Coverage",
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 md:p-8 border transition duration-300 ${
                plan.highlight
                  ? "bg-zinc-900 border-primary shadow-[0_0_40px_rgba(234,179,8,0.25)]"
                  : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {plan.title}
              </h3>

              {plan.highlight && (
                <span className="inline-block mb-3 md:mb-4 px-3 py-1 text-xs md:text-sm bg-primary/20 text-primary rounded-full font-medium">
                  Most Popular
                </span>
              )}

              <div className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                {plan.price}
                <span className="text-sm md:text-lg text-zinc-400">
                  {" "}
                  / hour
                </span>
              </div>

              <p className="text-zinc-400 text-sm md:text-base mb-4 md:mb-6">
                {plan.subtitle}
              </p>

              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-zinc-300 mb-6 md:mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  className="
                    w-full py-4 md:py-6 text-sm md:text-base font-semibold
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:shadow-[0_0_30px_rgba(234,179,8,0.35)]
                    active:scale-[0.98]
                  "
                  onClick={openModal}
                >
                  Book Now
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* PROMOTION BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900 border border-primary rounded-3xl p-8 md:p-12 text-center shadow-[0_0_60px_rgba(234,179,8,0.2)]"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-xs md:text-sm font-bold rounded-full">
            LIMITED OFFER
          </span>

          <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Apartment to Apartment Special
          </h3>

          <div className="text-5xl md:text-6xl font-extrabold mb-4 md:mb-6 text-primary">
            $500
          </div>

          <p className="text-sm md:text-base text-zinc-400 mb-6 md:mb-8 max-w-2xl mx-auto">
            Flat rate for 2-bedroom apartment moves under 20 miles. Loading,
            unloading, and furniture protection included. No hidden fees.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="
                px-8 md:px-10 py-4 md:py-6 text-base md:text-lg font-bold
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(234,179,8,0.4)]
                active:scale-[0.98]
              "
              onClick={openModal}
            >
              Claim This Offer
            </Button>
          </motion.div>

          <p className="text-xs text-zinc-500 mt-4 md:mt-6">
            Valid for standard apartment moves only. Additional services may
            affect pricing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
