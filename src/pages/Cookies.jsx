import React from 'react'
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'

export default function Cookies() {
  return (
    <main>
      <SEO title="Cookies" description="Política de cookies del sitio." />
      <section className="py-12">
        <Container>
          <h1 className="font-display text-3xl font-semibold text-carbon">Cookies</h1>
          <div className="prose prose-gray max-w-none">
            <p>Este sitio de ejemplo utiliza cookies técnicas para su funcionamiento.</p>
          </div>
        </Container>
      </section>
    </main>
  )
}
