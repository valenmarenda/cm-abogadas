import React from 'react'

export default function Testimonial({ quote, author, role }) {
  return (
    <figure className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <blockquote className="text-gray-800">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-gray-600">
        <span className="font-medium text-gray-900">{author}</span> · {role}
      </figcaption>
    </figure>
  )
}
