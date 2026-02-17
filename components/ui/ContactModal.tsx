"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, CheckCircle2 } from "lucide-react"
import Image from "next/image"

type Step1 = {
  fullName: string
  phone: string
  from: string
  to: string
}

type Step2 = {
  email: string
  date: string
  details: string
}

type ContactModalProps = {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [loading, setLoading] = useState(false)

  const [s1, setS1] = useState<Step1>({
    fullName: "",
    phone: "",
    from: "",
    to: "",
  })

  const [s2, setS2] = useState<Step2>({
    email: "",
    date: "",
    details: "",
  })

  const canContinue1 = useMemo(() => {
    return (
      s1.fullName.trim().length >= 2 &&
      s1.phone.trim().length >= 7 &&
      s1.from.trim().length >= 2 &&
      s1.to.trim().length >= 2
    )
  }, [s1])

  const canContinue2 = useMemo(() => {
    return s2.email.trim().includes("@") && s2.date.trim().length > 0
  }, [s2])

  const reset = () => {
    setStep(1)
    setS1({ fullName: "", phone: "", from: "", to: "" })
    setS2({ email: "", date: "", details: "" })
  }

  const close = () => {
    reset()
    onClose()
  }

  const submit = async () => {
    try {
      setLoading(true)

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...s1, ...s2 }),
      })

      if (!res.ok) throw new Error("Failed")

      setStep(3)
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl"
            onClick={close}
          />

          <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-2xl h-[580px]"
            >
              <div
                className="relative flex flex-col h-full rounded-[36px]
                           border border-white/15
                           shadow-[0_60px_180px_rgba(0,0,0,0.95)]
                           backdrop-blur-2xl
                           overflow-hidden
                           bg-gradient-to-b from-black via-neutral-900 to-black"
              >
                {/* Cinematic glow */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-1/2 top-[35%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />
                </div>

                {/* HEADER */}
                <div className="relative flex items-center justify-between px-8 py-6">
                  <Image
                    src="/logo.png"
                    alt="Top Movers USA"
                    width={120}
                    height={40}
                    priority
                  />
                  <button
                    onClick={close}
                    className="rounded-full p-2 hover:bg-white/10 transition"
                  >
                    <X className="h-5 w-5 text-white/60" />
                  </button>
                </div>

                {/* PROGRESS BAR */}
                <div className="px-8">
                  <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      animate={{
                        width:
                          step === 1
                            ? "33%"
                            : step === 2
                            ? "66%"
                            : "100%",
                      }}
                      transition={{ duration: 0.4 }}
                      className="h-full bg-[#ffd21e]"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 px-10 py-6 text-white relative">
                  <AnimatePresence mode="wait">

                    {/* STEP 1 */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h3 className="text-4xl font-semibold tracking-tight">
                          Tell Us About Your Move.
                        </h3>
                        <p className="mt-3 text-white/40 text-sm">
                          Licensed. Insured. Austin-based.
                        </p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input label="Full Name" value={s1.fullName} onChange={(v)=>setS1(p=>({...p,fullName:v}))}/>
                          <Input label="Phone Number" value={s1.phone} onChange={(v)=>setS1(p=>({...p,phone:v}))}/>
                          <Input label="Moving From" value={s1.from} onChange={(v)=>setS1(p=>({...p,from:v}))}/>
                          <Input label="Moving To" value={s1.to} onChange={(v)=>setS1(p=>({...p,to:v}))}/>
                        </div>

                        <div className="mt-10 flex justify-end">
                          <BrandButton disabled={!canContinue1} onClick={()=>setStep(2)}>
                            Continue
                          </BrandButton>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h3 className="text-4xl font-semibold tracking-tight">
                          Lock In The Details.
                        </h3>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input label="Email Address" value={s2.email} onChange={(v)=>setS2(p=>({...p,email:v}))}/>
                          <Input type="date" label="Preferred Moving Date" value={s2.date} onChange={(v)=>setS2(p=>({...p,date:v}))}/>
                        </div>

                        <div className="mt-6">
                          <Textarea label="Anything we should know?" value={s2.details} onChange={(v)=>setS2(p=>({...p,details:v}))}/>
                        </div>

                        <div className="mt-10 flex justify-between items-center">
                          <button
                            onClick={()=>setStep(1)}
                            className="text-white/50 hover:text-white transition"
                          >
                            Back
                          </button>

                          <BrandButton disabled={!canContinue2 || loading} onClick={submit}>
                            {loading ? "Sending..." : "Secure My Move"}
                          </BrandButton>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center h-full text-center"
                      >
                        <CheckCircle2 className="h-16 w-16 text-[#ffd21e]" />
                        <h3 className="mt-6 text-4xl font-semibold">
                          You're Scheduled.
                        </h3>
                        <p className="mt-3 text-white/40 text-sm">
                          A moving specialist will contact you shortly.
                        </p>

                        <BrandButton onClick={close} className="mt-10">
                          Done
                        </BrandButton>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

/* BRAND BUTTON */

function BrandButton({ children, disabled, onClick, className="" }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full bg-[#ffd21e] text-black 
                 px-10 py-4 font-semibold tracking-wide
                 transition-all duration-300
                 hover:brightness-110
                 shadow-[0_10px_30px_rgba(255,210,30,0.35)]
                 disabled:opacity-30 disabled:shadow-none
                 ${className}`}
    >
      {children}
    </motion.button>
  )
}

/* INPUT */

function Input({ label, value, onChange, type="text" }: any) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-white/40 mb-3">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        className="w-full rounded-2xl bg-black/40 border border-white/15
                   px-5 py-4 text-white outline-none transition
                   focus:border-[#ffd21e] focus:ring-1 focus:ring-[#ffd21e]/40"
      />
    </label>
  )
}

/* TEXTAREA */

function Textarea({ label, value, onChange }: any) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-white/40 mb-3">
        {label}
      </span>
      <textarea
        rows={4}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        className="w-full rounded-2xl bg-black/40 border border-white/15
                   px-5 py-4 text-white outline-none resize-none transition
                   focus:border-[#ffd21e] focus:ring-1 focus:ring-[#ffd21e]/40"
      />
    </label>
  )
}
