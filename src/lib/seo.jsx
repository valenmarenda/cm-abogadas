import React from 'react'
import { Helmet } from 'react-helmet-async'

export function SEO({ title, description, children, jsonLd }) {
  const siteName = 'Estudio Legal'
  const computedTitle = title ? `${title} | ${siteName}` : siteName
  return (
    <>
      <Helmet>
        {computedTitle && <title>{computedTitle}</title>}
        {description && <meta name="description" content={description} />}
      </Helmet>
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}
      {children}
    </>
  )
}

export default SEO
