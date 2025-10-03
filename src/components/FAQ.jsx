import React, { useState } from 'react'

function FAQItem({ q, a, index, isDefaultOpen = false }) {
  const [open, setOpen] = useState(isDefaultOpen)
  const panelId = `faq-panel-${index}`
  const btnId = `faq-button-${index}`
  return (
    <div className="border-b border-gray-200">
      <button
        id={btnId}
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between px-4 py-3 text-left ${open ? 'bg-carbon text-white' : 'text-carbon'}`}
      >
        <span className="font-medium">{q}</span>
        <span className={`ml-4 text-xl ${open ? 'text-white' : 'text-gray-500'}`} aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`${open ? 'px-4 pb-4 pt-3' : 'hidden'} text-sm text-gray-700`}
      >
        {a}
      </div>
    </div>
  )
}

export default function FAQ({ items = [], defaultOpenIndex = -1 }) {
  return (
    <div className="divide-y divide-transparent">
      {items.map((it, idx) => (
        <FAQItem key={idx} index={idx} q={it.q} a={it.a} isDefaultOpen={idx === defaultOpenIndex} />
      ))}
    </div>
  )
}
