import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, to }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow">
      <div className="flex items-center gap-3">
        <div aria-hidden className="h-10 w-10 rounded-md bg-primary/10" />
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-gray-600 flex-1">{description}</p>
      {to && (
        <Link to={to} className="mt-4 inline-flex text-sm font-medium text-primary hover:underline">
          Ver más
        </Link>
      )}
    </div>
  )
}
