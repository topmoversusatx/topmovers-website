"use client"

import { useMemo, useState, useRef } from "react"
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
  const cardRef = useRef<HTMLDivElement>(null)

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

  const submit = () => setStep(3)

  /* =========================
     SPOTLIGHT EFFECT
  ========================== */

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    cardRef.current.style.setProperty("--x", `${x}px`)
    cardRef.current.style.setProperty("--y", `${y}px`)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md"
            onClick={close}
          />

          {/* CENTER WRAPPER */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
            {/* HALO */}
            <div className="absolute w-[900px] h-[900px] bg-white/5 rounded-full blur-[180px]" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-2xl h-[580px]"
            >
              <div className="relative flex flex-col h-full rounded-[32px] overflow-hidden">
                {/* OUTER GLOW */}
                <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-xl opacity-40" />

                {/* MAIN CARD */}
                <div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  className="relative flex flex-col h-full rounded-[32px]
                             border border-white/10
                             shadow-[0_40px_120px_rgba(0,0,0,0.9)]
                             backdrop-blur-xl
                             overflow-hidden"
                  style={{
                    background: `
                      radial-gradient(
                        600px circle at var(--x, 50%) var(--y, 50%),
                        rgba(0,120,255,0.15),
                        transparent 40%
                      ),
                      linear-gradient(
                        to bottom,
                        #171717,
                        #0a0a0a
                      )
                    `,
                  }}
                >
                  {/* HEADER */}
                  <div className="flex items-center justify-between px-8 py-6">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={120}
                      height={40}
                      priority
                    />

                    <button
                      onClick={close}
                      className="rounded-full p-2 hover:bg-white/10 transition"
                    >
                      <X className="h-5 w-5 text-white/70" />
                    </button>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="px-8">
                    <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
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
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </div>

                  {/* BODY */}
                  <div className="flex-1 px-10 py-10 overflow-y-auto">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <h3 className="text-3xl font-semibold">
                            Let’s plan your move.
                          </h3>

                          <p className="mt-3 text-white/50 text-sm">
                            Just a few details to get started — it takes less than a minute.
                          </p>

                          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                              label="Full Name"
                              value={s1.fullName}
                              onChange={(v) =>
                                setS1((p) => ({ ...p, fullName: v }))
                              }
                            />

                            <Input
                              label="Phone Number"
                              value={s1.phone}
                              onChange={(v) =>
                                setS1((p) => ({ ...p, phone: v }))
                              }
                            />

                            <Input
                              label="Moving From"
                              value={s1.from}
                              onChange={(v) =>
                                setS1((p) => ({ ...p, from: v }))
                              }
                            />

                            <Input
                              label="Moving To"
                              value={s1.to}
                              onChange={(v) =>
                                setS1((p) => ({ ...p, to: v }))
                              }
                            />
                          </div>

                          <div className="mt-12 flex justify-end">
                            <button
                              disabled={!canContinue1}
                              onClick={() => setStep(2)}
                              className="rounded-full bg-white text-black px-8 py-3 font-semibold
                                         hover:scale-[1.02] active:scale-[0.98]
                                         transition disabled:opacity-30"
                            >
                              Continue
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <h3 className="text-3xl font-semibold">
                            Almost there.
                          </h3>

                          <p className="mt-3 text-white/50 text-sm">
                            Help us prepare the perfect move for you.
                          </p>

                          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                              label="Email Address"
                              value={s2.email}
                              onChange={(v) =>
                                setS2((p) => ({ ...p, email: v }))
                              }
                            />

                            <Input
                              label="Preferred Moving Date"
                              type="date"
                              value={s2.date}
                              onChange={(v) =>
                                setS2((p) => ({ ...p, date: v }))
                              }
                            />
                          </div>

                          <div className="mt-8">
                            <Textarea
                              label="Anything we should know?"
                              value={s2.details}
                              onChange={(v) =>
                                setS2((p) => ({ ...p, details: v }))
                              }
                            />
                          </div>

                          <div className="mt-12 flex justify-between items-center">
                            <button
                              onClick={() => setStep(1)}
                              className="text-white/60 hover:text-white transition"
                            >
                              Back
                            </button>

                            <button
                              disabled={!canContinue2}
                              onClick={submit}
                              className="rounded-full bg-white text-black px-8 py-3 font-semibold
                                         hover:scale-[1.02] active:scale-[0.98]
                                         transition disabled:opacity-30"
                            >
                              Secure My Move
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex flex-col items-center justify-center h-full text-center"
                        >
                          <CheckCircle2 className="h-14 w-14 text-white" />

                          <h3 className="mt-6 text-3xl font-semibold">
                            You’re booked in.
                          </h3>

                          <button
                            onClick={close}
                            className="mt-12 rounded-full bg-white text-black px-8 py-3 font-semibold
                                       hover:scale-[1.02] active:scale-[0.98]
                                       transition"
                          >
                            Done
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

/* =========================
   INPUT COMPONENT
========================= */

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-white/40 mb-3">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white
                   outline-none transition
                   focus:border-white/30 focus:bg-white/10"
      />
    </label>
  )
}

/* =========================
   TEXTAREA COMPONENT
========================= */

function Textarea({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-white/40 mb-3">
        {label}
      </span>
      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white
                   outline-none resize-none transition
                   focus:border-white/30 focus:bg-white/10"
      />
    </label>
  )
}
