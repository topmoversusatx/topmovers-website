"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import ContactModal from "@/components/ui/ContactModal"

type QuoteModalContextType = {
  openModal: () => void
  closeModal: () => void
}

const QuoteModalContext = createContext<QuoteModalContextType | null>(null)

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <QuoteModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal open={open} onClose={closeModal} />
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext)
  if (!context) throw new Error("useQuoteModal must be used inside QuoteModalProvider")
  return context
}
