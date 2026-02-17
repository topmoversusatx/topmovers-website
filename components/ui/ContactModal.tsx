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
  const [loading, setLoading] = useState(false)
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

  const submit = async () => {
    try {
      setLoading(true)

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...s1,
          ...s2,
        }),
      })

      if (!res.ok) throw new Error("Failed")

      setStep(3)
    } catch (err) {
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md"
            onClick={close}
          />

          <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl h-[580px]"
            >
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="relative flex flex-col h-full rounded-[32px]
                           border border-white/10
                           shadow-[0_40px_120px_rgba(0,0,0,0.9)]
                           backdrop-blur-xl
                           overflow-hidden bg-neutral-900"
              >
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

                <div className="flex-1 px-10 py-10 overflow-y-auto text-white">
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

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input
                            label="Full Name"
                            value={s1.fullName}
                            onChange={(value: string) =>
                              setS1((p) => ({ ...p, fullName: value }))
                            }
                          />

                          <Input
                            label="Phone Number"
                            value={s1.phone}
                            onChange={(value: string) =>
                              setS1((p) => ({ ...p, phone: value }))
                            }
                          />

                          <Input
                            label="Moving From"
                            value={s1.from}
                            onChange={(value: string) =>
                              setS1((p) => ({ ...p, from: value }))
                            }
                          />

                          <Input
                            label="Moving To"
                            value={s1.to}
                            onChange={(value: string) =>
                              setS1((p) => ({ ...p, to: value }))
                            }
                          />
                        </div>

                        <div className="mt-12 flex justify-end">
                          <button
                            disabled={!canContinue1}
                            onClick={() => setStep(2)}
                            className="rounded-full bg-white text-black px-8 py-3 font-semibold disabled:opacity-30"
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

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input
                            label="Email Address"
                            value={s2.email}
                            onChange={(value: string) =>
                              setS2((p) => ({ ...p, email: value }))
                            }
                          />

                          <Input
                            label="Preferred Moving Date"
                            type="date"
                            value={s2.date}
                            onChange={(value: string) =>
                              setS2((p) => ({ ...p, date: value }))
                            }
                          />
                        </div>

                        <div className="mt-8">
                          <Textarea
                            label="Anything we should know?"
                            value={s2.details}
                            onChange={(value: string) =>
                              setS2((p) => ({ ...p, details: value }))
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
                            disabled={!canContinue2 || loading}
                            onClick={submit}
                            className="rounded-full bg-white text-black px-8 py-3 font-semibold disabled:opacity-30"
                          >
                            {loading ? "Sending..." : "Secure My Move"}
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
                          className="mt-12 rounded-full bg-white text-black px-8 py-3 font-semibold"
                        >
                          Done
                        </button>
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

/* INPUT */

type InputProps = {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
}

function Input({ label, value, onChange, type = "text" }: InputProps) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-white/40 mb-3">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none transition focus:border-white/30 focus:bg-white/10"
      />
    </label>
  )
}

/* TEXTAREA */

type TextareaProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

function Textarea({ label, value, onChange }: TextareaProps) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-white/40 mb-3">
        {label}
      </span>
      <textarea
        rows={4}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none resize-none transition focus:border-white/30 focus:bg-white/10"
      />
    </label>
  )
}
