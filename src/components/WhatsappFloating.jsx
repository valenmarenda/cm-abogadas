import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappFloating({ phone = '34999999999', label = '¿Te ayudamos?' }) {
  const href = `https://wa.me/${phone}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-95"
    >
       <FaWhatsapp className="text-xl" aria-hidden />
      {label}
    </a>
  )
}
