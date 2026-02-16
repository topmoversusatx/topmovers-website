import ResidentialService from "./ResidentialService"
import CommercialService from "./CommercialService"
import HeavySpecialtyItems from "./HeavySpecialtyItems"
import LongDistanceSection from "./LongDistanceSection"

export default function OurServicesSection() {
  return (
    <section className="text-white">

      {/* ========================= */}
      {/* TOP BLOCK WITH BACKGROUND */}
      {/* ========================= */}
      <div className="relative py-32 overflow-hidden">

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
        <div className="relative max-w-6xl mx-auto px-6 text-center top-[-80px]">

          <p className="text-sm tracking-[0.3em] uppercase text-neutral-300 mb-6">
            Our Services
          </p>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            No Fine Print.
            <br />
            No Surprises.
          </h2>

          <div className="relative top-[80px]">
            <p className="mt-8 text-3xl md:text-4xl font-medium text-neutral-200">
              Everything Included. Clear Pricing From Day One.
            </p>

            <p className="mt-10 text-neutral-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Materials. Disassembly. Full Equipment.
              <br />
              Owner On-Site. Zero Stress. Guaranteed.
            </p>
          </div>

        </div>

        {/* GOLD CURVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 40"
            className="w-full h-[5px]"
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
      {/* RESIDENTIAL SECTION */}
      {/* ========================= */}
      <div className="bg-neutral-950">
        <ResidentialService />
      </div>

      {/* ========================= */}
      {/* COMMERCIAL SECTION */}
      {/* ========================= */}
      <div className="bg-neutral-950">
        <CommercialService />
      </div>

      {/* ========================= */}
      {/* HEAVY & SPECIALTY SECTION */}
      {/* ========================= */}
      <div className="bg-neutral-950">
        <HeavySpecialtyItems />
      </div>

      {/* ========================= */}
      {/* LONG DISTANCE - GRAND FINALE */}
      {/* ========================= */}
      <div>
        <LongDistanceSection />
      </div>

    </section>
  )
}
