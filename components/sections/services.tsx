import ResidentialService from "./ResidentialService"
import CommercialService from "./CommercialService"
import HeavySpecialtyItems from "./HeavySpecialtyItems"
import LongDistanceSection from "./LongDistanceSection"

export default function OurServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 text-white"
    >

      {/* ========================= */}
      {/* TOP BLOCK WITH BACKGROUND */}
      {/* ========================= */}
      <div className="relative pt-32 pb-32 md:pt-32 md:pb-32 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/services-bg.jpg"
            alt="Moving boxes and truck"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-center -top-20 md:-top-20">

          <p className="text-xs sm:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase text-neutral-300 mb-4 md:mb-6">
            Our Services
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            No Fine Print.
            <br />
            No Surprises.
          </h2>

          <div className="relative mt-6 md:mt-0 md:top-20">

            <p className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-4xl font-medium text-neutral-200">
              Everything Included. Clear Pricing From Day One.
            </p>

            <p className="mt-6 md:mt-10 text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Materials. Disassembly. Full Equipment.
              <br className="hidden sm:block" />
              Owner On-Site. Zero Stress. Guaranteed.
            </p>

          </div>

        </div>

        {/* GOLD CURVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 40"
            className="w-full h-[4px] md:h-[5px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
              fill="#746b19"
            />
          </svg>
        </div>

      </div>

      {/* ========================= */}
      {/* SERVICES BLOCKS */}
      {/* ========================= */}

      <div className="bg-neutral-950">
        <ResidentialService />
      </div>

      <div className="bg-neutral-950">
        <CommercialService />
      </div>

      <div className="bg-neutral-950">
        <HeavySpecialtyItems />
      </div>

      <div>
        <LongDistanceSection />
      </div>

    </section>
  )
}
